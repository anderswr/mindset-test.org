import type { Metadata } from 'next';
import ResultClient from './ResultClient';
import { getDictionary, getResultBucket, type Locale } from '../../../lib/dictionary';

export async function generateMetadata({
  params,
  searchParams
}: {
  params: { locale: Locale };
  searchParams: { score?: string };
}): Promise<Metadata> {
  const dict = getDictionary(params.locale);
  const score = Number(searchParams?.score ?? 0);
  const bucket = getResultBucket(score, params.locale);

  const title = `${dict.meta.title} — ${bucket.title}`;
  const description = bucket.summary;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/${params.locale}/result?score=${score}`
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image'
    }
  };
}

export default function Page({ params }: { params: { locale: Locale } }) {
  return <ResultClient locale={params.locale} />;
}
