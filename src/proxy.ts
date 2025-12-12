import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export function proxy(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url));
}
export const config = {
  matcher: ['/protected/:path*', '/admin/:path*', '/dashboard/:path*'], // Only match /protected, /admin, and /dashboard and anything
};
