import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';

// Get R2 endpoint - auto-detects EU vs non-EU region
const getR2Endpoint = (): string => {
  const accountId = process.env.R2_ACCOUNT_ID;
  if (!accountId) {
    throw new Error('R2_ACCOUNT_ID is not configured in environment variables');
  }

  console.log('R2 Account ID:', accountId);

  // Check if EU region is configured
  const isEuRegion = process.env.R2_REGION === 'eu' || process.env.R2_BUCKET_REGION === 'eu';

  const endpoint = isEuRegion
    ? `https://${accountId}.eu.r2.cloudflarestorage.com`
    : `https://${accountId}.r2.cloudflarestorage.com`;

  console.log('R2 Endpoint:', endpoint);
  return endpoint;
};

// Initialize S3 Client for Cloudflare R2
export const r2Client = new S3Client({
  region: 'auto',
  endpoint: getR2Endpoint(),
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
  },
  forcePathStyle: true,
});

// R2 Configuration Constants
export const R2_CONFIG = {
  bucketName: process.env.R2_BUCKET_NAME || 'nih-assets',
  accountId: process.env.R2_ACCOUNT_ID || '',
  publicUrl: process.env.R2_PUBLIC_URL || '',
  maxFileSize: 10 * 1024 * 1024, // 10MB
  allowedImageTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
  allowedPdfTypes: ['application/pdf'],
} as const;

console.log('R2 Config:', {
  bucketName: R2_CONFIG.bucketName,
  hasPublicUrl: !!R2_CONFIG.publicUrl,
  publicUrl: R2_CONFIG.publicUrl,
});

// Sanitize filename to prevent security issues (path traversal, special characters)
function sanitizeFilename(filename: string): string {
  console.log('Sanitizing filename:', filename);

  // Extract only the filename (no path)
  const sanitized = filename.replace(/^.*[\\/]/, '');

  // Replace any remaining special characters (except letters, numbers, dot, underscore, hyphen)
  const cleaned = sanitized.replace(/[^a-zA-Z0-9._-]/g, '_');

  console.log('Sanitized filename:', cleaned);
  return cleaned;
}

// Generate unique filename with timestamp and random string
export const generateUniqueFilename = (originalFilename: string): string => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const randomString = Math.random().toString(36).substring(2, 8);
  const extension = originalFilename.split('.').pop() || '';

  return `${timestamp}-${randomString}.${extension}`;
};

// Generate file key with folder structure using original filename
export const generateFileKey = (
  fileType: 'image' | 'pdf',
  filename: string
): string => {
  console.log('Generating file key for:', filename, 'Type:', fileType);

  const folder = fileType === 'image' ? 'images' : 'pdfs';
  const sanitizedFilename = sanitizeFilename(filename);
  const fileKey = `${folder}/${sanitizedFilename}`;

  console.log('Generated file key:', fileKey);
  return fileKey;
};

// Generate public URL for uploaded file
export const generatePublicUrl = (fileKey: string): string => {
  const { accountId, bucketName, publicUrl } = R2_CONFIG;

  console.log('Generating public URL for:', fileKey);

  // Check if custom public URL is configured
  if (publicUrl) {
    const url = `${publicUrl}/${fileKey}`;
    console.log('Using custom public URL:', url);
    return url;
  }

  // Default R2 public URL format
  const url = `https://${accountId}.r2.cloudflarestorage.com/${bucketName}/${fileKey}`;
  console.log('Using default R2 public URL:', url);
  return url;
};

// Convert R2 SDK errors to user-friendly messages
export const handleR2Error = (error: unknown): string => {
  console.error('Handling R2 error:', error);

  if (error instanceof Error) {
    const errorName = error.name as string;
    console.error('Error name:', errorName);
    console.error('Error message:', error.message);

    switch (errorName) {
      case 'NoSuchBucket':
        return 'Storage bucket does not exist. Please check your R2 configuration.';
      case 'InvalidAccessKeyId':
        return 'Invalid storage credentials. Please check your R2 access key.';
      case 'SignatureDoesNotMatch':
        return 'Authentication failed. Please check your R2 secret access key.';
      case 'AccessDenied':
        return 'Access denied. Please check your R2 token permissions.';
      case 'EntityTooLarge':
        return 'File is too large. Maximum size is 10MB.';
      case 'InvalidObjectState':
        return 'Invalid file state. Please try uploading again.';
      default:
        return `Upload failed: ${error.message || 'Unknown error occurred.'}`;
    }
  }

  console.error('Unknown error type:', typeof error);
  return 'Upload failed: An unknown error occurred. Please try again.';
};

// Validate file type
export const validateFileType = (
  file: File,
  allowedTypes: readonly string[]
): boolean => {
  return allowedTypes.includes(file.type);
};

// Validate file size
export const validateFileSize = (
  file: File,
  maxSize: number
): boolean => {
  return file.size <= maxSize;
};

// Convert File object to Buffer for AWS SDK compatibility
async function convertFileToBuffer(file: File): Promise<Buffer> {
  console.log('Converting file to buffer:', {
    name: file.name,
    type: file.type,
    size: file.size,
  });

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  console.log('File converted to buffer successfully:', {
    originalSize: file.size,
    bufferSize: buffer.length,
  });

  return buffer;
}

// Create PutObjectCommand for uploading file
export async function createUploadCommand(
  fileKey: string,
  file: File
): Promise<PutObjectCommand> {
  console.log('Creating upload command for:', fileKey);

  const buffer = await convertFileToBuffer(file);

  const command = new PutObjectCommand({
    Bucket: R2_CONFIG.bucketName,
    Key: fileKey,
    Body: buffer,
    ContentType: file.type,
  });

  console.log('Upload command created:', {
    bucket: R2_CONFIG.bucketName,
    key: fileKey,
    contentType: file.type,
    fileSize: file.size,
    bufferSize: buffer.length,
  });

  return command;
}

/**
 * Helper to extract Cloudflare R2 file key from a public URL
 * Handles various R2 URL formats (custom domains vs default r2.dev)
 */
export function extractR2KeyFromUrl(url: string): string | null {
  try {
    const urlObj = new URL(url);
    // Pathname usually contains /bucket/key or /key depending on custom domain setup
    // For NIH, images are in 'images/' folder, PDFs in 'pdfs/'
    // We remove the leading / and potential bucket name prefix if present
    let path = urlObj.pathname.startsWith('/') ? urlObj.pathname.slice(1) : urlObj.pathname;

    // If the path starts with the bucket name (common in direct R2 URLs), remove it
    if (path.startsWith(`${R2_CONFIG.bucketName}/`)) {
      path = path.replace(`${R2_CONFIG.bucketName}/`, '');
    }

    return path || null;
  } catch (err) {
    console.error('Invalid R2 URL for key extraction:', url, err);
    return null;
  }
}

/**
 * Delete a file from Cloudflare R2 storage
 * Robustly handles cases where the URL or key might be invalid
 */
export async function deleteFromR2(fileUrl: string | null | undefined): Promise<boolean> {
  if (!fileUrl) {
    console.log('No file URL provided for R2 deletion, skipping.');
    return true; // Technically "deleted" or nothing to delete
  }

  const fileKey = extractR2KeyFromUrl(fileUrl);
  if (!fileKey) {
    console.error('Could not extract file key from URL:', fileUrl);
    return false;
  }

  try {
    const command = new DeleteObjectCommand({
      Bucket: R2_CONFIG.bucketName,
      Key: fileKey,
    });

    await r2Client.send(command);
    console.log(`Successfully deleted R2 file: ${fileKey}`);
    return true;
  } catch (error) {
    console.error(`Failed to delete file from R2 (${fileKey}):`, error);
    // We return false but in many cases the app might continue
    return false;
  }
}
