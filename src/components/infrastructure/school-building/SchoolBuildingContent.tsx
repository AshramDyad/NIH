"use client"

export default function SchoolBuildingContent() {
  return (
    <section className="sm:py-16 py-12">
      <div className="mx-auto container px-4">

        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            School <span className="text-secondary italic">Building</span>
          </h1>
        </div>

        {/* Description Paragraphs */}
        <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6">
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
            <p>
              DPS Gurgaon, a school with a distinct personality, vibrates with depth, stability and progress in all its manifestations. Its unique structure captivates the first time visitors. For the DPS family within, it&apos;s like one big home where belongingness and dedication catches on.
            </p>
            <p>
              Utmost care has been taken for the safety of students in the way school has been designed. The school from within has been divided into three blocks A, B and C. These are interconnected and each room is air-conditioned.
            </p>
            <p>
              At sector 40, we have the Infant wing which houses the Pre Nursery and Nursery classes. The fully air-conditioned building is a peaceful heaven for the little ones to learn skills through fun activities.
            </p>
            <p>
              At sector 47, we have the DPS primary wing. This wing has been designed specially to cater to the needs of the little ones. Classes Prep, I, II and III are conducted in this primary wing. Ample amount of play area, sand pit and activity space has been reserved to develop their tender and formative years.
            </p>
          </div>
        </article>

      </div>
    </section>
  );
}
