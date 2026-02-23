import React from "react";
import { Target, CheckCircle2, LineChart, TrendingDown } from "lucide-react";

export default function ProjectsObjectives() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Objectives */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="lg:p-4 p-2 rounded-2xl bg-blue-100 text-blue-600">
                <Target size={32} className="lg:size-8 size-6" />
              </div>
              <h2 className="lg:text-3xl text-2xl font-black text-secondary">
                Core Objectives
              </h2>
            </div>
            <ul className="space-y-4">
              {[
                "Promote healthy lifestyles proactively",
                "Provide critical mental health support",
                "Offer structured fitness and nutrition guidance",
                "Reduce stress and lifestyle-related diseases",
                "Improve community awareness about preventive health",
              ].map((obj, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium text-lg leading-snug">
                    {obj}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expected Outcomes */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="lg:p-4 p-2 rounded-2xl bg-green-100 text-green-600">
                <LineChart size={32} className="lg:size-8 size-6" />
              </div>
              <h2 className="lg:text-3xl text-2xl font-black text-secondary">
                Expected Outcomes
              </h2>
            </div>
            <ul className="space-y-4">
              {[
                "Measurably improved community health",
                "Dramatically reduced stress levels globally",
                "Increased awareness of preventive healthcare",
                "A self-sustaining, deeply rooted wellness culture",
              ].map((outcome, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm"
                >
                  <TrendingDown className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium text-lg leading-snug">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
