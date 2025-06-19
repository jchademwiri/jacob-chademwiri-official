'use client';
// src/components/projects/projects-grid.tsx
import React from 'react';
import { ProjectCard } from './project-card';
import { LoadingSpinner } from './loading-spinner';

interface ProjectsGridProps {
  projects: any[];
  viewMode: 'grid' | 'list';
  isLoading: boolean;
}

export function ProjectsGrid({
  projects,
  viewMode,
  isLoading,
}: ProjectsGridProps) {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div
      className={`grid gap-8 ${
        viewMode === 'grid'
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          : 'grid-cols-1'
      }`}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          viewMode={viewMode}
          delay={index * 100}
        />
      ))}
    </div>
  );
}
