import React from "react";
import { Metadata } from "next";

import FranchiseHero from "@/components/franchise/FranchiseHero";
import FranchiseModels from "@/components/franchise/FranchiseModels";
import FranchiseRevenue from "@/components/franchise/FranchiseRevenue";
import FranchiseSupport from "@/components/franchise/FranchiseSupport";
import FranchiseValueProps from "@/components/franchise/FranchiseValueProps";

export const metadata: Metadata = {
  title: "Wellness Centre Franchise Opportunity | NIH",
  description:
    "Explore our holistic wellness center franchise models focusing on preventive healthcare, fitness, and community wellbeing.",
};

export default function FranchisePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <FranchiseHero />
      <FranchiseModels />
      <FranchiseRevenue />
      <FranchiseSupport />
      <FranchiseValueProps />
    </main>
  );
}
