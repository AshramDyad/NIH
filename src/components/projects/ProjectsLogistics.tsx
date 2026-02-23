import React from "react";
import { Users, Heart, MapPin, Dumbbell, ShieldCheck } from "lucide-react";

export default function ProjectsLogistics() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">
            Project Logistics & Setup
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mx-auto mt-6 mb-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Target Audience */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute -top-4 -right-4 text-gray-50 opacity-50">
              <Users size={120} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Heart className="text-pink-500 w-5 h-5" /> Target Audience
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Working professionals",
                  "Students",
                  "Elderly individuals",
                  "Corporate employees",
                  "Community members",
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-semibold rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute -top-4 -right-4 text-gray-50 opacity-50">
              <MapPin size={120} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="text-indigo-500 w-5 h-5" /> Location Needs
              </h3>
              <ul className="space-y-2">
                {[
                  "Accessible area",
                  "Parking space",
                  "Quiet peaceful environment",
                  "1500–3000 sq ft space",
                ].map((req, i) => (
                  <li
                    key={i}
                    className="text-gray-600 font-medium text-sm flex items-start gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Staff */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute -top-4 -right-4 text-gray-50 opacity-50">
              <Users size={120} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="text-teal-500 w-5 h-5" /> Required Staff
              </h3>
              <ul className="space-y-2">
                {[
                  "Fitness trainers",
                  "Certified yoga instructor",
                  "Nutritionist",
                  "Licensed counselor",
                  "Receptionist / Administrator",
                  "Cleaning staff",
                ].map((staff, i) => (
                  <li
                    key={i}
                    className="text-gray-600 font-medium text-sm flex items-start gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                    {staff}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Equipment */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute -top-4 -right-4 text-gray-50 opacity-50">
              <Dumbbell size={120} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="text-red-500 w-5 h-5" /> Equipment
              </h3>
              <ul className="space-y-2">
                {[
                  "Gym (treadmills, weights)",
                  "Yoga mats",
                  "Health monitoring devices",
                  "Counseling room furniture",
                  "Computers & booking system",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-600 font-medium text-sm flex items-start gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
