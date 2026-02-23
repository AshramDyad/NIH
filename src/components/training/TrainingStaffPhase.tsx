import React from "react";
import { Dumbbell, Flower2, Carrot, BrainCircuit } from "lucide-react";

export default function TrainingStaffPhase() {
  const staffRoles = [
    {
      role: "Fitness Trainer",
      icon: <Dumbbell className="w-8 h-8" />,
      color: "text-blue-600",
      bg: "bg-blue-100",
      bulletColor: "bg-blue-600",
      topics: [
        "Exercise science basics",
        "Client assessment & fitness testing",
        "Program design",
        "Injury prevention",
        "Equipment handling",
      ],
    },
    {
      role: "Yoga & Mindfulness",
      icon: <Flower2 className="w-8 h-8" />,
      color: "text-pink-600",
      bg: "bg-pink-100",
      bulletColor: "bg-pink-600",
      topics: [
        "Standard session structure",
        "Breathing techniques",
        "Meditation guidance",
        "Safety guidelines",
      ],
    },
    {
      role: "Nutrition Consultant",
      icon: <Carrot className="w-8 h-8" />,
      color: "text-orange-600",
      bg: "bg-orange-100",
      bulletColor: "bg-orange-600",
      topics: [
        "Diet planning basics",
        "Weight management strategies",
        "Client counseling techniques",
      ],
    },
    {
      role: "Wellness Counselor",
      icon: <BrainCircuit className="w-8 h-8" />,
      color: "text-purple-600",
      bg: "bg-purple-100",
      bulletColor: "bg-purple-600",
      topics: [
        "Stress management techniques",
        "Basic mental health support",
        "Referral protocol for serious cases",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
            Phase 2 | 3–4 Weeks
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">
            Staff Training Programme
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mx-auto mt-6 mb-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {staffRoles.map((role, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 ${role.bg} ${role.color}`}
              >
                {role.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                {role.role}
              </h3>
              <ul className="space-y-3">
                {role.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 shrink-0 ${role.bulletColor}`}
                    />
                    <span className="text-gray-600 text-sm font-medium leading-relaxed">
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
