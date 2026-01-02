"use client"

import Image from 'next/image';
import BulletList from '@/components/shared/BulletList';

export default function ItLabContent() {
  return (
    <section className="sm:py-16 py-12">
      <div className="mx-auto container px-4">

        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            <span className="text-secondary italic">IT</span> Lab
          </h1>
        </div>

        {/* Content */}
        <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6">
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
            <p>
              In this tech savvy world, we realize&apos;s role of school in making our students proficient from day one. No profession can run in isolation as almost everything is interwoven with Information Technology. Our enthusiastic young students will be budding professionals tomorrow, so, IT training is given keeping in mind today&apos;s needs and tomorrow&apos;s vision.
            </p>

            <p className="font-semibold text-zinc-900">
              We have seven IT Labs
            </p>

            <BulletList
              items={[
                "Two for Senior school",
                "One for Middle school",
                "One for Junior school",
                "Three for Primary Wing at sector 47.",
                "One for Infant Wing at sector 40.",
              ]}
            />

            {/* Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              <Image
                src="/images/infrastructure/it-lab-2.jpg"
                alt="IT Labs"
                width={800}
                height={600}
                loading="lazy"
                className="rounded-lg shadow-sm w-full h-auto"
              />
              <Image
                src="/images/infrastructure/it-lab-3.jpg"
                alt="IT Labs"
                width={800}
                height={600}
                loading="lazy"
                className="rounded-lg shadow-sm w-full h-auto"
              />
              <Image
                src="/images/infrastructure/it-lab-1.jpg"
                alt="IT Labs"
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
