import type { CoordinatorItem, SubjectCoordinator, DispersalItem } from "@/types/coordinators";

export default function CoordinatorsContent() {
  // Coordinators data (exact from old HTML)
  const coordinatorsJunior: CoordinatorItem = {
    role: "Functions/Activities",
    coordinators: ["Ms. Divya Batra", "Ms. Dhara Seth Bhatnagar", "Reps"],
  };

  const floorCoordinator: CoordinatorItem = {
    role: "Floor Coordinator (Sector - 47)",
    coordinators: ["Ms. Manisha Gupta"],
  };

  const coordinatorsSeniorMiddle: CoordinatorItem = {
    role: "Functions (Senior/Middle)",
    coordinators: ["Ms. Pooja Parwanda", "Mr. Divay Dua", "Ms. Muskan Goyal", "Ms. Rachna Takshak"],
  };

  // Subject Coordinators data (exact from old HTML)
  const subjectCoordinatorsJunior: SubjectCoordinator[] = [
    { subject: "English", coordinator: "Ms. Archana Malik" },
    { subject: "Hindi", coordinator: "Ms. Deepti Tuli" },
    { subject: "Maths", coordinator: "Ms. Deepti Bhatia" },
    { subject: "General Science", coordinator: "Ms. Deepti Karkra" },
    { subject: "S.St", coordinator: "Ms. Alka Manglik" },
    { subject: "Computer", coordinator: "Ms. Pavittarjit Kaur" },
    { subject: "Third Language", coordinator: "Ms. Anuja Jain" },
  ];

  // Dispersal data (exact from old HTML)
  const dispersalData: DispersalItem[] = [
    { level: "(Junior)", coordinator: "Ms. Vidhu Bhatia" },
    { level: "(Middle)", coordinator: "Reps" },
  ];

  return (
    <section className="sm:py-16 py-12" aria-label="Co-ordinators">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            Co-ordinators <span className="text-secondary italic">2024-25</span>
          </h1>
        </div>

        {/* Coordinators (Junior) Table */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            Coordinators (Junior)
          </h2>
          <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" role="table">
                <thead>
                  <tr className="bg-primary">
                    <th scope="col" className="px-6 py-4 text-sm font-bold tracking-wide uppercase text-white text-left border border-primary">
                      Role
                    </th>
                    <th scope="col" className="px-6 py-4 text-sm font-bold tracking-wide uppercase text-white text-left border border-primary">
                      Coordinators
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Floor Coordinator */}
                  <tr className="bg-zinc-50 transition-colors">
                    <td className="px-6 py-4 text-base text-zinc-700 border border-zinc-200 font-medium">
                      {floorCoordinator.role}
                    </td>
                    <td className="px-6 py-4 text-base text-zinc-900 border border-zinc-200 font-semibold">
                      {floorCoordinator.coordinators.map((name, index) => (
                        <p key={index} className="mb-1">
                          {name}
                        </p>
                      ))}
                    </td>
                  </tr>
                  {/* Functions/Activities */}
                  <tr className="bg-white transition-colors">
                    <td className="px-6 py-4 text-base text-zinc-700 border border-zinc-200 font-medium">
                      {coordinatorsJunior.role}
                    </td>
                    <td className="px-6 py-4 text-base text-zinc-900 border border-zinc-200 font-semibold">
                      {coordinatorsJunior.coordinators.slice(0, -1).map((name, index) => (
                        <p key={index} className="mb-1">
                          {name}
                        </p>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Coordinators (Senior/Middle) Table */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            Coordinators (Senior/Middle)
          </h2>
          <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" role="table">
                <thead>
                  <tr className="bg-primary">
                    <th scope="col" className="px-6 py-4 text-sm font-bold tracking-wide uppercase text-white text-left border border-primary">
                      Role
                    </th>
                    <th scope="col" className="px-6 py-4 text-sm font-bold tracking-wide uppercase text-white text-left border border-primary">
                      Coordinators
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-zinc-50 transition-colors">
                    <td className="px-6 py-4 text-base text-zinc-700 border border-zinc-200 font-medium">
                      {coordinatorsSeniorMiddle.role}
                    </td>
                    <td className="px-6 py-4 text-base text-zinc-900 border border-zinc-200 font-semibold">
                      {coordinatorsSeniorMiddle.coordinators.map((name, index) => (
                        <p key={index} className="mb-1">
                          {name}
                        </p>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Subject Coordinators Table */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            Subject Coordinators
          </h2>
          <h3 className="text-xl font-bold text-zinc-800 mb-4">Junior Wing</h3>
          <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" role="table">
                <thead>
                  <tr className="bg-primary">
                    <th scope="col" className="px-6 py-4 text-sm font-bold tracking-wide uppercase text-white text-left border border-primary">
                      Subject
                    </th>
                    <th scope="col" className="px-6 py-4 text-sm font-bold tracking-wide uppercase text-white text-left border border-primary">
                      Coordinator
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {subjectCoordinatorsJunior.map((item, index) => (
                    <tr
                      key={item.subject}
                      className={`transition-colors ${index % 2 === 0 ? "bg-zinc-50" : "bg-white"}`}
                    >
                      <td className="px-6 py-4 text-base text-zinc-700 border border-zinc-200 font-medium">
                        {item.subject}
                      </td>
                      <td className="px-6 py-4 text-base text-zinc-900 border border-zinc-200 font-semibold">
                        {item.coordinator}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Dispersal Table */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            Dispersal
          </h2>
          <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" role="table">
                <thead>
                  <tr className="bg-primary">
                    <th scope="col" className="px-6 py-4 text-sm font-bold tracking-wide uppercase text-white text-left border border-primary">
                      Level
                    </th>
                    <th scope="col" className="px-6 py-4 text-sm font-bold tracking-wide uppercase text-white text-left border border-primary">
                      Coordinator
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dispersalData.map((item, index) => (
                    <tr
                      key={`${item.level}-${index}`}
                      className={`transition-colors ${index % 2 === 0 ? "bg-zinc-50" : "bg-white"}`}
                    >
                      <td className="px-6 py-4 text-base text-zinc-700 border border-zinc-200 font-medium">
                        {item.level}
                      </td>
                      <td className="px-6 py-4 text-base text-zinc-900 border border-zinc-200 font-semibold">
                        {item.coordinator}
                      </td>
                    </tr>
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
