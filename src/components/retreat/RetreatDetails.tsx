import React from "react";
import { Clock, MapPin, Users2, Award } from "lucide-react";

export default function RetreatDetails() {
  const details = [
    {
      title: "Duration Options",
      icon: <Clock className="w-6 h-6" />,
      items: [
        "2-Day Weekend Retreat",
        "5-Day Standard Retreat",
        "7-Day Advanced Transformation Retreat",
      ],
      color: "text-blue-600",
      bg: "bg-blue-100",
      dotBg: "bg-blue-500",
    },
    {
      title: "Location Requirements",
      icon: <MapPin className="w-6 h-6" />,
      items: [
        "Quiet natural environment",
        "Resort or retreat centre",
        "Outdoor activity space",
        "Meditation hall",
        "Accommodation facilities",
      ],
      color: "text-emerald-600",
      bg: "bg-emerald-100",
      dotBg: "bg-emerald-500",
    },
    {
      title: "Dedicated Staff",
      icon: <Users2 className="w-6 h-6" />,
      items: [
        "Yoga instructor",
        "Wellness coach & Nutritionist",
        "Counselor & Medical support staff",
        "Dedicated retreat coordinator",
      ],
      color: "text-purple-600",
      bg: "bg-purple-100",
      dotBg: "bg-purple-500",
    },
    {
      title: "Expected Outcomes",
      icon: <Award className="w-6 h-6" />,
      items: [
        "Experience reduced stress & improved sleep",
        "Learn sustainable wellness habits",
        "Gain emotional clarity",
        "Develop healthier lifestyle practices",
      ],
      color: "text-amber-600",
      bg: "bg-amber-100",
      dotBg: "bg-amber-500",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Logistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {details.map((detail, index) => (
            <div
              key={index}
              className="bg-white rounded-[32px] p-6 md:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${detail.bg} ${detail.color}`}
              >
                {detail.icon}
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-6 leading-tight whitespace-nowrap overflow-visible sm:whitespace-normal xl:whitespace-nowrap">
                {detail.title}
              </h3>
              <ul className="space-y-4">
                {detail.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 text-gray-600 font-medium text-[15px] leading-snug"
                  >
                    <span
                      className={`mt-[6px] w-[6px] h-[6px] rounded-full shrink-0 ${detail.dotBg}`}
                    />
                    <span className="flex-1">{item}</span>
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
