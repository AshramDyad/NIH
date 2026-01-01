"use client"

import Image from 'next/image';

export default function ScienceLabsContent() {
  return (
    <section className="sm:py-16 py-12">
      <div className="mx-auto container px-4">

        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            Science <span className="text-secondary italic">Labs</span>
          </h1>
        </div>

        {/* Description Content */}
        <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6">
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
            <p>
              &apos;We have well equipped labs in the school, where students put theory into practice. All facilities are provided to our young innovators to meet the curriculum demands with care and guidance of our expert faculty and well trained lab assistants. Besides being equipped the labs are spacious, airy, organised and well kept 24×7.
            </p>

            <p className="font-bold text-zinc-900">
              We have four science labs for the seniors
            </p>

            <div>
              <h5 className="font-semibold text-secondary">The Physics Lab:</h5>
              <p>
                Demos, experiments and practicals are carried out by the students over here. This lab also has a dark room for optic experiments. Students are guided and observed while they are at work in the lab.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-secondary">The Chemistry Lab:</h5>
              <p>
                The smell of fumes that emanates from this lab defines the young scientists into the making. The lab is thoroughly equipped and proves to be a platform for the inquisitive minds. All the experiments are carried out under vigilance. Besides the experiments, all activities as per the NCRT requirement are also executed in the lab.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-secondary">The Biology Lab:</h5>
              <p>
                The Bio lab gives hands on experience to the students in all aspects of the subject. There are live and preserved specimens of plants and animals to facilitate course experiments. There is a good collection of permanent slides that proves to be a wealth of information for the students. All modern, scientific apparatus along with models and charts are used here.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-secondary">The General Science Lab:</h5>
              <p>
                The younger students of the middle school try their innovative and experimental skills in the general science lab. This lab carries a mix of instruments meant for science for the juniors. Incase some specific experiments are required to be done. Then the students are taken to physics/chemistry or the biology lab.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Image
                  src="/images/infrastructure/science-labs/science-labs-1.jpg"
                  alt="Science Lab"
                  width={600}
                  height={400}
                  loading="lazy"
                  className="rounded-lg shadow-sm w-full h-auto"
                />
                <Image
                  src="/images/infrastructure/science-labs/science-labs-2.jpg"
                  alt="Science Lab"
                  width={600}
                  height={400}
                  loading="lazy"
                  className="rounded-lg shadow-sm w-full h-auto"
                />
              </div>
            </div>

            <div>
              <div className="space-y-4">
                <h3 className="font-bold text-zinc-900">I-Discover Rooms in Infant Wing and Primary Wing:</h3>
                <p>
                  I - Discover Rooms have been set up where the children get an opportunity to undertake simple experiments which help them to explore and understand the basic principles of science. This hand on experience enhances their learning and boosts their confidence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Image
                  src="/images/infrastructure/science-labs/science-labs-3.jpg"
                  alt="Science Lab"
                  width={600}
                  height={400}
                  loading="lazy"
                  className="rounded-lg shadow-sm w-full h-auto"
                />
                <Image
                  src="/images/infrastructure/science-labs/science-labs-4.jpg"
                  alt="Science Lab"
                  width={600}
                  height={400}
                  loading="lazy"
                  className="rounded-lg shadow-sm w-full h-auto"
                />
              </div>
            </div>
          </div>
        </article>

      </div>
    </section>
  );
}
