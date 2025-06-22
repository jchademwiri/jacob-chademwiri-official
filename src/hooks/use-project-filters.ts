import { useState, useCallback, useMemo } from 'react';
import { Project, ProjectType } from '@/data/projects';

export interface FilterState {
  category: string;
  skill?: string[]; // Added to support skills filter
  projectType: ProjectType | 'all';
  status: 'all' | 'completed' | 'in-progress';
  sortBy: 'recent' | 'featured' | 'alphabetical' | 'duration';
  search: string;
}

export interface FilterOption {
  value: string;
  label: string;
}

export function useProjectFilters(initialProjects: Project[]) {
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    skill: undefined,

    projectType: 'all',
    status: 'all',
    sortBy: 'recent',
    search: '',
  });

  // Extract unique categories
  const categories = useMemo(() => {
    const uniqueCategories = new Set(initialProjects.map((p) => p.category));
    return [
      { value: 'all', label: 'All Categories' },
      ...Array.from(uniqueCategories).map((category) => ({
        value: category,
        label: category
          .split(/[-\s]/)
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' '),
      })),
    ];
  }, [initialProjects]);

  // Extract unique technologies from all projects
  const technologies = useMemo(() => {
    const techSet = new Set<string>();
    initialProjects.forEach((project) => {
      project.technologies?.forEach((tech) => techSet.add(tech));
    });

    return [
      { value: 'all', label: 'All Technologies' },
      ...Array.from(techSet)
        .sort()
        .map((tech) => ({
          value: tech,
          label: tech,
        })),
    ];
  }, [initialProjects]);

  // Extract unique skills from all projects
  const skills = useMemo(() => {
    const skillSet = new Set<string>();
    initialProjects.forEach((project) => {
      project.skills?.forEach((skill) => skillSet.add(skill));
    });

    return [
      { value: 'all', label: 'All Skills' },
      ...Array.from(skillSet)
        .sort()
        .map((skill) => ({
          value: skill,
          label: skill,
        })),
    ];
  }, [initialProjects]);

  // Project type options
  const projectTypes = useMemo(
    () => [
      { value: 'all', label: 'All Project Types' },
      { value: 'web-development', label: 'Web Development' },
      { value: 'project-management', label: 'Project Management' },
    ],
    []
  );

  // Status options
  const statusOptions = useMemo(
    () => [
      { value: 'all', label: 'All Status' },
      { value: 'completed', label: 'Completed' },
      { value: 'in-progress', label: 'In Progress' },
    ],
    []
  );

  // Sort options
  const sortOptions = useMemo(
    () => [
      { value: 'recent', label: 'Most Recent' },
      { value: 'featured', label: 'Featured First' },
      { value: 'alphabetical', label: 'Alphabetical' },
      { value: 'duration', label: 'By Duration' },
    ],
    []
  );

  const filteredProjects = useMemo(() => {
    let result = [...initialProjects];

    // Filter by category
    if (filters.category !== 'all') {
      result = result.filter((p) => p.category === filters.category);
    }

    // Filter by project type
    if (filters.projectType !== 'all') {
      result = result.filter((p) => p.projectType === filters.projectType);
    }

    // Filter by status
    if (filters.status !== 'all') {
      result = result.filter((p) => p.status === filters.status);
    }

    // Filter by search term
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter((p) => {
        const matchesTitle = p.title.toLowerCase().includes(searchLower);
        const matchesDescription = p.description
          .toLowerCase()
          .includes(searchLower);
        const matchesTechnologies = p.technologies?.some((tech) =>
          tech.toLowerCase().includes(searchLower)
        );
        const matchesSkills = p.skills?.some((skill) =>
          skill.toLowerCase().includes(searchLower)
        );
        const matchesClient = p.client?.toLowerCase().includes(searchLower);
        const matchesRole = p.myRole.toLowerCase().includes(searchLower);

        return (
          matchesTitle ||
          matchesDescription ||
          matchesTechnologies ||
          matchesSkills ||
          matchesClient ||
          matchesRole
        );
      });
    }

    // Sort results
    result.sort((a, b) => {
      switch (filters.sortBy) {
        case 'recent':
          return (
            new Date(b.completedDate).getTime() -
            new Date(a.completedDate).getTime()
          );

        case 'featured':
          // Featured projects first, then by recent
          if (a.featured !== b.featured) {
            return Number(b.featured) - Number(a.featured);
          }
          return (
            new Date(b.completedDate).getTime() -
            new Date(a.completedDate).getTime()
          );

        case 'alphabetical':
          return a.title.localeCompare(b.title);

        case 'duration':
          // Sort by duration (assuming format like "4 months", "6 weeks", etc.)
          const getDurationInDays = (duration: string) => {
            const match = duration.match(/(\d+)\s*(month|week|day)s?/i);
            if (!match) return 0;
            const [, num, unit] = match;
            const multiplier = unit.toLowerCase().startsWith('month')
              ? 30
              : unit.toLowerCase().startsWith('week')
              ? 7
              : 1;
            return parseInt(num) * multiplier;
          };
          return getDurationInDays(b.duration) - getDurationInDays(a.duration);

        default:
          return 0;
      }
    });

    return result;
  }, [initialProjects, filters]);

  const updateFilters = useCallback((newFilters: FilterState) => {
    setFilters(newFilters);
  }, []);

  // Reset filters
  const resetFilters = useCallback(() => {
    setFilters({
      category: 'all',
      skill: undefined,

      projectType: 'all',
      status: 'all',
      sortBy: 'recent',
      search: '',
    });
  }, []);

  // Get filter summary for display
  const getActiveFiltersCount = useCallback(() => {
    let count = 0;
    if (filters.category !== 'all') count++;

    if (filters.projectType !== 'all') count++;
    if (filters.status !== 'all') count++;
    if (filters.search) count++;
    return count;
  }, [filters]);

  return {
    filters,
    updateFilters,
    resetFilters,
    filteredProjects,
    categories,
    technologies,
    skills,
    projectTypes,
    statusOptions,
    sortOptions,
    getActiveFiltersCount,
  };
}
