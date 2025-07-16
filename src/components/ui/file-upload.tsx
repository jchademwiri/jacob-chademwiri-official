/**
 * File Upload Component
 * Drag and drop file upload with progress tracking
 */

'use client';

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, File, Image } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { Progress } from './progress';
import { useFileUpload } from '@/lib/storage/hooks';
import { formatFileSize, isImageFile } from '@/lib/storage/utils';
import type { FileUploadOptions } from '@/lib/storage/types';

interface FileUploadProps {
  onUpload?: (result: any) => void;
  onError?: (error: string) => void;
  options: FileUploadOptions;
  accept?: Record<string, string[]>;
  maxFiles?: number;
  disabled?: boolean;
  className?: string;
}

interface FileWithPreview extends File {
  preview?: string;
}

export function FileUpload({
  onUpload,
  onError,
  options,
  accept = {
    'image/*': ['.jpeg', '.jpg', '.png', '.webp', '.gif'],
  },
  maxFiles = 1,
  disabled = false,
  className,
}: FileUploadProps) {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const { uploadFile, isUploading, progress, error, reset } = useFileUpload();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const filesWithPreview = acceptedFiles.map((file) => {
      const fileWithPreview = file as FileWithPreview;
      if (isImageFile(file)) {
        fileWithPreview.preview = URL.createObjectURL(file);
      }
      return fileWithPreview;
    });

    setFiles(filesWithPreview);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxFiles,
    disabled: disabled || isUploading,
  });

  const handleUpload = async () => {
    if (files.length === 0) return;

    try {
      const file = files[0];
      const result = await uploadFile(file, options);

      if (result.success) {
        onUpload?.(result.data);
        setFiles([]);
        reset();
      } else {
        onError?.(result.error?.message || 'Upload failed');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Upload failed';
      onError?.(errorMessage);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => {
      const newFiles = [...prev];
      const file = newFiles[index];
      if (file.preview) {
        URL.revokeObjectURL(file.preview);
      }
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const clearFiles = () => {
    files.forEach((file) => {
      if (file.preview) {
        URL.revokeObjectURL(file.preview);
      }
    });
    setFiles([]);
    reset();
  };

  return (
    <div className={cn('w-full', className)}>
      {/* Drop Zone */}
      <div
        {...getRootProps()}
        className={cn(
          'border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors',
          isDragActive
            ? 'border-primary bg-primary/5'
            : 'border-muted-foreground/25 hover:border-primary/50',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        {isDragActive ? (
          <p className="text-primary">Drop the files here...</p>
        ) : (
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Drag & drop files here, or click to select
            </p>
            <p className="text-xs text-muted-foreground">
              {Object.keys(accept).join(', ')} up to {formatFileSize(10485760)}
            </p>
          </div>
        )}
      </div>

      {/* File Preview */}
      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 border rounded-lg bg-muted/50"
            >
              {file.preview ? (
                <img
                  src={file.preview}
                  alt={file.name}
                  className="h-12 w-12 object-cover rounded"
                />
              ) : (
                <File className="h-12 w-12 text-muted-foreground" />
              )}

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {formatFileSize(file.size)}
                </p>
              </div>

              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeFile(index)}
                disabled={isUploading}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Upload Progress */}
      {isUploading && (
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Uploading...</span>
            <span className="text-sm text-muted-foreground">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      {/* Action Buttons */}
      {files.length > 0 && !isUploading && (
        <div className="mt-4 flex gap-2">
          <Button onClick={handleUpload} disabled={disabled}>
            <Upload className="h-4 w-4 mr-2" />
            Upload {files.length} file{files.length > 1 ? 's' : ''}
          </Button>
          <Button variant="outline" onClick={clearFiles}>
            Clear
          </Button>
        </div>
      )}
    </div>
  );
}
