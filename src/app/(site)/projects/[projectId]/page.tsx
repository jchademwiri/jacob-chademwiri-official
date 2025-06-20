'use client';
import React, { useState, useEffect } from 'react';
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
  CheckCircle2,
  Quote,
  Copy,
  Check,
  Play,
} from 'lucide-react';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  ChallengesSolutions,
  KeyLearnings,
} from '@/components/projects/challenge-solutions';

interface PageParams {
  projectId: string;
}

interface Props {
  params: Promise<PageParams>;
}

// Loading skeleton components
const SkeletonLoader = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-muted rounded w-1/4 mb-4"></div>
    <div className="h-6 bg-muted rounded w-3/4 mb-8"></div>
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-8">
        <div className="aspect-[16/10] bg-muted rounded-lg"></div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-4">
            <div className="h-6 bg-muted rounded w-1/6"></div>
            <div className="h-4 bg-muted rounded w-full"></div>
            <div className="h-4 bg-muted rounded w-5/6"></div>
          </div>
        ))}
      </div>
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-muted rounded-lg h-32"></div>
        ))}
      </div>
    </div>
  </div>
);

// Enhanced feature item with icon
const FeatureItem = ({
  feature,
  index,
}: {
  feature: string;
  index: number;
}) => (
  <div
    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200 group"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 group-hover:scale-110 transition-transform duration-200" />
    <span className="text-muted-foreground">{feature}</span>
  </div>
);

// Quick stats component
const QuickStats = ({ project }: { project: any }) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
    <div className="text-center p-4 rounded-lg bg-muted/30">
      <Calendar className="h-5 w-5 mx-auto mb-2 text-primary" />
      <div className="text-sm font-medium">Completed</div>
      <div className="text-xs text-muted-foreground">
        {new Date(project.completedDate).getFullYear()}
      </div>
    </div>
    <div className="text-center p-4 rounded-lg bg-muted/30">
      <Timer className="h-5 w-5 mx-auto mb-2 text-primary" />
      <div className="text-sm font-medium">Duration</div>
      <div className="text-xs text-muted-foreground">{project.duration}</div>
    </div>
    <div className="text-center p-4 rounded-lg bg-muted/30">
      <Code className="h-5 w-5 mx-auto mb-2 text-primary" />
      <div className="text-sm font-medium">Technologies</div>
      <div className="text-xs text-muted-foreground">
        {project.technologies.length}+
      </div>
    </div>
    <div className="text-center p-4 rounded-lg bg-muted/30">
      <CheckCircle2 className="h-5 w-5 mx-auto mb-2 text-primary" />
      <div className="text-sm font-medium">Features</div>
      <div className="text-xs text-muted-foreground">
        {project.features.length}+
      </div>
    </div>
  </div>
);

export default function ProjectPage({ params }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [resolvedParams, setResolvedParams] = useState<PageParams | null>(null);

  // Simulate loading and resolve params
  useEffect(() => {
    const resolveParams = async () => {
      try {
        const result = await params;
        setResolvedParams(result);
        // Simulate a brief loading period for better UX
        setTimeout(() => setIsLoading(false), 500);
      } catch (error) {
        setIsLoading(false);
        console.error('Error resolving params:', error);
        notFound();
      }
    };

    resolveParams();
  }, [params]);

  const copyProjectUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  if (isLoading || !resolvedParams) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SkeletonLoader />
        </div>
      </div>
    );
  }

  const project = projects.find((p) => p.id === resolvedParams.projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Enhanced Back Button */}
        <div className="mb-6 animate-in slide-in-from-left duration-500">
          <Link href="/projects">
            <Button
              variant="ghost"
              className="group hover:bg-muted transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Improved Hero Section - More Compact */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-3 mb-12 animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
          {/* Left Column - Project Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Header */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="space-y-3">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight">
                    {project.title}
                  </h1>
                  <p className="text-lg lg:text-xl text-muted-foreground text-balance">
                    {project.description}
                  </p>
                </div>

                {/* Share Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyProjectUrl}
                  className="shrink-0 transition-all duration-200"
                >
                  {copiedUrl ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Share
                    </>
                  )}
                </Button>
              </div>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 6).map((tech, index) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 6 && (
                  <Badge variant="outline">
                    +{project.technologies.length - 6} more
                  </Badge>
                )}
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <Button
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="group hover:shadow-lg transition-all duration-300"
                  >
                    <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    View Live Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="group hover:shadow-lg transition-all duration-300"
                  >
                    <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    View Code
                  </Button>
                )}
              </div>
            </div>

            {/* Quick Stats */}
            <QuickStats project={project} />

            {/* Project Overview - Above the fold */}
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <div className="w-1 h-5 bg-primary rounded-full"></div>
                Project Overview
              </h3>
              <div className="text-muted-foreground leading-relaxed">
                {project.longDescription.split('\n')[0]}
                {project.longDescription.split('\n').length > 1 && '...'}
              </div>
            </div>
          </div>

          {/* Right Column - Project Image */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="relative group">
                <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={project.image || '/images/project-placeholder.svg'}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Quick Action Overlay */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="backdrop-blur-sm bg-background/80 hover:bg-background/90"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>

                {/* Project Details Card */}
                <Card className="mt-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-base">Project Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        Completed
                      </span>
                      <span className="font-medium">
                        {new Date(project.completedDate).toLocaleDateString()}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Timer className="h-4 w-4" />
                        Duration
                      </span>
                      <span className="font-medium">{project.duration}</span>
                    </div>
                    {project.client && (
                      <>
                        <Separator />
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center gap-2 text-muted-foreground">
                            <Users className="h-4 w-4" />
                            Client
                          </span>
                          <span className="font-medium">{project.client}</span>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="grid gap-12 lg:grid-cols-3 animate-in fade-in-50 slide-in-from-bottom-8 duration-700 delay-300">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Full Description */}
            <section className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-1 h-6 bg-primary rounded-full"></div>
                Detailed Overview
              </h2>
              <div className="text-muted-foreground whitespace-pre-wrap leading-relaxed">
                {project.longDescription}
              </div>
            </section>

            {/* Enhanced Features Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-1 h-6 bg-primary rounded-full"></div>
                Key Features
              </h2>
              <div className="grid gap-2">
                {project.features.map((feature, index) => (
                  <FeatureItem key={index} feature={feature} index={index} />
                ))}
              </div>
            </section>
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-6">
            {/* All Technologies */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  All Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Testimonial */}
            {project.testimonial && (
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Quote className="h-5 w-5" />
                    Client Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground italic mb-4">
                    &quot;{project.testimonial.quote}&quot;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">
                        {project.testimonial.author}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {project.testimonial.role},{' '}
                        {project.testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
        <div className="">
          {/* Extracted Challenges & Solutions Component */}
          <ChallengesSolutions
            challenges={project.challenges}
            solutions={project.solutions}
          />

          {/* Extracted Key Learnings Component */}
          <KeyLearnings learnings={project.learnings} />
        </div>
      </div>
    </div>
  );
}
