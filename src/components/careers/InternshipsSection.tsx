"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Heart, BookOpen, Target, Award } from "lucide-react";

export default function InternshipsSection() {
  return (
    <section className="py-16 md:py-24 bg-primary/5 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary border border-primary/20 mb-6 font-bold tracking-wide text-sm shadow-sm"
          >
            <GraduationCap size={16} />
            Early Career
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">
            Internship & Fellowship
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mx-auto mt-6 mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Wellness Intern", icon: <Heart className="w-8 h-8" /> },
            {
              title: "Research Intern",
              icon: <BookOpen className="w-8 h-8" />,
            },
            {
              title: "Marketing Intern",
              icon: <Target className="w-8 h-8" />,
            },
            {
              title: "Fellowship in Holistic Health",
              icon: <Award className="w-8 h-8" />,
            },
          ].map((prog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md shadow-gray-200/50 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                {prog.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                {prog.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
