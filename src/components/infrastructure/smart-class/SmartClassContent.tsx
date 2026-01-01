export default function SmartClassContent() {
  return (
    <section className="sm:py-16 py-12">
      <div className="mx-auto container px-4">

        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            <span className="text-primary italic">Smart </span>Class
          </h1>
        </div>

        {/* Description Paragraphs */}
        <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6">
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
            <p>
              At DPS Gurgaon we have the Smart Class concept also in practice. What might otherwise seem dull or monotonous with just text-book studies, becomes bright, and captivating in the flash and animation movies, which re-affirm the concepts already taught in class. This makes the process of learning fun and also ensures the lasting impact on the tech-savvy minds of today&apos;s generation.
            </p>
            <p>
              <strong>Smart Classes add to the quality of teaching in the following ways :-</strong>
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                <p>These classes help in bringing abstract and difficult curriculum concepts to life.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                <p>Enable multi-sensory learning in classrooms</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                <p>Enable instant formative assessment of learning outcome in class</p>
              </li>
            </ul>
            <p>Over all they make learning fun and improve academic performance.</p>
          </div>
        </article>

      </div>
    </section>
  );
}
