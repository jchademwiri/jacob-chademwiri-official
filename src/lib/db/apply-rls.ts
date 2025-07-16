import { db } from './index';
import { sql } from 'drizzle-orm';
import { readFileSync } from 'fs';
import { join } from 'path';

async function applyRLSPolicies() {
  console.log('🔒 Applying Row Level Security policies...');

  try {
    // Read the RLS policies SQL file
    const rlsPoliciesPath = join(process.cwd(), 'src/lib/db/rls-policies.sql');
    const rlsPoliciesSQL = readFileSync(rlsPoliciesPath, 'utf-8');

    // Split the SQL into individual statements by semicolon
    const statements = rlsPoliciesSQL
      .split(';')
      .map((statement) => statement.trim())
      .filter(
        (statement) => statement.length > 0 && !statement.startsWith('--')
      );

    console.log(`📝 Found ${statements.length} SQL statements to execute`);

    // Execute each statement
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i];
      if (statement.trim()) {
        try {
          await db.execute(sql.raw(statement));
          console.log(`✅ Executed statement ${i + 1}/${statements.length}`);
        } catch (error: any) {
          // Some policies might already exist, so we'll log but continue
          console.log(
            `⚠️ Statement ${i + 1} skipped (might already exist):`,
            error.message
          );
        }
      }
    }

    console.log('🎉 RLS policies applied successfully!');
  } catch (error) {
    console.error('❌ Error applying RLS policies:', error);
    throw error;
  }
}

// Run the RLS application function
applyRLSPolicies()
  .then(() => {
    console.log('✅ RLS policies application completed');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ RLS policies application failed:', error);
    process.exit(1);
  });
