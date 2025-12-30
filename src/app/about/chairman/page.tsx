import { Metadata } from "next";
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
            <FloatingSidebar>
                <SidebarContent sections={aboutConfig.sections} />
            </FloatingSidebar>

            <ChairmanHero />
            <Responsibilities />
            <ChairmanContributions />
            <ChairmanAwards />
            <SpreadingHealth />
        </>
    );
}
