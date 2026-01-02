"use client"

export default function PsychologyLabContent() {
  return (
    <section className="sm:py-16 py-12">
      <div className="mx-auto container px-4">

        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            <span className="text-primary italic">Psychology </span>Lab
          </h1>
        </div>

        {/* Description Content */}
        <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6">
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
            <p>
              We have a psychology lab where students conduct course related experiments. Some of the experiments can also be conducted within the class though. This lab is also used by school counselors. Training in life skills is also imparted here. Counselors here also focus on peer education program.
            </p>
          </div>
        </article>

      </div>
    </section>
  );
}
