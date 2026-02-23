import Image from "next/image";
import { Metadata } from "next";
import FloatingSidebar from "@/components/shared/FloatingSidebar";
import SidebarContent from "@/components/shared/SidebarContent";
import { secretaryConfig } from "@/config/sidebar/secretaryConfig";
import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "National Secretary | NIH - National Institute of Holistic Health",
  description:
    "Read the message from our National Secretary about NIH's vision, progress, and commitment to holistic health and wellness.",
};

export default function SecretaryPage() {
  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={secretaryConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb />

      {/* Main Content Section */}
      <section className="bg-white sm:py-16 py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900">
              National Secretary{" "}
              <span className="text-primary italic">MESSAGE</span>
            </h2>
          </div>

          {/* Tab/Section Header */}
          <div className="mb-8">
            <div className="inline-block bg-primary/10 border-l-4 border-primary px-6 py-3 rounded-r-lg">
              <h2 className="text-secondary sm:text-xl text-lg font-bold">
                About the National Secretary
              </h2>
            </div>
          </div>

          {/* Content Card */}
          <div className="bg-primary/10 rounded-2xl p-4 sm:p-6 shadow-sm border border-primary/10">
            <div className="flex flex-col gap-10">
              {/* Profile Header: Image + Name/Designation */}
              <div className="flex flex-col md:flex-row items-center md:items-center sm:gap-10 gap-6 border-b border-primary/10 pb-10">
                {/* Profile Image */}
                <div className="shrink-0">
                  <div className="relative size-36 md:size-56">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-6 border-white shadow-lg ring-4 ring-primary/20">
                      <Image
                        src="/images/Secretary.jpeg"
                        alt="Anurag Kashyap - National Secretary NIH"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Name and Designation */}
                <div className="text-center md:text-left">
                  <h3 className="text-3xl md:text-5xl font-black text-secondary mb-3">
                    Anurag Kashyap
                  </h3>
                  <p className="text-xl font-bold text-primary mb-2">
                    (National Secretary-NIH)
                  </p>
                  <p className="text-base font-bold text-black opacity-80">
                    IT Head, Social Media Promoter, Graphics Designer
                  </p>
                </div>
              </div>

              {/* Message Content */}
              <div className="space-y-6 text-gray-700 leading-relaxed max-w-5xl mx-auto md:mx-0">
                <div className="flex items-start gap-3">
                  <p className="text-lg text-black/90">
                    <strong>Dear Members, Partners, and Friends,</strong>
                  </p>
                </div>

                <p className="sm:text-lg text-base">
                  As the National Secretary of NIH, it is both an honor to share
                  with you the progress we have made over the past year and our
                  vision for the future. Our organization continues to grow, and
                  it is through the dedication of members like you that we have
                  been able to fulfil our mission with such vigour.
                </p>

                <p className="sm:text-lg text-base">
                  This year, we have focused on strengthening our core
                  activities, expanding our services, and enhancing the impact
                  of our programs. We have seen remarkable progress in
                  International Conference on Yoga & Holistic Health 2026, held
                  on 07-08 February, 2026.
                </p>

                <p className="sm:text-lg text-base">
                  We are continuously working towards these objectives, and our
                  team is dedicated to ensuring that our goals are met with
                  precision, transparency, and efficiency. We understand the
                  importance of accountability and it remains a guiding
                  principle in everything we do.
                </p>

                <p className="sm:text-lg text-base">
                  I would like to extend my heartfelt gratitude to the
                  opportunities that lie before us. We are committed to
                  fostering innovation, adaptation, and establishing change in
                  the communities we serve. We remain open to feedback and
                  encourage everyone involved in our organization to continue
                  engaging with us as we move into the future together.
                </p>

                <p className="sm:text-lg text-base">
                  I would also like to extend my sincere gratitude to all
                  members for your continued trust and support. Together, we
                  will continue to make a positive difference.
                </p>

                <div className="pt-5 border-t border-primary/10">
                  <p className="font-semibold text-gray-600">Thank you,</p>
                  <div className="mt-2">
                    <p className="font-bold text-lg text-secondary">
                      Sincerely,
                    </p>
                    <p className="font-black text-xl sm:text-2xl text-primary mt-1">
                      Anurag Kashyap
                    </p>
                    <p className="text-sm font-bold text-black/60 mt-1">
                      National Secretary, NIH
                    </p>
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
