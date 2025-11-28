'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';

import { languageMeta, locales, type Dictionary, type Locale } from '../lib/dictionary';

type HeaderCopy = {
  title: string;
  navigation: Dictionary['navigation'];
  languageLabel: string;
};

type Props = {
  locale: Locale;
  copy: HeaderCopy;
};

function replaceLocale(pathname: string, next: Locale) {
  if (!pathname) return `/${next}`;
  const segments = pathname.split('/');
  segments[1] = next;
  const target = segments.join('/') || `/${next}`;
  return target.replace(/\/+$/, '') || `/${next}`;
}

export default function SiteHeader({ locale, copy }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems = useMemo(
    () => [
      { href: `/${locale}/quiz`, label: copy.navigation.quiz },
      { href: `/${locale}/test-info`, label: copy.navigation.testInfo },
      { href: `/${locale}/about`, label: copy.navigation.about }
    ],
    [copy.navigation.about, copy.navigation.quiz, copy.navigation.testInfo, locale]
  );

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleEsc(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const currentLanguage = languageMeta[locale];

  function onLocaleChange(nextLocale: Locale) {
    if (!pathname) return;
    const target = replaceLocale(pathname, nextLocale);
    setOpen(false);
    router.push(target);
  }

  return (
    <header className="site-header">
      <div className="site-header__left">
        <Link href={`/${locale}`} className="brand" aria-label={copy.title}>
          <span className="brand__dot" />
          <span>Mindset</span>
        </Link>
        <nav className="top-nav__links" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href || pathname?.startsWith(`${item.href}/`) ? 'is-active' : ''}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="site-header__right" ref={menuRef}>
        <button
          type="button"
          className="lang-select"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-label={copy.languageLabel}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden>{currentLanguage.flag}</span>
          <span className="lang-select__label">{currentLanguage.label}</span>
          <span className="lang-select__caret" aria-hidden>▾</span>
        </button>
        {open && (
          <div className="lang-menu" role="menu">
            {locales.map((code) => (
              <button
                key={code}
                type="button"
                role="menuitemradio"
                aria-checked={code === locale}
                className={`lang-item ${code === locale ? 'is-active' : ''}`}
                onClick={() => onLocaleChange(code)}
              >
                <span aria-hidden>{languageMeta[code].flag}</span>
                <span className="lang-item__label">{languageMeta[code].label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
