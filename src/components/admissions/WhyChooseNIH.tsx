"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Users,
  Globe2,
  BookOpenCheck,
  Stethoscope,
} from "lucide-react";

export default function WhyChooseNIH() {
  const reasons = [
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Government Recognized",
      description:
        "Registered with the Ministry of MSME and NITI Aayog, Government of India.",
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "Global Certification",
      description:
        "Our certifications are recognized globally, unlocking international career opportunities.",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Expert Faculty",
      description:
        "Learn directly from world-renowned Yogacharyas, Naturopaths, and medical experts.",
    },
    {
      icon: <Globe2 className="w-7 h-7" />,
      title: "International Network",
      description:
        "Join an established holistic health community spanning across 8+ different countries.",
    },
    {
      icon: <BookOpenCheck className="w-7 h-7" />,
      title: "Comprehensive Curriculum",
      description:
        "Scientifically designed modules bridging ancient wisdom with modern wellness practices.",
    },
    {
      icon: <Stethoscope className="w-7 h-7" />,
      title: "Practical Training",
      description:
        "Gain hands-on clinical and practical experience at associated medical centers and ashrams.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-5 py-2 bg-primary/5 rounded-full text-primary font-bold text-xs tracking-[0.2em] uppercase"
          >
            Excellence in Education
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight"
          >
            Why Choose <span className="text-primary tracking-normal">NIH</span>
            ?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-lg leading-relaxed max-w-2xl mx-auto font-medium"
          >
            We provide an unparalleled educational environment that nurtures
            holistic practitioners to achieve mastery in their field.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 group flex flex-col items-start"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {reason.icon}
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-primary transition-colors duration-300">
                {reason.title}
              </h4>
              <p className="text-zinc-500 leading-relaxed font-medium">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
