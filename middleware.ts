import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from './lib/dictionary';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname, locale: requestLocale } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const locale = locales.includes(requestLocale as any) ? requestLocale : defaultLocale();

  if (pathname === '/' || pathname === '') {
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return NextResponse.next();
}
