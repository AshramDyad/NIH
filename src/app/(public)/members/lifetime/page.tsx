import { Metadata } from "next";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Lifetime Members | NIH Health - National Institute of Holistic Health",
  description: "Meet our dedicated Lifetime Members who have made significant contributions to holistic health and wellness education.",
};

// Database Member Type
interface DatabaseMember {
  readonly id: number;
  readonly name: string;
  readonly member_number: string;
  readonly date_of_birth: string;
  readonly image_url: string;
  readonly created_at: string;
  readonly updated_at: string;
}

interface MemberCardProps {
  member: DatabaseMember;
}

function MemberCard({ member }: MemberCardProps) {

  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow border border-gray-200 space-y-4">
      {/* Member Image */}
      <div className="relative w-32 h-32 mx-auto">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image
            src={member.image_url}
            alt={`${member.name} - Lifetime Member`}
            fill
            sizes="128px"
            unoptimized
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
          <span className="font-medium">{member.member_number}</span>
        </div>
      </div>
    </div>
  );
}

export default async function LifetimeMembersPage() {
  // Fetch lifetime members from Supabase
  const supabase = await createClient();

  const { data: members, error } = await supabase
    .from('lifetime_members')
    .select('*')
    .order('created_at', { ascending: false });

  // Handle error state gracefully
  if (error) {
    console.error('Error fetching lifetime members:', error);
  }

  const lifetimeMembers = (members as DatabaseMember[]) || [];

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

        {/* Empty State */}
        {lifetimeMembers.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600">No lifetime members found.</p>
          </div>
        ) : (
          /* Members Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {lifetimeMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
