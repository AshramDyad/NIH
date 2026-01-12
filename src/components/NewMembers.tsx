'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Briefcase, MapPin } from 'lucide-react';

import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface Member {
    id: number;
    name: string;
    role: string;
    location: string;
    image: string;
}

const members: Member[] = [
    {
        id: 1,
        name: "Savita Krishnan",
        role: "Executive Member",
        location: "New Delhi",
        image: "/images/savitakrishnan.jpg"
    },
    {
        id: 2,
        name: "Seema Pathak",
        role: "Executive Member",
        location: "Aligarh, UP",
        image: "/images/anonymous.jpg"
    },
    {
        id: 3,
        name: "Meena Dhaval",
        role: "Executive Member",
        location: "Ahmedabad, Gujarat",
        image: "/images/meenadhavaldholakia.jpg"
    },
    {
        id: 4,
        name: "Bilkis H.kajliwala",
        role: "Executive Member",
        location: "Godhra, Gujarat",
        image: "/images/Bilkis.png"
    },
];

const MemberCard = ({ member }: { member: Member }) => (
    <div className="bg-white rounded-2xl p-8 h-full flex flex-col items-center text-center transition-all duration-500 border border-gray-200 hover:border-gray-100 group/card">
        {/* Member Image */}
        <div className="relative w-36 h-36 mb-8">
            <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-0 group-hover/card:opacity-10 transition-opacity duration-500" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                />
            </div>
        </div>

        {/* Member Info */}
        <h3 className="text-secondary text-2xl font-bold mb-6 tracking-tight">{member.name}</h3>

        <div className="w-full h-px bg-gray-100 mb-6" />

        <div className="w-full space-y-4 text-left">
            <div className="flex items-center gap-4 text-gray-500 group-hover/card:text-gray-700 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover/card:bg-secondary/5 transition-colors">
                    <Briefcase className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-sm font-bold tracking-wide uppercase">{member.role}</span>
            </div>
            <div className="flex items-center gap-4 text-gray-500 group-hover/card:text-gray-700 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover/card:bg-secondary/5 transition-colors">
                    <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-sm font-bold tracking-wide">{member.location}</span>
            </div>
        </div>
    </div>
);

const NewMembers = () => {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section className="bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header Section */}
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black text-zinc-900">Our New <span className="text-secondary italic">Members</span></h2>
                    <p className="text-gray-600 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                        NIH Welcome our New Members.<br />
                        Here are some Members who are actively doing a great job in Health Sector.<br />
                        Conducting Health Check-up Camps, webinars and much more.
                    </p>
                </div>

                {/* Swiper Slider with Placeholder */}
                <div className="relative group min-h-[480px] px-4 mt-8">
                    <div>
                        {!isMounted ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {members.slice(0, 4).map((member, idx) => (
                                    <div
                                        key={member.id}
                                        className={`
                                            ${idx >= 1 ? 'hidden sm:block' : ''} 
                                            ${idx >= 2 ? 'hidden lg:block' : ''} 
                                            ${idx >= 3 ? 'hidden xl:block' : ''}
                                        `}
                                    >
                                        <MemberCard member={member} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={24}
                                slidesPerView={1}
                                navigation={{
                                    prevEl: '.swiper-button-prev-custom',
                                    nextEl: '.swiper-button-next-custom',
                                }}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                    1280: {
                                        slidesPerView: 4,
                                    },
                                }}
                            >
                                {members.map((member) => (
                                    <SwiperSlide key={member.id}>
                                        <MemberCard member={member} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                    </div>

                    {/* Custom Navigation Buttons */}
                    <button className="swiper-button-prev-custom absolute left-0 md:-left-2 top-1/2 -translate-y-1/2 z-20 sm:size-11 size-8 bg-primary text-white rounded-xl flex items-center justify-center cursor-pointer group border border-white/10">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button className="swiper-button-next-custom absolute right-0 md:-right-2 top-1/2 -translate-y-1/2 z-20 sm:size-11 size-8 bg-primary text-white rounded-xl flex items-center justify-center cursor-pointer group border border-white/10">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* New Dual Callout Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white relative">
                        <div className="relative flex flex-col md:flex-row items-stretch max-w-2xl mx-auto gap-10">
                            {/* NIH Guidance */}
                            <div className="flex-1 flex flex-col items-center text-center">
                                <h3 className="text-primary  text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                                    NIH Guidance
                                </h3>
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 rounded-full px-8 py-3 text-lg font-bold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg active:scale-95 bg-transparent"
                                >
                                    Know More
                                </Link>
                            </div>

                            {/* Separator */}
                            <div className="w-full md:w-px h-px md:h-28 bg-primary self-center mx-auto" />

                            {/* Success Stories */}
                            <div className="flex-1 flex flex-col items-center text-center">
                                <h3 className="text-primary  text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                                    Success Stories
                                </h3>
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 rounded-full px-8 py-3 text-lg font-bold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg active:scale-95 bg-transparent"
                                >
                                    Know More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Affiliation Section */}
            <div className="bg-secondary mt-10 py-8 flex justify-center items-center">
                <div className="max-w-7xl mx-auto px-4 w-full">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
                        <span className="text-white text-xl font-bold italic tracking-wide opacity-90 whitespace-nowrap">
                            Affiliated by
                        </span>

                        <div className="relative h-20 sm:h-24 md:h-28 lg:h-32 w-auto shrink-0">
                            <Image
                                src="/images/univariety-white-logo.png"
                                alt="Univariety Logo"
                                width={400}
                                height={400}
                                quality={100}
                                priority
                                className="h-full w-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewMembers;
