import React from "react";
import { Clock, GraduationCap, CheckCircle2 } from "lucide-react";

export default function InternshipDetails() {
  const durations = [
    { label: "Short-Term Internship", time: "4 Weeks" },
    { label: "Standard Internship", time: "8–12 Weeks" },
    { label: "Advanced / Professional", time: "6 Months" },
  ];

  const eligibility = [
    "Health Sciences",
    "Nutrition & Dietetics",
    "Physical Education",
    "Psychology",
    "Physiotherapy",
    "Business/Marketing",
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: Duration Options */}
          <div className="bg-[#F8FAFC] rounded-[40px] p-8 md:p-12 border border-blue-100/50 relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <Clock className="w-8 h-8" />
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
                Duration Options
              </h2>
              <p className="text-lg text-gray-500 font-medium mb-10">
                Flexible timelines designed to fit your academic schedule and
                career goals.
              </p>

              <div className="space-y-4">
                {durations.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-blue-200 transition-colors gap-2"
                  >
                    <span className="text-gray-900 font-bold text-lg">
                      {item.label}
                    </span>
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-bold text-sm whitespace-nowrap">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Eligibility Criteria */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-bold tracking-wide text-sm mb-6">
              <GraduationCap className="w-4 h-4" />
              <span>Student Eligibility</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary tracking-tight mb-8">
              Who Should Apply?
            </h2>

            <p className="text-lg text-gray-600 font-medium mb-10 leading-relaxed">
              We welcome passionate students pursuing degrees in relevant fields
              who possess good communication skills and a genuine interest in
              the wellness industry.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
              Eligible Fields of Study:
            </h3>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
              {eligibility.map((field, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />
                  <span className="text-gray-700 font-medium leading-snug pt-0.5">
                    {field}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
