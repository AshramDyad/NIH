import { CheckCircle2 } from "lucide-react";

const responsibilities = [
    "Chairman-National Institute of Holistic Health (NIH)",
    "Hony. Trustee and Vice President-Balaji Nirogdham.",
    "Chairman - Mahakal Shakti Mandal Trust.",
    "National Head: Indo-Vietnam Medical Board",
    "Adjudicator: India Book & Asia Book of Records",
    "General Secretary-Mahakali Adya Shakti Peeth Trust.",
    "General Secretary- Delhi Institute of Naturopathy.",
    "Member: Syllabus subcommittee- National Institute of Open Schooling (NIOS), Ministry of Education, Govt. of India."
];

export default function Responsibilities() {
    return (
        <section className="sm:py-16 py-12 bg-slate-50/30">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-secondary">
                        Present Social <span className="text-primary italic">Responsibilities</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {responsibilities.map((text, idx) => (
                        <div
                            key={idx}
                            className="bg-white sm:p-6 p-4 rounded-2xl border border-slate-200 shadow-sm flex gap-5 items-start"
                        >
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mt-1">
                                <CheckCircle2 className="w-4 h-4 text-primary" />
                            </div>

                            <p className="text-lg font-bold text-slate-800 leading-snug">
                                {text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
