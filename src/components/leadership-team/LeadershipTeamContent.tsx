export default function LeadershipTeamContent() {
  const leadershipTeam = [
    { role: "Director Principal", name: "Ms. Aditi Misra" },
    { role: "Dean Student Welfare", name: "Ms. Sapna Dhawan" },
    { role: "Vice Principal (Sector - 45)", name: "Ms. Arpna Gupta" },
    { role: "Offg.Vice Principal (Sector - 40 & 47)", name: "Ms. Rati Chugh" },
    { role: "Dean Academics", name: "Ms. S. Anjum" },
    { role: "Dean Academics", name: "Ms. Harpreet Joshi" },
    { role: "Dean Communication & Publication", name: "Ms. Laveena Hemrajani" },
    { role: "Dean Guidance and Counselling", name: "Ms. Anamika Sethi" },
    { role: "Dean Safety and Discipline", name: "Ms. Suparna Sharma" },
    { role: "Dean Creativity & Design", name: "Ms. Madhumita Nandi" },
    { role: "Offg.Dean Community Outreach", name: "Ms. Sarita Singh" },
    {
      role: "Deputy Dean Student Welfare (Middle and Senior Wings)",
      name: "Ms. Pooja Parwanda, Mr. Divay Dua",
    },
    { role: "Deputy Dean Safety and Discipline", name: "Mr. Paramvir Singh" },
    {
      role: "Deputy Dean Continuous Professional Development (CPD, GSP and Workshops)",
      name: "Ms. Sarabjit Lall",
    },
    { role: "Headmistress (Senior Wing)", name: "Ms. Nishi Dhanjal" },
    { role: "Headmistress (Middle Wing)", name: "Ms. Shaifali Bhatt" },
    { role: "Headmistress (Junior Wing)", name: "Ms. Kanu Chopra" },
    {
      role: "Headmistress (Infant and Prinary Wing)",
      name: "Ms. Shradha Bhatnagar",
    },
    { role: "Senior Mistress (Senior Wing)", name: "Ms. Richa Zalpuri" },
    { role: "Senior Mistress (Middle Wing)", name: "Ms. Rekha Sumed" },
    { role: "Senior Mistress (Junior Wing)", name: "Ms. Rajani Walia" },
    { role: "Senior Mistress (Primary Wing)", name: "Ms. Nidhi Anand" },
    { role: "Senior Mistress (Infant Wing)", name: "Ms. Manjul Sahni" },
    { role: "Academic Consultant", name: "Ms. Rashmi Singh" },
  ];

  return (
    <section className="sm:py-16 py-12" aria-label="Leadership Team">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            Leadership <span className="text-secondary italic">Team</span>
          </h1>
        </div>

        {/* Leadership Team Grid */}
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
          role="list"
          aria-label="Leadership team members list"
        >
          {leadershipTeam.map((member, index) => (
            <li key={index} role="listitem">
              <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 sm:p-6 p-4 hover:shadow-md transition-shadow duration-300 h-full">
                <div className="space-y-2">
                  {/* Member Name */}
                  <h2 className="sm:text-xl text-lg font-semibold text-zinc-900">
                    {member.name}
                  </h2>
                  {/* Member Role */}
                  <p
                    className={`text-lg leading-relaxed ${index % 2 === 0 ? "text-primary" : "text-secondary"
                      }`}
                  >
                    {member.role}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
