import { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import BulletList from "@/components/shared/BulletList";
import Link from "next/link";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "International Conference 2026 | NIH Health",
  description: "Join us for the International Conference on Yoga and Holistic Health 2026 - a global gathering of wellness experts, practitioners, and enthusiasts.",
};

interface PricingTier {
  type: string;
  price: string;
}

const pricingTiers: PricingTier[] = [
  { type: "Without Accomodation", price: "Rs. 2000/-" },
  { type: "Food + Dormitory Accomodation", price: "Rs. 3500/-" },
  { type: "Pvt. Accomodation (Twin Sharing)", price: "Rs. 7500/-" },
  { type: "Single Accomodation", price: "Rs. 12000/-" }
];

const conferenceObjectives: string[] = [
  "To bring a broader awareness among public about the utility of Yoga Holistic Health in treatment of diseases.",
  "To disseminate the existing knowledge of Holistic Health to the practitioners and health workers.",
  "To provide assistance to institute and persons working in the field of Holistic Health.",
  "To strengthen Holistic Health institutes and NGOs to plan, implement a evaluate projects in rural, urban, tribal, slums and other areas in India abroad.",
  "To promote a holistic understanding of health through the integration of Yoga, Ayurveda, and modern wellness practices.",
  "To provide a global platform for researchers, practitioners educators, and health professionals to share knowledge and experiences in yoga and holistic health.",
  "To highlight the role of yoga and holistic therapies in disease prevention, mental well-being, and sustainable health care,",
  "To encourage scientific research, innovation, and evidence-based practices in yoga and holistic health.",
  "To foster international collaboration and networking among institutions and professionals working in health and wellness.",
  "To inspire individuals and communities to adopt healthy, balanced, and mindful lifestyles for overall well-being."
];

export default function InternationalConference2026Page() {
  return (
    <>
      <Breadcrumb />

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">

          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
              International Conference on <span className="text-primary italic">Yoga and Holistic Health</span>
            </h1>
          </div>

          {/* The Conference Section */}
          <div className="mb-8">
            <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6 space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 mb-4">
                The Conference
              </h2>
              <div className="space-y-4 text-zinc-700 leading-relaxed text-base md:text-lg">
                <p>
                  The International Conference on Yoga & Holistic Health-2026 is being organized by National Institute of Holistic Health (NIH) from 07th-08th February, 2026 at Shri Swaminarayan Ashram, Rishikesh, Uttarakhand. <Link href="https://www.swaminarayan.yoga/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.swaminarayan.yoga</Link>
                </p>
                <p>
                  Over 300 Naturopathy, Yoga, Neurotherapy, Electro Homoeopathy, Acupressure, Acupuncture, Chiropathy and other drugless therapy practitioners are expected to attend the conference from India and abroad.
                </p>
                <p>
                  President of India, Prime Minister, Chief Minister of Uttar Pradesh, Chief Minister of Uttarakhand and other Union Ministers, Member of Parliament and many other distinguished VIPs are being requested to grace this Conference.
                </p>
              </div>
            </div>
          </div>

          {/* Introduction Section */}
          <div className="mb-8">
            <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6 space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 mb-4">
                Introduction
              </h2>
              <div className="space-y-4 text-zinc-700 leading-relaxed text-base md:text-lg">
                <p>
                  Health is a state of complete physical, mental, social and spiritual well-being and not merely the absence of disease or infirmity. Holistic Heatlh includes Yoga, Naturopathy, Acupressure, Acupuncture, Neurotherapy. Chiropathy, Electro Homeopathy and other drugless system which are ancient Indian theories and practices, focusing on unifying mind, body, spirit and promoting strength, balance & flexibility.
                </p>
                <p>
                  Health and well being can be influenced by our present lifestyle change and psychological stress.
                </p>
                <p>
                  Holistic Health mainly emphasizes on returning to the nature by correcting our lifestyle by following simple natural laws, application of simple treatments based on the principles.
                </p>
              </div>
            </div>
          </div>

          {/* Objectives of the Conference Section */}
          <div className="mb-8">
            <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 md:p-6 space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 mb-4">
                Objectives of the Conference
              </h2>
              <BulletList items={conferenceObjectives} />
            </div>
          </div>

          {/* Registration Fees Section */}
          <div>
            <div className="bg-secondary/5 rounded-2xl shadow-sm border border-secondary/20 p-4 md:p-6 space-y-8">
              <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 mb-6 text-center">
                Registration Fees
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {pricingTiers.map((tier, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md border border-zinc-200 p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <h3 className="text-lg font-semibold text-zinc-900 mb-4 text-center min-h-[60px] flex items-center justify-center">
                      {tier.type}
                    </h3>
                    <p className="text-2xl md:text-3xl font-black text-primary text-center">
                      {tier.price}
                    </p>
                  </div>
                ))}
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
                  href="/pdfs/BROCHURE ICYH 26 copy new-1.pdf"
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
                <Link href="https://forms.gle/DLCwLUzFjkrYYGMo8" target="_blank">Register</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
