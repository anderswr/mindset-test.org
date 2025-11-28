import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from './lib/dictionary';

const PUBLIC_FILE = /\.(.*)$/;

function hasLocale(pathname: string) {
  const segment = pathname.split('/')[1];
  return locales.includes(segment as any);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (!hasLocale(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale()}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|.*\..*).*)']
};
