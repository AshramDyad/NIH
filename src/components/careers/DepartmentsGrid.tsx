"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Activity,
  Brain,
  BookOpen,
  Target,
  ChevronRight,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function DepartmentsGrid() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">
            Career Opportunities
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mx-auto mt-6 mb-6" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Department 1: Wellness & Therapy */}
          <motion.div
            variants={fadeIn}
            className="group flex flex-col h-full bg-white rounded-4xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:border-pink-200 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                <Heart size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 leading-tight">
                Wellness & Therapy Department
              </h3>
            </div>

            <div className="space-y-6 flex-1">
              {/* Role */}
              <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 group-hover:bg-pink-50/50 transition-colors">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  1. Yoga Instructor
                </h4>
                <ul className="space-y-2 mb-4">
                  {[
                    "Conduct group & private sessions",
                    "Design structured yoga programs",
                    "Guide meditation practices",
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-600 font-medium text-sm"
                    >
                      <ChevronRight
                        size={18}
                        className="text-pink-500 mr-1 shrink-0 mt-0.5"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="inline-block px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-lg shadow-sm">
                  Qualified: Certified Yoga Instructor, 1–3 yrs exp
                </div>
              </div>

              {/* Role */}
              <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 group-hover:bg-pink-50/50 transition-colors">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  2. Wellness Coach
                </h4>
                <ul className="space-y-2 mb-4">
                  {[
                    "Provide lifestyle coaching",
                    "Develop personalized wellness plans",
                    "Monitor client progress",
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-600 font-medium text-sm"
                    >
                      <ChevronRight
                        size={18}
                        className="text-pink-500 mr-1 shrink-0 mt-0.5"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="inline-block px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-lg shadow-sm">
                  Qualified: Health sciences or wellness coaching cert
                </div>
              </div>

              {/* Role */}
              <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 group-hover:bg-pink-50/50 transition-colors">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  3. Holistic Therapist
                </h4>
                <ul className="space-y-2 mb-4">
                  {[
                    "Provide alternative therapies",
                    "Support stress relief and relaxation programs",
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-600 font-medium text-sm"
                    >
                      <ChevronRight
                        size={18}
                        className="text-pink-500 mr-1 shrink-0 mt-0.5"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="inline-block px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-lg shadow-sm">
                  Qualified: Certified in relevant holistic therapy field
                </div>
              </div>
            </div>
          </motion.div>

          {/* Department 2: Fitness & Physical Health */}
          <motion.div
            variants={fadeIn}
            className="group flex flex-col h-full bg-white rounded-4xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:border-blue-200 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Activity size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 leading-tight">
                Fitness & Physical Health Department
              </h3>
            </div>

            <div className="space-y-6 flex-1">
              {/* Role */}
              <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 group-hover:bg-blue-50/50 transition-colors">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  4. Fitness Trainer
                </h4>
                <ul className="space-y-2 mb-4">
                  {[
                    "Conduct fitness assessments",
                    "Design exercise programs",
                    "Ensure client safety",
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-600 font-medium text-sm"
                    >
                      <ChevronRight
                        size={18}
                        className="text-blue-500 mr-1 shrink-0 mt-0.5"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="inline-block px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-lg shadow-sm">
                  Qualified: Certified Fitness Trainer
                </div>
              </div>

              {/* Role */}
              <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 group-hover:bg-blue-50/50 transition-colors">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  5. Physiotherapist{" "}
                  <span className="text-sm font-semibold text-gray-500 ml-2">
                    (Optional Advanced)
                  </span>
                </h4>
                <ul className="space-y-2 mb-4">
                  {[
                    "Assist with injury recovery",
                    "Provide rehabilitation guidance",
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-600 font-medium text-sm"
                    >
                      <ChevronRight
                        size={18}
                        className="text-blue-500 mr-1 shrink-0 mt-0.5"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="inline-block px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-lg shadow-sm">
                  Qualified: Licensed Physiotherapist
                </div>
              </div>
            </div>
          </motion.div>

          {/* Department 3: Nutrition & Lifestyle */}
          <motion.div
            variants={fadeIn}
            className="group flex flex-col h-full bg-white rounded-4xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:border-green-200 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                <LeafIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 leading-tight">
                Nutrition & Lifestyle Department
              </h3>
            </div>

            <div className="space-y-6 flex-1">
              {/* Role */}
              <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 group-hover:bg-green-50/50 transition-colors">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  6. Nutritionist / Dietitian
                </h4>
                <ul className="space-y-2 mb-4">
                  {[
                    "Create personalized meal plans",
                    "Conduct nutrition consultations",
                    "Lead healthy cooking workshops",
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-600 font-medium text-sm"
                    >
                      <ChevronRight
                        size={18}
                        className="text-green-500 mr-1 shrink-0 mt-0.5"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="inline-block px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-lg shadow-sm">
                  Qualified: Degree in Nutrition/Dietetics
                </div>
              </div>
            </div>
          </motion.div>

          {/* Department 4: Mental Wellness */}
          <motion.div
            variants={fadeIn}
            className="group flex flex-col h-full bg-white rounded-4xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:border-purple-200 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                <Brain size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 leading-tight">
                Mental Wellness Department
              </h3>
            </div>

            <div className="space-y-6 flex-1">
              {/* Role */}
              <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 group-hover:bg-purple-50/50 transition-colors">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  7. Counselor / Psychologist
                </h4>
                <ul className="space-y-2 mb-4">
                  {[
                    "Provide mental health support",
                    "Conduct stress management sessions",
                    "Offer emotional wellness programs",
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-600 font-medium text-sm"
                    >
                      <ChevronRight
                        size={18}
                        className="text-purple-500 mr-1 shrink-0 mt-0.5"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="inline-block px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-lg shadow-sm">
                  Qualified: Licensed Counselor/Psychologist
                </div>
              </div>
            </div>
          </motion.div>

          {/* Department 5: Academic & Research */}
          <motion.div
            variants={fadeIn}
            className="group flex flex-col h-full bg-white rounded-4xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:border-amber-200 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <BookOpen size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 leading-tight">
                Academic & Research Department
              </h3>
            </div>

            <div className="space-y-6 flex-1">
              {/* Role */}
              <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 group-hover:bg-amber-50/50 transition-colors">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  8. Research Associate
                </h4>
                <ul className="space-y-2 mb-4">
                  {[
                    "Conduct wellness research",
                    "Publish articles and reports",
                    "Assist in academic programs",
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-600 font-medium text-sm"
                    >
                      <ChevronRight
                        size={18}
                        className="text-amber-500 mr-1 shrink-0 mt-0.5"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="inline-block px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-lg shadow-sm">
                  Qualified: Master&apos;s or PhD in related field
                </div>
              </div>
            </div>
          </motion.div>

          {/* Department 6: Marketing & Administration */}
          <motion.div
            variants={fadeIn}
            className="group flex flex-col h-full bg-white rounded-4xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:border-indigo-200 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                <Target size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 leading-tight">
                Marketing & Administration
              </h3>
            </div>

            <div className="space-y-6 flex-1">
              {/* Role */}
              <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 group-hover:bg-indigo-50/50 transition-colors">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  9. Marketing Executive
                </h4>
                <ul className="space-y-2 mb-4">
                  {[
                    "Manage social media",
                    "Promote events & programmes",
                    "Corporate outreach",
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-600 font-medium text-sm"
                    >
                      <ChevronRight
                        size={18}
                        className="text-indigo-500 mr-1 shrink-0 mt-0.5"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Role */}
              <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 group-hover:bg-indigo-50/50 transition-colors">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  10. Administrative Officer
                </h4>
                <ul className="space-y-2 mb-4">
                  {[
                    "Manage scheduling & client records",
                    "Coordinate events",
                    "Front-desk operations",
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-600 font-medium text-sm"
                    >
                      <ChevronRight
                        size={18}
                        className="text-indigo-500 mr-1 shrink-0 mt-0.5"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Reusable SVG for the structural missing Lucide icon equivalent
function LeafIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}
