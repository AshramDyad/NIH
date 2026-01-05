"use client";

import {
    Users,
    UserCheck,
    Building2,
    Hospital,
    Tent,
    Mountain,
    Video,
    Sun
} from 'lucide-react';
import StatCard from './StatCard';

const stats = [
    {
        icon: Users,
        number: 135,
        label: "Students",
    },
    {
        icon: UserCheck,
        number: 2127,
        label: "Members",
    },
    {
        icon: Building2,
        number: 21,
        label: "Associated Centres",
    },
    {
        icon: Hospital,
        number: 13,
        label: "Wellness Centres",
    },
    {
        icon: Tent,
        number: 224,
        label: "Checkup Camps",
    },
    {
        icon: Mountain,
        number: 11,
        label: "Health Retreats",
    },
    {
        icon: Video,
        number: 64,
        label: "Webinars",
    },
    {
        icon: Sun,
        number: 4,
        label: "Int'l Yoga Day",
    }
];

export default function NIHNumbers() {
    return (
        <section className="sm:py-16 py-12 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-zinc-900">NIH In <span className="text-secondary italic">Numbers</span></h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 md:gap-8">
                    {stats.map((stat) => (
                        <StatCard
                            key={stat.label}
                            icon={stat.icon}
                            number={stat.number}
                            label={stat.label}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
