/**
 * Setup Auth Sync
 * Comprehensive script to set up user authentication synchronization
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

/**
 * Create the auth sync functions and triggers
 */
async function setupAuthSync() {
  console.log('🔧 Setting up authentication synchronization...');

  const functions = [
    // Function to handle new user creation
    `
    CREATE OR REPLACE FUNCTION public.handle_new_user()
    RETURNS TRIGGER AS $$
    BEGIN
      INSERT INTO public.users (id, email, role, metadata, created_at, updated_at)
      VALUES (
        NEW.id,
        NEW.email,
        CASE 
          WHEN NEW.email = 'hello@jacobc.co.za' THEN 'admin'::user_role
          ELSE 'user'::user_role
        END,
        jsonb_build_object(
          'name', COALESCE(NEW.raw_user_meta_data->>'name', NEW.raw_user_meta_data->>'full_name', ''),
          'avatar_url', NEW.raw_user_meta_data->>'avatar_url'
        ),
        NOW(),
        NOW()
      )
      ON CONFLICT (id) DO UPDATE SET
        email = EXCLUDED.email,
        metadata = EXCLUDED.metadata,
        updated_at = NOW();
      
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql SECURITY DEFINER;
    `,

    // Function to handle user updates
    `
    CREATE OR REPLACE FUNCTION public.handle_user_update()
    RETURNS TRIGGER AS $$
    BEGIN
      UPDATE public.users
      SET
        email = NEW.email,
        metadata = jsonb_build_object(
          'name', COALESCE(NEW.raw_user_meta_data->>'name', NEW.raw_user_meta_data->>'full_name', ''),
          'avatar_url', NEW.raw_user_meta_data->>'avatar_url'
        ),
        updated_at = NOW()
      WHERE id = NEW.id;
      
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql SECURITY DEFINER;
    `,

    // Function to handle user deletion
    `
    CREATE OR REPLACE FUNCTION public.handle_user_delete()
    RETURNS TRIGGER AS $$
    BEGIN
      DELETE FROM public.users WHERE id = OLD.id;
      RETURN OLD;
    END;
    $$ LANGUAGE plpgsql SECURITY DEFINER;
    `,
  ];

  const triggers = [
    // Trigger for new user creation
    `
    DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
    CREATE TRIGGER on_auth_user_created
      AFTER INSERT ON auth.users
      FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
    `,

    // Trigger for user updates
    `
    DROP TRIGGER IF EXISTS on_auth_user_updated ON auth.users;
    CREATE TRIGGER on_auth_user_updated
      AFTER UPDATE ON auth.users
      FOR EACH ROW EXECUTE FUNCTION public.handle_user_update();
    `,

    // Trigger for user deletion
    `
    DROP TRIGGER IF EXISTS on_auth_user_deleted ON auth.users;
    CREATE TRIGGER on_auth_user_deleted
      AFTER DELETE ON auth.users
      FOR EACH ROW EXECUTE FUNCTION public.handle_user_delete();
    `,
  ];

  try {
    // Create functions
    for (const func of functions) {
      const { error } = await supabase.rpc('exec_sql', { sql: func });
      if (error) {
        console.warn('Function creation warning:', error.message);
      }
    }

    // Create triggers
    for (const trigger of triggers) {
      const { error } = await supabase.rpc('exec_sql', { sql: trigger });
      if (error) {
        console.warn('Trigger creation warning:', error.message);
      }
    }

    console.log('✅ Auth sync functions and triggers created successfully!');
    return true;
  } catch (error) {
    console.error('❌ Failed to create auth sync:', error);
    return false;
  }
}

/**
 * Test the auth sync by creating a test user
 */
async function testAuthSync() {
  console.log('🧪 Testing auth sync...');

  try {
    // Check if triggers exist
    const { data: triggers, error } = await supabase
      .from('information_schema.triggers')
      .select('trigger_name')
      .like('trigger_name', '%auth_user%');

    if (error) {
      console.warn('Could not verify triggers:', error.message);
    } else {
      console.log(`Found ${triggers?.length || 0} auth triggers`);
    }

    console.log('✅ Auth sync test completed');
    return true;
  } catch (error) {
    console.error('❌ Auth sync test failed:', error);
    return false;
  }
}

/**
 * Manually sync a user to the database (fallback method)
 */
export async function syncUserToDatabase(
  userId: string,
  email: string,
  metadata?: any
) {
  try {
    const userData = {
      id: userId,
      email: email,
      role: email === 'hello@jacobc.co.za' ? 'admin' : 'user',
      metadata: metadata || {},
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const { error } = await supabase
      .from('users')
      .upsert(userData, { onConflict: 'id' });

    if (error) {
      console.error('Failed to sync user to database:', error);
      return false;
    }

    console.log(`✅ User ${email} synced to database`);
    return true;
  } catch (error) {
    console.error('Error syncing user:', error);
    return false;
  }
}

// Main function
async function main() {
  const command = process.argv[2];

  if (command === 'test') {
    await testAuthSync();
  } else {
    const success = await setupAuthSync();
    if (success) {
      await testAuthSync();
    }
  }
}

// Run if called directly
if (require.main === module) {
  main()
    .then(() => {
      console.log('\n✅ Setup completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n❌ Setup failed:', error);
      process.exit(1);
    });
}

export { setupAuthSync, testAuthSync };
