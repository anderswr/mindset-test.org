import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from './lib/dictionary';

const PUBLIC_FILE = /\.(.*)$/;

function hasLocale(pathname: string) {
  const segment = pathname.split('/')[1];
  return locales.includes(segment as any);
}

function getPreferredLocale(request: NextRequest) {
  const header = request.headers.get('accept-language') ?? '';
  const preferences = header.split(',').map((part) => part.split(';')[0].trim().toLowerCase());

  for (const pref of preferences) {
    if (locales.includes(pref as any)) return pref as any;
    const base = pref.split('-')[0];
    if (locales.includes(base as any)) return base as any;
  }

  return defaultLocale();
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
    const best = getPreferredLocale(request);
    url.pathname = `/${best}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|.*\..*).*)']
};
