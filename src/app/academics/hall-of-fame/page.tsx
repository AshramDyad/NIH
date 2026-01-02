import { Metadata } from "next";
import FloatingSidebar from "@/components/shared/FloatingSidebar";
import SidebarContent from "@/components/shared/SidebarContent";
import { academicsConfig } from "@/config/sidebar/academicsConfig";
import Breadcrumb from "@/components/shared/Breadcrumb";
import HallOfFameContent from "@/components/hall-of-fame/HallOfFameContent";

export const metadata: Metadata = {
  title: "Hall of Fame | NIH Health - National Institute of Holistic Health",
  description:
    "Hall of Fame showcasing outstanding students across Humanities, Science, and Commerce streams from 2006-07 to 2023-24.",
};

export default function HallOfFamePage() {
  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={academicsConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb />

      <HallOfFameContent />
    </>
  );
}
