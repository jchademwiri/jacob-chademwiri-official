'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MobileNav } from '@/components/navigation/mobile-nav';

import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/constraints';
import { ThemeToggle } from '@/components/theme-toggle';

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

  const pathname = usePathname();

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
                  <span className="text-white font-bold">JC</span>
                </div>
                <span className="font-bold text-lg hidden sm:inline-block">
                  Jacob <span className="text-primary">C.</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((navItem) => {
                const { label, href, dropdown } = navItem;
                const isActive =
                  pathname === href ||
                  (dropdown && dropdown.some((item) => pathname === item.href));

                if (dropdown) {
                  return (
                    <div key={href} className="relative group">
                      <Button
                        variant={'link'}
                        className={`hover:no-underline cursor-pointer ${
                          isActive
                            ? 'text-primary'
                            : 'text-foreground hover:text-primary'
                        }`}
                      >
                        <span>{label}</span>
                        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                      </Button>

                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="bg-background border rounded-md shadow-lg py-2">
                          {dropdown.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center space-x-3 px-4 py-2 text-sm transition-colors ${
                                  pathname === item.href
                                    ? 'text-primary bg-primary/10'
                                    : 'text-foreground hover:text-primary hover:bg-accent'
                                }`}
                              >
                                {IconComponent && (
                                  <IconComponent className="h-4 w-4" />
                                )}
                                <span>{item.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={href}
                    href={href}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hidden sm:flex border border-primary text-primary"
              >
                <Link href="tel:+27740491433">Call Me Now</Link>
              </Button>
              <button
                type="button"
                className="flex items-center justify-center sm:hidden"
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
