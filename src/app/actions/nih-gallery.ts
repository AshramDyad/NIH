"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { deleteFromR2 } from "@/lib/r2-client";

export interface GalleryImage {
  id: string;
  image_url: string;
  image_key: string;
  caption: string | null;
  display_order: number;
  is_active: boolean;
  created_at: string;
}

/**
 * Fetch all active gallery images ordered by display_order
 */
export async function getGalleryImages(): Promise<GalleryImage[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("nih_gallery")
    .select("*")
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Error fetching gallery images:", error);
    return [];
  }

  return data || [];
}

/**
 * Fetch all gallery images for admin (including inactive)
 */
export async function getAllGalleryImages(): Promise<GalleryImage[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("nih_gallery")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Error fetching all gallery images:", error);
    return [];
  }

  return data || [];
}

/**
 * Create a new gallery image entry
 */
export async function createGalleryImage(
  imageUrl: string,
  imageKey: string,
  caption: string | null = null,
  displayOrder: number = 0,
) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("nih_gallery")
    .insert([
      {
        image_url: imageUrl,
        image_key: imageKey,
        caption,
        display_order: displayOrder,
      },
    ])
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to create gallery image: ${error.message}`);
  }

  revalidatePath("/");
  revalidatePath("/admin/nih-gallery");
  return data;
}

/**
 * Delete a gallery image entry
 */
export async function deleteGalleryImage(id: string) {
  const supabase = await createClient();

  // 1. Get the record first for R2 deletion
  const { data: item, error: fetchError } = await supabase
    .from("nih_gallery")
    .select("image_url")
    .eq("id", id)
    .single();

  if (fetchError || !item) {
    throw new Error("Gallery image not found.");
  }

  // 2. Delete from R2
  if (item.image_url) {
    await deleteFromR2(item.image_url);
  }

  // 3. Delete from database
  const { error } = await supabase.from("nih_gallery").delete().eq("id", id);

  if (error) {
    throw new Error(`Failed to delete gallery image: ${error.message}`);
  }

  revalidatePath("/");
  revalidatePath("/admin/nih-gallery");
  return { success: true };
}

/**
 * Update gallery image metadata
 */
export async function updateGalleryImage(
  id: string,
  updates: Partial<GalleryImage>,
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("nih_gallery")
    .update(updates)
    .eq("id", id);

  if (error) {
    throw new Error(`Failed to update gallery image: ${error.message}`);
  }

  revalidatePath("/");
  revalidatePath("/admin/nih-gallery");
  return { success: true };
}
