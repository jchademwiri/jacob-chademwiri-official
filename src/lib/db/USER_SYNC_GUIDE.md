# User Authentication & Database Sync Guide

## Problem Solved ✅

**Issue**: Users signing up through Supabase Auth were not being saved to the `public.users` database table.

**Solution**: Implemented a comprehensive user synchronization system with multiple fallback mechanisms.

## How It Works

### 1. Database Triggers (Recommended)

Automatic sync when users sign up, update, or are deleted from Supabase Auth.

### 2. Client-Side Fallback

The signup form includes automatic user sync as a fallback mechanism.

### 3. Manual Sync Tools

Scripts to sync existing users and verify the setup.

## Current Status

✅ **All existing users are synced**

- `hello@jacobc.co.za` (admin role)
- `jchademwiri@gmail.com` (user role)

✅ **Signup form includes fallback sync**

- New signups will be synced to database even without triggers

⚠️ **Database triggers need manual setup**

- Triggers provide the most reliable automatic sync
- Manual setup required in Supabase Dashboard

## Setup Instructions

### Option 1: Apply Database Triggers (Recommended)

1. **Open Supabase Dashboard**

   - Go to your project dashboard
   - Navigate to SQL Editor

2. **Run the Trigger SQL**

   - Copy the SQL from: `src/lib/db/auth-trigger.sql`
   - Paste and execute in SQL Editor
   - This creates automatic sync triggers

3. **Verify Setup**
   ```bash
   pnpm run db:verify
   ```

### Option 2: Use Fallback Sync Only

If you can't set up triggers, the signup form will still work:

- Users will be synced automatically during signup
- Existing users are already synced
- New signups get default 'user' role
- Admin email gets 'admin' role automatically

## Testing User Signup

1. **Go to signup page**: `/auth/sign-up`
2. **Create a new account** with any email
3. **Check database**: User should appear in `public.users` table
4. **Verify role**: Should be 'user' (or 'admin' for hello@jacobc.co.za)

## Available Scripts

```bash
# Verify current setup
pnpm run db:verify

# Sync existing Supabase Auth users to database
pnpm run db:sync-users

# Display trigger setup instructions
pnpm run db:auth-trigger

# Create sample data
pnpm run db:seed
```

## User Roles

- **`user`**: Default role for new signups
- **`admin`**: Automatically assigned to `hello@jacobc.co.za`

## Database Schema

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

## Sync Mechanisms

### 1. Database Triggers (Best)

```sql
-- Automatically sync when users sign up
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

### 2. Client-Side Fallback

```tsx
// In SignUpForm component
const { data, error } = await supabase.auth.signUp({
  email,
  password,
});

// Fallback sync to database
if (data.user) {
  await supabase.from('users').upsert({
    id: data.user.id,
    email: data.user.email,
    role: email === 'hello@jacobc.co.za' ? 'admin' : 'user',
  });
}
```

### 3. Auth Sync Hook

```tsx
// Automatically syncs users when they authenticate
import { useAuthSync } from '@/lib/hooks/use-auth-sync';

export function MyComponent() {
  useAuthSync(); // Ensures user is synced to database
}
```

## Troubleshooting

### New Signup Not Saving to Database

1. **Check browser console** for sync messages
2. **Verify user in Supabase Auth** (Dashboard > Authentication > Users)
3. **Check public.users table** (Dashboard > Table Editor > users)
4. **Run manual sync**:
   ```bash
   pnpm run db:sync-users
   ```

### Admin User Not Getting Admin Role

1. **Verify email exactly matches**: `hello@jacobc.co.za`
2. **Manual role update**:
   ```sql
   UPDATE public.users
   SET role = 'admin'
   WHERE email = 'hello@jacobc.co.za';
   ```

### Database Connection Issues

1. **Check environment variables**:

   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

2. **Test connection**:
   ```bash
   pnpm run db:verify
   ```

## Security Notes

- Users can only read/update their own data (RLS policies)
- Admin users have elevated permissions
- Service role key is used only for sync operations
- Client-side sync uses anon key with proper RLS

## Next Steps

1. ✅ **User signup works** - Users are synced to database
2. ✅ **Admin access ready** - Admin user has proper permissions
3. 🔄 **Optional**: Set up database triggers for most reliable sync
4. 🚀 **Ready**: Authentication system is fully functional

## Files Created/Updated

```
src/lib/db/
├── auth-trigger.sql          # Database triggers SQL
├── apply-auth-trigger.ts     # User sync scripts
├── setup-auth-sync.ts        # Comprehensive setup script
├── verify-setup.ts           # Setup verification
└── USER_SYNC_GUIDE.md        # This guide

src/lib/hooks/
└── use-auth-sync.ts          # Client-side sync hook

src/components/
└── sign-up-form.tsx          # Updated with fallback sync
```

The user authentication and database sync system is now fully functional! 🎉
