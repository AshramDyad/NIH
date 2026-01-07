'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { lifetimeMemberSchema } from '@/lib/validation/lifetimeMemberSchema';

/**
 * Lifetime Member Type Definition
 * Matches database schema
 */
export type LifetimeMember = {
    readonly id: number;
    readonly name: string;
    readonly member_number: string;
    readonly date_of_birth: string;
    readonly image_url: string;
    readonly created_at: string;
    readonly updated_at: string;
};

/**
 * Get all lifetime members
 * Fetches all lifetime members ordered by creation date (newest first)
 */
export async function getLifetimeMembers(): Promise<LifetimeMember[]> {
    const supabase = await createClient();

    const { data: members, error } = await supabase
        .from('lifetime_members')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching lifetime members:', error);
        return [];
    }

    return (members as LifetimeMember[]) || [];
}

/**
 * Add a new lifetime member
 * Validates input and inserts into database
 * Revalidates both public and admin pages
 */
export async function addLifetimeMember(formData: FormData): Promise<{
    success: boolean;
    message: string;
    data?: LifetimeMember;
}> {
    const supabase = await createClient();

    try {
        // Extract form data
        const name = formData.get('name') as string;
        const memberNumber = formData.get('memberNumber') as string;
        const dateOfBirth = formData.get('dateOfBirth') as string;
        const imageUrl = formData.get('imageUrl') as string;

        // Validate using Zod schema
        const validationResult = lifetimeMemberSchema.safeParse({
            name,
            memberNumber,
            dateOfBirth,
            imageUrl,
        });

        if (!validationResult.success) {
            const errors = validationResult.error.issues.map((err) => err.message).join(', ');
            console.error('Validation errors:', errors);
            return {
                success: false,
                message: errors,
            };
        }

        const validatedData = validationResult.data;

        // Insert into database
        const { data: member, error: insertError } = await supabase
            .from('lifetime_members')
            .insert([
                {
                    name: validatedData.name,
                    member_number: validatedData.memberNumber,
                    date_of_birth: validatedData.dateOfBirth,
                    image_url: validatedData.imageUrl,
                },
            ])
            .select()
            .single();

        if (insertError) {
            console.error('Error inserting lifetime member:', insertError);

            // Check for duplicate member number
            if (insertError.code === '23505') {
                return {
                    success: false,
                    message: 'A member with this number already exists.',
                };
            }

            return {
                success: false,
                message: 'Failed to add member. Please try again.',
            };
        }

        // Revalidate paths
        revalidatePath('/members/lifetime');
        revalidatePath('/admin/members');

        return {
            success: true,
            message: 'Lifetime member added successfully!',
            data: member as LifetimeMember,
        };
    } catch (error) {
        console.error('Unexpected error adding lifetime member:', error);
        return {
            success: false,
            message: 'An unexpected error occurred. Please try again.',
        };
    }
}

/**
 * Delete a lifetime member by ID
 * Revalidates both public and admin pages
 */
export async function deleteLifetimeMember(id: string): Promise<{
    success: boolean;
    message: string;
}> {
    const supabase = await createClient();

    try {
        // Delete from database
        const { error: deleteError } = await supabase
            .from('lifetime_members')
            .delete()
            .eq('id', id);

        if (deleteError) {
            console.error('Error deleting lifetime member:', deleteError);
            return {
                success: false,
                message: 'Failed to delete member. Please try again.',
            };
        }

        // Revalidate paths
        revalidatePath('/members/lifetime');
        revalidatePath('/admin/members');

        return {
            success: true,
            message: 'Lifetime member deleted successfully!',
        };
    } catch (error) {
        console.error('Unexpected error deleting lifetime member:', error);
        return {
            success: false,
            message: 'An unexpected error occurred. Please try again.',
        };
    }
}
