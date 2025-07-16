'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { navLinks } from '@/data/constraints';
import { usePathname } from 'next/navigation';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();

  // Toggle expanded state for dropdown items
  const toggleExpanded = (href: string) => {
    setExpandedItems((prev) =>
      prev.includes(href)
        ? prev.filter((item) => item !== href)
        : [...prev, href]
    );
  };

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

  // Reset expanded items when mobile nav closes
  useEffect(() => {
    if (!isOpen) {
      setExpandedItems([]);
    }
  }, [isOpen]);

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
                <span className="text-primary-foreground font-bold">JC</span>
              </div>
              <span className="font-bold">Jacob C</span>
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-md hover:bg-accent"
              aria-label="Close Menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-auto p-4">
            <ul className="space-y-2">
              {navLinks.map((navItem) => {
                const { label, href, dropdown } = navItem;
                const isActive =
                  pathname === href ||
                  (dropdown && dropdown.some((item) => pathname === item.href));
                const isExpanded = expandedItems.includes(href);

                return (
                  <li key={href}>
                    {dropdown ? (
                      <>
                        {/* Parent item with dropdown */}
                        <button
                          type="button"
                          onClick={() => toggleExpanded(href)}
                          className={`flex items-center justify-between w-full py-2 text-lg font-medium transition-colors ${
                            isActive
                              ? 'text-primary'
                              : 'text-foreground hover:text-primary'
                          }`}
                        >
                          <span>{label}</span>
                          {isExpanded ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </button>

                        {/* Dropdown items */}
                        {isExpanded && (
                          <ul className="ml-4 mt-2 space-y-1">
                            {dropdown.map((item) => {
                              const IconComponent = item.icon;
                              return (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className={`flex items-center space-x-3 py-2 text-base font-medium transition-colors ${
                                      pathname === item.href
                                        ? 'text-primary'
                                        : 'text-muted-foreground hover:text-primary'
                                    }`}
                                    onClick={onClose}
                                  >
                                    {IconComponent && (
                                      <IconComponent className="h-4 w-4" />
                                    )}
                                    <span>{item.label}</span>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </>
                    ) : (
                      /* Regular navigation item */
                      <Link
                        href={href}
                        className={`block py-2 text-lg font-medium transition-colors ${
                          isActive
                            ? 'text-primary'
                            : 'text-foreground hover:text-primary'
                        }`}
                        onClick={onClose}
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="p-4 border-t">
            <Button className="w-full" asChild>
              <Link href="/contact" onClick={onClose}>
                Get Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
