'use client';
import Link from 'next/link';
import { SocialLinks } from './social-links';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/constraints';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const pathname = usePathname();

  return (
    <footer className="w-full border-t bg-background/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold">JC</span>
              </div>
              <span className="font-bold text-lg">
                Jacob <span className="text-primary">Chademwiri</span>
              </span>
            </div>
            <p className="text-muted-foreground">
              We create beautiful, functional, and accessible web experiences
              with modern technologies and a focus on sustainability.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.map(({ label, href }) => {
                const isActive = pathname === href;

                return (
                  <Link
                    key={href}
                    href={href}
                    className={`text-sm text-muted-foreground font-medium transition-colors ${
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
          </div>

          {/* Social Links */}
          <SocialLinks />
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Jacob Chademwiri. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-4 sm:mt-0">
              Designed & Built with sustainability in mind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
