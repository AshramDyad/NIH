'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Briefcase, MapPin } from 'lucide-react';

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

const lifetimeMembers: Member[] = [
    {
        id: 1,
        name: "Dr. Vikas Upadhyay",
        role: "Lifetime Member",
        location: "Aligarh, UP",
        image: "/images/vikasupadhyay.jpg"
    },
    {
        id: 2,
        name: "Anil Kumar Gupta",
        role: "Lifetime Member",
        location: "Lucknow, UP",
        image: "/images/Anil-Kumar.png"
    },
    {
        id: 3,
        name: "Shashi Sharma",
        role: "Lifetime Member",
        location: "Aligarh, UP",
        image: "/images/Shashi-Sharma.png"
    },
    {
        id: 4,
        name: "Dr. Rekha Choudhary",
        role: "Lifetime Member",
        location: "Indirapuram, Ghaziabad",
        image: "/images/Rekha-Choudhary.png"
    },
    {
        id: 5,
        name: "Sadhna Upadhyay",
        role: "Lifetime Member",
        location: "Aligarh, UP",
        image: "/images/Sadhna-Upadhyay.png"
    },
    {
        id: 6,
        name: "Praveen Jain",
        role: "Lifetime Member",
        location: "Delhi",
        image: "/images/Praveen-Jain.png"
    },
    {
        id: 7,
        name: "Dr. Sumanlata Dewangan",
        role: "Lifetime Member",
        location: "Haridwar",
        image: "/images/Sumanlata-Dewangan.png"
    },
    {
        id: 8,
        name: "Dr. Virendra Vikram Singh",
        role: "Lifetime Member",
        location: "Balrampur, UP",
        image: "/images/Virendra-Vikram-Singh.png"
    },
    {
        id: 9,
        name: "Dr. Krantiveer Shivram Mahindrakar",
        role: "Lifetime Member",
        location: "Solapur, Maharashtra",
        image: "/images/Krantiveer-Shivram-Mahindrakar.png"
    },
    {
        id: 10,
        name: "Dhaval Dholakia",
        role: "Lifetime Member",
        location: "Ahmedabad, Gujarat",
        image: "/images/dhavaldholakia.jpg"
    },
    {
        id: 11,
        name: "Dr. Ramesh Chandra",
        role: "Lifetime Member",
        location: "Prayagraj, UP",
        image: "/images/Ramesh-Chandra.png"
    },
    {
        id: 12,
        name: "Amarjit Singh Jaisingh Ahluwalia",
        role: "Lifetime Member",
        location: "Jamnagar, Gujarat",
        image: "/images/Amarjit-Singh.png"
    },
    {
        id: 13,
        name: "Dr. Parth Bhavesh Pandya",
        role: "Lifetime Member",
        location: "Rajkot, Gujarat",
        image: "/images/Parth-Bhavesh-Pandya.png"
    },
    {
        id: 14,
        name: "T.N Hassija",
        role: "Lifetime Member",
        location: "New Delhi",
        image: "/images/Hassija.png"
    },
];

const MemberCard = ({ member }: { member: Member }) => (
    <div className="bg-white rounded-2xl p-8 h-full flex flex-col items-center text-center transition-all duration-500 border border-gray-200 hover:border-gray-100 group/card">
        {/* Member Image */}
        <div className="relative w-36 h-36 mb-6 shrink-0">
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

        {/* Member Name - Fixed height for consistency */}
        <h3 className="text-secondary text-xl font-bold mb-4 tracking-tight min-h-14 flex items-center justify-center">{member.name}</h3>

        <div className="w-full h-px bg-gray-100 mb-4" />

        <div className="w-full space-y-3 text-left mt-auto">
            <div className="flex items-center gap-4 text-gray-500 group-hover/card:text-gray-700 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover/card:bg-secondary/5 transition-colors shrink-0">
                    <Briefcase className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-sm font-bold tracking-wide uppercase">{member.role}</span>
            </div>
            <div className="flex items-center gap-4 text-gray-500 group-hover/card:text-gray-700 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover/card:bg-secondary/5 transition-colors shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-sm font-bold tracking-wide">{member.location}</span>
            </div>
        </div>
    </div>
);

const LifetimeMembers = () => {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section className="bg-white sm:pt-16 pt-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header Section */}
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black text-zinc-900">Our Lifetime <span className="text-secondary italic">Members</span></h2>
                    <p className="text-gray-600 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed">
                        NIH Honours our Lifetime Members.<br />
                        These are our dedicated members who have made significant contributions to Holistic Health.<br />
                        Their commitment inspires us every day.
                    </p>
                </div>

                {/* Swiper Slider with Placeholder */}
                <div className="relative group min-h-[480px] px-4 mt-8">
                    <div>
                        {!isMounted ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {lifetimeMembers.slice(0, 4).map((member, idx) => (
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
                                    prevEl: '.lifetime-swiper-prev',
                                    nextEl: '.lifetime-swiper-next',
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
                                {lifetimeMembers.map((member) => (
                                    <SwiperSlide key={member.id}>
                                        <MemberCard member={member} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                    </div>

                    {/* Custom Navigation Buttons */}
                    <button className="lifetime-swiper-prev absolute left-0 md:-left-2 top-1/2 -translate-y-1/2 z-20 sm:size-11 size-8 bg-primary text-white rounded-xl flex items-center justify-center cursor-pointer group border border-white/10">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button className="lifetime-swiper-next absolute right-0 md:-right-2 top-1/2 -translate-y-1/2 z-20 sm:size-11 size-8 bg-primary text-white rounded-xl flex items-center justify-center cursor-pointer group border border-white/10">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LifetimeMembers;
