import { db } from './index';
import { sql } from 'drizzle-orm';

async function testConnection() {
  console.log('🔍 Testing database connection...');

  try {
    // Test basic connection
    const result = await db.execute(sql`SELECT 1 as test`);
    console.log('✅ Database connection successful:', result);

    // Test if tables exist
    const tables = await db.execute(sql`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name
    `);

    console.log(
      '📋 Existing tables:',
      tables.map((t) => t.table_name)
    );
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    throw error;
  }
}

testConnection()
  .then(() => {
    console.log('✅ Connection test completed');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Connection test failed:', error);
    process.exit(1);
  });
