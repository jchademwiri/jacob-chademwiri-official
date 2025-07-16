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
          Ready to discuss your project needs?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Schedule a consultation to explore how my expertise in tender
          management, project coordination, and web development can help achieve
          your business goals.
        </p>

        {/* Current Availability Indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-green-600 dark:text-green-400 font-medium">
            Currently accepting new consultation requests
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Schedule Consultation
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
          >
            View All Services
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6 pt-4 border-t border-border/50 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span>24-48hr Response Time</span>
          </div>
          <div className="flex items-center gap-2">
            <span>💼</span>
            <span>Free Initial Assessment</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🎯</span>
            <span>Tailored Solutions</span>
          </div>
        </div>
      </div>
    </div>
  );
}
