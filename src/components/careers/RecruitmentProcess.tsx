"use client";
import React from "react";
import { FileText, ClipboardCheck, Users, Activity, Award } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      delay: 0.5,
      duration: 4.0,
      ease: "linear",
    },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

const highlightCircleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i === 0 ? 0 : 0.5 + i * 1.0,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  }),
};

const highlightTextVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i === 0 ? 0.2 : 0.7 + i * 1.0,
      duration: 0.5,
    },
  }),
};

export default function RecruitmentProcess() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">
            Our Recruitment Process
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mx-auto mt-6 mb-6" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Base Gray Connecting Line (Visible on Desktop) */}
          <div className="hidden md:block absolute top-[32px] left-[10%] right-[10%] h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10"
          >
            {/* Animated Primary Connecting Line (Visible on Desktop) */}
            <motion.div
              variants={lineVariants}
              className="hidden md:block absolute top-[32px] left-[10%] right-[10%] h-1 bg-primary -translate-y-1/2 z-0 origin-left"
            ></motion.div>

            {[
              {
                step: 1,
                title: "Application Submission",
                icon: <FileText className="w-6 h-6" />,
              },
              {
                step: 2,
                title: "CV Screening",
                icon: <ClipboardCheck className="w-6 h-6" />,
              },
              {
                step: 3,
                title: "Interview",
                desc: "(online/offline)",
                icon: <Users className="w-6 h-6" />,
              },
              {
                step: 4,
                title: "Skill Demo",
                desc: "(if required)",
                icon: <Activity className="w-6 h-6" />,
              },
              {
                step: 5,
                title: "Offer Letter",
                icon: <Award className="w-6 h-6" />,
              },
            ].map((process, i) => (
              <motion.div
                key={i}
                variants={stepVariants}
                className="flex flex-col items-center bg-white md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none shadow-sm md:shadow-none border border-gray-100 md:border-transparent text-center relative z-10"
              >
                {/* Step Circle Container */}
                <div className="relative w-16 h-16 mb-2">
                  {/* Base Gray Circle */}
                  <div className="absolute inset-0 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center text-gray-400 font-black shadow-sm">
                    {process.step}
                  </div>

                  {/* Highlighted Animated Circle */}
                  <motion.div
                    custom={i}
                    variants={highlightCircleVariants}
                    className="absolute inset-0 bg-white border-4 border-primary text-primary rounded-full flex items-center justify-center shadow-xl shadow-primary/20 font-black"
                  >
                    {process.step}
                  </motion.div>
                </div>

                {/* Text Content Container */}
                <div className="relative flex flex-col items-center w-full mt-4">
                  {/* Base Gray Text Content */}
                  <div className="flex flex-col items-center gap-2 w-full">
                    <div className="text-gray-300">{process.icon}</div>
                    <h4 className="text-sm font-bold text-gray-400 leading-tight uppercase tracking-wider">
                      {process.title}
                    </h4>
                    {process.desc && (
                      <span className="text-xs text-gray-400 font-medium">
                        {process.desc}
                      </span>
                    )}
                  </div>

                  {/* Highlighted Animated Text Content */}
                  <motion.div
                    custom={i}
                    variants={highlightTextVariants}
                    className="absolute inset-0 flex flex-col items-center gap-2 w-full"
                  >
                    <div className="text-primary">{process.icon}</div>
                    <h4 className="text-sm font-bold text-gray-900 leading-tight uppercase tracking-wider">
                      {process.title}
                    </h4>
                    {process.desc && (
                      <span className="text-xs text-primary font-medium">
                        {process.desc}
                      </span>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
