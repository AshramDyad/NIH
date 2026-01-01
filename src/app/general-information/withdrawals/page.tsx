import { Metadata } from "next";
import WithdrawalsContent from "@/components/withdrawals/WithdrawalsContent";
import FloatingSidebar from "@/components/shared/FloatingSidebar";
import SidebarContent from "@/components/shared/SidebarContent";
import { generalInformationConfig } from "@/config/sidebar/generalInformationConfig";
import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "Withdrawals | NIH Health",
  description:
    "Information about withdrawal procedures, transfer certificates, and refund policies for students.",
};

export default function WithdrawalsPage() {
  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={generalInformationConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb />

      <WithdrawalsContent />
    </>
  );
}
