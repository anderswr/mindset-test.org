import { getDictionary, type Locale } from '../../../lib/dictionary';

export default function PrivacyPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  const page = dict.privacy;

  return (
    <main className="static-page">
      <header className="static-page__header">
        <p className="eyebrow">{dict.landing.eyebrow}</p>
        <h1>{page.title}</h1>
        <p className="lead">{page.intro}</p>
      </header>

      <section className="card static-page__body">
        {page.sections.map((section) => (
          <div key={section.title} className="static-section">
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
}
