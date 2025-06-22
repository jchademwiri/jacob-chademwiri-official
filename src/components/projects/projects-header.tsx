'use client';
// src/components/projects/projects-header.tsx
import { Code, TrendingUp, Target, Star } from 'lucide-react';

interface ProjectsHeaderProps {
  isVisible: boolean;
  stats: Array<{
    label: string;
    value: string;
    icon: string;
  }>;
}

const iconMap = {
  TrendingUp,
  Code,
  Target,
  Star,
};

export function ProjectsHeader({ isVisible, stats }: ProjectsHeaderProps) {
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

      <StatsGrid stats={stats} />
    </div>
  );
}

function StatsGrid({ stats }: { stats: ProjectsHeaderProps['stats'] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-12">
      {stats.map((stat, index) => {
        const Icon = iconMap[stat.icon as keyof typeof iconMap];
        return (
          <div
            key={index}
            className="bg-card border rounded-xl p-4 space-y-2 hover:shadow-lg transition-all duration-300 group"
          >
            <Icon className="h-6 w-6 text-primary mx-auto group-hover:scale-110 transition-transform" />
            <div className="text-2xl font-bold text-foreground">
              {stat.value}
            </div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
}
