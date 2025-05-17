// app/api/keep-alive/route.ts

import { NextResponse } from 'next/server';
import { pingDatabase } from '@/lib/db';

export async function GET() {
  try {
    const result = await pingDatabase();
    
    if (result.success) {
      return NextResponse.json(
        { status: 'ok', message: 'Database ping successful' },
        { status: 200 }
      );
    } else {
      console.error('Database ping failed:', result.error);
      return NextResponse.json(
        { status: 'error', message: 'Failed to ping database' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Server error' },
      { status: 500 }
    );
  }
}