'use client';

import React, { useState } from 'react';
import { Image as ImageIcon, FileText, Download, Trash2, Calendar, File } from 'lucide-react';
import { FileUpload } from '@/components/shared/FileUpload';
import type { UploadResult, UploadedFile } from '@/types/file-upload';

export default function AdminUploadPage() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  // Handle successful upload
  const handleUploadSuccess = (result: UploadResult) => {
    const newFile: UploadedFile = {
      id: Date.now().toString(),
      fileUrl: result.fileUrl,
      fileName: result.fileName,
      fileSize: result.fileSize,
      fileType: result.fileType,
      uploadedAt: result.uploadedAt,
    };

    setUploadedFiles(prev => [newFile, ...prev]);
  };

  // Handle file deletion
  const handleDelete = (id: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== id));
  };

  // Format file size for display
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  // Format date for display
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            File Upload Admin
          </h1>
          <p className="text-gray-600 mt-2">
            Upload images and PDFs to Cloudflare R2 storage
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Upload Section */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-100 rounded-lg">
                <ImageIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Upload Images
                </h2>
                <p className="text-sm text-gray-600">
                  JPEG, PNG, WebP, GIF up to 10MB
                </p>
              </div>
            </div>

            <FileUpload
              fileType="image"
              onUploadSuccess={handleUploadSuccess}
            />
          </div>

          {/* PDF Upload Section */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <FileText className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Upload PDFs
                </h2>
                <p className="text-sm text-gray-600">
                  PDF documents up to 10MB
                </p>
              </div>
            </div>

            <FileUpload
              fileType="pdf"
              onUploadSuccess={handleUploadSuccess}
            />
          </div>
        </div>

        {/* Uploaded Files Section */}
        {uploadedFiles.length > 0 && (
          <div className="mt-12">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              {/* Section Header */}
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h2 className="text-xl font-semibold text-gray-900">
                  Uploaded Files
                </h2>
                <p className="text-sm text-gray-600">
                  {uploadedFiles.length} file{uploadedFiles.length !== 1 ? 's' : ''} uploaded
                </p>
              </div>

              {/* Files List */}
              <div className="divide-y divide-gray-200">
                {uploadedFiles.map(file => (
                  <div
                    key={file.id}
                    className="px-6 py-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        {/* File Icon */}
                        <div className="flex-shrink-0">
                          {file.fileType === 'image' ? (
                            <div className="p-2 bg-orange-100 rounded-lg">
                              <ImageIcon className="w-5 h-5 text-primary" />
                            </div>
                          ) : (
                            <div className="p-2 bg-secondary/10 rounded-lg">
                              <FileText className="w-5 h-5 text-secondary" />
                            </div>
                          )}
                        </div>

                        {/* File Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-900 truncate">
                            {file.fileName}
                          </h3>
                          <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <File className="w-4 h-4" />
                              {formatFileSize(file.fileSize)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(file.uploadedAt)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                        <a
                          href={file.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Download file"
                        >
                          <Download className="w-5 h-5 text-gray-600" />
                        </a>
                        <button
                          onClick={() => handleDelete(file.id)}
                          className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                          title="Remove from list"
                        >
                          <Trash2 className="w-5 h-5 text-red-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
