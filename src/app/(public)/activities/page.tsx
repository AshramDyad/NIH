import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl text-center space-y-6">
        <div className="relative w-60 h-24 mx-auto mb-4">
          <Image
            src="/logo.png"
            alt="NIH Logo"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Our Activities</h1>
        <p className="text-gray-600 text-lg">
          Discover our range of health and wellness activities. Detailed
          schedule and information coming soon.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
