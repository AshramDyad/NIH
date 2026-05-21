import React from "react";
import { Metadata } from "next";

import AdmissionsHero from "@/components/admissions/AdmissionsHero";
import CourseBrochureSections from "@/components/admissions/CourseBrochureSections";

export const metadata: Metadata = {
  title: "Certificate Course in Holistic Health | NIH Admissions",
  description:
    "Apply for NIH's 2026 Certificate Course in Holistic Health. Review the one-month CCH course details, syllabus, eligibility, benefits, and student facilities.",
};

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col font-sans">
      <AdmissionsHero />
      <CourseBrochureSections />
    </main>
  );
}
