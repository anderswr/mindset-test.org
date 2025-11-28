'use client';

import { useEffect, useState } from 'react';

import { type Locale } from '../lib/dictionary';

type Props = {
  locale: Locale;
  formatLabel: string;
};

export default function TakerCounter({ locale, formatLabel }: Props) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;
    fetch('/api/completions', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;
        setCount(typeof data.count === 'number' ? data.count : 0);
      })
      .catch(() => {
        if (isMounted) setCount(0);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const formatter = new Intl.NumberFormat(locale === 'pt' ? 'pt-BR' : locale === 'no' ? 'nb-NO' : 'en-US');
  const formatted = count === null ? '…' : formatter.format(count);
  const label = formatLabel.replace('{count}', formatted);

  return <span>{label}</span>;
}
