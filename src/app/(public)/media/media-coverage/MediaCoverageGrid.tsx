"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/ui/Modal";
import { Eye, Newspaper } from "lucide-react";

// Assuming MediaCoverage matches this type from the server action
interface MediaCoverage {
  id: string;
  image_url: string;
  caption: string | null;
}

interface Props {
  images: MediaCoverage[];
}

export default function MediaCoverageGrid({ images }: Props) {
  const [selectedImage, setSelectedImage] = useState<MediaCoverage | null>(
    null,
  );

  if (images.length === 0) {
    return (
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
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3L22 4"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          No Media Coverage Yet
        </h3>
        <p className="text-gray-500 max-w-sm">
          We are currently updating our media gallery. Please check back later!
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {images.map((img) => (
          <div
            key={img.id}
            onClick={() => setSelectedImage(img)}
            className="group bg-white rounded-2xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-zinc-100 cursor-pointer transition-all duration-500 hover:-translate-y-1 flex flex-col h-full"
          >
            {/* Image Container with Hover Expansion Icon */}
            <div className="relative w-full h-72 overflow-hidden bg-zinc-50 flex justify-center items-center">
              <Image
                src={img.image_url}
                alt={img.caption || "NIH Media Coverage"}
                width={800}
                height={1200}
                className="w-full h-full object-contain p-4 scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                unoptimized
              />

              {/* Overlay with glassmorphism matching International Conference Page */}
              <div className="absolute inset-0 bg-zinc-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <div className="size-14 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-500">
                  <Eye className="w-7 h-7" />
                </div>
              </div>

              {/* Expand View Badge */}
              <div className="absolute top-4 right-4">
                <div className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full border border-white/50 text-[10px] font-black uppercase tracking-widest text-zinc-900 shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  Expand View
                </div>
              </div>
            </div>

            {/* Caption Section */}
            {img.caption && (
              <div className="p-5 flex justify-between items-center border-t border-zinc-50 bg-white group-hover:bg-zinc-50/50 transition-colors">
                <h3 className="text-zinc-900 font-semibold text-lg line-clamp-2 pr-4">
                  {img.caption}
                </h3>
                <div className="w-8 h-8 rounded-full bg-zinc-50 flex shrink-0 items-center justify-center text-zinc-400 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                  <Newspaper className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Full Screen Modal */}
      {selectedImage && (
        <Modal
          title={selectedImage.caption || "Media Coverage Image"}
          onClose={() => setSelectedImage(null)}
          maxWidth="5xl"
        >
          <div className="relative w-full min-h-[50vh] md:h-[80vh] flex items-center justify-center bg-zinc-50 rounded-2xl overflow-hidden group/modal">
            <Image
              src={selectedImage.image_url}
              alt={selectedImage.caption || "Media Coverage Image"}
              width={1600}
              height={2000}
              className="object-contain w-full h-full p-4 md:p-8"
              unoptimized
            />

            {/* Hint Element */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-zinc-900/90 backdrop-blur-sm text-white rounded-full text-xs font-bold flex items-center gap-2 opacity-0 group-hover/modal:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
              <Newspaper className="w-4 h-4 text-primary" />
              Expanded View
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
