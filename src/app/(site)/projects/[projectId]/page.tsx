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
  Zap,
  Target,
  Lightbulb,
  Quote,
  Copy,
  Check,
} from 'lucide-react';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

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
    <div className="aspect-video bg-muted rounded-lg mb-12"></div>
    <div className="grid gap-12 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-8">
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

// Enhanced challenge-solution pair
const ChallengeSolutionPair = ({
  challenge,
  solution,
  index,
}: {
  challenge: string;
  solution: string;
  index: number;
}) => (
  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <CardContent className="p-6">
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Target className="h-4 w-4 text-destructive" />
            <h4 className="font-semibold text-sm text-destructive">
              Challenge
            </h4>
          </div>
          <p className="text-sm text-muted-foreground">{challenge}</p>
        </div>

        <Separator />

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="h-4 w-4 text-primary" />
            <h4 className="font-semibold text-sm text-primary">Solution</h4>
          </div>
          <p className="text-sm text-muted-foreground">{solution}</p>
        </div>
      </div>
    </CardContent>
  </Card>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Enhanced Back Button with Animation */}
        <div className="mb-8 animate-in slide-in-from-left duration-500">
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

        {/* Enhanced Project Header */}
        <div className="mb-12 animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground text-balance">
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

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(project.completedDate).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-2">
              <Timer className="h-4 w-4" />
              {project.duration}
            </div>
            {project.client && (
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                {project.client}
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Project Image with Overlay */}
        <div className="relative group mb-12 animate-in fade-in-50 slide-in-from-bottom-6 duration-700 delay-200">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={project.image || '/images/project-placeholder.svg'}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Quick Action Buttons on Hover */}
            <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              {project.liveUrl && (
                <Button
                  size="sm"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  className="backdrop-blur-sm bg-background/80 hover:bg-background/90"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  className="backdrop-blur-sm bg-background/80 hover:bg-background/90"
                >
                  <Github className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Project Content */}
        <div className="grid gap-12 lg:grid-cols-3 animate-in fade-in-50 slide-in-from-bottom-8 duration-700 delay-300">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview Section */}
            <section className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-primary rounded-full"></div>
                Overview
              </h2>
              <div className="text-muted-foreground whitespace-pre-wrap leading-relaxed text-lg">
                {project.longDescription}
              </div>
            </section>

            {/* Enhanced Features Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-primary rounded-full"></div>
                Features
              </h2>
              <div className="grid gap-2">
                {project.features.map((feature, index) => (
                  <FeatureItem key={index} feature={feature} index={index} />
                ))}
              </div>
            </section>

            {/* Enhanced Challenges & Solutions */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-primary rounded-full"></div>
                Challenges & Solutions
              </h2>
              <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                {project.challenges.map((challenge, index) => (
                  <ChallengeSolutionPair
                    key={index}
                    challenge={challenge}
                    solution={
                      project.solutions[index] ||
                      'Solution details not available'
                    }
                    index={index}
                  />
                ))}
              </div>
            </section>

            {/* Enhanced Key Learnings */}
            {project.learnings && (
              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-primary rounded-full"></div>
                  Key Learnings
                </h2>
                <div className="grid gap-3">
                  {project.learnings.map((learning, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200"
                    >
                      <Zap className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{learning}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-6">
            {/* Enhanced Project Actions */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {project.liveUrl && (
                  <Button
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="w-full group hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-200" />
                    Visit Live Site
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="w-full group hover:shadow-lg transition-all duration-300"
                  >
                    <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    View Source Code
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Enhanced Project Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Project Details</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <dt className="flex items-center gap-2 font-medium">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      Completed
                    </dt>
                    <dd className="text-muted-foreground">
                      {new Date(project.completedDate).toLocaleDateString()}
                    </dd>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between text-sm">
                    <dt className="flex items-center gap-2 font-medium">
                      <Timer className="h-4 w-4 text-muted-foreground" />
                      Duration
                    </dt>
                    <dd className="text-muted-foreground">
                      {project.duration}
                    </dd>
                  </div>
                  {project.client && (
                    <>
                      <Separator />
                      <div className="flex items-center justify-between text-sm">
                        <dt className="flex items-center gap-2 font-medium">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          Client
                        </dt>
                        <dd className="text-muted-foreground">
                          {project.client}
                        </dd>
                      </div>
                    </>
                  )}
                </dl>
              </CardContent>
            </Card>

            {/* Enhanced Technologies */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Technologies
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
                  <blockquote className="text-muted-foreground italic mb-4 text-lg">
                    "{project.testimonial.quote}"
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
      </div>
    </div>
  );
}
