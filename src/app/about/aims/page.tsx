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
        <>
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
            <section className="sm:py-16 py-12 bg-secondary overflow-hidden">
                <div className="container mx-auto px-4 relative">
                    <div className="text-center text-white space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black">
                            Ready to embrace <span className="text-primary italic">Harmony?</span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-white/80 leading-relaxed">
                            Join us in our mission to promote holistic well-being worldwide.
                            Explore our programs and become part of a global movement.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-black capitalize shadow-lg transition-colors duration-300 cursor-pointer">
                                <Link href="https://forms.gle/DEajoyPQMDhhh1tC9">Join Us Now...</Link>
                            </button>
                            <button className="bg-white hover:bg-white/90 text-secondary px-10 py-4 rounded-full font-black capitalize shadow-lg transition-colors duration-300 cursor-pointer">
                                <Link href="/contact">Contact Us</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
