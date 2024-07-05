import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('jsonwebtoken')?.value;

  if (!token && request.nextUrl.pathname.startsWith('/profile')) {
    return Response.redirect(new URL('/?auth=true', request.url));
  }

  if (!token && request.nextUrl.pathname.startsWith('/activity')) {
    return Response.redirect(new URL('/?auth=true', request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
};
