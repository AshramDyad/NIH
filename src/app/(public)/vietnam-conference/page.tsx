import { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Award,
  Globe,
  Sparkles,
  Plane,
  Utensils,
  Hotel,
  Car,
  FileText,
  PhoneCall,
  Mail,
  Instagram,
  ChevronRight,
  ShieldCheck,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "5th International Conference on Yoga & Holistic Health | Vietnam | NIH",
  description:
    "Join the 5th International Conference on Yoga and Holistic Health in Vietnam on 16 May & 17 May, 2026. Organized by NIH, Green Living Group, and SKM Yoga.",
};

export default function VietnamConferencePage() {
  const attractions = [
    {
      icon: FileText,
      title: "Paper Presentation",
      desc: "Present and discuss innovative research papers in holistic health.",
    },
    {
      icon: Globe,
      title: "International Speakers",
      desc: "Gain insights from lectures and sessions by global experts.",
    },
    {
      icon: Award,
      title: "International Award",
      desc: "Honoring outstanding contributions to Yoga and Naturopathy.",
    },
    {
      icon: MapPin,
      title: "Local Sightseeing",
      desc: "Explore the breathtaking landscapes and culture of Vietnam.",
    },
    {
      icon: Utensils,
      title: "Indian Food",
      desc: "Enjoy authentic and delicious Indian cuisine throughout the trip.",
    },
    {
      icon: Plane,
      title: "Flights Included",
      desc: "Round trip flights from India to Vietnam are included in the package.",
    },
    {
      icon: Car,
      title: "Taxi / Cab Services",
      desc: "Seamless local transportation and cab services arranged for you.",
    },
    {
      icon: Hotel,
      title: "Premium Hotels",
      desc: "Comfortable and luxurious hotel accommodations & much more.",
    },
  ];

  return (
    <>
      <Breadcrumb />

      {/* Cinematic Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-zinc-900 border-b border-primary/20">
        <Image
          src="/images/marina-lobato-kG7pOXbBfNs-unsplash.jpg"
          alt="Halong Bay Vietnam - International Conference"
          fill
          className="object-cover object-center opacity-60"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

        <div className="container mx-auto px-4 h-full relative z-10 flex flex-col justify-end pb-12 md:pb-20">
          <div className="max-w-4xl space-y-6 animate-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center px-5 py-2.5 bg-secondary/80 backdrop-blur-md rounded-full text-white font-black text-xs md:text-sm uppercase tracking-[0.2em] border border-white/20 shadow-xl">
              <Sparkles className="w-4 h-4 mr-2" />
              Vietnam Calling...
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight shadow-sm">
              5th International Conference <br />
              <span className="text-primary">
                Yoga & Holistic Health
              </span>
            </h1>
            <div className="flex flex-wrap gap-6 text-zinc-300 pt-6">
              <div className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-2xl backdrop-blur-md border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <span className="font-bold text-lg text-white">
                  16 May & 17 May, 2026.
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-2xl backdrop-blur-md border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="font-bold text-lg text-white">Vietnam</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Flow */}
      <section className="py-20 md:py-32 bg-zinc-50 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none">
          <MapPin className="w-96 h-96 right-0" />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="space-y-16 md:space-y-24">
            {/* Attractions Section */}
            <div className="space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/10 text-secondary mb-2">
                  <Globe className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight">
                  Attractions of the{" "}
                  <span className="text-primary italic font-serif">
                    Conference
                  </span>
                </h2>
                <p className="text-lg text-zinc-600 font-medium leading-relaxed">
                  Experience a profound blend of academic excellence and
                  cultural exploration in the beautiful landscapes of Vietnam.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {attractions.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-4xl p-8 border border-zinc-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                      <item.icon className="w-7 h-7 text-secondary group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Organizers Section */}
            <div className="bg-white rounded-[3rem] p-8 md:p-14 border border-zinc-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-primary via-secondary to-primary" />
              <div className="flex items-center gap-4 mb-10">
                <Building className="w-10 h-10 text-primary" />
                <h2 className="text-3xl md:text-4xl font-black text-zinc-900 tracking-tight">
                  Organised In Association With
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="p-8 rounded-4xl bg-zinc-50 border border-zinc-100 flex flex-col items-center justify-center space-y-4 hover:border-primary/30 transition-colors cursor-default">
                  <ShieldCheck className="w-12 h-12 text-secondary mb-2" />
                  <h3 className="text-xl font-bold text-zinc-900">NIH</h3>
                  <p className="text-zinc-500 font-medium">
                    National Institute of Holistic Health
                  </p>
                  <div className="w-12 h-1 bg-primary/20 rounded-full mt-4" />
                  <p className="text-zinc-800 font-bold mt-4">
                    Dr. Vinod Kashyap
                  </p>
                  <p className="text-sm text-zinc-500 font-medium">
                    Chairman, NIH Delhi
                  </p>
                </div>

                <div className="p-8 rounded-4xl bg-zinc-50 border border-zinc-100 flex flex-col items-center justify-center space-y-4 hover:border-secondary/30 transition-colors cursor-default">
                  <Globe className="w-12 h-12 text-secondary mb-2" />
                  <h3 className="text-xl font-bold text-zinc-900">GLG Yoga</h3>
                  <p className="text-zinc-500 font-medium">
                    Green Living Group
                  </p>
                  <div className="w-12 h-1 bg-secondary/20 rounded-full mt-4" />
                  <p className="text-zinc-800 font-bold mt-4">
                    Vietnam Chapter
                  </p>
                </div>

                <div className="p-8 rounded-4xl bg-zinc-50 border border-zinc-100 flex flex-col items-center justify-center space-y-4 hover:border-primary/30 transition-colors cursor-default">
                  <Sparkles className="w-12 h-12 text-secondary mb-2" />
                  <h3 className="text-xl font-bold text-zinc-900">SKM Yoga</h3>
                  <p className="text-zinc-500 font-medium">
                    International Yoga Institute
                  </p>
                  <div className="w-12 h-1 bg-primary/20 rounded-full mt-4" />
                  <p className="text-zinc-800 font-bold mt-4">
                    Dr. Shivam Mishra
                  </p>
                  <p className="text-sm text-zinc-500 font-medium">
                    Founder President, SKM Yoga
                    <br />
                    Vice President-GLG Yoga, Vietnam
                  </p>
                </div>
              </div>
            </div>

            {/* Registration Call to Action */}
            <div className="bg-zinc-950 rounded-[4rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat opacity-10" />
              <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

              <div className="relative z-10 grid lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-3 space-y-10">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black italic tracking-tight leading-tight">
                      Last Date for <br />{" "}
                      <span className="text-primary">Registration</span>
                    </h2>
                    <div className="inline-block mt-4 text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-400">
                      5th March, 2026
                    </div>
                  </div>

                  <hr className="border-white/10" />

                  <div className="space-y-6">
                    <p className="text-xl text-zinc-400 font-medium">
                      Contact for more details & to secure your spot:
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="tel:+919953882605"
                        className="flex items-center gap-3 bg-white/5 hover:bg-white/10 px-6 py-4 rounded-2xl border border-white/10 transition-colors group"
                      >
                        <PhoneCall className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                        <span className="font-bold text-lg">9953882605</span>
                      </a>
                      <a
                        href="tel:+919311817707"
                        className="flex items-center gap-3 bg-white/5 hover:bg-white/10 px-6 py-4 rounded-2xl border border-white/10 transition-colors group"
                      >
                        <PhoneCall className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                        <span className="font-bold text-lg">9311817707</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-10 flex flex-col justify-center space-y-8">
                    <div className="bg-primary text-white text-center py-4 rounded-2xl font-black text-2xl uppercase tracking-widest shadow-lg shadow-primary/30">
                      Book Now
                    </div>

                    <div className="space-y-6 text-zinc-300">
                      <p className="font-bold text-xl text-white border-l-4 border-primary pl-4">
                        Dr. Vinod Kashyap{" "}
                        <span className="block text-sm font-medium text-zinc-400 mt-1">
                          Chairman-NIH
                        </span>
                      </p>

                      <div className="space-y-4 pt-4 border-t border-white/10">
                        <a
                          href="https://www.nihh.co.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 hover:text-white transition-colors group"
                        >
                          <Globe className="w-5 h-5 text-zinc-500 group-hover:text-primary" />
                          <span className="font-medium">www.nihh.co.in</span>
                        </a>
                        <a
                          href="https://instagram.com/nih_delhi"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 hover:text-white transition-colors group"
                        >
                          <Instagram className="w-5 h-5 text-zinc-500 group-hover:text-primary" />
                          <span className="font-medium">@nih_delhi</span>
                        </a>
                        <a
                          href="mailto:delhinih@gmail.com"
                          className="flex items-center gap-4 hover:text-white transition-colors group"
                        >
                          <Mail className="w-5 h-5 text-zinc-500 group-hover:text-primary" />
                          <span className="font-medium">
                            delhinih@gmail.com
                          </span>
                        </a>
                      </div>
                    </div>

                    <Link
                      href="/"
                      className="inline-flex items-center justify-center gap-2 text-primary font-bold pt-4 border-t border-white/10 hover:text-white transition-colors"
                    >
                      Return to Homepage <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
