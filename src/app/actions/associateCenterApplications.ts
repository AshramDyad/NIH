'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { deleteFromR2 } from '@/lib/r2-client';

/**
 * Associate Center Application Type Definition
 * Matches database schema
 */
export type AssociateCenterApplication = {
    readonly id: string;
    readonly hospital_name: string;
    readonly full_address: string;
    readonly district: string;
    readonly state: string;
    readonly phone_number: string;
    readonly email: string;
    readonly website: string | null;
    readonly administrator_name: string;
    readonly doctor_name: string;
    readonly phone_no: string;
    readonly hospital_opening_hour: string;
    readonly weekly_holidays: string[] | null; // Array of selected days
    readonly special_features: string | null;
    readonly other_information: string | null;
    readonly logo_url: string;
    readonly status: 'pending' | 'approved' | 'rejected';
    readonly institution_id: number | null;
    readonly rejection_reason: string | null;
    readonly created_at: string;
    readonly updated_at: string;
};

/**
 * Action result type
 */
type ActionResult = {
    success: boolean;
    message: string;
};

/**
 * Type for updating Associate Center application
 */
export type UpdateAssociateCenterData = {
    hospitalName: string;
    fullAddress: string;
    district: string;
    state: string;
    phoneNumber: string;
    email: string;
    website?: string | null;
    administratorName: string;
    doctorName: string;
    phoneNo: string;
    hospitalOpeningHour: string;
    weeklyHolidays: string[]; // Array of selected days
    specialFeatures?: string | null;
    otherInformation?: string | null;
    logoUrl?: string;
};

/**
 * Get all Associate Center applications
 * Optionally filter by status
 */
export async function getAssociateCenterApplications(
    status?: 'pending' | 'approved' | 'rejected' | 'all'
): Promise<AssociateCenterApplication[]> {
    const supabase = await createClient();

    let query = supabase
        .from('associate_center_applications')
        .select('*')
        .order('created_at', { ascending: false });

    // Filter by status if provided and not 'all'
    if (status && status !== 'all') {
        query = query.eq('status', status);
    }

    const { data: applications, error } = await query;

    if (error) {
        console.error('Error fetching Associate Center applications:', error);
        return [];
    }

    return (applications as AssociateCenterApplication[]) || [];
}

/**
 * Get a single Associate Center application by ID
 */
export async function getAssociateCenterApplicationById(
    id: string
): Promise<AssociateCenterApplication | null> {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('associate_center_applications')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error('Error fetching Associate Center application:', error);
        return null;
    }

    return data as AssociateCenterApplication;
}

/**
 * Approve an Associate Center application
 * Copies data to institution_members table
 */
export async function approveAssociateCenterApplication(
    applicationId: string
): Promise<ActionResult> {
    const supabase = await createClient();

    try {
        // Get the application data
        const { data: application, error: fetchError } = await supabase
            .from('associate_center_applications')
            .select('*')
            .eq('id', applicationId)
            .single();

        if (fetchError || !application) {
            console.error('Error fetching application:', fetchError);
            return {
                success: false,
                message: 'Application not found',
            };
        }

        // Check if already approved
        if (application.status === 'approved') {
            return {
                success: false,
                message: 'Application is already approved',
            };
        }

        // Insert into institution_members table
        const { data: institutionMember, error: memberInsertError } = await supabase
            .from('institution_members')
            .insert({
                name: application.hospital_name,
                address: application.full_address,
                url: application.website || '', // Use website
                image_url: application.logo_url,
            })
            .select('id')
            .single();

        if (memberInsertError || !institutionMember) {
            console.error('Error inserting institution member:', memberInsertError);
            return {
                success: false,
                message: 'Failed to add to institution members',
            };
        }

        // Update application status
        const { error: updateError } = await supabase
            .from('associate_center_applications')
            .update({
                status: 'approved',
                institution_id: institutionMember.id,
                updated_at: new Date().toISOString(),
            })
            .eq('id', applicationId);

        if (updateError) {
            console.error('Error updating application status:', updateError);
            return {
                success: false,
                message: 'Institution added but failed to update application status',
            };
        }

        // Revalidate paths
        revalidatePath('/admin/associate-centers');
        revalidatePath('/admin/members-institutions');
        revalidatePath('/members/institutions');

        return {
            success: true,
            message: 'Application approved successfully',
        };
    } catch (error) {
        console.error('Unexpected error approving application:', error);
        return {
            success: false,
            message: 'An unexpected error occurred',
        };
    }
}

/**
 * Update an Associate Center application
 * Synchronizes changes to institution_members if approved
 */
export async function updateAssociateCenterApplication(
    id: string,
    data: UpdateAssociateCenterData,
    originalInstitutionId: number | null
): Promise<ActionResult> {
    const supabase = await createClient();

    try {
        // 1. Get existing record for R2 cleanup
        const { data: existing } = await supabase
            .from('associate_center_applications')
            .select('logo_url')
            .eq('id', id)
            .single();

        // 2. Update the main application table
        const { error: updateAppError } = await supabase
            .from('associate_center_applications')
            .update({
                hospital_name: data.hospitalName,
                full_address: data.fullAddress,
                district: data.district,
                state: data.state,
                phone_number: data.phoneNumber,
                email: data.email,
                website: data.website || null,
                administrator_name: data.administratorName,
                doctor_name: data.doctorName,
                phone_no: data.phoneNo,
                hospital_opening_hour: data.hospitalOpeningHour,
                weekly_holidays: data.weeklyHolidays, // Pass array directly for JSONB
                special_features: data.specialFeatures || null,
                other_information: data.otherInformation || null,
                logo_url: data.logoUrl || undefined, // Only update if provided
                updated_at: new Date().toISOString(),
            })
            .eq('id', id);

        if (updateAppError) {
            console.error('Error updating application record:', updateAppError);
            return { success: false, message: 'Failed to update application' };
        }

        // 3. If approved, sync changes to institution_members table
        if (originalInstitutionId) {
            console.log(`Application is approved. Syncing changes to institution_members (ID: ${originalInstitutionId})...`);
            const { error: syncError } = await supabase
                .from('institution_members')
                .update({
                    name: data.hospitalName,
                    address: data.fullAddress,
                    url: data.website || '', // Use website
                    image_url: data.logoUrl || undefined, // Only update if provided
                })
                .eq('id', originalInstitutionId);

            if (syncError) {
                console.error(`Error syncing to institution ${originalInstitutionId}:`, syncError);
                // We don't return false here because the main application was updated
            }
        }

        // 4. Cleanup old logo from R2 if it changed
        if (data.logoUrl && existing?.logo_url && existing.logo_url !== data.logoUrl) {
            console.log(`Cleaning up old logo from R2: ${existing.logo_url}`);
            await deleteFromR2(existing.logo_url).catch(err =>
                console.error('Failed to delete old logo from R2 during update:', err)
            );
        }

        revalidatePath('/admin/associate-centers');
        revalidatePath('/admin/members-institutions');
        revalidatePath('/members/institutions');

        return { success: true, message: 'Application updated successfully' };
    } catch (error) {
        console.error('Unexpected error in updateAssociateCenterApplication:', error);
        return { success: false, message: 'An unexpected error occurred' };
    }
}

/**
 * Delete an Associate Center application
 * Deletes from associate_center_applications, institution_members (if approved), and R2 storage
 */
export async function deleteAssociateCenterApplication(
    applicationId: string
): Promise<ActionResult> {
    const supabase = await createClient();

    try {
        console.log(`Starting deletion process for Associate Center application: ${applicationId}`);

        // 1. Get application to get file URL and institution status
        const { data: application, error: fetchError } = await supabase
            .from('associate_center_applications')
            .select('logo_url, status, institution_id, hospital_name')
            .eq('id', applicationId)
            .single();

        if (fetchError || !application) {
            console.error('Error fetching application for deletion:', fetchError);
            return { success: false, message: 'Application not found' };
        }

        // 2. If it has a linked institution_id, delete from institution_members table first
        // We check institution_id specifically to be safe, regardless of status string
        if (application.institution_id) {
            console.log(`Application has linked institution (ID: ${application.institution_id}). Deleting from institution_members...`);
            const { error: institutionDeleteError } = await supabase
                .from('institution_members')
                .delete()
                .eq('id', application.institution_id);

            if (institutionDeleteError) {
                console.error(`Error deleting linked institution ${application.institution_id}:`, institutionDeleteError);
                // We keep going to delete the main application even if this fails
            } else {
                console.log(`Successfully deleted institution member record for ${application.hospital_name}`);
            }
        }

        // 3. Delete file from R2
        if (application.logo_url) {
            console.log(`Deleting logo from R2: ${application.logo_url}`);
            await deleteFromR2(application.logo_url);
        }

        // 4. Delete application from database
        const { error: deleteError } = await supabase
            .from('associate_center_applications')
            .delete()
            .eq('id', applicationId);

        if (deleteError) {
            console.error('Error deleting application record:', deleteError);
            return { success: false, message: 'Failed to delete application record' };
        }

        console.log(`Successfully deleted application for ${application.hospital_name}`);

        // Revalidate all related paths
        revalidatePath('/admin/associate-centers');
        revalidatePath('/admin/members-institutions');
        revalidatePath('/members/institutions');

        return {
            success: true,
            message:
                application.institution_id
                    ? 'Application and linked institution member deleted successfully'
                    : 'Application deleted successfully',
        };
    } catch (error) {
        console.error('Unexpected error in deleteAssociateCenterApplication:', error);
        return { success: false, message: 'An unexpected error occurred' };
    }
}

/**
 * Delete a logo from R2
 */
export async function deleteLogoFromR2(url: string): Promise<boolean> {
    return deleteFromR2(url);
}
