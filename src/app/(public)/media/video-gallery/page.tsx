import React from "react";
import { getVideoTestimonials } from "@/app/actions/video-testimonials";

export const metadata = {
  title: "Video Gallery - National Institute of Health",
  description:
    "Explore our video gallery showcasing testimonials, events, and activities at NIH.",
};

export default async function VideoGalleryPage() {
  const videos = await getVideoTestimonials();

  return (
    <div className="bg-gray-50 md:py-24 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 relative inline-block">
            Video Gallery
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            Watch testimonials, event highlights, and informative sessions from
            the National Institute of Health through our curated video gallery.
          </p>
        </div>

        {/* Gallery Grid */}
        {videos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="relative w-full aspect-video bg-gray-900">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.video_id}?rel=0&modestbranding=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100 text-center px-4 max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No Videos Available
            </h3>
            <p className="text-gray-500 max-w-sm">
              We are currently updating our video gallery. Please check back
              later for new content!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
