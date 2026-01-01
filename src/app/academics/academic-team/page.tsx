import { Metadata } from "next";
import FloatingSidebar from "@/components/shared/FloatingSidebar";
import SidebarContent from "@/components/shared/SidebarContent";
import { academicsConfig } from "@/config/sidebar/academicsConfig";
import Breadcrumb from "@/components/shared/Breadcrumb";
import AcademicTeamContent from "@/components/academic-team/AcademicTeamContent";

export const metadata: Metadata = {
  title: "Academic Team | NIH Health - National Institute of Holistic Health",
  description:
    "Academic Team at NIH Health for the academic year 2024-25, including senior leadership, academic coordinators, heads of departments, and CBSE coordination team.",
};

export default function AcademicTeamPage() {
  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={academicsConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb />

      <AcademicTeamContent />
    </>
  );
}
