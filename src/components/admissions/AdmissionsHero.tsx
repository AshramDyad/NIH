"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AdmissionsHero() {
  return (
    <section className="relative w-full bg-zinc-950 overflow-hidden min-h-[70vh] flex items-center pt-24 pb-16">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 bg-zinc-950">
        <Image
          src="/images/image.png"
          alt="Admissions Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-primary font-bold text-sm tracking-widest uppercase"
          >
            <GraduationCap className="w-5 h-5 mr-2" />
            Admissions Open 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white leading-[1.1]"
          >
            Shape Your Future in <br />
            <span className="text-primary">Holistic Health</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80 font-medium max-w-2xl leading-relaxed"
          >
            Join the National Institute of Holistic Health (NIH) to embark on a
            transformative journey. We offer world-class certification courses
            in Yoga, Naturopathy, and Holistic wellness.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-6"
          >
            <Link
              href="https://forms.gle/nSVrUNjNcFgBYfbR7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center lg:px-8 px-6 lg:py-4 py-3 bg-primary text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.3)]"
            >
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>

            <Link
              href="/pdfs/brochure-in-sequence-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center lg:px-8 px-6 lg:py-4 py-3 bg-white/5 backdrop-blur-md text-white rounded-full font-bold text-lg border border-white/10 transition-all"
            >
              <BookOpen className="ml-2 w-5 h-5 mr-2" />
              Download Brochure
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
