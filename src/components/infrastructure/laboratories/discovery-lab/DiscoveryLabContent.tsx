"use client"

import Image from 'next/image';

export default function DiscoveryLabContent() {
  return (
    <section className="sm:py-16 py-12">
      <div className="mx-auto container px-4">

        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            <span className="text-primary italic">Discovery </span>Lab
          </h1>
        </div>

        {/* Description Content */}
        <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6">
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
            <p>
              Discovery lab for subjects Science,Social Studies and Maths helps students of class III, IV and V to gain hands on knowledge of various theoretical concepts taught in class. Young Scientists of Junior school put on their thinking caps to observe specimens of plants, animals and models of human skeleton,globe, human brainetc.Students get to work with wind vane, compass, see various landforms and read maps in discovery lab. 2D and 3D models help students to understand shapes better and learning multiplication becomes fun with stick activity. Colourful charts,engrossing activities and experiments create love for learning in young minds.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              <Image
                src="/images/infrastructure/discovery-lab/discovery-lab-th-1.jpg"
                alt="Discovery Lab"
                width={600}
                height={400}
                loading="lazy"
                className="rounded-lg shadow-sm w-full h-auto"
              />
              <Image
                src="/images/infrastructure/discovery-lab/discovery-lab-th-2.jpg"
                alt="Discovery Lab"
                width={600}
                height={400}
                loading="lazy"
                className="rounded-lg shadow-sm w-full h-auto"
              />
              <Image
                src="/images/infrastructure/discovery-lab/discovery-lab-th-3.jpg"
                alt="Discovery Lab"
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
