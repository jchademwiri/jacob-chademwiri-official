/**
 * Storage Module
 * Main export file for Supabase Storage functionality
 */

// Configuration
export * from './config';

// Types
export * from './types';

// Client
export { StorageClient, storageClient, serverStorageClient } from './client';

// Utilities
export * from './utils';

// Setup
export { setupStorage } from './setup';

// Re-export commonly used functions
export {
  generateFileName,
  validateFile,
  optimizeImage,
  formatFileSize,
  isImageFile,
  isDocumentFile,
  generateAltTextSuggestion,
  createFilePreview,
  revokeFilePreview,
  extractImageMetadata,
} from './utils';

export {
  STORAGE_BUCKETS,
  STORAGE_FOLDERS,
  FILE_CONSTRAINTS,
  STORAGE_POLICIES,
} from './config';
