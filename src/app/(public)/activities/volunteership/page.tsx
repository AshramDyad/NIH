import React from "react";
import VolunteershipHero from "@/components/volunteership/VolunteershipHero";
import VolunteershipTarget from "@/components/volunteership/VolunteershipTarget";
import VolunteershipAreas from "@/components/volunteership/VolunteershipAreas";
import VolunteershipTraining from "@/components/volunteership/VolunteershipTraining";
import VolunteershipBenefits from "@/components/volunteership/VolunteershipBenefits";

export const metadata = {
  title: "Volunteership Programme | NIH",
  description:
    "Join the Community Wellness Volunteership Programme to promote health awareness, support large-scale community events, and develop powerful leadership skills while making a real difference.",
};

export default function VolunteershipPage() {
  return (
    <main className="min-h-screen bg-white">
      <VolunteershipHero />
      <VolunteershipTarget />
      <VolunteershipAreas />
      <VolunteershipTraining />
      <VolunteershipBenefits />
    </main>
  );
}
