import React from "react";
import { Metadata } from "next";

import AdmissionsHero from "@/components/admissions/AdmissionsHero";
import WhyChooseNIH from "@/components/admissions/WhyChooseNIH";
import AdmissionProcess from "@/components/admissions/AdmissionProcess";

export const metadata: Metadata = {
  title: "Admissions | National Institute of Holistic Health",
  description:
    "Join the National Institute of Holistic Health. Explore our admission process for CCH, Yoga, and Naturopathy courses.",
};

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col font-sans">
      <AdmissionsHero />
      <WhyChooseNIH />
      <AdmissionProcess />
    </main>
  );
}
