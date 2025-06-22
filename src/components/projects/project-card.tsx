'use client';
// src/components/projects/project-card.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  Code,
  Calendar,
  Tag,
  Star,
  Briefcase,
  Users,
  DollarSign,
  ExternalLink,
} from 'lucide-react';

import { ProjectBadges } from './project-badges';
import { ProjectMetrics } from './project-metrics';
import { ProjectActions } from './project-actions';
import { cn } from '@/lib/utils';
import { Project } from '@/data/projects';

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
                <div className="flex items-center space-x-2">
                  <ProjectTypeIcon projectType={project.projectType} />
                  <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <ProjectActions project={project} />
              </div>
              <p className="text-muted-foreground">{project.description}</p>
            </div>

            <ProjectBadges
              technologies={project.technologies}
              skills={project.skills}
              variant="both"
              maxDisplay={6}
            />

            <div className="space-y-2">
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

              <ProjectDetailsRow project={project} />
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

        <div className="absolute bottom-3 left-3">
          <ProjectTypeBadge projectType={project.projectType} />
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

        {/* <ProjectBadges
          items={project.technologies || project.skills}
          maxDisplay={3}
          label={project.projectType === 'web-development' ? 'Tech' : 'Skills'}
        /> */}

        <div className="space-y-2 text-xs text-muted-foreground">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {new Date(project.completedDate).toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <Tag className="h-3 w-3 mr-1" />
              {project.category}
            </div>
          </div>

          <ProjectDetailsRow project={project} />
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
  const defaultIcon =
    project.projectType === 'web-development' ? Code : Briefcase;
  const IconComponent = defaultIcon;

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
          <IconComponent className="h-16 w-16 text-muted-foreground" />
        </div>
      )}
    </div>
  );
}

function ProjectTypeIcon({ projectType }: { projectType: string }) {
  const Icon = projectType === 'web-development' ? Code : Briefcase;
  return <Icon className="h-5 w-5 text-muted-foreground" />;
}

function ProjectTypeBadge({ projectType }: { projectType: string }) {
  const isWebDev = projectType === 'web-development';
  return (
    <div
      className={cn(
        'px-2 py-1 rounded text-xs font-medium flex items-center',
        isWebDev ? 'bg-blue-500/80 text-white' : 'bg-orange-500/80 text-white'
      )}
    >
      {isWebDev ? (
        <>
          <Code className="h-3 w-3 mr-1" />
          Web Development
        </>
      ) : (
        <>
          <Briefcase className="h-3 w-3 mr-1" />
          Project Management
        </>
      )}
    </div>
  );
}

function ProjectDetailsRow({ project }: { project: Project }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        {project.budget && (
          <div className="flex items-center">
            <DollarSign className="h-3 w-3 mr-1" />
            {project.budget}
          </div>
        )}
        {project.teamSize && (
          <div className="flex items-center">
            <Users className="h-3 w-3 mr-1" />
            {project.teamSize}
          </div>
        )}
        {project.client && (
          <div className="flex items-center">
            <Briefcase className="h-3 w-3 mr-1" />
            {project.client}
          </div>
        )}
      </div>
      {project.externalUrl && (
        <div className="flex items-center text-primary">
          <ExternalLink className="h-3 w-3 mr-1" />
          View Live
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
