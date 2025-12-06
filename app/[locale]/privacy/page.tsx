import { redirect } from 'next/navigation';
import { locales, type Locale } from '../../../lib/dictionary';

export default async function PrivacyRedirect({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/about`);
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
