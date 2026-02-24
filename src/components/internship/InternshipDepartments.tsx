import React from "react";
import { Dumbbell, Carrot, BrainCircuit, Megaphone } from "lucide-react";

export default function InternshipDepartments() {
  const departments = [
    {
      title: "Fitness & Training",
      icon: <Dumbbell className="w-8 h-8" />,
      color: "text-blue-600",
      bg: "bg-blue-100",
      bulletColor: "bg-blue-600",
      borderHover: "hover:border-blue-200",
      tasks: [
        "Assist trainers",
        "Conduct basic fitness assessments",
        "Help design beginner workout plans",
        "Monitor gym floor safety",
      ],
    },
    {
      title: "Nutrition",
      icon: <Carrot className="w-8 h-8" />,
      color: "text-orange-600",
      bg: "bg-orange-100",
      bulletColor: "bg-orange-600",
      borderHover: "hover:border-orange-200",
      tasks: [
        "Assist with diet planning",
        "Support client consultations",
        "Create meal plan templates",
        "Research nutrition topics",
      ],
    },
    {
      title: "Mental Wellness",
      icon: <BrainCircuit className="w-8 h-8" />,
      color: "text-purple-600",
      bg: "bg-purple-100",
      bulletColor: "bg-purple-600",
      borderHover: "hover:border-purple-200",
      tasks: [
        "Assist in stress management workshops",
        "Observe counseling sessions (where permitted)",
        "Help prepare wellness materials",
      ],
    },
    {
      title: "Marketing & Admin",
      icon: <Megaphone className="w-8 h-8" />,
      color: "text-rose-600",
      bg: "bg-rose-100",
      bulletColor: "bg-rose-600",
      borderHover: "hover:border-rose-200",
      tasks: [
        "Social media management",
        "Event promotion",
        "Membership registration support",
        "Customer service assistance",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
            Specialized Paths
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary tracking-tight">
            Internship Departments
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group ${dept.borderHover}`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:-translate-y-1 ${dept.bg} ${dept.color}`}
              >
                {dept.icon}
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-6 pb-4 border-b border-gray-100">
                {dept.title}
              </h3>

              <ul className="space-y-4">
                {dept.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 shrink-0 ${dept.bulletColor}`}
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
