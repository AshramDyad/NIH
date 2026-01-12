import { Metadata } from "next";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import YPMApplicationForm from "@/components/members/YPMApplicationForm";

export const metadata: Metadata = {
    title: "Yoga & Naturopathy Professional Members | NIH Health",
    description: "Our distinguished Yoga and Naturopathy professionals dedicated to holistic health.",
};

interface DatabaseMember {
    readonly id: number;
    readonly name: string;
    readonly member_number: string;
    readonly image_url: string;
    readonly created_at: string;
}

function MemberCard({ member }: { member: DatabaseMember }) {
    return (
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow border border-gray-200 space-y-4 group hover:shadow-lg transition-shadow duration-300">
            <div className="relative w-32 h-32 mx-auto">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/10 group-hover:border-primary/30 transition-colors duration-300">
                    <Image
                        src={member.image_url || "/placeholder-member.png"}
                        alt={`${member.name} - Professional Member`}
                        fill
                        sizes="128px"
                        unoptimized
                        className="object-cover"
                    />
                </div>
            </div>

            <h3 className="text-xl font-semibold text-center text-gray-900 group-hover:text-primary transition-colors">
                {member.name}
            </h3>

            <div className="w-full h-px bg-gray-200" />

            <div className="flex flex-col items-center text-gray-600">
                <span className="text-sm font-bold text-primary uppercase tracking-wider">
                    Member No.
                </span>
                <span className="font-medium">{member.member_number}</span>
            </div>
        </div>
    );
}

export default async function YogaNaturopathyProfessionalMembersPage() {
    const supabase = await createClient();

    // Attempting to fetch from a hypothesized table name, falling back to empty if it doesn't exist yet
    const { data: members, error } = await supabase
        .from('yoga_naturopathy_members') // Assuming this might be the table name or will be created
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.warn('Yoga/Naturopathy members table might not exist yet:', error.message);
    }

    const professionalMembers = (members as DatabaseMember[]) || [];

    return (
        <>
            {/* Hero Section */}
            <section className="bg-white sm:py-16 py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-3xl md:text-5xl font-black text-zinc-900">
                            Yoga & <span className="text-primary italic">Naturopathy</span>
                            <br />
                            <span className="text-secondary">Professional</span> Members
                        </h2>
                        <p className="text-lg text-zinc-600 leading-relaxed max-w-4xl mx-auto">
                            Meeting our certified professionals who are advancing the science and practice
                            of Yoga and Naturopathy for a healthier society.
                        </p>
                    </div>
                </div>
            </section>

            {/* YPM Membership Info Section */}
            <section className="bg-slate-50 py-12 sm:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Membership Info */}
                            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-zinc-100">
                                <h3 className="text-2xl font-black text-secondary mb-4">
                                    MEMBERSHIP
                                </h3>
                                <p className="text-zinc-700 leading-relaxed">
                                    A Yoga Volunteer Member is any person who wishes to contribute to the
                                    overall development of Yoga and National Institute of Holistic Health (NIH).
                                    A Yoga Volunteer member need not have any prequalification in yoga.
                                    The Yoga Volunteer Membership is free for 1 year.
                                </p>
                            </div>

                            {/* Benefits */}
                            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-zinc-100">
                                <h3 className="text-2xl font-black text-secondary mb-4">
                                    BENEFITS
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                        <span className="text-zinc-700">
                                            A NIH Yoga Professional member would be provided a Unique ID and an ID Card.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                        <span className="text-zinc-700">
                                            A NIH member is entitled to a free copy of quarterly e-magazine.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                        <span className="text-zinc-700">
                                            A YPM will be eligible for discounts on Events/Conferences/Seminars.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <section className="bg-white py-12 sm:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <YPMApplicationForm />
                    </div>
                </div>
            </section>

            {/* Members Grid Section */}
            <section className="bg-slate-50 py-12 sm:py-16 min-h-[40vh]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-black text-zinc-900">
                            Our <span className="text-primary">Professional</span> Members
                        </h3>
                    </div>

                    {professionalMembers.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200 max-w-2xl mx-auto">
                            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </div>
                            <p className="text-gray-600 font-medium text-lg">Members list will be updated soon.</p>
                            <p className="text-gray-400 text-sm mt-2">Our technical team is currently updating the professional directory.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {professionalMembers.map((member) => (
                                <MemberCard key={member.id} member={member} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

