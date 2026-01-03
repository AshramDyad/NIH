import { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Link from "next/link";
import BulletList from "@/components/shared/BulletList";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "International Conference 2026 | NIH Health",
  description: "Join us for the International Conference on Yoga and Holistic Health 2026 - a global gathering of wellness experts, practitioners, and enthusiasts.",
};

export default function InternationalConference2026Page() {
  const conferenceHighlightsItems = [
    "Keynote speeches from renowned international yoga and wellness experts",
    "Interactive workshops on advanced yoga techniques and holistic therapies",
    "Research presentations on evidence-based yoga practices",
    "Networking opportunities with health professionals and wellness practitioners",
    "Cultural programs and guided meditation sessions"
  ];

  const whoShouldAttendItems = [
    "Yoga practitioners and instructors",
    "Healthcare professionals",
    "Holistic wellness coaches",
    "Research scholars and students",
    "Psychologists and counselors",
    "Health enthusiasts and wellness seekers"
  ];

  return (
    <>
      <Breadcrumb />

      <section className="sm:py-16 py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-4 mb-8 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-black text-zinc-900 max-w-3xl">
              International Conference on <span className="text-primary italic">Yoga and Holistic Health</span> – 2026
            </h1>
            <p className="text-zinc-700 leading-relaxed text-base md:text-lg">
              We are thrilled to announce the International Conference on Yoga and Holistic Health 2026, a prestigious event bringing together global experts, practitioners, and wellness enthusiasts to explore the transformative power of yoga and holistic health practices.
            </p>
          </div>

          <div className="flex lg:flex-row flex-col gap-6">
            {/* Conference Highlights Section */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6 space-y-4">
                <p className="text-xl font-bold text-zinc-900">
                  Conference <span className="text-secondary italic">Highlights</span>
                </p>
                <BulletList items={conferenceHighlightsItems} />
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              {/* Who Should Attend Section */}
              <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6 space-y-4">
                <p className="text-xl font-bold text-zinc-900">
                  Who Should <span className="text-secondary italic">Attend</span>
                </p>
                <BulletList items={whoShouldAttendItems} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sm:py-16 py-12 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center text-white space-y-6">
            <h2 className="text-4xl md:text-5xl font-black">
              <span className="text-primary italic">Register </span>Now</h2>
            <p className="max-w-2xl mx-auto text-lg text-white/80 leading-relaxed">
              Secure your place at this transformative conference. Early bird registration opens soon.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-black capitalize shadow-lg transition-colors duration-300 cursor-pointer">
                <Link
                  href="/pdfs/brochure-in-sequence-2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center justify-center gap-3"
                  aria-label="Download Conference Brochure PDF"
                >
                  <Download className="w-6 h-6" />
                  <span>Download Brochure</span>
                </Link>
              </button>
              <button className="bg-white hover:bg-white/90 text-secondary px-10 py-4 rounded-full font-black capitalize shadow-lg transition-colors duration-300 cursor-pointer">
                <Link href="/contact">Register</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
