// src/components/projects/project-actions.tsx
import React from 'react';
import Link from 'next/link';
import { FileText, Briefcase, Globe } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectActionsProps {
  project: Project;
  variant?: 'default' | 'floating';
}

export function ProjectActions({
  project,
  variant = 'default',
}: ProjectActionsProps) {
  const baseClasses =
    variant === 'floating'
      ? 'p-2 bg-background/80 hover:bg-background rounded-lg transition-colors backdrop-blur-sm'
      : 'p-2 hover:bg-muted rounded-lg transition-colors';

  // Determine what actions to show based on project type
  const isWebDev = project.projectType === 'web-development';

  return (
    <div className="flex items-center space-x-2">
      {/* External URL - works for both types but with different meanings */}
      {project.externalUrl && (
        <Link
          href={project.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          title={isWebDev ? 'View Live Site' : 'View Project Details'}
        >
          {isWebDev ? (
            <Globe className="h-4 w-4" />
          ) : (
            <FileText className="h-4 w-4" />
          )}
        </Link>
      )}

      {/* Project Portfolio Link - for PM projects without external URLs */}
      {!isWebDev && !project.externalUrl && project.client && (
        <div className={baseClasses} title={`Project for ${project.client}`}>
          <Briefcase className="h-4 w-4" />
        </div>
      )}
    </div>
  );
}
