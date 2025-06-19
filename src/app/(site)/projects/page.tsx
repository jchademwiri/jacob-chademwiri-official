// src/app/(site)/projects/page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import {
  Code,
  ExternalLink,
  Github,
  Calendar,
  Tag,
  Users,
  TrendingUp,
  Filter,
  Search,
  Grid3X3,
  List,
  ChevronDown,
  Star,
  Clock,
  Zap,
} from 'lucide-react';

import Link from 'next/link';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import Image from 'next/image';

export default function ProjectsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'recent' | 'popular' | 'featured'>(
    'recent'
  );

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Filter and sort projects
  const filteredProjects = projects
    .filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;
      const matchesTech =
        selectedTech === 'all' || project.technologies.includes(selectedTech);
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesTech && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return (b.metrics?.views || 0) - (a.metrics?.views || 0);
        case 'featured':
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        default:
          return (
            new Date(b.completedDate).getTime() -
            new Date(a.completedDate).getTime()
          );
      }
    });

  const categories = [
    'all',
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];
  const technologies = [
    'all',
    ...Array.from(new Set(projects.flatMap((p) => p.technologies))),
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-500/5 dark:bg-blue-400/5 transition-all duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${
              mousePosition.y * 50
            }px)`,
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl bg-green-500/5 dark:bg-green-400/5 transition-all duration-700"
          style={{
            transform: `translate(${-mousePosition.x * 30}px, ${
              -mousePosition.y * 30
            }px)`,
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjMjIyIiBmaWxsLW9wYWNpdHk9Ii4wMiIvPjwvZz48L3N2Zz4=')] opacity-30 dark:opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div
          className={`text-center space-y-6 mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary">
              <Code className="h-4 w-4" />
              <span>My Work</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Featured{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600">
                Projects
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A showcase of web applications, digital solutions, and creative
              projects that demonstrate my expertise in modern web development.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-12">
            {[
              { label: 'Projects Completed', value: '40+', icon: TrendingUp },
              { label: 'Technologies Used', value: '15+', icon: Code },
              { label: 'Happy Clients', value: '25+', icon: Users },
              { label: 'Years Experience', value: '5+', icon: Calendar },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-card border rounded-xl p-4 space-y-2 hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="h-6 w-6 text-primary mx-auto" />
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filters and Controls */}
        <div
          className={`mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="bg-card border rounded-xl p-6 space-y-6">
            {/* Search and View Controls */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex bg-muted rounded-lg p-1">
                  <Button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${
                      viewMode === 'grid'
                        ? 'bg-background shadow-sm text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${
                      viewMode === 'list'
                        ? 'bg-background shadow-sm text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Filter Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Category
                </label>
                <Select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === 'all'
                        ? 'All Categories'
                        : category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Technology
                </label>
                <Select
                  value={selectedTech}
                  onChange={(e) => setSelectedTech(e.target.value)}
                  className="w-full p-2 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  {technologies.map((tech) => (
                    <option key={tech} value={tech}>
                      {tech === 'all' ? 'All Technologies' : tech}
                    </option>
                  ))}
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Sort By
                </label>
                <Select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(
                      e.target.value as 'recent' | 'popular' | 'featured'
                    )
                  }
                  className="w-full p-2 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="recent">Most Recent</option>
                  <option value="popular">Most Popular</option>
                  <option value="featured">Featured First</option>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid/List */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No projects found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or search terms.
              </p>
            </div>
          ) : (
            <div
              className={`grid gap-8 ${
                viewMode === 'grid'
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  : 'grid-cols-1'
              }`}
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  viewMode={viewMode}
                  delay={index * 100}
                />
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="bg-gradient-to-r from-primary/10 to-green-600/10 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to start your project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with modern
              web technologies and exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Get In Touch
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Project Card Component
function ProjectCard({
  project,
  viewMode,
  delay,
}: {
  project: any;
  viewMode: 'grid' | 'list';
  delay: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  if (viewMode === 'list') {
    return (
      <div
        className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
        style={{ animationDelay: `${delay}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
              {project.image ? (
                <Image
                  src={`/images/${project.image}`}
                  alt={project.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Code className="h-12 w-12 text-muted-foreground" />
                </div>
              )}
              {project.featured && (
                <div className="absolute top-2 left-2">
                  <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="md:w-2/3 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                  <Link href={`/projects/${project.id}`}>{project.title}</Link>
                </h3>
                <div className="flex items-center space-x-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((tech: string) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium">
                  +{project.technologies.length - 5} more
                </span>
              )}
            </div>

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(project.completedDate).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-1" />
                  {project.category}
                </div>
              </div>
              {project.metrics && (
                <div className="flex items-center space-x-3">
                  {project.metrics.views && (
                    <span>{project.metrics.views.toLocaleString()} views</span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video bg-muted overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Code className="h-16 w-16 text-muted-foreground" />
          </div>
        )}

        {project.featured && (
          <div className="absolute top-3 left-3">
            <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium flex items-center">
              <Star className="h-3 w-3 mr-1" />
              Featured
            </div>
          </div>
        )}

        <div className="absolute top-3 right-3 flex space-x-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background/80 hover:bg-background rounded-lg transition-colors backdrop-blur-sm"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background/80 hover:bg-background rounded-lg transition-colors backdrop-blur-sm"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>

        {isHovered && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-all duration-300">
            <Link
              href={`/projects/${project.id}`}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View Details
            </Link>
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            <Link href={`/projects/${project.id}`}>{project.title}</Link>
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 4).map((tech: string) => (
            <span
              key={tech}
              className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {new Date(project.completedDate).toLocaleDateString()}
          </div>
          <div className="flex items-center">
            <Tag className="h-3 w-3 mr-1" />
            {project.category}
          </div>
        </div>
      </div>
    </div>
  );
}
