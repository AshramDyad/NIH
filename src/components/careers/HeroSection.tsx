"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight, Activity } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-24 bg-white overflow-hidden">
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-8 font-bold tracking-wide text-sm shadow-sm"
            >
              <Briefcase size={16} />
              Careers at NIH
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-secondary mb-8 tracking-tight leading-[1.1]"
            >
              Join Our <br />
              <span className="text-transparent bg-clip-text bg-linear-to-b from-primary to-yellow-100">
                Mission.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium mb-10"
            >
              At NIH, we are committed to promoting holistic health, preventive
              care, and wellness education. We seek passionate professionals
              dedicated to improving lives through integrated health approaches.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="https://forms.gle/DEajoyPQMDhhh1tC9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 lg:px-8 px-4 lg:py-4 py-3 bg-secondary text-white rounded-full font-bold"
              >
                View Open Roles
                <ArrowRight size={20} className="mt-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* Right Image Accent */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-4/3 w-full max-w-[600px] mx-auto lg:mx-0 lg:ml-auto rounded-4xl overflow-hidden shadow-2xl shadow-gray-200/50 group border border-gray-100">
              <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply" />
              <Image
                src="/images/new-5.jpg"
                alt="Professionals at NIH"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            {/* Decorative static element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 lg:-left-10 bg-white p-6 rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 max-w-[220px] z-20 hidden md:block"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Activity size={20} />
                </div>
                <span className="font-bold text-gray-900 text-lg">
                  Impacting
                </span>
              </div>
              <p className="text-sm font-medium text-gray-500 leading-snug">
                Lives every day through holistic care.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
