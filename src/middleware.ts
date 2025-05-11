import { type NextRequest } from 'next/server';
import { updateSession } from './lib/middleware';

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: ['/protected/:path*', '/admin/:path*', '/dashboard/:path*'], // Only match /protected, /admin, and /dashboard and anything inside them
};
