'use client';

import React from 'react';
import { Search, Grid3X3, List, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import type { FilterState } from '@/hooks/use-project-filters';

interface ProjectsControlsProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onResetFilters: () => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  categories: Array<{ value: string; label: string }>;
  skills: Array<{ value: string; label: string }>;
  projectTypes: Array<{ value: string; label: string }>;
  statusOptions: Array<{ value: string; label: string }>;
  sortOptions: Array<{ value: string; label: string }>;
  resultCount: number;
  activeFiltersCount: number;
  isVisible: boolean;
  isLoading?: boolean;
}

export function ProjectsControls({
  filters,
  onFiltersChange,
  onResetFilters,
  viewMode,
  onViewModeChange,
  categories,

  skills,
  projectTypes,
  statusOptions,
  sortOptions,
  resultCount,
  activeFiltersCount,
  isVisible,
  isLoading = false,
}: ProjectsControlsProps) {
  const hasActiveFilters = activeFiltersCount > 0;

  const removeSkill = (skillToRemove: string) => {
    onFiltersChange({
      ...filters,
      skill: (filters.skill || []).filter((skill) => skill !== skillToRemove),
    });
  };

  const addSkill = (skill: string) => {
    const currentSkills = filters.skill || [];
    if (!currentSkills.includes(skill)) {
      onFiltersChange({
        ...filters,
        skill: [...currentSkills, skill],
      });
    }
  };

  return (
    <div
      className={`mb-8 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="bg-card/60 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Filter className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-lg">Filter & Search</h3>
            {hasActiveFilters && (
              <Badge variant="secondary" className="ml-2">
                {activeFiltersCount} active
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>
              {resultCount} project{resultCount !== 1 ? 's' : ''} found
            </span>
          </div>
        </div>

        {/* Main Controls */}
        <div className="space-y-6">
          {/* Search and View Toggle */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Search projects by name, description, or skill..."
                value={filters.search}
                onChange={(e) =>
                  onFiltersChange({ ...filters, search: e.target.value })
                }
                className="pl-10 pr-4 h-11"
                disabled={isLoading}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              {filters.search && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
                  onClick={() => onFiltersChange({ ...filters, search: '' })}
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-muted/50 rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onViewModeChange('grid')}
                className="h-9 px-3"
                disabled={isLoading}
              >
                <Grid3X3 className="h-4 w-4 mr-2" />
                Grid
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onViewModeChange('list')}
                className="h-9 px-3"
                disabled={isLoading}
              >
                <List className="h-4 w-4 mr-2" />
                List
              </Button>
            </div>
          </div>

          {/* Filter Selects - First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Select
              value={filters.category}
              onValueChange={(value) =>
                onFiltersChange({ ...filters, category: value })
              }
              disabled={isLoading}
            >
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={filters.projectType}
              onValueChange={(value) =>
                onFiltersChange({
                  ...filters,
                  projectType: value as FilterState['projectType'],
                })
              }
              disabled={isLoading}
            >
              <SelectTrigger>
                <SelectValue placeholder="All Project Types" />
              </SelectTrigger>
              <SelectContent>
                {/* <SelectItem value="all">All Project Types</SelectItem> */}
                {projectTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={filters.status}
              onValueChange={(value) =>
                onFiltersChange({
                  ...filters,
                  status: value as FilterState['status'],
                })
              }
              disabled={isLoading}
            >
              <SelectTrigger>
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                {statusOptions.map((status) => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={filters.sortBy}
              onValueChange={(value) =>
                onFiltersChange({
                  ...filters,
                  sortBy: value as FilterState['sortBy'],
                })
              }
              disabled={isLoading}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Filter Selects - Second Row for Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select value="" onValueChange={addSkill} disabled={isLoading}>
              <SelectTrigger>
                <SelectValue placeholder="Add Skill Filter" />
              </SelectTrigger>
              <SelectContent>
                {skills
                  .filter(
                    (skill) => !(filters.skill || []).includes(skill.value)
                  )
                  .map((skill) => (
                    <SelectItem key={skill.value} value={skill.value}>
                      {skill.label}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>

          {/* Active Skill Filters */}
          {(filters.skill || []).length > 0 && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Selected Skills:
              </label>
              <div className="flex flex-wrap gap-2">
                {(filters.skill || []).map((skill) => {
                  const skillLabel =
                    skills.find((s) => s.value === skill)?.label || skill;
                  return (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="px-3 py-1 flex items-center gap-2"
                    >
                      {skillLabel}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-4 w-4 p-0 hover:bg-destructive hover:text-destructive-foreground"
                        onClick={() => removeSkill(skill)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  );
                })}
              </div>
            </div>
          )}

          {/* Clear Filters */}
          {hasActiveFilters && (
            <div className="flex justify-between items-center pt-4 border-t border-border/50">
              <div className="text-sm text-muted-foreground">
                {activeFiltersCount} filter{activeFiltersCount !== 1 ? 's' : ''}{' '}
                applied
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={onResetFilters}
                disabled={isLoading}
                className="h-8"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
