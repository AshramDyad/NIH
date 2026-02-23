import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative py-20 md:py-32 bg-secondary text-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/new-5.jpg"
          alt="Apply Now"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-secondary to-secondary/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-2xl space-y-8">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Ready to redefine holistic health?
        </h2>
        <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto">
          Join our dynamic team today and help us bring integrated wellness
          solutions to the world.
        </p>
        <Link
          href="https://forms.gle/DEajoyPQMDhhh1tC9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 bg-primary text-white rounded-full font-bold text-lg"
        >
          Apply Now
          <ArrowRight size={20} className="mt-0.5" />
        </Link>
      </div>
    </section>
  );
}
