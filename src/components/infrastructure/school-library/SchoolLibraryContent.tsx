"use client"

export default function SchoolLibraryContent() {
  return (
    <section className="sm:py-16 py-12">
      <div className="mx-auto container px-4">

        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            School <span className="text-secondary italic">Library</span>
          </h1>
        </div>

        {/* Description Content */}
        <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6">
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
            <p>
              'Reading adds newer dimensions to the body of knowledge. We at DPS Gurgaon, believe in inculcating a reading culture that enhances and compliments the education system. Books that capture the imagination of students, reconfirm their facts and open newer doors of intellect are carefully chosen and made available to the students. We have some avid readers here who have even become a part of the BookClub, that&apos;s an offshoot of healthy reading.
            </p>

            <p className="font-semibold text-zinc-900">
              We have four libraries in school:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Junior School Library - Sector 47 and Sector 45</li>
              <li>Middle School library</li>
              <li>Senior School Library</li>
            </ul>

            <p>
              Books on varied subjects are available here.
            </p>

            <p>
              Reference Books and Magazines keep the students abreast with all that&apos;s happening around. Students are encouraged to give their suggestion about the kind of books they would like in the library, and our librarians do their bit to carry their suggestions further.
            </p>
          </div>
        </article>

      </div>
    </section>
  );
}
