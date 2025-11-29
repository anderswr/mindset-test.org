import Link from 'next/link';
import { headers } from 'next/headers';
import { getDictionary, type Locale } from '../../lib/dictionary';
import TakerCounter from '../../components/TakerCounter';

async function fetchInitialCount() {
  try {
    const headerStore = await headers();
    const host = headerStore.get('x-forwarded-host') ?? headerStore.get('host');
    if (!host) return undefined;
    const proto = headerStore.get('x-forwarded-proto') ?? 'https';
    const res = await fetch(`${proto}://${host}/api/completions`, { cache: 'no-store' });
    if (!res.ok) return undefined;
    const data = (await res.json()) as { count?: number };
    return typeof data.count === 'number' ? data.count : undefined;
  } catch {
    return undefined;
  }
}

export default async function Page({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const initialCount = await fetchInitialCount();

  return (
    <main>
      <header className="hero">
        <div className="hero__eyebrow">{dict.landing.eyebrow}</div>
        <h1>{dict.landing.title}</h1>
        <div className="hero__actions hero__actions--center">
          <Link href={`/${locale}/quiz?reset=1`} className="button button--primary">
            {dict.landing.cta}
          </Link>
        </div>
        <p className="pill pill--muted hero__count">
          <TakerCounter
            locale={locale}
            formatLabel={dict.landing.takerCountLabel}
            initialCount={initialCount}
          />
        </p>
      </header>

      <section className="card highlights">
        <p className="lead">{dict.landing.lead}</p>
      </section>

      <section id="metodologia" className="card methodology">
        <div>
          <h2>{dict.landing.methodologyTitle}</h2>
          {dict.landing.methodologyBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="methodology__cta" />
      </section>

    </main>
  );
}
