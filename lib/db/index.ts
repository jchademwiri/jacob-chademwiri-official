import 'dotenv/config'

import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL!

// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(connectionString, { prepare: false })
export const db = drizzle(client);




// Ping function to keep connection alive
export async function pingDatabase() {
  try {
    if (!client) {
      throw new Error('Database client not initialized');
    }
    
    await client`SELECT 1`;
    return { success: true };
  } catch (error) {
    console.error('Failed to ping database:', error);
    return { success: false, error };
  }
}



