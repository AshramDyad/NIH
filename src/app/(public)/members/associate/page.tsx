import { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import MemberCard, { DatabaseMember } from "@/components/members/MemberCard";
import { Users } from "lucide-react";

export const metadata: Metadata = {
    title: "Associate Members | NIH Health",
    description: "Our distinguished associate members dedicated to holistic health practices.",
};

export default async function AssociateMembersPage() {
    const supabase = await createClient();

    const { data: members, error } = await supabase
        .from('yoga_naturopathy_members')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.warn('Error fetching associate members:', error.message);
    }

    const associateMembers = (members as DatabaseMember[]) || [];

    return (
        <>
            {/* Hero Section */}
            <section className="bg-white sm:py-16 py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-3xl md:text-5xl font-black text-zinc-900">
                            Our <span className="text-primary italic">Associate</span>
                            <br />
                            <span className="text-secondary">Members</span>
                        </h2>
                        <p className="text-lg text-zinc-600 leading-relaxed max-w-4xl mx-auto">
                            Meet our certified professionals who are advancing the science and practice
                            of Yoga and Naturopathy for a healthier society.
                        </p>
                    </div>
                </div>
            </section>

            {/* Members Grid Section */}
            <section className="bg-slate-50 py-12 sm:py-16 min-h-[50vh]">
                <div className="container mx-auto px-4">
                    {associateMembers.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200 max-w-2xl mx-auto">
                            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                                <Users className="w-8 h-8" />
                            </div>
                            <p className="text-gray-600 font-medium text-lg">Members list will be updated soon.</p>
                            <p className="text-gray-400 text-sm mt-2">Our technical team is currently updating the directory.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {associateMembers.map((member) => (
                                <MemberCard key={member.id} member={member} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
