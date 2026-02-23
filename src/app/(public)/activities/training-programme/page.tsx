import React from "react";
import { Metadata } from "next";

import TrainingHero from "@/components/training/TrainingHero";
import TrainingOwnerPhase from "@/components/training/TrainingOwnerPhase";
import TrainingStaffPhase from "@/components/training/TrainingStaffPhase";
import TrainingCoreModules from "@/components/training/TrainingCoreModules";
import TrainingOutcomes from "@/components/training/TrainingOutcomes";

export const metadata: Metadata = {
  title: "Wellness Centre Training Programme | NIH",
  description:
    "Explore our exhaustive, multi-phase training programme for franchise owners and wellness practitioners. Become a Certified Wellness Professional.",
};

export default function TrainingProgrammePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col font-sans">
      <TrainingHero />
      <TrainingOwnerPhase />
      <TrainingStaffPhase />
      <TrainingCoreModules />
      <TrainingOutcomes />
    </main>
  );
}
