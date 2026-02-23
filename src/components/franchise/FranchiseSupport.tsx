import React from "react";
import {
  CheckCircle2,
  ShieldCheck,
  HeartHandshake,
  Zap,
  BarChart3,
  Users,
} from "lucide-react";

export default function FranchiseSupport() {
  const supportItems = [
    {
      title: "Brand & Trademark",
      desc: "Instant credibility with full usage rights to our established, trusted wellness brand.",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "SOPs & Manuals",
      desc: "Comprehensive operational blueprints detailing every aspect of daily functioning.",
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Staff Training",
      desc: "Rigorous certification and training programs for your trainers and counselors.",
      icon: <Users className="w-6 h-6" />,
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
    {
      title: "Marketing Support",
      desc: "Tested advertising frameworks and materials mapped for local lead generation.",
      icon: <Zap className="w-6 h-6" />,
      color: "text-amber-500",
      bg: "bg-amber-100",
    },
    {
      title: "Management System",
      desc: "Centralized software platform for seamless bookings, CRM, and billing.",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Ongoing Guidance",
      desc: "Continuous strategic support from our core leadership to ensure your growth.",
      icon: <HeartHandshake className="w-6 h-6" />,
      color: "text-rose-500",
      bg: "bg-rose-100",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#F8FAFC] border-y border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 font-bold tracking-wide text-sm shadow-sm">
              <span>Backing Your Success</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary tracking-tight leading-[1.1]">
              Comprehensive <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-b from-primary to-yellow-200">
                Franchisee Support
              </span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-500 font-medium max-w-lg md:pb-2">
            We don&apos;t just hand you a brand name; we grant you access to an
            entire proven ecosystem. Experience end-to-end guidance tailored for
            growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {supportItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${item.bg} ${item.color}`}
              >
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
