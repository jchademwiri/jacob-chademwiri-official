// src/app/(site)/projects/page.tsx
'use client';
import React, { useState, useEffect, useMemo } from 'react';
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

  const { filters, updateFilters, filteredProjects, categories, technologies } =
    useProjectFilters(projects);

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

  const stats = useMemo(
    () => [
      {
        label: 'Projects Completed',
        value: `${projects.length}+`,
        icon: 'TrendingUp',
      },
      {
        label: 'Technologies Used',
        value: `${technologies.length - 1}+`,
        icon: 'Code',
      },
      { label: 'Happy Clients', value: '25+', icon: 'Users' },
      { label: 'Years Experience', value: '5+', icon: 'Calendar' },
    ],
    [technologies.length]
  );

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ProjectsHeader isVisible={isVisible} stats={stats} />

        <ProjectsControls
          filters={filters}
          onFiltersChange={handleFiltersChange}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          categories={categories}
          technologies={technologies}
          resultCount={filteredProjects.length}
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
