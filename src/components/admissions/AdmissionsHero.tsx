"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AdmissionsHero() {
  const courseBrochureHref = "/pdfs/course%20brochure%202026.pdf";

  return (
    <section className="relative w-full bg-zinc-950 overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 bg-linear-to-br from-zinc-950 via-emerald-950 to-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(247,148,29,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(22,163,74,0.2),transparent_34%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)]">
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
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1]"
            >
              Certificate Course in <br />
              <span className="text-primary">Holistic Health</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 font-medium max-w-2xl leading-relaxed"
            >
              Join NIH&apos;s one-month C.C.H. programme to build practical
              knowledge in human physiology, naturopathy, dietetics, yoga
              methodology, and acupressure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-3 text-sm font-bold text-white/85"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <CalendarDays className="h-4 w-4 text-primary" />
                Duration: 1 Month
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Course Fee: Rs. 5000
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
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
                href={courseBrochureHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center lg:px-8 px-6 lg:py-4 py-3 bg-white/5 backdrop-blur-md text-white rounded-full font-bold text-lg border border-white/10 transition-all"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Download Brochure
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/15 bg-white shadow-2xl shadow-black/40">
              <Image
                src="/images/activity-main.jpeg"
                alt="Certificate Course in Holistic Health admission poster"
                fill
                sizes="(min-width: 1024px) 480px, (min-width: 640px) 448px, 92vw"
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
