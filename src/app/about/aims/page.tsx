import { Metadata } from "next";
import FloatingSidebar from "@/components/shared/FloatingSidebar";
import SidebarContent from "@/components/shared/SidebarContent";
import { aboutConfig } from "@/config/sidebar/aboutConfig";
import Link from "next/link";
import AimsHero from "@/components/about/AimsHero";
import AimsContent from "@/components/about/AimsContent";

export const metadata: Metadata = {
    title: "Aims & Objectives | NIH Health",
    description: "Discover the core aims and strategic objectives of the National Institute of Holistic Health.",
};

export default function AimsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section - Breadcrumb Only */}
            <section className="bg-primary/10 py-4">
                <div className="mx-auto container px-6">
                    <nav className="flex flex-wrap items-center gap-2 text-gray-700 text-sm md:text-base">
                        <Link href="/" className="hover:text-primary transition-colors font-medium whitespace-nowrap">
                            Home
                        </Link>
                        <span className="flex-shrink-0">&gt;</span>
                        <Link href="/about" className="hover:text-primary transition-colors font-medium whitespace-nowrap">
                            About Us
                        </Link>
                        <span className="flex-shrink-0">&gt;</span>
                        <span className="font-medium text-primary">
                            Aims & Objectives
                        </span>
                    </nav>
                </div>
            </section>

            <FloatingSidebar>
                <SidebarContent sections={aboutConfig.sections} />
            </FloatingSidebar>

            <AimsHero />
            <AimsContent />

            {/* Final CTA Section */}
            <section className="sm:py-20 py-12 bg-secondary overflow-hidden">
                <div className="container mx-auto px-4 relative">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none -mr-20 -mt-20" />

                    <div className="relative z-10 text-center text-white space-y-8">
                        <h2 className="text-4xl md:text-6xl font-black">
                            Ready to embrace <span className="text-primary italic">Harmony?</span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 font-medium">
                            Join us in our mission to promote holistic well-being worldwide.
                            Explore our programs and become part of a global movement.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                            <Link
                                href="https://forms.gle/gyXBhDGFnFX9vkmS7"
                                className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-2xl font-black text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Get Membership
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-white hover:bg-zinc-100 text-secondary px-10 py-4 rounded-2xl font-black text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
