"use client"

import Image from 'next/image';
import BulletList from '@/components/shared/BulletList';

export default function MathLabContent() {
  return (
    <section className="sm:py-16 py-12">
      <div className="mx-auto container px-4">

        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            <span className="text-primary italic">Math </span>Lab
          </h1>
        </div>

        {/* Description Content */}
        <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6">
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
            <p>
              We all understand that math can not be learnt. It has to be understood and practiced. The Math lab takes this concept a little further. Here students are made to experience the various principles and fundamentals of mathematics.
            </p>

            <p className="font-semibold text-zinc-900">
              We have Three Math Labs:
            </p>

            <BulletList
              items={[
                "The primary Math Lab for class 2<sup>nd</sup>.",
                "The junior Math Lab for classes 3<sup>rd</sup>, 4<sup>th</sup> and 5<sup>th</sup>.",
                "The senior Math Lab for Classes 6<sup>th</sup> to 12<sup>th</sup>.",
              ]}
            />

            <p>
              Students get to understand the various concepts through the feel of real objects. Math, measurement and relationships between various principles are not left to some strange imagination, they are clarified by actual demonstration. This makes math more real and hence better understood.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <Image
                src="/images/infrastructure/math-lab/math-lab-th-1.jpg"
                alt="Math Lab"
                width={600}
                height={400}
                loading="lazy"
                className="rounded-lg shadow-sm w-full h-auto"
              />
              <Image
                src="/images/infrastructure/math-lab/math-lab-th-2.jpg"
                alt="Math Lab"
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
