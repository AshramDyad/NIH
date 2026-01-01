import { Metadata } from "next";
import FloatingSidebar from "@/components/shared/FloatingSidebar";
import SidebarContent from "@/components/shared/SidebarContent";
import { generalInformationConfig } from "@/config/sidebar/generalInformationConfig";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ElectedParentsRepresentativesContent from "@/components/elected-parents-representatives/ElectedParentsRepresentativesContent";

export const metadata: Metadata = {
  title: "Elected Parents Representatives | NIH Health - National Institute of Holistic Health",
  description: "View the complete list of elected parent representatives for the academic year 2025-2026 with their contact information.",
};

export default function ElectedParentsRepresentativesPage() {
  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={generalInformationConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb />

      <ElectedParentsRepresentativesContent />
    </>
  );
}
