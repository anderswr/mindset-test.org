'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { getDictionary, getResultBucket, type Locale } from '../../../lib/dictionary';

function buildShareUrl(path: string, text: string) {
  const encodedUrl = encodeURIComponent(path);
  const encodedText = encodeURIComponent(text);

  return {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
  };
}

export default function ResultClient({ locale }: { locale: Locale }) {
  const searchParams = useSearchParams();
  const dict = getDictionary(locale);

  const score = Number(searchParams.get('score') ?? 0);
  const bucket = useMemo(() => getResultBucket(score, locale), [score, locale]);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareLinks = buildShareUrl(shareUrl, bucket.title);

  return (
    <main className="result-page">
      <header className="result-page__header">
        <div>
          <p className="eyebrow">{dict.landing.eyebrow}</p>
          <h1>{dict.results.title}</h1>
          <p className="lead">{dict.results.learnMore}</p>
        </div>
        <Link href={`/${locale}/quiz`} className="button button--ghost">
          {dict.results.retake}
        </Link>
      </header>

      <section className="card result-card">
        <div className="result-card__score">
          <div className="score-circle">
            <span className="score-circle__label">{score}</span>
            <span className="score-circle__sub">{dict.results.scoreUnit}</span>
          </div>
          <div>
            <p className="pill pill--muted">{bucket.range}</p>
            <h2>{bucket.title}</h2>
            <p>{bucket.summary}</p>
            <p className="hint">{bucket.advice}</p>
          </div>
        </div>

        <div className="share">
          <div className="share__header">
            <div>
              <p className="eyebrow">{dict.results.shareHeading}</p>
              <p className="lead">{dict.results.shareCopy}</p>
            </div>
            <button
              type="button"
              className="button button--ghost"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: bucket.title, url: shareUrl });
                } else if (navigator.clipboard && shareUrl) {
                  navigator.clipboard.writeText(shareUrl);
                }
              }}
            >
              {dict.results.shareAction}
            </button>
          </div>
          <div className="share__links">
            {dict.results.shareNetworks.map((network) => (
              <a
                key={network.id}
                className="button button--primary"
                href={shareLinks[network.id]}
                target="_blank"
                rel="noreferrer"
              >
                {network.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="page-footer">
        <Link href={`/${locale}/quiz`} className="button button--ghost">
          {dict.results.restart}
        </Link>
      </footer>
    </main>
  );
}
