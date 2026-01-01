export default function SchoolRulesContent() {
  return (
    <section className="relative sm:py-16 py-12 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            School <span className="text-primary italic">Rules</span>
          </h1>
        </div>

        {/* School Rules List */}
        <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto mt-8">
          <ul className="space-y-5 md:space-y-6">
            {[
              "The Student must carry his/her almanac and RFID Card to school everyday. It must have his/her photograph and identification complete and signed by parents.",
              "Parents are requested to wear the I-cards issued by the school, each time they visit School.",
              "Loss of RFID Card and parent ID Card should be reported immediately as it can be misused. Post dated leave requests will not be sanctioned.",
              "Students who come to school with caregivers are not allowed to leave before he/she arrives. In case of delay, they should report at the school reception. Those who go on their own should be prompt in returning straight home.",
              "The students should not take more than TWO consecutive leaves on working days.",
              "Extended leave will not be sanctioned. In case you wish to take more leaves, it will be considered as unsanctioned leaves.",
              "Children, when sick, should not be sent to school to attend classes, Monday tests or exam. This is for strict compliance.",
              "Students who have been sick should bring a medical certificate from their doctor on joining school. A copy of the certificate is required to be submitted in the school.",
              "Once a child has come to school, he/she should not be taken home on half day leave.",
              "If your ward has been absent from school, he/she must make up for all the work missed by him/her.",
              "The school planner has been put in the almanac for your convenience and to help you plan your functions / holidays. All working days are deemed as working days &amp; internal events / functions / Monday test / assessments are subject to shift / change at a day&apos;s notice (in special circumstances) at the discretion of the Management. (Kindly do not request for an NOC for International travels during working days).",
              "Half day / Short leave will not be granted under any circumstances on the weekly test days.",
              "In case a student writes the test and then leaves, he/she will be marked absent for that day.",
              "Students should be polite wherever they go. They should always remember that the school is judged by their conduct. They should greet their teachers when they meet them. They should observe compassionate behaviour towards all the support staff. No misbehaviour should be shown towards peers, teachers or any other employee of the school.",
              "Students should be neatly dressed. The school uniform is to be worn on all working days. Strict action will be taken against students who do not adhere to the uniform norms of the school.",
              "Low waist (skirts/ trousers) are not permitted.",
              "Short skirts (above the knees) are not permitted.",
              "Shirts should be properly tucked in.",
              "Spikes/streaks/fancy hair clips/ fancy haircuts are not permitted.",
              "Boys should get their hair cut at regular intervals.",
              "Hair cut must be conventional and not follow current trends.",
              "The boys in senior classes need to shave at regular intervals.",
              "In case henna has to be put on special occasions, it should be confined to palms only.",
              "Tattoos &amp; extra piercings are not permitted.",
              "Girls should plait their hair if it is below their shoulders. Short hair should be neatly cut and pinned.",
              "Students are not to wear any jewellery to school (e.g. chains, rings, bangles, bracelets etc.) Girls may wear a pair of earrings or studs.",
              "Your ward should be instructed to be careful about his/her belongings. There should be a name tag on blazers and sweaters. Expensive articles like smart watches, MP3 Calculators, pens, smart phones, I-pods, cameras, pen drives, CDs etc. should not be brought to school.",
              "If your ward needs to bring in any of the above mentioned items, they should be deposited with the class teacher for that day. They must not be used in the school premises or in the bus. In case of violation of this rule the article found will be confiscated. The school bears no responsibility for articles lost in school.",
              "All sales in the cafeteria will be through coupons. Excessive spending should be discouraged.",
              "Students are expected to respect the property of others. This includes respect for school property. No student should damage any school furniture, write or draw anything on the walls, furniture or in anyway damage things that belong to others. Damage done, even by accident, should be reported at once to the class teacher or the Director Principal. Any damage done will be made good by the one who causes it.",
              "Children are not allowed to bring sharp objects like scissors, blades, cutters, metal scales etc. to school.",
              "Children should not bring crackers, colours, irritant spray, pepper spray, unauthorized person etc. to the school. These actions are liable to lead to expulsion of a student from the school.",
              "Students must not miss any teaching / games / library / activity periods. Students should not intentionally disturb / disrupt classes.",
              "DPS provides education from Pre Nursery to Class XII. Therefore, it is expected that the juniors be treated with love and affection by the seniors while the juniors show respect to their seniors. Bullying and use of foul language are punishable offences.",
              "Under no circumstances should any eve-teasing / misbehaviour towards girl students take place.",
              "Students should not indulge in acts of moral turpitude.",
            ].map((rule, index) => (
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

            <li className="group relative bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-zinc-100 hover:border-primary/30 hover:shadow-md transition-all duration-300">
              <div className="space-y-4">
                <p className="text-lg font-bold text-zinc-900 mb-2">
                  No student should indulge in any of the following practices:
                </p>
                <ol className="space-y-3 ml-6 list-decimal">
                  <li>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                      Spitting in or near the school building
                    </p>
                  </li>
                  <li>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                      Disfiguring or otherwise damaging any school property
                    </p>
                  </li>
                  <li>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                      Smoking/ Use of Vape
                    </p>
                  </li>
                  <li>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                      Any form of gambling
                    </p>
                  </li>
                  <li>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                      Rowdy and rude behaviour
                    </p>
                  </li>
                  <li>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                      Use of violence in any form
                    </p>
                  </li>
                  <li>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                      Casteism, communalism or practice of untouchability
                    </p>
                  </li>
                  <li>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                      Bullying
                    </p>
                  </li>
                  <li>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                      Use of drugs or intoxicants
                    </p>
                  </li>
                  <li>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                      Buying eatables from vendors outside the school premises
                    </p>
                  </li>
                  <li>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                      Any association with banned organizations
                    </p>
                  </li>
                </ol>
              </div>
            </li>

            {[
              "Students under any circumstances should not drive down to school. Strict action will be taken against the students violating this rule.",
              "Students are expected to maintain discipline while travelling in the school bus. If found misbehaving, the bus facility will be withdrawn with immediate effect.",
              "Students are not allowed to go to friend&apos;s house or anywhere else from school.",
              "Students must not engage in use of abusive language, mental harassment, name calling, cyber bullying, belittling, fighting or engaging themselves in activities that cause embarrassment to their fellow students.",
              "Students should not disrupt the instructions given by the teachers in the classes by way of talking, making noises, laughing or throwing objects.",
              "Students should not tamper with any educational material kept in the lab/classroom/activity room.",
              "Students should not write/scribble anywhere in the washroom.",
              "Display of any kind of closeness with other students by way of walking hand in hand or hugging or putting hand on the shoulders or any part of the body is unacceptable.",
              "Students should not display objectionable/indecent/obscene gestures towards the other fellow students.",
              "Students should not indulge in forgery of any kind.",
              "Parent Teacher Meeting (PTM) will be scheduled on any working Saturday or working day (during or after school hours).",
              "Students of Primary Wing should get their Report Cards signed by their Parents / Guardians within five days of the receipt of the Report Cards and return them to the class teachers. If lost, a fine will be imposed.",
              "Report Card for classes III-XII will be available online. Parents are requested to keep in touch with the school for their ward&apos;s progress. Parents are requested to download the report card and keep a hard copy for future reference.",
              "Result will be available online for a week only. Parents will not be sent any message or reminder for the same",
              "lt is always advisable to write to school about the problems of your ward or for seeking guidance. Your letters will be replied to, after discussion with concerned teacher. In case of parents wanting a discussion with more than one teacher, a meeting will be arranged with the concerned teachers.",
              "Check your ward&apos;s almanac daily. Do acknowledge the remarks if any, and take necessary action.",
              "See that your ward carries books / booklets / workbooks according to the time table for that day. No extra books will be allowed.",
              "Encourage your ward to take interest in studies as well as co-curricular activities and sports to facilitate the holistic development of the child.",
              "Monday Test &amp; Term Papers of previous years are available on the school portal for your reference.",
              "No retests (Monday Test/Practical) will be conducted for a child who has missed a test.",
              "Half day/ Short leave will not be granted under any circumstances on the weekly test days.",
              "In case a student writes the test and then leaves, he/she will be marked absent for that day.",
              "In an emergency, written permission should be taken from the Director Principal.",
              "A child using unfair means is awarded a zero.",
              "The observance of the rules of the school and good behaviour is an essential condition to a student&apos;s continuance in the school. In case a student violates the school rules or indulges in any form of indiscipline, strict action like expulsion/suspension/rustication shall be taken.",
              "Permission to travel in another bus route needs to be sought 3 working days prior to the travel, unless there&apos;s an emergency.",
            ].map((rule, index) => (
              <li
                key={index + 37}
                className="group relative bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-zinc-100 hover:border-primary/30 hover:shadow-md transition-all duration-300"
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
    </section>
  );
}
