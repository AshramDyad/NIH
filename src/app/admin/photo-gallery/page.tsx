"use client";

import React, { useEffect, useState } from "react";
import {
  Image as ImageIcon,
  Trash2,
  Plus,
  AlertCircle,
  Edit2,
  Save,
  X,
} from "lucide-react";
import { FileUpload } from "@/components/shared/FileUpload";
import { DataTable } from "@/components/ui/DataTable";
import {
  getAllPhotoGalleryAdmin,
  createPhotoGalleryImage,
  deletePhotoGalleryImage,
  updatePhotoGalleryImage,
  type PhotoGalleryImage,
} from "@/app/actions/photo-gallery";
import type { UploadResult } from "@/types/file-upload";
import Image from "next/image";

export default function PhotoGalleryAdminPage() {
  const [images, setImages] = useState<PhotoGalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal & Edit state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");

  // Load images on mount
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getAllPhotoGalleryAdmin();
      setImages(data);
    } catch (err) {
      setError("Failed to load photo gallery images. Please refresh the page.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUploadSuccess = async (result: UploadResult) => {
    try {
      await createPhotoGalleryImage(result.fileUrl, result.fileKey, "");
      setIsModalOpen(false);
      fetchImages();
    } catch (err) {
      alert("Failed to save image to database");
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return;
    try {
      await deletePhotoGalleryImage(id);
      fetchImages();
    } catch (err) {
      alert("Failed to delete image");
      console.error(err);
    }
  };

  const handleSaveTitle = async (id: string) => {
    try {
      await updatePhotoGalleryImage(id, { title: editTitle });
      setEditingId(null);
      fetchImages();
    } catch (err) {
      alert("Failed to update title");
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Photo Gallery</h1>
          <p className="text-gray-600 mt-1">
            Manage images for the public Photo Gallery page. Newly uploaded
            images will be displayed first.
          </p>
        </div>
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
            onClick={fetchImages}
            className="text-sm font-medium text-red-700 hover:text-red-900 underline"
          >
            Retry
          </button>
        </div>
      )}

      {/* Images Table */}
      {!error && (
        <DataTable<PhotoGalleryImage>
          columns={[
            {
              id: "image",
              header: "Image",
              cell: (img) => (
                <div className="relative w-32 h-20 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                  <Image
                    src={img.image_url}
                    alt={img.title || "Gallery image"}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ),
            },
            {
              id: "title",
              header: "Title",
              cell: (img) => (
                <div className="max-w-xs">
                  {editingId === img.id ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-primary outline-none"
                        autoFocus
                        placeholder="Enter image title"
                      />
                      <button
                        onClick={() => handleSaveTitle(img.id)}
                        className="p-1 text-green-600 hover:bg-green-50 rounded"
                        title="Save"
                      >
                        <Save className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="p-1 text-gray-400 hover:bg-gray-50 rounded"
                        title="Cancel"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 group">
                      <span className="text-sm text-gray-900 truncate font-medium">
                        {img.title || (
                          <span className="text-gray-400 italic font-normal">
                            No title
                          </span>
                        )}
                      </span>
                      <button
                        onClick={() => {
                          setEditingId(img.id);
                          setEditTitle(img.title || "");
                        }}
                        className="p-1 text-gray-400 hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Edit title"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
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
          loadingMessage="Loading photo gallery..."
          emptyIcon={<ImageIcon className="w-16 h-16 text-gray-400" />}
          emptyTitle="No Images Yet"
          emptyDescription="Start by adding images to the photo gallery. It will appear first on the public website."
        />
      )}

      {/* Add Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-xl font-bold text-gray-900">
                Add Photo Gallery Image
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-6 font-sans">
              <p className="text-sm text-gray-600 mb-6">
                Upload a high-quality image. You can add the title from the main
                table after uploading.
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
