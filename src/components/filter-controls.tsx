'use client';
import React from 'react';
import { Search, X, Filter, SlidersHorizontal, Loader2 } from 'lucide-react';
import { Select } from './ui/select';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';

interface FilterState {
  category: string;
  technology: string;
  sortBy: 'recent' | 'popular' | 'featured';
  search: string;
}

interface FilterControlsProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  className?: string;
  isLoading?: boolean;
  resultCount?: number;
}

export default function FilterControls({
  filters,
  onFiltersChange,
  className,
  isLoading = false,
  resultCount,
}: FilterControlsProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const searchTimeoutRef = React.useRef<NodeJS.Timeout>();

  const categories = React.useMemo(() => {
    const categoryMap = {
      'web-development': 'Web Development',
      'e-commerce': 'E-commerce',
      dashboard: 'Dashboard',
      mobile: 'Mobile',
      saas: 'SaaS',
      cms: 'CMS',
    };

    return [
      { value: 'all', label: 'All Categories' },
      ...Array.from(new Set(projects.map((p) => p.category))).map((cat) => ({
        value: cat,
        label: categoryMap[cat as keyof typeof categoryMap] || cat,
      })),
    ];
  }, []);

  const technologies = React.useMemo(() => {
    const allTechs = Array.from(
      new Set(projects.flatMap((p) => p.technologies))
    )
      .sort()
      .map((tech) => ({ value: tech, label: tech }));

    return [{ value: 'all', label: 'All Technologies' }, ...allTechs];
  }, []);

  const sortOptions = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'featured', label: 'Featured First' },
  ];

  // Debounced search handler
  const handleSearchChange = (value: string) => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
      onFiltersChange({ ...filters, search: value });
    }, 300);
  };

  const updateFilter = <K extends keyof FilterState>(
    key: K,
    value: FilterState[K]
  ) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const resetFilters = () => {
    onFiltersChange({
      category: 'all',
      technology: 'all',
      sortBy: 'recent',
      search: '',
    });
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.category !== 'all') count++;
    if (filters.technology !== 'all') count++;
    if (filters.search.trim()) count++;
    if (filters.sortBy !== 'recent') count++;
    return count;
  };

  const activeFiltersCount = getActiveFiltersCount();
  const hasActiveFilters = activeFiltersCount > 0;

  React.useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={cn(
        'space-y-4 p-4 rounded-xl border bg-card/50 backdrop-blur-sm shadow-sm transition-all duration-300',
        'hover:shadow-md hover:bg-card/70',
        className
      )}
    >
      {/* Header with expand/collapse and results */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">Filters</span>
          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="text-xs">
              {activeFiltersCount}
            </Badge>
          )}
          {isLoading && (
            <Loader2 className="h-3 w-3 animate-spin text-muted-foreground" />
          )}
        </div>

        <div className="flex items-center space-x-2">
          {resultCount !== undefined && (
            <span className="text-xs text-muted-foreground">
              {resultCount} {resultCount === 1 ? 'project' : 'projects'}
            </span>
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="h-8 w-8 p-0"
            aria-label={isExpanded ? 'Collapse filters' : 'Expand filters'}
          >
            <SlidersHorizontal
              className={cn(
                'h-4 w-4 transition-transform',
                isExpanded && 'rotate-180'
              )}
            />
          </Button>
        </div>
      </div>

      {/* Always visible: Search bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search projects, technologies..."
          defaultValue={filters.search}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-10 pr-10 bg-background/50 border-border/50 focus:bg-background focus:border-border transition-colors"
          aria-label="Search projects"
        />
        {filters.search && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => updateFilter('search', '')}
            className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 p-0 hover:bg-muted"
            aria-label="Clear search"
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>

      {/* Expandable filter controls */}
      <div
        className={cn(
          'grid gap-4 transition-all duration-300 overflow-hidden',
          isExpanded
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4">
            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Category
              </label>
              <Select
                value={filters.category}
                onValueChange={(value) => updateFilter('category', value)}
                aria-label="Filter by category"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </Select>
            </div>

            {/* Technology Filter */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Technology
              </label>
              <Select
                value={filters.technology}
                onValueChange={(value) => updateFilter('technology', value)}
                aria-label="Filter by technology"
              >
                {technologies.map((tech) => (
                  <option key={tech.value} value={tech.value}>
                    {tech.label}
                  </option>
                ))}
              </Select>
            </div>

            {/* Sort Filter */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Sort By
              </label>
              <Select
                value={filters.sortBy}
                onValueChange={(value) =>
                  updateFilter('sortBy', value as FilterState['sortBy'])
                }
                aria-label="Sort projects"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Active filters display */}
      {hasActiveFilters && (
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="flex flex-wrap gap-2">
            {filters.category !== 'all' && (
              <Badge variant="outline" className="text-xs">
                {categories.find((c) => c.value === filters.category)?.label}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => updateFilter('category', 'all')}
                  className="ml-1 h-4 w-4 p-0 hover:bg-destructive hover:text-destructive-foreground"
                >
                  <X className="h-2 w-2" />
                </Button>
              </Badge>
            )}

            {filters.technology !== 'all' && (
              <Badge variant="outline" className="text-xs">
                {
                  technologies.find((t) => t.value === filters.technology)
                    ?.label
                }
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => updateFilter('technology', 'all')}
                  className="ml-1 h-4 w-4 p-0 hover:bg-destructive hover:text-destructive-foreground"
                >
                  <X className="h-2 w-2" />
                </Button>
              </Badge>
            )}

            {filters.search.trim() && (
              <Badge variant="outline" className="text-xs">
                "{filters.search}"
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => updateFilter('search', '')}
                  className="ml-1 h-4 w-4 p-0 hover:bg-destructive hover:text-destructive-foreground"
                >
                  <X className="h-2 w-2" />
                </Button>
              </Badge>
            )}

            {filters.sortBy !== 'recent' && (
              <Badge variant="outline" className="text-xs">
                {sortOptions.find((s) => s.value === filters.sortBy)?.label}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => updateFilter('sortBy', 'recent')}
                  className="ml-1 h-4 w-4 p-0 hover:bg-destructive hover:text-destructive-foreground"
                >
                  <X className="h-2 w-2" />
                </Button>
              </Badge>
            )}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={resetFilters}
            disabled={isLoading}
            className="text-xs hover:bg-destructive hover:text-destructive-foreground hover:border-destructive"
          >
            Reset All
          </Button>
        </div>
      )}
    </div>
  );
}
