import React from "react";
import { ArrowRight, CalendarDays, Award, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RetreatHero() {
  return (
    <section className="relative w-full pt-10 pb-10 md:pt-20 md:pb-32 bg-gray-50 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-2xl lg:pr-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700 border border-amber-200 mb-8 font-bold tracking-wide text-sm shadow-sm hover:shadow transition-shadow">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>5-Day Holistic Wellness Retreat</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-secondary leading-[1.1] mb-8 tracking-tight">
              Rebalance & <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-b from-primary to-yellow-100">
                Renew
              </span>
            </h1>

            <p className="lg:text-xl md:text-lg text-gray-500 leading-relaxed font-medium mb-10">
              An immersive holistic healing experience designed specifically for
              working professionals, entrepreneurs, and anyone seeking a
              complete lifestyle reset.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-white lg:px-8 px-6 lg:py-4 py-3 rounded-full font-bold transition-all flex items-center gap-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer hover:-translate-y-0.5"
              >
                Book Your Retreat <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Column - Premium Image Composition */}
          <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            {/* The Main Image Wrap */}
            <div className="relative w-full max-w-[500px] h-full rounded-[40px] md:rounded-[60px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-8 border-white">
              {/* Note: Using a standard Unsplash image for wellness/nature */}
              <div
                className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
