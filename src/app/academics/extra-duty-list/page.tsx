import { Metadata } from "next";
import FloatingSidebar from "@/components/shared/FloatingSidebar";
import SidebarContent from "@/components/shared/SidebarContent";
import { academicsConfig } from "@/config/sidebar/academicsConfig";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ExtraDutyListContent from "@/components/extra-duty-list/ExtraDutyListContent";

export const metadata: Metadata = {
  title: "Extra Duty List | NIH Health - National Institute of Holistic Health",
  description:
    "Extra Duty List at NIH Health for the academic year 2024-25, including time table allotment, portal result coordinators, transport incharges, HPE coordinators, school ambience incharge, exchange programmes, canteen committee, and various activity incharges.",
};

export default function ExtraDutyListPage() {
  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={academicsConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb />

      <ExtraDutyListContent />
    </>
  );
}
