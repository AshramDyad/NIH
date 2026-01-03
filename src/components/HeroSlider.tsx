"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Swiper as SwiperClass } from 'swiper';

// Import Swiper styles
import 'swiper/css';

interface HeroSlideData {
    id: number;
    image: string;
}

interface HeroSliderProps {
    slides: HeroSlideData[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
    const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

    const handleNext = () => {
        swiperInstance?.slideNext();
    };

    const handlePrev = () => {
        swiperInstance?.slidePrev();
    };

    return (
        <section
            className="relative h-[40vh] md:h-[85vh] w-full overflow-hidden bg-black"
            aria-roledescription="carousel"
            aria-label="NIH Health Hero Showcase"
        >
            {/* Custom Navigation Buttons - Programmatic control */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 sm:left-6 left-2 -translate-y-1/2 z-20 flex sm:h-14 sm:w-14 h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/70 text-white transition-all hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 cursor-pointer"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 sm:right-6 right-2 -translate-y-1/2 z-20 flex sm:h-14 sm:w-14 h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/70 text-white transition-all hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 cursor-pointer"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
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
                        <div className="relative h-full w-full">
                            <Image
                                src={slide.image}
                                alt={`Hero Slide ${slide.id}`}
                                fill
                                priority={index === 0}
                                className="object-cover"
                                sizes="100vw"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </SwiperComponent>
        </section>
    );
}
