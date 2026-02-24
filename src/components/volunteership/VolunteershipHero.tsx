import React from "react";
import {
  Heart,
  Activity,
  Globe2,
  Users,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function VolunteershipHero() {
  const purposes = [
    {
      title: "Health Awareness",
      desc: "Promote and expand community health initiatives and education.",
      icon: <Activity className="w-6 h-6" />,
      color: "text-emerald-600",
      bg: "bg-emerald-100",
    },
    {
      title: "Event Support",
      desc: "Actively support large-scale wellness events and campaigns.",
      icon: <Globe2 className="w-6 h-6" />,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Social Responsibility",
      desc: "Encourage corporate and individual social responsibility.",
      icon: <Heart className="w-6 h-6" />,
      color: "text-rose-600",
      bg: "bg-rose-100",
    },
    {
      title: "Leadership",
      desc: "Provide leadership tools and outreach into underserved areas.",
      icon: <Users className="w-6 h-6" />,
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
  ];

  return (
    <section className="relative w-full pt-28 pb-20 md:pt-34 md:pb-28 bg-linear-to-b from-yellow-50/80 to-white overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        {/* Centered Hero Content */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700 border border-amber-200 mb-8 font-bold tracking-wide text-sm shadow-sm hover:shadow transition-shadow">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            <span>Make a Meaningful Impact</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-secondary leading-[1.05] mb-8 tracking-tight">
            Community <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-primary to-yellow-100">
              Wellness Volunteering
            </span>
          </h1>

          <p className="md:text-xl text-lg text-gray-500 leading-relaxed font-medium mb-12 max-w-2xl mx-auto">
            Join our comprehensive Volunteership Programme to promote health
            awareness, support large-scale community events, and develop
            powerful leadership skills.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-primary text-white lg:px-10 md:px-8 px-6 lg:py-4 md:py-3 py-3 rounded-full font-bold transition-all flex items-center gap-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              Become a Volunteer <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* 4-Column Horizontal Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {purposes.map((purpose, index) => (
            <div
              key={index}
              className="bg-white rounded-[32px] p-6 md:p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] relative overflow-hidden group transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 ${purpose.bg} ${purpose.color}`}
              >
                {purpose.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {purpose.title}
              </h3>
              <p className="text-gray-500 text-[15px] font-medium leading-relaxed">
                {purpose.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
