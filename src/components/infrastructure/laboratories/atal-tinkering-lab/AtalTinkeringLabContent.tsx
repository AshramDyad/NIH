"use client"

export default function AtalTinkeringLabContent() {
  return (
    <section className="sm:py-16 py-12">
      <div className="mx-auto container px-4">

        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            <span className="text-secondary italic">Atal Tinkering </span>Lab
          </h1>
        </div>

        {/* Description Content */}
        <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6">
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
            <p>
              Our school has been selected to collaborate under Atal Innovation Mission (AIM) to establish, operate and support Atal Tinkering Lab (ATL), a work space where students can give shape to their ideas through hands on - Do it yourself mode and develop innovation skills.
            </p>

            <p>
              Niti Aayog, Govt. of India, shall provide financial support in the form of grant in-aid to setup and maintain the ATL in school premises.
            </p>

            <p>
              Objective of ATL is to foster curiosity, creativity and imagination in young minds. Students will get a chance to work with tools and equipments to understand what, how and why aspects of STEM (Science, Teachnology, Engineering and Maths).
            </p>
          </div>
        </article>

      </div>
    </section>
  );
}
