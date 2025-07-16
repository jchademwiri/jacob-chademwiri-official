/**
 * Auth Sync Hook
 * Ensures users are synced to the database after authentication
 */

'use client';

import { useEffect } from 'react';
import { createClient } from '@/lib/client';

/**
 * Hook to ensure user is synced to database after authentication
 */
export function useAuthSync() {
  const supabase = createClient();

  useEffect(() => {
    const syncUser = async (user: any) => {
      if (!user) return;

      try {
        // Check if user exists in public.users table
        const { data: existingUser, error: fetchError } = await supabase
          .from('users')
          .select('id')
          .eq('id', user.id)
          .single();

        if (fetchError && fetchError.code !== 'PGRST116') {
          // PGRST116 is "not found" error, which is expected for new users
          console.error('Error checking user existence:', fetchError);
          return;
        }

        // If user doesn't exist in public.users, create them
        if (!existingUser) {
          const userData = {
            id: user.id,
            email: user.email,
            role: user.email === 'hello@jacobc.co.za' ? 'admin' : 'user',
            metadata: {
              name:
                user.user_metadata?.name || user.user_metadata?.full_name || '',
              avatar_url: user.user_metadata?.avatar_url || null,
            },
          };

          const { error: insertError } = await supabase
            .from('users')
            .insert(userData);

          if (insertError) {
            console.error('Failed to sync user to database:', insertError);
          } else {
            console.log('✅ User synced to database:', user.email);
          }
        }
      } catch (error) {
        console.error('Error in user sync:', error);
      }
    };

    // Check current user and sync if needed
    const checkAndSyncUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        await syncUser(user);
      }
    };

    // Sync current user
    checkAndSyncUser();

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        await syncUser(session.user);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);
}

/**
 * Manual user sync function for use in components
 */
export async function syncCurrentUser() {
  const supabase = createClient();

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      console.log('No user to sync');
      return false;
    }

    // Check if user exists in public.users table
    const { data: existingUser, error: fetchError } = await supabase
      .from('users')
      .select('id')
      .eq('id', user.id)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      console.error('Error checking user existence:', fetchError);
      return false;
    }

    // If user doesn't exist in public.users, create them
    if (!existingUser) {
      const userData = {
        id: user.id,
        email: user.email,
        role: user.email === 'hello@jacobc.co.za' ? 'admin' : 'user',
        metadata: {
          name: user.user_metadata?.name || user.user_metadata?.full_name || '',
          avatar_url: user.user_metadata?.avatar_url || null,
        },
      };

      const { error: insertError } = await supabase
        .from('users')
        .insert(userData);

      if (insertError) {
        console.error('Failed to sync user to database:', insertError);
        return false;
      } else {
        console.log('✅ User synced to database:', user.email);
        return true;
      }
    }

    console.log('User already exists in database');
    return true;
  } catch (error) {
    console.error('Error in manual user sync:', error);
    return false;
  }
}
