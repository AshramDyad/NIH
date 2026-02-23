import React from "react";
import { BookOpen, Building2, LineChart } from "lucide-react";

export default function TrainingOwnerPhase() {
  const modules = [
    {
      title: "Module 1: Brand Orientation",
      icon: <BookOpen className="w-8 h-8" />,
      color: "text-purple-600",
      bg: "bg-purple-100",
      borderColor: "border-purple-200",
      bulletColor: "bg-purple-600",
      items: [
        "Vision, mission, and core values",
        "Brand standards and customer promise",
        "Franchise agreement & compliance",
      ],
    },
    {
      title: "Module 2: Business Operations",
      icon: <Building2 className="w-8 h-8" />,
      color: "text-blue-600",
      bg: "bg-blue-100",
      borderColor: "border-blue-200",
      bulletColor: "bg-blue-600",
      items: [
        "Daily operations management",
        "Membership systems",
        "Pricing strategy",
        "Revenue streams",
        "Inventory management",
      ],
    },
    {
      title: "Module 3: Financial Management",
      icon: <LineChart className="w-8 h-8" />,
      color: "text-emerald-600",
      bg: "bg-emerald-100",
      borderColor: "border-emerald-200",
      bulletColor: "bg-emerald-600",
      items: [
        "Budget planning",
        "Expense control",
        "Profit margin understanding",
        "Reporting systems",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
              Phase 1 | 2 Weeks
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">
              Franchise Owner Training
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((mod, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 border ${mod.borderColor} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${mod.bg} ${mod.color}`}
              >
                {mod.icon}
              </div>
              <h3 className="text-xl lg:text-2xl font-black text-gray-900 mb-6">
                {mod.title}
              </h3>
              <ul className="space-y-4">
                {mod.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 shrink-0 ${mod.bulletColor}`}
                    />
                    <span className="text-gray-600 font-medium leading-snug">
                      {item}
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
