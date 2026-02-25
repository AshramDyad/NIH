"use client";

import React, { useState } from "react";
import GalleryTabPanel from "@/components/admin/gallery/GalleryTabPanel";

// International Gallery actions
import {
  getAllGalleryImages as fetchInternational,
  createGalleryImage as createInternational,
  deleteGalleryImage as deleteInternational,
  updateGalleryImage as updateInternational,
} from "@/app/actions/international-gallery";

// Photo Gallery actions
import {
  getAllPhotoGalleryAdmin as fetchPhoto,
  createPhotoGalleryImage as createPhoto,
  deletePhotoGalleryImage as deletePhoto,
  updatePhotoGalleryImage as updatePhoto,
} from "@/app/actions/photo-gallery";

// NIH Gallery actions
import {
  getAllGalleryImages as fetchNih,
  createGalleryImage as createNih,
  deleteGalleryImage as deleteNih,
  updateGalleryImage as updateNih,
} from "@/app/actions/nih-gallery";

const TABS = [
  {
    key: "international",
    label: "International Gallery",
    textField: "caption" as const,
    fetchImages: fetchInternational,
    createImage: createInternational,
    deleteImage: deleteInternational,
    updateImage: updateInternational,
    emptyDescription: "Start by adding images to the international gallery.",
    modalDescription:
      "Upload a high-quality image to be displayed in the International page gallery.",
  },
  {
    key: "photo",
    label: "Photo Gallery",
    textField: "title" as const,
    fetchImages: fetchPhoto,
    createImage: createPhoto,
    deleteImage: deletePhoto,
    updateImage: updatePhoto,
    emptyDescription:
      "Start by adding images to the photo gallery. It will appear first on the public website.",
    modalDescription:
      "Upload a high-quality image. You can add the title from the main table after uploading.",
  },
  {
    key: "nih",
    label: "NIH Gallery",
    textField: "caption" as const,
    fetchImages: fetchNih,
    createImage: createNih,
    deleteImage: deleteNih,
    updateImage: updateNih,
    emptyDescription: "Start by adding images to the NIH gallery.",
    modalDescription:
      "Upload a high-quality image to be displayed in the NIH gallery.",
  },
] as const;

export default function GalleryAdminPage() {
  const [activeTab, setActiveTab] = useState<string>(TABS[0].key);
  const current = TABS.find((t) => t.key === activeTab)!;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>
        <p className="text-gray-600 mt-1">
          Manage all gallery images from one place.
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex gap-6" aria-label="Gallery tabs">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                whitespace-nowrap pb-3 px-1 border-b-2 text-sm font-semibold transition-colors cursor-pointer
                ${
                  activeTab === tab.key
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Active Tab Panel */}
      <GalleryTabPanel
        key={current.key}
        fetchImages={current.fetchImages}
        createImage={current.createImage}
        deleteImage={current.deleteImage}
        updateImage={current.updateImage}
        textField={current.textField}
        emptyDescription={current.emptyDescription}
        modalDescription={current.modalDescription}
      />
    </div>
  );
}
