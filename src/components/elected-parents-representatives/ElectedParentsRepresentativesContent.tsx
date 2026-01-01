export default function ElectedParentsRepresentativesContent() {
  const parentRepresentatives = [
    { className: "Nur", name: "Mr. Piyush Upmanyu", email: "upmanyu.piyush@gmail.com" },
    { className: "Nur", name: "Ms. Aashima Nagar", email: "malhotraaashima.0105@gmail.com" },
    { className: "Prep", name: "Ms. Twisha Guha", email: "twisha0439@yahoo.com" },
    { className: "Prep", name: "Mr. Pranav Shokeen", email: "pranavv077@gmail.com" },
    { className: "I", name: "Mr. Abhishiekh Andlay", email: "aandlay@gmail.com" },
    { className: "I", name: "Ms. Priyanka Singh", email: "priyanka.kohal@gmail.com" },
    { className: "II", name: "Ms. Medha Chopra", email: "medhamagoo@gmail.com" },
    { className: "II", name: "Mr. Girish C. Gupta", email: "girishcgupta@yahoo.co.in" },
    { className: "III", name: "Ms. Charu Agarwal", email: "charu.agarwal2501@gmail.com" },
    { className: "III", name: "Ms. Tripti Tandon", email: "triptimisra0815@gmail.com" },
    { className: "IV", name: "Ms. Swagata Aeron", email: "swdasgupta@gmail.com" },
    { className: "IV", name: "Mr. Abhimanyu Sood", email: "soodmanyu@gmail.com" },
    { className: "V", name: "Ms. Nidhi Arora Dhingra", email: "nidhiarora4@gmail.com" },
    { className: "V", name: "Dr. Gaurav Kapoor", email: "dr_gauravkapoor9@yahoo.com" },
    { className: "VI", name: "Mr. Nipun Marya", email: "nipunmarya@gmail.com" },
    { className: "VI", name: "Ms. Isha Gupta", email: "isha9gu@gmail.com" },
    { className: "VII", name: "Dr. Vinita Malik", email: "dr.vinita.malik@gmail.com" },
    { className: "VII", name: "Mr. Vaibhav Suri", email: "vabsuri@gmail.com" },
    { className: "VIII", name: "Mr. Sachin Chugh", email: "sachin@sckonline.net" },
    { className: "VIII", name: "Ms. Nidhi Vasishta", email: "nidhi.vasishta@gmail.com" },
    { className: "IX", name: "Ms. Neha Jain", email: "nehajain1384@gmail.com" },
    { className: "IX", name: "Ms. Vibha Singh", email: "svibha2@gmail.com" },
    { className: "X", name: "Mr. Ritesh Zalpuri", email: "ritesh1380@gmail.com" },
    { className: "X", name: "Ms. Priyanka Kathuria", email: "priyanka.kathuria@yahoo.com" },
    { className: "XI", name: "Ms. Aditi Govil", email: "aditigovil1983@gmail.com" },
    { className: "XII", name: "Ms. Roohi Trehan Thakur", email: "roohi.trehan@gmail.com" },
    { className: "XII", name: "Ms. Aditi Mehtani", email: "aditi.mehtani@gmail.com" },
  ];

  return (
    <section className="relative sm:py-16 py-12 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center sm:space-y-2">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            Elected <span className="text-secondary italic">Parent</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-zinc-600">
            Representatives 2025-2026
          </p>
        </div>

        {/* Parent Representatives Table */}
        <div className="max-w-6xl mx-auto bg-white mt-8 rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary/5 border-b-2 border-primary/20">
                  <th className="px-6 py-4 text-left text-lg font-bold text-zinc-900">
                    Class
                  </th>
                  <th className="px-6 py-4 text-left text-lg font-bold text-zinc-900">
                    Name of Parent Rep
                  </th>
                  <th className="px-6 py-4 text-left text-lg font-bold text-zinc-900">
                    Email Id
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {parentRepresentatives.map((representative, index) => (
                  <tr
                    key={index}
                    className="group hover:bg-primary/5 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-lg font-semibold text-zinc-700 whitespace-nowrap">
                      {representative.className}
                    </td>
                    <td className="px-6 py-4 text-lg text-zinc-600 whitespace-nowrap">
                      {representative.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a
                        href={`mailto:${representative.email}`}
                        className="text-lg text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
                      >
                        {representative.email}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
