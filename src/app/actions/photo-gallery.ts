"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { deleteFromR2 } from "@/lib/r2-client";

export interface PhotoGalleryImage {
  id: string;
  image_url: string;
  image_key: string;
  title: string | null;
  is_active: boolean;
  created_at: string;
}

/**
 * Fetch all active gallery images ordered by created_at (newest first)
 */
export async function getPublicPhotoGallery(): Promise<PhotoGalleryImage[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("photo_gallery")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching public photo gallery images:", error);
    return [];
  }

  return data || [];
}

/**
 * Fetch all gallery images for admin (including inactive)
 */
export async function getAllPhotoGalleryAdmin(): Promise<PhotoGalleryImage[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("photo_gallery")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching all photo gallery images:", error);
    return [];
  }

  return data || [];
}

/**
 * Create a new gallery image entry
 */
export async function createPhotoGalleryImage(
  imageUrl: string,
  imageKey: string,
  title: string | null = null,
) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("photo_gallery")
    .insert([
      {
        image_url: imageUrl,
        image_key: imageKey,
        title,
      },
    ])
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to create photo gallery image: ${error.message}`);
  }

  revalidatePath("/media/photo-gallery");
  revalidatePath("/admin/photo-gallery");
  return data;
}

/**
 * Delete a gallery image entry
 */
export async function deletePhotoGalleryImage(id: string) {
  const supabase = await createClient();

  // 1. Get the record first for R2 deletion
  const { data: item, error: fetchError } = await supabase
    .from("photo_gallery")
    .select("image_url")
    .eq("id", id)
    .single();

  if (fetchError || !item) {
    throw new Error("Photo gallery image not found.");
  }

  // 2. Delete from R2
  if (item.image_url) {
    await deleteFromR2(item.image_url);
  }

  // 3. Delete from database
  const { error } = await supabase.from("photo_gallery").delete().eq("id", id);

  if (error) {
    throw new Error(`Failed to delete photo gallery image: ${error.message}`);
  }

  revalidatePath("/media/photo-gallery");
  revalidatePath("/admin/photo-gallery");
  return { success: true };
}

/**
 * Update gallery image metadata
 */
export async function updatePhotoGalleryImage(
  id: string,
  updates: Partial<PhotoGalleryImage>,
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("photo_gallery")
    .update(updates)
    .eq("id", id);

  if (error) {
    throw new Error(`Failed to update photo gallery image: ${error.message}`);
  }

  revalidatePath("/media/photo-gallery");
  revalidatePath("/admin/photo-gallery");
  return { success: true };
}
