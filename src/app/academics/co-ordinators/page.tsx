import { Metadata } from "next";
import FloatingSidebar from "@/components/shared/FloatingSidebar";
import SidebarContent from "@/components/shared/SidebarContent";
import { academicsConfig } from "@/config/sidebar/academicsConfig";
import Breadcrumb from "@/components/shared/Breadcrumb";
import CoordinatorsContent from "@/components/coordinators/CoordinatorsContent";

export const metadata: Metadata = {
  title: "Co-ordinators | NIH Health - National Institute of Holistic Health",
  description:
    "Academic coordinators at NIH Health for the academic year 2024-25, including junior and senior/middle coordinators, subject coordinators, and dispersal coordinators.",
};

export default function CoordinatorsPage() {
  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={academicsConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb />

      <CoordinatorsContent />
    </>
  );
}
