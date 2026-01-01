import { Metadata } from "next";
import FloatingSidebar from "@/components/shared/FloatingSidebar";
import SidebarContent from "@/components/shared/SidebarContent";
import { generalInformationConfig } from "@/config/sidebar/generalInformationConfig";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { SchoolBusRulesContent } from "@/components/school-bus-rules";

export const metadata: Metadata = {
  title: "School Bus Rules | NIH Health - National Institute of Holistic Health",
  description:
    "School bus transportation rules and guidelines for students including transport facilities, route policies, safety requirements, and student conduct expectations.",
};

export default function SchoolBusRulesPage() {
  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={generalInformationConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb />

      <SchoolBusRulesContent />
    </>
  );
}
