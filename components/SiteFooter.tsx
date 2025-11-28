'use client';

import Link from 'next/link';

import { type Dictionary, type Locale } from '../lib/dictionary';

type Props = {
  locale: Locale;
  footer: Dictionary['footer'];
};

export default function SiteFooter({ locale, footer }: Props) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>{footer.copyright}</div>
        <nav className="footer-nav">
          <Link href={`/${locale}/about`}>{footer.aboutLink}</Link>
        </nav>
      </div>
    </footer>
  );
}
