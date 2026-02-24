import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function VolunteershipBenefits() {
  const benefits = [
    "Certificate of appreciation",
    "Community service hours record",
    "Recommendation letter (based on performance)",
    "Valuable networking opportunities",
    "Powerful leadership development",
  ];

  const impacts = [
    "Increased community health awareness",
    "Stronger overarching brand reputation",
    "Greater corporate & social responsibility",
    "Positive, lasting community engagement",
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Simple, Open Layout for Benefits & Impact */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-16 items-stretch mb-32 max-w-7xl mx-auto">
          {/* Left: Benefits for Volunteers */}
          <div className="lg:pr-4 flex flex-col pt-2">
            <span className="text-emerald-600/60 font-medium tracking-widest uppercase text-xs mb-4 block">
              Personal Growth
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A5C36] tracking-tight mb-8">
              Benefits For You
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-10">
              Walk away with tangible credentials, valuable industry
              connections, and real-world leadership experience.
            </p>

            <div className="space-y-6">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-[1.5px] bg-gray-300" />

          {/* Right: Programme Impact */}
          <div className="lg:pl-4 flex flex-col pt-2">
            <span className="text-amber-500 font-medium tracking-widest uppercase text-xs mb-4 block">
              Global Influence
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A5C36] tracking-tight mb-8">
              Programme Impact
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-10">
              Every volunteer makes an undeniable, positive mark on the wellness
              and resilience of the community.
            </p>

            <ul className="space-y-6">
              {impacts.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Simple & Clean CTA Section */}
        <div className="bg-[#F8FAFC] rounded-[40px] p-6 md:p-12 text-center max-w-7xl mx-auto border border-gray-100">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-[#0A5C36]">
              Ready to Give Back?
            </h2>

            <p className="text-gray-500 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Take the first step towards uplifting your community in holistic
              health. Apply now or get in touch with our team for more details
              about custom outreach programs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
              <Link
                href="/contact"
                className="bg-transparent hover:bg-emerald-50 text-[#0A5C36] border-2 border-[#0A5C36] lg:px-10 md:px-8 px-6 lg:py-3.5 py-2.5 rounded-full font-bold transition-all hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
