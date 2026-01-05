import { Metadata } from "next";
import Image from "next/image";
import type { LifetimeMember } from "@/types/lifetime-member";

export const metadata: Metadata = {
  title: "Lifetime Members | NIH Health - National Institute of Holistic Health",
  description: "Meet our dedicated Lifetime Members who have made significant contributions to holistic health and wellness education.",
};

const lifetimeMembers: LifetimeMember[] = [
  {
    id: 1,
    name: "Dr. Vikas Upadhyay",
    memberNumber: "NIH/UP/1178",
    dateOfBirth: "05.10.1975",
    image: "/images/lifetime-members/Vikas-Upadhyay.png",
  },
  {
    id: 2,
    name: "Anil-Kumar",
    memberNumber: "NIH/UP/1179",
    dateOfBirth: "01.07.1963",
    image: "/images/lifetime-members/Anil-Kumar.png",
  },
  {
    id: 3,
    name: "Shashi Sharma",
    memberNumber: "NIH/UP/1167",
    dateOfBirth: "05.07.1977",
    image: "/images/lifetime-members/Shashi-Sharma.png",
  },
  {
    id: 4,
    name: "Dr. Rekha Choudhary",
    memberNumber: "NIHDL/1162",
    dateOfBirth: "15.09.1966",
    image: "/images/lifetime-members/Rekha-Choudhary.png",
  },
  {
    id: 5,
    name: "Sadhna Upadhyay",
    memberNumber: "NIH/UP/1175",
    dateOfBirth: "10.07.1975",
    image: "/images/lifetime-members/Sadhna-Upadhyay.png",
  },
  {
    id: 6,
    name: "Praveen Jain",
    memberNumber: "NIH/DL/1150",
    dateOfBirth: "22/11/1968",
    image: "/images/lifetime-members/Praveen-Jain.png",
  },
  {
    id: 7,
    name: "Dr. Sumanlata Dewangan",
    memberNumber: "NIH/UK/1257",
    dateOfBirth: "28/05/1987",
    image: "/images/lifetime-members/Sumanlata-Dewangan.png",
  },
  {
    id: 8,
    name: "Dr. Virendra Vikram Singh",
    memberNumber: "NIH/UP/1258",
    dateOfBirth: "02/12/1954",
    image: "/images/lifetime-members/Virendra-Vikram.png",
  },
  {
    id: 9,
    name: "Dr. Krantiveer Shivram Mahindrakar",
    memberNumber: "NIH/MH/1256",
    dateOfBirth: "01/07/1967",
    image: "/images/lifetime-members/Krantiveer-Shivram.png",
  },
];

interface MemberCardProps {
  member: LifetimeMember;
}

function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow border border-gray-200 space-y-4">
      {/* Member Image */}
      <div className="relative w-32 h-32 mx-auto">
        <div className="relative w-full h-full rounded-full overflow-hidden ">
          <Image
            src={member.image}
            alt={`${member.name} - Lifetime Member`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Member Name */}
      <h3 className="text-xl font-semibold text-center text-gray-900">
        {member.name}
      </h3>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200" />

      {/* Member Details */}
      <div className="space-y-3">
        <div className="flex flex-col items-center text-gray-600">
          <span className="text-lg font-bold text-primary">
            Member No.
          </span>
          <span className="font-medium">{member.memberNumber}</span>
        </div>

        <div className="flex flex-col items-center text-gray-600">
          <span className="text-lg font-bold text-secondary">
            D.O.B.
          </span>
          <span className="font-medium">{member.dateOfBirth}</span>
        </div>
      </div>
    </div>
  );
}

export default function LifetimeMembersPage() {
  return (
    <section className="bg-white sm:py-16 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900">
            Lifetime <span className="text-primary italic">Members</span>
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed max-w-4xl mx-auto">
            NIH Honours our Lifetime Members. These are our dedicated members who have
            made significant contributions to Holistic Health. Their commitment inspires
            us every day.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {lifetimeMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
