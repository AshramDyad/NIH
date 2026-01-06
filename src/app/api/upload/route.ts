import { NextRequest, NextResponse } from 'next/server';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import {
  r2Client,
  R2_CONFIG,
  generateFileKey,
  generatePublicUrl,
  createUploadCommand,
  validateFileType,
  validateFileSize,
  handleR2Error,
} from '@/lib/r2-client';
import type { UploadResponse, UploadResult, FileType } from '@/types/file-upload';

export async function POST(request: NextRequest) {
  try {
    console.log('=== File Upload Started ===');

    // Parse FormData from request
    const formData = await request.formData();
    console.log('FormData parsed successfully');

    const file = formData.get('file') as File | null;
    const fileType = formData.get('fileType') as FileType | null;

    console.log('File info:', {
      name: file?.name,
      type: file?.type,
      size: file?.size,
      fileType
    });

    // Validate required fields
    if (!file) {
      console.error('No file provided');
      return NextResponse.json<UploadResponse>(
        {
          success: false,
          error: 'No file provided',
          details: 'Please select a file to upload.',
        },
        { status: 400 }
      );
    }

    if (!fileType || (fileType !== 'image' && fileType !== 'pdf')) {
      console.error('Invalid file type:', fileType);
      return NextResponse.json<UploadResponse>(
        {
          success: false,
          error: 'Invalid file type',
          details: 'File type must be either "image" or "pdf".',
        },
        { status: 400 }
      );
    }

    // Determine allowed types based on file type
    const allowedTypes = fileType === 'image'
      ? R2_CONFIG.allowedImageTypes
      : R2_CONFIG.allowedPdfTypes;

    console.log('Allowed types:', allowedTypes);

    // Server-side validation: File type
    const isValidType = validateFileType(file, allowedTypes);
    if (!isValidType) {
      console.error('Invalid file type:', file.type);
      return NextResponse.json<UploadResponse>(
        {
          success: false,
          error: 'Invalid file type',
          details: `Allowed file types: ${allowedTypes.join(', ')}`,
        },
        { status: 400 }
      );
    }

    // Server-side validation: File size
    const isValidSize = validateFileSize(file, R2_CONFIG.maxFileSize);
    if (!isValidSize) {
      const maxSizeMB = (R2_CONFIG.maxFileSize / (1024 * 1024)).toFixed(0);
      console.error('File too large:', file.size);
      return NextResponse.json<UploadResponse>(
        {
          success: false,
          error: 'File too large',
          details: `Maximum file size is ${maxSizeMB}MB.`,
        },
        { status: 400 }
      );
    }

    // Generate file key with folder structure
    const fileKey = generateFileKey(fileType, file.name);
    console.log('File key generated:', fileKey);

    // Create upload command (this now includes file to buffer conversion)
    console.log('Creating upload command...');
    let command: PutObjectCommand;
    try {
      command = await createUploadCommand(fileKey, file);
      console.log('Upload command created successfully');
    } catch (conversionError) {
      console.error('File conversion FAILED:', conversionError);
      return NextResponse.json<UploadResponse>(
        {
          success: false,
          error: 'File conversion failed',
          details: conversionError instanceof Error ? conversionError.message : 'Unknown conversion error',
        },
        { status: 400 }
      );
    }

    // Upload to Cloudflare R2
    console.log('Starting R2 upload...');
    console.log('R2 Config:', {
      bucket: R2_CONFIG.bucketName,
      hasAccountId: !!R2_CONFIG.accountId,
      accountId: R2_CONFIG.accountId?.substring(0, 8) + '...',
    });

    try {
      const result = await r2Client.send(command);
      console.log('R2 upload completed successfully');
      console.log('Upload result:', result);
    } catch (uploadError) {
      console.error('R2 upload FAILED:', uploadError);
      throw uploadError;
    }

    // Generate public URL
    const fileUrl = generatePublicUrl(fileKey);
    console.log('Public URL generated:', fileUrl);

    // Return success response
    const response: UploadResult = {
      success: true,
      fileUrl,
      fileKey,
      fileName: file.name,
      fileSize: file.size,
      fileType,
      uploadedAt: new Date().toISOString(),
    };

    console.log('=== File Upload Successful ===');
    return NextResponse.json<UploadResponse>(response, { status: 200 });
  } catch (error) {
    // Handle R2 or other errors
    console.error('=== File Upload Error ===');
    console.error('Error type:', typeof error);
    console.error('Error constructor:', error?.constructor?.name);
    console.error('Error name:', error instanceof Error ? error.name : 'N/A');
    console.error('Error message:', error instanceof Error ? error.message : 'N/A');

    if (error instanceof Error) {
      console.error('Error stack:', error.stack);
    }

    const errorMessage = handleR2Error(error);
    console.error('Error message:', errorMessage);

    return NextResponse.json<UploadResponse>(
      {
        success: false,
        error: 'Upload failed',
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}
