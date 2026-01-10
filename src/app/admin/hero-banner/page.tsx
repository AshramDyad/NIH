"use client";

import React, { useEffect, useState } from "react";
import {
  Image as ImageIcon,
  Trash2,
  Plus,
  GripVertical,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { FileUpload } from "@/components/shared/FileUpload";
import {
  getHeroBanners,
  createHeroBanner,
  deleteHeroBanner,
  updateHeroBanner,
  type HeroBanner,
} from "@/app/actions/hero-banners";
import type { UploadResult } from "@/types/file-upload";
import Image from "next/image";

// dnd-kit imports
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// Sortable Table Row Component
function SortableRow({
  banner,
  index,
  onDelete,
}: {
  banner: HeroBanner;
  index: number;
  onDelete: (id: string) => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: banner.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1 : 0,
  };

  return (
    <tr
      ref={setNodeRef}
      style={style}
      className={`hover:bg-gray-50 transition-colors ${
        isDragging ? "bg-gray-100" : ""
      }`}
    >
      {/* Drag Handle - First column, sticky to prevent scroll issues */}
      <td className="px-4 py-4 sticky left-0 bg-white z-10">
        <button
          {...attributes}
          {...listeners}
          className="p-2 hover:bg-gray-100 rounded-lg cursor-grab active:cursor-grabbing transition-colors touch-none"
          title="Drag to reorder"
          style={{ touchAction: "none" }}
        >
          <GripVertical className="w-5 h-5 text-gray-400" />
        </button>
      </td>

      {/* Image */}
      <td className="px-6 py-4">
        <div className="relative w-32 h-16 rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={banner.image_url}
            alt="Banner"
            fill
            className="object-cover"
          />
        </div>
      </td>

      {/* URL */}
      <td className="px-6 py-4">
        <p className="text-sm text-gray-900 truncate max-w-xs font-mono bg-gray-50 px-2 py-1 rounded border">
          {banner.image_url}
        </p>
      </td>

      {/* Order */}
      <td className="px-6 py-4">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
          {index + 1}
        </span>
      </td>

      {/* Actions */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onDelete(banner.id)}
            className="flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors font-medium"
            title="Delete banner"
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default function HeroBannerAdminPage() {
  const [banners, setBanners] = useState<HeroBanner[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Drag and drop sensors
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

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
          className="flex items-center gap-2 bg-primary hover:bg-orange-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
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

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
          <span className="ml-3 text-gray-600">Loading banners...</span>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !error && banners.length === 0 && (
        <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
          <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No Banners Yet
          </h3>
          <p className="text-gray-600 mb-4">
            Get started by adding your first hero banner.
          </p>
        </div>
      )}

      {/* Banners Table with Drag and Drop */}
      {!isLoading && !error && banners.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-4 py-4 text-sm font-semibold text-gray-900 sticky left-0 bg-gray-50 z-10"></th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                      Image
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                      Cloudflare R2 URL
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                      Order
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <SortableContext
                    items={banners.map((b) => b.id)}
                    strategy={verticalListSortingStrategy}
                  >
                    {banners.map((banner, index) => (
                      <SortableRow
                        key={banner.id}
                        banner={banner}
                        index={index}
                        onDelete={handleDelete}
                      />
                    ))}
                  </SortableContext>
                </tbody>
              </table>
            </div>
          </DndContext>
        </div>
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
