// src/app/(site)/case-studies/page.tsx
'use client';
import { useState, useEffect } from 'react';
import { projects } from '@/data/projects';
import { useProjectFilters, FilterState } from '@/hooks/use-project-filters';
import { AnimatedBackground } from '@/components/projects/animated-background';
import { ProjectsHeader } from '@/components/projects/projects-header';
import { ProjectsControls } from '@/components/projects/projects-controls';
import { EmptyState } from '@/components/projects/empty-state';
import { ProjectsGrid } from '@/components/projects/projects-grid';
import { CallToAction } from '@/components/projects/call-to-action';

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isLoading, setIsLoading] = useState(false);

  const {
    filters,
    updateFilters,
    resetFilters,
    filteredProjects,
    categories,
    skills,
    projectTypes,
    statusOptions,
    sortOptions,
    getActiveFiltersCount,
  } = useProjectFilters(projects);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleFiltersChange = async (newFilters: FilterState) => {
    setIsLoading(true);
    // Simulate API delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 300));
    updateFilters(newFilters);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ProjectsHeader isVisible={isVisible} />

        <ProjectsControls
          filters={filters}
          onFiltersChange={handleFiltersChange}
          onResetFilters={resetFilters}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          categories={categories}
          skills={skills}
          projectTypes={projectTypes}
          statusOptions={statusOptions}
          sortOptions={sortOptions}
          resultCount={filteredProjects.length}
          activeFiltersCount={getActiveFiltersCount()}
          isVisible={isVisible}
        />

        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {filteredProjects.length === 0 ? (
            <EmptyState />
          ) : (
            <ProjectsGrid
              projects={filteredProjects}
              viewMode={viewMode}
              isLoading={isLoading}
            />
          )}
        </div>

        <CallToAction isVisible={isVisible} />
      </div>
    </div>
  );
}
