'use client';
// src/components/projects/projects-header.tsx
import { Code } from 'lucide-react';
import { projects, ProjectType } from '@/data/projects';
import StatesGrid from './states-grid';

interface Project {
  id: string;
  title: string;
  description: string;
  projectType: ProjectType;
  category: string;
  duration: string;
  completedDate: string;
  status: 'completed' | 'in-progress';
  featured: boolean;
  myRole: string;
  keyOutcomes: string[];
  technologies?: string[];
  skills: string[];
  client?: string;
  budget?: string;
  teamSize?: number;
  image?: string;
  images?: string[];
  externalUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    company: string;
  };
}

interface ProjectsHeaderProps {
  isVisible: boolean;
}

// Function to generate stats from projects data
function generateStatsFromProjects(projects: Project[]) {
  const projectManagementCount = projects.filter(
    (p) => p.projectType === 'project-management'
  ).length;
  const webDevelopmentCount = projects.filter(
    (p) => p.projectType === 'web-development'
  ).length;
  // Count unique clients from projects
  const uniqueClients = [
    ...new Set(projects.map((p) => p.client).filter(Boolean)),
  ].length;

  return [
    {
      label: 'Project Management',
      value: `${projectManagementCount}+`,
      icon: 'Target',
    },
    {
      label: 'Web Development',
      value: `${webDevelopmentCount}+`,
      icon: 'Code',
    },
    {
      label: 'Happy Clients',
      value: `${uniqueClients}+`,
      icon: 'Users',
    },
    {
      label: 'Years of Experience',
      value: '4+',
      icon: 'Calendar',
    },
  ];
}

// Default stats data (fallback when no projects provided)
const defaultStats = [
  {
    label: 'Project Management',
    value: '8+',
    icon: 'Target',
  },
  {
    label: 'Web Development',
    value: '12+',
    icon: 'Code',
  },
  {
    label: 'Happy Clients',
    value: '15+',
    icon: 'Users',
  },
  {
    label: 'Years of Experience',
    value: '4+',
    icon: 'Calendar',
  },
];

export function ProjectsHeader({ isVisible }: ProjectsHeaderProps) {
  // Generate stats from imported projects data
  const displayStats = generateStatsFromProjects(projects);
  return (
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
          projects that demonstrate my expertise in modern web development and
          project management.
        </p>
      </div>

      <StatesGrid stats={displayStats} />
    </div>
  );
}
