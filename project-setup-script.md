#!/bin/bash

# GreenDesign Portfolio Project Setup Script
# Author: Jacob Chademwiri
# Date: May 16, 2025
# Description: Script to set up project structure and documentation for GreenDesign Portfolio

# Set text colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== GreenDesign Portfolio Setup Script ===${NC}"
echo -e "${BLUE}Creating project structure and documentation...${NC}"

# Create main project directory
mkdir -p greendesign-portfolio
cd greendesign-portfolio

# Create core project directories
echo -e "${YELLOW}Creating core project directories...${NC}"
mkdir -p app/{components,lib,styles,config,types,public}
mkdir -p app/components/{layout,ui,projects,blog,dashboard}
mkdir -p app/(public)/{about,projects,blog}
mkdir -p app/(public)/projects/\[slug\]
mkdir -p app/(public)/blog/\[slug\]
mkdir -p app/(auth)/{sign-in,sign-up}
mkdir -p app/(dashboard)/{dashboard,projects,blog}
mkdir -p app/(dashboard)/projects/{new,\[id\]/edit}
mkdir -p app/(dashboard)/blog/{new,\[id\]/edit}
mkdir -p app/lib/{utils,db}
mkdir -p app/api
mkdir -p docs/{planning,design,technical,content}

# Create documentation files
echo -e "${YELLOW}Creating documentation files...${NC}"

# 1. Project Brief & Requirements
cat > docs/planning/project-brief.md << 'EOF'
# GreenDesign Portfolio - Project Brief & Requirements

## Project Overview

**Project:** GreenDesign Portfolio  
**Owner:** Jacob Chademwiri  
**Website:** https://jacobc.co.za  
**Version:** 1.0  
**Last Updated:** May 16, 2025

## Vision & Goals

### Vision Statement
Create a distinctive online presence that effectively showcases professional work, establishes thought leadership through content creation, and generates new professional opportunities.

### Target Audience
- **Primary:** Potential employers and clients in the tech/design industry
- **Secondary:** Industry peers, collaborators, and recruiters
- **Tertiary:** Blog readers interested in industry insights and tutorials

### Business Goals
1. Increase professional visibility in the job market
2. Generate qualified leads for freelance opportunities
3. Establish credibility through thoughtful content
4. Create a platform for showcasing technical expertise
5. Build a sustainable system for ongoing content updates

## Core Requirements

### Public Website Features
- Professional homepage with hero section and featured projects
- Portfolio project showcase with filtering and detailed case studies
- Blog platform with rich content and categorization
- About section with professional information and resume
- Contact capabilities with form and social links

### Admin Features
- Secure authentication system
- Dashboard for content management
- Rich text editing for blog and projects
- Media management system
- SEO optimization tools

## Technical Constraints

- Next.js 15+ with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- ShadCN UI for component library
- Supabase for backend services

## Success Criteria
- Website achieves Lighthouse scores of 90+ in all categories
- Core Web Vitals meet "Good" thresholds
- Complete portfolio with 5+ showcase projects
- Functional blog with initial 3+ well-crafted posts
- Mobile-responsive design that works flawlessly across devices
- SEO-optimized for relevant professional keywords
- Secure and performant admin system for content management

## Timeline
- **Phase 1:** Foundation (2 weeks)
- **Phase 2:** Core Features (4 weeks)
- **Phase 3:** Content & Refinement (2 weeks)
- **Phase 4:** Testing & Launch (2 weeks)

## Assumptions & Constraints
- Single developer (solo) project
- Limited budget for third-party services
- Must be maintainable by a single person
- Performance and security are top priorities
- Accessibility compliance required (WCAG 2.2 AA)
EOF

# 2. Technical Specification Light
cat > docs/technical/technical-spec-light.md << 'EOF'
# GreenDesign Portfolio - Technical Specification

## System Architecture

### High-Level Architecture
- **Frontend**: Next.js application for visitors and admin
- **Admin Dashboard**: Protected routes within the same Next.js app
- **Backend**: Supabase for authentication, database, and storage
- **Database**: PostgreSQL via Supabase
- **File Storage**: Supabase Storage for media assets

### Technology Stack
- **Frontend**:
  - Framework: Next.js 15+ (App Router)
  - Language: TypeScript
  - Styling: Tailwind CSS v4
  - UI Components: ShadCN UI
  - Theming: ShadCN themes with `oklch()` color values

- **Backend**:
  - Authentication: Supabase Auth
  - Database: Supabase PostgreSQL + Drizzle ORM
  - Storage: Supabase Storage (for media uploads)
  - Rich Text: TipTap Editor

- **Deployment**:
  - Hosting: Vercel
  - CI/CD: GitHub + Vercel CI

## Application Structure

### Directory Structure
```
.
├── app/
│   ├── (public)/                # Route group for public pages
│   │   ├── layout.tsx           # Public layout
│   │   ├── page.tsx             # Home page
│   │   ├── about/               # About page
│   │   ├── projects/            # Projects routes
│   │   │   ├── page.tsx         # Projects list
│   │   │   └── [slug]/          # Dynamic project route
│   │   └── blog/                # Blog routes
│   │       ├── page.tsx         # Blog list
│   │       └── [slug]/          # Dynamic blog post route
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
│   │
│   ├── api/                     # API routes (if needed)
│   ├── layout.tsx               # Root layout
│   └── not-found.tsx            # 404 page
│
├── components/                  # React components
├── lib/                         # Utilities and helpers
├── styles/                      # Global styles
├── config/                      # Site configuration
├── types/                       # TypeScript types
└── public/                      # Static assets
```

### Core Features Implementation

#### Authentication
- Supabase Auth with JWT tokens
- Protected routes via middleware
- Role-based access control for admin features

#### Content Management
- TipTap editor for rich text content
- JSON storage for structured content
- Image upload with Supabase Storage
- Draft/publish workflow

#### Performance Optimization
- Server components for data fetching
- Image optimization with Next.js Image
- Incremental Static Regeneration for content
- Code splitting and lazy loading

## Security Considerations
- HTTPS enforcement
- Proper authentication with secure session management
- Input validation and sanitization
- Protection against common vulnerabilities (XSS, CSRF)
- Secure file upload handling
- Regular security updates

## Performance Requirements
- Page Load Time: < 2.5 seconds
- First Contentful Paint: < 1.8 seconds
- Time to Interactive: < 3.5 seconds
- Largest Contentful Paint: < 2.5 seconds
- Cumulative Layout Shift: < 0.1

## Accessibility Requirements
- WCAG 2.2 AA compliance
- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Proper color contrast
- Focus management

## Future Scalability Considerations
- Content versioning system
- Multi-language support capability
- Advanced analytics integration
- Newsletter functionality
- Commenting system architecture
EOF

# 3. Design System Documentation
cat > docs/design/design-system.md << 'EOF'
# GreenDesign Portfolio Design System

## Brand Identity

### Colors
```css
:root {
  /* Primary palette */
  --primary: oklch(0.696 0.17 162.48);        /* Teal/green primary */
  --primary-foreground: oklch(0.985 0 0);     /* Light text on primary */
  
  /* Secondary palette */
  --secondary: oklch(0.76 0.12 89.2);         /* Warm amber secondary */
  --secondary-foreground: oklch(0.141 0.005 285.823); /* Dark text on secondary */
  
  /* Neutral palette */
  --background: oklch(1 0 0);                 /* White background */
  --foreground: oklch(0.141 0.005 285.823);   /* Dark text on background */
  
  /* UI colors */
  --muted: oklch(0.95 0.02 285.823);          /* Subtle background */
  --muted-foreground: oklch(0.47 0.008 285.823); /* Muted text */
  --accent: oklch(0.97 0.015 162.48);         /* Light accent background */
  --accent-foreground: oklch(0.141 0.02 162.48); /* Text on accent background */
  
  /* Feedback colors */
  --success: oklch(0.69 0.14 162.48);         /* Success green */
  --warning: oklch(0.76 0.12 89.2);           /* Warning orange */
  --error: oklch(0.67 0.16 25.76);            /* Error red */
  --info: oklch(0.65 0.15 251.07);            /* Info blue */
}
```

### Typography
- **Primary Font:** Inter (Sans-serif)
- **Secondary Font:** Merriweather (Serif, for blog content)
- **Monospace:** JetBrains Mono (for code blocks)

#### Font Sizes
- xs: 0.75rem (12px)
- sm: 0.875rem (14px)
- base: 1rem (16px)
- lg: 1.125rem (18px)
- xl: 1.25rem (20px)
- 2xl: 1.5rem (24px)
- 3xl: 1.875rem (30px)
- 4xl: 2.25rem (36px)
- 5xl: 3rem (48px)
- 6xl: 3.75rem (60px)

#### Font Weights
- Light: 300
- Regular: 400
- Medium: 500
- SemiBold: 600
- Bold: 700

### Spacing
- 0: 0px
- px: 1px
- 0.5: 0.125rem (2px)
- 1: 0.25rem (4px)
- 2: 0.5rem (8px)
- 3: 0.75rem (12px)
- 4: 1rem (16px)
- 5: 1.25rem (20px)
- 6: 1.5rem (24px)
- 8: 2rem (32px)
- 10: 2.5rem (40px)
- 12: 3rem (48px)
- 16: 4rem (64px)
- 20: 5rem (80px)
- 24: 6rem (96px)

## Component Library

### Buttons
- **Primary Button**: Solid background with hover state
- **Secondary Button**: Outlined style with hover state
- **Ghost Button**: Text-only with hover background
- **Link Button**: Acts like a link with underline
- **Icon Button**: Circle or square with centered icon
- **Destructive Button**: Red background for dangerous actions

### Cards
- **Default Card**: Basic container with padding
- **Interactive Card**: With hover effects for clickable cards
- **Project Card**: Specialized for portfolio items
- **Blog Card**: Specialized for blog posts
- **Feature Card**: For highlighting features/skills

### Typography Components
- **Heading**: H1-H6 with consistent styling
- **Paragraph**: Regular text with appropriate line height
- **List**: Styled UL and OL elements
- **Blockquote**: For quotations
- **Code**: Inline and block code formatting

### Form Elements
- **Input**: Text input with label and validation states
- **Textarea**: Multi-line input
- **Select**: Dropdown selection
- **Checkbox**: Boolean input
- **Radio**: Option selection
- **Toggle**: On/off switch
- **File Upload**: For media uploads

### Navigation Components
- **Navbar**: Main site navigation
- **Sidebar**: Dashboard navigation
- **Breadcrumbs**: For showing location
- **Tabs**: Content organization
- **Pagination**: For multi-page content

## Layout System

### Grid System
- 12-column grid for desktop layouts
- Flexbox-based grid for component layouts
- CSS Grid for complex page structures

### Breakpoints
- sm: 640px (Mobile landscape)
- md: 768px (Tablets)
- lg: 1024px (Small laptops)
- xl: 1280px (Desktops)
- 2xl: 1536px (Large desktops)

### Container Sizes
- Default max-width: 1200px
- Small container: 640px (for focused content)
- Full-width: 100% (with padding on edges)

## Animation & Interaction

### Transitions
- **Fast**: 150ms - For small UI interactions (buttons, hover)
- **Medium**: 300ms - For panel reveals and modals
- **Slow**: 500ms - For page transitions and major animations

### Hover States
- Subtle background color change
- Scale transform (1.02-1.05) for cards
- Underline animation for text links
- Box-shadow enhancement for elevated elements

### Loading States
- Skeleton screens for content loading
- Spinner for process indicators
- Progress bars for longer operations

## Accessibility Standards

### Color Contrast
- Text meets WCAG 2.2 AA standard (4.5:1 ratio minimum)
- UI controls meet 3:1 ratio minimum
- Links are distinguishable from surrounding text

### Focus States
- Visible focus ring on all interactive elements
- Skip-to-content link for keyboard users
- Tab order follows logical flow

### Screen Reader Support
- ARIA labels for all interactive elements
- Semantic HTML structure
- Hidden helper text for complex interactions
- Proper image alt text guidelines

### Reduced Motion
- `prefers-reduced-motion` media query support
- Essential motion only when reduced is preferred
EOF

# 4. Database Schema & API Documentation
cat > docs/technical/database-api.md << 'EOF'
# Database Schema & API Documentation

## Database Schema

### Entity Relationship Diagram
```
┌─────────┐       ┌──────────┐       ┌────────────┐
│  users  │       │ projects │       │ blog_posts │
├─────────┤       ├──────────┤       ├────────────┤
│ id (PK) │       │ id (PK)  │       │ id (PK)    │
│ email   │       │ title    │       │ title      │
│ role    │       │ slug     │       │ slug       │
│ created │       │ content  │       │ content    │
└─────────┘       │ excerpt  │       │ excerpt    │
                  │ featured │       │ featured   │
                  │ status   │       │ status     │
                  └──────────┘       └────────────┘
                       │                   │
                       │                   │
                       ▼                   ▼
                  ┌──────────┐       ┌────────────┐
                  │project_tags│     │ post_tags  │
                  ├──────────┤       ├────────────┤
                  │project_id│       │post_id     │
                  │tag_id    │       │tag_id      │
                  └──────────┘       └────────────┘
                       ▲                   ▲
                       │                   │
                       │                   │
                       └─────────┐ ┌───────┘
                                 │ │
                               ┌─────┐
                               │tags │
                               ├─────┤
                               │id   │
                               │name │
                               │slug │
                               └─────┘
```

### Tables

#### users
- `id` UUID PRIMARY KEY
- `email` VARCHAR NOT NULL UNIQUE
- `password` VARCHAR (hashed)
- `role` VARCHAR DEFAULT 'user'
- `created_at` TIMESTAMP DEFAULT now()
- `updated_at` TIMESTAMP DEFAULT now()

#### projects
- `id` UUID PRIMARY KEY
- `title` VARCHAR NOT NULL
- `slug` VARCHAR NOT NULL UNIQUE
- `description` TEXT
- `content` JSONB (TipTap output)
- `excerpt` TEXT
- `featured_image` VARCHAR
- `technologies` VARCHAR[]
- `project_url` VARCHAR
- `github_url` VARCHAR
- `is_featured` BOOLEAN DEFAULT false
- `status` VARCHAR DEFAULT 'draft' CHECK (status IN ('draft', 'published'))
- `published_at` TIMESTAMP
- `created_at` TIMESTAMP DEFAULT now()
- `updated_at` TIMESTAMP DEFAULT now()

#### blog_posts
- `id` UUID PRIMARY KEY
- `title` VARCHAR NOT NULL
- `slug` VARCHAR NOT NULL UNIQUE
- `content` JSONB (TipTap output)
- `excerpt` TEXT
- `featured_image` VARCHAR
- `author_id` UUID REFERENCES users(id)
- `reading_time` INTEGER
- `is_featured` BOOLEAN DEFAULT false
- `status` VARCHAR DEFAULT 'draft' CHECK (status IN ('draft', 'published'))
- `published_at` TIMESTAMP
- `created_at` TIMESTAMP DEFAULT now()
- `updated_at` TIMESTAMP DEFAULT now()

#### tags
- `id` UUID PRIMARY KEY
- `name` VARCHAR NOT NULL
- `slug` VARCHAR NOT NULL UNIQUE
- `description` TEXT
- `created_at` TIMESTAMP DEFAULT now()

#### project_tags
- `project_id` UUID REFERENCES projects(id) ON DELETE CASCADE
- `tag_id` UUID REFERENCES tags(id) ON DELETE CASCADE
- PRIMARY KEY (project_id, tag_id)

#### post_tags
- `post_id` UUID REFERENCES blog_posts(id) ON DELETE CASCADE
- `tag_id` UUID REFERENCES tags(id) ON DELETE CASCADE
- PRIMARY KEY (post_id, tag_id)

#### media
- `id` UUID PRIMARY KEY
- `file_name` VARCHAR NOT NULL
- `file_path` VARCHAR NOT NULL
- `file_size` INTEGER NOT NULL
- `file_type` VARCHAR NOT NULL
- `alt_text` TEXT
- `caption` TEXT
- `uploaded_by` UUID REFERENCES users(id)
- `created_at` TIMESTAMP DEFAULT now()

## API Endpoints

### Authentication
- `POST /api/auth/login`
  - Body: `{ email, password }`
  - Response: `{ user, session }`

- `POST /api/auth/logout`
  - Response: `{ success }`

- `GET /api/auth/user`
  - Response: `{ user }`

### Projects
- `GET /api/projects`
  - Query params: `{ limit, offset, status, featured, tag }`
  - Response: `{ data: Project[], count }`

- `GET /api/projects/:slug`
  - Response: `{ data: Project }`

- `POST /api/projects` (authenticated)
  - Body: `{ title, content, ... }`
  - Response: `{ data: Project }`

- `PUT /api/projects/:id` (authenticated)
  - Body: `{ title, content, ... }`
  - Response: `{ data: Project }`

- `DELETE /api/projects/:id` (authenticated)
  - Response: `{ success }`

### Blog Posts
- `GET /api/blog`
  - Query params: `{ limit, offset, status, featured, tag }`
  - Response: `{ data: Post[], count }`

- `GET /api/blog/:slug`
  - Response: `{ data: Post }`

- `POST /api/blog` (authenticated)
  - Body: `{ title, content, ... }`
  - Response: `{ data: Post }`

- `PUT /api/blog/:id` (authenticated)
  - Body: `{ title, content, ... }`
  - Response: `{ data: Post }`

- `DELETE /api/blog/:id` (authenticated)
  - Response: `{ success }`

### Tags
- `GET /api/tags`
  - Response: `{ data: Tag[] }`

- `POST /api/tags` (authenticated)
  - Body: `{ name, description }`
  - Response: `{ data: Tag }`

### Media
- `GET /api/media`
  - Query params: `{ limit, offset, type }`
  - Response: `{ data: Media[], count }`

- `POST /api/media/upload` (authenticated)
  - Body: FormData with file
  - Response: `{ data: Media }`

- `DELETE /api/media/:id` (authenticated)
  - Response: `{ success }`
EOF

# 5. Development Workflow Guide
cat > docs/technical/development-workflow.md << 'EOF'
# Development Workflow Guide

## Local Development

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/jacobc/greendesign-portfolio.git
   cd greendesign-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env.local`
   - Fill in required values:
     - Supabase URL and keys
     - Site URL
     - Other service credentials

4. **Start development server**
   ```bash
   npm run dev
   ```

### Environment Variables

```
# App
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Optional services
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
```

## Git Workflow

### Branch Strategy
- `main` - Production-ready code
- `develop` - Integration branch for features
- Feature branches: `feature/feature-name`
- Bug fixes: `fix/bug-description`
- Documentation: `docs/description`

### Commit Convention
Using conventional commits format:

```
type(scope): short description

Longer description here if needed
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code changes that neither fix bugs nor add features
- `test`: Adding or modifying tests
- `chore`: Changes to build process or tools

### Pull Request Process
1. Create feature branch from `develop`
2. Make changes with appropriate commits
3. Push branch to remote
4. Create PR against `develop`
5. Verify all tests pass
6. Self-review code
7. Merge when ready

## Deployment Process

### Deployment Environments
- **Development**: Local environment
- **Preview**: Vercel preview deployments (PR-based)
- **Production**: Main branch on Vercel

### Pre-Deployment Checklist
- Run `npm run lint` to check for code issues
- Run `npm run typecheck` to verify TypeScript
- Verify build works locally with `npm run build`
- Check any environment variable changes
- Test critical user flows

### Deployment Steps
1. Merge code to `main` branch
2. Vercel automatically deploys main branch
3. Verify deployed site functionality

### Post-Deployment Verification
- Check landing page loads properly
- Verify critical functions (auth, content loading)
- Test on mobile device
- Check Lighthouse scores

## Feature Development Process

### Planning
1. Define feature requirements
2. Break down into tasks
3. Create GitHub issues or track in project management tool

### Implementation
1. Create feature branch
2. Implement code following project standards
3. Write/update tests where appropriate
4. Document code with comments/JSDoc

### Testing
1. Test locally across supported devices
2. Verify accessible implementation
3. Check performance impact
4. Cross-browser testing if applicable

### Documentation
1. Update relevant documentation
2. Add JSDoc comments to functions/components
3. Update README if needed

## Performance Monitoring

### Tools
- Vercel Analytics for production monitoring
- Lighthouse in development
- Chrome DevTools Performance tab for detailed analysis

### Key Metrics
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1
EOF

# 6. Content Structure Plan
cat > docs/content/content-structure.md << 'EOF'
# Content Structure Plan

## Content Types

### Projects

#### Fields
- Title
- Slug (URL-friendly version of title)
- Brief description (1-2 sentences)
- Featured image
- Content (rich text with TipTap)
- Technologies used (array of techs)
- Project URL (if live)
- GitHub URL (if open source)
- Featured status (boolean)
- Status (draft/published)
- Publication date

#### Content Structure
Each project should include:
1. Overview/Introduction
2. Problem statement
3. Solution approach
4. Technical implementation details
5. Challenges and solutions
6. Results/outcomes
7. Technologies used
8. Visual elements (screenshots, diagrams)

### Blog Posts

#### Fields
- Title
- Slug
- Featured image
- Excerpt (summary for listings)
- Content (rich text with TipTap)
- Tags/categories
- Author
- Reading time
- Featured status
- Status (draft/published)
- Publication date

#### Content Structure
Blog posts should generally follow:
1. Engaging introduction
2. Clear headings and subheadings
3. Short, readable paragraphs
4. Visual elements where appropriate
5. Code samples (for technical posts)
6. Conclusion or call-to-action

### About Page

#### Fields
- Professional bio
- Skills list
- Experience timeline
- Education details
- Certifications
- Profile image
- Resume file (PDF)

#### Content Structure
The About page should include:
1. Professional introduction
2. Skills visualization
3. Experience timeline
4. Education and certifications
5. Personal approach/philosophy
6. Download resume option

### Home Page

#### Fields
- Hero heading
- Subheading
- CTA buttons
- Featured projects (references)
- Featured blog posts (references)
- Skills highlight
- Contact prompt

## Admin Workflows

### Project Creation Workflow
1. Start new project draft
2. Add basic info (title, description)
3. Upload featured image
4. Create rich content with TipTap
5. Add technical details and links
6. Tag and categorize
7. Preview content
8. Publish or save as draft

### Blog Post Creation Workflow
1. Start new post draft
2. Add title and excerpt
3. Upload featured image
4. Create content with TipTap
5. Add tags/categories
6. Set SEO metadata
7. Preview post
8. Publish or schedule for later

### Media Management Workflow
1. Upload media to library
2. Add metadata (alt text, captions)
3. Organize in appropriate folder
4. Use in content via media picker

## Content Organization Strategy

### Projects Organization
- Filter by technology
- Filter by project type
- Sort by date
- Featured projects highlighted
- Tag-based categorization

### Blog Organization
- Category-based sections
- Tag filtering
- Date-based archives
- Featured/pinned posts
- Series grouping for related posts

## SEO Approach

### Projects SEO Strategy
- Title format: "Project Name - Jacob Chademwiri's Portfolio"
- Meta description highlighting key technologies and outcomes
- Structured data for portfolio items
- Technology keywords in content and meta tags
- Image alt text focusing on visual aspects of projects

### Blog SEO Strategy
- Title format: "Post Title | Jacob's Blog"
- Topic-focused meta descriptions
- Keyword research for technical topics
- Internal linking between related posts
- Category pages with dedicated meta content
- Structured data for blog posts

### Technical SEO Implementation
- Canonical URLs for all content
- XML sitemap generation
- robots.txt configuration
- 301 redirects for any URL changes
- Open Graph and Twitter card metadata
- Schema.org markup where appropriate

## Content Maintenance Plan

### Regular Updates
- Blog: Aim for 1-2 new posts per month
- Projects: Update as new work is completed
- About: Review quarterly
- Skills: Update when new technologies are mastered

### Content Audit Schedule
- Full content audit every 6 months
- Check for outdated information
- Update screenshots for projects
- Verify all links are working
- Review analytics to identify underperforming content
EOF

# 7. Testing Checklist
cat > docs/technical/testing-checklist.md << 'EOF'
# Testing Checklist

## Functional Testing

### Authentication
- [ ] Sign in with valid credentials
- [ ] Sign in with invalid credentials shows error
- [ ] Sign out works properly
- [ ] Password reset flow functions correctly
- [ ] Protected routes require authentication
- [ ] Session persistence works as expected

### Projects
- [ ] Projects list loads correctly
- [ ] Project filtering works
- [ ] Individual project pages load
- [ ] Project creation works in admin
- [ ] Project editing saves changes
- [ ] Project deletion works
- [ ] Draft/publish status changes take effect

### Blog
- [ ] Blog list loads correctly
- [ ] Blog post filtering works
- [ ] Individual blog posts load
- [ ] Blog post creation works in admin
- [ ] Blog post editing saves changes
- [ ] Blog post deletion works
- [ ] Draft/publish status changes take effect
- [ ] Scheduled posts publish on time

### Media
- [ ] Image upload works
- [ ] Large file handling works correctly
- [ ] Image preview shows in admin
- [ ] Media library loads quickly
- [ ] Media deletion works
- [ ] Media selection in editor works
- [ ] Alt text is saved and displayed properly

### Contact Form
- [ ] Form validates inputs correctly
- [ ] Error messages are clear
- [ ] Submission works and sends notification
- [ ] Confirmation message appears
- [ ] Protection against spam works

## Responsive Testing

### Mobile Devices
- [ ] iPhone SE (smallest supported size)
- [ ] iPhone Pro/Plus
- [ ] Android (Samsung Galaxy)
- [ ] Verify touch targets are large enough
- [ ] Check that text is readable without zooming
- [ ] Test mobile navigation

### Tablets
- [ ] iPad (standard)
- [ ] iPad Pro
- [ ] Android tablets
- [ ] Test orientation changes
- [ ] Verify layout adapts appropriately

### Desktops
- [ ] Standard laptop (1366x768)
- [ ] Large laptop (1920x1080)
- [ ] High-res display (2560x1440)
- [ ] Ultra-wide screen
- [ ] Check layout stretching/constraints

## Browser Testing

### Modern Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Safari iOS
- [ ] Chrome Android

### Feature Testing
- [ ] CSS Grid support
- [ ] Flexbox support
- [ ] Modern JavaScript features
- [ ] Local storage functionality
- [ ] Media queries behavior

## Accessibility Testing

### Screen Readers
- [ ] Test with VoiceOver (Mac/iOS)
- [ ] Test with NVDA or JAWS (Windows)
- [ ] Verify all content is announced properly
- [ ] Check form inputs have proper labels
- [ ] Confirm ARIA attributes are used correctly

### Keyboard Navigation
- [ ] Tab order is logical
- [ ] Focus states are visible
- [ ] Skip to content link works
- [ ] All interactive elements are reachable
- [ ] No keyboard traps exist

### Visual Accessibility