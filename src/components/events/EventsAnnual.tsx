"use client";

import React, { useState } from "react";
import { Flame, CloudSun, Leaf, Globe2, ArrowRight } from "lucide-react";

export default function EventsAnnual() {
  const events = [
    {
      id: "health",
      title: "World Health Day",
      tag: "April 7th",
      desc: "An annual global campaign to building a fairer, healthier world. We host massive public awareness camps and distribute free essential health kits.",
      icon: <Globe2 className="w-8 h-8" />,
      color: "text-blue-600",
      bg: "bg-blue-100",
      border: "border-blue-200",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      id: "yoga",
      title: "International Yoga Day",
      tag: "June 21st",
      desc: "Mass yoga sessions held simultaneously across 50+ locations nationwide, celebrating the ancient practice's physical and spiritual benefits.",
      icon: <Flame className="w-8 h-8" />,
      color: "text-orange-600",
      bg: "bg-orange-100",
      border: "border-orange-200",
      gradient: "from-orange-500 to-amber-400",
    },
    {
      id: "mental",
      title: "Mental Health Week",
      tag: "October 10th",
      desc: "A dedicated week of seminars combating stigma, offering free counseling sessions, and promoting psychological wellbeing practices.",
      icon: <CloudSun className="w-8 h-8" />,
      color: "text-purple-600",
      bg: "bg-purple-100",
      border: "border-purple-200",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      id: "nutrition",
      title: "National Nutrition Month",
      tag: "September",
      desc: "Focusing on the importance of making informed food choices and developing sound eating and physical activity habits.",
      icon: <Leaf className="w-8 h-8" />,
      color: "text-emerald-600",
      bg: "bg-emerald-100",
      border: "border-emerald-200",
      gradient: "from-emerald-500 to-teal-400",
    },
  ];

  const [activeEvent, setActiveEvent] = useState(events[0]);

  return (
    <section className="py-20 md:py-32 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
            Annual Celebrations
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary tracking-tight">
            Special Events
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-center">
          {/* Left Side: Interactive List */}
          <div className="space-y-4">
            {events.map((evt) => (
              <button
                key={evt.id}
                onClick={() => setActiveEvent(evt)}
                className={`w-full text-left p-6 md:p-8 rounded-[32px] transition-all duration-300 border flex items-center justify-between group ${
                  activeEvent.id === evt.id
                    ? `bg-white border-gray-200 shadow-[0_20px_40px_rgb(0,0,0,0.08)] scale-[1.02] z-10 relative`
                    : `bg-transparent border-transparent hover:bg-white/50 hover:border-gray-200 cursor-pointer`
                }`}
              >
                <div className="flex items-center gap-6">
                  <div
                    className={`size-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      activeEvent.id === evt.id ? "scale-105" : ""
                    } ${evt.bg} ${evt.color}`}
                  >
                    {evt.icon}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest block mb-1">
                      {evt.tag}
                    </span>
                    <h3
                      className={`text-xl md:text-2xl font-black transition-colors ${
                        activeEvent.id === evt.id
                          ? "text-gray-900"
                          : "text-gray-500 group-hover:text-gray-700"
                      }`}
                    >
                      {evt.title}
                    </h3>
                  </div>
                </div>

                {activeEvent.id === evt.id && (
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-gray-50 items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Right Side: Dynamic Display Card */}
          <div className="relative w-full h-full min-h-[500px] flex items-center justify-center mt-8 lg:mt-0">
            {/* Background Glow */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 blur-[100px] rounded-full transition-colors duration-700 opacity-30 bg-linear-to-tr ${activeEvent.gradient}`}
            />

            {/* Main Showcase Card */}
            <div className="relative z-10 bg-white w-full rounded-[40px] p-8 md:p-12 shadow-[0_20px_60px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col h-full justify-center transform transition-all duration-500">
              <div
                className={`size-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm ${activeEvent.bg} ${activeEvent.color}`}
              >
                {activeEvent.icon}
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 w-max font-bold text-sm bg-gray-50 border-gray-200 text-gray-600">
                Mark Your Calendar: {activeEvent.tag}
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-6">
                {activeEvent.title}
              </h3>

              <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed mb-10">
                {activeEvent.desc}
              </p>

              <button className="bg-primary text-white lg:px-8 md:px-6 px-4 lg:py-4 py-3 rounded-full font-bold transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-max cursor-pointer">
                Learn More About This Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
