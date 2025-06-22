import { ProjectCard } from '@/components/projects/project-card';
import { projects } from '@/data/test-data/projects';

export function ProjectsSection() {
  // Get latest 4 projects sorted by completion date
  const latestProjects = [...projects]
    .sort(
      (a, b) =>
        new Date(b.completedDate).getTime() -
        new Date(a.completedDate).getTime()
    )
    .slice(0, 3);

  return (
    <section className="py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-2xl md:text-4xl font-bold">Our Projects</h2>
          <p className="text-lg text-muted-foreground max-w-[700px]">
            Check out some of our recent work that showcases our expertise and
            creativity across various industries and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {latestProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              viewMode="grid"
              delay={index * 100}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View All Projects ({projects.length})
          </a>
        </div>
      </div>
    </section>
  );
}
