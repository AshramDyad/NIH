export function BusInformationContent() {
  const mainContent = [
    "The school has a fleet of 77 buses",
    "There are three different routes running - DPS Sec-45, Primary Wing (Sec-47) & Infant Wing (Sec-40).",
    "A mission to give equal opportunities to each stakeholder for personal growth through 'value added' education.",
    "The areas covered are Vasantkunj via Mahipalpur (Delhi), Rajokari, NH-8, Palam, Dwarka and DLF Phase I, II, III, IV Oakwood, Belvadare Tower, Maruti Vihar, Essal Tower, Heritage, Sec 4,7,10,15,17,21,22,23,31,37,40,56,57,60,61,62,64,65,66,67,69,70,71,72,81,82,83,84,85,86,90,91,92 Central Park, Hamilton Court, Civil Lines, Sadar Bazar, Omaxe, South-End,Malibu Town, South City, Nirvana, Palam Vihar, Vyapar Kendra, Rotary School, Ridgewood, Sushant Lok, Maple Heights, Powergrid, Shivaji Nagar, Rajiv Chowk, Kendriya Vihar, Rail Vihar, Sun City, Ardee City (Gurgaon), New Gurgaon, Dwrka expressway, Sohna Students can avail the school transport facility subject to the availability of seats. The routes of the school buses are drawn on the basis of the number of students and the parents should consult the school transport incharge for necessary details. Bus facility is neither mandatory nor guaranteed. Bus stop and routes have been fixed keeping in view certain parameters, there will not be changed an individual request or individual desires.",
  ];

  const busRoutes = [
    {
      section: "Infant Wing, Sec-40",
      routes: "I1 to I15",
    },
    {
      section: "Primary Wing, Sec-47",
      routes: "J1 to J35",
    },
    {
      section: "Senior",
      routes: "S1 to S70",
    },
  ];

  const transportDocuments = [
    {
      name: "Sec 40 Bus Routes",
      pdf: "NEW-INFANT.pdf",
    },
    {
      name: "Sec 45 Bus Routes",
      pdf: "SUMMER-TIME-45.pdf",
    },
    {
      name: "Sec 47 Bus Routes",
      pdf: "SUMMER-TIME-47.pdf",
    },
  ];

  return (
    <section className="relative sm:py-16 py-12 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
              <span className="text-secondary italic">Bus</span> Information
            </h1>
          </div>

          {/* Main Content */}
          <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto mt-8">
            {mainContent.map((paragraph, index) => (
              <li
                key={index}
                className="group relative bg-white rounded-2xl sm:p-6 p-4 shadow-sm border border-zinc-100 hover:border-primary/30 hover:shadow-md transition-all duration-300 list-none w-full overflow-hidden"
              >
                <div className="flex items-start gap-4 w-full min-w-0">
                  <div className="mt-3 w-2 h-2 flex-shrink-0 rounded-full bg-primary" />
                  <p className="text-lg text-zinc-600 leading-relaxed break-words flex-1 min-w-0">
                    {paragraph}
                  </p>
                </div>
              </li>
            ))}
          </div>

          {/* Bus Routes Section */}
          <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-6 md:mb-8 text-center">
              Bus Routes
            </h2>
            <div className="space-y-4 md:space-y-6">
              {busRoutes.map((route, index) => (
                <li
                  key={index}
                  className="group relative bg-white rounded-2xl sm:p-6 p-4 shadow-sm border border-zinc-100 hover:border-primary/30 hover:shadow-md transition-all duration-300 list-none w-full overflow-hidden"
                >
                  <div className="flex items-start gap-4 w-full min-w-0">
                    <div className="mt-3 w-2 h-2 flex-shrink-0 rounded-full bg-primary" />
                    <div className="flex-1 min-w-0">
                      <p className="text-lg font-bold text-zinc-900 mb-1 break-words">
                        {route.section}:
                      </p>
                      <p className="text-lg text-zinc-600 leading-relaxed break-words">
                        {route.routes}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </div>
          </div>

          {/* Transport Department Section */}
          <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-6 md:mb-8 text-center">
              Transport Department
            </h2>
            <div className="bg-white rounded-2xl sm:p-6 p-4 shadow-sm border border-zinc-100">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left text-lg font-bold text-zinc-900 py-3 px-4 border-b border-zinc-200">
                      Route
                    </th>
                    <th className="text-left text-lg font-bold text-zinc-900 py-3 px-4 border-b border-zinc-200">
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transportDocuments.map((doc, index) => (
                    <tr
                      key={index}
                      className="hover:bg-zinc-50 transition-colors"
                    >
                      <td className="py-3 px-4 text-lg text-zinc-700 border-b border-zinc-200">
                        {doc.name}
                      </td>
                      <td className="py-3 px-4 border-b border-zinc-200">
                        <a
                          href={`/pdfs/${doc.pdf}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 text-base"
                        >
                          click here
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
