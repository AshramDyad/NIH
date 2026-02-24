import React from "react";
import { Users2, ShieldPlus, GraduationCap, CheckCircle2 } from "lucide-react";

export default function EventsPrograms() {
  const programs = [
    {
      title: "Monthly Workshops & Seminars",
      icon: <Users2 className="w-8 h-8" />,
      color: "text-amber-600",
      bg: "bg-amber-100",
      bulletColor: "bg-amber-600",
      borderHover: "hover:border-amber-200",
      desc: "Conducted both offline and online across varying essential topics.",
      tasks: [
        "Stress management",
        "Mental wellness",
        "Nutrition planning",
        "Preventive healthcare",
        "Alternative therapies",
      ],
    },
    {
      title: "Community Outreach Programs",
      icon: <ShieldPlus className="w-8 h-8" />,
      color: "text-emerald-600",
      bg: "bg-emerald-100",
      bulletColor: "bg-emerald-600",
      borderHover: "hover:border-emerald-200",
      desc: "Direct involvement initiatives targeted at localized community health.",
      tasks: [
        "Free health screening camps",
        "School wellness awareness sessions",
        "Corporate wellness training",
        "Rural health awareness drives",
      ],
    },
    {
      title: "Certification & Training",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "text-purple-600",
      bg: "bg-purple-100",
      bulletColor: "bg-purple-600",
      borderHover: "hover:border-purple-200",
      desc: "Structured educational modules for professional accreditation.",
      tasks: [
        "Holistic wellness certification courses",
        "Fitness trainer certification",
        "Nutrition consultant training",
        "Mindfulness instructor programs",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
            Consistent Engagement
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary tracking-tight">
            Recurring Programs
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-[32px] p-6 md:p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group flex flex-col h-full ${program.borderHover}`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 ${program.bg} ${program.color}`}
              >
                {program.icon}
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-4">
                {program.title}
              </h3>

              <p className="text-gray-500 font-medium leading-relaxed mb-6 pb-6 border-b border-gray-100">
                {program.desc}
              </p>

              <ul className="space-y-4 flex-1">
                {program.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      className={`w-5 h-5 shrink-0 ${program.color}`}
                    />
                    <span className="text-gray-700 font-bold text-[15.5px] leading-snug">
                      {task}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
