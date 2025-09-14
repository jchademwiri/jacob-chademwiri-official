# Development Guide

## 🏗️ Architecture Overview

This portfolio website follows modern React and Next.js best practices with a focus on maintainability, performance, and developer experience.

### Design Principles

- **Component-First**: Modular, reusable components
- **Type Safety**: Full TypeScript implementation
- **Performance**: Optimized for Core Web Vitals
- **Accessibility**: WCAG 2.1 AA compliance
- **Mobile-First**: Responsive design approach
- **SEO-Optimized**: Search engine friendly structure

## 🧩 Component Structure

### Component Hierarchy

```
Components/
├── UI Components (shadcn/ui)
│   ├── Primitive components (Button, Input, Card)
│   ├── Compound components (Dialog, Dropdown)
│   └── Layout components (Container, Grid)
├── Feature Components
│   ├── Navigation (Navbar, MobileNav)
│   ├── Content (Projects, About sections)
│   └── Interactive (Theme toggle, Filters)
└── Page Components
    ├── Layout components (Header, Footer)
    ├── Section components (Hero, Services)
    └── Form components (Contact, Newsletter)
```

### Component Guidelines

#### 1. UI Components

```typescript
// Example: Button component
interface ButtonProps {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children: React.ReactNode;
}

export const Button = ({
  variant = 'default',
  size = 'default',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, size }))} {...props}>
      {children}
    </button>
  );
};
```

#### 2. Feature Components

```typescript
// Example: Project card component
interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export const ProjectCard = ({
  project,
  featured = false,
}: ProjectCardProps) => {
  return (
    <Card className={cn('project-card', featured && 'featured')}>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>{/* Project content */}</CardContent>
    </Card>
  );
};
```

## 📊 Data Management

### Data Structure

All content is managed through TypeScript files in the `src/data/` directory:

```typescript
// src/data/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: ProjectCategory;
  featured: boolean;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  challenges?: string;
  results?: string;
  testimonial?: Testimonial;
}

export const projects: Project[] = [
  // Project data...
];
```

### Content Updates

#### Adding New Projects

1. **Add project data** to `src/data/projects.ts`
2. **Add images** to `public/images/projects/`
3. **Update categories** if needed
4. **Test display** on projects page

#### Updating Personal Information

1. **About content**: `src/data/about.ts`
2. **Skills data**: `src/data/constraints.ts`
3. **Current positions**: `src/data/currentPositions.ts`
4. **Contact information**: Update in layout and contact components

## 🎨 Styling System

### Tailwind CSS Configuration

The project uses Tailwind CSS with custom configuration:

```javascript
// tailwind.config.js (if exists)
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Custom color palette
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
};
```

### Design System

#### Colors

- **Primary**: Blue tones for trust and professionalism
- **Secondary**: Accent colors for highlights
- **Neutral**: Grays for text and backgrounds
- **Semantic**: Success, warning, error states

#### Typography

- **Headings**: Geist Sans (clean, modern)
- **Body**: Geist Sans (readable, professional)
- **Code**: Geist Mono (technical content)

#### Spacing

- **Consistent scale**: 4px base unit
- **Responsive spacing**: Mobile-first approach
- **Component spacing**: Logical grouping

### Component Styling

```typescript
// Using cn() utility for conditional classes
import { cn } from '@/lib/utils';

const Component = ({ variant, className, ...props }) => {
  return (
    <div
      className={cn(
        'base-styles',
        variant === 'primary' && 'primary-styles',
        variant === 'secondary' && 'secondary-styles',
        className
      )}
      {...props}
    />
  );
};
```

## 🔧 Development Workflow

### Local Development

1. **Start development server**

   ```bash
   pnpm dev
   ```

2. **Open browser**

   - Main site: http://localhost:3000
   - Admin panel: http://localhost:3000/admin (if implemented)

3. **Hot reload**
   - Changes automatically refresh
   - Preserves component state where possible

### Code Quality

#### TypeScript

```bash
# Type checking
npx tsc --noEmit

# Watch mode
npx tsc --noEmit --watch
```

#### Linting

```bash
# Run ESLint
pnpm lint

# Fix auto-fixable issues
pnpm lint --fix
```

#### Formatting

```bash
# Format with Prettier (if configured)
npx prettier --write .
```

### Testing Strategy

#### Manual Testing Checklist

- [ ] **Responsive Design**: Test on mobile, tablet, desktop
- [ ] **Cross-Browser**: Chrome, Firefox, Safari, Edge
- [ ] **Accessibility**: Screen reader, keyboard navigation
- [ ] **Performance**: Lighthouse audit, Core Web Vitals
- [ ] **SEO**: Meta tags, structured data, sitemap

#### Automated Testing (Future)

```bash
# Unit tests (when implemented)
pnpm test

# E2E tests (when implemented)
pnpm test:e2e
```

## 🚀 Performance Optimization

### Next.js Optimizations

#### Image Optimization

```typescript
import Image from 'next/image';

// Optimized images
<Image
  src="/images/project.jpg"
  alt="Project screenshot"
  width={800}
  height={600}
  priority={featured} // For above-the-fold images
  placeholder="blur" // For better UX
/>;
```

#### Code Splitting

```typescript
// Dynamic imports for large components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
});
```

#### Static Generation

```typescript
// Generate static pages at build time
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}
```

### Performance Monitoring

#### Core Web Vitals

- **LCP**: Largest Contentful Paint < 2.5s
- **FID**: First Input Delay < 100ms
- **CLS**: Cumulative Layout Shift < 0.1

#### Tools

- Vercel Speed Insights
- Lighthouse CI
- Web Vitals extension

## 🔒 Security Considerations

### Content Security Policy

```typescript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline';",
          },
        ],
      },
    ];
  },
};
```

### Environment Variables

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
DATABASE_URL=your-database-url
API_SECRET=your-secret-key
```

### Input Validation

```typescript
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
});
```

## 📱 Responsive Design

### Breakpoints

```css
/* Tailwind CSS breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### Mobile-First Approach

```typescript
// Example responsive component
<div
  className="
  grid 
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3 
  gap-4 
  md:gap-6 
  lg:gap-4
"
>
  {/* Content */}
</div>
```

### Touch Interactions

```css
/* Touch-friendly button sizes */
.btn {
  @apply min-h-[44px] min-w-[44px]; /* 44px minimum touch target */
}
```

## 🎯 SEO Implementation

### Meta Tags

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'Jacob Chademwiri - Web Developer',
    template: '%s | Jacob Chademwiri',
  },
  description:
    'Full-stack web developer specializing in React, Next.js, and modern web technologies.',
  keywords: ['web developer', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Jacob Chademwiri' }],
  openGraph: {
    title: 'Jacob Chademwiri - Web Developer',
    description:
      'Full-stack web developer specializing in React, Next.js, and modern web technologies.',
    url: 'https://jacobc.co.za',
    siteName: 'Jacob Chademwiri Portfolio',
    images: ['/opengraph-image.jpg'],
    type: 'website',
  },
};
```

### Structured Data

```typescript
// JSON-LD structured data
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jacob Chademwiri',
  jobTitle: 'Full-Stack Web Developer',
  url: 'https://jacobc.co.za',
  sameAs: [
    'https://linkedin.com/in/jchademwiri',
    'https://github.com/jchademwiri',
  ],
};
```

## 🔄 Deployment Process

### Pre-deployment Checklist

- [ ] **Build succeeds** without errors
- [ ] **Type checking** passes
- [ ] **Linting** passes
- [ ] **Performance** meets targets
- [ ] **Accessibility** tested
- [ ] **Cross-browser** compatibility
- [ ] **Mobile** responsiveness
- [ ] **SEO** meta tags updated

### Vercel Deployment

1. **Connect repository** to Vercel
2. **Configure build settings**

   - Build command: `pnpm build`
   - Output directory: `.next`
   - Install command: `pnpm install`

3. **Set environment variables**
4. **Deploy** automatically on push to main

### Manual Deployment

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Or export static files
pnpm export
```

## 🐛 Debugging

### Common Issues

#### Hydration Errors

```typescript
// Use dynamic imports for client-only components
import dynamic from 'next/dynamic';

const ClientOnlyComponent = dynamic(() => import('./ClientOnlyComponent'), {
  ssr: false,
});
```

#### Image Loading Issues

```typescript
// Ensure proper image paths
const imagePath = '/images/project.jpg'; // Correct
const imagePath = 'images/project.jpg'; // Incorrect
```

#### TypeScript Errors

```bash
# Clear TypeScript cache
rm -rf .next
pnpm dev
```

### Development Tools

- **React Developer Tools**: Component inspection
- **Next.js DevTools**: Performance profiling
- **Lighthouse**: Performance auditing
- **axe DevTools**: Accessibility testing

---

This development guide provides comprehensive information for maintaining and extending the Jacob Chademwiri portfolio website. Follow these guidelines to ensure code quality, performance, and maintainability.
