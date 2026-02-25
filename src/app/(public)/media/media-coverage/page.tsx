import React from "react";
import { getPublicMediaCoverage } from "@/app/actions/media-coverage";
import MediaCoverageGrid from "@/app/(public)/media/media-coverage/MediaCoverageGrid";

export const metadata = {
  title: "Media Coverage - National Institute of Health",
  description: "Explore our media coverage, press releases, and news at NIH.",
};

export default async function MediaCoveragePage() {
  const images = await getPublicMediaCoverage();

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 relative inline-block">
            Media Coverage
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            Explore news, press releases, and media features about the National
            Institute of Health.
          </p>
        </div>

        <MediaCoverageGrid images={images} />
      </div>
    </div>
  );
}
