# API Documentation

## 📡 API Overview

This document outlines the API structure and data interfaces used in the Jacob Chademwiri portfolio website. While the current implementation uses static data files, this documentation provides the foundation for future API integration.

## 🗂️ Data Models

### Project Interface

```typescript
interface Project {
  id: string; // Unique identifier
  title: string; // Project title
  description: string; // Short description (1-2 sentences)
  longDescription?: string; // Detailed description
  technologies: string[]; // Array of technologies used
  category: ProjectCategory; // Project category
  featured: boolean; // Whether to feature on homepage
  images: string[]; // Array of image URLs
  liveUrl?: string; // Live project URL
  githubUrl?: string; // GitHub repository URL
  challenges?: string; // Challenges faced during development
  results?: string; // Results and outcomes achieved
  testimonial?: Testimonial; // Client testimonial
  startDate?: string; // Project start date (ISO string)
  endDate?: string; // Project end date (ISO string)
  client?: string; // Client name
  role?: string; // Your role in the project
  teamSize?: number; // Size of development team
  duration?: string; // Project duration
  budget?: string; // Project budget range
  status: ProjectStatus; // Current project status
}

type ProjectCategory =
  | 'web-development'
  | 'mobile-app'
  | 'e-commerce'
  | 'cms'
  | 'api'
  | 'consulting'
  | 'maintenance';

type ProjectStatus = 'completed' | 'in-progress' | 'maintenance' | 'archived';
```

### Testimonial Interface

```typescript
interface Testimonial {
  id: string;
  name: string; // Client name
  position: string; // Client position/title
  company: string; // Client company
  content: string; // Testimonial content
  rating?: number; // Rating out of 5
  image?: string; // Client photo URL
  projectId?: string; // Associated project ID
  date: string; // Testimonial date (ISO string)
  featured: boolean; // Whether to feature prominently
}
```

### Skill Interface

```typescript
interface Skill {
  id: string;
  name: string; // Skill name
  category: SkillCategory; // Skill category
  level: SkillLevel; // Proficiency level
  yearsOfExperience: number; // Years of experience
  description?: string; // Skill description
  icon?: string; // Icon name or URL
  certifications?: string[]; // Related certifications
  projects?: string[]; // Related project IDs
}

type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'devops'
  | 'design'
  | 'project-management'
  | 'soft-skills';

type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
```

### Experience Interface

```typescript
interface Experience {
  id: string;
  company: string; // Company name
  position: string; // Job title
  startDate: string; // Start date (ISO string)
  endDate?: string; // End date (ISO string) - null if current
  description: string; // Job description
  responsibilities: string[]; // Key responsibilities
  achievements: string[]; // Notable achievements
  technologies: string[]; // Technologies used
  location: string; // Job location
  type: EmploymentType; // Employment type
  website?: string; // Company website
  logo?: string; // Company logo URL
}

type EmploymentType =
  | 'full-time'
  | 'part-time'
  | 'contract'
  | 'freelance'
  | 'internship';
```

### Education Interface

```typescript
interface Education {
  id: string;
  institution: string; // School/University name
  degree: string; // Degree/Certificate name
  field: string; // Field of study
  startDate: string; // Start date (ISO string)
  endDate?: string; // End date (ISO string)
  gpa?: number; // Grade point average
  description?: string; // Additional details
  achievements?: string[]; // Academic achievements
  location: string; // Institution location
  website?: string; // Institution website
  logo?: string; // Institution logo URL
}
```

### Contact Interface

```typescript
interface ContactSubmission {
  id: string;
  name: string; // Sender name
  email: string; // Sender email
  company?: string; // Sender company
  subject: string; // Message subject
  message: string; // Message content
  type: ContactType; // Type of inquiry
  budget?: string; // Project budget range
  timeline?: string; // Project timeline
  source?: string; // How they found you
  createdAt: string; // Submission date (ISO string)
  status: ContactStatus; // Submission status
  priority: ContactPriority; // Priority level
}

type ContactType =
  | 'project-inquiry'
  | 'job-opportunity'
  | 'collaboration'
  | 'general'
  | 'support';

type ContactStatus = 'new' | 'read' | 'replied' | 'closed';

type ContactPriority = 'low' | 'medium' | 'high' | 'urgent';
```

## 📊 Data Sources

### Current Implementation (Static Data)

```typescript
// src/data/projects.ts
export const projects: Project[] = [
  {
    id: 'sithembe-transport',
    title: 'Sithembe Transportation Website',
    description: 'Modern transportation company website with booking system',
    longDescription: 'Complete website redesign for Sithembe Transportation...',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'web-development',
    featured: true,
    images: ['/images/projects/sithembe-1.jpg'],
    liveUrl: 'https://sithembe.co.za',
    challenges: 'Legacy system integration and mobile optimization',
    results: '60% improvement in loading speed, 40% increase in inquiries',
    status: 'completed',
  },
  // ... more projects
];
```

### Future API Implementation

```typescript
// Future API endpoints structure
const API_BASE = 'https://api.jacobc.co.za/v1';

// GET /projects
export async function getProjects(): Promise<Project[]> {
  const response = await fetch(`${API_BASE}/projects`);
  return response.json();
}

// GET /projects/:id
export async function getProject(id: string): Promise<Project> {
  const response = await fetch(`${API_BASE}/projects/${id}`);
  return response.json();
}

// GET /testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  const response = await fetch(`${API_BASE}/testimonials`);
  return response.json();
}

// POST /contact
export async function submitContact(data: ContactSubmission): Promise<void> {
  await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}
```

## 🔍 Data Filtering and Sorting

### Project Filtering

```typescript
interface ProjectFilters {
  category?: ProjectCategory[];
  technologies?: string[];
  featured?: boolean;
  status?: ProjectStatus[];
  dateRange?: {
    start: string;
    end: string;
  };
}

interface ProjectSortOptions {
  field: 'title' | 'startDate' | 'endDate' | 'featured';
  direction: 'asc' | 'desc';
}

// Filter implementation
export function filterProjects(
  projects: Project[],
  filters: ProjectFilters,
  sort?: ProjectSortOptions
): Project[] {
  let filtered = projects;

  // Apply filters
  if (filters.category?.length) {
    filtered = filtered.filter((p) => filters.category!.includes(p.category));
  }

  if (filters.technologies?.length) {
    filtered = filtered.filter((p) =>
      filters.technologies!.some((tech) => p.technologies.includes(tech))
    );
  }

  if (filters.featured !== undefined) {
    filtered = filtered.filter((p) => p.featured === filters.featured);
  }

  // Apply sorting
  if (sort) {
    filtered.sort((a, b) => {
      const aValue = a[sort.field];
      const bValue = b[sort.field];

      if (sort.direction === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }

  return filtered;
}
```

### Skill Filtering

```typescript
interface SkillFilters {
  category?: SkillCategory[];
  level?: SkillLevel[];
  minExperience?: number;
}

export function filterSkills(skills: Skill[], filters: SkillFilters): Skill[] {
  let filtered = skills;

  if (filters.category?.length) {
    filtered = filtered.filter((s) => filters.category!.includes(s.category));
  }

  if (filters.level?.length) {
    filtered = filtered.filter((s) => filters.level!.includes(s.level));
  }

  if (filters.minExperience) {
    filtered = filtered.filter(
      (s) => s.yearsOfExperience >= filters.minExperience!
    );
  }

  return filtered;
}
```

## 📈 Analytics and Metrics

### Project Metrics

```typescript
interface ProjectMetrics {
  totalProjects: number;
  completedProjects: number;
  inProgressProjects: number;
  featuredProjects: number;
  technologiesUsed: string[];
  categoriesCount: Record<ProjectCategory, number>;
  averageProjectDuration: number;
  clientSatisfactionRate: number;
}

export function calculateProjectMetrics(projects: Project[]): ProjectMetrics {
  return {
    totalProjects: projects.length,
    completedProjects: projects.filter((p) => p.status === 'completed').length,
    inProgressProjects: projects.filter((p) => p.status === 'in-progress')
      .length,
    featuredProjects: projects.filter((p) => p.featured).length,
    technologiesUsed: [...new Set(projects.flatMap((p) => p.technologies))],
    categoriesCount: projects.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {} as Record<ProjectCategory, number>),
    averageProjectDuration: 0, // Calculate based on start/end dates
    clientSatisfactionRate: 0, // Calculate from testimonials
  };
}
```

### Contact Analytics

```typescript
interface ContactMetrics {
  totalSubmissions: number;
  responseRate: number;
  averageResponseTime: number;
  inquiryTypes: Record<ContactType, number>;
  conversionRate: number;
  topSources: string[];
}

export function calculateContactMetrics(
  submissions: ContactSubmission[]
): ContactMetrics {
  return {
    totalSubmissions: submissions.length,
    responseRate:
      submissions.filter((s) => s.status === 'replied').length /
      submissions.length,
    averageResponseTime: 0, // Calculate from timestamps
    inquiryTypes: submissions.reduce((acc, s) => {
      acc[s.type] = (acc[s.type] || 0) + 1;
      return acc;
    }, {} as Record<ContactType, number>),
    conversionRate: 0, // Calculate conversion to actual projects
    topSources: [], // Extract from source field
  };
}
```

## 🔐 Authentication (Future Implementation)

### Admin Authentication

```typescript
interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor';
  permissions: Permission[];
  lastLogin?: string;
  createdAt: string;
}

interface Permission {
  resource: 'projects' | 'testimonials' | 'contacts' | 'analytics';
  actions: ('create' | 'read' | 'update' | 'delete')[];
}

// Authentication endpoints
interface AuthEndpoints {
  login: (
    email: string,
    password: string
  ) => Promise<{ token: string; user: AdminUser }>;
  logout: () => Promise<void>;
  refresh: (token: string) => Promise<{ token: string }>;
  profile: () => Promise<AdminUser>;
}
```

## 📝 Content Management (Future Implementation)

### CMS Integration

```typescript
interface CMSContent {
  id: string;
  type: 'page' | 'section' | 'component';
  slug: string;
  title: string;
  content: any; // Rich content object
  metadata: {
    seo: {
      title: string;
      description: string;
      keywords: string[];
    };
    social: {
      title: string;
      description: string;
      image: string;
    };
  };
  status: 'draft' | 'published' | 'archived';
  publishedAt?: string;
  updatedAt: string;
  author: string;
}

// CMS operations
interface CMSOperations {
  getContent: (slug: string) => Promise<CMSContent>;
  updateContent: (
    id: string,
    content: Partial<CMSContent>
  ) => Promise<CMSContent>;
  publishContent: (id: string) => Promise<void>;
  archiveContent: (id: string) => Promise<void>;
}
```

## 🔄 Data Synchronization

### Cache Management

```typescript
interface CacheConfig {
  ttl: number; // Time to live in seconds
  strategy: 'stale-while-revalidate' | 'cache-first' | 'network-first';
  tags: string[]; // Cache invalidation tags
}

// Cache implementation
export class DataCache {
  private cache = new Map<
    string,
    { data: any; timestamp: number; ttl: number }
  >();

  async get<T>(
    key: string,
    fetcher: () => Promise<T>,
    config: CacheConfig
  ): Promise<T> {
    const cached = this.cache.get(key);
    const now = Date.now();

    if (cached && now - cached.timestamp < cached.ttl * 1000) {
      return cached.data;
    }

    const data = await fetcher();
    this.cache.set(key, { data, timestamp: now, ttl: config.ttl });
    return data;
  }

  invalidate(tags: string[]): void {
    // Invalidate cache entries with matching tags
  }
}
```

## 📊 Error Handling

### API Error Types

```typescript
interface APIError {
  code: string;
  message: string;
  details?: any;
  timestamp: string;
}

class APIException extends Error {
  constructor(public code: string, message: string, public details?: any) {
    super(message);
    this.name = 'APIException';
  }
}

// Error handling utility
export function handleAPIError(error: unknown): APIError {
  if (error instanceof APIException) {
    return {
      code: error.code,
      message: error.message,
      details: error.details,
      timestamp: new Date().toISOString(),
    };
  }

  return {
    code: 'UNKNOWN_ERROR',
    message: 'An unexpected error occurred',
    timestamp: new Date().toISOString(),
  };
}
```

## 🧪 Testing Data

### Mock Data Generation

```typescript
// Test data generators
export function generateMockProject(overrides?: Partial<Project>): Project {
  return {
    id: `project-${Math.random().toString(36).substr(2, 9)}`,
    title: 'Sample Project',
    description: 'A sample project for testing purposes',
    technologies: ['React', 'TypeScript', 'Next.js'],
    category: 'web-development',
    featured: false,
    images: ['/images/placeholder.jpg'],
    status: 'completed',
    ...overrides,
  };
}

export function generateMockProjects(count: number): Project[] {
  return Array.from({ length: count }, (_, i) =>
    generateMockProject({ id: `project-${i}`, title: `Project ${i + 1}` })
  );
}
```

---

This API documentation provides a comprehensive overview of the data structures and interfaces used in the Jacob Chademwiri portfolio website. It serves as a foundation for current static data management and future API implementation.
