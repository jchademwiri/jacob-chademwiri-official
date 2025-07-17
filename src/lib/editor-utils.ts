import { createClient } from '@/lib/supabase/client';

/**
 * Upload an image file to Supabase Storage
 * @param file - The image file to upload
 * @param bucket - The storage bucket name (default: 'media')
 * @param folder - Optional folder path within the bucket
 * @returns Promise<string> - The public URL of the uploaded image
 */
export async function uploadEditorImage(
  file: File,
  bucket: string = 'media',
  folder?: string
): Promise<string> {
  const supabase = createClient();

  // Generate unique filename
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random()
    .toString(36)
    .substring(2)}.${fileExt}`;
  const filePath = folder ? `${folder}/${fileName}` : fileName;

  // Upload file to Supabase Storage
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) {
    console.error('Error uploading image:', error);
    throw new Error(`Failed to upload image: ${error.message}`);
  }

  // Get public URL
  const {
    data: { publicUrl },
  } = supabase.storage.from(bucket).getPublicUrl(data.path);

  return publicUrl;
}

/**
 * Delete an image from Supabase Storage
 * @param url - The public URL of the image to delete
 * @param bucket - The storage bucket name (default: 'media')
 * @returns Promise<boolean> - Success status
 */
export async function deleteEditorImage(
  url: string,
  bucket: string = 'media'
): Promise<boolean> {
  const supabase = createClient();

  try {
    // Extract file path from URL
    const urlParts = url.split('/');
    const filePath = urlParts.slice(-2).join('/'); // Get last two parts (folder/filename)

    const { error } = await supabase.storage.from(bucket).remove([filePath]);

    if (error) {
      console.error('Error deleting image:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error deleting image:', error);
    return false;
  }
}

/**
 * Validate image file before upload
 * @param file - The file to validate
 * @param maxSizeMB - Maximum file size in MB (default: 5)
 * @returns Object with validation result and error message
 */
export function validateImageFile(
  file: File,
  maxSizeMB: number = 5
): { isValid: boolean; error?: string } {
  // Check file type
  const allowedTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/svg+xml',
  ];
  if (!allowedTypes.includes(file.type)) {
    return {
      isValid: false,
      error:
        'Invalid file type. Please upload a JPEG, PNG, GIF, WebP, or SVG image.',
    };
  }

  // Check file size
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  if (file.size > maxSizeBytes) {
    return {
      isValid: false,
      error: `File size too large. Please upload an image smaller than ${maxSizeMB}MB.`,
    };
  }

  return { isValid: true };
}

/**
 * Extract and clean HTML content for preview/excerpt generation
 * @param html - The HTML content from the editor
 * @param maxLength - Maximum length for excerpt (default: 200)
 * @returns Clean text excerpt
 */
export function extractTextFromHTML(
  html: string,
  maxLength: number = 200
): string {
  // Remove HTML tags
  const text = html
    .replace(/<[^>]*>/g, ' ')
    // Replace multiple spaces with single space
    .replace(/\s+/g, ' ')
    // Trim whitespace
    .trim();

  // Truncate if needed
  if (text.length <= maxLength) {
    return text;
  }

  // Find last complete word within limit
  const truncated = text.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  return lastSpaceIndex > 0
    ? truncated.substring(0, lastSpaceIndex) + '...'
    : truncated + '...';
}

/**
 * Calculate estimated reading time for content
 * @param html - The HTML content from the editor
 * @param wordsPerMinute - Average reading speed (default: 200)
 * @returns Estimated reading time in minutes
 */
export function calculateReadingTime(
  html: string,
  wordsPerMinute: number = 200
): number {
  const text = extractTextFromHTML(html);
  const wordCount = text.split(/\s+/).filter((word) => word.length > 0).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return Math.max(1, readingTime); // Minimum 1 minute
}

/**
 * Sanitize HTML content to prevent XSS attacks
 * @param html - The HTML content to sanitize
 * @returns Sanitized HTML content
 */
export function sanitizeHTML(html: string): string {
  // Basic sanitization - in production, consider using a library like DOMPurify
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '');
}

/**
 * Generate SEO-friendly slug from title
 * @param title - The title to convert to slug
 * @returns URL-friendly slug
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Extract images from HTML content
 * @param html - The HTML content to parse
 * @returns Array of image URLs found in the content
 */
export function extractImagesFromHTML(html: string): string[] {
  const imgRegex = /<img[^>]+src="([^">]+)"/g;
  const images: string[] = [];
  let match;

  while ((match = imgRegex.exec(html)) !== null) {
    images.push(match[1]);
  }

  return images;
}
