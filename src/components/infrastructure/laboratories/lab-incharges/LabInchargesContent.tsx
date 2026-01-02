"use client"

import Table from '@/components/shared/Table';

export default function LabInchargesContent() {
  const tableData = [
    {
      label: { content: 'Chemistry', rowspan: 2, isHeader: false },
      value: { content: 'Ms. Sushma Ahlawat', colspan: 1 },
    },
    {
      label: { content: '', rowspan: 1 },
      value: { content: 'Ms. Shuchi Gupta', colspan: 1 },
    },
    {
      label: { content: 'Physics', rowspan: 2, isHeader: false },
      value: { content: 'Ms. Chandni Kumari', colspan: 1 },
    },
    {
      label: { content: '', rowspan: 1 },
      value: { content: 'Ms. Anny Kalra', colspan: 1 },
    },
    {
      label: { content: 'Biology', isHeader: false },
      value: { content: 'Ms. Sangeeta Luthra', colspan: 1 },
    },
    {
      label: { content: 'Atal Tinkering Lab', isHeader: false },
      value: { content: 'Ms. Sonu Khandelwal', colspan: 1 },
    },
    {
      label: { content: 'I Discovery Lab', colspan: 2, isHeader: true },
      value: { content: '', colspan: 0 },
    },
    {
      label: { content: 'Infant', isHeader: false },
      value: { content: 'Ms. Timsy Sharma', colspan: 1 },
    },
    {
      label: { content: 'Primary', isHeader: false },
      value: { content: 'Ms. Anita Rangi', colspan: 1 },
    },
    {
      label: { content: 'Discovery Lab', colspan: 2, isHeader: true },
      value: { content: '', colspan: 0 },
    },
    {
      label: { content: 'Junior', isHeader: false },
      value: { content: 'Ms. Deepti Sharma', colspan: 1 },
    },
    {
      label: { content: 'Middle', isHeader: false },
      value: { content: 'Ms. Vanita Dhawan', colspan: 1 },
    },
    {
      label: { content: 'Language Lab', colspan: 2, isHeader: true },
      value: { content: '', colspan: 0 },
    },
    {
      label: { content: 'Infant', isHeader: false },
      value: { content: 'Reps', colspan: 1 },
    },
    {
      label: { content: '(Primary) Words A - Maze', isHeader: false },
      value: { content: 'Ms. Nidhi Anand', colspan: 1 },
    },
    {
      label: { content: '(Primary) Language Avenues', isHeader: false },
      value: { content: 'Ms. Poonam Jain', colspan: 1 },
    },
    {
      label: { content: 'Language Room', isHeader: false },
      value: { content: 'Ms. Divya Sethi', colspan: 1 },
    },
    {
      label: { content: 'Fashion Technology', isHeader: false },
      value: { content: 'Ms. Navpreet Kaur', colspan: 1 },
    },
    {
      label: { content: 'Computer Lab (Senior)', isHeader: false },
      value: { content: 'Ms. Swati Panhani', colspan: 1 },
    },
    {
      label: { content: '(C Block - Ground Floor)', isHeader: false },
      value: { content: 'Ms. Kanika Sachdeva', colspan: 1 },
    },
    {
      label: { content: '(B Block - Second Floor) (1)', isHeader: false },
      value: { content: 'Ms. Nidhi Arora', colspan: 1 },
    },
    {
      label: { content: '(B Block - Second Floor) (2)', isHeader: false },
      value: { content: 'Ms. Nidhi Arora', colspan: 1 },
    },
    {
      label: { content: 'Computer Lab( Sector-47) First Floor', isHeader: false },
      value: { content: 'Ms. Abha Wadhwa', colspan: 1 },
    },
    {
      label: { content: 'Second Floor(Sector - 47)', isHeader: false },
      value: { content: 'Ms. Anshu Girdhani', colspan: 1 },
    },
    {
      label: { content: 'Third Floor', isHeader: false },
      value: { content: 'Ms. Jyoti Batra', colspan: 1 },
    },
    {
      label: { content: '(Infant)', isHeader: false },
      value: { content: 'Reps', colspan: 1 },
    },
    {
      label: { content: 'Maths Lab (Primary)', isHeader: false },
      value: { content: 'Ms. Bhavna Jain', colspan: 1 },
    },
    {
      label: { content: 'Maths Lab (Senior/ Middle)', isHeader: false },
      value: { content: 'Ms. Poonam Khurana', colspan: 1 },
    },
    {
      label: { content: 'Gymnasium', isHeader: false },
      value: { content: 'Mr. Deepak Gulia', colspan: 1 },
    },
    {
      label: { content: 'Library (Senior)', isHeader: false },
      value: { content: 'Ms. Charu ahuja', colspan: 1 },
    },
    {
      label: { content: '(Middle)', isHeader: false },
      value: { content: 'Ms. Namita Kumari', colspan: 1 },
    },
    {
      label: { content: '(Junior)(Sector - 45)', isHeader: false },
      value: { content: 'Ms. Alpana Gaur', colspan: 1 },
    },
    {
      label: { content: '(Sector - 47)', isHeader: false },
      value: { content: 'Ms. Sheetal Malhotra', colspan: 1 },
    },
    {
      label: { content: 'Activity Room (Primary)', isHeader: false },
      value: { content: 'Ms. Teena Kaushal', colspan: 1 },
    },
    {
      label: { content: '(Infant)', isHeader: false },
      value: { content: 'Ms. Aarti Hoon', colspan: 1 },
    },
    {
      label: { content: 'Rainbow Room (Sector-47)', isHeader: false },
      value: { content: 'Ms. Amanat Gill', colspan: 1 },
    },
    {
      label: { content: 'Helping Hands (Sector-40)', isHeader: false },
      value: { content: 'Ms. Kanika Dua', colspan: 1 },
    },
    {
      label: { content: 'Evacuation Drill (Sector-40/47)', rowspan: 2, isHeader: false },
      value: { content: 'Mr. Balbeer Singh', colspan: 1 },
    },
    {
      label: { content: '', rowspan: 1 },
      value: { content: 'Reps', colspan: 1 },
    },
    {
      label: { content: 'Caring for the Underprivileged (Outreach Programme)', isHeader: false },
      value: { content: 'Reps', colspan: 1 },
    },
    {
      label: { content: 'Smart Class I/C', colspan: 2, isHeader: true },
      value: { content: '', colspan: 0 },
    },
    {
      label: { content: '(Senior)', isHeader: false },
      value: { content: 'Ms. Jagriti Pahuja', colspan: 1 },
    },
    {
      label: { content: '(Middle)', isHeader: false },
      value: { content: 'Ms. Priyanka Kochgaway', colspan: 1 },
    },
    {
      label: { content: '(Junior) (Sector - 45)', isHeader: false },
      value: { content: 'Mr. Sagar Pant', colspan: 1 },
    },
    {
      label: { content: '(Junior) (Sector - 47)', isHeader: false },
      value: { content: 'Ms. Shalini Goel', colspan: 1 },
    },
    {
      label: { content: 'Fine Arts', isHeader: false },
      value: { content: 'Mr. Sushanta Chatterjee', colspan: 1 },
    },
    {
      label: { content: 'Art Room', isHeader: false },
      value: { content: 'Mr. Suresh Lal', colspan: 1 },
    },
    {
      label: { content: 'Music Rooms', isHeader: false },
      value: { content: 'Mr. Eliah T. Panmei', colspan: 1 },
    },
    {
      label: { content: 'Dance Rooms', isHeader: false },
      value: { content: 'Ms. Baishali Sarkar', colspan: 1 },
    },
  ];

  return (
    <section className="sm:py-16 py-12">
      <div className="mx-auto container px-4">

        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            <span className="text-primary italic">Lab </span>Incharges
          </h1>
        </div>

        {/* Table Content */}
        <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6">
          <div className="overflow-x-auto">
            <Table data={tableData} />
          </div>
        </article>

      </div>
    </section>
  );
}
