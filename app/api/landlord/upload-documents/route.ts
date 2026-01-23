import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, readdir, unlink } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

const UPLOAD_DIR = join(process.cwd(), 'public', 'uploads', 'landlord-documents');
const ALLOWED_FORMATS = ['image/jpeg', 'image/png', 'application/pdf'];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

// Category-specific upload limits
const getMaxUploadsForCategory = (category: string): number => {
  if (category === 'selfieWithId') {
    return 1; // Only 1 selfie allowed
  }
  return 3; // 3 files for other categories
};

export async function GET() {
  try {
    if (!existsSync(UPLOAD_DIR)) {
      return NextResponse.json({
        files: {
          proofOfIdentity: [],
          selfieWithId: [],
          proofOfOwnership: [],
        }
      });
    }

    const files = await readdir(UPLOAD_DIR);
    const categorizedFiles: Record<string, { name: string; timestamp: number }[]> = {
      proofOfIdentity: [],
      selfieWithId: [],
      proofOfOwnership: [],
    };

    files.forEach((file) => {
      const parts = file.split('-');
      if (parts.length >= 3) {
        const category = parts[0];
        const timestamp = parseInt(parts[1]);
        const originalName = parts.slice(2).join('-');
        if (categorizedFiles[category]) {
          categorizedFiles[category].push({ name: originalName, timestamp });
        }
      }
    });

    return NextResponse.json({ files: categorizedFiles });
  } catch (error) {
    console.error('Error listing files:', error);
    return NextResponse.json({ error: 'Failed to list files' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const category = formData.get('category') as string;

    // Validation
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    if (!category) {
      return NextResponse.json(
        { error: 'No category provided' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!ALLOWED_FORMATS.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file format. Only JPG, PNG, and PDF are allowed.' },
        { status: 400 }
      );
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File size exceeds 10MB limit' },
        { status: 400 }
      );
    }

    // Create upload directory if it doesn't exist
    if (!existsSync(UPLOAD_DIR)) {
      await mkdir(UPLOAD_DIR, { recursive: true });
    }

    // Check upload count for this specific category
    try {
      const files = await readdir(UPLOAD_DIR);
      const categoryFiles = files.filter((f) => f.startsWith(`${category}-`));
      const maxAllowed = getMaxUploadsForCategory(category);
      if (categoryFiles.length >= maxAllowed) {
        return NextResponse.json(
          {
            error: `Maximum upload limit reached for this document type. You can upload up to ${maxAllowed} ${maxAllowed === 1 ? 'file' : 'files'} per category.`,
          },
          { status: 400 }
        );
      }
    } catch (error) {
      // Directory doesn't exist yet, which is fine
    }

    // Generate unique filename
    const timestamp = Date.now();
    const originalName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const filename = `${category}-${timestamp}-${originalName}`;
    const filepath = join(UPLOAD_DIR, filename);

    // Convert file to buffer and save
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filepath, buffer);

    return NextResponse.json({
      success: true,
      message: 'File uploaded successfully',
      filename: filename,
      originalName: file.name,
      category: category,
      size: file.size,
      type: file.type,
      uploadedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload file. Please try again.' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const timestamp = searchParams.get('timestamp');

    if (!category || !timestamp) {
      return NextResponse.json(
        { error: 'Category and timestamp are required' },
        { status: 400 }
      );
    }

    // Find and delete the file
    const files = await readdir(UPLOAD_DIR);
    const timestampNum = parseInt(timestamp, 10);
    const fileToDelete = files.find((file) => {
      const parts = file.split('-');
      return parts.length >= 3 && parts[0] === category && parseInt(parts[1], 10) === timestampNum;
    });

    if (!fileToDelete) {
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      );
    }

    const filePath = join(UPLOAD_DIR, fileToDelete);
    await unlink(filePath);

    return NextResponse.json({
      success: true,
      message: 'File deleted successfully',
    });
  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json(
      { error: 'Failed to delete file. Please try again.' },
      { status: 500 }
    );
  }
}
