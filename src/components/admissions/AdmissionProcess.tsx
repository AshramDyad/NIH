"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  ClipboardList,
  FileSignature,
  CheckCircle2,
  GraduationCap,
  Users2,
  type LucideIcon,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      delay: 0.5,
      duration: 3.0,
      ease: "linear",
    },
  },
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

export default function AdmissionProcess() {
  const steps: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[] = [
    {
      icon: ClipboardList,
      title: "Step 1: Check Eligibility",
      description:
        "Review the prerequisites for your desired course (CCH, Yoga Training, etc.) in our official brochure.",
    },
    {
      icon: FileSignature,
      title: "Step 2: Submit Application",
      description:
        "Complete the online admission form with your educational details and identity proof.",
    },
    {
      icon: CheckCircle2,
      title: "Step 3: Verification & Approval",
      description:
        "Our administrative team will review your application and documents for approval within 48 hours.",
    },
    {
      icon: GraduationCap,
      title: "Step 4: Enrollment & Induction",
      description:
        "Upon approval and fee submission, you will receive your official enrollment kit and batch details.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Text/Image Side */}
          <div className="lg:w-5/12 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-2 border border-primary/20 font-bold tracking-wide text-sm shadow-sm">
                <Users2 className="w-4 h-4" />
                <span>Admission Process</span>
              </div>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-[1.1]"
            >
              A Seamless <br />
              <span className="text-primary font-black tracking-tight">
                Admission Process
              </span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-500 text-lg leading-relaxed max-w-md font-medium"
            >
              We have completely streamlined our intake process to ensure you
              can focus entirely on what truly matters: your holistic education
              and spiritual growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-6"
            >
              <div className="flex items-center gap-5 p-5 bg-white rounded-3xl border border-zinc-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] w-max">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-900 tracking-wide uppercase">
                    100% Online Support
                  </div>
                  <div className="text-sm text-zinc-500 font-medium mt-0.5">
                    Dedicated application assistance
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Process Steps Side */}
          <div className="lg:w-7/12 w-full mt-8 lg:mt-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              {/* Ultra-thin base connecting line */}
              <div className="absolute left-[1.18rem] top-6 bottom-6 w-px bg-zinc-200 hidden md:block z-0" />

              {/* Animated primary connecting line */}
              <motion.div
                variants={lineVariants}
                className="absolute left-[1.18rem] top-6 bottom-6 w-px bg-primary hidden md:block origin-top z-0"
              />

              <div className="space-y-12 relative z-10">
                {steps.map((step, index) => {
                  const StepIcon = step.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index === 0 ? 0 : 0.5 + index * 1.0,
                        duration: 0.5,
                      }}
                      className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative group"
                    >
                      {/* Minimalist Icon Node */}
                      <div className="relative w-10 h-10 mt-1 md:mt-0 shrink-0">
                        {/* Base Icon Node */}
                        <div className="absolute inset-0 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center z-10 transition-all duration-300">
                          <StepIcon className="w-4 h-4 text-zinc-400 transition-colors" />
                        </div>

                        {/* Highlighted Animated Icon Node */}
                        <motion.div
                          custom={index}
                          variants={highlightCircleVariants}
                          className="absolute inset-0 rounded-full bg-white border border-primary shadow-sm flex items-center justify-center z-20 group-hover:bg-primary/5 transition-colors"
                        >
                          <StepIcon className="w-4 h-4 text-primary transition-colors" />
                        </motion.div>
                      </div>

                      {/* Clean Text Block */}
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-zinc-900 mb-2">
                          {step.title}
                        </h4>
                        <p className="text-zinc-500 leading-relaxed font-medium">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
