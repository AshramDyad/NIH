"use client";

import { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/ui/Modal";
import { Newspaper, Eye, X } from "lucide-react";

/**
 * News Cutting images provided by the user (new-1 to new-6) with specific titles
 */
const newsCuttings = [
  {
    id: 1,
    src: "/images/new-1.jpg",
    alt: "Dr. Krantiveer Mahindrakar Honored",
    title: "Dr. Krantiveer Mahindrakar Honored",
  },
  {
    id: 2,
    src: "/images/new-2.jpg",
    alt: "Gold Medal Presentation Ceremony",
    title: "Gold Medal Ceremony Highlights",
  },
  {
    id: 3,
    src: "/images/new-3.jpg",
    alt: "Yoga and Holistic Health Summit Media",
    title: "Summit Media Coverage",
  },
  {
    id: 4,
    src: "/images/new-4.jpg",
    alt: "International Conference Regional Press",
    title: "Regional Press Recognition",
  },
  {
    id: 5,
    src: "/images/new-6.jpg",
    alt: "Akshar Varta Coverage",
    title: "Akshar Varta Coverage",
  },
  {
    id: 6,
    src: "/images/new-5.jpg",
    alt: "Global Delegates Gathering",
    title: "Global Delegates Gathering",
  },
];

export default function NewsCuttingSection() {
  const [selectedNews, setSelectedNews] = useState<
    (typeof newsCuttings)[0] | null
  >(null);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-[0.2em]">
            <Newspaper className="w-4 h-4" />
            Media Coverage
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tight italic">
            News <span className="text-primary">Cuttings</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full" />
          <p className="max-w-2xl text-zinc-500 text-lg font-medium leading-relaxed">
            Relive the event highlights through the lens of local and
            international media coverage.
          </p>
        </div>

        {/* Improved Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {newsCuttings.map((news) => (
            <div
              key={news.id}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-zinc-100 cursor-pointer shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2"
              onClick={() => setSelectedNews(news)}
            >
              {/* Image Container */}
              <div className="aspect-4/5 relative overflow-hidden bg-zinc-100">
                <Image
                  src={news.src}
                  alt={news.alt}
                  fill
                  className="object-cover object-top scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
                />

                {/* Overlay with glassmorphism */}
                <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="size-14 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    <Eye className="w-7 h-7" />
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-6 right-6">
                  <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/50 text-[10px] font-black uppercase tracking-widest text-zinc-900 shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    Expand View
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="md:p-8 p-6 bg-white border-t border-zinc-50 flex justify-between items-center group-hover:bg-zinc-50/50 transition-colors">
                <div className="space-y-1">
                  <div className="text-xs font-black text-primary uppercase tracking-widest">
                    Clipping #0{news.id}
                  </div>
                  <div className="text-zinc-900 font-bold text-lg">
                    {news.title}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-zinc-50 flex shrink-0 items-center justify-center text-zinc-400 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                  <Newspaper className="w-5 h-5 group-hover:rotate-25 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedNews && (
        <Modal
          title={selectedNews.title}
          onClose={() => setSelectedNews(null)}
          maxWidth="5xl"
        >
          <div className="relative w-full min-h-[50vh] md:h-[80vh] flex items-center justify-center bg-zinc-50 rounded-2xl overflow-hidden group/modal">
            <Image
              src={selectedNews.src}
              alt={selectedNews.alt}
              width={1200}
              height={1600}
              className="object-contain w-full h-full p-4 md:p-8"
              unoptimized
            />

            {/* Download/Action hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-zinc-900 text-white rounded-full text-xs font-bold flex items-center gap-2 opacity-0 group-hover/modal:opacity-100 transition-opacity">
              <Newspaper className="w-4 h-4 text-primary" />
              Official Media Record
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
