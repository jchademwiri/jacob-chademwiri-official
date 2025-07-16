# Supabase Storage Setup

This module provides a complete Supabase Storage implementation for the portfolio website, including file upload, optimization, and management capabilities.

## Features

- ✅ **Multiple Storage Buckets**: Organized storage for different content types
- ✅ **File Upload & Optimization**: Automatic image optimization and thumbnail generation
- ✅ **Security Policies**: Row Level Security (RLS) for secure file access
- ✅ **React Hooks**: Easy-to-use hooks for file operations
- ✅ **Media Management**: Database integration for file metadata
- ✅ **File Organization**: Structured folder organization
- ✅ **Type Safety**: Full TypeScript support

## Storage Buckets

| Bucket         | Purpose               | File Types   | Size Limit |
| -------------- | --------------------- | ------------ | ---------- |
| `media`        | General media uploads | Images       | 10MB       |
| `case-studies` | Case study assets     | Images, PDFs | 10MB       |
| `insights`     | Blog post images      | Images       | 10MB       |
| `avatars`      | User profile pictures | Images       | 5MB        |

## Quick Start

### 1. Setup Storage Buckets

```bash
pnpm run storage:setup
```

### 2. Apply Security Policies

1. Open your Supabase Dashboard
2. Go to SQL Editor
3. Run the SQL commands from `src/lib/storage/policies.sql`

### 3. Use in Components

```tsx
import { FileUpload } from '@/components/ui/file-upload';
import { STORAGE_BUCKETS, STORAGE_FOLDERS } from '@/lib/storage';

function MyComponent() {
  const uploadOptions = {
    bucket: STORAGE_BUCKETS.MEDIA,
    folder: STORAGE_FOLDERS.MEDIA.UPLOADS,
    optimize: true,
    createThumbnail: true,
  };

  return (
    <FileUpload
      options={uploadOptions}
      onUpload={(result) => console.log('Uploaded:', result)}
      onError={(error) => console.error('Error:', error)}
    />
  );
}
```

## API Reference

### Storage Client

```tsx
import { storageClient } from '@/lib/storage';

// Upload a file
const result = await storageClient.uploadFile(file, {
  bucket: 'media',
  folder: 'uploads',
  optimize: true,
  createThumbnail: true,
});

// Delete a file
await storageClient.deleteFile('media', 'path/to/file.jpg');

// List files
const files = await storageClient.listFiles('media', 'uploads');
```

### React Hooks

```tsx
import { useFileUpload, useFileList, useFileDelete } from '@/lib/storage/hooks';

function FileManager() {
  const { uploadFile, isUploading, progress } = useFileUpload();
  const { files, loadFiles, isLoading } = useFileList('media');
  const { deleteFile, isDeleting } = useFileDelete();

  // Use the hooks...
}
```

### Media Service

```tsx
import { mediaService } from '@/lib/storage/media-service';

// Upload with database integration
const result = await mediaService.uploadMedia(file, {
  bucket: 'media',
  altText: 'Description',
  uploadedBy: userId,
});

// Get media metadata
const media = await mediaService.getMedia(mediaId);
```

## File Organization

```
Storage Buckets:
├── media/
│   ├── uploads/           # General uploads
│   ├── optimized/         # Optimized images
│   └── thumbnails/        # Generated thumbnails
├── case-studies/
│   ├── featured-images/   # Case study featured images
│   ├── gallery/           # Case study galleries
│   └── documents/         # Related documents
├── insights/
│   ├── featured-images/   # Blog post featured images
│   └── content-images/    # Inline content images
└── avatars/
    └── profile/           # User profile pictures
```

## Security Policies

The storage system implements Row Level Security (RLS) with the following policies:

- **Public Read**: All buckets allow public read access
- **Authenticated Upload**: Only authenticated users can upload files
- **Owner Management**: Users can only manage their own files
- **Admin Override**: Admin users have full access to case-studies and insights buckets

## Configuration

### Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### File Constraints

```tsx
export const FILE_CONSTRAINTS = {
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_IMAGE_TYPES: [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'image/gif',
  ],
  IMAGE_QUALITY: 85,
  THUMBNAIL_SIZE: 300,
  OPTIMIZED_MAX_WIDTH: 1920,
  OPTIMIZED_MAX_HEIGHT: 1080,
};
```

## Testing

Visit `/test-storage` to test the storage functionality:

```bash
npm run dev
# Navigate to http://localhost:3000/test-storage
```

## Troubleshooting

### Common Issues

1. **Upload fails with "bucket not found"**

   - Run `pnpm run storage:setup` to create buckets
   - Check Supabase dashboard to verify buckets exist

2. **Permission denied errors**

   - Apply the SQL policies from `policies.sql`
   - Verify user authentication is working

3. **Image optimization fails**

   - Check browser compatibility for Canvas API
   - Verify file types are supported

4. **Environment variables not loaded**
   - Ensure `.env.local` file exists and is properly formatted
   - Restart the development server after changes

### Debug Mode

Enable debug logging by setting:

```tsx
// In your component
console.log('Storage debug:', {
  buckets: STORAGE_BUCKETS,
  folders: STORAGE_FOLDERS,
  constraints: FILE_CONSTRAINTS,
});
```

## Migration Notes

If upgrading from a previous version:

1. Run the storage setup script
2. Apply new security policies
3. Update any custom upload logic to use the new API
4. Test file uploads and access permissions

## Contributing

When adding new storage features:

1. Update the configuration in `config.ts`
2. Add appropriate TypeScript types in `types.ts`
3. Update security policies in `policies.sql`
4. Add tests for new functionality
5. Update this documentation
