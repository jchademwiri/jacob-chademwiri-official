'use client';
// src/components/projects/project-card.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Code, ExternalLink, Github, Calendar, Tag, Star } from 'lucide-react';
import { ProjectBadges } from './project-badges';
import { ProjectActions } from './project-actions';
import { ProjectMetrics } from './project-metrics';

interface ProjectCardProps {
  project: any;
  viewMode: 'grid' | 'list';
  delay: number;
}

export function ProjectCard({ project, viewMode, delay }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  if (viewMode === 'list') {
    return (
      <div
        className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
        style={{ animationDelay: `${delay}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <ProjectImage project={project} className="aspect-video" />
          </div>

          <div className="md:w-2/3 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                  <Link href={`/projects/${project.id}`}>{project.title}</Link>
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
      className="group bg-card/50 backdrop-blur-sm border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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

        {isHovered && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-all duration-300">
            <Link
              href={`/projects/${project.id}`}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View Details
            </Link>
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            <Link href={`/projects/${project.id}`}>{project.title}</Link>
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
  project: any;
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
