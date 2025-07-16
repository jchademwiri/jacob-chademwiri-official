/**
 * Supabase Storage Configuration
 * Defines storage buckets, file organization, and upload policies
 */

export const STORAGE_BUCKETS = {
  MEDIA: 'media',
  CASE_STUDIES: 'case-studies',
  INSIGHTS: 'insights',
  AVATARS: 'avatars',
} as const;

export const STORAGE_FOLDERS = {
  CASE_STUDIES: {
    FEATURED_IMAGES: 'case-studies/featured-images',
    GALLERY: 'case-studies/gallery',
    DOCUMENTS: 'case-studies/documents',
  },
  INSIGHTS: {
    FEATURED_IMAGES: 'insights/featured-images',
    CONTENT_IMAGES: 'insights/content-images',
  },
  MEDIA: {
    UPLOADS: 'media/uploads',
    OPTIMIZED: 'media/optimized',
    THUMBNAILS: 'media/thumbnails',
  },
  AVATARS: {
    PROFILE: 'avatars/profile',
  },
} as const;

export const FILE_CONSTRAINTS = {
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_IMAGE_TYPES: [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'image/gif',
  ],
  ALLOWED_DOCUMENT_TYPES: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ],
  IMAGE_QUALITY: 85,
  THUMBNAIL_SIZE: 300,
  OPTIMIZED_MAX_WIDTH: 1920,
  OPTIMIZED_MAX_HEIGHT: 1080,
} as const;

export const STORAGE_POLICIES = {
  PUBLIC_READ: 'public_read',
  AUTHENTICATED_READ: 'authenticated_read',
  ADMIN_ONLY: 'admin_only',
} as const;

export type StorageBucket = keyof typeof STORAGE_BUCKETS;
export type StoragePolicy = keyof typeof STORAGE_POLICIES;
