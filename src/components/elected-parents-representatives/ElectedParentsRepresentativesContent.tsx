import React from "react";

interface ParentRepresentative {
  name: string;
  email: string;
}

interface ClassParentReps {
  class: string;
  representatives: ParentRepresentative[];
}

export default function ElectedParentsRepresentativesContent() {
  const parentRepsByClass: ClassParentReps[] = [
    {
      class: "Nur",
      representatives: [
        { name: "Mr. Piyush Upmanyu", email: "upmanyu.piyush@gmail.com" },
        { name: "Ms. Aashima Nagar", email: "malhotraaashima.0105@gmail.com" },
      ],
    },
    {
      class: "Prep",
      representatives: [
        { name: "Ms. Twisha Guha", email: "twisha0439@yahoo.com" },
        { name: "Mr. Pranav Shokeen", email: "pranavv077@gmail.com" },
      ],
    },
    {
      class: "I",
      representatives: [
        { name: "Mr. Abhishiekh Andlay", email: "aandlay@gmail.com" },
        { name: "Ms. Priyanka Singh", email: "priyanka.kohal@gmail.com" },
      ],
    },
    {
      class: "II",
      representatives: [
        { name: "Ms. Medha Chopra", email: "medhamagoo@gmail.com" },
        { name: "Mr. Girish C. Gupta", email: "girishcgupta@yahoo.co.in" },
      ],
    },
    {
      class: "III",
      representatives: [
        { name: "Ms. Charu Agarwal", email: "charu.agarwal2501@gmail.com" },
        { name: "Ms. Tripti Tandon", email: "triptimisra0815@gmail.com" },
      ],
    },
    {
      class: "IV",
      representatives: [
        { name: "Ms. Swagata Aeron", email: "swdasgupta@gmail.com" },
        { name: "Mr. Abhimanyu Sood", email: "soodmanyu@gmail.com" },
      ],
    },
    {
      class: "V",
      representatives: [
        { name: "Ms. Nidhi Arora Dhingra", email: "nidhiarora4@gmail.com" },
        { name: "Dr. Gaurav Kapoor", email: "dr_gauravkapoor9@yahoo.com" },
      ],
    },
    {
      class: "VI",
      representatives: [
        { name: "Mr. Nipun Marya", email: "nipunmarya@gmail.com" },
        { name: "Ms. Isha Gupta", email: "isha9gu@gmail.com" },
      ],
    },
    {
      class: "VII",
      representatives: [
        { name: "Dr. Vinita Malik", email: "dr.vinita.malik@gmail.com" },
        { name: "Mr. Vaibhav Suri", email: "vabsuri@gmail.com" },
      ],
    },
    {
      class: "VIII",
      representatives: [
        { name: "Mr. Sachin Chugh", email: "sachin@sckonline.net" },
        { name: "Ms. Nidhi Vasishta", email: "nidhi.vasishta@gmail.com" },
      ],
    },
    {
      class: "IX",
      representatives: [
        { name: "Ms. Neha Jain", email: "nehajain1384@gmail.com" },
        { name: "Ms. Vibha Singh", email: "svibha2@gmail.com" },
      ],
    },
    {
      class: "X",
      representatives: [
        { name: "Mr. Ritesh Zalpuri", email: "ritesh1380@gmail.com" },
        { name: "Ms. Priyanka Kathuria", email: "priyanka.kathuria@yahoo.com" },
      ],
    },
    {
      class: "XI",
      representatives: [
        { name: "Ms. Aditi Govil", email: "aditigovil1983@gmail.com" },
      ],
    },
    {
      class: "XII",
      representatives: [
        { name: "Ms. Roohi Trehan Thakur", email: "roohi.trehan@gmail.com" },
        { name: "Ms. Aditi Mehtani", email: "aditi.mehtani@gmail.com" },
      ],
    },
  ];

  return (
    <section className="sm:py-16 py-12" aria-label="Elected Parent Representatives">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            <span className="text-secondary italic">Elected</span> Parent
          </h1>
          <p className="text-xl text-zinc-600">
            Representatives 2025-2026
          </p>
        </div>

        <div className="mt-8">
          <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" role="table">
                <thead>
                  <tr className="bg-primary">
                    <th scope="col" className="px-6 py-4 text-sm font-bold tracking-wide uppercase text-white text-left border border-primary">
                      Class
                    </th>
                    <th scope="col" className="px-6 py-4 text-sm font-bold tracking-wide uppercase text-white text-left border border-primary">
                      Name of Parent Rep
                    </th>
                    <th scope="col" className="px-6 py-4 text-sm font-bold tracking-wide uppercase text-white text-left border border-primary">
                      Email Id
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {parentRepsByClass.map((item) => (
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
                            {representative.name}
                          </td>
                          <td className="px-6 py-4 border border-zinc-200">
                            <a
                              href={`mailto:${representative.email}`}
                              className="text-base text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
                            >
                              {representative.email}
                            </a>
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
