import React from "react";
import { BookOpen, Trophy, ArrowRight, CheckCircle2 } from "lucide-react";

export default function InternshipOutcomes() {
  const trainingProvided = [
    "Orientation & brand training",
    "Basic wellness knowledge",
    "Communication skills",
    "Professional ethics",
    "Safety procedures",
  ];

  const learningOutcomes = [
    { text: "Understand wellness centre operations", highlight: "Operations" },
    {
      text: "Gain hands-on clinical and administrative experience",
      highlight: "Experience",
    },
    {
      text: "Improve professional workplace confidence",
      highlight: "Confidence",
    },
    { text: "Build inter-departmental teamwork skills", highlight: "Teamwork" },
    { text: "Develop real-world industry exposure", highlight: "Exposure" },
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
            Curriculum & Growth
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary tracking-tight">
            Training & Outcomes
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Training Provided */}
          <div className="bg-[#F8FAFC] rounded-[40px] p-8 md:p-12 border border-gray-100 flex flex-col h-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-8 w-max">
              <BookOpen className="w-4 h-4" />
              <span>Training Provided</span>
            </div>

            <h3 className="text-3xl font-black text-gray-900 mb-8">
              Foundational Knowledge
            </h3>

            <div className="space-y-5 flex-1">
              {trainingProvided.map((training, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm"
                >
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                  <span className="text-gray-800 font-bold text-lg">
                    {training}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Learning Outcomes */}
          <div className="bg-[#F8FAFC] rounded-[40px] p-8 md:p-12 border border-amber-100/50 flex flex-col h-full relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-bold text-sm mb-8 w-max">
                <Trophy className="w-4 h-4" />
                <span>Learning Outcomes</span>
              </div>

              <h3 className="text-3xl font-black text-gray-900 mb-8">
                By End of Programme
              </h3>

              <div className="space-y-4 flex-1">
                {learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 bg-white border border-amber-200 text-amber-600 rounded-full p-1.5 shrink-0 shadow-sm">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <p className="text-gray-600 text-lg font-medium leading-relaxed pt-0.5">
                      {outcome.text
                        .split(outcome.highlight)
                        .map((part, i, arr) => (
                          <React.Fragment key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <strong className="text-gray-900 font-bold underline decoration-amber-200 decoration-4 underline-offset-4">
                                {outcome.highlight}
                              </strong>
                            )}
                          </React.Fragment>
                        ))}
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
