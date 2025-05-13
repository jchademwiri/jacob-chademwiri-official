'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MobileNav } from './mobile-nav';
import { ThemeToggle } from './theme-toggle';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-200',
          isScrolled
            ? 'bg-background/80 backdrop-blur-md border-b'
            : 'bg-background/50 backdrop-blur-sm'
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">GD</span>
                </div>
                <span className="font-bold text-lg hidden sm:inline-block">
                  GreenDesign
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button className="hidden sm:flex" size="sm">
                Get Started
              </Button>
              <button
                className="flex items-center justify-center md:hidden"
                onClick={() => setIsOpen(true)}
                aria-label="Toggle Menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
