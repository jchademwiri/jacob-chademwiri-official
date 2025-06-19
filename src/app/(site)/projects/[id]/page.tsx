'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Calendar,
  Code,
  ExternalLink,
  Github,
  Timer,
  Users,
} from 'lucide-react';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Props {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <Link href="/projects">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
        </Link>

        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground">{project.description}</p>
        </div>

        {/* Project Image */}
        <div className="relative aspect-video rounded-lg overflow-hidden mb-12">
          <Image
            src={project.image || '/images/project-placeholder.svg'}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Project Content */}
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground whitespace-pre-wrap">
                {project.longDescription}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            <section className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold mb-4">Challenges</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Solutions</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {project.solutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
              </div>
            </section>

            {project.learnings && (
              <section>
                <h2 className="text-2xl font-bold mb-4">Key Learnings</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {project.learnings.map((learning, index) => (
                    <li key={index}>{learning}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Actions */}
            <section className="flex flex-col gap-4">
              {project.liveUrl && (
                <Button
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  className="w-full"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Live Site
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="outline"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  className="w-full"
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Source Code
                </Button>
              )}
            </section>

            {/* Project Details */}
            <section className="bg-card rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Project Details</h2>
              <dl className="space-y-4">
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  <dt className="font-medium mr-2">Completed:</dt>
                  <dd className="text-muted-foreground">
                    {new Date(project.completedDate).toLocaleDateString()}
                  </dd>
                </div>
                <div className="flex items-center text-sm">
                  <Timer className="h-4 w-4 mr-2" />
                  <dt className="font-medium mr-2">Duration:</dt>
                  <dd className="text-muted-foreground">{project.duration}</dd>
                </div>
                {project.client && (
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-2" />
                    <dt className="font-medium mr-2">Client:</dt>
                    <dd className="text-muted-foreground">{project.client}</dd>
                  </div>
                )}
              </dl>
            </section>

            {/* Technologies */}
            <section className="bg-card rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Testimonial */}
            {project.testimonial && (
              <section className="bg-card rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Client Feedback</h2>
                <blockquote className="text-muted-foreground italic">
                  "{project.testimonial.quote}"
                </blockquote>
                <div className="mt-4">
                  <div className="font-medium">
                    {project.testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {project.testimonial.role}, {project.testimonial.company}
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
