import { Suspense } from 'react';

import QuizClient from './QuizClient';
import { type Locale } from '../../../lib/dictionary';

export default async function QuizPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return (
    <Suspense>
      <QuizClient locale={locale} />
    </Suspense>
  );
}
