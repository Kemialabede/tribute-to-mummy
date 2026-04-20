import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { writeFile, unlink } from 'fs/promises';
import path from 'path';
import os from 'os';

const getCloudinary = () => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error('Cloudinary credentials not configured');
  }

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
  });

  return cloudinary;
};

export async function POST(request: NextRequest) {
  try {
    const cloudinaryInstance = getCloudinary();
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const tempDir = os.tmpdir();
    const tempPath = path.join(tempDir, `${Date.now()}-${file.name}`);

    await writeFile(tempPath, buffer);

    try {
      const result = await new Promise<{ secure_url: string }>((resolve, reject) => {
        cloudinaryInstance.uploader.upload(
          tempPath,
          {
            folder: 'tributes',
            resource_type: 'image',
            transformation: [
              { width: 800, height: 800, crop: 'limit' },
              { quality: 'auto' }
            ]
          },
          (error: any, result: any) => {
            if (error) reject(error);
            else resolve({ secure_url: result.secure_url });
          }
        );
      });

      return NextResponse.json({ url: result.secure_url });
    } finally {
      try {
        await unlink(tempPath);
      } catch (err) {
        console.error('Failed to delete temp file:', err);
      }
    }
  } catch (error) {
    console.error('Upload error:', error);
    const message = error instanceof Error ? error.message : 'Failed to upload image';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
