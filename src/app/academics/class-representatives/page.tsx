import { Metadata } from "next";
import FloatingSidebar from "@/components/shared/FloatingSidebar";
import SidebarContent from "@/components/shared/SidebarContent";
import { academicsConfig } from "@/config/sidebar/academicsConfig";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ClassRepresentativesContent from "@/components/class-representatives/ClassRepresentativesContent";

export const metadata: Metadata = {
  title: "Class Representatives | NIH Health - National Institute of Holistic Health",
  description:
    "Class Representatives at NIH Health for the academic year 2024-25, featuring dedicated representatives for Pre-Nursery to XII classes.",
};

export default function ClassRepresentativesPage() {
  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={academicsConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb />

      <ClassRepresentativesContent />
    </>
  );
}
