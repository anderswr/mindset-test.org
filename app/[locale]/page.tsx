import Link from 'next/link';
import { getDictionary, type Locale } from '../../lib/dictionary';
import TakerCounter from '../../components/TakerCounter';

export default async function Page({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <main>
      <header className="hero">
        <div className="hero__eyebrow">{dict.landing.eyebrow}</div>
        <h1>{dict.landing.title}</h1>
        <p className="lead">{dict.landing.lead}</p>
        <div className="hero__actions hero__actions--center">
          <Link href={`/${locale}/quiz?reset=1`} className="button button--primary">
            {dict.landing.cta}
          </Link>
        </div>
        <p className="pill pill--muted hero__count">
          <TakerCounter locale={locale} formatLabel={dict.landing.takerCountLabel} />
        </p>
      </header>

      <section className="card highlights">
        <div className="highlights__list">
          {dict.landing.highlights.map((item) => (
            <div key={item} className="pill">
              {item}
            </div>
          ))}
        </div>
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

      <footer className="page-footer">
        <span>✨</span>
        <span>{dict.landing.footer}</span>
      </footer>
    </main>
  );
}
