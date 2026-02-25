"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export interface MediaCoverage {
  id: string;
  image_url: string;
  image_key: string;
  caption: string | null;
  display_order: number;
  is_active: boolean;
  created_at: string;
}

export async function getAllMediaCoverage(): Promise<MediaCoverage[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("media_coverage")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Error fetching media coverage:", error);
    return [];
  }

  return data || [];
}

export async function getPublicMediaCoverage(): Promise<MediaCoverage[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("media_coverage")
    .select("*")
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Error fetching public media coverage:", error);
    return [];
  }

  return data || [];
}

export async function createMediaCoverage(
  imageUrl: string,
  imageKey: string,
  caption: string | null = null,
  displayOrder: number = 0,
): Promise<MediaCoverage | null> {
  const supabase = await createClient();

  // Get max order if starting at 0
  let order = displayOrder;
  if (order === 0) {
    const { data: maxOrderData } = await supabase
      .from("media_coverage")
      .select("display_order")
      .order("display_order", { ascending: false })
      .limit(1)
      .single();

    order = maxOrderData ? maxOrderData.display_order + 1 : 0;
  }

  const { data, error } = await supabase
    .from("media_coverage")
    .insert([
      {
        image_url: imageUrl,
        image_key: imageKey,
        caption,
        display_order: order,
        is_active: true,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Error creating media coverage:", error);
    throw new Error(error.message);
  }

  revalidatePath("/admin/gallery");
  revalidatePath("/media/media-coverage");
  return data;
}

export async function updateMediaCoverage(
  id: string,
  updates: Partial<MediaCoverage>,
): Promise<MediaCoverage | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("media_coverage")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error updating media coverage:", error);
    throw new Error(error.message);
  }

  revalidatePath("/admin/gallery");
  revalidatePath("/media/media-coverage");
  return data;
}

export async function deleteMediaCoverage(id: string): Promise<boolean> {
  const supabase = await createClient();

  const { error } = await supabase.from("media_coverage").delete().eq("id", id);

  if (error) {
    console.error("Error deleting media coverage:", error);
    throw new Error(error.message);
  }

  revalidatePath("/admin/gallery");
  revalidatePath("/media/media-coverage");
  return true;
}
