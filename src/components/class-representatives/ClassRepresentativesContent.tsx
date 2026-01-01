import React from "react";

interface ClassRepresentative {
  class: string;
  representatives: string[];
}

export default function ClassRepresentativesContent() {
  const classRepresentatives: ClassRepresentative[] = [
    { class: "Pre-Nursery", representatives: ["Ms. Renuka Tiku"] },
    { class: "Nursery", representatives: ["Ms. Arti Hoon", "Ms. Timsy Sharma"] },
    { class: "Prep", representatives: ["Ms. Remadevi Nair", "Ms. Aarti Jauhar"] },
    { class: "I", representatives: ["Ms. Ashu Mehta", "Ms. Shilpi Tandon"] },
    { class: "II", representatives: ["Ms. Mimi Munshi", "Ms. Saswati Sen"] },
    { class: "III", representatives: ["Ms. Rashmi Kochar", "Ms. Chhavi Mehta"] },
    { class: "IV", representatives: ["Ms. Manisha Gupta", "Ms. Kavita Guha"] },
    { class: "V", representatives: ["Ms. Deepa Mathur", "Ms. Richa Kapoor"] },
    { class: "VI", representatives: ["Ms. Anita Bami", "Ms. Ritika Raj"] },
    { class: "VII", representatives: ["Ms. Ekta Dhand", "Ms. Nitika Sharma"] },
    { class: "VIII", representatives: ["Ms. Kavita Patwal", "Ms. Pooja Sharma"] },
    { class: "IX", representatives: ["Ms. Rajendrani Mukherjee", "Ms. Nidhi Keswani", "Ms. Gunjan Jalodia"] },
    { class: "X", representatives: ["Ms. Kavita Tiwari", "Ms. Sapna Gupta", "Ms. Shashi Prabha Mishra"] },
    { class: "XI", representatives: ["Ms. Shikha Bhardwaj", "Ms. Avni Mehta", "Ms. Manju Lata Dwivedi"] },
    { class: "XII", representatives: ["Ms. Sangeeta Luthra", "Ms. Rekha Yadav", "Ms. Pooja Madan"] },
  ];

  return (
    <section className="sm:py-16 py-12" aria-label="Class Representatives">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            Class <span className="text-primary italic">Representatives 2024-25</span>
          </h1>
        </div>

        <div className="mt-12">
          <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" role="table">
                <thead>
                  <tr className="bg-primary">
                    <th scope="col" className="px-6 py-4 text-sm font-bold tracking-wide uppercase text-white text-left border border-primary">
                      Class
                    </th>
                    <th scope="col" className="px-6 py-4 text-sm font-bold tracking-wide uppercase text-white text-left border border-primary">
                      Class Representatives
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {classRepresentatives.map((item) => (
                    <React.Fragment key={item.class}>
                      {item.representatives.map((representative, repIndex) => (
                        <tr
                          key={`${item.class}-${repIndex}`}
                          className={`transition-colors ${repIndex === 0 ? "bg-zinc-50" : "bg-white"}`}
                        >
                          {repIndex === 0 && (
                            <td
                              className="px-6 py-4 text-base text-zinc-700 border border-zinc-200 font-medium align-top"
                              rowSpan={item.representatives.length}
                            >
                              {item.class}
                            </td>
                          )}
                          <td className="px-6 py-4 text-base text-zinc-900 border border-zinc-200 font-semibold">
                            {representative}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
