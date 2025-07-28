// src/app/(site)/insights/page.tsx
'use client';
import { useState, useEffect } from 'react';

export default function InsightsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="text-center space-y-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Professional Insights
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-md mx-auto">
                Industry insights on tender management, project coordination,
                and digital transformation coming soon.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <div className="p-6 rounded-xl bg-muted/30">
                <h3 className="text-lg font-medium mb-2">
                  Tender Process Best Practices
                </h3>
                <p className="text-sm text-muted-foreground">
                  Expert guidance on winning tenders and compliance management
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted/30">
                <h3 className="text-lg font-medium mb-2">
                  Project Management Strategies
                </h3>
                <p className="text-sm text-muted-foreground">
                  Proven methodologies for successful project delivery
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted/30">
                <h3 className="text-lg font-medium mb-2">
                  Digital Transformation Insights
                </h3>
                <p className="text-sm text-muted-foreground">
                  Modern approaches to business digitization
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted/30">
                <h3 className="text-lg font-medium mb-2">
                  Business Process Optimization
                </h3>
                <p className="text-sm text-muted-foreground">
                  Streamlining operations for maximum efficiency
                </p>
              </div>
            </div>

            {/* Consultation CTA */}
            <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border border-green-200/50 dark:border-green-800/50">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Need Expert Guidance for Your Business?
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Get personalized insights and strategies for your tender
                  management, project coordination, or digital transformation
                  needs. Schedule a consultation to discuss your specific
                  challenges.
                </p>

                {/* Current Availability */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                    Currently available for business consultations
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    Schedule Business Consultation
                  </a>
                  <a
                    href="/services"
                    className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
                  >
                    Explore Services
                  </a>
                </div>

                {/* Service Areas */}
                <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span>🎯</span>
                    <span>Tender Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📊</span>
                    <span>Project Coordination</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>💻</span>
                    <span>Web Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>⚡</span>
                    <span>Process Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
