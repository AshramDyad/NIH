import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { associateCenterFormSchema } from '@/lib/validation/associateCenterFormSchema';
import {
    r2Client,
    R2_CONFIG,
    generatePublicUrl,
    handleR2Error,
} from '@/lib/r2-client';
import { PutObjectCommand } from '@aws-sdk/client-s3';

// Helper to upload file to R2
async function uploadToR2(
    file: File,
    folder: string
): Promise<{ success: boolean; fileUrl?: string; error?: string }> {
    try {
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
        const fileUrl = generatePublicUrl(fileKey);

        return { success: true, fileUrl };
    } catch (error) {
        console.error('Error uploading file to R2:', error);
        const errorMessage = handleR2Error(error);
        return { success: false, error: errorMessage };
    }
}

/**
 * POST /api/associate-center-application
 * Handle Associate Center application form submission
 */
export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        // Extract form fields
        const data = {
            hospitalName: formData.get('hospitalName') as string,
            fullAddress: formData.get('fullAddress') as string,
            district: formData.get('district') as string,
            state: formData.get('state') as string,
            phoneNumber: formData.get('phoneNumber') as string,
            email: formData.get('email') as string,
            website: (formData.get('website') as string) || '',
            administratorName: formData.get('administratorName') as string,
            doctorName: formData.get('doctorName') as string,
            phoneNo: formData.get('phoneNo') as string,
            hospitalOpeningHour: formData.get('hospitalOpeningHour') as string,
            weeklyHolidays: JSON.parse((formData.get('weeklyHolidays') as string) || '[]') as ('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday')[],
            specialFeatures: (formData.get('specialFeatures') as string) || '',
            otherInformation: (formData.get('otherInformation') as string) || '',
        };

        // Validate form data
        const validationResult = associateCenterFormSchema.safeParse(data);

        if (!validationResult.success) {
            const errors = validationResult.error.issues.map((issue) => issue.message).join(', ');
            return NextResponse.json({ success: false, error: errors }, { status: 400 });
        }

        // Get file
        const logoFile = formData.get('logoFile') as File | null;

        if (!logoFile) {
            return NextResponse.json({ success: false, error: 'Logo file is required' }, { status: 400 });
        }

        // Upload logo to R2
        const logoUploadResult = await uploadToR2(logoFile, 'associate-centers/logos');
        if (!logoUploadResult.success) {
            return NextResponse.json(
                { success: false, error: 'Failed to upload logo' },
                { status: 500 }
            );
        }

        // Save to database
        const supabase = await createClient();

        const { error: insertError } = await supabase
            .from('associate_center_applications')
            .insert({
                hospital_name: validationResult.data.hospitalName,
                full_address: validationResult.data.fullAddress,
                district: validationResult.data.district,
                state: validationResult.data.state,
                phone_number: validationResult.data.phoneNumber,
                email: validationResult.data.email,
                website: validationResult.data.website || null,
                administrator_name: validationResult.data.administratorName,
                doctor_name: validationResult.data.doctorName,
                phone_no: validationResult.data.phoneNo,
                hospital_opening_hour: validationResult.data.hospitalOpeningHour,
                weekly_holidays: JSON.stringify(validationResult.data.weeklyHolidays || []),
                special_features: validationResult.data.specialFeatures || null,
                other_information: validationResult.data.otherInformation || null,
                logo_url: logoUploadResult.fileUrl,
            });

        if (insertError) {
            console.error('Error inserting application:', insertError);
            return NextResponse.json(
                { success: false, error: 'Failed to submit application' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Application submitted successfully',
        });
    } catch (error) {
        console.error('Unexpected error in POST /api/associate-center-application:', error);
        return NextResponse.json(
            { success: false, error: 'An unexpected error occurred' },
            { status: 500 }
        );
    }
}
