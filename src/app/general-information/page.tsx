import { Metadata } from "next";
import FloatingSidebar from "@/components/shared/FloatingSidebar";
import SidebarContent from "@/components/shared/SidebarContent";
import { generalInformationConfig } from "@/config/sidebar/generalInformationConfig";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Link from "next/link";
import { FaClipboardList, FaLightbulb, FaFileExport, FaBus, FaShieldAlt, FaUserFriends } from "react-icons/fa";

export const metadata: Metadata = {
  title:
    "General Information | NIH Health - National Institute of Holistic Health",
  description:
    "Access general information about NIH Health including school rules, recommendations, withdrawals, bus information, and parent representative details.",
};

export default function GeneralInformationPage() {
  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={generalInformationConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb />

      {/* Hero Section */}
      <section className="relative sm:py-16 py-12">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
              School <span className="text-primary italic">Information</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Info Cards Grid */}
      <section className="sm:py-16 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* School Rules Card */}
            <Link href="/general-information/school-rules" className="group">
              <div className="relative bg-white rounded-2xl sm:p-6 p-4 shadow-sm border border-zinc-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-primary/10 rounded-full blur-2xl transition-all duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                    <FaClipboardList className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 mb-2 transition-colors duration-300">
                    School Rules
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Comprehensive guidelines for students covering attendance,
                    uniform, behavior, and disciplinary policies.
                  </p>
                </div>
              </div>
            </Link>

            {/* Recommendations Card */}
            <Link href="/general-information/recommendations" className="group">
              <div className="relative bg-white rounded-2xl sm:p-6 p-4 shadow-sm border border-zinc-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-secondary/10 rounded-full blur-2xl transition-all duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                    <FaLightbulb className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 mb-2 transition-colors duration-300">
                    Recommendations
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Guidelines and best practices for students and parents to
                    follow.
                  </p>
                </div>
              </div>
            </Link>

            {/* Withdrawals Card */}
            <Link href="/general-information/withdrawals" className="group">
              <div className="relative bg-white rounded-2xl sm:p-6 p-4 shadow-sm border border-zinc-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-rose/10 rounded-full blur-2xl transition-all duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                    <FaFileExport className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 mb-2 transition-colors duration-300">
                    Withdrawals
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Information about withdrawal procedures and documentation
                    requirements.
                  </p>
                </div>
              </div>
            </Link>

            {/* Bus Information Card */}
            <Link href="/general-information/bus-information" className="group">
              <div className="relative bg-white rounded-2xl sm:p-6 p-4 shadow-sm border border-zinc-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-emerald/10 rounded-full blur-2xl transition-all duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                    <FaBus className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 mb-2 transition-colors duration-300">
                    Bus Information
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    School bus routes, schedules, and transportation guidelines.
                  </p>
                </div>
              </div>
            </Link>

            {/* School Bus Rules Card */}
            <Link href="/general-information/school-bus-rules" className="group">
              <div className="relative bg-white rounded-2xl sm:p-6 p-4 shadow-sm border border-zinc-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-violet/10 rounded-full blur-2xl transition-all duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                    <FaShieldAlt className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 mb-2 transition-colors duration-300">
                    School Bus Rules
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Transportation rules and student conduct expectations on
                    school buses.
                  </p>
                </div>
              </div>
            </Link>

            {/* Parents Representatives Card */}
            <Link href="/general-information/elected-parents-representatives" className="group">
              <div className="relative bg-white rounded-2xl sm:p-6 p-4 shadow-sm border border-zinc-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-amber/10 rounded-full blur-2xl transition-all duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                    <FaUserFriends className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 mb-2 transition-colors duration-300">
                    Elected Parents Representatives
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Information about parent-teacher representatives and contact
                    details.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
