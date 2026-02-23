import React from "react";
import { Users, MonitorSmartphone, Megaphone } from "lucide-react";

export default function TrainingCoreModules() {
  const modules = [
    {
      phase: "Phase 3",
      title: "Customer Service Excellence",
      icon: <Users className="w-6 h-6" />,
      color: "text-amber-500",
      bg: "bg-amber-100",
      bulletColor: "bg-amber-500",
      topics: [
        "Communication skills",
        "Handling complaints",
        "Building client relationships",
        "Retention strategies",
        "Professional appearance & behavior",
      ],
    },
    {
      phase: "Phase 4",
      title: "Technology & Systems",
      icon: <MonitorSmartphone className="w-6 h-6" />,
      color: "text-blue-500",
      bg: "bg-blue-100",
      bulletColor: "bg-blue-500",
      topics: [
        "Booking software usage",
        "Membership tracking",
        "Payment processing",
        "Data privacy & record keeping",
      ],
    },
    {
      phase: "Phase 5",
      title: "Marketing & Community",
      icon: <Megaphone className="w-6 h-6" />,
      color: "text-rose-500",
      bg: "bg-rose-100",
      bulletColor: "bg-rose-500",
      topics: [
        "Social media marketing basics",
        "Local promotions",
        "Corporate partnerships",
        "Event organization",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
            Core Operations Training
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">
            Systems & Engagement
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mx-auto mt-6 mb-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((mod, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 relative group"
            >
              {/* Floating Phase Badge */}
              <div
                className={`absolute -top-4 right-8 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${mod.bg} ${mod.color}`}
              >
                {mod.phase}
              </div>

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${mod.bg} ${mod.color}`}
              >
                {mod.icon}
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-6 border-b border-gray-100 pb-4">
                {mod.title}
              </h3>

              <ul className="space-y-4">
                {mod.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 shrink-0 ${mod.bulletColor}`}
                    />
                    <span className="text-gray-600 font-medium leading-relaxed">
                      {topic}
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
