/**
 * Storage Test Page
 * Test page to verify Supabase Storage functionality
 */

'use client';

import { useState } from 'react';
import { FileUpload } from '@/components/ui/file-upload';
import { STORAGE_BUCKETS, STORAGE_FOLDERS } from '@/lib/storage';
import type { FileUploadOptions } from '@/lib/storage/types';

export default function StorageTestPage() {
  const [uploadResult, setUploadResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const uploadOptions: FileUploadOptions = {
    bucket: STORAGE_BUCKETS.MEDIA,
    folder: STORAGE_FOLDERS.MEDIA.UPLOADS,
    optimize: true,
    createThumbnail: true,
    allowedTypes: [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/webp',
      'image/gif',
    ],
  };

  const handleUpload = (result: any) => {
    setUploadResult(result);
    setError(null);
    console.log('Upload successful:', result);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    setUploadResult(null);
    console.error('Upload failed:', errorMessage);
  };

  return (
    <div className="container mx-auto py-8 max-w-2xl">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Storage Test</h1>
          <p className="text-muted-foreground mt-2">
            Test Supabase Storage functionality with file uploads
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">File Upload Test</h2>

          <FileUpload
            onUpload={handleUpload}
            onError={handleError}
            options={uploadOptions}
            accept={{
              'image/*': ['.jpeg', '.jpg', '.png', '.webp', '.gif'],
            }}
            maxFiles={1}
          />
        </div>

        {/* Upload Result */}
        {uploadResult && (
          <div className="border rounded-lg p-6 bg-green-50 border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-3">
              Upload Successful! ✅
            </h3>
            <div className="space-y-2 text-sm">
              <div>
                <strong>File Name:</strong> {uploadResult.fileName}
              </div>
              <div>
                <strong>File Path:</strong> {uploadResult.filePath}
              </div>
              <div>
                <strong>File Size:</strong> {uploadResult.fileSize} bytes
              </div>
              <div>
                <strong>File Type:</strong> {uploadResult.fileType}
              </div>
              <div>
                <strong>Public URL:</strong>{' '}
                <a
                  href={uploadResult.publicUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  {uploadResult.publicUrl}
                </a>
              </div>
              {uploadResult.thumbnailUrl && (
                <div>
                  <strong>Thumbnail URL:</strong>{' '}
                  <a
                    href={uploadResult.thumbnailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline break-all"
                  >
                    {uploadResult.thumbnailUrl}
                  </a>
                </div>
              )}
            </div>

            {/* Image Preview */}
            {uploadResult.publicUrl &&
              uploadResult.fileType.startsWith('image/') && (
                <div className="mt-4">
                  <strong className="block mb-2">Preview:</strong>
                  <img
                    src={uploadResult.publicUrl}
                    alt="Uploaded file"
                    className="max-w-full h-auto max-h-64 rounded border"
                  />
                </div>
              )}
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="border rounded-lg p-6 bg-red-50 border-red-200">
            <h3 className="text-lg font-semibold text-red-800 mb-3">
              Upload Failed ❌
            </h3>
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Storage Configuration Info */}
        <div className="border rounded-lg p-6 bg-blue-50 border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">
            Storage Configuration
          </h3>
          <div className="space-y-2 text-sm text-blue-700">
            <div>
              <strong>Bucket:</strong> {uploadOptions.bucket}
            </div>
            <div>
              <strong>Folder:</strong> {uploadOptions.folder}
            </div>
            <div>
              <strong>Optimization:</strong>{' '}
              {uploadOptions.optimize ? 'Enabled' : 'Disabled'}
            </div>
            <div>
              <strong>Thumbnails:</strong>{' '}
              {uploadOptions.createThumbnail ? 'Enabled' : 'Disabled'}
            </div>
            <div>
              <strong>Allowed Types:</strong>{' '}
              {uploadOptions.allowedTypes?.join(', ')}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="border rounded-lg p-6 bg-yellow-50 border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">
            Setup Instructions
          </h3>
          <div className="space-y-2 text-sm text-yellow-700">
            <p>
              1. Make sure you've run:{' '}
              <code className="bg-yellow-100 px-1 rounded">
                pnpm run storage:setup
              </code>
            </p>
            <p>
              2. Apply the storage policies from:{' '}
              <code className="bg-yellow-100 px-1 rounded">
                src/lib/storage/policies.sql
              </code>
            </p>
            <p>
              3. Check your Supabase dashboard to verify buckets are created
            </p>
            <p>4. Ensure your environment variables are properly configured</p>
          </div>
        </div>
      </div>
    </div>
  );
}
