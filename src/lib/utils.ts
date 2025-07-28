import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Date formatting utility
export function formatDate(
  dateString: string,
  format: 'full' | 'monthYear' = 'full'
) {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '';
  if (format === 'full') {
    // YYYY/MM/DD
    return date.toLocaleDateString('en-CA').replace(/-/g, '/');
  }
  // Mon YYYY
  return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
}
