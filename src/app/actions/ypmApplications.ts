'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { r2Client, R2_CONFIG } from '@/lib/r2-client';
import { DeleteObjectCommand } from '@aws-sdk/client-s3';

/**
 * YPM Application Type Definition
 * Matches database schema
 */
export type YPMApplication = {
    readonly id: string;
    readonly full_name: string;
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
    readonly referred_by: string | null;
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
                name: `${application.full_name} ${application.last_name}`.trim(),
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
 * Helper to extract R2 file key from URL
 */
function extractR2KeyFromUrl(url: string): string | null {
    try {
        // URL format: https://pub-xxx.r2.dev/folder/filename.ext
        const urlObj = new URL(url);
        // Remove leading slash
        return urlObj.pathname.slice(1);
    } catch {
        console.error('Invalid URL:', url);
        return null;
    }
}

/**
 * Delete a file from R2 storage
 */
async function deleteFromR2(fileUrl: string): Promise<boolean> {
    const fileKey = extractR2KeyFromUrl(fileUrl);
    if (!fileKey) return false;

    try {
        const command = new DeleteObjectCommand({
            Bucket: R2_CONFIG.bucketName,
            Key: fileKey,
        });
        await r2Client.send(command);
        console.log('Deleted R2 file:', fileKey);
        return true;
    } catch (error) {
        console.error('Error deleting R2 file:', error);
        return false;
    }
}

/**
 * Reject a YPM application
 * Deletes the application and associated R2 files
 */
export async function rejectYPMApplication(
    applicationId: string
): Promise<ActionResult> {
    const supabase = await createClient();

    try {
        // Get application to get file URLs
        const { data: application, error: fetchError } = await supabase
            .from('ypm_applications')
            .select('qualification_url, photo_url, status')
            .eq('id', applicationId)
            .single();

        if (fetchError || !application) {
            console.error('Error fetching application:', fetchError);
            return {
                success: false,
                message: 'Application not found',
            };
        }

        // Check if already rejected
        if (application.status === 'rejected') {
            return {
                success: false,
                message: 'Application is already rejected',
            };
        }

        // Delete files from R2
        if (application.qualification_url) {
            await deleteFromR2(application.qualification_url);
        }
        if (application.photo_url) {
            await deleteFromR2(application.photo_url);
        }

        // Delete application from database
        const { error: deleteError } = await supabase
            .from('ypm_applications')
            .delete()
            .eq('id', applicationId);

        if (deleteError) {
            console.error('Error deleting application:', deleteError);
            return {
                success: false,
                message: 'Failed to delete application',
            };
        }

        // Revalidate paths
        revalidatePath('/admin/ypm-applications');

        return {
            success: true,
            message: 'Application rejected and deleted successfully',
        };
    } catch (error) {
        console.error('Unexpected error rejecting application:', error);
        return {
            success: false,
            message: 'An unexpected error occurred',
        };
    }
}
