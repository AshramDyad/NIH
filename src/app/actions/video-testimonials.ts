"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export interface VideoTestimonial {
  id: string;
  youtube_url: string;
  video_id: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
}

/**
 * Extract YouTube video ID from various YouTube URL formats
 * Supports: youtube.com/watch, youtu.be, youtube.com/embed, youtube.com/shorts
 */
function extractYouTubeVideoId(url: string): string | null {
  const regex =
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

/**
 * Fetch all active video testimonials ordered by display_order
 */
export async function getVideoTestimonials(): Promise<VideoTestimonial[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("video_testimonials")
    .select("*")
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Error fetching video testimonials:", error);
    return [];
  }

  return data || [];
}

/**
 * Create a new video testimonial entry
 */
export async function createVideoTestimonial(youtubeUrl: string) {
  const videoId = extractYouTubeVideoId(youtubeUrl);

  if (!videoId) {
    throw new Error(
      "Invalid YouTube URL. Please provide a valid YouTube video link."
    );
  }

  const supabase = await createClient();

  // Get current count for display_order
  const { count } = await supabase
    .from("video_testimonials")
    .select("*", { count: "exact", head: true });

  const { data, error } = await supabase
    .from("video_testimonials")
    .insert([
      {
        youtube_url: youtubeUrl,
        video_id: videoId,
        display_order: count || 0,
      },
    ])
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to create video testimonial: ${error.message}`);
  }

  revalidatePath("/international-conference");
  revalidatePath("/admin/video-testimonials");
  return data;
}

/**
 * Delete a video testimonial entry
 */
export async function deleteVideoTestimonial(id: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("video_testimonials")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(`Failed to delete video testimonial: ${error.message}`);
  }

  revalidatePath("/international-conference");
  revalidatePath("/admin/video-testimonials");
  return { success: true };
}
