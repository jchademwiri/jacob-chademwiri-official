// src/components/projects/project-actions.tsx
import React from 'react';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
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

  return (
    <div className="flex items-center space-x-2">
      {project.liveUrl && (
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          title="View Live Site"
        >
          <ExternalLink className="h-4 w-4" />
        </Link>
      )}
      {project.githubUrl && (
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          title="View Source Code"
        >
          <Github className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
