import React from "react";
import { Dumbbell, Brain, Carrot, ShieldCheck } from "lucide-react";

export default function ProjectsServices() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">
            Services Offered
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mx-auto mt-6 mb-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Physical */}
          <div className="bg-blue-50/50 rounded-3xl lg:p-8 p-4 border border-blue-100/50 hover:shadow-xl hover:shadow-blue-200/40 hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 mx-auto">
              <Dumbbell size={32} className="lg:size-8 size-6" />
            </div>
            <h3 className="text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-black text-center text-gray-900 mb-6 whitespace-nowrap shrink-0">
              Physical Wellness
            </h3>
            <ul className="space-y-3">
              {[
                "Gym & fitness training",
                "Yoga and meditation classes",
                "Personal training programs",
                "Weight management programs",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-gray-600 font-medium text-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Mental */}
          <div className="bg-purple-50/50 rounded-3xl p-8 border border-purple-100/50 hover:shadow-xl hover:shadow-purple-200/40 hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 mx-auto">
              <Brain size={32} />
            </div>
            <h3 className="text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-black text-center text-gray-900 mb-6 whitespace-nowrap shrink-0">
              Mental Wellness
            </h3>
            <ul className="space-y-3">
              {[
                "Counseling services",
                "Stress management workshops",
                "Mindfulness sessions",
                "Support groups",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-gray-600 font-medium text-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Nutritional */}
          <div className="bg-green-50/50 rounded-3xl p-8 border border-green-100/50 hover:shadow-xl hover:shadow-green-200/40 hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6 mx-auto">
              <Carrot size={32} />
            </div>
            <h3 className="text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-black text-center text-gray-900 mb-6 whitespace-nowrap shrink-0">
              Nutritional Wellness
            </h3>
            <ul className="space-y-3">
              {[
                "Diet planning",
                "Healthy cooking workshops",
                "Nutrition consultations",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-gray-600 font-medium text-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Preventive */}
          <div className="bg-orange-50/50 rounded-3xl p-8 border border-orange-100/50 hover:shadow-xl hover:shadow-orange-200/40 hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 mx-auto">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-black text-center text-gray-900 mb-6 whitespace-nowrap shrink-0">
              Preventive Health
            </h3>
            <ul className="space-y-3">
              {[
                "Blood pressure checks",
                "Blood sugar testing",
                "BMI analysis",
                "Health risk assessments",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-gray-600 font-medium text-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
