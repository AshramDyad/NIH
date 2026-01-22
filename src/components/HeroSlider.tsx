"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperClass } from "swiper";

// Import Swiper styles
import "swiper/css";
import Link from "next/link";

interface HeroSlideData {
  id: string | number;
  image: string;
}

interface HeroSliderProps {
  slides: HeroSlideData[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null,
  );

  const handleNext = () => {
    swiperInstance?.slideNext();
  };

  const handlePrev = () => {
    swiperInstance?.slidePrev();
  };

  return (
    <React.Fragment>
      {/* Mobile: Auto height based on image | Desktop: Fixed cinematic aspect ratio */}
      <section
        className="relative w-full overflow-hidden bg-secondary md:aspect-21/9"
        aria-roledescription="carousel"
        aria-label="NIH Health Hero Showcase"
      >
        {/* Custom Navigation Buttons - Programmatic control */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 sm:left-6 left-2 -translate-y-1/2 z-20 flex sm:size-12 size-8 items-center justify-center rounded-full border border-primary/20 bg-primary/70 text-white transition-all hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="sm:size-8 size-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 sm:right-6 right-2 -translate-y-1/2 z-20 flex sm:size-12 size-8 items-center justify-center rounded-full border border-primary/20 bg-primary/70 text-white transition-all hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="sm:size-8 size-5" />
        </button>

        <SwiperComponent
          onSwiper={setSwiperInstance}
          modules={[Autoplay]}
          speed={600}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              {/* Mobile: Responsive image with auto height (no crop) */}
              {/* Desktop: Fill container with object-cover (immersive) */}
              <div className="relative w-full md:h-full">
                {/* Mobile Image - Full display, no cropping */}
                <Image
                  src={slide.image}
                  alt={`Hero Slide ${slide.id}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority={index === 0}
                  className="w-full h-auto md:hidden"
                />
                {/* Desktop Image - Cinematic fill with cover */}
                <Image
                  src={slide.image}
                  alt={`Hero Slide ${slide.id}`}
                  fill
                  priority={index === 0}
                  className="hidden md:block object-cover object-center"
                  sizes="100vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </section>
    </React.Fragment>
  );
}
