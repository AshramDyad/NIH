"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Modal } from "@/components/ui/Modal";
import { Image as ImageIcon, Eye, X, Camera } from "lucide-react";
import {
  getGalleryImages,
  type GalleryImage,
} from "@/app/actions/international-gallery";

export default function GallerySection() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await getGalleryImages();
        setImages(data);
      } catch (error) {
        console.error("Failed to load gallery images:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, []);

  if (!isLoading && images.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-zinc-50/50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-[0.2em]">
            <Camera className="w-4 h-4" />
            Visual Highlights
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tight italic">
            Event <span className="text-primary">Gallery</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full" />
          <p className="max-w-2xl text-zinc-500 text-lg font-medium leading-relaxed">
            A glimpse into the moments that defined the International Conference
            on Yoga & Holistic Health.
          </p>
        </div>

        {/* Gallery Grid */}
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-pulse">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square bg-zinc-200 rounded-3xl" />
            ))}
          </div>
        ) : (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative break-inside-avoid rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.image_url}
                  alt={image.caption || "Gallery image"}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-zinc-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 backdrop-blur-[2px]">
                  <div className="flex items-center justify-between">
                    {image.caption && (
                      <p className="text-white font-bold text-sm line-clamp-2 pr-4">
                        {image.caption}
                      </p>
                    )}
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center text-white shrink-0 ml-auto">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Modal
          title={selectedImage.caption || "Gallery Image"}
          onClose={() => setSelectedImage(null)}
          maxWidth="5xl"
        >
          <div className="relative w-full min-h-[50vh] md:h-[80vh] flex flex-col items-center justify-center bg-zinc-100/50 rounded-2xl overflow-hidden">
            <img
              src={selectedImage.image_url}
              alt={selectedImage.caption || "Full view"}
              className="max-w-full max-h-full object-contain p-4 md:p-8"
            />
            {selectedImage.caption && (
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-8 py-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white shadow-2xl max-w-[90%] md:max-w-xl text-center">
                <p className="text-zinc-900 font-bold text-base">
                  {selectedImage.caption}
                </p>
              </div>
            )}
          </div>
        </Modal>
      )}
    </section>
  );
}
