/**
 * Managing Committee Content Component
 * Displays the Board of Management members with a modern, responsive design
 */

export default function ManagingCommitteeContent() {
    // Committee member data - exact content from original page
    const committeeMembers = [
        { name: "Mr. V. K. Shunglu", role: "Chairman" },
        { name: "Ms. Vrinda Sarup", role: "Vice Chairperson" },
        { name: "Ms. Devyani Jaipuria", role: "Pro Vice Chairperson" },
        { name: "Prof. Sydney Rebeiro", role: "Member" },
        { name: "Ms. Namita Pradhan", role: "Member" },
        { name: "Mr. Asha Ram Sihag", role: "Member" },
        { name: "Ms. Dhara Jaipuria", role: "Member" },
        { name: "CBSE Nominee 1", role: "Member" },
        { name: "CBSE Nominee 2", role: "Member" },
        { name: "Representative from HSVP", role: "Member" },
        { name: "Mr. Sachin Chugh", role: "Parent Rep" },
        { name: "Ms. Roohi Trehan Thakur", role: "Parent Rep" },
        { name: "Ms. Shikha Bhardwaj", role: "Staff Rep" },
        { name: "Ms. Sarabjit Lall", role: "Staff Rep" },
        { name: "Ms. Aditi Misra", role: "Director Principal & Secretary" },
    ] as const;

    return (
        <section className="sm:py-16 py-12" aria-label="Board of Management">
            <div className="container mx-auto px-4">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
                        Board of <span className="text-secondary italic">Management</span>
                    </h1>
                </div>

                {/* Committee Members Grid */}
                <ul
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    role="list"
                    aria-label="Committee members list"
                >
                    {committeeMembers.map((member, index) => (
                        <li key={index} role="listitem">
                            <article className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-6 hover:shadow-md transition-shadow duration-300 h-full">
                                <div className="space-y-2">
                                    {/* Member Name */}
                                    <h2 className="font-bold text-zinc-900 text-lg md:text-xl">
                                        {member.name}
                                    </h2>
                                    {/* Member Role */}
                                    <p className="text-zinc-600 text-base md:text-lg">
                                        {member.role}
                                    </p>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
