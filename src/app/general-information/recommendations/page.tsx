import { Metadata } from "next";
import FloatingSidebar from "@/components/shared/FloatingSidebar";
import SidebarContent from "@/components/shared/SidebarContent";
import { generalInformationConfig } from "@/config/sidebar/generalInformationConfig";
import Breadcrumb from "@/components/shared/Breadcrumb";
import RecommendationsContent from "@/components/recommendations/RecommendationsContent";

export const metadata: Metadata = {
  title:
    "Recommendations | NIH Health - National Institute of Holistic Health",
  description:
    "Parent guidelines and recommendations for students covering daily routines, study materials, health protocols, and balanced development activities.",
};

export default function RecommendationsPage() {
  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={generalInformationConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb />

      <RecommendationsContent />
    </>
  );
}
