import { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  Award,
  Globe,
  BookOpen,
  Quote,
  Sparkles,
  Users,
  Music,
  Heart,
} from "lucide-react";
import NewsCuttingSection from "@/components/international-conference/NewsCuttingSection";
import GallerySection from "@/components/international-conference/GallerySection";

export const metadata: Metadata = {
  title: "International Conference 2026 | NIH Health Report",
  description:
    "Official report and highlights from the International Conference on Yoga and Holistic Health at Rishikesh.",
};

export default function InternationalConferencePremiumReportPage() {
  return (
    <>
      <Breadcrumb />

      {/* Cinematic Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-zinc-900 border-b border-primary/20">
        <Image
          src="/images/632419928_10232166932288541_6839320354689223216_n.jpg"
          alt="International Conference on Yoga and Holistic Health"
          fill
          className="object-cover object-center opacity-40"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

        <div className="container mx-auto px-4 h-full relative z-10 flex flex-col justify-end pb-12 md:pb-20">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full text-primary font-black text-xs uppercase tracking-[0.3em] border border-primary/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Official Event Report
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight">
              International Conference <br />
              on{" "}
              <span className="text-primary italic">
                Yoga & Holistic Health
              </span>
            </h1>
            <div className="flex flex-wrap gap-8 text-zinc-300 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <span className="font-bold text-lg md:text-xl text-white">
                  February 7th & 8th, 2026
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="font-bold text-lg md:text-xl text-white">
                  Rishikesh, Uttarakhand
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Story Flow */}
      <section className="py-20 md:py-32 bg-zinc-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-12 md:space-y-20">
            {/* Story Card 1: The Event Context */}
            <div className="group relative bg-white rounded-[3rem] p-6 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-zinc-100 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]">
              <div className="absolute top-0 right-0 p-8 text-zinc-100 group-hover:text-primary/10 transition-colors duration-500">
                <Globe className="w-32 h-32 rotate-12" />
              </div>
              <div className="relative z-10 max-w-3xl">
                <p className="text-xl md:text-3xl leading-relaxed text-zinc-800 font-bold italic">
                  &quot;The National Institute of Holistic Health (NIH), Shri
                  Swaminarayan Ashram, in collaboration with SKM Yoga and GLG
                  Yoga, Vietnam, organized the International Conference on Yoga
                  and Holistic Health at Shri Swaminarayan Ashram, Rishikesh, on
                  February 7th and 8th, 2026.&quot;
                </p>
              </div>
            </div>

            {/* Story Card 2 & 3: Inauguration & Guests */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-white rounded-[3rem] p-6 md:p-10 border border-zinc-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary/20">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-zinc-900 mb-6 uppercase tracking-tight italic">
                  The Grand Opening
                </h3>
                <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                  The conference was inaugurated by{" "}
                  <strong>Chief Guest Padmashree Indra Agus Udayan</strong> from
                  Bali, Indonesia.
                </p>
                <div className="pt-6 border-t border-zinc-50">
                  <div className="text-sm font-black text-primary uppercase tracking-widest mb-4">
                    Presided Over By
                  </div>
                  <p className="text-zinc-800 font-bold text-xl leading-snug">
                    Supreme President Sunil Bhagat <br />
                    <span className="text-zinc-400 text-base">
                      Swaminarayan Ashram
                    </span>
                  </p>
                </div>
              </div>

              <div className="bg-secondary rounded-[3rem] p-6 md:p-10 text-white shadow-xl relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                <h3 className="text-2xl font-black mb-8 italic">
                  Special Guests
                </h3>
                <ul className="space-y-6">
                  {[
                    {
                      name: "Dr. Yogrishi Vishvketu",
                      desc: "Founder, Akhand Yoga Institute",
                    },
                    { name: "Yogi Naveen Joshi", desc: "Renowned Yoga Expert" },
                    { name: "Acharya Prasanna", desc: "Spiritual Leader" },
                    { name: "Pinky Sluger", desc: "Expert from France" },
                  ].map((guest, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform" />
                      <div>
                        <div className="font-bold text-lg">{guest.name}</div>
                        <div className="text-white/60 text-sm">
                          {guest.desc}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Story Card 4: Lighting the Lamp */}
            <div className="bg-white rounded-[3rem] p-6 md:p-10 border border-zinc-100 shadow-sm overflow-hidden relative">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="size-20 bg-zinc-950 rounded-2xl flex items-center justify-center shrink-0 shadow-2xl relative group">
                  <div className="absolute inset-0 bg-primary/20 blur-2xl group-hover:blur-3xl transition-all" />
                  <Sparkles className="w-10 h-10 text-primary relative z-10" />
                </div>
                <div className="flex-1 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-black text-zinc-900 leading-tight italic">
                    Lighting the Eternal Lamp
                  </h3>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    The auspicious program was inaugurated with the lighting of
                    the lamp by NIH Chairman <strong>Dr. Vinod Kashyap</strong>,
                    Patron <strong>Ravindra Singh Dawas</strong>,{" "}
                    <strong>Dr. Mahendra Kumar Taneja</strong>,{" "}
                    <strong>Acharya Chandrashekhar Shastri</strong>, and{" "}
                    <strong>Shri Pushkar Mishra</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Story Card 5: Honors & Speakers */}
            <div className="bg-zinc-950 rounded-[3.5rem] p-6 md:p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
                <div className="lg:w-1/3 space-y-8">
                  <div className="w-16 h-1 bg-primary rounded-full" />
                  <h3 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter italic">
                    Honors & <br />
                    Recognition
                  </h3>
                  <p className="text-zinc-400 text-lg leading-loose font-medium">
                    Yogacharyas, teachers, and Naturopaths making outstanding
                    contributions were honored with <strong>Gold Medals</strong>{" "}
                    and <strong>Mementos</strong>.
                  </p>
                </div>
                <div className="lg:w-2/3">
                  <h4 className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-10">
                    Distinguished Speakers
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 text-zinc-300">
                    {[
                      "Dr-Govinda Kumar Trivedi",
                      "Dr. Mahendra Kumar Taneja",
                      "Dr. Shivam Mishra",
                      "Dr. R.P. Singh",
                      "Dr. Alka Gupta (Thailand)",
                      "Mr. Pushkar Mishra",
                      "Mr. Bhaskar Asthana",
                      "Dr. Satyendra Misra",
                      "Dr. Saraswati Kala",
                      "Dr. Sanjay Srivastava",
                      "Dr. Subhash Sarangi",
                    ].map((speaker, i) => (
                      <div key={i} className="flex items-center gap-3 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                        <span className="font-bold group-hover:text-white transition-colors">
                          {speaker}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Story Card 6: Academic & Cultural Fusion */}
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3 bg-white rounded-[3rem] p-6 md:p-10 border border-zinc-100 shadow-sm space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary to-secondary transition-all" />
                <div className="flex items-center gap-4 text-zinc-900 font-black text-2xl tracking-tight">
                  <BookOpen className="w-8 h-8 text-primary" /> Scientific
                  Excellence
                </div>
                <p className="text-zinc-600 text-lg leading-relaxed font-medium">
                  Numerous research scholars presented their innovative research
                  papers, adding academic depth to the holistic health summit.
                </p>
              </div>
              <div className="md:col-span-2 bg-linear-to-br from-primary to-secondary rounded-[3rem] p-6 md:p-10 text-white shadow-xl flex flex-col justify-between group overflow-hidden">
                <Music className="w-12 h-12 mb-8 group-hover:rotate-12 transition-transform duration-500" />
                <div className="space-y-4">
                  <h4 className="text-2xl font-black italic">
                    Cultural Evening
                  </h4>
                  <p className="text-white/80 leading-relaxed font-medium">
                    Dr. Smriti Vaghela presented{" "}
                    <strong>&quot;Krishnapriya Meera&quot;</strong> and her team
                    performed a soul-stirring Hanuman Chalisa.
                  </p>
                </div>
              </div>
            </div>

            {/* Story Card 7: Global Participation */}
            <div className="bg-secondary rounded-[3rem] p-6 md:p-10 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 bg-[url('/images/pattern.png')] bg-repeat" />
              <div className="relative z-10 space-y-10">
                <div className="flex justify-center gap-4">
                  {[Globe, Users, Heart].map((Icon, i) => (
                    <Icon key={i} className="w-10 h-10 text-primary" />
                  ))}
                </div>
                <h3 className="text-3xl md:text-5xl font-black italic">
                  Delegates from 8+ Countries
                </h3>
                <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-medium">
                  Netherlands, Romania, France, Germany, Thailand, Italy,
                  Indonesia, and various parts of India.
                </p>
                <div className="inline-block px-10 py-6 bg-white/5 backdrop-blur-md rounded-4xl border border-white/10 mt-6 shadow-2xl">
                  <p className="text-primary font-black text-2xl md:text-3xl tracking-tight">
                    6:00 AM Daily Yoga @ Ganga Ghats
                  </p>
                  <p className="text-white/50 font-bold uppercase tracking-widest text-xs mt-2">
                    followed by Evening Ganga Aarti
                  </p>
                </div>
              </div>
            </div>

            {/* Story Card 8: Closing & Gratitude */}
            <div className="bg-white rounded-[4rem] p-6 md:p-10 border border-zinc-100 shadow-sm relative z-10 overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <Quote className="w-64 h-64 rotate-180" />
              </div>
              <div className="max-w-3xl space-y-10 relative z-10">
                <h3 className="text-3xl md:text-4xl font-black text-zinc-900 italic">
                  Conclusion & Gratitude
                </h3>
                <div className="prose prose-xl prose-zinc max-w-none space-y-8 text-zinc-600 font-medium leading-relaxed">
                  <p>
                    At the closing ceremony,{" "}
                    <strong>Mrs. Universe Namrata Shukla</strong> presented
                    certificates and honored{" "}
                    <strong>Dr. Pawan Chauhan (NIOS)</strong>, world-renowned{" "}
                    <strong>Yogaguru Dhakaram Ji</strong>,{" "}
                    <strong>Shri Pravendra Dahiya ji</strong>, and{" "}
                    <strong>Dr. Rajeev Kumar</strong>.
                  </p>
                  <p>
                    NIH Chairman <strong>Dr. Vinod Kashyap</strong> thanked all
                    participants and expressed special gratitude to{" "}
                    <strong>Dr. Ishwara Acharya (MDNIY)</strong> for logo
                    support.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 pt-10">
                  <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 group transition-all hover:bg-zinc-900 hover:text-white">
                    <div className="text-4xl font-black text-primary mb-2">
                      78+
                    </div>
                    <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 group-hover:text-primary transition-colors">
                      Seminars Organized
                    </p>
                    <p className="text-zinc-600 font-medium mt-4 group-hover:text-zinc-300">
                      By NIH in the last five years, strengthening the global
                      holistic community.
                    </p>
                  </div>
                  <div className="p-8 bg-primary/5 rounded-[2.5rem] border border-primary/10 flex flex-col justify-center">
                    <p className="text-zinc-800 font-bold leading-relaxed">
                      &quot;Dr. Shivam Mishra, founder of SKM Yoga, provided
                      unexpected support in making the event a success.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Section: Future Events integrated seamlessly */}
            <div className="bg-zinc-950 rounded-[4rem] p-6 md:p-10 text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
              <div className="relative z-10 flex flex-col items-center text-center space-y-12">
                <div className="w-20 h-2 bg-primary rounded-full" />
                <h3 className="text-4xl md:text-6xl font-black italic tracking-tight">
                  The Journey Continues
                </h3>

                <div className="grid md:grid-cols-2 gap-12 w-full max-w-5xl text-left">
                  <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/5 space-y-6 hover:border-primary/50 transition-colors">
                    <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary font-black text-xs uppercase tracking-widest rounded-full">
                      April 25th - 29th
                    </span>
                    <h4 className="text-3xl font-black text-white">
                      #Vietnam Conference
                    </h4>
                    <p className="text-zinc-400 text-lg font-medium leading-relaxed">
                      Jointly organized with NIH and S.K.M. Yoga. We cordially
                      invite you to join this international summit.
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-[3rem] border border-white/5 space-y-6 hover:border-primary/50 transition-colors">
                    <span className="inline-block px-4 py-1.5 bg-zinc-700 text-white font-black text-xs uppercase tracking-widest rounded-full">
                      Dec 18th - 20th, 2026
                    </span>
                    <h4 className="text-3xl font-black text-white">
                      Rishikesh Health Expo
                    </h4>
                    <p className="text-zinc-400 text-lg font-medium leading-relaxed">
                      A grand international conference and health expo at the
                      Shri Swaminarayan Ashram.
                    </p>
                  </div>
                </div>

                <div className="pt-12">
                  <div className="text-zinc-500 font-bold uppercase tracking-[0.5em] text-sm mb-6">
                    Institutional Mark
                  </div>
                  <div className="text-2xl md:text-4xl font-black tracking-tighter uppercase leading-none">
                    National Institute of{" "}
                    <span className="text-primary">Holistic Health</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsCuttingSection />
      <GallerySection />
    </>
  );
}
