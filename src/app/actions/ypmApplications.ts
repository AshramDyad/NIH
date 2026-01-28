'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { deleteFromR2 } from '@/lib/r2-client';

/**
 * YPM Application Type Definition
 * Matches database schema
 */
export type YPMApplication = {
    readonly id: string;
    readonly first_name: string;
    readonly last_name: string;
    readonly email: string;
    readonly mobile: string;
    readonly gender: string;
    readonly country: string;
    readonly state: string;
    readonly city: string;
    readonly address: string;
    readonly pincode: string;
    readonly qualification_url: string;
    readonly photo_url: string;
    readonly referred_by_name: string | null;
    readonly referred_by_mobile: string | null;
    readonly status: 'pending' | 'approved' | 'rejected';
    readonly member_id: string | null;
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
 * Type for updating YPM application
 */
export type UpdateYPMData = {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    gender: string;
    country: string;
    state: string;
    city: string;
    address: string;
    pincode: string;
    referredByName?: string | null;
    referredByMobile?: string | null;
    memberId?: string | null;
};

/**
 * Get all YPM applications
 * Optionally filter by status
 */
export async function getYPMApplications(
    status?: 'pending' | 'approved' | 'rejected' | 'all'
): Promise<YPMApplication[]> {
    const supabase = await createClient();

    let query = supabase
        .from('ypm_applications')
        .select('*')
        .order('created_at', { ascending: false });

    // Filter by status if provided and not 'all'
    if (status && status !== 'all') {
        query = query.eq('status', status);
    }

    const { data: applications, error } = await query;

    if (error) {
        console.error('Error fetching YPM applications:', error);
        return [];
    }

    return (applications as YPMApplication[]) || [];
}

/**
 * Get a single YPM application by ID
 */
export async function getYPMApplicationById(
    id: string
): Promise<YPMApplication | null> {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('ypm_applications')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error('Error fetching YPM application:', error);
        return null;
    }

    return data as YPMApplication;
}

/**
 * Approve a YPM application
 * Requires a unique member ID
 * Copies data to yoga_naturopathy_members table
 */
export async function approveYPMApplication(
    applicationId: string,
    memberId: string
): Promise<ActionResult> {
    if (!memberId || memberId.trim() === '') {
        return {
            success: false,
            message: 'Member ID is required to approve application',
        };
    }

    const supabase = await createClient();

    try {
        // Get the application data
        const { data: application, error: fetchError } = await supabase
            .from('ypm_applications')
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

        // Insert into yoga_naturopathy_members table
        const { error: memberInsertError } = await supabase
            .from('yoga_naturopathy_members')
            .insert({
                name: `${application.first_name} ${application.last_name}`.trim(),
                member_number: memberId.trim(),
                image_url: application.photo_url,
            });

        if (memberInsertError) {
            console.error('Error inserting member:', memberInsertError);
            // Check for duplicate member number
            if (memberInsertError.code === '23505') {
                return {
                    success: false,
                    message: 'A member with this Member ID already exists',
                };
            }
            return {
                success: false,
                message: 'Failed to add member to approved list',
            };
        }

        // Update application status
        const { error: updateError } = await supabase
            .from('ypm_applications')
            .update({
                status: 'approved',
                member_id: memberId.trim(),
                updated_at: new Date().toISOString(),
            })
            .eq('id', applicationId);

        if (updateError) {
            console.error('Error updating application status:', updateError);
            return {
                success: false,
                message: 'Member added but failed to update application status',
            };
        }

        // Revalidate paths
        revalidatePath('/admin/ypm-applications');
        revalidatePath('/members/yoga-naturopathy-professional');

        return {
            success: true,
            message: `Application approved. Member ID: ${memberId}`,
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
 * Update a YPM application
 * Synchronizes changes to yoga_naturopathy_members if approved
 */
export async function updateYPMApplication(
    id: string,
    data: UpdateYPMData,
    originalMemberId: string | null
): Promise<ActionResult> {
    const supabase = await createClient();

    try {
        // 1. Update the application table
        const { error: updateError } = await supabase
            .from('ypm_applications')
            .update({
                first_name: data.firstName,
                last_name: data.lastName,
                email: data.email,
                mobile: data.mobile,
                gender: data.gender,
                country: data.country,
                state: data.state,
                city: data.city,
                address: data.address,
                pincode: data.pincode,
                referred_by_name: data.referredByName || null,
                referred_by_mobile: data.referredByMobile || null,
                member_id: data.memberId || null,
                updated_at: new Date().toISOString(),
            })
            .eq('id', id);

        if (updateError) {
            console.error('Error updating application:', updateError);
            return { success: false, message: 'Failed to update application' };
        }

        // 2. If it was approved, sync with members table
        if (originalMemberId) {
            const { error: memberUpdateError } = await supabase
                .from('yoga_naturopathy_members')
                .update({
                    name: `${data.firstName} ${data.lastName}`.trim(),
                    member_number: data.memberId?.trim() || '',
                })
                .eq('member_number', originalMemberId);

            if (memberUpdateError) {
                console.error('Error syncing member data:', memberUpdateError);
                return {
                    success: true,
                    message: 'Application updated but failed to sync with public members list'
                };
            }
        }

        revalidatePath('/admin/ypm-applications');
        revalidatePath('/members/yoga-naturopathy-professional');

        return { success: true, message: 'Application updated successfully' };
    } catch (error) {
        console.error('Unexpected error in updateYPMApplication:', error);
        return { success: false, message: 'An unexpected error occurred' };
    }
}

/**
 * Delete a YPM application (previously rejectYPMApplication)
 * Deletes from ypm_applications, yoga_naturopathy_members (if approved), and R2 storage
 */
export async function deleteYPMApplication(
    applicationId: string
): Promise<ActionResult> {
    const supabase = await createClient();

    try {
        // 1. Get application to get file URLs and member status
        const { data: application, error: fetchError } = await supabase
            .from('ypm_applications')
            .select('qualification_url, photo_url, status, member_id')
            .eq('id', applicationId)
            .single();

        if (fetchError || !application) {
            console.error('Error fetching application:', fetchError);
            return { success: false, message: 'Application not found' };
        }

        // 2. If approved, delete from members table first
        if (application.status === 'approved' && application.member_id) {
            const { error: memberDeleteError } = await supabase
                .from('yoga_naturopathy_members')
                .delete()
                .eq('member_number', application.member_id);

            if (memberDeleteError) {
                console.error('Error deleting member record:', memberDeleteError);
                // Continue anyway to try and delete the main application
            }
        }

        // 3. Delete files from R2
        if (application.qualification_url) {
            await deleteFromR2(application.qualification_url);
        }
        if (application.photo_url) {
            await deleteFromR2(application.photo_url);
        }

        // 4. Delete application from database
        const { error: deleteError } = await supabase
            .from('ypm_applications')
            .delete()
            .eq('id', applicationId);

        if (deleteError) {
            console.error('Error deleting application:', deleteError);
            return { success: false, message: 'Failed to delete application record' };
        }

        revalidatePath('/admin/ypm-applications');
        revalidatePath('/members/yoga-naturopathy-professional');

        return {
            success: true,
            message: application.status === 'approved'
                ? 'Approved application and member record deleted successfully'
                : 'Application rejected and deleted successfully'
        };
    } catch (error) {
        console.error('Unexpected error in deleteYPMApplication:', error);
        return { success: false, message: 'An unexpected error occurred' };
    }
}

// Keep the old name for backward compatibility until UI is updated
export const rejectYPMApplication = deleteYPMApplication;

