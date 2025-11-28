import { getDictionary, type Locale } from '../../../lib/dictionary';

export default async function TestInfoPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const page = dict.testInfo;

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
