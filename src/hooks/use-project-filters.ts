import { useState, useCallback, useMemo } from 'react';
import { Project } from '@/data/projects';

export interface FilterState {
  category: string;
  technology: string;
  sortBy: 'recent' | 'popular' | 'featured';
  search: string;
}

export interface FilterOption {
  value: string;
  label: string;
}

export function useProjectFilters(initialProjects: Project[]) {
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    technology: 'all',
    sortBy: 'recent',
    search: '',
  });

  const categories = useMemo(() => {
    const uniqueCategories = new Set(initialProjects.map((p) => p.category));
    return [
      { value: 'all', label: 'All Categories' },
      ...Array.from(uniqueCategories).map((category) => ({
        value: category,
        label: category
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' '),
      })),
    ];
  }, [initialProjects]);

  const technologies = useMemo(() => {
    const techSet = new Set<string>();
    initialProjects.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });

    return [
      { value: 'all', label: 'All Technologies' },
      ...Array.from(techSet).map((tech) => ({
        value: tech,
        label: tech,
      })),
    ];
  }, [initialProjects]);

  const filteredProjects = useMemo(() => {
    let result = [...initialProjects];

    if (filters.category !== 'all') {
      result = result.filter((p) => p.category === filters.category);
    }

    if (filters.technology !== 'all') {
      result = result.filter((p) => p.technologies.includes(filters.technology));
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower) ||
          p.technologies.some((tech) => tech.toLowerCase().includes(searchLower))
      );
    }

    result.sort((a, b) => {
      switch (filters.sortBy) {
        case 'recent':
          return (
            new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime()
          );
        case 'popular':
          return (b.metrics?.views || 0) - (a.metrics?.views || 0);
        case 'featured':
          return Number(b.featured) - Number(a.featured);
        default:
          return 0;
      }
    });

    return result;
  }, [initialProjects, filters]);

  const updateFilters = useCallback((newFilters: FilterState) => {
    setFilters(newFilters);
  }, []);

  return {
    filters,
    updateFilters,
    filteredProjects,
    categories,
    technologies,
  };
}