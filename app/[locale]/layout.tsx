import Link from 'next/link';
import type { Metadata } from 'next';
import { getDictionary, languageMeta, locales, type Locale } from '../../lib/dictionary';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = getDictionary(params.locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description
    }
  };
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const dict = getDictionary(params.locale);
  const locale = params.locale;

  return (
    <div className="app-shell">
      <header className="top-nav">
        <div className="top-nav__left">
          <Link href={`/${locale}`} className="brand">
            <span className="brand__dot" />
            <span>Mindset</span>
          </Link>
          <nav className="top-nav__links" aria-label="Primary">
            <Link href={`/${locale}`}>{dict.navigation.home}</Link>
            <Link href={`/${locale}/quiz`}>{dict.navigation.quiz}</Link>
            <Link href={`/${locale}/about`}>{dict.navigation.about}</Link>
            <Link href={`/${locale}/test-info`}>{dict.navigation.testInfo}</Link>
            <Link href={`/${locale}/privacy`}>{dict.navigation.privacy}</Link>
          </nav>
        </div>
        <div className="top-nav__right">
          <div className="language-menu" aria-label={dict.landing.languageLabel}>
            {locales.map((entry) => (
              <Link key={entry} href={`/${entry}`} className={`language-pill ${entry === locale ? 'is-active' : ''}`}>
                <span aria-hidden>{languageMeta[entry].flag}</span>
                <span>{languageMeta[entry].label}</span>
              </Link>
            ))}
          </div>
          <Link href={`/${locale}/quiz`} className="button button--primary">
            {dict.navigation.quiz}
          </Link>
        </div>
      </header>

      <div className="page-body">{children}</div>
    </div>
  );
}
