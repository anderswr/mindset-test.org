import type React from 'react';

import { getDictionary, type Locale } from '../../../lib/dictionary';

const LINK_REGEX = /(https?:\/\/[^\s)]+|www\.[^\s)]+)/g;

function renderParagraph(paragraph: string) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = LINK_REGEX.exec(paragraph)) !== null) {
    const [raw] = match;
    const start = match.index;
    if (start > lastIndex) parts.push(paragraph.slice(lastIndex, start));

    const cleanUrl = raw.replace(/[.,]$/, '');
    const suffix = raw.slice(cleanUrl.length);
    const href = cleanUrl.startsWith('http') ? cleanUrl : `https://${cleanUrl}`;

    parts.push(
      <a key={`${cleanUrl}-${start}`} href={href} target="_blank" rel="noreferrer">
        {cleanUrl}
      </a>
    );
    if (suffix) parts.push(suffix);

    lastIndex = match.index + raw.length;
  }

  if (lastIndex < paragraph.length) parts.push(paragraph.slice(lastIndex));

  return <p key={paragraph}>{parts}</p>;
}

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const page = dict.about;

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
            {section.body.map((paragraph) => renderParagraph(paragraph))}
          </div>
        ))}
      </section>
    </main>
  );
}
