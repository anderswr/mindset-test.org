import type { Metadata } from 'next';
import { Suspense } from 'react';

import ResultClient from './ResultClient';
import { getDictionary, getResultBucket, type Locale } from '../../../lib/dictionary';

export async function generateMetadata({
  params,
  searchParams
}: {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{ score?: string }>;
}): Promise<Metadata> {
  const [{ locale }, { score: rawScore }] = await Promise.all([params, searchParams]);
  const dict = getDictionary(locale);
  const score = Number(rawScore ?? 0);
  const bucket = getResultBucket(score, locale);

  const title = `${dict.meta.title} — ${bucket.title}`;
  const description = bucket.summary;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/${locale}/result?score=${score}`
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image'
    }
  };
}

export default async function Page({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return (
    <Suspense>
      <ResultClient locale={locale} />
    </Suspense>
  );
}
