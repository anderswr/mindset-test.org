import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import SiteFooter from '../../components/SiteFooter';
import SiteHeader from '../../components/SiteHeader';
import { getDictionary, locales, type Locale } from '../../lib/dictionary';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <div className="app-shell">
      <SiteHeader
        locale={locale}
        copy={{
          title: dict.meta.title,
          navigation: dict.navigation,
          languageLabel: dict.landing.languageLabel
        }}
      />
      <div className="page-body">{children}</div>
      <SiteFooter locale={locale} footer={dict.footer} />
    </div>
  );
}
