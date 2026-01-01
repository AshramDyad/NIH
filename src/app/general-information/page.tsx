import { Metadata } from "next";
import FloatingSidebar from "@/components/shared/FloatingSidebar";
import SidebarContent from "@/components/shared/SidebarContent";
import { generalInformationConfig } from "@/config/sidebar/generalInformationConfig";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Link from "next/link";

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
              <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-zinc-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2v12a2 2 0 01-2 2h-2"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 21l14-14"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 mb-2 group-hover:text-primary transition-colors duration-300">
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
            <div className="group opacity-60 cursor-not-allowed">
              <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-zinc-100 h-full">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-secondary/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944c0 5.251-2.836 9.258-6.811 10.558C5.421 20.601 2.878 18.918 2.649 15.878c-.085-1.518.492-3.02 1.476-3.824.986.987-1.554 2.758-3.352 4.613-4.491l-.506-.506"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 4.477 2 10 4.477 10-10S17.523 2 12 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 mb-2">
                    Recommendations
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Guidelines and best practices for students and parents to
                    follow.
                  </p>
                  <div className="mt-4 inline-flex items-center px-3 py-1 bg-zinc-100 rounded-full text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>

            {/* Withdrawals Card */}
            <div className="group opacity-60 cursor-not-allowed">
              <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-zinc-100 h-full">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-rose/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-rose/10 rounded-2xl flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-rose-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4 4m4-4v12"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.05 3.25a7.5 7.5 0 11-6.42 1.48 7.5 7.5 0 11-7.06 2.47"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 21v-7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 mb-2">
                    Withdrawals
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Information about withdrawal procedures and documentation
                    requirements.
                  </p>
                  <div className="mt-4 inline-flex items-center px-3 py-1 bg-zinc-100 rounded-full text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>

            {/* Bus Information Card */}
            <div className="group opacity-60 cursor-not-allowed">
              <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-zinc-100 h-full">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-emerald/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-emerald/10 rounded-2xl flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4-4m0 6h.01M12 21l-8.5-8.5M18.5 12.5L12 21l-6.5-6.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 mb-2">
                    Bus Information
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    School bus routes, schedules, and transportation guidelines.
                  </p>
                  <div className="mt-4 inline-flex items-center px-3 py-1 bg-zinc-100 rounded-full text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>

            {/* School Bus Rules Card */}
            <div className="group opacity-60 cursor-not-allowed">
              <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-zinc-100 h-full">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-violet/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-violet/10 rounded-2xl flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-violet-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2l-4-4m-4 4l2 2m-6-4l-2 2"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 2L2 7l10 5 10-5-1m0 10l-2-2m-8.5-8.5L12 2l8.5 8.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 mb-2">
                    School Bus Rules
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Transportation rules and student conduct expectations on
                    school buses.
                  </p>
                  <div className="mt-4 inline-flex items-center px-3 py-1 bg-zinc-100 rounded-full text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>

            {/* Parents Representatives Card */}
            <div className="group opacity-60 cursor-not-allowed">
              <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-zinc-100 h-full">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-amber/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-amber/10 rounded-2xl flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857 17 17V4H4v12a17 17 0 0017 17h.004"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 10a2 2 0 114 4m-4-8a2 2 0 114 4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 mb-2">
                    Elected Parents Representatives
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Information about parent-teacher representatives and contact
                    details.
                  </p>
                  <div className="mt-4 inline-flex items-center px-3 py-1 bg-zinc-100 rounded-full text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    Coming Soon
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
