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
          </div>
        </div>
      </div>
    </div>
  );
}
