'use client';

import { useState } from 'react';
import { Upload, Link, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useDropzone } from 'react-dropzone';
import { cn } from '@/lib/utils';

interface ImageUploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onImageUpload?: (file: File) => Promise<string>;
  onImageUrl: (url: string, alt?: string) => void;
}

export function ImageUploadDialog({
  open,
  onOpenChange,
  onImageUpload,
  onImageUrl,
}: ImageUploadDialogProps) {
  const [imageUrl, setImageUrl] = useState('');
  const [altText, setAltText] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept: {
        'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'],
      },
      maxFiles: 1,
      onDrop: async (files) => {
        if (files.length > 0 && onImageUpload) {
          setIsUploading(true);
          setUploadError('');

          try {
            const url = await onImageUpload(files[0]);
            onImageUrl(url, altText);
            handleClose();
          } catch (error) {
            setUploadError('Failed to upload image. Please try again.');
            console.error('Image upload error:', error);
          } finally {
            setIsUploading(false);
          }
        }
      },
    });

  const handleUrlSubmit = () => {
    if (imageUrl.trim()) {
      onImageUrl(imageUrl.trim(), altText.trim());
      handleClose();
    }
  };

  const handleClose = () => {
    setImageUrl('');
    setAltText('');
    setUploadError('');
    setIsUploading(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Insert Image</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="url" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="url">From URL</TabsTrigger>
            <TabsTrigger value="upload" disabled={!onImageUpload}>
              Upload File
            </TabsTrigger>
          </TabsList>

          <TabsContent value="url" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="image-url">Image URL</Label>
              <Input
                id="image-url"
                placeholder="https://example.com/image.jpg"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleUrlSubmit();
                  }
                }}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="alt-text">Alt Text (Optional)</Label>
              <Input
                id="alt-text"
                placeholder="Describe the image..."
                value={altText}
                onChange={(e) => setAltText(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={handleUrlSubmit} disabled={!imageUrl.trim()}>
                <Link className="h-4 w-4 mr-2" />
                Insert Image
              </Button>
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="upload" className="space-y-4">
            {onImageUpload ? (
              <>
                <div
                  {...getRootProps()}
                  className={cn(
                    'border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors',
                    isDragActive
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50',
                    isUploading && 'pointer-events-none opacity-50'
                  )}
                >
                  <input {...getInputProps()} />
                  <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />

                  {isUploading ? (
                    <p className="text-sm text-muted-foreground">
                      Uploading...
                    </p>
                  ) : isDragActive ? (
                    <p className="text-sm text-muted-foreground">
                      Drop the image here...
                    </p>
                  ) : (
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Drag & drop an image here, or click to select
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Supports PNG, JPG, GIF, WebP, SVG
                      </p>
                    </div>
                  )}
                </div>

                {acceptedFiles.length > 0 && (
                  <div className="space-y-2">
                    <Label>Selected File:</Label>
                    <div className="flex items-center gap-2 p-2 bg-muted rounded">
                      <span className="text-sm flex-1">
                        {acceptedFiles[0].name}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => acceptedFiles.splice(0, 1)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="upload-alt-text">Alt Text (Optional)</Label>
                  <Input
                    id="upload-alt-text"
                    placeholder="Describe the image..."
                    value={altText}
                    onChange={(e) => setAltText(e.target.value)}
                  />
                </div>

                {uploadError && (
                  <div className="text-sm text-destructive bg-destructive/10 p-2 rounded">
                    {uploadError}
                  </div>
                )}

                <div className="flex gap-2">
                  <Button
                    onClick={() => {
                      if (acceptedFiles.length > 0) {
                        // Trigger the upload manually if needed
                        const event = new Event('drop');
                        getRootProps().onDrop?.(
                          acceptedFiles,
                          [],
                          event as any
                        );
                      }
                    }}
                    disabled={acceptedFiles.length === 0 || isUploading}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    {isUploading ? 'Uploading...' : 'Upload Image'}
                  </Button>
                  <Button variant="outline" onClick={handleClose}>
                    Cancel
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <p className="text-sm text-muted-foreground">
                  Image upload is not configured
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
