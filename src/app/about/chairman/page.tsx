import { Metadata } from "next";
import Link from "next/link";
import FloatingSidebar from "@/components/shared/FloatingSidebar";
import SidebarContent from "@/components/shared/SidebarContent";
import { aboutConfig } from "@/config/sidebar/aboutConfig";

import ChairmanHero from "@/components/chairman/ChairmanHero";
import Responsibilities from "@/components/chairman/Responsibilities";
import ChairmanContributions from "@/components/chairman/ChairmanContributions";
import ChairmanAwards from "@/components/chairman/ChairmanAwards";
import SpreadingHealth from "@/components/chairman/SpreadingHealth";

export const metadata: Metadata = {
    title: "About the Chairman | Dr. Vinod Kashyap - NIH Health",
    description: "Meet Dr. Vinod Kashyap, Chairman of the National Institute of Holistic Health (NIH), with 35 years of experience in Naturopathy and Yoga.",
};

export default function ChairmanPage() {
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
                            Chairman
                        </span>
                    </nav>
                </div>
            </section>

            <FloatingSidebar>
                <SidebarContent sections={aboutConfig.sections} />
            </FloatingSidebar>

            <main className="w-full">
                <ChairmanHero />
                <Responsibilities />
                <ChairmanContributions />
                <ChairmanAwards />
                <SpreadingHealth />
            </main>
        </>
    );
}
