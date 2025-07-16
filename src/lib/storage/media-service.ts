/**
 * Media Service
 * Service for managing media files with database integration
 */

import { eq } from 'drizzle-orm';
import { db } from '../db';
import { media } from '../db/schema';
import { storageClient, serverStorageClient } from './client';
import { STORAGE_BUCKETS, STORAGE_FOLDERS } from './config';
import { generateAltTextSuggestion } from './utils';
import type { FileUploadOptions, MediaMetadata } from './types';

export class MediaService {
  private storage;

  constructor(isServer = false) {
    this.storage = isServer ? serverStorageClient : storageClient;
  }

  /**
   * Upload media file and save metadata to database
   */
  async uploadMedia(
    file: File,
    options: {
      bucket?: string;
      folder?: string;
      altText?: string;
      caption?: string;
      uploadedBy: string;
    }
  ): Promise<{ success: boolean; data?: MediaMetadata; error?: string }> {
    try {
      const uploadOptions: FileUploadOptions = {
        bucket: options.bucket || STORAGE_BUCKETS.MEDIA,
        folder: options.folder || STORAGE_FOLDERS.MEDIA.UPLOADS,
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

      // Upload file to storage
      const uploadResult = await this.storage.uploadFile(file, uploadOptions);

      if (!uploadResult.success || !uploadResult.data) {
        return {
          success: false,
          error: uploadResult.error?.message || 'Upload failed',
        };
      }

      // Save metadata to database
      const mediaData = {
        fileName: uploadResult.data.fileName,
        filePath: uploadResult.data.filePath,
        fileSize: uploadResult.data.fileSize,
        fileType: uploadResult.data.fileType,
        altText: options.altText || generateAltTextSuggestion(file.name),
        caption: options.caption,
        uploadedBy: options.uploadedBy,
      };

      const [savedMedia] = await db.insert(media).values(mediaData).returning();

      return {
        success: true,
        data: {
          id: savedMedia.id,
          fileName: savedMedia.fileName,
          filePath: savedMedia.filePath,
          fileSize: savedMedia.fileSize,
          fileType: savedMedia.fileType,
          altText: savedMedia.altText,
          caption: savedMedia.caption,
          uploadedBy: savedMedia.uploadedBy,
          createdAt: savedMedia.createdAt,
        },
      };
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error ? error.message : 'Failed to upload media',
      };
    }
  }

  /**
   * Get media by ID
   */
  async getMedia(id: string): Promise<MediaMetadata | null> {
    try {
      const [mediaRecord] = await db
        .select()
        .from(media)
        .where(eq(media.id, id))
        .limit(1);

      if (!mediaRecord) {
        return null;
      }

      return {
        id: mediaRecord.id,
        fileName: mediaRecord.fileName,
        filePath: mediaRecord.filePath,
        fileSize: mediaRecord.fileSize,
        fileType: mediaRecord.fileType,
        altText: mediaRecord.altText,
        caption: mediaRecord.caption,
        uploadedBy: mediaRecord.uploadedBy,
        createdAt: mediaRecord.createdAt,
      };
    } catch (error) {
      console.error('Failed to get media:', error);
      return null;
    }
  }

  /**
   * List all media files
   */
  async listMedia(limit = 50, offset = 0): Promise<MediaMetadata[]> {
    try {
      const mediaRecords = await db
        .select()
        .from(media)
        .limit(limit)
        .offset(offset)
        .orderBy(media.createdAt);

      return mediaRecords.map((record) => ({
        id: record.id,
        fileName: record.fileName,
        filePath: record.filePath,
        fileSize: record.fileSize,
        fileType: record.fileType,
        altText: record.altText,
        caption: record.caption,
        uploadedBy: record.uploadedBy,
        createdAt: record.createdAt,
      }));
    } catch (error) {
      console.error('Failed to list media:', error);
      return [];
    }
  }

  /**
   * Update media metadata
   */
  async updateMedia(
    id: string,
    updates: {
      altText?: string;
      caption?: string;
    }
  ): Promise<boolean> {
    try {
      await db
        .update(media)
        .set({
          ...updates,
          updatedAt: new Date(),
        })
        .where(eq(media.id, id));

      return true;
    } catch (error) {
      console.error('Failed to update media:', error);
      return false;
    }
  }

  /**
   * Delete media file and database record
   */
  async deleteMedia(id: string): Promise<boolean> {
    try {
      // Get media record first
      const mediaRecord = await this.getMedia(id);
      if (!mediaRecord) {
        return false;
      }

      // Delete from storage
      const bucket = this.getBucketFromPath(mediaRecord.filePath);
      const deleted = await this.storage.deleteFile(
        bucket,
        mediaRecord.filePath
      );

      if (!deleted) {
        console.warn(
          'Failed to delete file from storage, but continuing with database deletion'
        );
      }

      // Delete from database
      await db.delete(media).where(eq(media.id, id));

      return true;
    } catch (error) {
      console.error('Failed to delete media:', error);
      return false;
    }
  }

  /**
   * Get public URL for media file
   */
  getPublicUrl(filePath: string): string {
    const bucket = this.getBucketFromPath(filePath);
    // This would typically use the Supabase client to get the public URL
    // For now, we'll construct it manually
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    return `${supabaseUrl}/storage/v1/object/public/${bucket}/${filePath}`;
  }

  /**
   * Get signed URL for private files
   */
  async getSignedUrl(filePath: string, expiresIn = 3600) {
    const bucket = this.getBucketFromPath(filePath);
    return this.storage.getSignedUrl(bucket, filePath, expiresIn);
  }

  /**
   * Determine bucket from file path
   */
  private getBucketFromPath(filePath: string): string {
    if (filePath.startsWith('case-studies/')) {
      return STORAGE_BUCKETS.CASE_STUDIES;
    }
    if (filePath.startsWith('insights/')) {
      return STORAGE_BUCKETS.INSIGHTS;
    }
    if (filePath.startsWith('avatars/')) {
      return STORAGE_BUCKETS.AVATARS;
    }
    return STORAGE_BUCKETS.MEDIA;
  }
}

// Export singleton instances
export const mediaService = new MediaService(false);
export const serverMediaService = new MediaService(true);
