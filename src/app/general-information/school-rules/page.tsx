import { Metadata } from "next";
import FloatingSidebar from "@/components/shared/FloatingSidebar";
import SidebarContent from "@/components/shared/SidebarContent";
import { generalInformationConfig } from "@/config/sidebar/generalInformationConfig";
import SchoolRulesContent from "@/components/school-rules/SchoolRulesContent";
import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
    title: "School Rules | NIH Health - National Institute of Holistic Health",
    description: "Comprehensive school rules and regulations for students, parents, and guardians. Learn about attendance policies, uniform guidelines, behavioral expectations, and disciplinary procedures.",
};

export default function SchoolRulesPage() {
    return (
        <>
            <FloatingSidebar>
                <SidebarContent sections={generalInformationConfig.sections} />
            </FloatingSidebar>

            <Breadcrumb />
            <SchoolRulesContent />
        </>
    );
}
