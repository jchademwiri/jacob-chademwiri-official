'use client';
import { Project } from '@/data/projects';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import {
  Calendar,
  Code,
  ExternalLink,
  Github,
  Users,
  Timer,
} from 'lucide-react';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Project Image */}
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={project.image || '/images/project-placeholder.svg'}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Project Details */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Overview</h3>
                <p className="text-muted-foreground">
                  {project.longDescription}
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Features</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Project Details</h3>
                <dl className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    <dt className="font-medium mr-2">Completed:</dt>
                    <dd>
                      {new Date(project.completedDate).toLocaleDateString()}
                    </dd>
                  </div>
                  <div className="flex items-center text-sm">
                    <Timer className="h-4 w-4 mr-2" />
                    <dt className="font-medium mr-2">Duration:</dt>
                    <dd>{project.duration}</dd>
                  </div>
                  {project.client && (
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 mr-2" />
                      <dt className="font-medium mr-2">Client:</dt>
                      <dd>{project.client}</dd>
                    </div>
                  )}
                </dl>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex gap-4 pt-4">
                {project.liveUrl && (
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Site
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-2">Challenges</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Solutions</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {project.solutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <div className="bg-muted/50 rounded-lg p-6">
              <blockquote className="text-lg italic text-muted-foreground">
                "{project.testimonial.quote}"
              </blockquote>
              <div className="mt-4 flex items-center">
                {project.testimonial.avatar && (
                  <Image
                    src={project.testimonial.avatar}
                    alt={project.testimonial.author}
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                )}
                <div>
                  <div className="font-semibold">
                    {project.testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {project.testimonial.role}, {project.testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
