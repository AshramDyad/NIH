import { Metadata } from "next";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { ExternalLink, Building2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Institution Members | NIH Health",
    description: "Our registered institutions and centers across India.",
};

interface InstitutionMember {
    id: number;
    name: string;
    address: string;
    url: string;
    image_url: string;
}

function InstitutionCard({ institution }: { institution: InstitutionMember }) {
    const isValidUrl = institution.url && (institution.url.startsWith('http://') || institution.url.startsWith('https://'));

    return (
        <div className="flex flex-col items-center">
            {/* Logo Container */}
            <div className={`relative w-full aspect-4/3 overflow-hidden rounded-xl border border-gray-100 mb-4 flex items-center justify-center bg-slate-50 ${isValidUrl ? 'group cursor-pointer' : ''}`}>
                {/* Background Image with Zoom */}
                <div className={`relative w-full h-full p-6 sm:p-8 transition-transform duration-500 ease-out ${isValidUrl ? 'group-hover:scale-105' : ''}`}>
                    <Image
                        src={institution.image_url}
                        alt={institution.name}
                        fill
                        className="object-contain"
                        unoptimized
                    />
                </div>

                {/* Hover Overlay */}
                {isValidUrl && (
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                        <div className="text-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                            <span className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2.5 rounded-full font-bold text-sm shadow-lg whitespace-nowrap">
                                Visit Website <ExternalLink className="w-4 h-4" />
                            </span>
                        </div>
                    </div>
                )}

                {/* Invisible link overlay for the whole card area */}
                {isValidUrl && (
                    <Link
                        href={institution.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10"
                        aria-label={`Visit ${institution.name} website`}
                    />
                )}
            </div>

            {/* Institution Info */}
            <div className="text-center space-y-1 px-2">
                <h3 className="text-zinc-900 text-base font-semibold hover:text-primary transition-colors duration-300">
                    {isValidUrl ? (
                        <Link href={institution.url} target="_blank" rel="noopener noreferrer">
                            {institution.name}
                        </Link>
                    ) : (
                        <span>{institution.name}</span>
                    )}
                </h3>
                <p className="text-zinc-700 text-base leading-relaxed">
                    {institution.address}
                </p>
            </div>
        </div>
    );
}

export default async function InstitutionsPage() {
    const supabase = await createClient();

    const { data: institutions, error } = await supabase
        .from('institution_members')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching institutions:', error);
    }

    const members = (institutions as InstitutionMember[]) || [];

    return (
        <section className="bg-white sm:py-16 py-12">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center space-y-6 mb-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black text-zinc-900">
                            <span className="text-secondary italic">Associate Centre</span> of Members
                        </h2>
                        <p className="text-lg text-zinc-600 leading-relaxed max-w-3xl mx-auto">
                            We take pride in our network of affiliated institutions and centers dedicated to
                            promoting holistic health and education across the nation.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <Link
                            href="/centres-institute"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold transition-all "
                        >
                            <Building2 className="w-5 h-5" />
                            Register Associate Center Institute
                        </Link>
                    </div>
                </div>

                {/* Empty State */}
                {members.length === 0 ? (
                    <div className="text-center py-16 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                        <p className="text-gray-500 font-medium">No institutions registered yet.</p>
                    </div>
                ) : (
                    /* Institutions Grid */
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {members.map((inst) => (
                            <InstitutionCard key={inst.id} institution={inst} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
