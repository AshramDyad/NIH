import React from "react";
import {
  UserPlus,
  Dumbbell,
  Stethoscope,
  Briefcase,
  Presentation,
  ShoppingBag,
} from "lucide-react";

export default function FranchiseRevenue() {
  const revenueStreams = [
    {
      title: "Monthly Memberships",
      icon: <UserPlus className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Personal Training Packages",
      icon: <Dumbbell className="w-8 h-8" />,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Nutrition Consultation Fees",
      icon: <Stethoscope className="w-8 h-8" />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Corporate Wellness Contracts",
      icon: <Briefcase className="w-8 h-8" />,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Wellness Workshops",
      icon: <Presentation className="w-8 h-8" />,
      color: "bg-pink-100 text-pink-600",
    },
    {
      title: "Product Sales",
      icon: <ShoppingBag className="w-8 h-8" />,
      desc: "Supplements, fitness gear",
      color: "bg-teal-100 text-teal-600",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">
            Revenue Model
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mx-auto mt-6 mb-6" />
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            Multiple robust incoming revenue streams to maximize the financial
            Return on Investment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {revenueStreams.map((stream, index) => (
            <div
              key={index}
              className="flex items-center gap-5 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 ${stream.color} transition-transform`}
              >
                {stream.icon}
              </div>
              <div>
                <h3 className="font-black text-gray-900 text-lg leading-tight">
                  {stream.title}
                </h3>
                {stream.desc && (
                  <p className="text-sm text-gray-500 mt-1 font-medium text-balance">
                    {stream.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
