/**
 * Apply Auth Trigger Script
 * Script to sync Supabase Auth users with public.users table
 */

import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';

// Load environment variables
config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing required environment variables');
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

async function displayTriggerInstructions() {
  console.log('🔧 Database Auth Trigger Setup Instructions');
  console.log('==========================================');
  console.log('\n📋 Manual Setup Required:');
  console.log('1. Open your Supabase Dashboard');
  console.log('2. Go to SQL Editor');
  console.log('3. Copy and run the SQL from: src/lib/db/auth-trigger.sql');
  console.log('4. This creates triggers to sync auth.users with public.users');

  console.log('\n📄 SQL File Location: src/lib/db/auth-trigger.sql');
  console.log('\n✅ After applying the SQL trigger:');
  console.log('- New user signups will automatically sync to public.users');
  console.log('- Run: pnpm run db:sync-users (to sync existing users)');
  console.log('- Run: pnpm run db:seed (to create sample data)');
}

async function syncExistingUsers() {
  try {
    console.log('👥 Syncing existing Supabase Auth users...');

    // Get all users from Supabase Auth
    const { data: authUsers, error } = await supabase.auth.admin.listUsers();

    if (error) {
      throw error;
    }

    console.log(`Found ${authUsers.users.length} users in Supabase Auth`);

    if (authUsers.users.length === 0) {
      console.log('No users found to sync.');
      return;
    }

    // Sync each user to the public.users table
    for (const authUser of authUsers.users) {
      try {
        const userData = {
          id: authUser.id,
          email: authUser.email || '',
          role: authUser.email === 'hello@jacobc.co.za' ? 'admin' : 'user',
          metadata: {
            name:
              authUser.user_metadata?.name ||
              authUser.user_metadata?.full_name ||
              '',
            avatar_url: authUser.user_metadata?.avatar_url || null,
          },
          created_at: authUser.created_at,
          updated_at: new Date().toISOString(),
        };

        // Insert or update user in public.users table
        const { error: upsertError } = await supabase
          .from('users')
          .upsert(userData, { onConflict: 'id' });

        if (upsertError) {
          console.warn(
            `⚠️  Warning syncing user ${authUser.email}:`,
            upsertError.message
          );
        } else {
          console.log(`✅ Synced user: ${authUser.email} (${userData.role})`);
        }
      } catch (userError) {
        console.warn(`❌ Error syncing user ${authUser.email}:`, userError);
      }
    }

    console.log('\n✅ User sync completed!');
    console.log(
      `📊 Synced ${authUsers.users.length} users from Supabase Auth to public.users`
    );
  } catch (error) {
    console.error('❌ Failed to sync users:', error);
    throw error;
  }
}

// Main function
async function main() {
  const command = process.argv[2];

  if (command === 'sync-users') {
    await syncExistingUsers();
  } else {
    await displayTriggerInstructions();
  }
}

// Run if called directly
if (require.main === module) {
  main()
    .then(() => {
      console.log('\n✅ Operation completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n❌ Operation failed:', error);
      process.exit(1);
    });
}

export { displayTriggerInstructions, syncExistingUsers };
