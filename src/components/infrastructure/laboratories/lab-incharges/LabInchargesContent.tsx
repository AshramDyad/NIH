"use client"

export default function LabInchargesContent() {
  // Lab Incharges data (exact from old HTML)
  const labIncharges = [
    // Chemistry Labs
    { labName: "Chemistry", personName: "Ms. Sushma Ahlawat", rowspan: 2 },
    { labName: "", personName: "Ms. Shuchi Gupta" },
    // Physics Labs
    { labName: "Physics", personName: "Ms. Chandni Kumari", rowspan: 2 },
    { labName: "", personName: "Ms. Anny Kalra" },
    // Biology
    { labName: "Biology", personName: "Ms. Sangeeta Luthra" },
    // Atal Tinkering Lab
    { labName: "Atal Tinkering Lab", personName: "Ms. Sonu Khandelwal" },
    // I Discovery Lab - Section Header
    { labName: "I Discovery Lab", personName: "", isHeader: true, colspan: 2 },
    { labName: "Infant", personName: "Ms. Timsy Sharma" },
    { labName: "Primary", personName: "Ms. Anita Rangi" },
    // Discovery Lab - Section Header
    { labName: "Discovery Lab", personName: "", isHeader: true, colspan: 2 },
    { labName: "Junior", personName: "Ms. Deepti Sharma" },
    { labName: "Middle", personName: "Ms. Vanita Dhawan" },
    // Language Lab - Section Header
    { labName: "Language Lab", personName: "", isHeader: true, colspan: 2 },
    { labName: "Infant", personName: "Reps" },
    { labName: "(Primary) Words A - Maze", personName: "Ms. Nidhi Anand" },
    { labName: "(Primary) Language Avenues", personName: "Ms. Poonam Jain" },
    { labName: "Language Room", personName: "Ms. Divya Sethi" },
    // Fashion Technology
    { labName: "Fashion Technology", personName: "Ms. Navpreet Kaur" },
    // Computer Labs
    { labName: "Computer Lab (Senior)", personName: "Ms. Swati Panhani" },
    { labName: "(C Block - Ground Floor)", personName: "Ms. Kanika Sachdeva" },
    { labName: "(B Block - Second Floor) (1)", personName: "Ms. Nidhi Arora" },
    { labName: "(B Block - Second Floor) (2)", personName: "Ms. Nidhi Arora" },
    { labName: "Computer Lab( Sector-47) First Floor", personName: "Ms. Abha Wadhwa" },
    { labName: "Second Floor(Sector - 47)", personName: "Ms. Anshu Girdhani" },
    { labName: "Third Floor", personName: "Ms. Jyoti Batra" },
    { labName: "(Infant)", personName: "Reps" },
    // Maths Labs
    { labName: "Maths Lab (Primary)", personName: "Ms. Bhavna Jain" },
    { labName: "Maths Lab (Senior/ Middle)", personName: "Ms. Poonam Khurana" },
    // Gymnasium
    { labName: "Gymnasium", personName: "Mr. Deepak Gulia" },
    // Libraries
    { labName: "Library (Senior)", personName: "Ms. Charu ahuja" },
    { labName: "(Middle)", personName: "Ms. Namita Kumari" },
    { labName: "(Junior)(Sector - 45)", personName: "Ms. Alpana Gaur" },
    { labName: "(Sector - 47)", personName: "Ms. Sheetal Malhotra" },
    // Activity Rooms
    { labName: "Activity Room (Primary)", personName: "Ms. Teena Kaushal" },
    { labName: "(Infant)", personName: "Ms. Aarti Hoon" },
    { labName: "Rainbow Room (Sector-47)", personName: "Ms. Amanat Gill" },
    { labName: "Helping Hands (Sector-40)", personName: "Ms. Kanika Dua" },
    // Evacuation Drill
    { labName: "Evacuation Drill (Sector-40/47)", personName: "Mr. Balbeer Singh", rowspan: 2 },
    { labName: "", personName: "Reps" },
    // Outreach Programme
    { labName: "Caring for the Underprivileged (Outreach Programme)", personName: "Reps" },
    // Smart Class I/C - Section Header with empty row
    { labName: "Smart Class I/C", personName: "", isHeader: true, colspan: 2 },
    { labName: "(Senior)", personName: "Ms. Jagriti Pahuja" },
    { labName: "(Middle)", personName: "Ms. Priyanka Kochgaway" },
    { labName: "(Junior) (Sector - 45)", personName: "Mr. Sagar Pant" },
    { labName: "(Junior) (Sector - 47)", personName: "Ms. Shalini Goel" },
    // Arts
    { labName: "Fine Arts", personName: "Mr. Sushanta Chatterjee" },
    { labName: "Art Room", personName: "Mr. Suresh Lal" },
    { labName: "Music Rooms", personName: "Mr. Eliah T. Panmei" },
    { labName: "Dance Rooms", personName: "Ms. Baishali Sarkar" },
  ];

  return (
    <section className="sm:py-16 py-12" aria-label="Lab Incharges">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            Lab <span className="text-secondary italic">Incharges</span>
          </h1>
        </div>

        {/* Table */}
        <div className="mt-8">
          <div className="w-full bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" role="table">
                <tbody>
                  {labIncharges.map((lab, index) => {
                    // Section Header Row
                    if (lab.isHeader) {
                      return (
                        <tr
                          key={index}
                          className="transition-colors bg-primary"
                        >
                          <th
                            colSpan={lab.colspan}
                            scope="col"
                            className="px-6 py-4 text-base font-bold text-white border border-primary text-left"
                          >
                            {lab.labName}
                          </th>
                        </tr>
                      );
                    }

                    // Regular Row
                    return (
                      <tr
                        key={index}
                        className={`transition-colors `}
                      >
                        {lab.labName === "" && lab.personName !== "" ? (
                          // Second cell only (for rowspan follow-up rows)
                          <td className="px-6 py-4 text-base text-zinc-900 border border-zinc-200 font-semibold">
                            {lab.personName}
                          </td>
                        ) : lab.rowspan && lab.rowspan > 1 ? (
                          // Rowspan cell
                          <>
                            <td
                              rowSpan={lab.rowspan}
                              className="px-6 py-4 text-base text-zinc-700 border border-zinc-200 font-medium w-1/3 bg-gray-50"
                            >
                              {lab.labName}
                            </td>
                            <td className="px-6 py-4 text-base text-zinc-900 border border-zinc-200 font-semibold">
                              {lab.personName}
                            </td>
                          </>
                        ) : (
                          // Regular cell
                          <>
                            <td className="px-6 py-4 text-base text-zinc-700 border border-zinc-200 font-medium w-1/3 bg-gray-50">
                              {lab.labName}
                            </td>
                            <td className="px-6 py-4 text-base text-zinc-900 border border-zinc-200 font-semibold">
                              {lab.personName}
                            </td>
                          </>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
