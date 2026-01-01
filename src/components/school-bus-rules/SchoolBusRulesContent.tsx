export default function SchoolBusRulesContent() {
  const busRules = [
    "Transport facilities are provided for the convenience of the students, although it is not an obligatory service of the school.",
    "Applications for school transport, transport cancellation, change of bus stops, change of bus route etc. should be submitted to school Transport Incharge one month in advance.",
    "Buses will be available only on the routes and at stops fixed by the school and any request for new stops will not be entertained. However, the school reserves the right to make any change if found inevitable.",
    "Students travelling by the school bus should always be in proper school uniform and in possession of the school ID card with proper bus number failing which, they will not be allowed to board the bus.",
    "Students must report at the scheduled stop 5 minutes before the bus arrival time.",
    "Students must travel only by the bus allocated to them.",
    "No student will be allowed to board a bus other than the one allotted, unless he/she has written permission from the school authorities.",
    "If a student wants to get down at a different bus stop, he/she should submit a request signed by the parent to the Principal/Transport Office and obtain special permission for the same.",
    "The bus facility will be cancelled for those students who damage any bus fittings or indulge in acts of misbehavior/indiscipline in the bus.",
    "In case of misbehavior in the bus, the teacher/driver is authorized to take immediate necessary steps and report the matter to the Principal/Transport Incharge for further actions, if necessary. Such a student will be taken off the bus.",
    "Eating, drinking or playing any game in the bus is strictly forbidden.",
    "The school buses are fitted with a governor. There is a fully equipped first aid box in every bus. As you are aware the school will take every precaution for the safety of the children, however, the school is not responsible for situations beyond their control.",
    "Whenever there is an after school bus route, the buses will cover only a few common stops on the main roads in that area. The regular route will not ply on such occasions.",
    "Parents are requested to forward all requests regarding transport to the Transport Incharge. All requests may not be feasible.",
    "Please note that the Transport Incharge is handling over 4000 students and is not always available to speak to parents. Please ensure you call only in case of an emergency.",
    "Parents of children from classes Pre-Nursery to V should come/send a responsible person to receive their ward from the bus stop failing which the child will be brought back to school.",
    "Please ensure that, under no circumstances, any parent boards the bus to discuss any concern. In case any issue is to be discussed, please meet with the school authorities.",
  ];

  return (
    <section className="relative sm:py-16 py-12 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="space-y-4 mb-8 md:mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
              School Bus <span className="text-primary italic">Rules</span>
            </h1>
          </div>

          {/* Bus Rules List */}
          <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
            <ul className="space-y-5 md:space-y-6">
              {busRules.map((rule, index) => (
                <li
                  key={index}
                  className="group relative bg-white rounded-2xl sm:p-6 p-4 shadow-sm border border-zinc-100 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-3 w-2 h-2 rounded-full bg-primary" />
                    <p className="text-lg text-zinc-600 leading-relaxed flex-1">
                      {rule}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
