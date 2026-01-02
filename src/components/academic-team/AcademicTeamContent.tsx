import type { SeniorLeadershipMember, AcademicCoordinator, Department, CBSEMember } from "@/types/academic-team";

export default function AcademicTeamContent() {
  // Senior Leadership data (exact from old HTML)
  const seniorLeadership: SeniorLeadershipMember[] = [
    { role: "Deputy Dean Student Welfare", name: "Ms. Mamta Kanti Kumar" },
    { role: "Deputy Dean Academics", name: "Ms. Harpreet Joshi" },
    { role: "Senior Mistress (Infant School)", name: "Ms. Manjul Sahni" },
    { role: "Senior Mistress (Primary Wing)", name: "Ms. Mridula Pattanath" },
    { role: "Senior Mistress (Junior School)", name: "Ms. Geetu Khanna" },
    { role: "Senior Mistress (Middle wing)", name: "Ms. Rekha Sumed" },
    { role: "Senior Mistress (Senior Wing)", name: "Ms. Richa Zalpuri" },
  ];

  // Academic Coordinators data (exact from old HTML)
  const academicCoordinators: AcademicCoordinator[] = [
    { name: "Ms. Anju Makhija", classes: "IX - XII" },
    { name: "Ms. Aditi Mathur", classes: "IX - XII" },
    { name: "Ms. Shilpa Agarwal", classes: "VI - VIII" },
    { name: "Ms. Savita Kumari", classes: "VI - VIII" },
    { name: "Ms. Pooja Gupta", classes: "III-V" },
    { name: "Ms. Rajani Walia", classes: "III-V" },
  ];

  // Heads of Departments data (exact from old HTML)
  const departments: Department[] = [
    {
      name: "English",
      members: [
        { role: "HOD", name: "Ms. Rachana Takshak" },
        { role: "Deputy", name: "Ms. Geeta Mehta" },
      ],
    },
    {
      name: "Maths",
      members: [
        { role: "Mentor", name: "Ms. Neeru Aggarwal" },
        { role: "HOD", name: "Mr. Vikram Singh" },
        { role: "Deputy", name: "Ms. Pushpa Yadav" },
      ],
    },
    {
      name: "Hindi",
      members: [
        { role: "Mentor", name: "" },
        { role: "HOD", name: "Ms. Kiran Soni" },
        { role: "Deputy", name: "Ms. Anita Singh" },
      ],
    },
    {
      name: "Sanskrit",
      members: [{ role: "HOD", name: "Mr. Laliteshwar Mishra" }],
    },
    {
      name: "Commerce",
      members: [
        { role: "Mentor", name: "Ms. Rati Chugh" },
        { role: "HOD", name: "Ms. Neha Seth" },
        { role: "Deputy", name: "Ms. R. Madhushree" },
      ],
    },
    {
      name: "History",
      members: [
        { role: "HOD", name: "Ms. Leeza Dutta" },
        { role: "Deputy (History / Civics)", name: "Ms. Ritu Singh" },
      ],
    },
    {
      name: "Geography",
      members: [
        { role: "HOD", name: "Ms. Suparna Sharma" },
        { role: "Deputy", name: "Ms. Ritu Singh" },
      ],
    },
    {
      name: "Political Science",
      members: [{ role: "HOD", name: "Ms. Kanu Chopra" }],
    },
    {
      name: "Chemistry",
      members: [
        { role: "Mentor", name: "Ms. S. Anjum" },
        { role: "HOD", name: "Ms. Ritu Jain" },
      ],
    },
    {
      name: "Physics",
      members: [
        { role: "Mentor", name: "Ms. Harpreet Joshi" },
        { role: "HOD", name: "Ms. Sunita Kandpal" },
      ],
    },
    {
      name: "Biology",
      members: [{ role: "HOD", name: "Ms. Sarita Singh" }],
    },
    {
      name: "General Science",
      members: [{ role: "Deputy", name: "Ms. Suruchi Oberoi" }],
    },
    {
      name: "Physical Education",
      members: [
        { role: "Mentor", name: "Mr. Paramvir Singh" },
        { role: "HOD", name: "Mr. Nariender Tokas" },
        { role: "Deputy", name: "Mr. Ishwar Dass" },
      ],
    },
    {
      name: "Computer",
      members: [
        { role: "HOD", name: "Ms. Swati Panhani" },
        { role: "Deputy", name: "Mr. Amit Kumar Dhingra" },
      ],
    },
    {
      name: "Art",
      members: [
        { role: "Mentor", name: "Ms. Madhumita Nandi" },
        { role: "HOD", name: "Ms. Bhavna Srivastava" },
      ],
    },
    {
      name: "Foreign Language",
      members: [{ role: "HOD", name: "Ms. Anchal Shukla" }],
    },
    {
      name: "German and Spanish",
      members: [{ role: "HOD", name: "Ms. Pooja Parwanda" }],
    },
    {
      name: "French and Japanese",
      members: [{ role: "HOD", name: "Ms. Sarabjit Lall" }],
    },
    {
      name: "Psychology and Counselling",
      members: [{ role: "HOD", name: "Ms. Renuka Fernandes" }],
    },
    {
      name: "Music and Dance",
      members: [
        { role: "Mentor", name: "Mr. Divay Dua" },
        { role: "HOD", name: "Ms. Joyeeta Dua" },
      ],
    },
  ];

  // CBSE Section data (exact from old HTML)
  const cbseCell: CBSEMember[] = [
    { role: "CBSE Cell - Board Exam, City Coordination and External Exams", name: "Ms. R. Madhushree" },
    { role: "", name: "Mr. Paramvir Singh" },
    { role: "", name: "Mr. Nariender Tokas" },
    { role: "", name: "Mr. Ishwar Dass" },
    { role: "", name: "Mr. Vikram Kumar" },
  ];

  const cbseOnlineUploading: CBSEMember[] = [
    { role: "CBSE Online Uploading (Registration / Marks)", name: "" },
    { role: "", name: "Ms. Ruchi Baweja" },
    { role: "", name: "Ms. Swati Panhani" },
    { role: "", name: "Ms. Jyoti Khurana" },
    { role: "", name: "Ms. Shilpa Agarwal" },
  ];

  return (
    <section className="sm:py-16 py-12" aria-label="Academic Team">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            Academic <span className="text-secondary italic">Team 2024-25</span>
          </h1>
        </div>

        {/* Senior Leadership Table */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">Senior Leadership</h2>
          <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" role="table">
                <tbody>
                  {seniorLeadership.map((member, index) => (
                    <tr
                      key={index}
                      className={` transition-colors ${index % 2 === 0 ? "bg-zinc-50" : "bg-white"}`}
                    >
                      <td className="px-6 py-4 text-base text-zinc-700 border border-zinc-200 font-medium">
                        {member.role}
                      </td>
                      <td className="px-6 py-4 text-base text-zinc-900 border border-zinc-200 font-semibold">
                        {member.name}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Academic Coordinators Table */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">Academic Coordinators</h2>
          <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" role="table">
                <thead>
                  <tr className="bg-primary">
                    <th scope="col" className="px-6 py-4 text-sm font-bold tracking-wide uppercase text-white text-left border border-primary">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4 text-sm font-bold tracking-wide uppercase text-white text-left border border-primary">
                      Classes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {academicCoordinators.map((coordinator, index) => (
                    <tr
                      key={index}
                      className={` transition-colors ${index % 2 === 0 ? "bg-zinc-50" : "bg-white"}`}
                    >
                      <td className="px-6 py-4 text-base text-zinc-900 border border-zinc-200 font-semibold">
                        {coordinator.name}
                      </td>
                      <td className="px-6 py-4 text-base text-zinc-700 border border-zinc-200 font-medium">
                        {coordinator.classes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Heads of Departments Table */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">Heads of Departments</h2>
          <div className="w-full bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" role="table">
                <tbody>
                  {departments.map((department, deptIndex) => (
                    <tr
                      key={department.name}
                      className={`transition-colors ${deptIndex !== departments.length - 1 ? "border-b-2 border-zinc-300" : ""}`}
                    >
                      <td className="px-6 py-4 text-base font-bold border-r border-zinc-200 text-zinc-900 bg-gray-50 w-1/4">
                        {department.name}
                      </td>
                      <td className="bg-white">
                        {department.members.length === 0 ? (
                          <span>&nbsp;</span>
                        ) : (
                          <table className="w-full border-collapse">
                            <tbody>
                              {department.members.map((member, memberIndex) => (
                                <tr
                                  key={memberIndex}
                                  className={memberIndex !== department.members.length - 1 ? "border-b-2 border-zinc-300" : ""}
                                >
                                  <td className="px-4 py-4 text-base text-zinc-700 font-medium w-1/3">
                                    {member.role}
                                  </td>
                                  <td className="px-4 py-4 text-base text-zinc-900 font-semibold">
                                    {member.name}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CBSE Section Table */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">CBSE</h2>
          <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" role="table">
                <tbody>
                  <tr>
                    <th
                      colSpan={2}
                      scope="col"
                      className="px-6 py-4 text-base font-bold text-white bg-primary border border-primary text-left"
                    >
                      CBSE Cell - Board Exam, City Coordination and External Exams
                    </th>
                  </tr>
                  {cbseCell.map((member, index) => (
                    <tr
                      key={index}
                      className={` transition-colors ${index % 2 === 0 ? "bg-zinc-50" : "bg-white"}`}
                    >
                      <td className="px-6 py-4 text-base text-zinc-700 border border-zinc-200 font-medium w-1/3">
                        {member.role}
                      </td>
                      <td className="px-6 py-4 text-base text-zinc-900 border border-zinc-200 font-semibold">
                        {member.name}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <th
                      colSpan={2}
                      scope="col"
                      className="px-6 py-4 text-base font-bold text-white bg-primary border border-primary text-left"
                    >
                      CBSE Online Uploading (Registration / Marks)
                    </th>
                  </tr>
                  {cbseOnlineUploading.map((member, index) => (
                    <tr
                      key={index}
                      className={` transition-colors ${index % 2 === 0 ? "bg-zinc-50" : "bg-white"}`}
                    >
                      <td className="px-6 py-4 text-base text-zinc-700 border border-zinc-200 font-medium w-1/3">
                        {member.role}
                      </td>
                      <td className="px-6 py-4 text-base text-zinc-900 border border-zinc-200 font-semibold">
                        {member.name}
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
