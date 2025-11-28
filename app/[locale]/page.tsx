import Link from 'next/link';
import { getDictionary, locales, type Locale } from '../../lib/dictionary';

export default function Page({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);

  return (
    <main>
      <header className="hero">
        <div className="hero__eyebrow">{dict.landing.eyebrow}</div>
        <h1>{dict.landing.title}</h1>
        <p className="lead">{dict.landing.lead}</p>
        <div className="hero__actions">
          <Link href={`/${params.locale}/quiz`} className="button button--primary">
            {dict.landing.cta}
          </Link>
          <a className="button button--ghost" href="#metodologia">
            {dict.landing.secondaryCta}
          </a>
        </div>
      </header>

      <section className="card highlights">
        <div className="highlights__list">
          {dict.landing.highlights.map((item) => (
            <div key={item} className="pill">
              {item}
            </div>
          ))}
        </div>
        <div className="language-switch" aria-label={dict.landing.languageLabel}>
          {locales.map((locale) => (
            <Link key={locale} href={`/${locale}`}>
              <span className={`language-chip ${locale === params.locale ? 'is-active' : ''}`}>
                {locale.toUpperCase()}
              </span>
            </Link>
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
          <Link href={`/${params.locale}/quiz`} className="button button--primary">
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
