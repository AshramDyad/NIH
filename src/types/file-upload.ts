// File Upload Types

export type FileType = 'image' | 'pdf';

export interface UploadResult {
  success: true;
  fileUrl: string;
  fileKey: string;
  fileName: string;
  fileSize: number;
  fileType: FileType;
  uploadedAt: string;
}

export interface UploadError {
  success: false;
  error: string;
  details?: string;
}

export type UploadResponse = UploadResult | UploadError;

export interface FileValidationConfig {
  allowedTypes: readonly string[];
  maxSize: number;
  accept: string;
}

export interface UploadedFile {
  id: string;
  fileUrl: string;
  fileName: string;
  fileSize: number;
  fileType: FileType;
  uploadedAt: string;
}

export interface UploadState {
  isUploading: boolean;
  progress: number;
  error: string | null;
  result: UploadResult | null;
}
