import React from "react";
import { Clock, Users2, CheckCircle2 } from "lucide-react";

export default function VolunteershipTarget() {
  const durations = [
    { label: "Event-Based", time: "1–3 Days" },
    { label: "Short-Term", time: "1 Month" },
    { label: "Long-Term", time: "3–6 Months" },
  ];

  const eligibility = [
    "College & University Students",
    "Health and Fitness Enthusiasts",
    "Active Community Members",
    "Retired Healthcare Professionals",
    "Corporate Social Responsibility (CSR) Groups",
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: Target Volunteers */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 font-bold tracking-wide text-sm mb-6 shadow-sm">
              <Users2 className="w-4 h-4" />
              <span>Target Audience</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary tracking-tight mb-8">
              Who Should Volunteer?
            </h2>

            <p className="text-lg text-gray-600 font-medium mb-10 leading-relaxed">
              Whether you are a student looking for experience, a retired
              professional wanting to give back, or a corporate group fulfilling
              social responsibility, we have a place for you.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
              Ideal Candidates:
            </h3>

            <div className="grid sm:grid-cols-1 gap-x-8 gap-y-5">
              {eligibility.map((field, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <span className="text-gray-700 font-medium leading-snug pt-0.5 text-lg">
                    {field}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Duration Options */}
          <div className="bg-[#F8FAFC] rounded-[40px] p-6 md:p-8 border border-emerald-100/50 relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-8">
                <Clock className="w-8 h-8" />
              </div>

              <h2 className="text-2xl md:text-3xl font-black text-secondary mb-4">
                Flexible Durations
              </h2>
              <p className="text-lg text-gray-500 font-medium mb-10">
                We offer multiple time commitments to fit your schedule, from
                single-day events to multi-month leadership roles.
              </p>

              <div className="space-y-4">
                {durations.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-emerald-200 transition-colors gap-2"
                  >
                    <span className="text-gray-900 font-bold text-lg">
                      {item.label}
                    </span>
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-sm whitespace-nowrap">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
