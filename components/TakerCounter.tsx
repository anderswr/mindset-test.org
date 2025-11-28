'use client';

import { useEffect, useState } from 'react';

import { type Locale } from '../lib/dictionary';

type Props = {
  locale: Locale;
  formatLabel: string;
};

export default function TakerCounter({ locale, formatLabel }: Props) {
  const [count, setCount] = useState<number>(() => {
    try {
      const cached = localStorage.getItem('mindset-counter');
      if (cached) return Number(cached) || 0;
    } catch {}
    return 0;
  });

  useEffect(() => {
    let isMounted = true;
    setCount((prev) => prev || 0);
    fetch('/api/completions', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;
        const next = typeof data.count === 'number' ? data.count : 0;
        setCount(next);
        try {
          localStorage.setItem('mindset-counter', String(next));
        } catch {}
      })
      .catch(() => {
        if (isMounted) setCount(0);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const formatter = new Intl.NumberFormat(locale === 'pt' ? 'pt-BR' : locale === 'no' ? 'nb-NO' : 'en-US');
  const formatted = formatter.format(count);
  const label = formatLabel.replace('{count}', formatted);

  return <span>{label}</span>;
}
