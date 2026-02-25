import React from "react";
import Image from "next/image";
import { getPublicPhotoGallery } from "@/app/actions/photo-gallery";

export const metadata = {
  title: "Photo Gallery - National Institute of Health",
  description:
    "Explore our photo gallery showcasing events, activities, and campus life at NIH.",
};

export default async function PhotoGalleryPage() {
  const images = await getPublicPhotoGallery();

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 relative inline-block">
            Photo Gallery
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            Explore memorable moments, events, and activities at the National
            Institute of Health through our curated photo gallery.
          </p>
        </div>

        {/* Gallery Grid */}
        {images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {images.map((img) => (
              <div
                key={img.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={img.image_url}
                    alt={img.title || "NIH Gallery Image"}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors duration-300 pointer-events-none" />
                </div>

                {/* Title Section (conditionally rendered if title exists) */}
                {img.title && (
                  <div className="p-4 grow flex items-center justify-start border-t border-gray-50 bg-white">
                    <h3 className="text-gray-800 font-semibold text-lg line-clamp-2">
                      {img.title}
                    </h3>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100 text-center px-4">
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
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No Images Yet
            </h3>
            <p className="text-gray-500 max-w-sm">
              We are currently updating our gallery. Please check back later for
              new photos!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
