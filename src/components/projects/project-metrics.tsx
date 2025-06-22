// src/components/projects/project-metrics.tsx

import { Project } from '@/data/test-data/projects';
import {
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  Calendar,
  CheckCircle,
} from 'lucide-react';

interface ProjectMetricsProps {
  project: Project;
  variant?: 'compact' | 'detailed' | 'outcomes';
  showIcons?: boolean;
}

export function ProjectMetrics({
  project,
  variant = 'compact',
  showIcons = true,
}: ProjectMetricsProps) {
  // Extract metrics from project data
  const getProjectMetrics = () => {
    const metrics = [];

    // Duration
    if (project.duration) {
      metrics.push({
        icon: Clock,
        label: 'Duration',
        value: project.duration,
        type: 'duration',
      });
    }

    // Budget (if available)
    if (project.budget && project.budget !== 'Internal Project') {
      metrics.push({
        icon: DollarSign,
        label: 'Budget',
        value: project.budget,
        type: 'budget',
      });
    }

    // Team size
    if (project.teamSize) {
      metrics.push({
        icon: Users,
        label: 'Team Size',
        value: `${project.teamSize} members`,
        type: 'team',
      });
    }

    // Completion date
    if (project.completedDate && project.status === 'completed') {
      const date = new Date(project.completedDate);
      metrics.push({
        icon: Calendar,
        label: 'Completed',
        value: date.toLocaleDateString('en-ZA', {
          year: 'numeric',
          month: 'short',
        }),
        type: 'date',
      });
    }

    // Status
    metrics.push({
      icon: project.status === 'completed' ? CheckCircle : Clock,
      label: 'Status',
      value: project.status === 'completed' ? 'Completed' : 'In Progress',
      type: 'status',
    });

    return metrics;
  };

  const renderOutcomes = () => {
    if (!project.keyOutcomes || project.keyOutcomes.length === 0) return null;

    return (
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
          {showIcons && <TrendingUp className="h-4 w-4" />}
          Key Outcomes
        </h4>
        <ul className="space-y-1">
          {project.keyOutcomes.map((outcome, index) => (
            <li
              key={index}
              className="text-sm text-muted-foreground flex items-start gap-2"
            >
              <span className="text-green-500 mt-0.5">•</span>
              {outcome}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderMetrics = () => {
    const metrics = getProjectMetrics();

    if (variant === 'compact') {
      return (
        <div className="flex flex-wrap gap-3 text-sm">
          {metrics.slice(0, 3).map((metric, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 text-muted-foreground"
            >
              {showIcons && <metric.icon className="h-3.5 w-3.5" />}
              <span className="font-medium">{metric.value}</span>
            </div>
          ))}
        </div>
      );
    }

    if (variant === 'detailed') {
      return (
        <div className="grid grid-cols-2 gap-3">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-center gap-2">
              {showIcons && (
                <metric.icon className="h-4 w-4 text-muted-foreground" />
              )}
              <div>
                <div className="text-xs text-muted-foreground">
                  {metric.label}
                </div>
                <div className="text-sm font-medium">{metric.value}</div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  if (variant === 'outcomes') {
    return renderOutcomes();
  }

  const metrics = getProjectMetrics();
  if (metrics.length === 0) return null;

  return (
    <div className="space-y-3">
      {renderMetrics()}
      {variant === 'detailed' && renderOutcomes()}
    </div>
  );
}
