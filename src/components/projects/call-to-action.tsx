// src/components/projects/call-to-action.tsx
import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface CallToActionProps {
  isVisible: boolean;
}

export function CallToAction({ isVisible }: CallToActionProps) {
  return (
    <div
      className={`mt-20 text-center transition-all duration-1000 delay-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="bg-gradient-to-r from-primary/10 to-green-600/10 border border-primary/20 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Ready to start your project?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Let&apos;s discuss how I can help bring your ideas to life with modern
          web technologies and exceptional user experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Get In Touch
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
          >
            Learn More About Me
          </Link>
        </div>
      </div>
    </div>
  );
}
