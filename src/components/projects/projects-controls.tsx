'use client';
// src/components/projects/projects-controls.tsx
import React from 'react';
import { Search, Grid3X3, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FilterControls from '@/components/filter-controls';

interface FilterState {
  category: string;
  technology: string;
  sortBy: 'recent' | 'popular' | 'featured';
  search: string;
}

interface ProjectsControlsProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  categories: Array<{ value: string; label: string }>;
  technologies: Array<{ value: string; label: string }>;
  resultCount: number;
  isLoading: boolean;
  isVisible: boolean;
}

export function ProjectsControls({
  filters,
  onFiltersChange,
  viewMode,
  onViewModeChange,
  categories,
  technologies,
  resultCount,
  isLoading,
  isVisible,
}: ProjectsControlsProps) {
  return (
    <div
      className={`mb-12 transition-all duration-1000 delay-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <SearchBar
            value={filters.search}
            onChange={(value) => onFiltersChange({ ...filters, search: value })}
            isLoading={isLoading}
          />
          <ViewModeToggle viewMode={viewMode} onChange={onViewModeChange} />
        </div>

        <FilterControls
          filters={filters}
          onFiltersChange={onFiltersChange}
          isLoading={isLoading}
          resultCount={resultCount}
        />
      </div>
    </div>
  );
}

function SearchBar({
  value,
  onChange,
  isLoading,
}: {
  value: string;
  onChange: (value: string) => void;
  isLoading: boolean;
}) {
  const [localValue, setLocalValue] = React.useState(value);
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      onChange(newValue);
    }, 300);
  };

  return (
    <div className="relative flex-1 max-w-md">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <input
        type="text"
        placeholder="Search projects, technologies..."
        value={localValue}
        onChange={handleChange}
        disabled={isLoading}
        className="w-full pl-10 pr-4 py-2 bg-background/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-background focus:border-border transition-all disabled:opacity-50"
      />
    </div>
  );
}

function ViewModeToggle({
  viewMode,
  onChange,
}: {
  viewMode: 'grid' | 'list';
  onChange: (mode: 'grid' | 'list') => void;
}) {
  return (
    <div className="flex bg-muted rounded-lg p-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onChange('grid')}
        className={`p-2 rounded ${
          viewMode === 'grid'
            ? 'bg-background shadow-sm text-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        <Grid3X3 className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onChange('list')}
        className={`p-2 rounded ${
          viewMode === 'list'
            ? 'bg-background shadow-sm text-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        <List className="h-4 w-4" />
      </Button>
    </div>
  );
}
