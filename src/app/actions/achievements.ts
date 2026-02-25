"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export interface Achievement {
  id: string;
  image_url: string;
  image_key: string;
  title: string | null;
  display_order: number;
  is_active: boolean;
  created_at: string;
}

export async function getAllAchievements(): Promise<Achievement[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("achievements")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Error fetching achievements:", error);
    return [];
  }

  return data || [];
}

export async function getPublicAchievements(): Promise<Achievement[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("achievements")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Error fetching public achievements:", error);
    return [];
  }

  return data || [];
}

export async function createAchievement(
  imageUrl: string,
  imageKey: string,
  title: string | null = null,
  displayOrder: number = 0,
): Promise<Achievement | null> {
  const supabase = await createClient();

  // Optionally get max order if you want to push to end
  let order = displayOrder;
  if (order === 0) {
    const { data: maxOrderData } = await supabase
      .from("achievements")
      .select("display_order")
      .order("display_order", { ascending: false })
      .limit(1)
      .single();

    order = maxOrderData ? maxOrderData.display_order + 1 : 0;
  }

  const { data, error } = await supabase
    .from("achievements")
    .insert([
      {
        image_url: imageUrl,
        image_key: imageKey,
        title,
        display_order: order,
        is_active: true,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Error creating achievement:", error);
    throw new Error(error.message);
  }

  revalidatePath("/admin/gallery");
  revalidatePath("/media/achievements");
  return data;
}

export async function updateAchievement(
  id: string,
  updates: Partial<Achievement>,
): Promise<Achievement | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("achievements")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error updating achievement:", error);
    throw new Error(error.message);
  }

  revalidatePath("/admin/gallery");
  revalidatePath("/media/achievements");
  return data;
}

export async function deleteAchievement(id: string): Promise<boolean> {
  const supabase = await createClient();

  const { error } = await supabase.from("achievements").delete().eq("id", id);

  if (error) {
    console.error("Error deleting achievement:", error);
    throw new Error(error.message);
  }

  revalidatePath("/admin/gallery");
  revalidatePath("/media/achievements");
  return true;
}
