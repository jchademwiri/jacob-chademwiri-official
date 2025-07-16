// src/app/(site)/insights/[insightId]/page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PageParams {
  insightId: string;
}

interface Props {
  params: Promise<PageParams>;
}

export default function InsightPage({ params }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [resolvedParams, setResolvedParams] = useState<PageParams | null>(null);

  useEffect(() => {
    const resolveParams = async () => {
      try {
        const result = await params;
        setResolvedParams(result);
        setTimeout(() => setIsLoading(false), 500);
      } catch (error) {
        setIsLoading(false);
        console.error('Error resolving params:', error);
        notFound();
      }
    };

    resolveParams();
  }, [params]);

  if (isLoading || !resolvedParams) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/4 mb-4"></div>
            <div className="h-6 bg-muted rounded w-3/4 mb-8"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Back Button */}
        <div className="mb-6 animate-in slide-in-from-left duration-500">
          <Link href="/insights">
            <Button
              variant="ghost"
              className="group cursor-pointer hover:bg-muted transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Insights
            </Button>
          </Link>
        </div>

        <div className="text-center space-y-8 max-w-2xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Professional Insight
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-md mx-auto">
              Individual insights on tender management, project coordination,
              and digital transformation coming soon.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            <div className="p-6 rounded-xl bg-muted/30">
              <h3 className="text-lg font-medium mb-2">
                In-depth Industry Analysis
              </h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive analysis of industry trends and opportunities
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted/30">
              <h3 className="text-lg font-medium mb-2">Best Practice Guides</h3>
              <p className="text-sm text-muted-foreground">
                Step-by-step guides for implementing proven strategies
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted/30">
              <h3 className="text-lg font-medium mb-2">
                Case Study Breakdowns
              </h3>
              <p className="text-sm text-muted-foreground">
                Detailed analysis of successful project implementations
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted/30">
              <h3 className="text-lg font-medium mb-2">
                Strategic Recommendations
              </h3>
              <p className="text-sm text-muted-foreground">
                Actionable advice for business growth and optimization
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
