// generate-green-design-docs.js
// Generates a full documentation suite for the GreenDesign portfolio project

const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'docs');

const files = {
  '00 - overview.md': `# 🧭 Project Overview

## Vision & Scope

GreenDesign is a modern personal portfolio built to showcase the work, skills, and writing of Jacob Chademwiri. It balances aesthetics, performance, and professionalism.

## Goals & Objectives

- Build a responsive, dark/light themed portfolio
- Support blog posts with a custom CMS
- Feature a detailed project showcase
- Provide a maintainable and scalable codebase

## Target Audience

- Recruiters and employers
- Technical peers
- Freelance clients

## Success Criteria

- 90+ Lighthouse score
- Accessible on all devices
- Easy to manage content via dashboard

## Deliverables

- Fully functional website on https://jacobc.co.za
- Admin dashboard (CMS)
- Complete documentation and codebase
`,

  '01 - prd.md': `# 📝 Product Requirements

## Public Website Features

- Home, About, Projects, Blog, Contact pages
- Dynamic routing for [slug] pages
- Responsive layout
- Sticky navbar, scroll-to-top button

## Admin Dashboard Features

- Supabase auth
- CRUD for projects and blog posts
- Image upload to Supabase storage
- TipTap editor integration

## User Stories

- As a visitor, I can view Jacob’s projects
- As Jacob, I can log in and write blog posts
- As a recruiter, I can access the site on mobile and desktop

## Functional Requirements

- Secure routes with Supabase auth
- Dynamic routing for projects/blog
- Form validation and image upload

## Non-Functional Requirements

- OKLCH-based CSS theming
- Tailwind CSS v4 usage
- Hosted on Vercel

## Constraints

- No Tailwind config theme extension
- Solo developer timeline
`,

  '02 - technical-spec.md': `# ⚙️ Technical Specifications

## System Architecture

- Frontend: Next.js App Router
- Backend: Supabase PostgreSQL + Drizzle ORM
- CMS: Custom admin panel under /admin
- Hosting: Vercel

## Technology Stack

- TypeScript
- Tailwind CSS v4
- ShadCN UI
- Supabase Auth
- TipTap Rich Text Editor

## Authentication & Access Control

- Supabase email/password
- Protected routes using middleware or client hooks

## Component Directory Structure

- /app - routing
- /components - reusable UI
- /lib - auth/db
- /styles - theming

## Deployment Infrastructure

- GitHub for source control
- Vercel for CI/CD and preview deployments

## Rich Text Editor Setup

- TipTap with markdown & image support
- Stored as JSON in Supabase

## Image/File Management

- Supabase storage buckets
- Uploaded via drag-and-drop or form input
`,

  '03 - design-system.md': `# 🎨 Design System

## Brand Identity

- Name: GreenDesign
- Accent Color: Emerald/Green
- Typography: System font stack

## Tailwind v4 & OKLCH Variable Strategy

- Colors defined using OKLCH in :root
- Accessed via utilities like bg-[oklch(var(--primary))]

## Layout System & Spacing

- Max container width: 6xl
- Padding: 4–8 units

## ShadCN Component Usage

- Button
- Input
- Navbar
- Theme Toggle

## Accessibility Standards

- Focus-visible states
- Proper heading structure
- WCAG 2.2 AA baseline
`,

  '04 - db-and-api.md': `# 🗃️ Database & API Docs

## Database Schema

Tables:
- users
- blog_posts
- projects
- uploads

## Table Definitions

Each table includes timestamps, slugs, and user ownership.

## API Endpoints

Handled via Supabase client SDK:
- auth.signInWithPassword()
- from('projects').select()
- from('blog_posts').insert()

## Data Validation & Authorization Rules

RLS (Row Level Security) active on blog and project writes
Only authenticated users can edit content
`,

  '05 - workflow-guide.md': `# 🚀 Development Workflow

## Local Development Setup

- Clone repo
- Install with pnpm
- Run: pnpm dev

## Git Strategy & Naming Conventions

- Feature branches: feature/blog-crud
- Commits: Conventional Commits (feat:, fix:, chore:)

## Commit Message Guidelines

- feat: new feature
- fix: bug fix
- refactor: code cleanup

## CI/CD Pipeline with Vercel

- Connected to GitHub main branch
- Deploy previews on PRs

## Feature Branch Lifecycle

- Create → Develop → PR → Merge → Auto Deploy
`,

  '06 - testing.md': `# 🔍 Testing Strategy

## Functional Testing Checklist

- Navbar and mobile nav toggle
- Login/logout flow
- CRUD for blog and projects

## Responsive & Browser Testing

- Chrome, Safari, Firefox
- Mobile views for 320px–1440px

## Accessibility Testing

- Keyboard nav
- Screen reader labels
- Contrast ratios

## Performance Testing

- Lighthouse in Chrome
- Vercel Insights
`,

  '07 - security.md': `# 🛡️ Security & Compliance

## Authentication & RBAC

- Supabase handles sessions
- Middleware blocks non-authenticated access to /admin

## Data Protection Policies

- Passwords are hashed by Supabase
- File uploads validated client-side

## File Upload & Validation

- Supabase Storage bucket rules
- Size/type checks on client

## HTTPS, CORS, Headers

- All served over HTTPS via Vercel
- Default headers apply

## Privacy & Cookie Policy Templates

- TBD before launch
`,

  '08 - seo-analytics.md': `# 🧭 SEO & Analytics

## SEO Strategy

- Slugs use post titles
- Meta tags dynamically set in layout
- Sitemap.xml auto-generated

## Structured Data (JSON-LD)

- Blog posts & project schema

## Open Graph & Twitter Metadata

- Custom OG images per post

## Analytics Setup

- Vercel Analytics
- Optional: Plausible
`,

  '09 - maintenance.md': `# 🛠️ Maintenance Plan

## Update & Patch Management

- Tailwind, ShadCN, Supabase periodically updated

## Backup & Restore Strategy

- Supabase daily backups

## Monitoring & Logging

- Vercel logs errors and uptime

## Technical Debt Tracking

- Notion or GitHub Issues board
`,

  '10 - timeline.md': `# 📆 Project Timeline

## Development Phases

1. Layouts & Theme
2. Pages & Sections
3. Dashboard CMS
4. Polish & SEO

## Sprint Breakdown

| Sprint | Focus             |
|--------|-------------------|
| Week 1 | Setup, theme, navbar |
| Week 2 | Projects/blog pages |
| Week 3 | Admin dashboard     |
| Week 4 | Final touches       |

## Milestones & Deadlines

- May 5: Layout ready
- May 12: Pages working
- May 19: Dashboard done
- May 31: Launch

## Launch Plan

- Verify SEO, images, responsiveness
- Push to production on Vercel
`,

  '11 - appendix.md': `# 📂 Appendix & References

## Glossary of Terms

- OKLCH: Perceptual color format
- Supabase: Firebase alternative using Postgres

## Links to Docs

- https://nextjs.org
- https://supabase.com
- https://ui.shadcn.com
- https://tailwindcss.com

## License & Legal

- MIT License

## Version History

- v1.0 – Initial launch, May 2025
`,
};

// Create base directory
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
  console.log(`📁 Created directory: ${baseDir}`);
}

// Create files with content
Object.entries(files).forEach(([fileName, content]) => {
  const filePath = path.join(baseDir, fileName);
  fs.writeFileSync(filePath, content.trim());
  console.log(`✅ Created: ${filePath}`);
});

console.log('\n🎉 All documentation files have been generated!');
