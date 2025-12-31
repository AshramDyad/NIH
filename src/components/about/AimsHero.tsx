"use client";

import { Target } from "lucide-react";

export default function AimsHero() {
    return (
        <section className="sm:py-16 py-12 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <div className="inline-flex items-center px-4 py-2 bg-primary/20 rounded-full text-primary font-bold text-sm uppercase tracking-widest">
                        <Target className="w-4 h-4 mr-2" />
                        Our Foundation
                    </div>

                    <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
                        The <span className="text-primary italic">Aims</span> and <span className="text-secondary italic">Objectives</span> of Holistic Health System are:
                    </h1>

                    <p className="text-lg text-zinc-600 leading-relaxed font-medium max-w-3xl mx-auto">
                        We are committed to fostering a world where holistic health is the standard,
                        guided by clear goals and a steadfast mission to empower every individual.
                    </p>
                </div>
            </div>
        </section>
    );
}
