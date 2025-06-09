# 🗃️ Database & API Docs

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