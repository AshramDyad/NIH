import React from "react";
import Link from "next/link";

export default function RetreatCertificationCTA() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-[#F8F9FA] md:bg-[#F8F9FA] rounded-[32px] md:rounded-[48px] px-8 py-16 md:py-24 text-center flex flex-col items-center justify-center border border-gray-100/50">
          <h2 className="text-3xl md:text-[44px] font-bold text-secondary mb-6 tracking-tight">
            Certificate of Completion
          </h2>

          <p className="text-[#5B6D63] md:text-[#5B6D63] text-[15px] md:text-lg font-medium leading-relaxed max-w-2xl w-full mb-10">
            Upon finishing the standard or advanced intensive program,
            participants may receive an official &quot;Holistic Wellness Retreat
            Programme&quot; certificate of completion.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center lg:px-10 px-8 lg:py-4 py-3 rounded-full bg-white border border-[#1D3A2C]/10 text-secondary font-bold md:font-semibold text-[15px] shadow-[0_2px_8px_rgb(0,0,0,0.04)] transition-all hover:border-secondary/50"
          >
            Enquire Availability
          </Link>
        </div>
      </div>
    </section>
  );
}
