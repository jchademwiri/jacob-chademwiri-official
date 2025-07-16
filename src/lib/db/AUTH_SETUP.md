# Authentication Setup Guide

This guide explains how to set up user authentication with automatic database synchronization between Supabase Auth and your public users table.

## Overview

The authentication system uses:

- **Supabase Auth** for user authentication (signup, login, password reset)
- **Public Users Table** for storing additional user metadata and roles
- **Database Triggers** to automatically sync users between auth.users and public.users

## Setup Steps

### 1. Apply Database Triggers

The database triggers automatically sync users from `auth.users` to `public.users` when users sign up, update their profile, or are deleted.

**Option A: Manual Setup (Recommended)**

1. Open your Supabase Dashboard
2. Go to SQL Editor
3. Copy and run the SQL from: `src/lib/db/auth-trigger.sql`

**Option B: Using Script**

```bash
pnpm run db:auth-trigger
```

### 2. Sync Existing Users

If you already have users in Supabase Auth, sync them to the public users table:

```bash
pnpm run db:sync-users
```

### 3. Seed Sample Data

Create sample data including the admin user:

```bash
pnpm run db:seed
```

## Database Schema

### Users Table Structure

```sql
CREATE TABLE public.users (
  id UUID PRIMARY KEY,              -- Matches auth.users.id
  email VARCHAR(255) NOT NULL UNIQUE,
  role user_role NOT NULL DEFAULT 'user',
  metadata JSONB,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
```

### User Roles

- `admin`: Full access to all features and content management
- `user`: Standard user with limited permissions

## How It Works

### User Registration Flow

1. User signs up through Supabase Auth
2. Database trigger automatically creates record in `public.users`
3. User gets default role of `'user'`
4. Additional metadata is stored from auth user_metadata

### Admin User Setup

The admin user (`hello@jacobc.co.za`) is automatically assigned the `admin` role when:

- Synced from existing Supabase Auth users
- Created during database seeding
- Signed up through the application (if email matches)

### Database Triggers

The system includes three triggers:

1. **on_auth_user_created**: Creates public.users record when user signs up
2. **on_auth_user_updated**: Updates public.users when auth user is updated
3. **on_auth_user_deleted**: Removes public.users record when auth user is deleted

## Usage in Application

### Server Components

```tsx
import { createClient } from '@/lib/server';

export default async function ServerComponent() {
  const supabase = await createClient();

  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Get user details from public.users
  if (user) {
    const { data: userDetails } = await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .single();
  }
}
```

### Client Components

```tsx
'use client';

import { createClient } from '@/lib/client';
import { useEffect, useState } from 'react';

export default function ClientComponent() {
  const [user, setUser] = useState(null);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();
  }, []);
}
```

## Authentication Pages

The application includes authentication pages at:

- `/auth/login` - User login
- `/auth/signup` - User registration
- `/auth/reset-password` - Password reset

## Admin Dashboard Access

Admin users can access the admin dashboard at `/admin` with full content management capabilities.

## Troubleshooting

### User Not Syncing to Database

1. **Check if triggers are applied**:

   ```sql
   SELECT * FROM information_schema.triggers
   WHERE trigger_name LIKE '%auth_user%';
   ```

2. **Manually sync existing users**:

   ```bash
   pnpm run db:sync-users
   ```

3. **Check user exists in auth.users**:
   ```sql
   SELECT id, email, created_at FROM auth.users;
   ```

### Admin User Not Getting Admin Role

1. **Check email matches exactly**: `hello@jacobc.co.za`
2. **Manually update user role**:
   ```sql
   UPDATE public.users
   SET role = 'admin'
   WHERE email = 'hello@jacobc.co.za';
   ```

### Database Connection Issues

1. **Verify environment variables**:

   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

2. **Test database connection**:
   ```bash
   pnpm run db:verify
   ```

## Security Considerations

### Row Level Security (RLS)

The users table should have RLS policies applied:

```sql
-- Users can read their own data
CREATE POLICY "Users can read own data" ON public.users
FOR SELECT USING (auth.uid() = id);

-- Users can update their own data
CREATE POLICY "Users can update own data" ON public.users
FOR UPDATE USING (auth.uid() = id);

-- Admin users can read all data
CREATE POLICY "Admin users can read all data" ON public.users
FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM public.users
    WHERE id = auth.uid() AND role = 'admin'
  )
);
```

### Environment Variables

Keep these secure and never commit to version control:

- `SUPABASE_SERVICE_ROLE_KEY` - Has admin access to your database
- Database connection strings with passwords

## Scripts Reference

| Script                     | Purpose                            |
| -------------------------- | ---------------------------------- |
| `pnpm run db:auth-trigger` | Display trigger setup instructions |
| `pnpm run db:sync-users`   | Sync existing Supabase Auth users  |
| `pnpm run db:seed`         | Create sample data and admin user  |
| `pnpm run db:verify`       | Verify database setup              |

## Next Steps

After completing the authentication setup:

1. ✅ Users can sign up and login
2. ✅ User data is automatically synced to database
3. ✅ Admin user has proper permissions
4. ✅ Sample data is created
5. 🔄 Ready for content management system integration

The authentication system is now fully functional and ready for use with the admin dashboard and content management features!
