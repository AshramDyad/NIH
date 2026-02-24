import React from "react";
import { Metadata } from "next";

import InternshipHero from "@/components/internship/InternshipHero";
import InternshipDetails from "@/components/internship/InternshipDetails";
import InternshipDepartments from "@/components/internship/InternshipDepartments";
import InternshipOutcomes from "@/components/internship/InternshipOutcomes";
import InternshipBenefits from "@/components/internship/InternshipBenefits";

export const metadata: Metadata = {
  title: "Holistic Wellness Internship | NIH",
  description:
    "Bridge the gap between academic theory and industry reality. Apply for our immersive Holistic Wellness Centre Internship Programme.",
};

export default function InternshipProgrammePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col font-sans">
      <InternshipHero />
      <InternshipDetails />
      <InternshipDepartments />
      <InternshipOutcomes />
      <InternshipBenefits />
    </main>
  );
}
