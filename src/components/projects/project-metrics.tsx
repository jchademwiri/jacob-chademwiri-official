// src/components/projects/project-metrics.tsx
import { Project } from '@/data/projects';

export function ProjectMetrics({ project }: { project: Project }) {
  if (!project.metrics) return null;

  return (
    <div className="flex items-center space-x-3">
      {project.metrics.views && (
        <span>{project.metrics.views.toLocaleString()} views</span>
      )}
    </div>
  );
}
