'use client';

import React, { useState, useCallback, useRef } from 'react';
import { Upload, FileImage, FileText, X, Check, AlertCircle, Loader2, User } from 'lucide-react';
import type { FileType, UploadResult, UploadError, UploadState } from '@/types/file-upload';

interface FileUploadProps {
  fileType: FileType;
  onUploadSuccess: (result: UploadResult) => void;
  maxFileSize?: number;
}

export function FileUpload({ fileType, onUploadSuccess, maxFileSize }: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadState, setUploadState] = useState<UploadState>({
    isUploading: false,
    progress: 0,
    error: null,
    result: null,
    status: 'idle',
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  // File type configuration
  const config = fileType === 'image'
    ? {
        accept: 'image/jpeg,image/png,image/webp,image/gif',
        maxSize: maxFileSize || 10 * 1024 * 1024, // 10MB
        icon: <FileImage className="w-16 h-16 text-gray-400" />,
        label: 'Image',
        formats: 'JPG, PNG, WebP, GIF',
      }
    : {
        accept: 'application/pdf',
        maxSize: maxFileSize || 10 * 1024 * 1024, // 10MB
        icon: <FileText className="w-16 h-16 text-gray-400" />,
        label: 'PDF',
        formats: 'PDF',
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
        status: 'idle',
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

  // Handle drag enter
  const handleDragEnter = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  }, []);

  // Handle drag leave
  const handleDragLeave = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  }, []);

  // Handle drag and drop
  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDragging(false);
      const file = event.dataTransfer.files[0];
      if (!file) return;

      // Reset state
      setSelectedFile(file);
      setUploadState({
        isUploading: false,
        progress: 0,
        error: null,
        result: null,
        status: 'idle',
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

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      fileInputRef.current?.click();
    }
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
      status: 'idle',
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
      status: 'preparing',
    });

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('fileType', fileType);

      // Simulate progress for better UX (since fetch doesn't provide progress)
      const progressInterval = setInterval(() => {
        setUploadState((prev) => {
          if (prev.progress >= 90) {
            clearInterval(progressInterval);
            return { ...prev, status: 'finishing', progress: 90 };
          }
          return { ...prev, progress: prev.progress + 10, status: 'uploading' };
        });
      }, 200);

      // Upload file
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      clearInterval(progressInterval);
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
        status: 'success',
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
        status: 'error',
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

  // Get status message
  const getStatusMessage = (): string => {
    switch (uploadState.status) {
      case 'preparing':
        return 'Preparing upload...';
      case 'uploading':
        return `Uploading... ${uploadState.progress}%`;
      case 'finishing':
        return 'Finishing up...';
      default:
        return 'Uploading...';
    }
  };

  return (
    <div className="w-full">
      {/* Upload Area - Empty State */}
      {!selectedFile && (
        <div
          role="button"
          tabIndex={0}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onKeyDown={handleKeyDown}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-200 ${
            isDragging
              ? 'border-blue-500 bg-blue-50 scale-[1.02]'
              : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={config.accept}
            onChange={handleFileSelect}
            className="hidden"
          />
          <div className="flex flex-col items-center">
            <div className={`p-4 rounded-full mb-4 transition-all duration-200 ${
              isDragging ? 'bg-blue-100 scale-110' : 'bg-gray-100'
            }`}>
              <Upload className={`w-12 h-12 ${isDragging ? 'text-blue-600' : 'text-gray-500'}`} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Upload {config.label}
            </h3>
            <p className="text-sm text-gray-600 mb-4 max-w-md">
              Drag and drop your {config.label.toLowerCase()} here, or click to browse
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500 bg-white px-4 py-2 rounded-full border border-gray-200">
              <span>Supported formats: {config.formats}</span>
              <span className="text-gray-300">|</span>
              <span>Max size: {formatFileSize(config.maxSize)}</span>
            </div>
          </div>
        </div>
      )}

      {/* Preview Area - File Selected */}
      {selectedFile && !uploadState.result && (
        <div className="border rounded-2xl bg-white shadow-sm overflow-hidden">
          {/* File Header */}
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900">
              {config.label} Selected
            </h3>
            <button
              onClick={handleClear}
              className="text-gray-500 hover:text-gray-700 hover:bg-gray-200 p-2 rounded-lg transition-colors"
              title="Remove file"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* File Content */}
          <div className="p-6">
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Preview or Icon */}
              <div className="flex-shrink-0">
                {previewUrl ? (
                  <div className="relative">
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="w-32 h-32 object-cover rounded-xl shadow-md"
                    />
                  </div>
                ) : (
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center shadow-md">
                    {config.icon}
                  </div>
                )}
              </div>

              {/* File Info & Actions */}
              <div className="flex-1 flex flex-col justify-between">
                {/* File Details */}
                <div className="space-y-2 mb-4">
                  <div>
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Filename
                    </label>
                    <p className="text-sm font-medium text-gray-900 truncate mt-1">
                      {selectedFile.name}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Size
                      </label>
                      <p className="text-sm text-gray-700 mt-1">
                        {formatFileSize(selectedFile.size)}
                      </p>
                    </div>
                    <div className="flex-1">
                      <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Type
                      </label>
                      <p className="text-sm text-gray-700 mt-1">
                        {selectedFile.type || config.label}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                {uploadState.isUploading && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {getStatusMessage()}
                      </span>
                      <span className="text-sm font-semibold text-blue-600">
                        {uploadState.progress}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 transition-all duration-300 ease-out"
                        style={{ width: `${uploadState.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {uploadState.error && (
                  <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-red-900">
                        Upload Failed
                      </p>
                      <p className="text-sm text-red-700 mt-1">
                        {uploadState.error}
                      </p>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handleClear}
                    disabled={uploadState.isUploading}
                    className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpload}
                    disabled={uploadState.isUploading}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    {uploadState.isUploading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {uploadState.status === 'finishing' ? 'Finishing...' : 'Uploading...'}
                      </>
                    ) : (
                      <>
                        <Upload className="w-5 h-5" />
                        Upload {config.label}
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success State */}
      {uploadState.result && (
        <div className="border-2 border-green-200 rounded-2xl bg-green-50 overflow-hidden">
          {/* Success Header */}
          <div className="bg-green-600 px-6 py-4 flex items-center gap-3">
            <div className="p-2 bg-white rounded-full">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Upload Successful!
              </h3>
              <p className="text-sm text-green-100">
                Your {config.label.toLowerCase()} has been uploaded to Cloudflare R2
              </p>
            </div>
          </div>

          {/* Success Content */}
          <div className="p-6">
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Preview */}
              <div className="flex-shrink-0">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Uploaded image"
                    className="w-32 h-32 object-cover rounded-xl shadow-md border-4 border-white"
                  />
                ) : (
                  <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center shadow-md border-4 border-white">
                    {config.icon}
                  </div>
                )}
              </div>

              {/* File Info & Actions */}
              <div className="flex-1 flex flex-col justify-between">
                {/* File Details */}
                <div className="space-y-3 mb-4">
                  <div>
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      File URL
                    </label>
                    <p className="text-sm text-gray-900 break-all mt-1 font-mono bg-white px-3 py-2 rounded-lg border border-gray-200">
                      {uploadState.result.fileUrl}
                    </p>
                  </div>
                  {selectedFile && (
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          Size
                        </label>
                        <p className="text-sm text-gray-700 mt-1">
                          {formatFileSize(selectedFile.size)}
                        </p>
                      </div>
                      <div className="flex-1">
                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          Type
                        </label>
                        <p className="text-sm text-gray-700 mt-1">
                          {selectedFile.type || config.label}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handleClear}
                    className="flex-1 px-4 py-2.5 border-2 border-green-600 text-green-700 font-medium rounded-xl hover:bg-green-100 transition-colors flex items-center justify-center gap-2"
                  >
                    <Upload className="w-5 h-5" />
                    Change {config.label}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
