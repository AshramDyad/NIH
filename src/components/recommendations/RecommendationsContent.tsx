export function RecommendationsContent() {
  const recommendations = [
    "Check your ward's almanac daily. Do sign the remarks if any, and take necessary action.",
    "Ensure that your ward carries books/exercise books according to the Time Table for that day. No extra books will be allowed.",
    "Ensure that he/she is prepared for the Monday tests and brings Monday test sheets to the school on scheduled Monday test days(only for middle and senior school). Please ensure that you see his/her Report Card and teachers' remarks in his/her class work/home work exercise books and almanac on regular basis.",
    "Encourage your ward to take a balanced interest in studies, co-curricular activities like art, music, dance and sports.",
    "Leave for half day should be avoided as far as possible for security reasons. In an emergency, written permission must be taken from the Director Principal.",
    "Children, when sick, should not be sent to school to attend classes, Monday tests or Examination. This is for strict compliance.",
    "Limit your ward's screen time .",
    "Inculcate reading habits.",
  ];

  return (
    <section className="relative sm:py-16 py-12 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="space-y-4 mb-8 md:mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
              Recommendations for <span className="text-secondary italic">Parents</span>
            </h1>
          </div>

          {/* Recommendations List */}
          <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
            <ul className="space-y-5 md:space-y-6">
              {recommendations.map((recommendation, index) => (
                <li
                  key={index}
                  className="group relative bg-white rounded-2xl sm:p-6 p-4 shadow-sm border border-zinc-100 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-3 w-2 h-2 rounded-full bg-primary" />
                    <p className="text-lg text-zinc-600 leading-relaxed flex-1">
                      {recommendation}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
