"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  HeartPulse,
  Leaf,
  Megaphone,
  MonitorPlay,
  Newspaper,
  NotebookTabs,
  ShieldPlus,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

const courseHighlights: {
  icon: LucideIcon;
  label: string;
  value: string;
}[] = [
  {
    icon: CalendarDays,
    label: "Duration",
    value: "1 Month",
  },
  {
    icon: GraduationCap,
    label: "Qualification",
    value: "10th Pass",
  },
  {
    icon: MonitorPlay,
    label: "Classes",
    value: "4 Guided Online Classes",
  },
  {
    icon: ClipboardCheck,
    label: "Assessment",
    value: "Online Objective Exam",
  },
];

const syllabusModules: {
  code: string;
  title: string;
  accent: string;
  icon: LucideIcon;
  topics: string[];
}[] = [
  {
    code: "CCH01",
    title: "Human Physiology",
    accent: "text-emerald-700 bg-emerald-50 border-emerald-100",
    icon: HeartPulse,
    topics: [
      "Introduction to the human body",
      "Cell, tissue, organ, and systems",
      "Major body-system functions",
      "Homeostasis, body regulation, health, and hygiene",
    ],
  },
  {
    code: "CCH02",
    title: "Naturopathy",
    accent: "text-lime-700 bg-lime-50 border-lime-100",
    icon: Leaf,
    topics: [
      "Principles and philosophy of naturopathy",
      "Five elements and nature cure principles",
      "Hydrotherapy and mud therapy",
      "Fasting, cleansing, detoxification, and natural healing",
    ],
  },
  {
    code: "CCH03",
    title: "Dietetics",
    accent: "text-amber-700 bg-amber-50 border-amber-100",
    icon: ShieldPlus,
    topics: [
      "Basic principles of nutrition",
      "Macronutrients and micronutrients",
      "Balanced diet and meal planning",
      "Therapeutic diet, nutrition, and food as medicine",
    ],
  },
  {
    code: "CCH04",
    title: "Yoga Methodology",
    accent: "text-purple-700 bg-purple-50 border-purple-100",
    icon: Sparkles,
    topics: [
      "Introduction to yoga and its benefits",
      "Asanas: theory and practice",
      "Pranayama, breathing, meditation, and relaxation",
      "Yogic lifestyle and daily routine",
    ],
  },
  {
    code: "CCH05",
    title: "Acupressure",
    accent: "text-sky-700 bg-sky-50 border-sky-100",
    icon: CheckCircle2,
    topics: [
      "Introduction to acupressure",
      "Meridians and energy channels",
      "Acupressure points and benefits",
      "Common ailment techniques and daily self-acupressure",
    ],
  },
];

const benefits: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Users,
    title: "Guide Family & Community",
    description:
      "Use the learning to share health-related awareness with family, friends, students, staff, and social institutions.",
  },
  {
    icon: HeartPulse,
    title: "Support Healthy Lifestyle",
    description:
      "Understand lifestyle practices that may help in prevention-focused daily living and personal wellness routines.",
  },
  {
    icon: Newspaper,
    title: "Create Health Awareness",
    description:
      "Prepare articles, talks, or videos on good health and wellness for wider public awareness.",
  },
];

const facilities: {
  icon: LucideIcon;
  label: string;
}[] = [
  { icon: NotebookTabs, label: "Course book" },
  { icon: MonitorPlay, label: "Regular webinars" },
  { icon: Award, label: "Certificate after passing the exam" },
  { icon: Users, label: "Lifetime NIH membership" },
  { icon: BookOpenCheck, label: "E-directory membership" },
  { icon: FileText, label: "E-magazine and health information" },
];

export default function CourseBrochureSections() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-20 lg:py-24">
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-bold tracking-wide text-primary">
                <BookOpenCheck className="h-4 w-4" />
                From the 2026 Brochure
              </div>

              <h2 className="text-4xl font-black leading-tight tracking-tight text-zinc-900 md:text-5xl">
                One focused month for practical holistic health learning.
              </h2>

              <p className="max-w-2xl text-lg font-medium leading-relaxed text-zinc-500">
                The Certificate Course in Holistic Health is designed to impart
                basic health-awareness education through online classes,
                guided study material, and a certificate after the objective
                examination.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {courseHighlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-zinc-400">
                      {item.label}
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-zinc-900">
                      {item.value}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-zinc-50 py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 inline-flex items-center rounded-full bg-secondary/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary"
            >
              Five Module Syllabus
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-black tracking-tight text-zinc-900 md:text-5xl"
            >
              Learn the foundations of holistic health.
            </motion.h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-6">
            {syllabusModules.map((module, index) => {
              const Icon = module.icon;

              return (
                <motion.article
                  key={module.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="flex h-full flex-col rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm xl:col-span-2 xl:[&:nth-child(4)]:col-start-2"
                >
                  <div
                    className={`mb-5 inline-flex w-max items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-black ${module.accent}`}
                  >
                    <Icon className="h-4 w-4" />
                    {module.code}
                  </div>
                  <h3 className="text-xl font-black text-zinc-900">
                    {module.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {module.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex gap-3 text-sm font-medium leading-relaxed text-zinc-500"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-sm font-bold tracking-wide text-secondary">
                <Megaphone className="h-4 w-4" />
                Outcomes & Student Facilities
              </div>
              <h2 className="text-4xl font-black leading-tight tracking-tight text-zinc-900 md:text-5xl">
                Designed for awareness, service, and everyday wellness.
              </h2>
              <p className="text-lg font-medium leading-relaxed text-zinc-500">
                The brochure positions the course around health education,
                disease-prevention awareness, family wellbeing, and social
                service through lectures, articles, videos, webinars, and NIH
                student support facilities.
              </p>
            </motion.div>

            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;

                  return (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-black text-zinc-900">
                        {benefit.title}
                      </h3>
                      <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-500">
                        {benefit.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-zinc-100 bg-zinc-50 p-6 md:p-8"
              >
                <h3 className="text-2xl font-black text-zinc-900">
                  Included student facilities
                </h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {facilities.map((facility) => {
                    const Icon = facility.icon;

                    return (
                      <div
                        key={facility.label}
                        className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-zinc-700 shadow-sm"
                      >
                        <Icon className="h-5 w-5 shrink-0 text-primary" />
                        <span>{facility.label}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
