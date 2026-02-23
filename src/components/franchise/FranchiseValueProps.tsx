import React from "react";
import {
  Star,
  Target,
  Shield,
  Users,
  Smartphone,
  HeartPulse,
} from "lucide-react";

export default function FranchiseValueProps() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-[1fr_1fr_1.3fr] gap-8 lg:gap-12">
          {/* Section 5: Brand Positioning */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-xl shrink-0">
                <Star className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black text-gray-900">
                Brand Positioning
              </h2>
            </div>
            <ul className="space-y-4">
              {[
                "Premium but affordable",
                "Holistic (mind + body + nutrition)",
                "Community-focused",
                "Professional and certified",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 6: Target Market */}
          <div className="space-y-6 border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-12 lg:pl-16">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black text-gray-900">
                Target Market
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 text-sm font-semibold">
              {[
                "Urban professionals",
                "Students",
                "Families",
                "Corporate employees",
                "Health-conscious individuals",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6 border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-8 lg:pl-10">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-100 text-orange-600 rounded-xl shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="text-xl lg:text-2xl font-black text-gray-900 whitespace-nowrap shrink-0">
                Competitive Advantage
              </h2>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <HeartPulse className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-gray-600 font-medium text-sm leading-snug">
                  Combination of fitness + mental wellness
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-gray-600 font-medium text-sm leading-snug">
                  Personalized health programs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-gray-600 font-medium text-sm leading-snug">
                  Community engagement activities
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Smartphone className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-gray-600 font-medium text-sm leading-snug">
                  Technology-based booking & tracking system
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
