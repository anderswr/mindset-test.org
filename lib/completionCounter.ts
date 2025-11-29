const COOKIE_KEY = 'mindset-count';
const STORAGE_KEY = 'mindset-count-total';

function parseCookieCount(): number {
  if (typeof document === 'undefined') return 0;
  const match = document.cookie.match(new RegExp(`${COOKIE_KEY}=([^;]+)`));
  if (!match) return 0;
  const value = Number(decodeURIComponent(match[1]));
  return Number.isFinite(value) ? value : 0;
}

function writeCookie(count: number) {
  if (typeof document === 'undefined') return;
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${COOKIE_KEY}=${count}; path=/; max-age=${maxAge}`;
}

export function readCompletionCount(): number {
  if (typeof window === 'undefined') return 0;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return Number(stored) || 0;
  } catch {}

  return parseCookieCount();
}

export function incrementCompletionCount(): number {
  if (typeof window === 'undefined') return 0;

  const next = readCompletionCount() + 1;

  try {
    localStorage.setItem(STORAGE_KEY, String(next));
  } catch {}

  writeCookie(next);
  window.dispatchEvent(new CustomEvent('mindset-count-updated', { detail: next }));
  return next;
}
