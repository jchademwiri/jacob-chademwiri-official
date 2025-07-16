'use client';
import React from 'react';
import { CaseStudyCard } from './case-study-card';
import { LoadingSpinner } from '@/components/projects/loading-spinner';
import { Project } from '@/data/projects';

interface CaseStudiesGridProps {
  projects: Project[];
  viewMode: 'grid' | 'list';
  isLoading: boolean;
}

export function CaseStudiesGrid({
  projects,
  viewMode,
  isLoading,
}: CaseStudiesGridProps) {
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
        <CaseStudyCard
          key={project.id}
          project={project}
          viewMode={viewMode}
          delay={index * 100}
        />
      ))}
    </div>
  );
}
