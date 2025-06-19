'use client';
// src/components/projects/project-card.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Code, Calendar, Tag, Star } from 'lucide-react';
import { Project } from '@/data/projects';
import { ProjectBadges } from './project-badges';
import { ProjectMetrics } from './project-metrics';
import { ProjectActions } from './project-actions';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  viewMode: 'grid' | 'list';
  delay: number;
}

export function ProjectCard({ project, viewMode, delay }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projects/${project.id}`);
  };

  if (viewMode === 'list') {
    return (
      <div
        className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 cursor-pointer hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] dark:hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:border-green-500/50"
        style={{ animationDelay: `${delay}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <ProjectImage project={project} className="aspect-video" />
          </div>

          <div className="md:w-2/3 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ProjectActions project={project} />
              </div>
              <p className="text-muted-foreground">{project.description}</p>
            </div>

            <ProjectBadges technologies={project.technologies} maxDisplay={5} />

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(project.completedDate).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-1" />
                  {project.category}
                </div>
              </div>
              <ProjectMetrics project={project} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'group bg-card/50 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 cursor-pointer hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] dark:hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:border-green-500/50',
        isHovered && 'transform scale-[1.02]'
      )}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="relative">
        <ProjectImage
          project={project}
          className="aspect-video group-hover:scale-105 transition-transform duration-300"
        />

        {project.featured && (
          <div className="absolute top-3 left-3">
            <FeaturedBadge />
          </div>
        )}

        <div className="absolute top-3 right-3">
          <ProjectActions project={project} variant="floating" />
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        </div>

        <ProjectBadges technologies={project.technologies} maxDisplay={4} />

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {new Date(project.completedDate).toLocaleDateString()}
          </div>
          <div className="flex items-center">
            <Tag className="h-3 w-3 mr-1" />
            {project.category}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectImage({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div className={`relative bg-muted overflow-hidden ${className}`}>
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Code className="h-16 w-16 text-muted-foreground" />
        </div>
      )}
    </div>
  );
}

function FeaturedBadge() {
  return (
    <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium flex items-center">
      <Star className="h-3 w-3 mr-1" />
      Featured
    </div>
  );
}
