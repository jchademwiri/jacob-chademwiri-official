import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">GD</span>
              </div>
              <span className="font-bold text-lg">GreenDesign</span>
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
              <Link
                href="/"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="https://github.com/greendesign"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://twitter.com/greendesign"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
                <span>Twitter</span>
              </a>
              <a
                href="https://linkedin.com/company/greendesign"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:hello@greendesign.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
                <span>hello@greendesign.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} GreenDesign. All rights reserved.
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
