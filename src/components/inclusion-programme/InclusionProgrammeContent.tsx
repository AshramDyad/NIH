import Image from "next/image";

// Inline interface for Facilitator
interface Facilitator {
  name: string;
}

export default function InclusionProgrammeContent() {
  // Data with inline type annotation - exact from old HTML
  const facilitators: Facilitator[] = [
    { name: "Ms. Renuka Fernandes, Counsellor (Senior School) & HOD" },
    { name: "Ms Shirley Manning, Special Educator (Coordinator)" },
    { name: "Ms. Amanat Gill, Special Educator (Primary and Junior School)" },
    {
      name: "Ms. Parul Sharma, Occupational Therapist (Infant and Primary School)",
    },
    {
      name: "Ms. Lovey Sharma, Occupational Therapist (Primary and Junior School)",
    },
    { name: "Ms. Malini Chaturvedi, Counsellor (Middle School)" },
    { name: "Ms. Amandeep Brar, Counsellor (Junior School)" },
    { name: "Ms. Kanica Dua, Counsellor (Infant and Primary School)" },
  ];

  return (
    <section className="sm:py-16 py-12" aria-label="Inclusion Programme">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            Inclusion <span className="text-primary italic">Programme</span>
          </h1>
        </div>

        {/* Content Sections - EXACT text from old HTML */}
        <div className="space-y-6 mx-auto mt-8">
          {/* Quote */}
          <blockquote className="border-l-4 border-primary pl-6 py-4 bg-zinc-50 rounded-r-2xl mb-8">
            <p className="text-lg italic text-secondary leading-relaxed">
              <em>
                <strong>
                  The only thing worse than being blind, is having sight but no
                  vision. - Helen Keller
                </strong>
              </em>
            </p>
          </blockquote>

          {/* First Paragraph */}
          <p className="text-lg text-zinc-600 leading-relaxed">
            All children learn and they learn in different ways. In other words,
            each child is a unique learner. When we talk of every child we
            include ALL children including those with additional supportive
            needs, be they physical, neurological or social. Some children have
            more difficulties than most children of their age with thinking,
            understanding and learning; speech, language and communication;
            sensory difficulties and physical development; emotional and
            behavioural difficulties; and relating to other people. These
            challenges make it harder for them to learn or access education than
            most children of the same age. What is most important is that nearly
            all children with special educational needs are able to reach their
            full potential with additional support and understanding. In
            comparison to their peers they may need extra or individual help
            based on a range of needs and learning styles.
          </p>

          {/* Second Paragraph */}
          <p className="text-lg text-zinc-600 leading-relaxed">
            The Inclusion Team at DPS Gurgaon works on the belief that every
            student has the potential to access and make progress towards any
            goal. Inclusion is an attitude we adopt in our interactions with one
            another. It is about intentionally planning for the success of all
            students by providing them the right atmosphere to enable them to
            succeed in the regular classroom and to nurture them to participate
            independently in society.
          </p>

          {/* Third Paragraph */}
          <p className="text-lg text-zinc-600 leading-relaxed">
            DPS Gurgaon has been one of the first schools in Gurgaon to follow
            the philosophy of Inclusive Education and adheres to the CBSE
            Guidelines for Inclusive Practices. All students, regardless of any
            challenges they may have, are placed in age-appropriate general
            education classes and receive appropriate instructions,
            interventions, and support that enables them to succeed in the core
            curriculum. Early identification of special needs is the key to a
            child's successful development. The school and classroom operate on
            the premise that students with disabilities are as fundamentally
            competent as students without disabilities. The driving principle is
            to develop a sense of belonging among the students and support them
            in their efforts to see them through their years at school.
          </p>

          {/* Fourth Paragraph */}
          <p className="text-lg text-zinc-600 leading-relaxed">
            DPS Gurgaon prides itself in the fact that the Inclusion team
            consists of a dedicated and devoted lot working under the able
            mentorship of the Director Principal, Ms. Aditi Misra, who spares no
            efforts to see to it that all the decisions are taken in the
            interests of the development of ALL the children.
          </p>
        </div>

        {/* Facilitators Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">
            The Facilitators
          </h2>
          <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" role="table">
                <tbody>
                  {facilitators.map((facilitator, index) => (
                    <tr
                      key={index}
                      className={`transition-colors ${
                        index % 2 === 0 ? "bg-zinc-50" : "bg-white"
                      }`}
                    >
                      <td className="px-6 py-4 text-base text-zinc-900 border border-zinc-200 font-semibold">
                        {facilitator.name}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="mt-10">
          <Image
            src="/images/inside-page/dpsg1319.jpg"
            alt="Inclusion Programme"
            width={355}
            height={165}
          />
        </div>
      </div>
    </section>
  );
}
