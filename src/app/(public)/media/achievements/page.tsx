import React from "react";
import Image from "next/image";
import { getPublicAchievements } from "@/app/actions/achievements";

export const metadata = {
  title: "Achievements - National Institute of Health",
  description:
    "Explore our notable achievements, awards, and milestones at NIH.",
};

export default async function AchievementsPage() {
  const achievements = await getPublicAchievements();

  // Only display active achievements to the public
  const activeAchievements = achievements.filter((a) => a.is_active);

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 relative inline-block">
            Achievements
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            Explore our notable achievements, awards, and milestones at the
            National Institute of Health.
          </p>
        </div>

        {/* Gallery Masonry */}
        {activeAchievements.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
            {activeAchievements.map((img) => (
              <div
                key={img.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 border border-gray-100 break-inside-avoid"
              >
                <div className="relative w-full bg-zinc-50 flex justify-center items-center">
                  <Image
                    src={img.image_url}
                    alt={img.title || "NIH Achievement Image"}
                    width={800}
                    height={1200}
                    className="w-full h-auto transition-transform duration-300"
                    unoptimized
                  />
                </div>

                {/* Title Section — only rendered when title exists */}
                {img.title && (
                  <div className="p-4 flex items-center justify-start border-t border-gray-50 bg-white">
                    <h3 className="text-gray-800 font-semibold text-lg line-clamp-2">
                      {img.title}
                    </h3>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100 text-center px-4">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No Achievements Yet
            </h3>
            <p className="text-gray-500 max-w-sm">
              We are currently updating our achievements gallery. Please check
              back later!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
