import React from "react";
import {
  Briefcase,
  HeartPulse,
  Target,
  Users,
  ArrowRight,
  Star,
} from "lucide-react";

export default function InternshipHero() {
  const purposes = [
    {
      title: "Practical Experience",
      desc: "Gain hands-on exposure in a live, professional industry environment.",
      icon: <Briefcase className="w-5 h-5" />,
      color: "text-amber-600",
      bg: "bg-amber-100",
      borderColor: "border-amber-100",
    },
    {
      title: "Professional Skills",
      desc: "Develop core clinical and operational wellness skills.",
      icon: <HeartPulse className="w-5 h-5" />,
      color: "text-blue-600",
      bg: "bg-blue-100",
      borderColor: "border-blue-100",
    },
    {
      title: "Career Prep",
      desc: "Prepare directly for employment in health & fitness sectors.",
      icon: <Target className="w-5 h-5" />,
      color: "text-green-600",
      bg: "bg-green-100",
      borderColor: "border-green-100",
    },
    {
      title: "Operations",
      desc: "Actively support and learn from the centre’s daily operations.",
      icon: <Users className="w-5 h-5" />,
      color: "text-purple-600",
      bg: "bg-purple-100",
      borderColor: "border-purple-100",
    },
  ];

  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 bg-white overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left Column - Hero Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700 border border-amber-200 mb-8 font-bold tracking-wide text-sm shadow-sm hover:shadow transition-shadow">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>Student & Graduate Opportunities</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-secondary leading-[1.1] mb-8 tracking-tight">
              Launch Your <br />
              <span className="text-transparent bg-clip-text bg-linear-to-b from-primary to-yellow-100">
                Wellness Career
              </span>
            </h1>

            <p className="lg:text-xl md:text-lg text-gray-500 leading-relaxed font-medium mb-10">
              Bridge the gap between academic theory and industry reality. Join
              our immersive, hands-on internship programme and build the
              foundation for your future in holistic health.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white lg:px-8 px-6 lg:py-4 py-3 rounded-full font-bold transition-all flex items-center gap-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer">
                Apply Now <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column - Purpose Highlights Masonry */}
          <div className="relative">
            <div className="relative z-10 grid sm:grid-cols-2 gap-6">
              <div className="space-y-6">
                {purposes.slice(0, 2).map((purpose, index) => (
                  <div
                    key={index}
                    className={`bg-white/90 backdrop-blur-xl rounded-[32px] p-8 border ${purpose.borderColor} shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all`}
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${purpose.bg} ${purpose.color}`}
                    >
                      {purpose.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {purpose.title}
                    </h3>
                    <p className="text-gray-500 text-[15px] font-medium leading-relaxed">
                      {purpose.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-6 sm:mt-16">
                {purposes.slice(2, 4).map((purpose, index) => (
                  <div
                    key={index}
                    className={`bg-white/90 backdrop-blur-xl rounded-[32px] p-8 border ${purpose.borderColor} shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all`}
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${purpose.bg} ${purpose.color}`}
                    >
                      {purpose.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {purpose.title}
                    </h3>
                    <p className="text-gray-500 text-[15px] font-medium leading-relaxed">
                      {purpose.desc}
                    </p>
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
