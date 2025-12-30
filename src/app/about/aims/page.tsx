import { Metadata } from "next";
import FloatingSidebar from "@/components/shared/FloatingSidebar";
import SidebarContent from "@/components/shared/SidebarContent";
import { aboutConfig } from "@/config/sidebar/aboutConfig";
import Breadcrumb from "@/components/shared/Breadcrumb";
import AimsHero from "@/components/about/AimsHero";
import AimsContent from "@/components/about/AimsContent";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Aims & Objectives | NIH Health",
    description: "Discover the core aims and strategic objectives of the National Institute of Holistic Health.",
};

export default function AimsPage() {
    return (
        <>
            <FloatingSidebar>
                <SidebarContent sections={aboutConfig.sections} />
            </FloatingSidebar>

            <Breadcrumb />

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
