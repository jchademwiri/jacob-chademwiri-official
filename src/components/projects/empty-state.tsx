// src/components/projects/empty-state.tsx
import React from 'react';
import { Search } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="text-center py-16">
      <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
        <Search className="h-12 w-12 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">
        No projects found
      </h3>
      <p className="text-muted-foreground">
        Try adjusting your filters or search terms.
      </p>
    </div>
  );
}
