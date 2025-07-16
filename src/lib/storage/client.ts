/**
 * Supabase Storage Client
 * Provides storage operations for file upload, download, and management
 */

import { createClient } from '../client';
import { createClient as createServerClient } from '../server';
import { STORAGE_BUCKETS, FILE_CONSTRAINTS, STORAGE_FOLDERS } from './config';
import { generateFileName, validateFile, optimizeImage } from './utils';
import type {
  FileUploadOptions,
  FileUploadResult,
  StorageError,
} from './types';

export class StorageClient {
  private supabase;
  private isServer: boolean;

  constructor(isServer = false) {
    this.isServer = isServer;
    this.supabase = isServer ? null : createClient();
  }

  private async getClient() {
    if (this.isServer) {
      return await createServerClient();
    }
    return this.supabase!;
  }

  /**
   * Upload a file to Supabase Storage
   */
  async uploadFile(
    file: File,
    options: FileUploadOptions
  ): Promise<FileUploadResult> {
    try {
      const client = await this.getClient();

      // Validate file
      const validation = validateFile(file, options.allowedTypes);
      if (!validation.isValid) {
        throw new Error(validation.error);
      }

      // Generate unique filename
      const fileName = generateFileName(file.name, options.folder);

      // Optimize image if needed
      let fileToUpload = file;
      if (options.optimize && file.type.startsWith('image/')) {
        fileToUpload = await optimizeImage(file, {
          quality: FILE_CONSTRAINTS.IMAGE_QUALITY,
          maxWidth: FILE_CONSTRAINTS.OPTIMIZED_MAX_WIDTH,
          maxHeight: FILE_CONSTRAINTS.OPTIMIZED_MAX_HEIGHT,
        });
      }

      // Upload to Supabase Storage
      const { data, error } = await client.storage
        .from(options.bucket)
        .upload(fileName, fileToUpload, {
          cacheControl: '3600',
          upsert: options.upsert || false,
        });

      if (error) {
        throw error;
      }

      // Get public URL
      const { data: urlData } = client.storage
        .from(options.bucket)
        .getPublicUrl(fileName);

      // Create thumbnail if it's an image
      let thumbnailUrl: string | undefined;
      if (file.type.startsWith('image/') && options.createThumbnail) {
        thumbnailUrl = await this.createThumbnail(
          file,
          fileName,
          options.bucket
        );
      }

      return {
        success: true,
        data: {
          fileName,
          filePath: data.path,
          publicUrl: urlData.publicUrl,
          thumbnailUrl,
          fileSize: fileToUpload.size,
          fileType: fileToUpload.type,
        },
      };
    } catch (error) {
      return {
        success: false,
        error: {
          message: error instanceof Error ? error.message : 'Upload failed',
          code: 'UPLOAD_ERROR',
        },
      };
    }
  }

  /**
   * Create thumbnail for an image
   */
  private async createThumbnail(
    file: File,
    originalFileName: string,
    bucket: string
  ): Promise<string | undefined> {
    try {
      const client = await this.getClient();

      const thumbnailFile = await optimizeImage(file, {
        quality: 80,
        maxWidth: FILE_CONSTRAINTS.THUMBNAIL_SIZE,
        maxHeight: FILE_CONSTRAINTS.THUMBNAIL_SIZE,
      });

      const thumbnailFileName = `thumbnails/${originalFileName}`;

      const { error } = await client.storage
        .from(bucket)
        .upload(thumbnailFileName, thumbnailFile, {
          cacheControl: '3600',
          upsert: true,
        });

      if (error) {
        console.warn('Failed to create thumbnail:', error);
        return undefined;
      }

      const { data: urlData } = client.storage
        .from(bucket)
        .getPublicUrl(thumbnailFileName);

      return urlData.publicUrl;
    } catch (error) {
      console.warn('Failed to create thumbnail:', error);
      return undefined;
    }
  }

  /**
   * Delete a file from storage
   */
  async deleteFile(bucket: string, filePath: string): Promise<boolean> {
    try {
      const client = await this.getClient();

      const { error } = await client.storage.from(bucket).remove([filePath]);

      if (error) {
        throw error;
      }

      // Also try to delete thumbnail if it exists
      const thumbnailPath = `thumbnails/${filePath}`;
      await client.storage
        .from(bucket)
        .remove([thumbnailPath])
        .catch(() => {
          // Ignore thumbnail deletion errors
        });

      return true;
    } catch (error) {
      console.error('Failed to delete file:', error);
      return false;
    }
  }

  /**
   * List files in a bucket/folder
   */
  async listFiles(bucket: string, folder?: string, limit = 100) {
    try {
      const client = await this.getClient();

      const { data, error } = await client.storage.from(bucket).list(folder, {
        limit,
        sortBy: { column: 'created_at', order: 'desc' },
      });

      if (error) {
        throw error;
      }

      return {
        success: true,
        data: data || [],
      };
    } catch (error) {
      return {
        success: false,
        error: {
          message:
            error instanceof Error ? error.message : 'Failed to list files',
          code: 'LIST_ERROR',
        },
      };
    }
  }

  /**
   * Get signed URL for private files
   */
  async getSignedUrl(bucket: string, filePath: string, expiresIn = 3600) {
    try {
      const client = await this.getClient();

      const { data, error } = await client.storage
        .from(bucket)
        .createSignedUrl(filePath, expiresIn);

      if (error) {
        throw error;
      }

      return {
        success: true,
        data: {
          signedUrl: data.signedUrl,
          expiresAt: new Date(Date.now() + expiresIn * 1000),
        },
      };
    } catch (error) {
      return {
        success: false,
        error: {
          message:
            error instanceof Error ? error.message : 'Failed to get signed URL',
          code: 'SIGNED_URL_ERROR',
        },
      };
    }
  }

  /**
   * Move/rename a file
   */
  async moveFile(bucket: string, fromPath: string, toPath: string) {
    try {
      const client = await this.getClient();

      const { error } = await client.storage
        .from(bucket)
        .move(fromPath, toPath);

      if (error) {
        throw error;
      }

      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: {
          message:
            error instanceof Error ? error.message : 'Failed to move file',
          code: 'MOVE_ERROR',
        },
      };
    }
  }
}

// Export singleton instances
export const storageClient = new StorageClient(false);
export const serverStorageClient = new StorageClient(true);
