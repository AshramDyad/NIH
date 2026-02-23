import React from "react";

export default function ProjectsHero() {
  return (
    <section className="relative w-full pt-28 pb-16 md:pt-36 md:pb-24 bg-white overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 font-bold tracking-wide text-sm shadow-sm">
          <span>Project Proposal</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-8 tracking-tight leading-tight">
          Integrated Wellness Centre for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-[#ff9800]">
            Holistic Health & Lifestyle
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium max-w-4xl mx-auto">
          A wellness centre is a facility that promotes physical, mental, and
          emotional well-being through preventive healthcare, fitness,
          counseling, and lifestyle services. Unlike hospitals, we focus
          fundamentally on prevention rather than treatment.
        </p>
      </div>
    </section>
  );
}
