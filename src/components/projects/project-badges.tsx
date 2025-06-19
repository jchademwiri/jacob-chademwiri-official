// src/components/projects/project-badges.tsx
export function ProjectBadges({
  technologies,
  maxDisplay = 4,
}: {
  technologies: string[];
  maxDisplay?: number;
}) {
  return (
    <div className="flex flex-wrap gap-1">
      {technologies.slice(0, maxDisplay).map((tech: string) => (
        <span
          key={tech}
          className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium hover:bg-muted/80 transition-colors"
        >
          {tech}
        </span>
      ))}
      {technologies.length > maxDisplay && (
        <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium">
          +{technologies.length - maxDisplay}
        </span>
      )}
    </div>
  );
}
