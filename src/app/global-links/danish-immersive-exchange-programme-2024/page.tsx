import { Metadata } from "next";
import FloatingSidebar from "@/components/shared/FloatingSidebar";
import SidebarContent from "@/components/shared/SidebarContent";
import { globalLinksConfig } from "@/config/sidebar/globalLinksConfig";
import Breadcrumb from "@/components/shared/Breadcrumb";
import DanishImmersiveExchangeContent from "@/components/danish-immersive-exchange-programme-2024/DanishImmersiveExchangeContent";

// Inline type for page props (empty for this page)
type PageProps = {};

export const metadata: Metadata = {
  title: "Danish Immersive Exchange Programme 2024 | NIH Health - National Institute of Holistic Health",
  description: "Danish Immersive Exchange Programme 2024 between Delhi Public School, Gurgaon and Aalborg Katedralskole, Denmark focusing on social inclusion and environment protection.",
};

export default function DanishImmersiveExchangePage(_props: PageProps) {
  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={globalLinksConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb />

      <DanishImmersiveExchangeContent />
    </>
  );
}
