# ⚙️ Technical Specifications

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