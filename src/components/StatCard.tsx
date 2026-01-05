"use client";

import { useEffect, useRef } from 'react';
import { useMotionValue, useSpring, useInView } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
    icon: LucideIcon;
    number: number;
    label: string;
    suffix?: string;
}

export default function StatCard({ icon: Icon, number, label, suffix = "" }: StatCardProps) {
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(number);
        }
    }, [isInView, motionValue, number]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                const element = ref.current as HTMLSpanElement;
                element.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest));
            }
        });
    }, [springValue]);

    return (
        <div
            className="group relative flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-zinc-100 shadow-sm"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/0 rounded-2xl" />

            {/* Icon Container */}
            <div className="relative mb-6 p-4 rounded-full bg-zinc-50 text-primary">
                <Icon size={32} strokeWidth={1.5} />
            </div>

            {/* Number with Counter */}
            <div className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-2 tabular-nums">
                <span ref={ref}>0</span>
                <span>{suffix}</span>
            </div>

            {/* Label */}
            <p className="text-zinc-500 font-medium text-center uppercase tracking-wider text-sm">
                {label}
            </p>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary rounded-full" />
        </div>
    );
}
