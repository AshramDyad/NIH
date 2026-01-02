import Image from 'next/image';
import BulletList from '@/components/shared/BulletList';

export default function FacilitiesContent() {
  return (
    <section className="sm:py-16 py-12">
      <div className="mx-auto container px-4">

        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            <span className="text-primary italic">Facilities</span>
          </h1>
        </div>

        {/* Tuckshop Section */}
        <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6 mb-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">Tuckshop</h2>
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
            <p>
              The School has a tuckshop within the campus. Course books (for all classes), stationery items and the school uniform can be purchased from here. For the convenience of parents and students the bookshop remains open on all weekdays up to 2 o&apos;clock.
            </p>
          </div>
        </article>

        {/* Cafeteria Section */}
        <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6 mb-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">Cafeteria</h2>
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
            <p>
              With all the academia and extracurricular that keeps every one on the toes, the cafeteria comes as one big reason to chill. The cafeteria is professionally managed and the variety of &apos;quick bites&apos; it offers is sure to tempt you in. From vadas to brownies, and quick snacks to complete meals, everything is served here with as much attention to taste as to hygiene.
            </p>
          </div>
        </article>

        {/* Toy Room Section */}
        <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6 mb-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">Toy Room</h2>
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
            <p>
              We have one Toy Room each at Infant wing and Primary Wing where different group activities are done. It&apos;s an area where they learn to get along with their peer group and develop sharing and caring skills. Such activities promote independence, self-control and a positive attitude. Children are taught about group participation, team spirit, team leadership as well as why and how to follow instructions.
            </p>
          </div>
        </article>

        {/* Playground Section */}
        <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6 mb-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">Playground</h2>
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
            <p>
              Play ground is a different tool of education altogether. Besides the game it teaches team spirit, determination, focus and management. Above all it imparts the winning spirit. For all these reasons and more-All work along with lots of play, is the school mantra as far as sports go.
            </p>
            <p className="font-semibold text-zinc-900">
              At sector 45 we have:
            </p>
            <BulletList
              items={[
                "The Basket Ball court",
                "The Football Court",
                "The Tennis Court",
                "Volley Ball Court",
              ]}
            />
            <p className="font-semibold text-zinc-900">
              The other sports and activities amongst which students can choose are:
            </p>
            <BulletList
              items={[
                "Table Tennis",
                "Skating",
                "Aerobics",
                "Taekwondo",
              ]}
            />
            <p>
              Students are encouraged to take part in games on a regular basis. Students represent the school in various tournaments at different inter-school and state levels.
            </p>
            <p>
              At sector 47 we have a play area for students, a sand pit and a play ground. Students begin with their preliminary training in sports right there under expert trainers.
            </p>
          </div>
        </article>

        {/* Gymnasium Section */}
        <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6 mb-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">Gymnasium</h2>
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
            <p>
              The students also have access to the school gym. Equipments as per the age and requirements have been installed with fitness being the key motive.
            </p>
            <p>
              In the cardio section we have the stepper, treadmill, exercising cycles, cross trainer and the rowing machine.
            </p>
            <p>
              In the strength training section we have the multi-gym and the free weights.
            </p>
            <p>
              Students are allowed to use these facilities in their PE period under expert supervision.
            </p>
          </div>
        </article>

        {/* Staff Room Section */}
        <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6 mb-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">Staff Room</h2>
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
            <p className="font-semibold text-zinc-900">
              We have five staff rooms in the campus.
            </p>
            <BulletList
              items={[
                "Staff room for the Junior school",
                "Three staff rooms for the Middle school",
                "Staff room for the Senior school",
              ]}
            />
            <p>
              We also have a teachers&apos; resource room in Senior school as well as the Primary wing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <Image
                src="/images/infrastructure/facilities-1.jpg"
                alt="Staff Room"
                width={800}
                height={600}
                loading="lazy"
                className="rounded-lg shadow-sm w-full h-auto"
              />
              <Image
                src="/images/infrastructure/facilities-2.jpg"
                alt="Staff Room"
                width={800}
                height={600}
                loading="lazy"
                className="rounded-lg shadow-sm w-full h-auto"
              />
            </div>
          </div>
        </article>

        {/* Auditorium Section */}
        <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6 mb-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">Auditorium</h2>
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
            <p>
              In the ground floor we have an auditorium with the seating capacity of 600 people. Round the year, the students and sometimes even teachers get the opportunity to show- case their stage talents on different occasions. The auditorium is technically equipped for light and sound shows.
            </p>
          </div>
        </article>

        {/* Medical Room / Comfort Zone Section */}
        <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">Medical Room / Comfort Zone</h2>
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
            <p>
              DPS 45, its primary wing at sector 47and its infant wing at sector 40, have well equipped medical rooms. Incase of sickness or untoward happening students come into the care of qualified doctor and nurse here.
            </p>
            <div>
              <Image
                src="/images/infrastructure/facilities-3.jpg"
                alt="Medical Room"
                width={600}
                height={600}
                loading="lazy"
                className="rounded-lg shadow-sm md:w-auto w-full h-auto"
              />
            </div>
          </div>
        </article>

      </div>
    </section>
  );
}
