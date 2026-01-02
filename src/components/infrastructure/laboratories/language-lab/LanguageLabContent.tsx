"use client"

import Image from 'next/image';

export default function LanguageLabContent() {
  return (
    <section className="sm:py-16 py-12">
      <div className="mx-auto container px-4">

        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            <span className="text-primary italic">Language</span> Lab
          </h1>
        </div>

        {/* Content */}
        <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6">
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
            <p>
              There is a language lab where all activities related to foreign language are carried out. Students are given ample opportunity to practice and perform in languages of their choice.
            </p>

            <p>
              There are 2 Language Labs in the Primary Wing- Language Avenue and Words A- Maze. The Labs engage the children in a wide range of language - based activities and use several multi- sensory aids to facilitate the development of effective communication skills in English.
            </p>

            <p>
              There is Drama and Movement Room in Infant Wing.
            </p>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <Image
                src="/images/infrastructure/language-lab-1.jpg"
                alt="Language Lab"
                width={800}
                height={600}
                loading="lazy"
                className="rounded-lg shadow-sm w-full h-auto"
              />
              <Image
                src="/images/infrastructure/language-lab-2.jpg"
                alt="Language Lab"
                width={800}
                height={600}
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
