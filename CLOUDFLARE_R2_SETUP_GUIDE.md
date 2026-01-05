# Complete Guide: Uploading Images and PDFs to Cloudflare R2 for Your NIH Project

## Table of Contents
1. [What is Cloudflare R2 and Why Use It?](#what-is-cloudflare-r2-and-why-use-it)
2. [Step-by-Step Setup](#step-by-step-setup)
3. [How to Upload Images and PDFs](#how-to-upload-images-and-pdfs)
4. [How It Works in Local Development](#how-it-works-in-local-development)
5. [How It Works in Production](#how-it-works-in-production)
6. [Security Best Practices](#security-best-practices)
7. [Costs and Limits](#costs-and-limits)
8. [Migrating from Supabase](#migrating-from-supabase)
9. [Complete Next.js Integration](#complete-nextjs-integration)

---

## What is Cloudflare R2 and Why Use It?

**Cloudflare R2** is an object storage service (like Amazon S3) that lets you store files such as images, PDFs, videos, and other documents in the cloud.

### Key Benefits for Your NIH Project:

1. **Zero Egress Fees**: Unlike AWS S3 or Supabase Storage, Cloudflare R2 does NOT charge for data transfer out (downloading files). This can save you up to 99% on bandwidth costs.

2. **Unlimited Bandwidth**: You can serve as many images and PDFs as you want without worrying about data transfer costs.

3. **Free Tier**: You get 10 GB of storage, 1 million upload operations, and 10 million download operations per month for free.

4. **Global CDN**: Files are cached and delivered from Cloudflare's global network, making them load fast for users anywhere in the world.

5. **S3 Compatible**: You can use AWS SDKs and tools you already know, making integration easy.

6. **No Vendor Lock-in**: R2 follows S3 standards, so you can easily migrate to other providers if needed.

### Why Move from Supabase Storage to R2?

- **Cost Savings**: Supabase charges for bandwidth, R2 does not
- **Better Performance**: Cloudflare's global CDN provides faster delivery
- **Higher Free Tier**: 10 GB vs Supabase's 1 GB free storage
- **More Operations**: Free tier includes millions of operations per month

---

## Step-by-Step Setup

### Step 1: Create a Cloudflare Account

1. Go to [cloudflare.com](https://cloudflare.com)
2. Sign up for a free account (if you don't have one)
3. Verify your email address

### Step 2: Purchase R2 Storage

1. Log in to your Cloudflare Dashboard
2. In the left sidebar, click on **R2 object storage**
3. If you haven't purchased R2 yet, click **Purchase R2**
4. Select the free plan (you don't need to add payment method for the free tier)

### Step 3: Create an R2 Bucket

A "bucket" is like a folder where you store all your files.

1. In the Cloudflare Dashboard, go to **R2 object storage**
2. Click **Create bucket**
3. Enter a name for your bucket (e.g., `nih-assets`)
4. Click **Create bucket**

**Important**: Your bucket name must be unique across all Cloudflare R2 users. If a name is already taken, you'll need to choose a different one.

### Step 4: Get Your API Credentials

You need credentials to connect your Next.js application to R2.

1. Go to your R2 bucket page
2. Click on **Settings** tab
3. Scroll down to **R2 API Tokens**
4. Click **Manage R2 API Tokens**
5. Click **Create API Token**
6. Select these permissions:
   - **Object Read & Write** (to upload and download files)
7. You can leave the scope as "Account" to allow access to all buckets
8. Click **Continue to summary** and then **Create Token**

**IMPORTANT**: Copy and save these credentials somewhere safe. You will not see the Secret Access Key again:
- **Access Key ID**: Your username for API access
- **Secret Access Key**: Your password for API access
- **Account ID**: Your unique Cloudflare account identifier (found in the right sidebar of the dashboard)

---

## How to Upload Images and PDFs

There are multiple ways to upload files to Cloudflare R2:

### Method 1: Using the Cloudflare Dashboard (Manual Upload)

**Best for**: Initial setup, uploading a few files manually

1. Go to your R2 bucket in the Cloudflare Dashboard
2. Click on your bucket name
3. Click **Upload** button
4. Drag and drop files or click "Select from computer"
5. Wait for upload to complete

**Note**: This method is fine for one-time setup but not practical for large numbers of files or ongoing uploads.

### Method 2: Using AWS SDK with Next.js (Automated Upload)

**Best for**: Uploading files from your Next.js application

First, install the AWS SDK:

```bash
# Using npm
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner

# Using pnpm (recommended for your project)
pnpm add @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
```

Create a configuration file at `src/lib/r2-client.ts`:

```typescript
import { S3Client } from '@aws-sdk/client-s3';

// Initialize S3 client for R2
export const r2Client = new S3Client({
  region: 'auto', // R2 ignores region but AWS SDK requires it
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

// Your bucket name
export const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME!;
```

Add environment variables to `.env.local`:

```bash
# Cloudflare R2 Credentials
R2_ACCOUNT_ID=your_account_id_here
R2_ACCESS_KEY_ID=your_access_key_id_here
R2_SECRET_ACCESS_KEY=your_secret_access_key_here
R2_BUCKET_NAME=nih-assets
```

Create an upload utility at `src/lib/r2-upload.ts`:

```typescript
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { r2Client, R2_BUCKET_NAME } from './r2-client';

/**
 * Upload a file to Cloudflare R2
 * @param file - The file to upload
 * @param key - The path/filename in R2 (e.g., "images/logo.png")
 * @param contentType - MIME type of the file
 */
export async function uploadToR2(
  file: Buffer | Uint8Array | string,
  key: string,
  contentType: string
): Promise<string> {
  try {
    const command = new PutObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: key,
      Body: file,
      ContentType: contentType,
    });

    await r2Client.send(command);
    return key;
  } catch (error) {
    console.error('Error uploading to R2:', error);
    throw error;
  }
}

/**
 * Generate a public URL for a file in R2
 * @param key - The path/filename in R2
 */
export function getPublicUrl(key: string): string {
  // If using r2.dev domain (for development):
  return `https://pub-${process.env.R2_ACCOUNT_ID}.r2.dev/${R2_BUCKET_NAME}/${key}`;

  // If using custom domain (for production):
  // return `https://cdn.yourdomain.com/${key}`;
}
```

### Method 3: Using Presigned URLs (User Uploads)

**Best for**: Allowing users to upload files directly to R2 without exposing your credentials

Create an API route at `src/app/api/upload/presigned-url/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { r2Client, R2_BUCKET_NAME } from '@/lib/r2-client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { filename, contentType } = body;

    // Generate presigned URL for upload
    const command = new PutObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: `uploads/${filename}`,
      ContentType: contentType,
    });

    const signedUrl = await getSignedUrl(r2Client, command, {
      expiresIn: 3600, // URL valid for 1 hour
    });

    return NextResponse.json({ url: signedUrl, key: `uploads/${filename}` });
  } catch (error) {
    console.error('Error generating presigned URL:', error);
    return NextResponse.json(
      { error: 'Failed to generate upload URL' },
      { status: 500 }
    );
  }
}
```

### Method 4: Bulk Upload Using Wrangler CLI

**Best for**: Migrating existing files from local folder or another storage

First, install Wrangler:

```bash
pnpm add -D wrangler@latest
```

Login to Wrangler:

```bash
npx wrangler login
```

Upload all files from a folder:

```bash
# Upload all files from ./public/images to R2 bucket
npx wrangler r2 object put nih-assets/images --path=./public/images --recursive

# Upload specific file
npx wrangler r2 object put nih-assets/file.pdf --file=./file.pdf
```

---

## How It Works in Local Development

### Understanding Local vs Production

In local development, your Next.js app runs on your computer (`localhost:3000`). However, your files are still stored in Cloudflare R2 (in the cloud), not locally.

### How Images Load in Local Development

**Scenario**: You're developing on `http://localhost:3000` and want to display an image stored in R2.

1. Your HTML/React code requests an image: `<img src="https://pub-abc123.r2.dev/nih-assets/images/logo.png" />`

2. The request goes to Cloudflare's servers (not your localhost)

3. Cloudflare serves the image from R2 storage

4. Your browser displays the image

**Key Point**: The images are NOT stored on your local computer. They are always fetched from Cloudflare, even in development.

### Setting Up for Local Development

1. Create `.env.local` file in your project root (this file is git-ignored by default)

2. Add your R2 credentials:

```bash
R2_ACCOUNT_ID=your_account_id
R2_ACCESS_KEY_ID=your_access_key_id
R2_SECRET_ACCESS_KEY=your_secret_access_key
R2_BUCKET_NAME=nih-assets
```

3. In your code, reference images using the R2 URL:

```tsx
// Example Next.js component
export default function Header() {
  return (
    <header>
      <img
        src={`https://pub-${process.env.R2_ACCOUNT_ID}.r2.dev/${process.env.R2_BUCKET_NAME}/images/logo.png`}
        alt="NIH Logo"
      />
    </header>
  );
}
```

### Creating a Helper for URLs

Create `src/lib/r2-url.ts`:

```typescript
/**
 * Get the URL for a file in R2
 * @param key - The path to the file in R2 (e.g., "images/logo.png")
 * @returns Full URL to the file
 */
export function getR2Url(key: string): string {
  const accountId = process.env.R2_ACCOUNT_ID;
  const bucketName = process.env.R2_BUCKET_NAME;

  // For local development
  if (process.env.NODE_ENV === 'development') {
    return `https://pub-${accountId}.r2.dev/${bucketName}/${key}`;
  }

  // For production (with custom domain)
  return `https://cdn.yourdomain.com/${key}`;
}
```

Now use it in your components:

```tsx
import { getR2Url } from '@/lib/r2-url';

export default function ProfileImage() {
  return (
    <img
      src={getR2Url('images/profile.jpg')}
      alt="Profile"
      className="rounded-full"
    />
  );
}
```

### Testing Uploads Locally

To test file uploads in local development:

```typescript
// Example: Upload API route
import { NextRequest, NextResponse } from 'next/server';
import { uploadToR2 } from '@/lib/r2-upload';
import { getR2Url } from '@/lib/r2-url';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  try {
    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Upload to R2
    const key = `uploads/${Date.now()}-${file.name}`;
    await uploadToR2(buffer, key, file.type);

    // Return the public URL
    const url = getR2Url(key);
    return NextResponse.json({ url, key });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    );
  }
}
```

---

## How It Works in Production

### Production Setup Overview

In production, your Next.js app is deployed (likely to Vercel or another platform), and you want your images to:

1. Load fast globally using Cloudflare's CDN
2. Use a professional domain (e.g., `cdn.yourdomain.com`)
3. Have proper caching and security

### Step 1: Enable Public Access with Custom Domain

**Why Custom Domain?**
- Professional appearance
- Better caching with Cloudflare CDN
- Can use WAF, access controls, and security features
- Better for SEO

#### Adding Custom Domain to R2 Bucket

1. In Cloudflare Dashboard, go to your R2 bucket
2. Click **Settings** tab
3. Under **Custom Domains**, click **Add**
4. Enter your subdomain (e.g., `cdn.yourdomain.com`)
5. Click **Continue** and review the DNS record
6. Click **Connect Domain**

**Important**: The domain must already be added to your Cloudflare account as a zone.

### Step 2: Configure DNS

After connecting the domain, Cloudflare automatically creates a CNAME DNS record. Verify it:

1. In Cloudflare Dashboard, go to **DNS** section
2. Find the CNAME record for your CDN subdomain
3. It should point to your R2 bucket

### Step 3: Test the Domain

Wait a few minutes for DNS to propagate, then test:

```bash
# Test with curl
curl -I https://cdn.yourdomain.com/images/logo.png
```

You should see a 200 OK response.

### Step 4: Update Production Environment Variables

In your production environment (Vercel, Netlify, or wherever you deploy):

Add these environment variables:

```bash
R2_ACCOUNT_ID=your_account_id
R2_ACCESS_KEY_ID=your_access_key_id
R2_SECRET_ACCESS_KEY=your_secret_access_key
R2_BUCKET_NAME=nih-assets
R2_PUBLIC_URL=https://cdn.yourdomain.com
```

### Step 5: Update Your URL Helper for Production

Modify `src/lib/r2-url.ts`:

```typescript
/**
 * Get the URL for a file in R2
 * @param key - The path to the file in R2
 * @returns Full URL to the file
 */
export function getR2Url(key: string): string {
  const accountId = process.env.R2_ACCOUNT_ID;
  const bucketName = process.env.R2_BUCKET_NAME;

  // Use explicit public URL if set (production)
  if (process.env.R2_PUBLIC_URL) {
    return `${process.env.R2_PUBLIC_URL}/${key}`;
  }

  // For local development, use r2.dev
  return `https://pub-${accountId}.r2.dev/${bucketName}/${key}`;
}
```

### How Images Show in Production

**Scenario**: A user visits your deployed website at `https://yourdomain.com`

1. User's browser requests page from your Next.js app
2. Page contains: `<img src="https://cdn.yourdomain.com/images/logo.png" />`
3. DNS resolves `cdn.yourdomain.com` to Cloudflare's edge servers
4. Request goes to nearest Cloudflare data center
5. If image is cached there, it's served instantly (cached response)
6. If not cached, Cloudflare fetches from R2 and caches it
7. User sees the image

### Caching Benefits

With custom domain and Cloudflare CDN:

- **First Request**: Image fetched from R2, cached at Cloudflare edge
- **Subsequent Requests**: Served from cache (much faster)
- **Global Access**: Users worldwide get fast delivery from nearest data center

### Image Optimization (Optional)

Cloudflare offers image optimization features:

#### Using Cloudflare Images

If you enable Cloudflare Images, you can transform images on-the-fly:

```tsx
// Original image: https://cdn.yourdomain.com/images/large.jpg
// Resized version:
<img
  src="https://cdn.yourdomain.com/cdn-cgi/image/width=400,quality=80/images/large.jpg"
  alt="Optimized Image"
/>
```

**Transformation Options**:
- `width=400`: Resize width to 400px
- `height=300`: Resize height to 300px
- `quality=80`: Set JPEG quality to 80%
- `format=webp`: Convert to WebP format

**Note**: This requires a paid Cloudflare Images plan for >5000 transformations/month.

---

## Security Best Practices

### 1. Never Commit Credentials to Git

Always use environment variables. Your `.env.local` file should be in `.gitignore`:

```gitignore
# .gitignore
.env.local
.env*.local
```

### 2. Use Presigned URLs for User Uploads

Never expose your API credentials on the client side. Instead:

1. Generate presigned URL on your server (API route)
2. Send presigned URL to client
3. Client uploads directly to R2 using that URL

### 3. Configure CORS

If you're making browser requests to R2 (for presigned URLs), configure CORS:

1. Go to your R2 bucket in Cloudflare Dashboard
2. Click **Settings** tab
3. Find **CORS Policy** section
4. Add a CORS policy:

```json
[
  {
    "AllowedOrigins": ["https://yourdomain.com"],
    "AllowedMethods": ["GET", "PUT"],
    "AllowedHeaders": ["Content-Type", "Content-Length"],
    "MaxAgeSeconds": 3600
  }
]
```

### 4. Use Appropriate Expiration Times

For presigned URLs, use short expiration times:

```typescript
// Good: 1 hour for uploads
{ expiresIn: 3600 }

// Too long: 7 days is risky
{ expiresIn: 604800 }
```

### 5. Restrict Content-Type in Presigned URLs

```typescript
const command = new PutObjectCommand({
  Bucket: R2_BUCKET_NAME,
  Key: key,
  ContentType: 'image/png', // Only allow PNG uploads
});
```

If user tries to upload a different file type, it will fail.

### 6. Monitor Access

Regularly check your R2 bucket access logs in Cloudflare Dashboard to:
- Detect unusual download patterns
- Find suspicious access attempts
- Monitor bandwidth usage

### 7. Use Zero Trust for Private Content

If you have sensitive PDFs or images:

1. Enable Cloudflare Access on your custom domain
2. Only authenticated users can access the files
3. Or use presigned URLs with authentication on your server

---

## Costs and Limits

### Free Tier (No Payment Required)

- **Storage**: 10 GB per month
- **Class A Operations** (uploads, etc.): 1,000,000 per month
- **Class B Operations** (downloads, etc.): 10,000,000 per month
- **Egress (bandwidth)**: FREE (unlimited!)

### Paid Tier (If You Exceed Free Limits)

- **Storage**: $0.015 per GB-month
- **Class A Operations**: $4.50 per million requests
- **Class B Operations**: $0.36 per million requests
- **Egress**: STILL FREE!

### What This Means for Your NIH Project

**Example Scenario**:
- 500 images at 1 MB each = 0.5 GB storage
- 1,000 page views per day = 30,000 image loads per month

**Cost**: $0 (well within free tier)

**Comparison with Supabase**:
- Supabase Free: 1 GB storage, 2 GB bandwidth
- Supabase Pro: $25/month for 8 GB storage + limited bandwidth
- **R2**: 10 GB storage + UNLIMITED bandwidth for $0

### Operation Types

**Class A Operations** (write):
- Upload file
- Delete file
- List objects
- Copy object

**Class B Operations** (read):
- Download file
- Get object metadata
- Head object

---

## Migrating from Supabase

### Understanding the Migration

You'll move files from Supabase Storage to Cloudflare R2:

**Source**: Supabase Storage bucket
**Destination**: Cloudflare R2 bucket

### Step 1: Download Files from Supabase

If you have files in Supabase, download them first:

**Option A: Using Supabase CLI**

```bash
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Download bucket contents
supabase storage cp -r -p supabase-bucket-name ./local-backup
```

**Option B: Using Your App**

Create a script to download files:

```typescript
// scripts/download-from-supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

async function downloadAllFiles() {
  const { data, error } = await supabase
    .storage
    .from('your-bucket')
    .list('', { limit: 1000 });

  if (error) throw error;

  for (const file of data!) {
    if (file.name) {
      const { data: fileData } = await supabase
        .storage
        .from('your-bucket')
        .download(file.name);

      // Save to local filesystem
      // (implementation depends on your needs)
    }
  }
}

downloadAllFiles();
```

### Step 2: Upload to Cloudflare R2

**Option A: Using Wrangler CLI**

```bash
# Upload all files from ./local-backup to R2
npx wrangler r2 object put nih-assets --path=./local-backup --recursive
```

**Option B: Using Migration Script**

```typescript
// scripts/migrate-to-r2.ts
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { r2Client, R2_BUCKET_NAME } from '../src/lib/r2-client';
import fs from 'fs/promises';
import path from 'path';

async function migrateFiles(dir: string, prefix: string = '') {
  const files = await fs.readdir(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    const r2Key = prefix ? `${prefix}/${file.name}` : file.name;

    if (file.isDirectory()) {
      await migrateFiles(fullPath, r2Key);
    } else {
      const content = await fs.readFile(fullPath);
      const command = new PutObjectCommand({
        Bucket: R2_BUCKET_NAME,
        Key: r2Key,
        Body: content,
        ContentType: getMimeType(file.name),
      });

      await r2Client.send(command);
      console.log(`Uploaded: ${r2Key}`);
    }
  }
}

function getMimeType(filename: string): string {
  const ext = path.extname(filename).toLowerCase();
  const mimeTypes: Record<string, string> = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.pdf': 'application/pdf',
    '.svg': 'image/svg+xml',
  };
  return mimeTypes[ext] || 'application/octet-stream';
}

migrateFiles('./local-backup');
```

### Step 3: Update Your Code

Replace Supabase URLs with R2 URLs:

**Before** (Supabase):
```tsx
<img
  src="https://xxx.supabase.co/storage/v1/object/public/bucket/images/logo.png"
  alt="Logo"
/>
```

**After** (R2):
```tsx
<img
  src={getR2Url('images/logo.png')}
  alt="Logo"
/>
```

### Step 4: Test Thoroughly

1. Test all images display correctly
2. Test PDF downloads work
3. Test file uploads (if you have them)
4. Check performance improvements

### Step 5: Delete from Supabase (Optional)

Once you've verified everything works with R2:

1. Delete files from Supabase Storage
2. Remove Supabase storage references from code
3. Remove Supabase storage SDK if no longer needed

---

## Complete Next.js Integration

### Full Project Setup

#### 1. Install Dependencies

```bash
pnpm add @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
```

#### 2. Create Configuration File

**File**: `src/lib/r2-client.ts`

```typescript
import { S3Client } from '@aws-sdk/client-s3';

export const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

export const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME!;
```

#### 3. Create Upload Utility

**File**: `src/lib/r2-upload.ts`

```typescript
import { PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { r2Client, R2_BUCKET_NAME } from './r2-client';

export async function uploadToR2(
  file: Buffer | Uint8Array | string,
  key: string,
  contentType: string
): Promise<string> {
  const command = new PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: key,
    Body: file,
    ContentType: contentType,
  });

  await r2Client.send(command);
  return key;
}

export async function getPresignedUploadUrl(
  key: string,
  contentType: string,
  expiresIn: number = 3600
): Promise<string> {
  const command = new PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: key,
    ContentType: contentType,
  });

  return await getSignedUrl(r2Client, command, { expiresIn });
}

export async function getPresignedDownloadUrl(
  key: string,
  expiresIn: number = 3600
): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: key,
  });

  return await getSignedUrl(r2Client, command, { expiresIn });
}
```

#### 4. Create URL Helper

**File**: `src/lib/r2-url.ts`

```typescript
export function getR2Url(key: string): string {
  // Production: Use custom domain
  if (process.env.R2_PUBLIC_URL) {
    return `${process.env.R2_PUBLIC_URL}/${key}`;
  }

  // Development: Use r2.dev
  const accountId = process.env.R2_ACCOUNT_ID;
  const bucketName = process.env.R2_BUCKET_NAME;
  return `https://pub-${accountId}.r2.dev/${bucketName}/${key}`;
}
```

#### 5. Create API Route for Uploads

**File**: `src/app/api/upload/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { uploadToR2 } from '@/lib/r2-upload';
import { getR2Url } from '@/lib/r2-url';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const folder = formData.get('folder') as string || 'uploads';

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Generate unique filename
    const ext = file.name.split('.').pop();
    const filename = `${crypto.randomUUID()}.${ext}`;
    const key = `${folder}/${filename}`;

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Upload to R2
    await uploadToR2(buffer, key, file.type);

    // Return public URL
    const url = getR2Url(key);

    return NextResponse.json({
      success: true,
      url,
      key,
      filename: file.name,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    );
  }
}
```

#### 6. Create API Route for Presigned URL

**File**: `src/app/api/upload/presigned/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { getPresignedUploadUrl } from '@/lib/r2-upload';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { filename, contentType, folder = 'uploads' } = body;

    const key = `${folder}/${filename}`;
    const url = await getPresignedUploadUrl(key, contentType);

    return NextResponse.json({
      success: true,
      url,
      key,
    });
  } catch (error) {
    console.error('Error generating presigned URL:', error);
    return NextResponse.json(
      { error: 'Failed to generate URL' },
      { status: 500 }
    );
  }
}
```

#### 7. Create React Component for Upload

**File**: `src/components/FileUpload.tsx`

```tsx
'use client';

import { useState, useRef } from 'react';
import { getR2Url } from '@/lib/r2-url';

export function FileUpload({ folder = 'uploads' }: { folder?: string }) {
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    try {
      // Method 1: Upload via API (server handles R2)
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', folder);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setUploadedUrl(data.url);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        disabled={uploading}
        className="block w-full text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100"
      />

      {uploading && <p className="text-sm text-slate-600">Uploading...</p>}

      {uploadedUrl && (
        <div className="space-y-2">
          <p className="text-sm text-green-600">Upload successful!</p>
          <img
            src={uploadedUrl}
            alt="Uploaded"
            className="max-w-full h-auto rounded"
          />
          <p className="text-xs text-slate-500 break-all">
            URL: {uploadedUrl}
          </p>
        </div>
      )}
    </div>
  );
}
```

#### 8. Using Images in Your Pages

**File**: `src/app/page.tsx`

```tsx
import { getR2Url } from '@/lib/r2-url';

export default function Home() {
  return (
    <main>
      {/* Display static image */}
      <img
        src={getR2Url('images/hero-banner.jpg')}
        alt="Hero Banner"
        className="w-full h-96 object-cover"
      />

      {/* Display PDF download link */}
      <a
        href={getR2Url('documents/brochure.pdf')}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Download Brochure (PDF)
      </a>
    </main>
  );
}
```

#### 9. Environment Variables Setup

**Development**: `.env.local`

```bash
R2_ACCOUNT_ID=your_account_id
R2_ACCESS_KEY_ID=your_access_key_id
R2_SECRET_ACCESS_KEY=your_secret_access_key
R2_BUCKET_NAME=nih-assets
```

**Production**: Set in your deployment platform (Vercel, Netlify, etc.)

```bash
R2_ACCOUNT_ID=your_account_id
R2_ACCESS_KEY_ID=your_access_key_id
R2_SECRET_ACCESS_KEY=your_secret_access_key
R2_BUCKET_NAME=nih-assets
R2_PUBLIC_URL=https://cdn.yourdomain.com
```

---

## Summary Checklist

### Setup Checklist
- [ ] Create Cloudflare account
- [ ] Purchase R2 (free plan)
- [ ] Create R2 bucket
- [ ] Get API credentials (Access Key ID, Secret Access Key, Account ID)
- [ ] Add custom domain to bucket (for production)
- [ ] Configure DNS for custom domain
- [ ] Install AWS SDK packages
- [ ] Create R2 client configuration
- [ ] Set up environment variables (local and production)
- [ ] Create upload utilities and helpers

### Migration Checklist
- [ ] Download files from Supabase Storage
- [ ] Upload files to Cloudflare R2
- [ ] Update code to use R2 URLs instead of Supabase URLs
- [ ] Test all images display correctly
- [ ] Test all PDF downloads work
- [ ] Test file uploads (if applicable)
- [ ] Verify performance improvements
- [ ] Delete old files from Supabase (optional)

### Security Checklist
- [ ] Never commit credentials to Git
- [ ] Use presigned URLs for user uploads
- [ ] Configure CORS policy
- [ ] Use short expiration times for presigned URLs
- [ ] Restrict content types when possible
- [ ] Enable access controls for sensitive content
- [ ] Monitor access logs regularly

---

## Common Issues and Solutions

### Issue: "SignatureDoesNotMatch" Error

**Cause**: Wrong credentials or endpoint configuration

**Solution**:
1. Verify your Account ID is correct
2. Verify Access Key ID and Secret Access Key
3. Check endpoint URL format: `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`

### Issue: CORS Errors in Browser

**Cause**: Browser trying to access R2 without proper CORS configuration

**Solution**:
1. Add CORS policy to your R2 bucket
2. Include your domain in `AllowedOrigins`
3. Include necessary methods in `AllowedMethods`

### Issue: Images Not Loading

**Cause**: Wrong URL format or bucket name

**Solution**:
1. Verify bucket name is correct
2. Check URL format: `https://pub-<ACCOUNT_ID>.r2.dev/<BUCKET>/<KEY>`
3. For custom domain: `https://<DOMAIN>/<KEY>`

### Issue: Uploads Failing

**Cause**: Large files, network issues, or permission problems

**Solution**:
1. Check file size (R2 supports very large files)
2. Verify credentials have write permissions
3. Check network connectivity
4. Review Cloudflare Dashboard logs

### Issue: Custom Domain Not Working

**Cause**: DNS not propagated or incorrect setup

**Solution**:
1. Wait 5-10 minutes for DNS propagation
2. Verify DNS record exists and is correct
3. Check custom domain status in Cloudflare Dashboard (should be "Active")

---

## Resources

### Official Documentation
- [Cloudflare R2 Getting Started](https://developers.cloudflare.com/r2/get-started/)
- [Cloudflare R2 Pricing](https://developers.cloudflare.com/r2/pricing/)
- [Public Buckets Documentation](https://developers.cloudflare.com/r2/buckets/public-buckets/)
- [Presigned URLs Documentation](https://developers.cloudflare.com/r2/api/s3/presigned-urls/)

### Tools
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- [AWS SDK for JavaScript](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html)

### Migration Tools
- [Super Slurper](https://developers.cloudflare.com/r2/data-migration/super-slurper) - Cloudflare's migration tool
- [rclone](https://rclone.org/) - Open source sync tool for cloud storage

---

## Quick Reference

### Common Commands

```bash
# Install Wrangler
pnpm add -D wrangler@latest

# Login to Cloudflare
npx wrangler login

# Create bucket
npx wrangler r2 bucket create nih-assets

# List buckets
npx wrangler r2 bucket list

# Upload single file
npx wrangler r2 object put nih-assets/logo.png --file=./logo.png

# Upload directory
npx wrangler r2 object put nih-assets --path=./public/images --recursive

# List objects in bucket
npx wrangler r2 object list nih-assets

# Delete object
npx wrangler r2 object delete nih-assets/logo.png
```

### Environment Variables

```bash
R2_ACCOUNT_ID=your_account_id_here
R2_ACCESS_KEY_ID=your_access_key_id_here
R2_SECRET_ACCESS_KEY=your_secret_access_key_here
R2_BUCKET_NAME=nih-assets
R2_PUBLIC_URL=https://cdn.yourdomain.com
```

### URL Formats

**Development**:
```
https://pub-<ACCOUNT_ID>.r2.dev/<BUCKET>/<KEY>
```

**Production**:
```
https://cdn.yourdomain.com/<KEY>
```

**Example**:
```
Development: https://pub-abc123.r2.dev/nih-assets/images/logo.png
Production:  https://cdn.yourdomain.com/images/logo.png
```

---

## Conclusion

By migrating your NIH project's images and PDFs to Cloudflare R2, you will:

1. **Save Money**: No egress fees, generous free tier
2. **Improve Performance**: Global CDN for faster loading
3. **Simplify**: S3-compatible, easy to use with Next.js
4. **Scale**: Handle unlimited bandwidth without cost concerns
5. **Future-Proof**: No vendor lock-in, easy to migrate if needed

The setup requires initial configuration, but once complete, your file storage will be reliable, fast, and cost-effective for years to come.

For your specific NIH project:
- Images will load fast globally
- PDFs will be accessible worldwide
- Bandwidth costs will be zero
- You can focus on building features instead of managing storage
