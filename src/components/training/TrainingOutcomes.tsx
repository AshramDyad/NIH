import React from "react";
import {
  Award,
  Presentation,
  RefreshCw,
  ShieldCheck,
  MonitorPlay,
  Users,
  BadgeCheck,
  FileText,
  CheckCircle2,
} from "lucide-react";

export default function TrainingOutcomes() {
  const deliveryMethods = [
    { title: "In-person workshops", icon: <Users className="w-5 h-5" /> },
    { title: "Online modules", icon: <MonitorPlay className="w-5 h-5" /> },
    {
      title: "Practical demonstrations",
      icon: <Presentation className="w-5 h-5" />,
    },
    { title: "Role-play sessions", icon: <Users className="w-5 h-5" /> },
    { title: "Assessment tests", icon: <FileText className="w-5 h-5" /> },
    {
      title: "Certification upon completion",
      icon: <BadgeCheck className="w-5 h-5" />,
    },
  ];

  const ongoingSupport = [
    "Quarterly refresher training",
    "Annual skill upgrade workshops",
    "New service introduction training",
    "Performance audits",
  ];

  return (
    <section className="pt-20 md:pt-20 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Certification Highlights */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
              Official Validation
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">
              Certification System
            </h2>
            <div className="w-24 h-1.5 bg-primary rounded-full mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <div className="bg-[#F8FAFC] rounded-[32px] p-8 md:p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center text-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
              <div className="w-20 h-20 rounded-3xl bg-amber-100 flex items-center justify-center mb-8 text-amber-600 shadow-inner">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-2xl text-gray-900 font-black mb-3">
                Staff Certification
              </h3>
              <p className="text-gray-500 font-medium mb-8">
                Upon completion, staff team members successfully receive the:
              </p>
              <div className="w-full bg-white border-2 border-amber-100 py-4 px-6 rounded-2xl shadow-sm">
                <span className="font-bold text-amber-700 text-lg">
                  Certified Wellness Professional (CWP)
                </span>
              </div>
            </div>

            <div className="bg-[#F8FAFC] rounded-[32px] p-8 md:p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center text-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
              <div className="w-20 h-20 rounded-3xl bg-blue-100 flex items-center justify-center mb-8 text-blue-600 shadow-inner">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h3 className="text-2xl text-gray-900 font-black mb-3">
                Owner Certification
              </h3>
              <p className="text-gray-500 font-medium mb-8">
                Franchise owners are officially recognized and receive the:
              </p>
              <div className="w-full bg-white border-2 border-blue-100 py-4 px-6 rounded-2xl shadow-sm">
                <span className="font-bold text-blue-700 text-lg">
                  Authorized Franchise Operator
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
