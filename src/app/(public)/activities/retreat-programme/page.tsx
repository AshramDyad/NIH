export const metadata = {
  title: "Holistic Wellness Retreat Programme | NIH",
  description:
    "Join the Rebalance & Renew 5-Day Holistic Wellness Retreat designed to restore physical, mental, and emotional balance.",
};

import RetreatHero from "@/components/retreat/RetreatHero";
import RetreatSchedule from "@/components/retreat/RetreatSchedule";
import RetreatComponents from "@/components/retreat/RetreatComponents";
import RetreatDetails from "@/components/retreat/RetreatDetails";
import RetreatCertificationCTA from "@/components/retreat/RetreatCertificationCTA";

export default function RetreatProgrammePage() {
  return (
    <main className="min-h-screen bg-white">
      <RetreatHero />
      <RetreatSchedule />
      <RetreatComponents />
      <RetreatDetails />
      <RetreatCertificationCTA />
    </main>
  );
}
