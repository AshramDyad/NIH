"use client"

import Image from 'next/image';
import NestedList from '@/components/shared/NestedList';

export default function ScrapLabContent() {
  return (
    <section className="sm:py-16 py-12">
      <div className="mx-auto container px-4">

        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            <span className="text-primary italic">Scrap </span>Lab
          </h1>
        </div>

        {/* Description Content */}
        <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6">
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
            <p>
              Albert Einstein very rightly said &apos;Education is not learning of facts, but the training of the mind to think&apos;
            </p>

            <p>
              It has been our constant endeavour to inculcate 21st century skills and to create a thirst for knowledge in our students.It is our belief that learning should be joyful, relevant and fulfilling.With this vision, the school has been successfully running an afterschool program, Scraplabs, which is a venture of Scrapbotics Laboratories. It is run by a group of young professionals who seek to make a positive change to the learning process for the young minds. Students learn by doing during these hands-on learning sessions.
            </p>

            <NestedList
              items={[
                'Sessions are held on every alternate Thursday, after school, within the school premises, for classes VI,VII and VIII.',
                'Presently the program runs in three modules.',
                'Senior Freshers- Learning concepts of complex circuits with Electronic kits, structure and gear mechanism with Grabber kit and motors and chassis while making their own remote control car.',
              ]}
              orderedItems={[
                'Autonomous Freshers- Introduction to coding world to make things smart with Arduino microcontroller and different sensors like LDR, ultrasonic etc.',
                'Autonomous Repeaters- Working on some innovative projects like weather update kit, servo motor kit using Arduino, LCD and different sensors like temperature, humidity etc',
              ]}
            />

            {/* Image Gallery */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Image
                src="/images/infrastructure/scrap-lab/scrap-lab-1.jpg"
                alt="Scrap Lab"
                width={600}
                height={400}
                loading="lazy"
                className="rounded-lg shadow-sm w-full h-auto"
              />
              <Image
                src="/images/infrastructure/scrap-lab/scrap-lab-2.jpg"
                alt="Scrap Lab"
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
