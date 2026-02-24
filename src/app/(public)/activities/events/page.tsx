import React from "react";
import EventsHero from "@/components/events/EventsHero";
import EventsMajor from "@/components/events/EventsMajor";
import EventsPrograms from "@/components/events/EventsPrograms";
import EventsAnnual from "@/components/events/EventsAnnual";
import EventsImpact from "@/components/events/EventsImpact";

export const metadata = {
  title: "Events & Programs | NIH",
  description:
    "Explore our comprehensive calendar of holistic wellness events, from massive international conferences to local, life-changing workshops.",
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <EventsHero />
      <EventsMajor />
      <EventsPrograms />
      <EventsAnnual />
      <EventsImpact />
    </main>
  );
}
