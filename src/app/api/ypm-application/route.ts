import { NextRequest, NextResponse } from 'next/server';
import {
    r2Client,
    R2_CONFIG,
    generatePublicUrl,
    handleR2Error,
} from '@/lib/r2-client';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { ypmFormSchema } from '@/lib/validation/ypmFormSchema';
import { createClient } from '@/lib/supabase/server';

// Types for response
interface YPMApplicationResponse {
    success: boolean;
    message: string;
    data?: {
        applicationId: string;
        qualificationUrl: string;
        photoUrl: string;
    };
    error?: string;
}

// Max file sizes
const MAX_QUALIFICATION_SIZE = 5 * 1024 * 1024; // 5MB
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

        // Validate qualification file only if provided
        if (qualificationFile && qualificationFile.size > 0) {
            if (qualificationFile.size > MAX_QUALIFICATION_SIZE) {
                return NextResponse.json<YPMApplicationResponse>(
                    {
                        success: false,
                        message: 'Qualification file must be less than 5MB',
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
        }

        // Validate photo file (required)
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

        // Upload qualification file to R2 (optional)
        let qualificationUrl: string | null = null;
        if (qualificationFile && qualificationFile.size > 0) {
            console.log('Uploading qualification file...');
            const qualificationResult = await uploadToR2(
                qualificationFile,
                'ypm-qualifications'
            );
            qualificationUrl = qualificationResult.url;
            console.log('Qualification uploaded:', qualificationUrl);
        }

        // Upload photo file to R2 (required)
        console.log('Uploading photo file...');
        const photoResult = await uploadToR2(photoFile, 'ypm-photos');
        console.log('Photo uploaded:', photoResult.url);

        // Save to Supabase
        const supabase = await createClient();
        const { data: application, error: insertError } = await supabase
            .from('ypm_applications')
            .insert({
                full_name: validationResult.data.fullName,
                last_name: validationResult.data.lastName,
                email: validationResult.data.email,
                mobile: validationResult.data.mobile,
                gender: validationResult.data.gender,
                country: validationResult.data.country,
                state: validationResult.data.state,
                city: validationResult.data.city,
                address: validationResult.data.address,
                pincode: validationResult.data.pincode,
                qualification_url: qualificationUrl,
                photo_url: photoResult.url,
                referred_by: validationResult.data.referredBy || null,
                status: 'pending',
            })
            .select('id')
            .single();

        if (insertError) {
            console.error('Error inserting application:', insertError);
            return NextResponse.json<YPMApplicationResponse>(
                { success: false, message: 'Failed to save application', error: insertError.message },
                { status: 500 }
            );
        }

        console.log('=== YPM Application Saved ===');
        console.log('Application ID:', application.id);

        return NextResponse.json<YPMApplicationResponse>(
            {
                success: true,
                message: 'Application submitted successfully! We will review your application and contact you soon.',
                data: {
                    applicationId: application.id,
                    qualificationUrl: qualificationUrl || '',
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

