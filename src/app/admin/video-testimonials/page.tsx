"use client";

import React, { useEffect, useState } from "react";
import {
  Video,
  Trash2,
  Plus,
  Loader2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import {
  getVideoTestimonials,
  createVideoTestimonial,
  deleteVideoTestimonial,
  type VideoTestimonial,
} from "@/app/actions/video-testimonials";
import Image from "next/image";
import { DataTable } from "@/components/ui/DataTable";

// Helper function to get YouTube thumbnail URL
function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export default function VideoTestimonialsAdminPage() {
  const [videos, setVideos] = useState<VideoTestimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Load videos on mount
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getVideoTestimonials();
      setVideos(data);
    } catch (err) {
      setError("Failed to load videos. Please refresh the page.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      await createVideoTestimonial(youtubeUrl);
      setYoutubeUrl("");
      setIsModalOpen(false);
      fetchVideos();
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Failed to add video"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this video?")) return;
    try {
      await deleteVideoTestimonial(id);
      fetchVideos();
    } catch (err) {
      alert("Failed to delete video");
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Video Testimonials
          </h1>
          <p className="text-gray-600 mt-1">
            Manage YouTube videos for the International Conference page
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-primary hover:bg-primary/90 cursor-pointer text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Video
        </button>
      </div>

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-medium text-red-900">
              Error Loading Data
            </p>
            <p className="text-sm text-red-700 mt-1">{error}</p>
          </div>
          <button
            onClick={fetchVideos}
            className="text-sm font-medium text-red-700 hover:text-red-900 underline"
          >
            Retry
          </button>
        </div>
      )}

      {/* Videos Table */}
      {!error && (
        <DataTable<VideoTestimonial>
          columns={[
            {
              id: "thumbnail",
              header: "Thumbnail",
              cell: (video) => (
                <div className="relative w-40 h-24 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={getYouTubeThumbnail(video.video_id)}
                    alt="Video thumbnail"
                    fill
                    className="object-cover"
                  />
                </div>
              ),
            },
            {
              id: "url",
              header: "YouTube URL",
              cell: (video) => (
                <a
                  href={video.youtube_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:text-primary/90 hover:underline flex items-center gap-1 max-w-xs truncate"
                >
                  {video.youtube_url}
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              ),
            },
            {
              id: "actions",
              header: "Actions",
              cell: (video) => (
                <button
                  onClick={() => handleDelete(video.id)}
                  className="flex items-center gap-2 text-red-600 bg-red-600/10 hover:bg-red-600/20 cursor-pointer px-3 py-2 rounded-lg transition-colors font-medium"
                  title="Delete video"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              ),
            },
          ]}
          data={videos}
          keyAccessor="id"
          isLoading={isLoading}
          loadingMessage="Loading videos..."
          emptyIcon={<Video className="w-16 h-16 text-gray-400" />}
          emptyTitle="No Videos Yet"
          emptyDescription="Get started by adding your first video testimonial."
        />
      )}

      {/* Add Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
            {/* Modal Header */}
            <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Add Video Testimonial
              </h2>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setYoutubeUrl("");
                  setSubmitError(null);
                }}
                className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
              <div>
                <label
                  htmlFor="youtube-url"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  YouTube Video URL
                </label>
                <input
                  id="youtube-url"
                  type="url"
                  value={youtubeUrl}
                  onChange={(e) => setYoutubeUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                  required
                />
                <p className="mt-2 text-sm text-gray-500">
                  Paste the full YouTube video URL (supports youtube.com,
                  youtu.be, shorts)
                </p>
              </div>

              {submitError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                  {submitError}
                </div>
              )}

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setYoutubeUrl("");
                    setSubmitError(null);
                  }}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !youtubeUrl}
                  className="flex items-center gap-2 bg-primary hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Adding...
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      Add Video
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
