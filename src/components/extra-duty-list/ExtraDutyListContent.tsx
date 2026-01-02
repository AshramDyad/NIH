// TypeScript type definitions for Extra Duty List (declared inline)
interface ExtraDutyItem {
  readonly role: string;
  readonly names: readonly string[];
}

export default function ExtraDutyListContent() {
  // Combine all extra duty data into a single array
  const allDuties: ExtraDutyItem[] = [
    // Time Table
    { role: "Time Table Allotment (Sec-45) Time Table Substitution (Senior / Middle)", names: ["Ms. Sarita Singh", "Ms. Rajni Dhawan", "Ms. Sudha Aswal"] },
    { role: "Time Table (Junior) Sector-45 Sector-47", names: ["Ms. Deepti Tuli", "Ms. Deepti Bhatia", "Ms. Chavi Mehta"] },

    // Portal Result
    { role: "Portal Result (III - V)", names: ["Ms. Mona Sharma"] },
    { role: "Portal Result (VI - XII)", names: ["Ms. Swati Panhani", "Ms. Jyoti Khurana", "Ms. Shilpa Agarwal"] },

    // Transport
    { role: "Transport - Senior Routes (Sector - 45)", names: ["Mr. Paramvir Singh", "Mr. Kamal Singh Mehta", "Mr. Mahender Singh"] },
    { role: "Transport - Junior Routes (Sector - 47)", names: ["Ms. Anita Rangi", "Mr. Balbeer Singh"] },
    { role: "Transport - Infant Routes (Sector - 40)", names: ["Mr. Balbeer Singh"] },

    // HPE Coordinator
    { role: "HPE Coordinator - XII", names: ["Mr. Kamal Singh Mehta"] },
    { role: "HPE Coordinator - XI", names: ["Ms. Reena Sonkar"] },
    { role: "HPE Coordinator - X", names: ["Mr. Ishwar Dass"] },
    { role: "HPE Coordinator - IX", names: ["Mr. Pardeep Kumar"] },

    // School Ambience
    { role: "School Ambience - Overall Incharge", names: ["Ms. Bhavna Srivastava"] },
    { role: "School Ambience - A Block", names: ["Mr. Susanta Chatterjee"] },
    { role: "School Ambience - B Block", names: ["Ms. Meenu Sharma"] },
    { role: "School Ambience - C Block", names: ["Ms. Rupina Anand"] },

    // Exchange Programmes
    { role: "Exchange Programmes - German", names: ["Ms. Pooja Parwanda"] },
    { role: "Exchange Programmes - French", names: ["Ms. Sarabjit Lall"] },
    { role: "Exchange Programmes - Polish", names: ["Ms. Mamta Kanti Kumar"] },
    { role: "Exchange Programmes - Danish", names: ["Ms. Rati Chugh"] },
    { role: "Exchange Programmes - Microsoft Engagement", names: ["Ms. Ruchi Baweja", "Ms. Swati Panhani"] },

    // Other Duties
    { role: "Canteen Committee", names: ["Ms. Joyeeta Dua", "Mr. Ishwar Dass", "Ms. Malini Chaturvedi"] },
    { role: "Team Shiksha Kendra Activities", names: ["Ms. Anita Bami", "Ms. Neelam Sharma", "Ms. Shweta Maharishi"] },
    { role: "Olympiad / SMTE etc.", names: ["Ms. Rina Bhardwaj", "Ms. Neetika Nanda", "Ms. Reecha Sharma"] },
    { role: "Social Media Coordination & Content Writing", names: ["Ms. Archana Khera", "Ms. Monisha Ahluwalia"] },
    { role: "Social Media (Junior)", names: ["Ms. Dhara Seth Bhatnagar", "Ms. Pavittarjit Kaur"] },
    { role: "Theatre / Street Play", names: ["Ms. Neelam Sharma", "Ms. Ritu Manocha"] },
    { role: "Record Keeping (Photographs / Newspaper Cuttings)", names: ["Ms. Alpana Gaur"] },

    // School Portal
    { role: "School Portal - Infant", names: ["Reps"] },
    { role: "School Portal - Primary", names: ["Ms. Niti Duggal"] },
    { role: "School Portal - Junior", names: ["Ms. Pavittarjit Kaur"] },
    { role: "School Portal - Senior and Middle", names: ["Ms. Monisha Ahluwalia"] },

    // More Duties
    { role: "Alumni Cell", names: ["Ms. Richa Zalpuri", "Ms. Neha Seth"] },
    { role: "Teacher's Resource Centre", names: ["Ms. Vibhuti Pragya"] },
    { role: "Webzine and School Live Magazine", names: ["Ms. Snehal Bhatia", "Ms. R.Helen Williams", "Ms. Sudeepta Dhar"] },

    // Trips and Tours
    { role: "Trips and Tours (Senior and Middle Wing)", names: ["Ms. Anu Mathur", "Ms. Shreya Majumder"] },
    { role: "Trips and Tours - Junior", names: ["Ms. Alka Manglik", "Ms. Kanika Sachdeva"] },

    // Buddy Reading
    { role: "Buddy Reading Programme", names: ["Reps"] },

    // Assembly, Inter House Activities and Guest Speaker Programme
    { role: "Assembly (I - III)", names: ["Ms. Shilpi Tandon"] },
    { role: "Guest Speaker Programme", names: ["Ms. Pratibha Singh"] },
    { role: "Assembly (III-V)", names: ["Ms. Radhika Karnik", "Ms. Vidhu Bhatia"] },
    { role: "Inter House Activities and Assembly (Sector-45) (Sector - 47)", names: ["Ms. Gayatri Yadav", "Ms. Diksha Munjal", "Ms. Brinda Basnotra", "Ms. Tanvi Baveja"] },
    { role: "Assembly (VI - VIII)", names: ["Ms. Sugandhi Aggarwal"] },
    { role: "Assembly (IX - XII)", names: ["Ms. Ritu Singh (XI-XII)", "Ms. Shilpy (IX-X)", "Ms. Kavita Tewari (GSP-XI)", "Ms. Swati Panhani (GSP-XI)"] },
    { role: "Guest Speaker Programme (Senior)", names: ["Reps"] },

    // Activity Incharges
    { role: "Activity Incharges (VI - VIII)", names: ["Ms. Anu Agnihotri", "Ms. Manasi Bhalla"] },
    { role: "Activity Incharges (IX - XII)", names: ["Ms. Shilpy", "Ms. Bindu Pramod"] },

    // Staff Room Incharges
    { role: "Staff Room Incharges - Junior (Sector-47) (Sector-45)", names: ["Ms. Seema Arora", "Ms. Sangeeta Kain"] },
    { role: "Staff Room Incharges - Middle", names: ["Ms. Sugandhi Aggarwal"] },
    { role: "Staff Room Incharges - Senior (A block Second Floor)", names: ["Ms. Divya Agarwal"] },
    { role: "Staff Room Incharges - Senior (A block Ground Floor)", names: ["Ms. Asha Sharma"] },

    // School Magazine
    { role: "School Magazine (Primary)", names: ["Ms. Niti Duggal", "Ms. Nidhi Anand"] },
    { role: "School Magazine (Junior)", names: ["Ms. Archana Malik", "Ms. Neha Staish Karan"] },
    { role: "School Magazine (Senior & Middle)", names: ["Ms. Jenia Chattopadhyay", "Ms. Neeru Gill"] },
  ];

  return (
    <section className="sm:py-16 py-12" aria-label="Extra Duty List">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            Extra Duty <span className="text-primary italic">List</span>
          </h1>
        </div>

        {/* Single Unified Table */}
        <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden mt-8">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" role="table">
              <thead>
                <tr className="bg-primary">
                  <th scope="col" className="px-6 py-4 text-sm font-bold tracking-wide uppercase text-white text-left border border-primary">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-4 text-sm font-bold tracking-wide uppercase text-white text-left border border-primary">
                    Names
                  </th>
                </tr>
              </thead>
              <tbody>
                {allDuties.map((item, index) => (
                  <tr
                    key={`${item.role}-${index}`}
                    className={`transition-colors ${index % 2 === 0 ? "bg-zinc-50" : "bg-white"}`}
                  >
                    <td className="px-6 py-4 text-base text-zinc-700 border border-zinc-200 font-medium">
                      {item.role}
                    </td>
                    <td className="px-6 py-4 text-base text-zinc-900 border border-zinc-200 font-semibold">
                      {item.names.map((name, nameIndex) => (
                        <p key={nameIndex} className="mb-2 last:mb-0">
                          {name}
                        </p>
                      ))}
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
