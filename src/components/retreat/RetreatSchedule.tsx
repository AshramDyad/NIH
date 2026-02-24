"use client";

import React, { useState } from "react";
import {
  Sunrise,
  Coffee,
  Users,
  Trees,
  UtensilsCrossed,
  MessageCircle,
  Volume2,
  Moon,
  BookHeart,
  Sun,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function RetreatSchedule() {
  const [activeTab, setActiveTab] = useState("Morning");

  const tabs = [
    { id: "Morning", icon: <Sunrise className="w-4 h-4" /> },
    { id: "Afternoon", icon: <Sun className="w-4 h-4" /> },
    { id: "Evening", icon: <Moon className="w-4 h-4" /> },
  ];

  const schedule = [
    {
      time: "6:00 AM",
      session: "Morning",
      activity: "Sunrise Yoga & Breathwork",
      desc: "Begin the day with gentle stretching and pranayama facing the sunrise.",
      icon: <Sunrise className="w-5 h-5" />,
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
    {
      time: "7:30 AM",
      session: "Morning",
      activity: "Detox Breakfast",
      desc: "Fresh, locally-sourced nutritional meal designed to cleanse the body.",
      icon: <Coffee className="w-5 h-5" />,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      time: "9:00 AM",
      session: "Morning",
      activity: "Wellness Workshop",
      desc: "Educational seminars on stress management and holistic living.",
      icon: <Users className="w-5 h-5" />,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      time: "11:00 AM",
      session: "Morning",
      activity: "Nature Therapy",
      desc: "Immersive nature walks or light outdoor physical activities.",
      icon: <Trees className="w-5 h-5" />,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      time: "1:00 PM",
      session: "Afternoon",
      activity: "Nutritious Lunch",
      desc: "A balanced, Ayurvedic-inspired mid-day meal.",
      icon: <UtensilsCrossed className="w-5 h-5" />,
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
    {
      time: "3:00 PM",
      session: "Afternoon",
      activity: "Personal Reflection",
      desc: "One-on-one sessions or quiet time for journaling and reflection.",
      icon: <MessageCircle className="w-5 h-5" />,
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
    {
      time: "5:00 PM",
      session: "Afternoon",
      activity: "Sound Healing",
      desc: "Guided evening meditation combined with therapeutic sound frequencies.",
      icon: <Volume2 className="w-5 h-5" />,
      color: "text-indigo-500",
      bg: "bg-indigo-50",
    },
    {
      time: "7:00 PM",
      session: "Evening",
      activity: "Light Dinner",
      desc: "A soothing, easy-to-digest meal favoring deep sleep.",
      icon: <Moon className="w-5 h-5" />,
      color: "text-slate-500",
      bg: "bg-slate-50",
    },
    {
      time: "8:30 PM",
      session: "Evening",
      activity: "Mindfulness Circle",
      desc: "Closing the day with gratitude sharing and relaxation techniques.",
      icon: <BookHeart className="w-5 h-5" />,
      color: "text-rose-500",
      bg: "bg-rose-50",
    },
  ];

  const activeSchedule = schedule.filter((s) => s.session === activeTab);

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden relative">
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">
            A Day in the Life
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-secondary tracking-tight mb-6">
            Daily Routine
          </h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
            Follow a carefully curated schedule designed to maximize your
            healing, learning, and relaxation from sunrise to sunset in perfect
            harmony.
          </p>
        </div>

        {/* Seamless Premium Segmented Control (Tabs) */}
        <div className="w-full flex overflow-x-auto pb-4 sm:pb-0 mb-12 md:mb-16 -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex sm:justify-center min-w-max mx-auto">
            <div className="inline-flex bg-gray-50 backdrop-blur-md p-1.5 rounded-full border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-2 md:gap-2.5 px-5 sm:px-6 md:px-8 py-3 md:pt-4 md:pb-3.5 rounded-full font-bold text-sm md:text-[15px] transition-colors cursor-pointer focus:outline-none ${
                      isActive
                        ? "text-primary"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="premium-active-pill"
                        className="absolute inset-0 bg-white rounded-full shadow-[0_4px_15px_rgb(0,0,0,0.05)] border border-gray-100/50"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                        }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {React.cloneElement(tab.icon, {
                        className: `w-4 h-4 ${isActive ? "text-primary" : "text-gray-400"}`,
                      })}
                      <span>{tab.id}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Schedule Wrapper */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white/80 backdrop-blur-xl rounded-[40px] px-6 py-10 md:p-14 shadow-[0_20px_60px_rgb(0,0,0,0.03)] border border-gray-100"
            >
              <div className="relative">
                {/* Continuous Elegant Vertical Timeline Background */}
                {/* 
                  Mobile center: Icon is w-12 (48px), starts at x=0 -> center is 24px. Line is 2px, so left-[23px]
                  Desktop center: Time block is w-32 (128px), Icon is w-14 (56px) -> center is 128 + 28 = 156px. Line is 2px, so left-[155px]
                */}
                <div className="absolute left-[23px] md:left-[155px] top-4 bottom-4 w-[3px] bg-linear-to-b from-gray-100 via-gray-200 to-gray-100" />

                <div className="space-y-0">
                  {activeSchedule.map((item, index) => {
                    const [timeStr, ampmStr] = item.time.split(" ");
                    return (
                      <div
                        key={index}
                        className="group relative flex items-start py-8 md:py-10 last:border-0 last:pb-0 first:pt-0"
                      >
                        {/* Ultra clean Time Display */}
                        <div className="shrink-0 w-24 md:w-32 pt-2 pr-4 text-right hidden md:block">
                          <span className="text-secondary font-black tracking-tight flex flex-col items-end">
                            <span className="text-2xl font-black">
                              {timeStr}
                            </span>
                            <span className="text-xs text-primary font-bold tracking-widest uppercase">
                              {ampmStr}
                            </span>
                          </span>
                        </div>

                        {/* Interactive Node */}
                        <div className="relative shrink-0 flex flex-col items-center">
                          {/* Inner glowing effect on hover */}
                          <div
                            className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transform transition-all duration-500 blur-md ${item.bg}`}
                          />
                          <div
                            className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shrink-0 bg-white border-4 border-white ${item.color} shadow-[0_4px_15px_rgb(0,0,0,0.06)] transition-all duration-300 relative z-10`}
                          >
                            <div
                              className={`w-full h-full rounded-full flex items-center justify-center ${item.bg}`}
                            >
                              {item.icon}
                            </div>
                          </div>
                        </div>

                        {/* Mobile time display alongside content */}
                        <div className="flex-1 pl-6 pt-1 md:pt-2">
                          <div className="md:hidden flex items-baseline gap-2 mb-2">
                            <span className="text-xl font-black text-secondary">
                              {timeStr}
                            </span>
                            <span className="text-[10px] text-primary font-bold tracking-widest uppercase">
                              {ampmStr}
                            </span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-snug tracking-tight transition-colors">
                            {item.activity}
                          </h3>
                          <p className="text-gray-500 text-base md:text-[17px] font-medium leading-relaxed max-w-lg">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
