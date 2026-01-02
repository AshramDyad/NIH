"use client"

import Image from 'next/image';

export default function FineArtLabContent() {
  return (
    <section className="sm:py-16 py-12">
      <div className="mx-auto container px-4">

        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            <span className="text-secondary italic">Fine Art </span>Lab
          </h1>
        </div>

        {/* Description Content */}
        <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6">
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
            <p>
              The school Art laboratory provides a productive working environment for the senior students of classes IX ,X , XI & XII (Fine Arts Section) where the students are encouraged to explore the unique qualities of Visual Art through classes carefully designed for each grade.
            </p>

            <p>
              We have to &apos;still life&apos; corner with proper drapery and light arrangements for the F A students.
            </p>

            <p>
              Here, experimentation is encouraged and guided under the careful supervision of the school faculty.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <Image
                src="/images/infrastructure/fine-art-lab/fine-art-th-1.jpg"
                alt="Fine Art Lab"
                width={600}
                height={400}
                loading="lazy"
                className="rounded-lg shadow-sm w-full h-auto"
              />
              <Image
                src="/images/infrastructure/fine-art-lab/fine-art-th-2.jpg"
                alt="Fine Art Lab"
                width={600}
                height={400}
                loading="lazy"
                className="rounded-lg shadow-sm w-full h-auto"
              />
            </div>
          </div>
        </article>

      </div>
    </section>
  );
}
