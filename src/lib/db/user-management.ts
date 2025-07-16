/**
 * User Management
 * Comprehensive user deletion and management functions
 */

import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { eq } from 'drizzle-orm';
import { db } from './index';
import { users } from './schema';

// Load environment variables
config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

/**
 * Delete user from both Auth and Database (Complete Deletion)
 */
export async function deleteUserCompletely(userId: string) {
  console.log(`🗑️  Completely deleting user: ${userId}`);

  try {
    // First, get user info for logging
    const { data: userData } = await supabase
      .from('users')
      .select('email')
      .eq('id', userId)
      .single();

    const email = userData?.email || 'unknown';

    // Delete from Supabase Auth (this should trigger database deletion if triggers are set up)
    const { error: authError } = await supabase.auth.admin.deleteUser(userId);

    if (authError) {
      console.error('❌ Failed to delete from Auth:', authError.message);
      return { success: false, error: authError.message };
    }

    // Fallback: Delete from database manually (in case triggers don't work)
    try {
      await db.delete(users).where(eq(users.id, userId));
      console.log('✅ Deleted from database (fallback)');
    } catch (dbError) {
      console.warn('⚠️  Database deletion warning:', dbError);
    }

    console.log(`✅ User ${email} completely deleted`);
    return { success: true, email };
  } catch (error) {
    console.error('❌ Complete deletion failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Delete user from Database only (keeps Auth account)
 */
export async function deleteUserFromDatabase(userId: string) {
  console.log(`🗑️  Deleting user from database only: ${userId}`);

  try {
    // Get user info first
    const [userData] = await db
      .select({ email: users.email })
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);

    if (!userData) {
      console.log('⚠️  User not found in database');
      return { success: false, error: 'User not found in database' };
    }

    // Delete from database
    await db.delete(users).where(eq(users.id, userId));

    console.log(
      `✅ User ${userData.email} deleted from database (Auth account remains)`
    );
    return { success: true, email: userData.email };
  } catch (error) {
    console.error('❌ Database deletion failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Delete user from Auth only (keeps Database record)
 */
export async function deleteUserFromAuth(userId: string) {
  console.log(`🗑️  Deleting user from Auth only: ${userId}`);

  try {
    // Get user info from Auth first
    const { data: authUser, error: getUserError } =
      await supabase.auth.admin.getUserById(userId);

    if (getUserError) {
      console.log('⚠️  User not found in Auth');
      return { success: false, error: 'User not found in Auth' };
    }

    const email = authUser.user?.email || 'unknown';

    // Delete from Auth
    const { error: authError } = await supabase.auth.admin.deleteUser(userId);

    if (authError) {
      console.error('❌ Failed to delete from Auth:', authError.message);
      return { success: false, error: authError.message };
    }

    console.log(`✅ User ${email} deleted from Auth (Database record remains)`);
    return { success: true, email };
  } catch (error) {
    console.error('❌ Auth deletion failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Check for orphaned records (users in one table but not the other)
 */
export async function findOrphanedRecords() {
  console.log('🔍 Checking for orphaned user records...');

  try {
    // Get all Auth users
    const { data: authUsers, error: authError } =
      await supabase.auth.admin.listUsers();
    if (authError) throw authError;

    // Get all Database users
    const dbUsers = await db
      .select({ id: users.id, email: users.email })
      .from(users);

    const authIds = authUsers.users.map((u) => u.id);
    const dbIds = dbUsers.map((u) => u.id);

    // Find orphaned records
    const orphanedInDb = dbUsers.filter((u) => !authIds.includes(u.id));
    const orphanedInAuth = authUsers.users.filter((u) => !dbIds.includes(u.id));

    console.log('\n📊 Orphaned Records:');
    console.log(`Database records without Auth: ${orphanedInDb.length}`);
    console.log(`Auth records without Database: ${orphanedInAuth.length}`);

    if (orphanedInDb.length > 0) {
      console.log('\n🗃️  Orphaned Database Records:');
      orphanedInDb.forEach((user) => {
        console.log(`   - ${user.email} (${user.id})`);
      });
    }

    if (orphanedInAuth.length > 0) {
      console.log('\n🔐 Orphaned Auth Records:');
      orphanedInAuth.forEach((user) => {
        console.log(`   - ${user.email} (${user.id})`);
      });
    }

    return {
      orphanedInDb,
      orphanedInAuth,
      totalOrphaned: orphanedInDb.length + orphanedInAuth.length,
    };
  } catch (error) {
    console.error('❌ Failed to check orphaned records:', error);
    return { orphanedInDb: [], orphanedInAuth: [], totalOrphaned: 0 };
  }
}

/**
 * Clean up orphaned records
 */
export async function cleanupOrphanedRecords() {
  console.log('🧹 Cleaning up orphaned records...');

  const orphaned = await findOrphanedRecords();

  if (orphaned.totalOrphaned === 0) {
    console.log('✅ No orphaned records found');
    return { success: true, cleaned: 0 };
  }

  let cleaned = 0;

  // Clean up orphaned database records (no corresponding Auth user)
  for (const dbUser of orphaned.orphanedInDb) {
    try {
      await db.delete(users).where(eq(users.id, dbUser.id));
      console.log(`✅ Cleaned orphaned database record: ${dbUser.email}`);
      cleaned++;
    } catch (error) {
      console.warn(
        `⚠️  Failed to clean database record ${dbUser.email}:`,
        error
      );
    }
  }

  // Note: We don't automatically delete orphaned Auth records as they might be intentional
  if (orphaned.orphanedInAuth.length > 0) {
    console.log(
      '\n⚠️  Orphaned Auth records found but not automatically deleted.'
    );
    console.log('   These users can still login but have no database record.');
    console.log('   They will be re-synced automatically when they login.');
  }

  console.log(`✅ Cleanup completed. Cleaned ${cleaned} orphaned records.`);
  return { success: true, cleaned };
}

/**
 * Demonstrate deletion scenarios
 */
export async function demonstrateDeletionScenarios() {
  console.log('🎭 Demonstrating User Deletion Scenarios');
  console.log('==========================================\n');

  console.log('📋 Current Deletion Behavior (Without Database Triggers):');
  console.log('');
  console.log('1. Delete from Supabase Auth:');
  console.log('   ❌ User removed from Auth');
  console.log('   ⚠️  User remains in public.users (orphaned record)');
  console.log('   🔒 User cannot login anymore');
  console.log('   📊 Database record becomes stale');
  console.log('');
  console.log('2. Delete from public.users table:');
  console.log('   ❌ User removed from database');
  console.log('   ⚠️  User remains in Supabase Auth');
  console.log('   🔓 User can still login');
  console.log('   💥 App may break (no database record)');
  console.log('');
  console.log('📋 Ideal Behavior (With Database Triggers):');
  console.log('');
  console.log('1. Delete from Supabase Auth:');
  console.log('   ❌ User removed from Auth');
  console.log('   ✅ Trigger automatically removes from public.users');
  console.log('   🔒 User cannot login');
  console.log('   📊 No orphaned records');
  console.log('');
  console.log('2. Delete from public.users table:');
  console.log('   ❌ User removed from database');
  console.log('   ⚠️  User remains in Supabase Auth');
  console.log('   🔓 User can login but gets re-synced');
  console.log('   🔄 User record recreated on next login');
  console.log('');
  console.log('🛠️  Available Management Functions:');
  console.log(
    '   - deleteUserCompletely(): Remove from both Auth and Database'
  );
  console.log('   - deleteUserFromDatabase(): Remove from Database only');
  console.log('   - deleteUserFromAuth(): Remove from Auth only');
  console.log('   - findOrphanedRecords(): Check for sync issues');
  console.log('   - cleanupOrphanedRecords(): Fix orphaned records');
}

// CLI interface
async function main() {
  const command = process.argv[2];
  const userId = process.argv[3];

  switch (command) {
    case 'demo':
      await demonstrateDeletionScenarios();
      break;
    case 'orphaned':
      await findOrphanedRecords();
      break;
    case 'cleanup':
      await cleanupOrphanedRecords();
      break;
    case 'delete-complete':
      if (!userId) {
        console.error('❌ User ID required');
        process.exit(1);
      }
      await deleteUserCompletely(userId);
      break;
    case 'delete-db':
      if (!userId) {
        console.error('❌ User ID required');
        process.exit(1);
      }
      await deleteUserFromDatabase(userId);
      break;
    case 'delete-auth':
      if (!userId) {
        console.error('❌ User ID required');
        process.exit(1);
      }
      await deleteUserFromAuth(userId);
      break;
    default:
      console.log('🔧 User Management Commands:');
      console.log('  demo                    - Show deletion scenarios');
      console.log('  orphaned               - Check for orphaned records');
      console.log('  cleanup                - Clean up orphaned records');
      console.log('  delete-complete <id>   - Delete user completely');
      console.log('  delete-db <id>         - Delete from database only');
      console.log('  delete-auth <id>       - Delete from auth only');
  }
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('❌ Command failed:', error);
      process.exit(1);
    });
}
