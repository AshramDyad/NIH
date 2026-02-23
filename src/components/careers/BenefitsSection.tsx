import React from "react";
import { TrendingUp, BookOpen, Users, Globe, Award } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">
            Benefits of Working with NIH
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mx-auto mt-6 mb-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: <TrendingUp className="w-10 h-10 text-primary" />,
              title: "Professional Growth",
              desc: "Opportunities for rapid career progression and skill enhancement.",
            },
            {
              icon: <BookOpen className="w-10 h-10 text-primary" />,
              title: "Continuous Training",
              desc: "Ongoing training programmes to keep you updated on holistic care.",
            },
            {
              icon: <Users className="w-10 h-10 text-primary" />,
              title: "Supportive Environment",
              desc: "A culturally rich, inclusive, and supportive collaborative workspace.",
            },
            {
              icon: <Globe className="w-10 h-10 text-primary" />,
              title: "Global Exposure",
              desc: "National and international networking and practical exposure.",
            },
            {
              icon: <Award className="w-10 h-10 text-primary" />,
              title: "Certifications",
              desc: "Ongoing certification and crucial skill development milestones.",
            },
          ].map((benefit, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-100 p-8 rounded-3xl text-center hover:bg-primary/5 hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg shadow-gray-200/50 mb-6">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-black text-gray-900 mb-3">
                {benefit.title}
              </h4>
              <p className="text-gray-500 font-medium leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
