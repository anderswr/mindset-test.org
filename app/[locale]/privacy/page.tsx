import { redirect } from 'next/navigation';
import { type Locale } from '../../../lib/dictionary';

export default async function PrivacyPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/about`);
}
