# Database Setup and Management

This directory contains the database schema, migrations, and utilities for the Jacob Chademwiri Professional Services Portfolio website.

## Overview

The database is built using:

- **PostgreSQL** - Primary database
- **Supabase** - Backend-as-a-Service platform
- **Drizzle ORM** - Type-safe database toolkit
- **Row Level Security (RLS)** - Fine-grained access control

## Database Schema

### Core Tables

1. **users** - User accounts and authentication
2. **case_studies** - Portfolio projects and case studies
3. **insights** - Blog posts and professional insights
4. **tags** - Content categorization system
5. **media** - File and image management
6. **case_study_tags** - Many-to-many relationship between case studies and tags
7. **insight_tags** - Many-to-many relationship between insights and tags

### Service Types

The system supports four main service categories:

- `tender_management` - Tender processes and bid management
- `project_coordination` - Project management and coordination
- `web_development` - Web development and technical solutions
- `it_solutions` - IT consulting and system implementations

## Available Scripts

### Database Management

```bash
# Generate new migration files
pnpm db:generate

# Apply migrations to database
pnpm db:migrate

# Push schema changes directly (development only)
pnpm db:push

# Open Drizzle Studio for database inspection
pnpm db:studio

# Apply Row Level Security policies
pnpm db:rls

# Seed database with initial data
pnpm db:seed
```

## Setup Instructions

### 1. Environment Configuration

Ensure your `.env.local` file contains the required Supabase credentials:

```env
DATABASE_URL="postgresql://postgres.xxx:password@aws-0-us-east-1.pooler.supabase.com:6543/postgres"
NEXT_PUBLIC_SUPABASE_URL="https://xxx.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
```

### 2. Initial Database Setup

```bash
# 1. Apply migrations to create tables
pnpm db:migrate

# 2. Apply Row Level Security policies
pnpm db:rls

# 3. Seed database with initial content
pnpm db:seed
```

### 3. Development Workflow

```bash
# Make schema changes in src/lib/db/schema.ts
# Generate migration
pnpm db:generate

# Apply migration
pnpm db:migrate

# Inspect database
pnpm db:studio
```

## Row Level Security (RLS)

The database implements comprehensive RLS policies:

### Public Access

- Published case studies and insights are publicly readable
- Tags and media are publicly accessible
- Tag associations are publicly readable

### Admin Access

- Full CRUD operations on all tables
- Content management capabilities
- User management functions

### User Access

- Users can view and update their own profiles
- Content creation requires admin privileges

## Seed Data

The seed script creates:

- 1 admin user (hello@jacobc.co.za)
- 10 content tags covering all service areas
- 3 sample case studies showcasing different services
- 3 sample insights with professional content
- Tag associations linking content to relevant categories

### Sample Content Categories

**Case Studies:**

1. SITHEMBE Transportation Tender Management System
2. Municipal Infrastructure Project Coordination Platform
3. Professional Services Portfolio Website

**Insights:**

1. Mastering CIDB Compliance: A Complete Guide for Contractors
2. Digital Transformation in Project Management: Tools and Strategies
3. Building Modern Web Applications with Next.js and Supabase

## Database Relationships

```
users (1) ←→ (many) insights
users (1) ←→ (many) media

case_studies (many) ←→ (many) tags [via case_study_tags]
insights (many) ←→ (many) tags [via insight_tags]
```

## Content Management

### Case Studies Structure

- Service type categorization
- Challenge-Solution-Results-ROI format
- Client information and project metrics
- Technology stack and project details
- Featured/published status management

### Insights Structure

- Rich text content with TipTap JSON format
- Reading time calculation
- Author attribution and publication dates
- Featured content selection
- SEO-friendly slug generation

### Media Management

- File metadata and organization
- Alt text and caption support
- User attribution and upload tracking
- Integration with Supabase Storage

## Security Features

- Row Level Security on all tables
- Role-based access control (admin/user)
- Secure file upload policies
- Input validation and sanitization
- Audit trails with created_at/updated_at timestamps

## Performance Optimizations

- Indexed columns for fast queries
- Efficient relationship structures
- Optimized JSON content storage
- Prepared statement support
- Connection pooling configuration

## Troubleshooting

### Common Issues

1. **Migration Errors**

   ```bash
   # Reset migrations (development only)
   pnpm db:push
   ```

2. **RLS Policy Conflicts**

   ```bash
   # Reapply policies
   pnpm db:rls
   ```

3. **Seed Data Issues**
   ```bash
   # Clear and reseed (development only)
   # Manually clear tables in Supabase dashboard
   pnpm db:seed
   ```

### Database Inspection

Use Drizzle Studio for visual database inspection:

```bash
pnpm db:studio
```

Access at: `https://local.drizzle.studio`

## Production Considerations

- Ensure proper backup strategies
- Monitor connection pool usage
- Implement proper error handling
- Use environment-specific configurations
- Regular security policy reviews
