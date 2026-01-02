import { Metadata } from "next";
import FloatingSidebar from "@/components/shared/FloatingSidebar";
import SidebarContent from "@/components/shared/SidebarContent";
import { academicsConfig } from "@/config/sidebar/academicsConfig";
import Breadcrumb from "@/components/shared/Breadcrumb";
import LeadershipTeamContent from "@/components/leadership-team/LeadershipTeamContent";

export const metadata: Metadata = {
  title: "Leadership Team | NIH Health - National Institute of Holistic Health",
  description:
    "Meet the leadership team at NIH Health, including Director Principal, Deans, Vice Principals, and Headmistresses dedicated to educational excellence.",
};

export default function LeadershipTeamPage() {
  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={academicsConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb />

      <LeadershipTeamContent />
    </>
  );
}
