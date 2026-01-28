import { Metadata } from "next";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { Users } from "lucide-react";

export const metadata: Metadata = {
    title: "Active Members | NIH Health - National Institute of Holistic Health",
    description: "Meet our dedicated Active Members who are committed to holistic health and wellness education.",
};

// Database Member Type
interface DatabaseMember {
    readonly id: number;
    readonly name: string;
    readonly member_number: string;
    readonly date_of_birth: string | null;
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
                        alt={`${member.name} - Active Member`}
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
                    <span className="text-lg font-bold text-secondary">
                        Member No.
                    </span>
                    <span className="font-medium">{member.member_number}</span>
                </div>
            </div>
        </div>
    );
}

export default async function ActiveMembersPage() {
    // Fetch active members from Supabase
    const supabase = await createClient();

    const { data: members, error } = await supabase
        .from('active_members')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching active members:', error);
    }

    const activeMembers = (members as DatabaseMember[]) || [];

    return (
        <section className="bg-white sm:py-16 py-12">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center space-y-4 mb-8">
                    <h2 className="text-3xl md:text-5xl font-black text-zinc-900">
                        Active <span className="text-secondary italic">Members</span>
                    </h2>
                    <p className="text-lg text-zinc-600 leading-relaxed max-w-4xl mx-auto">
                        Meet our esteemed Active Members of the National Institute of Holistic Health.
                        These dedicated professionals are committed to the practice and promotion of
                        well-being through holistic science.
                    </p>
                </div>

                {/* Empty State */}
                {activeMembers.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200 max-w-2xl mx-auto">
                            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                                <Users className="w-8 h-8" />
                            </div>
                            <p className="text-gray-600 font-medium text-lg">Members list will be updated soon.</p>
                            <p className="text-gray-400 text-sm mt-2">Our technical team is currently updating the directory.</p>
                        </div>
                ) : (
                    /* Members Grid */
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {activeMembers.map((member) => (
                            <MemberCard key={member.id} member={member} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
