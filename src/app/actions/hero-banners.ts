"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { deleteFromR2 } from "@/lib/r2-client";

export interface HeroBanner {
  id: string;
  image_url: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
}

/**
 * Fetch all active hero banners ordered by display_order
 */
export async function getHeroBanners(): Promise<HeroBanner[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("hero_banners")
    .select("*")
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Error fetching hero banners:", error);
    return [];
  }

  return data || [];
}

/**
 * Create a new hero banner entry
 */
export async function createHeroBanner(
  imageUrl: string,
  displayOrder: number = 0
) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("hero_banners")
    .insert([{ image_url: imageUrl, display_order: displayOrder }])
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to create hero banner: ${error.message}`);
  }

  revalidatePath("/");
  revalidatePath("/admin/hero-banner");
  return data;
}

/**
 * Delete a hero banner entry
 */
export async function deleteHeroBanner(id: string) {
  const supabase = await createClient();

  // 1. Get the banner record first to get the image URL
  const { data: banner, error: fetchError } = await supabase
    .from("hero_banners")
    .select("image_url")
    .eq("id", id)
    .single();

  if (fetchError || !banner) {
    console.error("Error fetching hero banner for deletion:", fetchError);
    throw new Error("Hero banner not found.");
  }

  // 2. Delete the image from R2
  if (banner.image_url) {
    await deleteFromR2(banner.image_url);
  }

  // 3. Delete from database
  const { error } = await supabase.from("hero_banners").delete().eq("id", id);

  if (error) {
    throw new Error(`Failed to delete hero banner: ${error.message}`);
  }

  revalidatePath("/");
  revalidatePath("/admin/hero-banner");
  return { success: true };
}

/**
 * Update banner order or status
 */
export async function updateHeroBanner(
  id: string,
  updates: Partial<HeroBanner>
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("hero_banners")
    .update(updates)
    .eq("id", id);

  if (error) {
    throw new Error(`Failed to update hero banner: ${error.message}`);
  }

  revalidatePath("/");
  revalidatePath("/admin/hero-banner");
  return { success: true };
}
