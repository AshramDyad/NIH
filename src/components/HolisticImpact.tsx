'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
/**
 * HolisticImpact Component
 * A "Simple & Premium" redesign of the NIH section.
 * Replaces glassmorphism with solid surfaces, high contrast, and refined depth.
 */
const HolisticImpact = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const galleryImages = [
        '/images/banner-5.jpg',
        '/images/banner-6.jpg',
        '/images/banner-7.jpg',
        '/images/banner-8.jpg',
        '/images/banner-9.jpg',
        '/images/banner-10.jpg',
        '/images/banner-11.jpg',
    ];
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [galleryImages.length]);

    const scrollToHero = () => {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Handle scroll lock when modal is open
    useEffect(() => {
        if (isVideoOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isVideoOpen]);
    return (
        <section className="bg-secondary sm:py-16 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Card 1: Chairman's Message */}
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-transform duration-300 flex flex-col relative">
                        {/* Top Accent Bar */}
                        <div className="h-2 w-full bg-primary" />
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-5 mb-8">
                                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                                    <Image
                                        src="/images/principal1.jpg"
                                        alt="Dr. Vinod Kashyap"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-secondary font-sans font-bold text-xl tracking-tight">Dr. Vinod Kashyap</h3>
                                    <p className="text-primary font-sans font-semibold text-xs uppercase tracking-widest mt-1">Chairman, NIH</p>
                                </div>
                            </div>
                            <div className="flex-grow">
                                <div className="mb-6">
                                    <p className="text-gray-600 italic font-serif leading-relaxed text-lg">
                                        &ldquo;Health is the biggest necessity in today&apos;s life. We have to correct our diet, our thoughts and our behavior to keep our health constant...&rdquo;
                                    </p>
                                </div>
                            </div>
                            <div className="mt-8 flex items-center justify-between pt-6 border-t border-gray-100">
                                <Link href="/about/chairman" className="text-gray-900 font-sans font-bold text-sm hover:text-primary transition-colors flex items-center gap-1 group/link">
                                    Read Full Story <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                                </Link>
                                <button
                                    onClick={() => setIsVideoOpen(true)}
                                    className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:bg-secondary transition-colors active:scale-95 cursor-pointer"
                                >
                                    Watch Video
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Card 2: Gallery Slider */}
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-transform duration-300 flex flex-col relative">
                        <div className="h-2 w-full bg-primary" />
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-secondary font-sans font-bold text-xl tracking-tight">NIH Gallery</h3>
                                <div className="flex gap-2">
                                    {galleryImages.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`h-1.5 transition-all duration-500 rounded-full ${currentSlide === idx ? 'w-6 bg-primary' : 'w-2 bg-gray-200'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                                {galleryImages.map((img, idx) => (
                                    <Image
                                        key={idx}
                                        src={img}
                                        alt={`Slide ${idx + 1}`}
                                        fill
                                        className={`object-cover transition-opacity duration-1000 ${currentSlide === idx ? 'opacity-100' : 'opacity-0'}`}
                                    />
                                ))}
                            </div>
                            <div className="mt-10 flex flex-col items-center">
                                <button
                                    onClick={scrollToHero}
                                    className="w-full py-4 rounded-xl border-2 border-gray-100 text-secondary font-bold text-sm uppercase tracking-widest hover:bg-secondary hover:text-white hover:border-secondary transition-all active:scale-95 text-center"
                                >
                                    Explore Moments
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Card 3: Strategic Blocks */}
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-transform duration-300 flex flex-col relative">
                        <div className="h-2 w-full bg-primary" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-secondary font-sans font-bold text-xl tracking-tight mb-8">Quick Links</h3>
                            <div className="grid grid-cols-1 gap-4 flex-grow">
                                {[
                                    { title: 'Membership', color: 'hover:bg-[#EEB9BB]', href: 'https://forms.gle/gyXBhDGFnFX9vkmS7', isExternal: true },
                                    { title: 'International Conference', color: 'hover:bg-[#D4DC82]', href: '/international-conference-2026', isExternal: false },
                                    { title: 'Affiliation', color: 'hover:bg-[#D3B6F0]', href: 'https://forms.gle/469FAG4UTLDvVaTy6', isExternal: true },
                                    { title: 'Certificate Course in Holistic Health', color: 'hover:bg-[#B2D1F2]', href: 'https://forms.gle/X1vFV8VqQSRfTics7', isExternal: true }
                                ].map((activity, idx) => (
                                    <Link
                                        key={idx}
                                        href={activity.href}
                                        target={activity.isExternal ? '_blank' : undefined}
                                        rel={activity.isExternal ? 'noopener noreferrer' : undefined}
                                        className={`group/item flex items-center justify-between p-5 rounded-xl border border-gray-100 transition-all duration-300 hover:border-transparent ${activity.color} hover:scale-[1.03] shadow-sm hover:shadow-md`}
                                    >
                                        <span className="text-secondary font-bold text-sm">{activity.title}</span>
                                        <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center border border-white transition-colors group-hover/item:bg-white shadow-sm shrink-0">
                                            <ChevronRight size={18} className="text-secondary" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal Overlay */}
            {isVideoOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsVideoOpen(false)}
                    />

                    {/* Modal Content Container */}
                    <div className="relative w-full max-w-5xl aspect-video flex flex-col items-center">
                        {/* YouTube Embed - Border removed as requested */}
                        <div className="w-full h-full bg-black shadow-2xl relative">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/IjoX9unrlbg?autoplay=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Close Button reverted to previous style but kept below video */}
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="cursor-pointer mt-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center transition-all group border border-white/20"
                            aria-label="Close video"
                        >
                            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};
export default HolisticImpact;