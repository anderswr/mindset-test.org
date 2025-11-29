'use client';

import { useEffect, useState } from 'react';

import { readCompletionCount } from '../lib/completionCounter';
import { type Locale } from '../lib/dictionary';

type Props = {
  locale: Locale;
  formatLabel: string;
};

export default function TakerCounter({ locale, formatLabel }: Props) {
  const [count, setCount] = useState<number>(() => readCompletionCount());

  useEffect(() => {
    function syncFromStorage() {
      setCount(readCompletionCount());
    }

    syncFromStorage();

    const onUpdate = (event: Event) => {
      const detail = (event as CustomEvent<number>).detail;
      if (typeof detail === 'number') setCount(detail);
    };

    window.addEventListener('storage', syncFromStorage);
    window.addEventListener('mindset-count-updated', onUpdate as EventListener);

    return () => {
      window.removeEventListener('storage', syncFromStorage);
      window.removeEventListener('mindset-count-updated', onUpdate as EventListener);
    };
  }, []);

  const formatter = new Intl.NumberFormat(locale === 'pt' ? 'pt-BR' : locale === 'no' ? 'nb-NO' : 'en-US');
  const formatted = formatter.format(count);
  const label = formatLabel.replace('{count}', formatted);

  return <span>{label}</span>;
}
