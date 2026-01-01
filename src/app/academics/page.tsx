import { Metadata } from "next";
import FloatingSidebar from "@/components/shared/FloatingSidebar";
import SidebarContent from "@/components/shared/SidebarContent";
import { academicsConfig } from "@/config/sidebar/academicsConfig";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Link from "next/link";
import { FaUsers, FaGraduationCap, FaUserTie, FaClipboardCheck, FaTrophy, FaHeart, FaChalkboardTeacher } from "react-icons/fa";

export const metadata: Metadata = {
  title:
    "Academics | NIH Health - National Institute of Holistic Health",
  description:
    "Explore the academic structure at NIH Health, including leadership team, academic team, class representatives, coordinators, and other academic programmes.",
};

export default function AcademicsPage() {
  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={academicsConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb />



      {/* Info Cards Grid */}
      <section className="sm:py-16 py-12 bg-white">
        <div className="container mx-auto px-4">

          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
              <span className="text-primary italic">Academics</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
            {/* Leadership Team Card */}
            <Link href="/academics/leadership-team" className="group">
              <div className="relative bg-white rounded-2xl sm:p-6 p-4 shadow-sm border border-zinc-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-primary/10 rounded-full blur-2xl transition-all duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                    <FaUsers className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 mb-2 transition-colors duration-300">
                    Leadership Team
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Meet our distinguished leadership team including Director Principal, Deans, and Vice Principals.
                  </p>
                </div>
              </div>
            </Link>

            {/* Academic Team Card */}
            <Link href="/academics/academic-team" className="group">
              <div className="relative bg-white rounded-2xl sm:p-6 p-4 shadow-sm border border-zinc-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-secondary/10 rounded-full blur-2xl transition-all duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                    <FaGraduationCap className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 mb-2 transition-colors duration-300">
                    Academic Team
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Our dedicated academic team committed to excellence in teaching and learning.
                  </p>
                </div>
              </div>
            </Link>

            {/* Class Representatives Card */}
            <Link href="/academics/class-representatives" className="group">
              <div className="relative bg-white rounded-2xl sm:p-6 p-4 shadow-sm border border-zinc-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-rose/10 rounded-full blur-2xl transition-all duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                    <FaUserTie className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 mb-2 transition-colors duration-300">
                    Class Representatives
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Student representatives who serve as leaders and role models in their classes.
                  </p>
                </div>
              </div>
            </Link>

            {/* Co-ordinators Card */}
            <Link href="/academics/co-ordinators" className="group">
              <div className="relative bg-white rounded-2xl sm:p-6 p-4 shadow-sm border border-zinc-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-emerald/10 rounded-full blur-2xl transition-all duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                    <FaClipboardCheck className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 mb-2 transition-colors duration-300">
                    Co-ordinators
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Academic coordinators managing various departments and programmes.
                  </p>
                </div>
              </div>
            </Link>

            {/* Extra Duty List Card */}
            <Link href="/academics/extra-duty-list" className="group">
              <div className="relative bg-white rounded-2xl sm:p-6 p-4 shadow-sm border border-zinc-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-violet/10 rounded-full blur-2xl transition-all duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                    <FaChalkboardTeacher className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 mb-2 transition-colors duration-300">
                    Extra Duty List
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Staff assigned for additional responsibilities and special duties.
                  </p>
                </div>
              </div>
            </Link>

            {/* Hall of Fame Card */}
            <Link href="/academics/hall-of-fame" className="group">
              <div className="relative bg-white rounded-2xl sm:p-6 p-4 shadow-sm border border-zinc-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-amber/10 rounded-full blur-2xl transition-all duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                    <FaTrophy className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 mb-2 transition-colors duration-300">
                    Hall of Fame
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Celebrating exceptional achievements and distinguished alumni.
                  </p>
                </div>
              </div>
            </Link>

            {/* Inclusion Programme Card */}
            <Link href="/academics/inclusion-programme" className="group">
              <div className="relative bg-white rounded-2xl sm:p-6 p-4 shadow-sm border border-zinc-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-blue/10 rounded-full blur-2xl transition-all duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                    <FaHeart className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 mb-2 transition-colors duration-300">
                    Inclusion Programme
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Special education programmes supporting diverse learning needs.
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
