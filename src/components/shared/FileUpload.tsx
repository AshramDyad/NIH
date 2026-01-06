'use client';

import React, { useState, useCallback, useRef } from 'react';
import { Upload, FileImage, FileText, X, Check, AlertCircle, Loader2 } from 'lucide-react';
import type { FileType, UploadResult, UploadError, UploadState, UploadedFile } from '@/types/file-upload';

interface FileUploadProps {
  fileType: FileType;
  onUploadSuccess: (result: UploadResult) => void;
  maxFileSize?: number;
}

export function FileUpload({ fileType, onUploadSuccess, maxFileSize }: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadState, setUploadState] = useState<UploadState>({
    isUploading: false,
    progress: 0,
    error: null,
    result: null,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  // File type configuration
  const config = fileType === 'image'
    ? {
        accept: 'image/jpeg,image/png,image/webp,image/gif',
        maxSize: maxFileSize || 10 * 1024 * 1024, // 10MB
        icon: <FileImage className="w-12 h-12 text-blue-500" />,
        label: 'Image',
      }
    : {
        accept: 'application/pdf',
        maxSize: maxFileSize || 10 * 1024 * 1024, // 10MB
        icon: <FileText className="w-12 h-12 text-red-500" />,
        label: 'PDF',
      };

  // Handle file selection
  const handleFileSelect = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      // Reset state
      setSelectedFile(file);
      setUploadState({
        isUploading: false,
        progress: 0,
        error: null,
        result: null,
      });

      // Create preview for images
      if (fileType === 'image') {
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
      } else {
        setPreviewUrl(null);
      }
    },
    [fileType]
  );

  // Handle drag and drop
  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      if (!file) return;

      // Reset state
      setSelectedFile(file);
      setUploadState({
        isUploading: false,
        progress: 0,
        error: null,
        result: null,
      });

      // Create preview for images
      if (fileType === 'image') {
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
      } else {
        setPreviewUrl(null);
      }
    },
    [fileType]
  );

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  // Clear selected file
  const handleClear = useCallback(() => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setUploadState({
      isUploading: false,
      progress: 0,
      error: null,
      result: null,
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, []);

  // Upload file to server
  const handleUpload = useCallback(async () => {
    if (!selectedFile) return;

    setUploadState({
      isUploading: true,
      progress: 0,
      error: null,
      result: null,
    });

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('fileType', fileType);

      // Upload file
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = (await response.json()) as UploadResult | UploadError;

      if (!response.ok || !data.success) {
        const errorMessage = (data as UploadError).error || 'Upload failed';
        throw new Error(errorMessage);
      }

      setUploadState({
        isUploading: false,
        progress: 100,
        error: null,
        result: data,
      });

      // Notify parent component
      onUploadSuccess(data);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Upload failed';
      setUploadState({
        isUploading: false,
        progress: 0,
        error: errorMessage,
        result: null,
      });
    }
  }, [selectedFile, fileType, onUploadSuccess]);

  // Format file size for display
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Upload Area */}
      {!selectedFile && (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={config.accept}
            onChange={handleFileSelect}
            className="hidden"
          />
          <Upload className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <p className="text-lg font-medium text-gray-700 mb-2">
            Upload {config.label}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Drag and drop or click to select
          </p>
          <p className="text-xs text-gray-400">
            Maximum size: {formatFileSize(config.maxSize)}
          </p>
        </div>
      )}

      {/* Preview Area */}
      {selectedFile && !uploadState.result && (
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-4">
              {/* Preview or Icon */}
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-24 h-24 object-cover rounded-lg"
                />
              ) : (
                <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                  {config.icon}
                </div>
              )}

              {/* File Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 truncate mb-1">
                  {selectedFile.name}
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  {formatFileSize(selectedFile.size)}
                </p>
                <p className="text-xs text-gray-400">
                  {selectedFile.type}
                </p>
              </div>

              {/* Clear Button */}
              <button
                onClick={handleClear}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                title="Remove file"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Upload Button */}
            <button
              onClick={handleUpload}
              disabled={uploadState.isUploading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {uploadState.isUploading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5" />
                  Upload {config.label}
                </>
              )}
            </button>

            {/* Error Message */}
            {uploadState.error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-900">
                    Upload Failed
                  </p>
                  <p className="text-sm text-red-700 mt-1">
                    {uploadState.error}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Success State */}
      {uploadState.result && (
        <div className="border border-green-200 rounded-lg p-6 bg-green-50">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-green-100 rounded-full">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-green-900 mb-1">
                Upload Successful!
              </h3>
              <p className="text-sm text-green-700 mb-3">
                {config.label} has been uploaded to Cloudflare R2.
              </p>
              <div className="bg-white rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">File URL:</p>
                <p className="text-xs text-gray-900 break-all">
                  {uploadState.result.fileUrl}
                </p>
              </div>
            </div>
            <button
              onClick={handleClear}
              className="p-2 hover:bg-green-100 rounded-full transition-colors"
              title="Upload another file"
            >
              <Upload className="w-5 h-5 text-green-600" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
