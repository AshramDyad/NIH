import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function FranchiseHero() {
  return (
    <section className="relative w-full pt-28 pb-16 md:pt-36 md:pb-24 bg-white overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 font-bold tracking-wide text-sm shadow-sm">
          <span>Partnership Opportunity</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-8 tracking-tight leading-tight">
          Wellness Centre <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-[#ff9800]">
            Franchise Project
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium max-w-4xl mx-auto mb-12">
          Our franchise offers holistic wellness services focusing on preventive
          healthcare and lifestyle management, not just gym services.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
          {[
            "Fitness training",
            "Yoga & meditation",
            "Nutrition counseling",
            "Mental health support",
            "Preventive health check-ups",
          ].map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-100 shadow-sm"
            >
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
              <span className="text-gray-700 font-semibold">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
