'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { institutionMemberSchema } from '@/lib/validation/institutionMemberSchema';

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

        revalidatePath('/members/institutions');
        revalidatePath('/admin/members-institutions');

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
 */
export async function deleteInstitutionMember(id: string): Promise<{
    success: boolean;
    message: string;
}> {
    const supabase = await createClient();

    try {
        const { error: deleteError } = await supabase
            .from('institution_members')
            .delete()
            .eq('id', id);

        if (deleteError) {
            console.error('Error deleting institution member:', deleteError);
            return { success: false, message: 'Failed to delete institution.' };
        }

        revalidatePath('/members/institutions');
        revalidatePath('/admin/members-institutions');

        return { success: true, message: 'Institution deleted successfully!' };
    } catch (error) {
        console.error('Unexpected error deleting institution member:', error);
        return { success: false, message: 'An unexpected error occurred.' };
    }
}
