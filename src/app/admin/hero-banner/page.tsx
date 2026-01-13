"use client";

import React, { useEffect, useState } from "react";
import {
  Image as ImageIcon,
  Trash2,
  Plus,
  AlertCircle,
} from "lucide-react";
import { FileUpload } from "@/components/shared/FileUpload";
import { DataTable } from "@/components/ui/DataTable";
import {
  getHeroBanners,
  createHeroBanner,
  deleteHeroBanner,
  updateHeroBanner,
  type HeroBanner,
} from "@/app/actions/hero-banners";
import type { UploadResult } from "@/types/file-upload";
import Image from "next/image";
import { arrayMove } from "@dnd-kit/sortable";
import type { DragEndEvent } from "@dnd-kit/core";

export default function HeroBannerAdminPage() {
  const [banners, setBanners] = useState<HeroBanner[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load banners on mount
  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getHeroBanners();
      setBanners(data);
    } catch (err) {
      setError("Failed to load banners. Please refresh the page.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUploadSuccess = async (result: UploadResult) => {
    try {
      await createHeroBanner(result.fileUrl, banners.length);
      setIsModalOpen(false);
      fetchBanners();
    } catch (err) {
      alert("Failed to save banner to database");
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this banner?")) return;
    try {
      await deleteHeroBanner(id);
      fetchBanners();
    } catch (err) {
      alert("Failed to delete banner");
      console.error(err);
    }
  };

  // Handle drag end - reorder banners
  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = banners.findIndex((b) => b.id === active.id);
    const newIndex = banners.findIndex((b) => b.id === over.id);

    const newBanners = arrayMove(banners, oldIndex, newIndex);
    setBanners(newBanners);

    // Update all affected banner orders in database
    try {
      const updates = newBanners.map((banner, index) =>
        updateHeroBanner(banner.id, { display_order: index })
      );
      await Promise.all(updates);
    } catch (err) {
      alert("Failed to save new order");
      console.error(err);
      fetchBanners(); // Reset on failure
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Hero Banners</h1>
          <p className="text-gray-600 mt-1">
            Manage homepage hero slider images
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-primary hover:bg-primary/90 cursor-pointer text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Hero Banner
        </button>
      </div>

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-medium text-red-900">
              Error Loading Data
            </p>
            <p className="text-sm text-red-700 mt-1">{error}</p>
          </div>
          <button
            onClick={fetchBanners}
            className="text-sm font-medium text-red-700 hover:text-red-900 underline"
          >
            Retry
          </button>
        </div>
      )}

      {/* Banners Table with Drag and Drop */}
      {!error && (
        <DataTable<HeroBanner>
          columns={[
            {
              id: "image",
              header: "Image",
              cell: (banner) => (
                <div className="relative w-32 h-16 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={banner.image_url}
                    alt="Banner"
                    fill
                    className="object-cover"
                  />
                </div>
              ),
            },
            {
              id: "url",
              header: "Image URL",
              cell: (banner) => (
                <p className="text-sm text-gray-900 truncate max-w-xs font-mono bg-gray-50 px-2 py-1 rounded border">
                  {banner.image_url}
                </p>
              ),
            },
            {
              id: "order",
              header: "Order",
              cell: (_, index) => (
                <span className="inline-flex items-center justify-center size-6 rounded-full text-xs font-semibold bg-primary text-white">
                  {index + 1}
                </span>
              ),
            },
            {
              id: "actions",
              header: "Actions",
              cell: (banner) => (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDelete(banner.id)}
                    className="flex items-center gap-2 text-red-600 bg-red-600/10 hover:bg-red-600/20 cursor-pointer px-3 py-2 rounded-lg transition-colors font-medium"
                    title="Delete banner"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              ),
            },
          ]}
          data={banners}
          keyAccessor="id"
          isLoading={isLoading}
          loadingMessage="Loading banners..."
          emptyIcon={<ImageIcon className="w-16 h-16 text-gray-400" />}
          emptyTitle="No Banners Yet"
          emptyDescription="Get started by adding your first hero banner."
          sortable
          onDragEnd={handleDragEnd}
        />
      )}

      {/* Add Banner Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Add Hero Banner
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-6">
              <p className="text-sm text-gray-600 mb-6">
                Upload a landscape image (recommended ratio 21:9 or 16:9) to be
                shown in the homepage hero slider.
              </p>
              <FileUpload
                fileType="image"
                onUploadSuccess={handleUploadSuccess}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
