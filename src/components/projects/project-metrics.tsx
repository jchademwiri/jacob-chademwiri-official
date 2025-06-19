// src/components/projects/project-metrics.tsx
export function ProjectMetrics({ project }: { project: any }) {
  if (!project.metrics) return null;

  return (
    <div className="flex items-center space-x-3">
      {project.metrics.views && (
        <span>{project.metrics.views.toLocaleString()} views</span>
      )}
    </div>
  );
}
