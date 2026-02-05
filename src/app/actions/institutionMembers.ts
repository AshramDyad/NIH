'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { institutionMemberSchema } from '@/lib/validation/institutionMemberSchema';
import { deleteFromR2 } from '@/lib/r2-client';

/**
 * Institution Member Type Definition
 */
export type InstitutionMember = {
    readonly id: number;
    readonly name: string;
    readonly address: string;
    readonly url: string;
    readonly image_url: string;
    readonly created_at: string;
    readonly updated_at: string;
};

/**
 * Get all institution members
 */
export async function getInstitutionMembers(): Promise<InstitutionMember[]> {
    const supabase = await createClient();

    const { data: members, error } = await supabase
        .from('institution_members')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching institution members:', error);
        return [];
    }

    return (members as InstitutionMember[]) || [];
}

/**
 * Add a new institution member
 */
export async function addInstitutionMember(formData: FormData): Promise<{
    success: boolean;
    message: string;
    data?: InstitutionMember;
}> {
    const supabase = await createClient();

    try {
        const name = formData.get('name') as string;
        const address = formData.get('address') as string;
        const url = formData.get('url') as string;
        const imageUrl = formData.get('imageUrl') as string;

        // Validate
        const validationResult = institutionMemberSchema.safeParse({
            name,
            address,
            url,
            imageUrl,
        });

        if (!validationResult.success) {
            const errors = validationResult.error.issues.map((err) => err.message).join(', ');
            return { success: false, message: errors };
        }

        const { data: member, error: insertError } = await supabase
            .from('institution_members')
            .insert([
                {
                    name: validationResult.data.name,
                    address: validationResult.data.address,
                    url: validationResult.data.url,
                    image_url: validationResult.data.imageUrl,
                },
            ])
            .select()
            .single();

        if (insertError) {
            console.error('Error inserting institution member:', insertError);
            return { success: false, message: 'Failed to add institution. Please try again.' };
        }

        revalidatePath('/members/institutions');
        revalidatePath('/admin/members-institutions');

        return {
            success: true,
            message: 'Institution added successfully!',
            data: member as InstitutionMember,
        };
    } catch (error) {
        console.error('Unexpected error adding institution member:', error);
        return { success: false, message: 'An unexpected error occurred.' };
    }
}

/**
 * Update an existing institution member
 */
export async function updateInstitutionMember(
    id: string,
    formData: FormData
): Promise<{
    success: boolean;
    message: string;
    data?: InstitutionMember;
}> {
    const supabase = await createClient();

    try {
        const name = formData.get('name') as string;
        const address = formData.get('address') as string;
        const url = formData.get('url') as string;
        const imageUrl = formData.get('imageUrl') as string;

        // Validate
        const validationResult = institutionMemberSchema.safeParse({
            name,
            address,
            url,
            imageUrl,
        });

        if (!validationResult.success) {
            const errors = validationResult.error.issues.map((err) => err.message).join(', ');
            return { success: false, message: errors };
        }

        // 1. Get existing record for R2 cleanup
        const { data: existing } = await supabase
            .from('institution_members')
            .select('image_url')
            .eq('id', id)
            .single();

        // 2. Update institution_members
        const { data: member, error: updateError } = await supabase
            .from('institution_members')
            .update({
                name: validationResult.data.name,
                address: validationResult.data.address,
                url: validationResult.data.url,
                image_url: validationResult.data.imageUrl,
            })
            .eq('id', id)
            .select()
            .single();

        if (updateError) {
            console.error('Error updating institution member:', updateError);
            return { success: false, message: 'Failed to update institution.' };
        }

        // 3. Sync to associate_center_applications
        console.log(`Syncing changes to Associate Center applications linked to institution ${id}...`);
        const { error: syncError } = await supabase
            .from('associate_center_applications')
            .update({
                hospital_name: validationResult.data.name,
                full_address: validationResult.data.address,
                website: validationResult.data.url,
                logo_url: validationResult.data.imageUrl,
                updated_at: new Date().toISOString(),
            })
            .eq('institution_id', id);

        if (syncError) {
            console.error(`Error syncing to applications for institution ${id}:`, syncError);
        }

        // 4. Cleanup old image from R2 if it changed
        if (existing?.image_url && existing.image_url !== validationResult.data.imageUrl) {
            console.log(`Cleaning up old image from R2: ${existing.image_url}`);
            await deleteFromR2(existing.image_url).catch(err =>
                console.error('Failed to delete old image from R2 during update:', err)
            );
        }

        revalidatePath('/members/institutions');
        revalidatePath('/admin/members-institutions');
        revalidatePath('/admin/associate-centers');

        return {
            success: true,
            message: 'Institution updated successfully!',
            data: member as InstitutionMember,
        };
    } catch (error) {
        console.error('Unexpected error updating institution member:', error);
        return { success: false, message: 'An unexpected error occurred.' };
    }
}

/**
 * Delete an institution member
 * Also deletes linked Associate Center applications and associated R2 image
 */
export async function deleteInstitutionMember(id: string): Promise<{
    success: boolean;
    message: string;
}> {
    const supabase = await createClient();

    try {
        console.log(`Starting deletion process for institution member: ${id}`);

        // 1. Get the institution record first to get the image URL
        const { data: member, error: fetchError } = await supabase
            .from('institution_members')
            .select('name, image_url')
            .eq('id', id)
            .single();

        if (fetchError || !member) {
            console.error('Error fetching institution member for deletion:', fetchError);
            return { success: false, message: 'Institution member not found.' };
        }

        // 2. Delete the original application from associate_center_applications
        // We do this first because it references the institution_id
        console.log(`Checking for linked Associate Center applications for institution ${id}...`);
        const { error: appDeleteError } = await supabase
            .from('associate_center_applications')
            .delete()
            .eq('institution_id', id);

        if (appDeleteError) {
            console.error(`Error deleting linked applications for institution ${id}:`, appDeleteError);
            // We continue to delete the member itself anyway
        } else {
            console.log(`Successfully deleted linked application records for ${member.name}`);
        }

        // 3. Delete the image from R2
        if (member.image_url) {
            console.log(`Deleting image from R2: ${member.image_url}`);
            await deleteFromR2(member.image_url);
        }

        // 4. Delete from database
        const { error: deleteError } = await supabase
            .from('institution_members')
            .delete()
            .eq('id', id);

        if (deleteError) {
            console.error('Error deleting institution member:', deleteError);
            return { success: false, message: 'Failed to delete institution.' };
        }

        console.log(`Successfully deleted institution member: ${member.name}`);

        // Revalidate all affected paths
        revalidatePath('/members/institutions');
        revalidatePath('/admin/members-institutions');
        revalidatePath('/admin/associate-centers');

        return { success: true, message: 'Institution and linked application deleted successfully!' };
    } catch (error) {
        console.error('Unexpected error deleting institution member:', error);
        return { success: false, message: 'An unexpected error occurred.' };
    }
}
