// Type definitions (inline, no separate types file)
interface HallOfFameEntry {
  year: string;
  humanities: string;
  science: string;
  commerce: string;
}

export default function HallOfFameContent() {
  // Hall of Fame data (exact from old HTML)
  const hallOfFameData: HallOfFameEntry[] = [
    {
      year: "2006 - 07",
      humanities: "Tanya Khanduri",
      science: "Samarth Goel",
      commerce: "Akanksha Saxena",
    },
    {
      year: "2007 - 08",
      humanities: "Nikita Suri",
      science: "Shahzaib Ahmed",
      commerce: "Shradha Puri",
    },
    {
      year: "2008 - 09",
      humanities: "Parichita Keshub",
      science: "Ashish Jain",
      commerce: "Saumya Wadhwa",
    },
    {
      year: "2009 - 10",
      humanities: "Nishtha Vashistha",
      science: "Surabhi Batra",
      commerce: "Abhishek Batra",
    },
    {
      year: "2010 - 11",
      humanities: "Sameer Bindra",
      science: "Shobhna Jha",
      commerce: "Samiksha Garg<br />Aditya Aggarwal",
    },
    {
      year: "2011 - 12",
      humanities: "Grusha Dhawan",
      science: "Bhawna Parmar",
      commerce: "Sambhavi Dhingra<br />Tanay Chawla",
    },
    {
      year: "2012 - 13",
      humanities: "Kadambari Bahl",
      science: "Sagarika Mukesh Jaiswal",
      commerce: "Disha Sachdeva",
    },
    {
      year: "2013 - 14",
      humanities: "Anandita Thakur<br />Kopal Raje",
      science: "Debangshu Haldar",
      commerce: "Cearet Sood",
    },
    {
      year: "2014 - 15",
      humanities: "Hunar Kular",
      science: "Namrata Agarwal",
      commerce: "Ayushee Thukral",
    },
    {
      year: "2015 - 16",
      humanities: "Shivangi Amba",
      science: "Pragya Prakash",
      commerce: "Manushi Kumar",
    },
    {
      year: "2016 - 17",
      humanities: "Simran Rawat Tanushka Lahiri",
      science: "Vartika Pathak",
      commerce: "Adhwan Kapoor",
    },
    {
      year: "2017 - 18",
      humanities: "Simran kaur Saini",
      science: "Nayamat Sood",
      commerce: "Amisha Diwan",
    },
    {
      year: "2018 - 19",
      humanities: "Abhya Anand Sharan Kaur Hunjan",
      science: "Joshua Jeevanand Davis",
      commerce: "Rohan Kohli",
    },
    {
      year: "2019 - 20",
      humanities: "Disha Mukherjee",
      science: "Writika Sarkar",
      commerce: "Aayush Saroha",
    },
    {
      year: "2020 - 21",
      humanities: "Srishti Ray",
      science: "Akshit Goel , Akanksha Sarkar",
      commerce: "Mallika Datta",
    },
    {
      year: "2021 - 22",
      humanities: "Riddhima Yadav",
      science: "Shrey Kharbanda",
      commerce: "Aditi Mehra",
    },
    {
      year: "2022 - 23",
      humanities: "Suhana",
      science: "Nandini Chanana",
      commerce: "Seerat Sharma",
    },
    {
      year: "2023 - 24",
      humanities: "Sanaa Shaikh",
      science: "Manya Gupta",
      commerce: "Amishi Sharma",
    },
  ];

  return (
    <section className="sm:py-16 py-12" aria-label="Hall of Fame">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            Hall <span className="text-secondary italic">of Fame</span>
          </h1>
        </div>

        {/* Hall of Fame Table */}
        <div className="mt-12">
          <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" role="table">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-sm font-bold tracking-wide uppercase text-white bg-primary border border-primary text-left"
                    >
                      Year
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-sm font-bold tracking-wide uppercase text-white bg-primary border border-primary text-left"
                    >
                      Humanities
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-sm font-bold tracking-wide uppercase text-white bg-primary border border-primary text-left"
                    >
                      Science
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-sm font-bold tracking-wide uppercase text-white bg-primary border border-primary text-left"
                    >
                      Commerce
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {hallOfFameData.map((entry, index) => (
                    <tr
                      key={index}
                      className={`transition-colors ${
                        index % 2 === 0 ? "bg-zinc-50" : "bg-white"
                      }`}
                    >
                      <td
                        className="px-6 py-4 text-base text-zinc-700 border border-zinc-200 font-medium whitespace-normal"
                      >
                        {entry.year}
                      </td>
                      <td
                        className="px-6 py-4 text-base text-zinc-900 border border-zinc-200 font-semibold whitespace-normal"
                        dangerouslySetInnerHTML={{ __html: entry.humanities }}
                      />
                      <td
                        className="px-6 py-4 text-base text-zinc-900 border border-zinc-200 font-semibold whitespace-normal"
                        dangerouslySetInnerHTML={{ __html: entry.science }}
                      />
                      <td
                        className="px-6 py-4 text-base text-zinc-900 border border-zinc-200 font-semibold whitespace-normal"
                        dangerouslySetInnerHTML={{ __html: entry.commerce }}
                      />
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
