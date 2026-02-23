import React from "react";
import { Metadata } from "next";

import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsObjectives from "@/components/projects/ProjectsObjectives";
import ProjectsServices from "@/components/projects/ProjectsServices";
import ProjectsLogistics from "@/components/projects/ProjectsLogistics";
import ProjectsMarketing from "@/components/projects/ProjectsMarketing";

export const metadata: Metadata = {
  title: "Integrated Wellness Centre Project | NIH",
  description:
    "Explore our comprehensive project plan for an Integrated Wellness Centre focusing on holistic health, preventive care, and community wellbeing.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <ProjectsHero />
      <ProjectsObjectives />
      <ProjectsServices />
      <ProjectsLogistics />
      <ProjectsMarketing />
    </main>
  );
}
