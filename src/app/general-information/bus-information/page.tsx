import { Metadata } from "next";
import { BusInformationContent } from "@/components/bus-information";
import FloatingSidebar from "@/components/shared/FloatingSidebar";
import SidebarContent from "@/components/shared/SidebarContent";
import { generalInformationConfig } from "@/config/sidebar/generalInformationConfig";
import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "Bus Information | NIH Health",
  description:
    "Information about school bus routes, transportation facilities, and transport department details including bus schedules and route maps.",
};

export default function BusInformationPage() {
  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={generalInformationConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb />

      <BusInformationContent />
    </>
  );
}
