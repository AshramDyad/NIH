import { Metadata } from "next";
import FloatingSidebar from "@/components/shared/FloatingSidebar";
import SidebarContent from "@/components/shared/SidebarContent";
import Breadcrumb from "@/components/shared/Breadcrumb";
import InclusionProgrammeContent from "@/components/inclusion-programme/InclusionProgrammeContent";
import { academicsConfig } from "@/config/sidebar/academicsConfig";

// Inline type for props (empty for this page)
type PageProps = {};

export const metadata: Metadata = {
  title: "Inclusion Programme | NIH Health - National Institute of Holistic Health",
  description:
    "Inclusion Programme at NIH Health providing inclusive education and support for diverse learning needs.",
};

export default function InclusionProgrammePage(_props: PageProps) {
  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={academicsConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb />

      <InclusionProgrammeContent />
    </>
  );
}
