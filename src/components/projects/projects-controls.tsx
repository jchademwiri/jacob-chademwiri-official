'use client';
// src/components/projects/projects-controls.tsx
import React from 'react';
import { Search, Grid3X3, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Input
              type="text"
              placeholder="Search projects..."
              value={filters.search}
              onChange={(e) =>
                onFiltersChange({ ...filters, search: e.target.value })
              }
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>

          {/* Filters */}
          <div className="flex flex-1 flex-col sm:flex-row gap-4">
            <Select
              value={filters.category}
              onValueChange={(value) =>
                onFiltersChange({ ...filters, category: value })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={filters.technology}
              onValueChange={(value) =>
                onFiltersChange({ ...filters, technology: value })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Technologies" />
              </SelectTrigger>
              <SelectContent>
                {technologies.map((tech) => (
                  <SelectItem key={tech.value} value={tech.value}>
                    {tech.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={filters.sortBy}
              onValueChange={(value) =>
                onFiltersChange({
                  ...filters,
                  sortBy: value as 'recent' | 'popular' | 'featured',
                })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="featured">Featured First</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="icon"
              onClick={() => onViewModeChange('grid')}
              title="Grid view"
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="icon"
              onClick={() => onViewModeChange('list')}
              title="List view"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Found {resultCount} project{resultCount !== 1 ? 's' : ''}
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              onFiltersChange({
                category: 'all',
                technology: 'all',
                sortBy: 'recent',
                search: '',
              })
            }
            disabled={
              filters.category === 'all' &&
              filters.technology === 'all' &&
              filters.sortBy === 'recent' &&
              !filters.search
            }
          >
            Reset Filters
          </Button>
        </div>
      </div>
    </div>
  );
}
