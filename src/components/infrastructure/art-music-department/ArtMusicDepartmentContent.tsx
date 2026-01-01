import Image from 'next/image';

export default function ArtMusicDepartmentContent() {
  return (
    <section className="sm:py-16 py-12">
      <div className="mx-auto container px-4">

        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            <span className="text-primary italic">Art &amp; Music </span>Department
          </h1>
        </div>

        {/* Art Department Section */}
        <article className="mb-8 bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">Art Department</h2>
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
            <p>
              The school has an art department that buzzes with creativity. This department does more than just teaching art. It infuses creativity in the young minds and hearts here. The department comprises of Art room, designated Pottery and Sculpture areas.
            </p>
            <div className="flex lg:flex-row flex-col justify-between gap-6">
              <div className='space-y-4'>
                <p className="font-semibold text-zinc-900">
                  The various fields in which students are trained here are:
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4 marker:text-primary">
                  <li>
                    Sketching, Colouring and Painting.
                  </li>
                  <li>
                    Paper Craft
                  </li>
                  <li>
                    Clay Modeling
                  </li>
                  <li>
                    Pottery
                  </li>
                  <li>
                    Sculpture
                  </li>
                </ul>
              </div>

              {/* Image */}
              <div className="flex justify-center">
                <Image
                  src="/images/infrastructure/5.jpg"
                  alt="Art & Music Department"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-sm"
                />
              </div>
            </div>

            <p>It&apos;s amazing to see little ideas turn into shapes and figures that reflect the passion of the young creators.</p>
            <p>An Annual exhibition is put up by the Art Department every year around February-March, showcasing the creative work of the students.</p>
            <p>The primary section at Sector 47 has a room exclusively dedicated to art and craft related activities. Besides the day to day activities that take place within the class rooms, little creative hands add colour along with smiles to their lives over here. It&apos;s heartening to see pictures of the mind turn into pictures of reality through the creative hands of these little toddlers.</p>
          </div>
        </article>

        {/* Music and Dance Room Section */}
        <article className="mb-8 bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">Music and Dance Room</h2>
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
            <p>
              Just come up to the second floor, in the C Block, and you are sure to get drawn in with the enigma of Music and Dance. School realises the importance of Music and Dance for the holistic development of the students and hence ample opportunity and exposure is given to the students to get a feel of their own potential.
            </p>
            <div className="flex lg:flex-row flex-col justify-between gap-6">
              <div className='space-y-4'>
                <p className="font-semibold text-zinc-900">
                  The different streams where training is imparted are:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 marker:text-primary">
                  <li>
                    Indian Classical
                  </li>
                  <li>
                    Semi-Classical
                  </li>
                  <li>
                    Western Vocal
                  </li>
                  <li>
                    Kathak
                  </li>
                  <li>
                    Bharatnatyam
                  </li>
                  <li>
                    Light Music and Dance
                  </li>
                  <li>
                    Instrumental Music
                  </li>
                </ul>
              </div>
              {/* Image */}
              <div className="flex justify-center">
                <Image
                  src="/images/infrastructure/6.jpg"
                  alt="Art & Music Department"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-sm"
                />
              </div>
            </div>

          </div>
        </article>

        {/* Instrumental Music Section */}
        <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">Instrumental Music</h2>
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
            <p className="font-semibold text-zinc-900">
              Students get trained in:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 marker:text-primary">
              <li>
                Keyboard
              </li>
              <li>
                Drum
              </li>
              <li>
                Guitar
              </li>
              <li>
                Bongo
              </li>
              <li>
                Tabla
              </li>
              <li>
                Flute
              </li>
            </ul>
            <p>Our young music experts also form the &apos;School Orchestra&apos; can be seen them mesmerizing the audience during school programmes.</p>
            <p>At Infant wing and Primary wing, we have music and dance rooms. One can see the spirits of the little students liven up as they shed all their inhibitions and get into the real thing!</p>
          </div>
        </article>

      </div>
    </section>
  );
}
