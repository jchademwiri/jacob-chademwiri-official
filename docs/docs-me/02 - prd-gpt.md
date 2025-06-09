# 📘 Product Requirements Document (PRD)

**Project Name:** GreenDesign Portfolio  
**Product Owner:** Jacob Chademwiri  
**Domain:** [https://jacobc.co.za](https://jacobc.co.za)  
**Version:** 1.0  
**Date:** May 2025

---

## 1. 🎯 Purpose

The GreenDesign website aims to showcase the professional identity, work, and writing of Jacob Chademwiri. It should act as a modern, high-performance portfolio and content platform that balances design aesthetics, performance, and a custom admin experience.

---

## 2. 🧭 Goals & Objectives

| Objective                     | Description                                                           |
| ----------------------------- | --------------------------------------------------------------------- |
| Personal Branding             | Create a professional online presence with modern design              |
| Showcase Work                 | Present projects in a detailed, interactive, and visually rich format |
| Publish Thought Leadership    | Blog system with a rich text editor for writing and SEO content       |
| Custom CMS                    | Build an admin dashboard to manage content without third-party CMS    |
| Responsive and Accessible UI  | Ensure all devices and users can access the site effectively          |
| Performance and SEO Optimized | Leverage Next.js static capabilities and best practices               |

---

## 3. 👥 Target Audience

- Hiring managers and recruiters
- Potential freelance clients
- Technical peers and blog readers
- Agencies evaluating Jacob’s skills

---

## 4. 📐 Features & Functionality

### 4.1 Public Site

| Page           | Features                                                      |
| -------------- | ------------------------------------------------------------- |
| Home           | Hero section, featured projects, blog preview, call to action |
| Projects       | Filterable grid, tags, responsive cards                       |
| Project Detail | Custom slug route, images, descriptions, links                |
| Blog           | List view, tags, featured images, search                      |
| Blog Post      | TipTap-rendered content, author info, reading time            |
| About          | Bio, skills showcase, work history, resume download           |
| Contact        | Form with validation, social links, availability status       |

### 4.2 Admin Dashboard

| Area                | Features                                                        |
| ------------------- | --------------------------------------------------------------- |
| Authentication      | Supabase Auth, role-based access                                |
| Blog Management     | TipTap editor, post status, tags, excerpt, cover image, SEO     |
| Project Management  | Create/update/delete projects, tech stack fields, links, images |
| Media Upload        | Supabase storage integration, previews, file management         |
| SEO Tools           | Meta title, description, Open Graph image, custom slugs         |
| Draft/Publish Logic | Save in draft, publish with optional scheduling                 |

---

## 5. 🧱 System Architecture

- **Frontend**: Next.js 15 (App Router) with Tailwind CSS v4 and ShadCN UI
- **Backend**: Supabase (PostgreSQL) + Drizzle ORM
- **CMS**: Custom admin routes under `/admin`, protected by auth
- **Auth**: Supabase email/password, protected with route middleware
- **Deployment**: Vercel with GitHub CI
- **Storage**: Supabase buckets (`/projects`, `/blog`, `/profile`, etc.)

---

## 6. 🎨 Design & Theming

- Color system based on **OKLCH CSS variables**
- Light and dark mode with `next-themes`
- ShadCN UI with custom design tokens:
  ```css
  --primary: oklch(0.696 0.17 162.48);
  --background: oklch(1 0 0);
  --foreground: oklch(0.141 0.005 285.823);
  ```

---

## 7. 📁 Information Architecture

### Pages

```
/
├── about
├── projects
│   └── [slug]
├── blog
│   └── [slug]
├── contact
└── admin/
    ├── dashboard
    ├── blog/
    │   ├── new
    │   └── [id]/edit
    └── projects/
        ├── new
        └── [id]/edit
```

---

## 8. 🧩 UI Components

- `<Navbar />` — sticky, blurred, with dark/light toggle
- `<MobileNav />` — animated left drawer
- `<HeroSection />` — call-to-action and intro
- `<ProjectCard />`, `<BlogCard />` — reusable for listing
- `<ThemeToggle />` — icon toggle using `next-themes`
- `<ScrollToTop />` — shows after scroll
- `<Footer />` — copyright, links

---

## 9. 🧪 Success Criteria

| Metric                   | Target                                 |
| ------------------------ | -------------------------------------- |
| Lighthouse Performance   | 90+ for all core vitals                |
| Accessibility Compliance | WCAG 2.2 AA                            |
| Admin Auth Security      | Role-based access, token storage, RBAC |
| SEO                      | Sitemap, Open Graph, dynamic meta      |
| Uptime                   | 99.9% (via Vercel)                     |
| Load Time                | < 2s first contentful paint            |

---

## 10. 📌 Constraints

- No `tailwind.config.ts` for design tokens — all theming via `:root`
- All components must follow Tailwind v4 + ShadCN conventions
- Minimal external dependencies — keep it lean and fast

---

## 11. 🛠️ Timeline & Milestones

| Phase   | Deliverables                      | ETA         |
| ------- | --------------------------------- | ----------- |
| Phase 1 | Base layout, Navbar, Footer       | ✅ Complete |
| Phase 2 | Hero, About, Projects, Blog setup | In progress |
| Phase 3 | Admin dashboard w/ auth & CRUD    | Mid-May     |
| Phase 4 | Final polish, SEO, deployment     | Late May    |

---

## 12. 📦 Deliverables

- Fully functional responsive website at `https://jacobc.co.za`
- GitHub repo with CI/CD and README
- Admin CMS dashboard (custom, not third-party)
- Fully themed dark/light UI
- Technical docs (`technical-spec.md`, `README.md`, `PRD.md`)
