'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  // Prevent scrolling when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-3/4 max-w-xs bg-background border-r shadow-lg transform transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <Link
              href="/"
              className="flex items-center space-x-2"
              onClick={onClose}
            >
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">GD</span>
              </div>
              <span className="font-bold">Jacob C</span>
            </Link>
            <button
              onClick={onClose}
              className="p-1 rounded-md hover:bg-accent"
              aria-label="Close Menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-auto p-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                  onClick={onClose}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                  onClick={onClose}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                  onClick={onClose}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                  onClick={onClose}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                  onClick={onClose}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="p-4 border-t">
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      </div>
    </>
  );
}
