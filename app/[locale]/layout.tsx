import type { Metadata } from 'next';
import { getDictionary, locales, type Locale } from '../../lib/dictionary';

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
  children
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return children;
}
