import React from "react";
import HeroSection from "@/components/careers/HeroSection";
import DepartmentsGrid from "@/components/careers/DepartmentsGrid";
import InternshipsSection from "@/components/careers/InternshipsSection";
import BenefitsSection from "@/components/careers/BenefitsSection";
import RecruitmentProcess from "@/components/careers/RecruitmentProcess";
import CallToAction from "@/components/careers/CallToAction";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <HeroSection />
      <DepartmentsGrid />
      <InternshipsSection />
      <BenefitsSection />
      <RecruitmentProcess />
      <CallToAction />
    </main>
  );
}
