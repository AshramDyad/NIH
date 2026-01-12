"use client";

import {
    HeartPulse,
    ShieldCheck,
    UserCheck,
    Dna,
    Sparkles,
    TrendingDown,
    Smile,
    UserPlus,
    HeartHandshake,
} from "lucide-react";

const aims = [
    {
        title: "Comprehensive Care",
        description: "Provide comprehensive care that addresses physical, emotional, mental, and spiritual well-being.",
        icon: HeartPulse,
        color: "text-rose-500",
        bg: "bg-rose-50",
        border: "border-rose-100"
    },
    {
        title: "Preventive Approach",
        description: "Focus on prevention and promotion of health, rather than just treating diseases.",
        icon: ShieldCheck,
        color: "text-emerald-500",
        bg: "bg-emerald-50",
        border: "border-emerald-100"
    },
    {
        title: "Empowerment",
        description: "Empower individuals to take responsibility for their own health and well-being.",
        icon: UserCheck,
        color: "text-amber-500",
        bg: "bg-amber-50",
        border: "border-amber-100"
    },
    {
        title: "Integration",
        description: "Integrate conventional and alternative therapies to provide a holistic approach to health.",
        icon: Dna,
        color: "text-sky-500",
        bg: "bg-sky-50",
        border: "border-sky-100"
    }
];

const objectives = [
    {
        title: "Improve Quality of Life",
        description: "Improve the overall quality of life by addressing physical, emotional, and spiritual needs.",
        icon: Sparkles,
        accent: "bg-purple-100 text-purple-600"
    },
    {
        title: "Reduce Disease Burden",
        description: "Reduce the burden of chronic diseases through preventive and therapeutic measures.",
        icon: TrendingDown,
        accent: "bg-red-100 text-red-600"
    },
    {
        title: "Enhance Well-being",
        description: "Enhance overall well-being by promoting healthy lifestyle choices and habits.",
        icon: Smile,
        accent: "bg-teal-100 text-teal-600"
    },
    {
        title: "Foster Personal Growth",
        description: "Foster personal growth and self-awareness through education and support.",
        icon: UserPlus,
        accent: "bg-indigo-100 text-indigo-600"
    },
    {
        title: "Supportive Environment",
        description: "Create a supportive environment that promotes health and well-being.",
        icon: HeartHandshake,
        accent: "bg-pink-100 text-pink-600"
    }
];

const principles = [
    {
        title: "Holistic Approach",
        description: "Consider the whole person - physical, emotional, mental, and spiritual - in the healing process.",
    },
    {
        title: "Patient-Centered",
        description: "Focus on the patient's needs, values, and preferences.",
    },
    {
        title: "Collaboration",
        description: "Encourage collaboration between healthcare providers, patients, and families.",
    },
    {
        title: "Evidence-Based",
        description: "Use evidence-based practices and therapies to ensure effective care.",
    }
];

const benefits = [
    {
        title: "Improved Health Outcomes",
        description: "Improved health outcomes through comprehensive and preventive care.",
    },
    {
        title: "Increased Patient Satisfaction",
        description: "Increased patient satisfaction through patient-centered care.",
    },
    {
        title: "Reduced Healthcare Costs",
        description: "Reduced healthcare costs through preventive measures and reduced hospitalizations.",
    },
    {
        title: "Enhanced Quality of Life",
        description: "Enhanced quality of life through holistic approach to health and well-being.",
    }
];

export default function AimsContent() {
    return (
        <>
            {/* Aims Section */}
            <section className="sm:pb-16 pb-12">
                <div className="container mx-auto px-4">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black text-zinc-900">
                            Our Primary <span className="text-primary italic">Aims</span>
                        </h2>
                        <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                            The Aims and Objectives of Holistic Health System are designed to provide a
                            complete ecosystem for human wellness.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        {aims.map((aim, index) => (
                            <div
                                key={index}
                                className={`group sm:p-6 p-4 rounded-3xl border ${aim.border} ${aim.bg}`}
                            >
                                <div className="flex items-start gap-6">
                                    <div className={`p-4 rounded-2xl bg-white shadow-sm ${aim.color}`}>
                                        <aim.icon className="w-8 h-8" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="sm:text-2xl text-xl font-semibold text-zinc-900">
                                            {aim.title}
                                        </h3>
                                        <p className="text-lg text-zinc-600 leading-relaxed">
                                            {aim.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-primary/5 sm:py-16 py-12">
                <div className="container mx-auto px-4">
                    <div className="sm:text-center text-left">
                        <h2 className="text-3xl md:text-5xl font-black text-zinc-900">
                            Core <span className="text-primary italic">Benefits</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
                        {benefits.map((b, index) => (
                            <div
                                key={index}
                                className="space-y-2"
                            >
                                <h3 className="sm:text-2xl text-xl font-semibold text-zinc-900">
                                    {b.title}
                                </h3>
                                <p className="text-lg text-zinc-600 leading-relaxed">
                                    {b.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 max-w-4xl mx-auto text-center">
                        <div className="sm:p-6 p-4 rounded-2xl border-l-4 border-primary bg-white">
                            <p className="text-lg sm:text-xl text-zinc-800 leading-relaxed italic">
                                &quot;By focusing on the whole person and promoting a comprehensive approach to health,
                                Holistic Health Systems aim to improve overall health and well-being.&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Objectives Section - Bento Grid Style */}
            <section className="bg-zinc-50 sm:py-16 py-12 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-5xl font-black text-zinc-900">
                            Strategic <span className="text-secondary italic">Objectives</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {objectives.map((obj, index) => (
                            <div
                                key={index}
                                className={`bg-white sm:p-6 p-4 rounded-2xl shadow-sm border border-zinc-100 relative overflow-hidden ${index === 3 ? "md:col-span-1 lg:col-span-1" :
                                    index === 4 ? "md:col-span-1 lg:col-span-2" : ""
                                    }`}
                            >
                                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-secondary/5 transition-colors" />

                                <div className="relative z-10 space-y-4">
                                    <div className={`w-14 h-14 rounded-2xl ${obj.accent} flex items-center justify-center`}>
                                        <obj.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="sm:text-2xl text-xl font-semibold text-zinc-900">
                                        {obj.title}
                                    </h3>
                                    <p className="text-lg text-zinc-600 leading-relaxed">
                                        {obj.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Principles Section */}
            <section className="sm:py-16 py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-5xl font-black text-zinc-900">
                            Key <span className="text-primary italic">Principles</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 mt-8">
                        {principles.map((p, index) => (
                            <div
                                key={index}
                                className="flex gap-6 items-start"
                            >
                                <div className="shrink-0">
                                    <span className="text-4xl md:text-5xl font-black text-primary/20">
                                        0{index + 1}
                                    </span>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="sm:text-2xl text-xl font-semibold text-zinc-900">
                                        {p.title}
                                    </h3>
                                    <p className="text-lg text-zinc-600 leading-relaxed">
                                        {p.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> 
        </>
    );
}
