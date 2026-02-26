import React from "react";
import {
  CheckCircle2,
  Mic2,
  Store,
  Users,
  Presentation,
  Stethoscope,
} from "lucide-react";

export default function EventsMajor() {
  const confActivities = [
    "Keynote speeches",
    "Research paper presentations",
    "Panel discussions",
    "Live wellness demonstrations",
    "Networking sessions",
  ];

  const expoFeatures = [
    "Product stalls",
    "Free health check-ups",
    "Yoga & meditation sessions",
    "Healthy cooking demonstrations",
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
            Flagship Gatherings
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary tracking-tight">
            Major Events
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Card 1: International Conference */}
          <div className="bg-[#F8FAFC] rounded-[40px] p-6 md:p-8 border border-blue-100/50 flex flex-col h-full group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-8 w-max">
                <Mic2 className="w-4 h-4" />
                <span>Annual Conference</span>
              </div>

              <h3 className="text-3xl font-black text-gray-900 mb-6 leading-tight min-h-[72px] lg:min-h-[80px]">
                International Conference on Yoga & Holistic Health
              </h3>

              <p className="text-lg text-gray-500 font-medium leading-relaxed mb-10 min-h-[112px]">
                A large-scale annual conference bringing together wellness
                professionals, researchers, students, and industry leaders from
                across the globe.
              </p>

              <div className="mb-10 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm h-[120px] flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-gray-900">
                    Target Audience
                  </span>
                </div>
                <p className="text-gray-500 font-medium">
                  Healthcare professionals, students, wellness practitioners,
                  and policymakers.
                </p>
              </div>

              <div className="space-y-4 flex-1">
                <h4 className="font-bold text-gray-900 text-lg mb-4 border-b border-gray-100 pb-3">
                  Core Activities:
                </h4>
                {confActivities.map((act, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                    <span className="text-gray-700 font-bold text-lg leading-snug pt-0.5">
                      {act}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Wellness & Lifestyle Expo */}
          <div className="bg-[#F8FAFC] rounded-[40px] p-6 md:p-8 border border-emerald-100/50 flex flex-col h-full relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-100 rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-8 w-max">
                <Store className="w-4 h-4" />
                <span>Public Exhibition</span>
              </div>

              <h3 className="text-3xl font-black text-gray-900 mb-6 leading-tight min-h-[72px] lg:min-h-[80px]">
                Wellness & Lifestyle Expo
              </h3>

              <p className="text-lg text-gray-500 font-medium leading-relaxed mb-10 min-h-[112px]">
                An interactive experiential exhibition showcasing wellness
                products, fitness brands, nutrition companies, and holistic
                therapies to the public.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10 h-[120px]">
                <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col justify-center h-full">
                  <Presentation className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <span className="font-bold text-gray-900 text-sm">
                    Product Demos
                  </span>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col justify-center h-full">
                  <Stethoscope className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <span className="font-bold text-gray-900 text-sm">
                    Health Checks
                  </span>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                <h4 className="font-bold text-gray-900 text-lg mb-4 border-b border-gray-100 pb-3">
                  Expo Features:
                </h4>
                {expoFeatures.map((feat, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span className="text-gray-700 font-bold text-lg leading-snug pt-0.5">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
