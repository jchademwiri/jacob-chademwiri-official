/**
 * Storage Types
 * TypeScript interfaces for storage operations
 */

export interface FileUploadOptions {
  bucket: string;
  folder?: string;
  allowedTypes?: string[];
  optimize?: boolean;
  createThumbnail?: boolean;
  upsert?: boolean;
  metadata?: Record<string, any>;
}

export interface FileUploadResult {
  success: boolean;
  data?: {
    fileName: string;
    filePath: string;
    publicUrl: string;
    thumbnailUrl?: string;
    fileSize: number;
    fileType: string;
  };
  error?: StorageError;
}

export interface StorageError {
  message: string;
  code: string;
}

export interface FileValidation {
  isValid: boolean;
  error?: string;
}

export interface ImageOptimizationOptions {
  quality?: number;
  maxWidth?: number;
  maxHeight?: number;
  format?: 'jpeg' | 'png' | 'webp';
}

export interface MediaMetadata {
  id: string;
  fileName: string;
  filePath: string;
  fileSize: number;
  fileType: string;
  altText?: string;
  caption?: string;
  uploadedBy: string;
  createdAt: Date;
}

export interface StorageBucketConfig {
  name: string;
  public: boolean;
  allowedMimeTypes: string[];
  fileSizeLimit: number;
}

export interface FileListResult {
  success: boolean;
  data?: Array<{
    name: string;
    id: string;
    updated_at: string;
    created_at: string;
    last_accessed_at: string;
    metadata: Record<string, any>;
  }>;
  error?: StorageError;
}

export interface SignedUrlResult {
  success: boolean;
  data?: {
    signedUrl: string;
    expiresAt: Date;
  };
  error?: StorageError;
}
