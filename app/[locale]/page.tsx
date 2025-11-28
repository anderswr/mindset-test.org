import Link from 'next/link';
import { getDictionary, type Locale } from '../../lib/dictionary';

export default async function Page({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const participantCount = new Intl.NumberFormat(
    locale === 'pt' ? 'pt-BR' : locale === 'no' ? 'nb-NO' : 'en-US'
  ).format(48231);

  return (
    <main>
      <header className="hero">
        <div className="hero__eyebrow">{dict.landing.eyebrow}</div>
        <h1>{dict.landing.title}</h1>
        <p className="lead">{dict.landing.lead}</p>
        <div className="hero__actions">
          <Link href={`/${locale}/quiz`} className="button button--primary">
            {dict.landing.cta}
          </Link>
          <a className="button button--ghost" href="#metodologia">
            {dict.landing.secondaryCta}
          </a>
        </div>
        <p className="pill pill--muted hero__count">{dict.landing.takerCountLabel(participantCount)}</p>
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
        <div className="methodology__cta">
          <Link href={`/${locale}/quiz`} className="button button--primary">
            {dict.landing.methodologyCta}
          </Link>
        </div>
      </section>

      <footer className="page-footer">
        <span>✨</span>
        <span>{dict.landing.footer}</span>
      </footer>
    </main>
  );
}
