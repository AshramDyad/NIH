import React from "react";
import {
  CheckCircle2,
  Dumbbell,
  BrainCircuit,
  Apple,
  Sparkles,
} from "lucide-react";

export default function RetreatComponents() {
  const pillars = [
    {
      title: "Physical Wellness",
      icon: <Dumbbell className="w-5 h-5 text-blue-500" />,
      // Using very light, subtle backgrounds as per reference
      cardBg: "bg-blue-50/50",
      iconBg: "bg-blue-100",
      items: [
        "Hatha / Vinyasa Yoga",
        "Guided stretching",
        "Light fitness sessions",
        "Posture correction",
      ],
    },
    {
      title: "Mental & Emotional",
      icon: <BrainCircuit className="w-5 h-5 text-purple-500" />,
      cardBg: "bg-purple-50/50",
      iconBg: "bg-purple-100",
      items: [
        "Stress management workshops",
        "Mindfulness training",
        "Emotional resilience sessions",
        "Group sharing circles",
      ],
    },
    {
      title: "Nutritional Wellness",
      icon: <Apple className="w-5 h-5 text-emerald-500" />,
      cardBg: "bg-emerald-50/50",
      iconBg: "bg-emerald-100",
      items: [
        "Detox meal plans",
        "Nutrition education",
        "Healthy cooking demo",
        "Personalized diet guidance",
      ],
    },
    {
      title: "Holistic Therapies",
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      cardBg: "bg-amber-50/50",
      iconBg: "bg-amber-100",
      items: [
        "Meditation & Sound healing",
        "Aromatherapy",
        "Nature walks",
        "Digital detox sessions",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">
            The 4 Pillars
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-secondary tracking-tight mb-4">
            Core Programme
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`${pillar.cardBg} rounded-[32px] p-6 lg:p-8 flex flex-col h-full`}
            >
              {/* Header: Icon + Title */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-[16px] flex items-center justify-center shrink-0 ${pillar.iconBg}`}
                >
                  {pillar.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">
                  {pillar.title}
                </h3>
              </div>

              {/* Inner White Card for List Items */}
              <div className="flex-1 bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
                <ul className="space-y-4">
                  {pillar.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2
                        className={`w-5 h-5 shrink-0 pt-0.5 ${
                          index === 0
                            ? "text-blue-500"
                            : index === 1
                              ? "text-purple-500"
                              : index === 2
                                ? "text-emerald-500"
                                : "text-amber-500"
                        }`}
                      />
                      <span className="text-gray-700 font-bold text-[15px] leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
