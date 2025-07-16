/**
 * Database Setup Verification
 * Script to verify database setup and user sync functionality
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

async function verifyDatabaseSetup() {
  console.log('🔍 Verifying database setup...');

  try {
    // Check if users table exists and has correct structure
    const { data: users, error: usersError } = await supabase
      .from('users')
      .select('id, email, role, created_at')
      .limit(5);

    if (usersError) {
      console.error('❌ Users table error:', usersError.message);
      return false;
    }

    console.log(`✅ Users table accessible with ${users?.length || 0} users`);

    // Check if auth users exist
    const { data: authUsers, error: authError } =
      await supabase.auth.admin.listUsers();

    if (authError) {
      console.error('❌ Auth users error:', authError.message);
      return false;
    }

    console.log(
      `✅ Auth users accessible with ${authUsers.users.length} users`
    );

    // Compare auth users vs public users
    const authEmails = authUsers.users.map((u) => u.email).filter(Boolean);
    const publicEmails = users?.map((u) => u.email) || [];

    console.log('\n📊 User Sync Status:');
    console.log(`Auth users: ${authEmails.length}`);
    console.log(`Public users: ${publicEmails.length}`);

    // Check for missing users
    const missingInPublic = authEmails.filter(
      (email) => !publicEmails.includes(email)
    );
    const missingInAuth = publicEmails.filter(
      (email) => !authEmails.includes(email)
    );

    if (missingInPublic.length > 0) {
      console.log(
        `⚠️  Users in auth but not in public.users: ${missingInPublic.join(
          ', '
        )}`
      );
    }

    if (missingInAuth.length > 0) {
      console.log(
        `⚠️  Users in public.users but not in auth: ${missingInAuth.join(', ')}`
      );
    }

    if (missingInPublic.length === 0 && missingInAuth.length === 0) {
      console.log('✅ All users are properly synced!');
    }

    // Check for admin user
    const adminUser = users?.find((u) => u.role === 'admin');
    if (adminUser) {
      console.log(`✅ Admin user found: ${adminUser.email}`);
    } else {
      console.log('⚠️  No admin user found');
    }

    return true;
  } catch (error) {
    console.error('❌ Database verification failed:', error);
    return false;
  }
}

async function checkTriggers() {
  console.log('\n🔧 Checking database triggers...');

  try {
    // Try to query triggers (this might not work on all Supabase instances)
    const { data, error } = await supabase.rpc('exec_sql', {
      sql: `
          SELECT trigger_name, event_manipulation, action_timing
          FROM information_schema.triggers 
          WHERE trigger_name LIKE '%auth_user%';
        `,
    });

    if (error) {
      console.log('⚠️  Cannot verify triggers programmatically');
      console.log(
        '   Please check manually in Supabase Dashboard > Database > Triggers'
      );
      return false;
    }

    if (data && data.length > 0) {
      console.log('✅ Auth triggers found:');
      data.forEach((trigger: any) => {
        console.log(
          `   - ${trigger.trigger_name} (${trigger.event_manipulation} ${trigger.action_timing})`
        );
      });
      return true;
    } else {
      console.log('❌ No auth triggers found');
      return false;
    }
  } catch (error) {
    console.log('⚠️  Cannot verify triggers:', error);
    return false;
  }
}

async function main() {
  console.log('🚀 Database Setup Verification');
  console.log('==============================\n');

  const dbOk = await verifyDatabaseSetup();
  const triggersOk = await checkTriggers();

  console.log('\n📋 Summary:');
  console.log(`Database Setup: ${dbOk ? '✅ OK' : '❌ Issues Found'}`);
  console.log(
    `Triggers: ${triggersOk ? '✅ OK' : '⚠️  Manual Check Required'}`
  );

  if (!triggersOk) {
    console.log('\n🔧 Manual Setup Required:');
    console.log('1. Open Supabase Dashboard > SQL Editor');
    console.log('2. Run SQL from: src/lib/db/auth-trigger.sql');
    console.log(
      '3. This will create triggers to sync auth.users with public.users'
    );
    console.log(
      '\n📄 The signup form includes fallback sync, so users will be synced even without triggers.'
    );
  }

  console.log('\n✅ Verification completed');
}

// Run if called directly
if (require.main === module) {
  main()
    .then(() => {
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Verification failed:', error);
      process.exit(1);
    });
}

export { verifyDatabaseSetup, checkTriggers };
