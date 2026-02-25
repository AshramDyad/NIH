"use client";

import React, { useEffect, useState, useCallback } from "react";
import {
  Image as ImageIcon,
  Trash2,
  Plus,
  AlertCircle,
  Edit2,
  Save,
  X,
  Loader2,
} from "lucide-react";
import { FileUpload } from "@/components/shared/FileUpload";
import { DataTable } from "@/components/ui/DataTable";
import type { UploadResult } from "@/types/file-upload";
import Image from "next/image";
import { arrayMove } from "@dnd-kit/sortable";
import type { DragEndEvent } from "@dnd-kit/core";

// Unified type for any gallery image record
export interface GalleryImageRecord {
  id: string;
  image_url: string;
  image_key: string;
  caption?: string | null;
  title?: string | null;
  display_order: number;
  is_active: boolean;
  created_at: string;
}

export interface GalleryTabPanelProps {
  /** Server action: fetch all images */
  fetchImages: () => Promise<GalleryImageRecord[]>;
  /** Server action: create a new image */
  createImage: (
    imageUrl: string,
    imageKey: string,
    textValue: string,
    displayOrder: number,
  ) => Promise<unknown>;
  /** Server action: delete an image by id */
  deleteImage: (id: string) => Promise<unknown>;
  /** Server action: update an image by id */
  updateImage: (
    id: string,
    updates: Partial<GalleryImageRecord>,
  ) => Promise<unknown>;
  /** Which text field to use: "caption" or "title" */
  textField: "caption" | "title";
  /** Description shown in the empty state */
  emptyDescription?: string;
  /** Description shown in the upload modal */
  modalDescription?: string;
}

export default function GalleryTabPanel({
  fetchImages,
  createImage,
  deleteImage,
  updateImage,
  textField,
  emptyDescription = "Start by adding images to the gallery.",
  modalDescription = "Upload a high-quality image to be displayed in the gallery.",
}: GalleryTabPanelProps) {
  const [images, setImages] = useState<GalleryImageRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal & inline-edit state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [isSavingText, setIsSavingText] = useState(false);

  const loadImages = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchImages();
      setImages(data);
    } catch (err) {
      setError("Failed to load gallery images. Please refresh the page.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [fetchImages]);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  // ── Handlers ──────────────────────────────────────────────

  const handleUploadSuccess = async (result: UploadResult) => {
    try {
      await createImage(result.fileUrl, result.fileKey, "", images.length);
      setIsModalOpen(false);
      loadImages();
    } catch (err) {
      alert("Failed to save image to database");
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return;
    try {
      await deleteImage(id);
      loadImages();
    } catch (err) {
      alert("Failed to delete image");
      console.error(err);
    }
  };

  const handleSaveText = async (id: string) => {
    if (isSavingText) return;
    setIsSavingText(true);
    try {
      await updateImage(id, { [textField]: editText });
      setEditingId(null);
      loadImages();
    } catch (err) {
      alert(`Failed to update ${textField}`);
      console.error(err);
    } finally {
      setIsSavingText(false);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    id: string,
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSaveText(id);
    } else if (e.key === "Escape") {
      setEditingId(null);
    }
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = images.findIndex((img) => img.id === active.id);
    const newIndex = images.findIndex((img) => img.id === over.id);
    const newImages = arrayMove(images, oldIndex, newIndex);
    setImages(newImages);

    try {
      const updates = newImages.map((img, index) =>
        updateImage(img.id, { display_order: index }),
      );
      await Promise.all(updates);
    } catch (err) {
      alert("Failed to save new order");
      console.error(err);
      loadImages();
    }
  };

  // ── Helper: get text value from a record ──────────────────
  const getText = (img: GalleryImageRecord) =>
    textField === "title" ? img.title : img.caption;

  const textLabel = textField === "title" ? "Title" : "Caption";

  // ── Render ────────────────────────────────────────────────

  return (
    <div className="space-y-4">
      {/* Add Image button */}
      <div className="flex justify-end">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-primary hover:bg-primary/90 cursor-pointer text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Image
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
            onClick={loadImages}
            className="text-sm font-medium text-red-700 hover:text-red-900 underline"
          >
            Retry
          </button>
        </div>
      )}

      {/* Images Table with Drag and Drop */}
      {!error && (
        <DataTable<GalleryImageRecord>
          columns={[
            {
              id: "image",
              header: "Image",
              cell: (img) => (
                <div className="relative w-32 h-20 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                  <Image
                    src={img.image_url}
                    alt={getText(img) || "Gallery image"}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ),
            },
            {
              id: textField,
              header: textLabel,
              cell: (img) => {
                const textValue = getText(img);
                return (
                  <div className="max-w-md w-full">
                    {editingId === img.id ? (
                      <div className="flex items-start gap-2 bg-gray-50 p-2 rounded-xl border border-gray-200 shadow-sm">
                        <textarea
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, img.id)}
                          className="w-full min-h-[60px] px-3 py-2 text-sm bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none resize-y transition-all"
                          autoFocus
                          placeholder={`Enter image ${textField}...`}
                          disabled={isSavingText}
                        />
                        <div className="flex flex-col gap-1 shrink-0">
                          <button
                            onClick={() => handleSaveText(img.id)}
                            disabled={isSavingText}
                            className="flex items-center justify-center p-2 text-white bg-primary hover:bg-primary/90 rounded-lg shadow-sm transition-colors disabled:opacity-50"
                            title="Save (Enter)"
                          >
                            {isSavingText ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <Save className="w-4 h-4" />
                            )}
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            disabled={isSavingText}
                            className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
                            title="Cancel (Esc)"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="group flex items-start gap-3">
                        {textValue ? (
                          <div className="flex-1">
                            <p className="text-sm text-gray-800 font-medium whitespace-pre-wrap leading-relaxed">
                              {textValue}
                            </p>
                          </div>
                        ) : (
                          <button
                            onClick={() => {
                              setEditingId(img.id);
                              setEditText("");
                            }}
                            className="flex items-center gap-1.5 text-sm cursor-pointer font-medium text-gray-500 hover:text-primary transition-colors border border-dashed border-gray-300 hover:border-primary/50 bg-gray-50 hover:bg-primary/5 rounded-lg px-4 py-2 w-full max-w-[200px]"
                          >
                            <Plus className="w-4 h-4" />
                            Add {textField}
                          </button>
                        )}

                        {/* Edit Icon Always visible but slightly faded until hover */}
                        {textValue && (
                          <button
                            onClick={() => {
                              setEditingId(img.id);
                              setEditText(textValue);
                            }}
                            className="p-1.5 text-gray-400 cursor-pointer hover:text-primary hover:bg-primary/10 rounded-md transition-all shrink-0 mt-0.5"
                            title={`Edit ${textField}`}
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                );
              },
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
              cell: (img) => (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDelete(img.id)}
                    className="flex items-center gap-2 text-red-600 bg-red-600/10 hover:bg-red-600/20 cursor-pointer px-3 py-2 rounded-lg transition-colors font-medium text-sm"
                    title="Delete image"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              ),
            },
          ]}
          data={images}
          keyAccessor="id"
          isLoading={isLoading}
          loadingMessage="Loading gallery..."
          emptyIcon={<ImageIcon className="w-16 h-16 text-gray-400" />}
          emptyTitle="No Images Yet"
          emptyDescription={emptyDescription}
          sortable
          onDragEnd={handleDragEnd}
        />
      )}

      {/* Add Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-xl font-bold text-gray-900">
                Add Gallery Image
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-6">
              <p className="text-sm text-gray-600 mb-6">{modalDescription}</p>
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
