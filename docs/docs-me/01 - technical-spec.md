# Technical Specifications: GreenDesign Portfolio

## 1. Project Overview

**Project:** GreenDesign Portfolio  
**Owner:** Jacob Chademwiri  
**URL:** https://jacobc.co.za  
**Version:** 1.0  
**Date:** May 2025

### 1.1 Project Objectives

- Create a responsive personal portfolio website showcasing professional work
- Market myself effectively to potential employers and clients
- Implement a blog system with rich text editing capabilities
- Develop an admin dashboard for content management
- Ensure the website is performant, secure, and maintainable

## 2. System Architecture

### 2.1 High-Level Architecture

- **Frontend**: Next.js application for visitors and admin
- **Admin Dashboard**: Protected routes within the same Next.js app
- **Backend**: Supabase for authentication, database, and storage
- **Database**: PostgreSQL via Supabase
- **File Storage**: Supabase Storage for media assets

### 2.2 Technology Stack

- **Frontend**:

  - Framework: Next.js 15+ (App Router)
  - Language: TypeScript
  - Styling: Tailwind CSS v4
  - UI Components: ShadCN UI (latest version)
  - Theming: ShadCN themes with `primary` color values

- **Backend**:

  - Authentication: Supabase Auth
  - Database: Supabase PostgreSQL + Drizzle ORM
  - Storage: Supabase Storage (for media uploads)
  - Rich Text: TipTap Editor styled like Notion/Payload

- **Deployment**:
  - Hosting: Vercel
  - CI/CD: GitHub + Vercel CI

## 3. Design Tokens & Theming

### 3.1 Theming Model

- Implements ShadCN themes using the latest version
- Uses `oklch()` color values for better color representation
- Supports both light and dark mode with smooth transitions
- Example:
  ```css
  :root {
    --background: oklch(1 0 0);
    --foreground: oklch(0.141 0.005 285.823);
    --primary: oklch(0.696 0.17 162.48);
    --primary-foreground: oklch(0.985 0 0);
    /* ... other tokens ... */
  }
  ```

### 3.2 Usage Guidelines

- Follow ShadCN documentation for theme implementation and usage
- Installation according to official ShadCN/UI documentation
- Use ShadCN's CLI for adding and customizing components
- Custom theme configuration in `components.json`

## 4. Directory Structure (Next.js Best Practices)

```bash
.
├── app/
│   ├── (public)/                # Route group for public pages
│   │   ├── layout.tsx           # Public layout
│   │   ├── page.tsx             # Home page
│   │   ├── about/               # About page
│   │   ├── projects/            # Projects routes
│   │   │   ├── page.tsx         # Projects list
│   │   │   └── [slug]/          # Dynamic project route
│   │   │       └── page.tsx
│   │   └── blog/                # Blog routes
│   │       ├── page.tsx         # Blog list
│   │       └── [slug]/          # Dynamic blog post route
│   │           └── page.tsx
│   │
│   ├── (auth)/                  # Route group for auth
│   │   ├── sign-in/             # Sign in page
│   │   └── sign-up/             # Sign up page
│   │
│   ├── (dashboard)/             # Route group for admin
│   │   ├── layout.tsx           # Dashboard layout with auth protection
│   │   ├── dashboard/           # Dashboard home
│   │   ├── projects/            # Projects management
│   │   │   ├── page.tsx         # Projects list
│   │   │   ├── new/             # Create new project
│   │   │   └── [id]/edit/       # Edit existing project
│   │   └── blog/                # Blog management
│   │       ├── page.tsx         # Posts list
│   │       ├── new/             # Create new post
│   │       └── [id]/edit/       # Edit existing post
│   │
│   ├── api/                     # API routes (if needed)
│   ├── layout.tsx               # Root layout
│   └── not-found.tsx            # 404 page
│
├── components/
│   ├── layout/                  # Layout components
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── hero-section.tsx
│   │   └── mobile-nav.tsx
│   │
│   ├── ui/                      # ShadCN components
│   │   ├── button.tsx
│   │   ├── theme-toggle.tsx
│   │   ├── scroll-to-top.tsx
│   │   └── ...
│   │
│   ├── projects/                # Project-specific components
│   │   ├── project-card.tsx
│   │   └── project-grid.tsx
│   │
│   ├── blog/                    # Blog-specific components
│   │   ├── post-card.tsx
│   │   └── post-grid.tsx
│   │
│   └── dashboard/               # Admin-only components
│       ├── editor/              # TipTap editor components
│       ├── forms/               # Form components
│       └── data-table/          # Table components
│
├── lib/
│   ├── utils/                   # Utility functions
│   │   ├── cn.ts                # Class merging utility
│   │   └── format.ts            # Date/string formatting
│   │
│   ├── db/                      # Database utilities
│   │   ├── schema.ts            # Drizzle schema
│   │   └── index.ts             # DB connection
│   │
│   ├── auth.ts                  # Supabase auth helpers
│   └── supabase.ts              # Supabase client
│
├── types/                       # TypeScript type definitions
│   ├── projects.ts
│   ├── blog.ts
│   └── supabase.ts
│
├── config/                      # Configuration files
│   ├── site.ts                  # Site metadata
│   └── dashboard.ts             # Dashboard config
│
├── styles/
│   └── globals.css              # Global styles and theme
│
├── public/                      # Static assets
│
├── components.json              # ShadCN configuration
├── tailwind.config.js           # Tailwind configuration
├── middleware.ts                # Next.js middleware for auth
└── .env                         # Environment variables
```

## 5. Authentication & Access

| Area         | Authenticated? | Notes                                |
| ------------ | -------------- | ------------------------------------ |
| Public Pages | ❌             | Home, About, Blog, Projects, Contact |
| Dashboard    | ✅             | Supabase Auth + role check           |
| Admin Routes | ✅             | Protected via middleware or hook     |

## 6. Core Features

### 6.1 Public Website

- **Home Page**

  - Professional hero section with concise value proposition
  - Featured projects grid with filtering options
  - Skills and expertise showcase
  - Latest blog posts with previews
  - Call-to-action for potential employers and clients
  - Contact information and social links

- **Projects Section**

  - Filterable grid display of portfolio work
  - Individual project pages with:
    - Detailed project descriptions
    - Technologies used
    - Process documentation
    - Visual showcases (images/diagrams)
    - Links to live projects/repositories

- **Blog System**

  - List view of blog posts with categorization
  - Individual post pages with rich text content
  - Tags/categories for organization
  - Search functionality
  - Related posts suggestions

- **About Page**

  - Professional biography and career journey
  - Skills and expertise visualization
  - Work experience timeline
  - Education and certifications
  - Downloadable resume option

- **Contact Section**
  - Contact form with validation
  - Social media links
  - Email address with anti-spam protection
  - Availability status for new opportunities

### 6.2 Admin Dashboard

- **Authentication**

  - Secure Supabase Auth integration
  - Protected routes with middleware
  - Role-based access control

- **Dashboard Overview**

  - Content statistics and metrics
  - Recent activity log
  - Quick action shortcuts

- **Content Management**

  - Blog post editor with TipTap (Notion-like experience)
  - Project creation and management with custom fields
  - Tags and categories management
  - Draft/publish workflow with scheduling

- **Media Management**

  - Supabase Storage integration
  - Image upload with preview
  - File organization system
  - Image optimization capabilities

- **SEO Tools**
  - Meta title and description editor
  - Open Graph image selection
  - URL slug customization
  - SEO preview and suggestions

## 7. UI/UX Components

### 7.1 Core UI Components

| Component            | Description                                                     |
| -------------------- | --------------------------------------------------------------- |
| `<Navbar />`         | Sticky, blurred top nav with theme toggle and responsive design |
| `<HeroSection />`    | Homepage intro with animated heading, subtext and CTA buttons   |
| `<ProjectsGrid />`   | Filterable, animated grid of projects with hover effects        |
| `<BlogList />`       | Clean, modern blog post listing with featured images            |
| `<Footer />`         | Modern footer with links, branding, and newsletter signup       |
| `<ScrollToTop />`    | Button appears after scroll and animates upward                 |
| `<ThemeToggle />`    | Uses `next-themes` with smooth icon animation                   |
| `<MobileNav />`      | Left-drawer nav with overlay and smooth transitions             |
| `<ContactForm />`    | Validated form with success/error states                        |
| `<SkillsShowcase />` | Visual representation of technical skills                       |

### 7.2 Technical Implementation

- All components built with ShadCN UI and Tailwind
- Accessibility-first approach (ARIA, keyboard navigation)
- Performance optimization (code-splitting, lazy loading)
- Responsive design using Tailwind's mobile-first approach
- Motion effects using Framer Motion for subtle animations

## 8. Image/File Management

### 8.1 Storage Architecture

- Supabase Storage for all media assets
- Organized bucket structure:
  - `/projects` - Project-related images
  - `/blog` - Blog post images
  - `/profile` - Personal/about page images
  - `/general` - Site-wide assets

### 8.2 Implementation Features

- Drag-and-drop uploading in admin dashboard
- Automatic image optimization via Next.js Image component
- Secure access control for private/public assets
- Image transformation capabilities (resize, crop)
- Metadata storage and retrieval

## 9. Rich Text Editing

### 9.1 TipTap Implementation

- React-based TipTap editor with Notion-like styling
- Core features:
  - Headings and text formatting
  - Lists (ordered, unordered)
  - Code blocks with syntax highlighting
  - Image embedding and positioning
  - Tables with manipulation controls
  - Blockquotes and callouts
  - Link management with previews

### 9.2 Technical Details

- Output saved as structured JSON in Supabase `jsonb` columns
- Custom serializers for HTML rendering on frontend
- Collaboration features (optional)
- Autosave functionality
- Image upload integrated with Supabase storage

## 10. Admin CMS Features

### 10.1 Core Admin Functionality

| Feature         | Tech/Component     | Details                                   |
| --------------- | ------------------ | ----------------------------------------- |
| Authentication  | Supabase Auth      | Role-based access with secure sessions    |
| Dashboard       | React + ShadCN     | Overview metrics and activity tracking    |
| Projects CRUD   | Drizzle + Supabase | Complete project management workflow      |
| Blog Management | TipTap + JSON      | Full-featured post editor with scheduling |
| Media Library   | Supabase Storage   | Centralized asset management system       |
| SEO Tools       | Custom Components  | Meta tags and URL customization           |

### 10.2 Admin UX/UI

- Responsive admin interface
- Intuitive navigation system
- Keyboard shortcuts for power users
- Dark/light mode support
- Success/error notifications
- Autosave for content editing

## 11. Development Conventions

### 11.1 Code Structure and Style

- `use client` directive for client components
- Server components preferred where possible
- Theme managed via `next-themes` with ShadCN integration
- Tailwind v4 utility-first approach with consistent patterns
- Component composition for complex UI elements
- Consistent prop interfaces with TypeScript

### 11.2 Naming and Organization

- PascalCase for component files and React components
- camelCase for utility functions and hooks
- kebab-case for directories and routes
- Folder-based component organization
- Co-location of related files

### 11.3 Data Fetching and State Management

- Server components for most data fetching
- React Query for client-side data management
- React Context for global state when needed
- Local component state for UI-specific state
- Form handling with React Hook Form

### 11.4 Performance Optimization

- Code splitting via Next.js App Router
- Image optimization with Next Image
- Prefetching of critical routes
- Proper memoization of expensive operations
- Avoiding unnecessary client-side JavaScript

## 12. Database Schema (Supabase + Drizzle)

### 12.1 Core Tables

- **users** (Supabase Auth)

  - id (PK, UUID)
  - email
  - role
  - metadata
  - created_at
  - updated_at

- **projects**

  - id (PK)
  - title
  - slug (unique)
  - description
  - content (jsonb - TipTap output)
  - excerpt
  - featured_image
  - technologies (array)
  - project_url
  - github_url
  - is_featured (boolean)
  - status (enum: draft, published)
  - published_at
  - created_at
  - updated_at

- **blog_posts**

  - id (PK)
  - title
  - slug (unique)
  - content (jsonb - TipTap output)
  - excerpt
  - featured_image
  - author_id (FK → users)
  - reading_time
  - is_featured (boolean)
  - status (enum: draft, published)
  - published_at
  - created_at
  - updated_at

- **tags**

  - id (PK)
  - name
  - slug (unique)
  - description
  - created_at

- **post_tags** (junction table)

  - post_id (FK → blog_posts)
  - tag_id (FK → tags)

- **project_tags** (junction table)

  - project_id (FK → projects)
  - tag_id (FK → tags)

- **media**

  - id (PK)
  - file_name
  - file_path
  - file_size
  - file_type
  - alt_text
  - caption
  - uploaded_by (FK → users)
  - created_at

- **settings**
  - id (PK)
  - key (unique)
  - value (jsonb)
  - updated_at

### 12.2 Indexes and Constraints

- Unique constraints on all slug fields
- Indexes on frequently queried fields
- Foreign key constraints for referential integrity
- Check constraints for status enums

## 13. Security Requirements

### 13.1 Authentication & Authorization

- Supabase Auth for secure authentication
- JWT token management with proper expiration
- Role-based access control (RBAC) for admin functionality
- Next.js middleware for route protection
- Security headers configuration
- Rate limiting for authentication attempts

### 13.2 Data Protection

- HTTPS enforcement via Vercel
- Input validation and sanitization on all forms
- Protection against XSS and CSRF attacks
- Secure handling of environment variables
- Proper error handling without leaking sensitive information

### 13.3 File Upload Security

- Strict file type validation
- File size limitations
- Malware scanning (optional)
- Secure storage access control

## 14. Performance Optimization

### 14.1 Frontend Performance

- Next.js App Router with automatic code splitting
- Server components for reduced client JavaScript
- Image optimization via Next.js Image component
- Font optimization with next/font
- Progressive loading strategies:
  - Initial page load optimized for core content
  - Non-critical resources loaded asynchronously
  - Above-the-fold content prioritization

### 14.2 Backend Performance

- Efficient database queries via Drizzle ORM
- Database indexes for commonly queried fields
- Edge functions for API routes when appropriate
- Static generation and revalidation strategies:
  - ISR (Incremental Static Regeneration) for blog and projects
  - On-demand revalidation when content changes
  - Full static generation for unchanging pages

### 14.3 Caching Strategy

- Browser caching with optimal cache headers
- CDN caching via Vercel Edge Network
- Distributed caching for database queries (optional)
- Strategic revalidation policies

## 15. SEO & Accessibility

### 15.1 SEO Implementation

- Next.js metadata API for dynamic meta tags
- Structured data (JSON-LD) for rich search results
- Canonical URL implementation
- Sitemap.xml and robots.txt generation
- Open Graph and Twitter card meta tags
- Semantic HTML structure
- Breadcrumb navigation
- Performance optimization (Core Web Vitals)

### 15.2 Accessibility Standards

- WCAG 2.2 AA compliance target
- Semantic HTML with proper landmark regions
- ARIA attributes where appropriate
- Keyboard navigation support
- Focus management for interactive elements
- Color contrast compliance
- Screen reader compatibility
- Alt text for all images
- Skip-to-content functionality

## 16. Deployment & Operations

### 16.1 Deployment Infrastructure

- Vercel hosting with global CDN
- Production, preview, and development environments
- Environment variable management
- Automatic SSL/TLS certificates

### 16.2 CI/CD Pipeline

- GitHub integration with Vercel
- Automated builds on push/PR
- Preview deployments for pull requests
- Automated testing on CI
- Automated linting and type checking

### 16.3 Monitoring & Analytics

- Vercel Analytics for performance monitoring
- Error tracking with Sentry
- Custom event tracking
- User behavior analytics

### 16.4 Maintenance

- Regular dependency updates
- Security patch management
- Database backups
- Content versioning

## 17. Future Expansion Considerations

### 17.1 Potential Features

- Multi-language support
- Advanced analytics dashboard
- Newsletter integration
- Commenting system
- Portfolio filtering by technology/category
- Downloadable resources/assets
- Live chat or contact scheduling
- Integration with professional networks (LinkedIn API)

### 17.2 Technical Scalability

- Serverless function optimization
- Database scaling strategy
- Content delivery network enhancements
- Progressive Web App capabilities
