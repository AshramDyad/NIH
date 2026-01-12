"use client";

import { GraduationCap, BookOpen, Microscope, Eye } from "lucide-react";

const missionPoints = [
    {
        title: "Educational Excellence",
        icon: GraduationCap,
        content: "To start, establish, run, take over or manage and maintain schools, with an object to provide sound pre-primary, primary, middle, secondary, senior secondary and higher education to the children by seeking recognition.",
    },
    {
        title: "Professional Training",
        icon: BookOpen,
        content: "To arrange and manage the training institution in computer, fine arts, crafts, music, health (Allopathic, Ayurveda, Homeopathy, Naturopathy, Yoga, Acupressure, Acupuncture, Holistic Health System) other professional training subjects as well as Skill Development & Placement services.",
    },
    {
        title: "Research & Healthcare",
        icon: Microscope,
        content: "To conduct research in education and other disciplines on the different subjects relating to education & Healthcare.",
    }
];

export default function VisionMissionSplit() {
    return (
        <section className="sm:py-16 py-12 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-8 items-stretch">

                    {/* Vision - High Contrast Sticky */}
                    <div className="relative">
                        <div
                            className="sticky top-24 bg-zinc-900 rounded-4xl p-6 lg:p-8 text-white overflow-hidden shadow-2xl"
                        >
                            {/* Abstract Background Element */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -mr-32 -mt-32" />

                            <div className="relative z-10 space-y-6">
                                <div className="inline-flex items-center px-4 py-2 bg-primary/20 rounded-full text-primary font-bold text-sm uppercase tracking-widest">
                                    <Eye className="w-4 h-4 mr-2" />
                                    Our Vision
                                </div>

                                <h3 className="text-3xl md:text-5xl font-black leading-tight">
                                    Creating a <span className="text-primary italic">Healthy World</span> through Unity
                                </h3>

                                <p className="text-lg text-zinc-400 leading-relaxed">
                                    To establish a global community where holistic health is accessible to all, bridging the gap between ancient wisdom and modern living.
                                </p>

                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-px bg-zinc-500" />
                                    <span className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">Established for Excellence</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mission - Simple & Professional Cards */}
                    <div
                        className="space-y-6"
                    >
                        <div
                            className="inline-flex items-center px-4 py-2 bg-secondary/20 rounded-full text-secondary font-bold text-sm uppercase tracking-widest"
                        >
                            <Eye className="w-4 h-4 mr-2" />
                            Our Mission
                        </div>

                        <div className="grid gap-6">
                            {missionPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-zinc-50 border border-zinc-100 p-4 lg:p-6 rounded-2xl hover:bg-white hover:shadow-md hover:border-transparent transition-all duration-300"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="shrink-0 w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <point.icon className="w-7 h-7" />
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="sm:text-2xl text-xl font-semibold text-zinc-900 group-hover:text-primary transition-colors">
                                                {point.title}
                                            </h4>
                                            <p className="text-lg text-zinc-600 leading-relaxed">
                                                {point.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
