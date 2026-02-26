import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  CalendarDays,
  MapPin,
  Clock,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function EventsHero() {
  return (
    <section className="relative w-full pt-20 pb-20 md:pt-28 md:pb-32 bg-linear-to-b from-yellow-50/80 to-white overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-2xl lg:pr-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-8 font-bold tracking-wide text-sm shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-shadow">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Learning & Growth</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-secondary leading-[1.05] mb-8 tracking-tight">
              Holistic Health <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-b from-primary to-yellow-200">
                Events & Programs
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium mb-10">
              From massive international conferences to local wellness
              workshops—our calendar is driven by a profound mission to develop,
              educate, and collaborate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                href="/contact"
                className="bg-primary text-white lg:px-8 px-6 lg:py-4 py-3 rounded-full font-bold transition-all flex items-center gap-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] justify-center"
              >
                Partner With Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Column - Visual Composition */}
          <div className="relative w-full flex items-center justify-center lg:justify-end pt-8 lg:pt-0">
            {/* Main Floating Event Card (Foreground) */}
            <div className="relative z-20 w-full sm:w-[450px] bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_60px_rgb(0,0,0,0.08)] border border-gray-100 transform transition-all duration-500">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-blue-100 text-blue-700 p-3 md:p-4 rounded-2xl">
                  <CalendarDays className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 bg-opacity-80 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider">
                  Upcoming Call
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2 leading-tight">
                International Conference on Yoga & Holistic Health
              </h3>
              <p className="text-gray-500 text-xs md:text-sm font-medium mb-6">
                Annual gathering of wellness professionals, students, and
                researchers.
              </p>

              <div className="space-y-3 mb-6 bg-gray-50 p-4 rounded-2xl">
                <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>09:00 AM - 05:00 PM (EST)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Ho Chi Minh City</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64",
                  ].map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt={`Attendee ${i + 1}`}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                  ))}
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] md:text-xs font-bold text-gray-500 z-10">
                    +1k
                  </div>
                </div>
                <Link
                  href="#register"
                  className="text-primary font-bold text-sm md:text-base transition-colors flex items-center gap-1"
                >
                  Reserve <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
