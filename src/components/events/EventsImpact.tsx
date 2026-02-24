import React from "react";
import { CheckCircle2, Megaphone } from "lucide-react";
import Link from "next/link";

export default function EventsImpact() {
  const promotionStrategy = [
    "Targeted social media campaigns",
    "Direct collaboration with leading universities",
    "Strategic partnerships with hospitals & NGOs",
    "Meaningful influencer engagement",
    "Official press releases",
  ];

  const impacts = [
    "Increased national awareness of holistic health principles",
    "Valuable professional skill development for practitioners",
    "Substantial community empowerment and education",
    "Strong institutional brand reputation and authority",
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Simple, Open Layout for Promotion & Impact */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-16 items-stretch mb-32 max-w-7xl mx-auto">
          {/* Left: Promotion Strategy */}
          <div className="lg:pr-4 flex flex-col pt-2">
            <span className="text-secondary/60 font-medium tracking-widest uppercase text-xs mb-4 block">
              Outreach & Visibility
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight mb-8">
              Promotion Strategy
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-10">
              We leverage an extensive network of modern media and institutional
              partnerships to ensure maximum outreach.
            </p>

            <div className="space-y-6">
              {promotionStrategy.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Megaphone className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-[1.5px] bg-gray-200" />

          {/* Right: Expected Impact */}
          <div className="lg:pl-4 flex flex-col pt-2">
            <span className="text-primary font-medium tracking-widest uppercase text-xs mb-4 block">
              Measurable Outcomes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight mb-8">
              Expected Impact
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-10">
              Our events serve as catalysts for massive paradigm shifts in local
              and national wellness understanding.
            </p>

            <ul className="space-y-6">
              {impacts.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg font-bold">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Standard CTA Section */}
        <div className="bg-[#F8FAFC] rounded-[40px] p-6 md:p-12 text-center max-w-7xl mx-auto border border-gray-100">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-secondary">
              Attend Our Next Event
            </h2>

            <p className="text-gray-500 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you want to showcase at our expo, speak at the conference,
              or simply attend a workshop—get in touch with our event
              coordinators today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
              <Link
                href="/contact"
                className="bg-transparent hover:bg-gray-50 text-secondary border-2 border-gray-200 md:px-8 px-6 md:py-4 py-3 rounded-full font-bold transition-all"
              >
                Contact Organizers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
