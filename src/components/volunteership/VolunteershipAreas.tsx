import React from "react";
import { HeartPulse, Megaphone, Stethoscope, Carrot } from "lucide-react";

export default function VolunteershipAreas() {
  const areas = [
    {
      title: "Community Health Campaigns",
      icon: <Stethoscope className="w-8 h-8" />,
      color: "text-blue-600",
      bg: "bg-blue-100",
      bulletColor: "bg-blue-600",
      borderHover: "hover:border-blue-200",
      tasks: [
        "Assist in health screening camps",
        "Help organize wellness drives",
        "Distribute awareness materials",
      ],
    },
    {
      title: "Wellness Events",
      icon: <HeartPulse className="w-8 h-8" />,
      color: "text-rose-600",
      bg: "bg-rose-100",
      bulletColor: "bg-rose-600",
      borderHover: "hover:border-rose-200",
      tasks: [
        "Support yoga sessions",
        "Event coordination",
        "Participant registration",
      ],
    },
    {
      title: "Awareness & Outreach",
      icon: <Megaphone className="w-8 h-8" />,
      color: "text-amber-600",
      bg: "bg-amber-100",
      bulletColor: "bg-amber-600",
      borderHover: "hover:border-amber-200",
      tasks: [
        "Social media promotion",
        "Community presentations",
        "School wellness education sessions",
      ],
    },
    {
      title: "Nutrition & Lifestyle Support",
      icon: <Carrot className="w-8 h-8" />,
      color: "text-emerald-600",
      bg: "bg-emerald-100",
      bulletColor: "bg-emerald-600",
      borderHover: "hover:border-emerald-200",
      tasks: [
        "Assist in workshops",
        "Healthy cooking demonstrations",
        "Lifestyle improvement campaigns",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
            Impact Areas
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary tracking-tight">
            Areas of Volunteering
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group ${area.borderHover}`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 ${area.bg} ${area.color}`}
              >
                {area.icon}
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-6 pb-4 border-b border-gray-100">
                {area.title}
              </h3>

              <ul className="space-y-4">
                {area.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 shrink-0 ${area.bulletColor}`}
                    />
                    <span className="text-gray-600 font-medium text-[15px] leading-relaxed">
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
