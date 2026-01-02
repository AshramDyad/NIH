import BulletList from "@/components/shared/BulletList";
import Table from "@/components/shared/Table";

export default function DukeOfEdinburghContent() {
  const awardLevelsData = [
    {
      label: { content: "Level of award", isHeader: true },
      value: { content: "Minimum age of entry", isHeader: true },
    },
    {
      label: { content: "Bronze" },
      value: { content: "13.5" },
    },
    {
      label: { content: "Silver" },
      value: { content: "15" },
    },
    {
      label: { content: "Gold" },
      value: { content: "16" },
    },
    {
      label: { content: "" },
      value: { content: "Minimum duration", isHeader: true },
    },
    {
      label: { content: "Bronze" },
      value: { content: "6 months" },
    },
    {
      label: { content: "Silver" },
      value: { content: "12 months" },
    },
    {
      label: { content: "Gold" },
      value: { content: "18 months" },
    },
  ];

  const fundamentalPrinciplesItems = [
    "Individual challenge by choice - reflect on own interests, abilities and ambitions and set challenges in each of the 4 sections.",
    "The Award is voluntary, not forced. The activities have to be pursued during their leisure time.",
    "There is no failure. Participants work at their own pace - remember it&apos;s not a sprint but a marathon.",
  ];

  const operationalPrinciplesItems = [
    "Age range: 13½ - 25 years",
    "Balanced Programme of 4 sections",
    "There are three levels:",
  ];

  const programmeSectionsItems = [
    "Service: to learn how to give useful service to others.",
    "Skills: to encourage development of personal interests and practical skills.",
    "Physical Recreation: recreation activities, physical fitness and improvement of performance.",
    "Adventurous Journey: to encourage spirit of adventure and Discovery whilst undertaking a journey in a group.",
    "Residential Project (Gold level): to broaden experience through involvement with others in a residential setting.",
  ];

  return (
    <article className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
      {/* Introduction Section */}
      <section>
        <p className="text-zinc-700 leading-relaxed text-base md:text-lg">
          We are pleased to introduce the internationally recognized Duke of Edinburgh&apos;s award.
        </p>
      </section>

      {/* Fundamental Principles Section */}
      <section className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-6">
          Fundamental <span className="text-primary italic">Principles</span>:
        </h2>
        <BulletList items={fundamentalPrinciplesItems} />
      </section>

      {/* Operational Principles Section */}
      <section className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-6">
          Operational <span className="text-primary italic">Principles</span>:
        </h2>
        <BulletList items={operationalPrinciplesItems} />
      </section>

      {/* Award Levels Table Section */}
      <section className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-6">
          Award <span className="text-primary italic">Levels</span>
        </h2>
        <div className="overflow-x-auto">
          <Table data={awardLevelsData} />
        </div>
        <p className="text-zinc-700 leading-relaxed text-base md:text-lg mt-6">
          For each award participants have to complete the requirements of each of the 4 different sections. Qualifying standards are measured in terms of progress, proficiency and sustained effort.
        </p>
      </section>

      {/* Programme Sections */}
      <section className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-black text-zinc-900 mb-6">
          Programme <span className="text-primary italic">Sections</span>:
        </h2>
        <BulletList items={programmeSectionsItems} />
      </section>

      {/* Recognition Section */}
      <section className="bg-gradient-to-br from-primary to-orange-600 rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-6">
          Recognition:
        </h2>
        <p className="text-white leading-relaxed text-base md:text-lg">
          On completion of the award the participant receives a certificate and a badge.
        </p>
      </section>
    </article>
  );
}
