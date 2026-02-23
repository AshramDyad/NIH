import React from "react";
import { CheckCircle2, ShieldCheck, Star } from "lucide-react";

export default function TrainingHero() {
  const purposes = [
    {
      title: "Consistent Quality",
      desc: "Maintain uniform, high-level service quality across every location.",
      icon: <Star className="w-6 h-6" />,
      color: "text-amber-500",
      bg: "bg-amber-100",
    },
    {
      title: "Brand Standards",
      desc: "Strict adherence to our proven wellness methodologies.",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      title: "Safe & Professional",
      desc: "Deliver medically and scientifically safe wellness services.",
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: "text-green-500",
      bg: "bg-green-100",
    },
    {
      title: "Customer Experience",
      desc: "Provide an unparalleled, deeply satisfying client journey.",
      icon: <Star className="w-6 h-6" />,
      color: "text-purple-500",
      bg: "bg-purple-100",
    },
  ];

  return (
    <section className="relative w-full pt-28 pb-16 md:pt-36 md:pb-24 bg-white overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 font-bold tracking-wide text-sm shadow-sm">
            <span>Certification & Excellence</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-8 tracking-tight leading-[1.1]">
            Wellness Centre Franchise <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-primary to-yellow-200">
              Training Programme
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium">
            Our comprehensive training programme ensures that every franchise
            location operates with uncompromising excellence from day one.
          </p>
        </div>

        {/* Purpose Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {purposes.map((purpose, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all group"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${purpose.bg} ${purpose.color} group-hover:scale-110 transition-transform`}
              >
                {purpose.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {purpose.title}
              </h3>
              <p className="text-gray-600 font-medium text-sm leading-relaxed text-balance">
                {purpose.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
