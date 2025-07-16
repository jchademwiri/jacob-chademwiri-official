'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  Calendar,
  Tag,
  Star,
  Briefcase,
  Users,
  DollarSign,
  ExternalLink,
  TrendingUp,
  Award,
  Target,
  CheckCircle,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Project } from '@/data/projects';

interface CaseStudyCardProps {
  project: Project;
  viewMode: 'grid' | 'list';
  delay: number;
}

export function CaseStudyCard({
  project,
  viewMode,
  delay,
}: CaseStudyCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/case-studies/${project.id}`);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  const getServiceTypeColor = (serviceType: string) => {
    switch (serviceType) {
      case 'tender_management':
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'project_management':
        return 'bg-green-500/10 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800';
      case 'web_development':
        return 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      case 'it_solutions':
        return 'bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800';
      default:
        return 'bg-gray-500/10 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800';
    }
  };

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

  if (viewMode === 'list') {
    return (
      <Card
        className="cursor-pointer transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30"
        style={{ animationDelay: `${delay}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Image Section */}
            <div className="lg:w-1/3">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                <Image
                  src={project.image || '/images/project-placeholder.svg'}
                  alt={project.title}
                  fill
                  className={cn(
                    'object-cover transition-transform duration-300',
                    isHovered && 'scale-105'
                  )}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {project.featured && (
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-2/3 space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge
                      variant="outline"
                      className={cn(
                        'text-xs',
                        getServiceTypeColor(project.serviceType)
                      )}
                    >
                      {getServiceTypeLabel(project.serviceType)}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <Badge
                      variant={
                        project.status === 'completed' ? 'default' : 'secondary'
                      }
                      className="text-xs"
                    >
                      {project.status === 'completed'
                        ? 'Completed'
                        : 'In Progress'}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold leading-tight hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(project.completedDate)}
                </div>
              </div>

              {/* Key Outcomes Preview */}
              {project.keyOutcomes && project.keyOutcomes.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    Key Outcomes
                  </h4>
                  <div className="grid gap-1">
                    {project.keyOutcomes.slice(0, 2).map((outcome, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{outcome}</span>
                      </div>
                    ))}
                    {project.keyOutcomes.length > 2 && (
                      <div className="text-xs text-muted-foreground ml-6">
                        +{project.keyOutcomes.length - 2} more outcomes
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ROI Metrics Preview */}
              {project.roiMetrics && project.roiMetrics.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    Measurable Results
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.roiMetrics.slice(0, 3).map((metric, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {metric}
                      </Badge>
                    ))}
                    {project.roiMetrics.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.roiMetrics.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  {project.client && (
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {project.client}
                    </div>
                  )}
                  {project.duration && (
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.duration}
                    </div>
                  )}
                </div>
                {project.externalUrl && (
                  <div className="flex items-center text-primary text-sm">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Live
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Grid view
  return (
    <Card
      className={cn(
        'group cursor-pointer transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30',
        isHovered && 'transform scale-[1.02]'
      )}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Image Header */}
      <div className="relative">
        <div className="aspect-video relative overflow-hidden rounded-t-lg bg-muted">
          <Image
            src={project.image || '/images/project-placeholder.svg'}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Overlay badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {project.featured && (
            <Badge className="bg-primary text-primary-foreground">
              <Star className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          )}
        </div>

        <div className="absolute top-3 right-3">
          <Badge
            variant="outline"
            className={cn(
              'text-xs bg-background/80 backdrop-blur-sm',
              getServiceTypeColor(project.serviceType)
            )}
          >
            {getServiceTypeLabel(project.serviceType)}
          </Badge>
        </div>

        <div className="absolute bottom-3 left-3">
          <Badge
            variant={project.status === 'completed' ? 'default' : 'secondary'}
            className="bg-background/80 backdrop-blur-sm"
          >
            {project.status === 'completed' ? 'Completed' : 'In Progress'}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-xs">
              {project.category}
            </Badge>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              {formatDate(project.completedDate)}
            </div>
          </div>
          <h3 className="font-semibold leading-tight hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Key Outcomes */}
        {project.keyOutcomes && project.keyOutcomes.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              Impact
            </h4>
            <div className="space-y-1">
              {project.keyOutcomes.slice(0, 2).map((outcome, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-xs text-muted-foreground"
                >
                  <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-1">{outcome}</span>
                </div>
              ))}
              {project.keyOutcomes.length > 2 && (
                <div className="text-xs text-muted-foreground ml-5">
                  +{project.keyOutcomes.length - 2} more outcomes
                </div>
              )}
            </div>
          </div>
        )}

        {/* ROI Metrics */}
        {project.roiMetrics && project.roiMetrics.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              Results
            </h4>
            <div className="flex flex-wrap gap-1">
              {project.roiMetrics.slice(0, 2).map((metric, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {metric}
                </Badge>
              ))}
              {project.roiMetrics.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{project.roiMetrics.length - 2}
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            {project.client && (
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                <span className="truncate max-w-20">{project.client}</span>
              </div>
            )}
            {project.duration && (
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {project.duration}
              </div>
            )}
          </div>
          {project.externalUrl && (
            <div className="flex items-center text-primary">
              <ExternalLink className="h-3 w-3 mr-1" />
              Live
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
