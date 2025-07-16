/**
 * Storage Utilities
 * Helper functions for file handling, validation, and optimization
 */

import { FILE_CONSTRAINTS } from './config';
import type { FileValidation, ImageOptimizationOptions } from './types';

/**
 * Generate a unique filename with timestamp and random string
 */
export function generateFileName(
  originalName: string,
  folder?: string
): string {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 8);
  const extension = originalName.split('.').pop()?.toLowerCase() || '';
  const nameWithoutExt = originalName.replace(/\.[^/.]+$/, '');
  const sanitizedName = nameWithoutExt
    .replace(/[^a-zA-Z0-9-_]/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase();

  const fileName = `${sanitizedName}-${timestamp}-${randomString}.${extension}`;

  return folder ? `${folder}/${fileName}` : fileName;
}

/**
 * Validate file type and size
 */
export function validateFile(
  file: File,
  allowedTypes?: string[]
): FileValidation {
  // Check file size
  if (file.size > FILE_CONSTRAINTS.MAX_FILE_SIZE) {
    return {
      isValid: false,
      error: `File size exceeds ${
        FILE_CONSTRAINTS.MAX_FILE_SIZE / (1024 * 1024)
      }MB limit`,
    };
  }

  // Check file type if specified
  if (allowedTypes && allowedTypes.length > 0) {
    if (!allowedTypes.includes(file.type)) {
      return {
        isValid: false,
        error: `File type ${
          file.type
        } is not allowed. Allowed types: ${allowedTypes.join(', ')}`,
      };
    }
  }

  // Additional validation for images
  if (file.type.startsWith('image/')) {
    if (!FILE_CONSTRAINTS.ALLOWED_IMAGE_TYPES.includes(file.type)) {
      return {
        isValid: false,
        error: `Image type ${file.type} is not supported`,
      };
    }
  }

  return { isValid: true };
}

/**
 * Optimize image file
 */
export async function optimizeImage(
  file: File,
  options: ImageOptimizationOptions = {}
): Promise<File> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      try {
        const {
          quality = FILE_CONSTRAINTS.IMAGE_QUALITY,
          maxWidth = FILE_CONSTRAINTS.OPTIMIZED_MAX_WIDTH,
          maxHeight = FILE_CONSTRAINTS.OPTIMIZED_MAX_HEIGHT,
          format = 'jpeg',
        } = options;

        // Calculate new dimensions
        let { width, height } = img;

        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width *= ratio;
          height *= ratio;
        }

        // Set canvas dimensions
        canvas.width = width;
        canvas.height = height;

        // Draw and compress image
        ctx?.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              const optimizedFile = new File([blob], file.name, {
                type: `image/${format}`,
                lastModified: Date.now(),
              });
              resolve(optimizedFile);
            } else {
              reject(new Error('Failed to optimize image'));
            }
          },
          `image/${format}`,
          quality / 100
        );
      } catch (error) {
        reject(error);
      }
    };

    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };

    img.src = URL.createObjectURL(file);
  });
}

/**
 * Get file extension from filename
 */
export function getFileExtension(filename: string): string {
  return filename.split('.').pop()?.toLowerCase() || '';
}

/**
 * Format file size for display
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Check if file is an image
 */
export function isImageFile(file: File): boolean {
  return file.type.startsWith('image/');
}

/**
 * Check if file is a document
 */
export function isDocumentFile(file: File): boolean {
  return FILE_CONSTRAINTS.ALLOWED_DOCUMENT_TYPES.includes(file.type);
}

/**
 * Generate alt text suggestion based on filename
 */
export function generateAltTextSuggestion(filename: string): string {
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, '');
  return nameWithoutExt
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase())
    .trim();
}

/**
 * Create a preview URL for a file
 */
export function createFilePreview(file: File): string {
  return URL.createObjectURL(file);
}

/**
 * Revoke file preview URL to free memory
 */
export function revokeFilePreview(url: string): void {
  URL.revokeObjectURL(url);
}

/**
 * Extract metadata from image file
 */
export async function extractImageMetadata(file: File): Promise<{
  width: number;
  height: number;
  aspectRatio: number;
}> {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
        aspectRatio: img.naturalWidth / img.naturalHeight,
      });
    };

    img.onerror = () => {
      reject(new Error('Failed to load image metadata'));
    };

    img.src = URL.createObjectURL(file);
  });
}
