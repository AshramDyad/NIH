import PrincipalMessageContent from "@/components/about/PrincipalMessageContent";
import FloatingSidebar from "@/components/shared/FloatingSidebar";
import SidebarContent from "@/components/shared/SidebarContent";
import { aboutDPSConfig } from "@/config/sidebar/aboutDSPConfig";
import { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
    title: "Principal's Message | National Institute of Holistic Health",
    description: "A message from MS. ADITI MISRA, Director Principal of National Institute of Holistic Health (NIH) for the session 2025-26 and Silver Jubilee year.",
};

export default function PrincipalMessagePage() {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'About DPS', href: '/about/principal-message' },
        { label: 'Principal Message', href: undefined },
    ];
    return (
        <>
            <FloatingSidebar>
                <SidebarContent sections={aboutDPSConfig.sections} />
            </FloatingSidebar>

            <Breadcrumb items={breadcrumbItems} />

            <PrincipalMessageContent />
        </>
    );
}
