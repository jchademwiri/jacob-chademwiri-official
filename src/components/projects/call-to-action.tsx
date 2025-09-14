// src/components/projects/call-to-action.tsx
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CallToAction() {
  return (
    <section className="my-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" text-center transition-all duration-1000 delay-700 opacity-100 translate-y-0">
          <div className="bg-gradient-to-r from-primary/10 to-green-600/10 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to discuss your project needs?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Schedule a consultation to explore how my expertise in tender
              management, project coordination, and web development can help
              achieve your business goals.
            </p>

            {/* Current Availability Indicator */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                Currently accepting new consultation requests
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/contact" className="py-6 text-white">
                  Schedule Consultation
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services" className="py-6 ">
                  View All Services
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6 pt-4 border-t border-border/50 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>📞</span>
                <span>24-48hr Response Time</span>
              </div>
              <div className="flex items-center gap-2">
                <span>💼</span>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🎯</span>
                <span>Tailored Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
