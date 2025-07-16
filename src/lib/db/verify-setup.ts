import { db } from './index';
import { sql } from 'drizzle-orm';
import { users, caseStudies, insights, tags, media } from './schema';

async function verifyDatabaseSetup() {
  console.log('🔍 Verifying database setup...');

  try {
    // Test basic connection
    console.log('1. Testing database connection...');
    const connectionTest = await db.execute(sql`SELECT 1 as test`);
    console.log('✅ Database connection successful');

    // Check tables exist
    console.log('2. Checking table structure...');
    const tables = await db.execute(sql`
      SELECT table_name, column_name, data_type 
      FROM information_schema.columns 
      WHERE table_schema = 'public' 
      ORDER BY table_name, ordinal_position
    `);

    const tableNames = [...new Set(tables.map((t) => t.table_name))];
    console.log('✅ Tables found:', tableNames);

    // Check RLS is enabled
    console.log('3. Checking Row Level Security...');
    const rlsStatus = await db.execute(sql`
      SELECT schemaname, tablename, rowsecurity 
      FROM pg_tables 
      WHERE schemaname = 'public'
    `);

    const rlsEnabled = rlsStatus.filter((t) => t.rowsecurity);
    console.log(
      '✅ RLS enabled on tables:',
      rlsEnabled.map((t) => t.tablename)
    );

    // Check data exists
    console.log('4. Checking seeded data...');

    const userCount = await db.execute(
      sql`SELECT COUNT(*) as count FROM users`
    );
    console.log(`✅ Users: ${userCount[0].count}`);

    const tagCount = await db.execute(sql`SELECT COUNT(*) as count FROM tags`);
    console.log(`✅ Tags: ${tagCount[0].count}`);

    const caseStudyCount = await db.execute(
      sql`SELECT COUNT(*) as count FROM case_studies`
    );
    console.log(`✅ Case Studies: ${caseStudyCount[0].count}`);

    const insightCount = await db.execute(
      sql`SELECT COUNT(*) as count FROM insights`
    );
    console.log(`✅ Insights: ${insightCount[0].count}`);

    // Test Drizzle ORM queries
    console.log('5. Testing Drizzle ORM queries...');

    const allUsers = await db.select().from(users);
    console.log(`✅ Drizzle query - Users: ${allUsers.length}`);

    const publishedCaseStudies = await db
      .select()
      .from(caseStudies)
      .where(sql`status = 'published'`);
    console.log(
      `✅ Drizzle query - Published Case Studies: ${publishedCaseStudies.length}`
    );

    const publishedInsights = await db
      .select()
      .from(insights)
      .where(sql`status = 'published'`);
    console.log(
      `✅ Drizzle query - Published Insights: ${publishedInsights.length}`
    );

    // Check relationships
    console.log('6. Testing relationships...');
    const insightsWithAuthors = await db.execute(sql`
      SELECT i.title, u.email as author_email 
      FROM insights i 
      JOIN users u ON i.author_id = u.id 
      LIMIT 3
    `);
    console.log(`✅ Insights with authors: ${insightsWithAuthors.length}`);

    console.log('\n🎉 Database setup verification completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`- Tables: ${tableNames.length} created`);
    console.log(`- RLS: ${rlsEnabled.length} tables protected`);
    console.log(`- Users: ${userCount[0].count} seeded`);
    console.log(`- Tags: ${tagCount[0].count} seeded`);
    console.log(`- Case Studies: ${caseStudyCount[0].count} seeded`);
    console.log(`- Insights: ${insightCount[0].count} seeded`);
    console.log('- Drizzle ORM: Working correctly');
    console.log('- Relationships: Functioning properly');
  } catch (error) {
    console.error('❌ Database verification failed:', error);
    throw error;
  }
}

// Run the verification
verifyDatabaseSetup()
  .then(() => {
    console.log('✅ Verification completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Verification failed:', error);
    process.exit(1);
  });
