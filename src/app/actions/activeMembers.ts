"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { activeMemberSchema } from "@/lib/validation/activeMemberSchema";
import { deleteFromR2 } from "@/lib/r2-client";

/**
 * Active Member Type Definition
 */
export type ActiveMember = {
    readonly id: number;
    readonly name: string;
    readonly member_number: string;
    readonly date_of_birth: string | null;
    readonly image_url: string;
    readonly created_at: string;
    readonly updated_at: string;
};

/**
 * Get all active members
 */
export async function getActiveMembers(): Promise<ActiveMember[]> {
    const supabase = await createClient();

    const { data: members, error } = await supabase
        .from("active_members")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching active members:", error);
        return [];
    }

    return (members as ActiveMember[]) || [];
}

/**
 * Add a new active member
 */
export async function addActiveMember(formData: FormData): Promise<{
    success: boolean;
    message: string;
    data?: ActiveMember;
}> {
    const supabase = await createClient();

    try {
        const name = formData.get("name") as string;
        const memberNumber = formData.get("memberNumber") as string;
        const dateOfBirth = formData.get("dateOfBirth") as string | null;
        const imageUrl = formData.get("imageUrl") as string;

        const validationResult = activeMemberSchema.safeParse({
            name,
            memberNumber,
            dateOfBirth: dateOfBirth || undefined,
            imageUrl,
        });

        if (!validationResult.success) {
            const errors = validationResult.error.issues
                .map((err) => err.message)
                .join(", ");
            return { success: false, message: errors };
        }

        const { data: member, error: insertError } = await supabase
            .from("active_members")
            .insert([
                {
                    name: validationResult.data.name,
                    member_number: validationResult.data.memberNumber,
                    date_of_birth: validationResult.data.dateOfBirth || null,
                    image_url: validationResult.data.imageUrl,
                },
            ])
            .select()
            .single();

        if (insertError) {
            if (insertError.code === "23505") {
                return { success: false, message: "A member with this number already exists." };
            }
            return { success: false, message: insertError.message };
        }

        revalidatePath("/members/active");
        revalidatePath("/admin/active-members");

        return {
            success: true,
            message: "Active member added successfully!",
            data: member as ActiveMember,
        };
    } catch (error) {
        console.error("Unexpected error adding active member:", error);
        return { success: false, message: "An unexpected error occurred." };
    }
}

/**
 * Update an existing active member
 */
export async function updateActiveMember(
    id: string,
    formData: FormData
): Promise<{
    success: boolean;
    message: string;
    data?: ActiveMember;
}> {
    const supabase = await createClient();

    try {
        const name = formData.get("name") as string;
        const memberNumber = formData.get("memberNumber") as string;
        const dateOfBirth = formData.get("dateOfBirth") as string | null;
        const imageUrl = formData.get("imageUrl") as string;

        const validationResult = activeMemberSchema.safeParse({
            name,
            memberNumber,
            dateOfBirth: dateOfBirth || undefined,
            imageUrl,
        });

        if (!validationResult.success) {
            const errors = validationResult.error.issues
                .map((err) => err.message)
                .join(", ");
            return { success: false, message: errors };
        }

        const { data: member, error: updateError } = await supabase
            .from("active_members")
            .update({
                name: validationResult.data.name,
                member_number: validationResult.data.memberNumber,
                date_of_birth: validationResult.data.dateOfBirth || null,
                image_url: validationResult.data.imageUrl,
            })
            .eq("id", id)
            .select()
            .single();

        if (updateError) {
            if (updateError.code === "23505") {
                return { success: false, message: "A member with this number already exists." };
            }
            return { success: false, message: "Failed to update member." };
        }

        revalidatePath("/members/active");
        revalidatePath("/admin/active-members");

        return {
            success: true,
            message: "Active member updated successfully!",
            data: member as ActiveMember,
        };
    } catch (error) {
        console.error("Unexpected error updating active member:", error);
        return { success: false, message: "An unexpected error occurred." };
    }
}

/**
 * Delete an active member
 */
export async function deleteActiveMember(id: string): Promise<{
    success: boolean;
    message: string;
}> {
    const supabase = await createClient();

    try {
        // 1. Get the member record first to get the image URL
        const { data: member, error: fetchError } = await supabase
            .from("active_members")
            .select("image_url")
            .eq("id", id)
            .single();

        if (fetchError || !member) {
            console.error("Error fetching member for deletion:", fetchError);
            return { success: false, message: "Member not found." };
        }

        // 2. Delete the image from R2
        if (member.image_url) {
            await deleteFromR2(member.image_url);
        }

        // 3. Delete the record from database
        const { error: deleteError } = await supabase
            .from("active_members")
            .delete()
            .eq("id", id);

        if (deleteError) {
            console.error("Error deleting member record:", deleteError);
            return { success: false, message: "Failed to delete member." };
        }

        revalidatePath("/members/active");
        revalidatePath("/admin/active-members");

        return { success: true, message: "Active member and associated image deleted successfully!" };
    } catch (error) {
        console.error("Unexpected error deleting active member:", error);
        return { success: false, message: "An unexpected error occurred." };
    }
}
