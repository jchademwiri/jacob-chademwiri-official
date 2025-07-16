/**
 * Storage Hooks
 * React hooks for storage operations
 */

'use client';

import { useState, useCallback } from 'react';
import { storageClient } from './client';
import type { FileUploadOptions, FileUploadResult } from './types';

export interface UseFileUploadState {
  isUploading: boolean;
  progress: number;
  error: string | null;
  result: FileUploadResult | null;
}

export interface UseFileUploadReturn extends UseFileUploadState {
  uploadFile: (
    file: File,
    options: FileUploadOptions
  ) => Promise<FileUploadResult>;
  reset: () => void;
}

/**
 * Hook for file upload with progress tracking
 */
export function useFileUpload(): UseFileUploadReturn {
  const [state, setState] = useState<UseFileUploadState>({
    isUploading: false,
    progress: 0,
    error: null,
    result: null,
  });

  const uploadFile = useCallback(
    async (file: File, options: FileUploadOptions) => {
      setState({
        isUploading: true,
        progress: 0,
        error: null,
        result: null,
      });

      try {
        // Simulate progress for better UX
        const progressInterval = setInterval(() => {
          setState((prev) => ({
            ...prev,
            progress: Math.min(prev.progress + 10, 90),
          }));
        }, 200);

        const result = await storageClient.uploadFile(file, options);

        clearInterval(progressInterval);

        setState({
          isUploading: false,
          progress: 100,
          error: result.success
            ? null
            : result.error?.message || 'Upload failed',
          result,
        });

        return result;
      } catch (error) {
        setState({
          isUploading: false,
          progress: 0,
          error: error instanceof Error ? error.message : 'Upload failed',
          result: null,
        });

        return {
          success: false,
          error: {
            message: error instanceof Error ? error.message : 'Upload failed',
            code: 'UPLOAD_ERROR',
          },
        };
      }
    },
    []
  );

  const reset = useCallback(() => {
    setState({
      isUploading: false,
      progress: 0,
      error: null,
      result: null,
    });
  }, []);

  return {
    ...state,
    uploadFile,
    reset,
  };
}

export interface UseFileListState {
  isLoading: boolean;
  files: any[];
  error: string | null;
}

export interface UseFileListReturn extends UseFileListState {
  loadFiles: (bucket: string, folder?: string) => Promise<void>;
  refresh: () => Promise<void>;
}

/**
 * Hook for listing files in a bucket
 */
export function useFileList(
  bucket: string,
  folder?: string
): UseFileListReturn {
  const [state, setState] = useState<UseFileListState>({
    isLoading: false,
    files: [],
    error: null,
  });

  const loadFiles = useCallback(
    async (bucketName: string, folderPath?: string) => {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      try {
        const result = await storageClient.listFiles(bucketName, folderPath);

        if (result.success) {
          setState({
            isLoading: false,
            files: result.data || [],
            error: null,
          });
        } else {
          setState({
            isLoading: false,
            files: [],
            error: result.error?.message || 'Failed to load files',
          });
        }
      } catch (error) {
        setState({
          isLoading: false,
          files: [],
          error:
            error instanceof Error ? error.message : 'Failed to load files',
        });
      }
    },
    []
  );

  const refresh = useCallback(() => {
    return loadFiles(bucket, folder);
  }, [bucket, folder, loadFiles]);

  return {
    ...state,
    loadFiles,
    refresh,
  };
}

export interface UseFileDeleteReturn {
  isDeleting: boolean;
  error: string | null;
  deleteFile: (bucket: string, filePath: string) => Promise<boolean>;
}

/**
 * Hook for deleting files
 */
export function useFileDelete(): UseFileDeleteReturn {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteFile = useCallback(async (bucket: string, filePath: string) => {
    setIsDeleting(true);
    setError(null);

    try {
      const success = await storageClient.deleteFile(bucket, filePath);

      if (!success) {
        setError('Failed to delete file');
      }

      setIsDeleting(false);
      return success;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to delete file';
      setError(errorMessage);
      setIsDeleting(false);
      return false;
    }
  }, []);

  return {
    isDeleting,
    error,
    deleteFile,
  };
}
