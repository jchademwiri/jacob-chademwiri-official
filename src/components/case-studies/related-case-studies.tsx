'use client';
import React from 'react';
import { Project } from '@/data/projects';
import { CaseStudyCard } from './case-study-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface RelatedCaseStudiesProps {
  currentProject: Project;
  allProjects: Project[];
  maxResults?: number;
}

export function RelatedCaseStudies({
  currentProject,
  allProjects,
  maxResults = 3,
}: RelatedCaseStudiesProps) {
  // Algorithm to find related case studies
  const getRelatedProjects = (): Project[] => {
    const related = allProjects
      .filter((project) => project.id !== currentProject.id)
      .map((project) => {
        let score = 0;

        // Same service type gets highest priority
        if (project.serviceType === currentProject.serviceType) {
          score += 10;
        }

        // Same category gets medium priority
        if (project.category === currentProject.category) {
          score += 5;
        }

        // Same client gets medium priority
        if (
          project.client &&
          currentProject.client &&
          project.client === currentProject.client
        ) {
          score += 5;
        }

        // Shared skills get points
        const sharedSkills = project.skills.filter((skill) =>
          currentProject.skills.includes(skill)
        );
        score += sharedSkills.length * 2;

        // Shared technologies get points
        if (project.technologies && currentProject.technologies) {
          const sharedTech = project.technologies.filter((tech) =>
            currentProject.technologies?.includes(tech)
          );
          score += sharedTech.length * 2;
        }

        // Featured projects get slight boost
        if (project.featured) {
          score += 1;
        }

        return { project, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, maxResults)
      .map(({ project }) => project);

    return related;
  };

  const relatedProjects = getRelatedProjects();

  if (relatedProjects.length === 0) {
    return null;
  }

  const getServiceTypeLabel = (serviceType: string) => {
    switch (serviceType) {
      case 'tender_management':
        return 'Tender Management';
      case 'project_management':
        return 'Project Management';
      case 'web_development':
        return 'Web Development';
      case 'it_solutions':
        return 'IT Solutions';
      default:
        return serviceType;
    }
  };

  return (
    <div className="mb-12 animate-in fade-in-50 slide-in-from-bottom-8 duration-700 delay-700">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-primary" />
            Related Case Studies
          </CardTitle>
          <p className="text-muted-foreground">
            Similar projects in{' '}
            {getServiceTypeLabel(currentProject.serviceType)} and related
            services
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((project, index) => (
              <CaseStudyCard
                key={project.id}
                project={project}
                viewMode="grid"
                delay={index * 100}
              />
            ))}
          </div>

          {relatedProjects.length >= maxResults && (
            <div className="mt-8 text-center">
              <Link href="/#">
                <Button variant="outline" className="group">
                  View All Case Studies
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
