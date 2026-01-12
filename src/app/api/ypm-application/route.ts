import { NextRequest, NextResponse } from 'next/server';
import {
    r2Client,
    R2_CONFIG,
    generatePublicUrl,
    handleR2Error,
} from '@/lib/r2-client';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { ypmFormSchema } from '@/lib/validation/ypmFormSchema';

// Types for response
interface YPMApplicationResponse {
    success: boolean;
    message: string;
    data?: {
        qualificationUrl: string;
        photoUrl: string;
    };
    error?: string;
}

// Max file sizes
const MAX_QUALIFICATION_SIZE = 200 * 1024; // 200KB
const MAX_PHOTO_SIZE = 10 * 1024 * 1024; // 10MB

// Allowed file types
const ALLOWED_QUALIFICATION_TYPES = [
    'image/jpeg',
    'image/png',
    'image/webp',
    'application/pdf',
];
const ALLOWED_PHOTO_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

// Helper to upload file to R2
async function uploadToR2(
    file: File,
    folder: string
): Promise<{ url: string; key: string }> {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const randomString = Math.random().toString(36).substring(2, 8);
    const extension = file.name.split('.').pop() || '';
    const fileName = `${timestamp}-${randomString}.${extension}`;
    const fileKey = `${folder}/${fileName}`;

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const command = new PutObjectCommand({
        Bucket: R2_CONFIG.bucketName,
        Key: fileKey,
        Body: buffer,
        ContentType: file.type,
    });

    await r2Client.send(command);
    const url = generatePublicUrl(fileKey);

    return { url, key: fileKey };
}

export async function POST(request: NextRequest) {
    try {
        console.log('=== YPM Application Submission Started ===');

        // Parse FormData
        const formData = await request.formData();

        // Extract text fields
        const textFields = {
            fullName: formData.get('fullName') as string,
            lastName: formData.get('lastName') as string,
            email: formData.get('email') as string,
            mobile: formData.get('mobile') as string,
            gender: formData.get('gender') as string,
            country: formData.get('country') as string,
            state: formData.get('state') as string,
            city: formData.get('city') as string,
            address: formData.get('address') as string,
            pincode: formData.get('pincode') as string,
            membershipType: formData.get('membershipType') === 'true',
            referredBy: (formData.get('referredBy') as string) || '',
            confirmationChecked: formData.get('confirmationChecked') === 'true',
        };

        // Validate text fields with zod
        const validationResult = ypmFormSchema.safeParse(textFields);
        if (!validationResult.success) {
            const errors = validationResult.error.issues
                .map((issue) => issue.message)
                .join(', ');
            return NextResponse.json<YPMApplicationResponse>(
                { success: false, message: 'Validation failed', error: errors },
                { status: 400 }
            );
        }

        // Get files
        const qualificationFile = formData.get('qualificationFile') as File | null;
        const photoFile = formData.get('photoFile') as File | null;

        // Validate qualification file
        if (!qualificationFile) {
            return NextResponse.json<YPMApplicationResponse>(
                { success: false, message: 'Qualification file is required' },
                { status: 400 }
            );
        }

        if (qualificationFile.size > MAX_QUALIFICATION_SIZE) {
            return NextResponse.json<YPMApplicationResponse>(
                {
                    success: false,
                    message: 'Qualification file must be less than 200KB',
                },
                { status: 400 }
            );
        }

        if (!ALLOWED_QUALIFICATION_TYPES.includes(qualificationFile.type)) {
            return NextResponse.json<YPMApplicationResponse>(
                {
                    success: false,
                    message: 'Qualification file must be an image or PDF',
                },
                { status: 400 }
            );
        }

        // Validate photo file
        if (!photoFile) {
            return NextResponse.json<YPMApplicationResponse>(
                { success: false, message: 'Profile photo is required' },
                { status: 400 }
            );
        }

        if (photoFile.size > MAX_PHOTO_SIZE) {
            return NextResponse.json<YPMApplicationResponse>(
                { success: false, message: 'Profile photo must be less than 10MB' },
                { status: 400 }
            );
        }

        if (!ALLOWED_PHOTO_TYPES.includes(photoFile.type)) {
            return NextResponse.json<YPMApplicationResponse>(
                { success: false, message: 'Profile photo must be an image' },
                { status: 400 }
            );
        }

        // Upload files to R2
        console.log('Uploading qualification file...');
        const qualificationResult = await uploadToR2(
            qualificationFile,
            'ypm-qualifications'
        );
        console.log('Qualification uploaded:', qualificationResult.url);

        console.log('Uploading photo file...');
        const photoResult = await uploadToR2(photoFile, 'ypm-photos');
        console.log('Photo uploaded:', photoResult.url);

        // Log submission data (prototype - database can be added later)
        console.log('=== YPM Application Data ===');
        console.log('Full Name:', validationResult.data.fullName);
        console.log('Last Name:', validationResult.data.lastName);
        console.log('Email:', validationResult.data.email);
        console.log('Mobile:', validationResult.data.mobile);
        console.log('Gender:', validationResult.data.gender);
        console.log('Country:', validationResult.data.country);
        console.log('State:', validationResult.data.state);
        console.log('City:', validationResult.data.city);
        console.log('Address:', validationResult.data.address);
        console.log('Pincode:', validationResult.data.pincode);
        console.log('Referred By:', validationResult.data.referredBy || 'N/A');
        console.log('Qualification URL:', qualificationResult.url);
        console.log('Photo URL:', photoResult.url);
        console.log('=== End Application Data ===');

        return NextResponse.json<YPMApplicationResponse>(
            {
                success: true,
                message: 'Application submitted successfully!',
                data: {
                    qualificationUrl: qualificationResult.url,
                    photoUrl: photoResult.url,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('YPM Application Error:', error);
        const errorMessage = handleR2Error(error);
        return NextResponse.json<YPMApplicationResponse>(
            { success: false, message: 'Submission failed', error: errorMessage },
            { status: 500 }
        );
    }
}
