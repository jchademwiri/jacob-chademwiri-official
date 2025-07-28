// src/app/(site)/insights/[insightId]/not-found.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <FileText className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold mb-2">Insight Not Found</h1>
          <p className="text-muted-foreground">
            The insight you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>

        <div className="space-y-3">
          <Link href="/insights">
            <Button className="w-full">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Insights
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="w-full">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
