import React from "react";
import { Share2, Globe2, Heart, Users, Target } from "lucide-react";

export default function ProjectsMarketing() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-primary/5 rounded-[40px] p-8 md:p-16 border border-primary/10 text-center relative overflow-hidden">
          <div className="absolute -top-10 -left-10 text-primary/10">
            <Share2 size={200} strokeWidth={0.5} />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight mb-6">
              Marketing Strategy
            </h2>
            <p className="text-xl text-gray-600 font-medium mb-12 max-w-2xl mx-auto">
              Our focused, multi-channel approach to driving community
              engagement and consistent center utilization.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                {
                  title: "Social Media",
                  icon: <Share2 className="w-6 h-6" />,
                },
                {
                  title: "Corporate Partners",
                  icon: <Globe2 className="w-6 h-6" />,
                },
                {
                  title: "Free Health Camps",
                  icon: <Heart className="w-6 h-6" />,
                },
                {
                  title: "Referral Programs",
                  icon: <Users className="w-6 h-6" />,
                },
                {
                  title: "Community Workshops",
                  icon: <Target className="w-6 h-6" />,
                },
              ].map((strategy, i) => (
                <div
                  key={i}
                  className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white shadow-sm flex flex-col items-center gap-5 hover:-translate-y-1 transition-transform"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                    {strategy.icon}
                  </div>
                  <span className="font-bold text-gray-800 text-sm leading-tight">
                    {strategy.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
