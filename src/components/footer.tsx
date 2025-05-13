import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-background border-t border-white/10 backdrop-blur-sm text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-muted-foreground">
        {/* Column 1: Brand */}
        <div>
          <Link href="/" className="flex items-center space-x-2 mb-4">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
              GD
            </div>
            <span className="font-semibold text-white text-lg">
              GreenDesign
            </span>
          </Link>
          <p>
            We create beautiful, functional, and accessible web experiences with
            modern technologies and a focus on sustainability.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {['Home', 'About', 'Projects', 'Blog', 'Contact'].map((label) => (
              <li key={label}>
                <Link
                  href={`/${label.toLowerCase()}`}
                  className="hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Connect */}
        <div>
          <h4 className="text-white font-semibold mb-3">Connect</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2 group">
              <Github className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <Link
                href="https://github.com/jchademwiri"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                GitHub
              </Link>
            </li>

            <li className="flex items-center space-x-2">
              <Twitter className="h-4 w-4" />
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                Twitter
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Linkedin className="h-4 w-4" />
              <Link
                href="https://linkedin.com/in/jchademwiri"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                LinkedIn
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:hello@greendesign.com"
                className="hover:text-primary"
              >
                hello@greendesign.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground">
        <span>© 2025 GreenDesign. All rights reserved.</span>
        <span>Designed & Built with sustainability in mind</span>
      </div>
    </footer>
  );
}
