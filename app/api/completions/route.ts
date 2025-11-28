import { NextResponse } from 'next/server';

const COUNT_API_URL = 'https://api.countapi.xyz';
const COUNT_API_FALLBACK_URL = 'https://api.counterapi.dev/v1';
const globalState = globalThis as typeof globalThis & { __completionCount?: number };

function fallbackCount(next?: number) {
  if (typeof globalState.__completionCount !== 'number') {
    globalState.__completionCount = 0;
  }
  if (typeof next === 'number') {
    globalState.__completionCount = next;
  }
  return globalState.__completionCount;
}

async function fetchCount(method: 'get' | 'hit') {
  const namespace = process.env.COUNT_API_NAMESPACE ?? 'mindset-test-org';
  const key = process.env.COUNT_API_KEY ?? 'global';
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3500);

  try {
    const endpoint = `${COUNT_API_URL}/${method}/${namespace}/${key}`;
    const res = await fetch(endpoint, { signal: controller.signal, cache: 'no-store' });
    if (res.ok) {
      const data = (await res.json()) as { value?: number };
      if (typeof data.value === 'number') return data.value;
    }
  } catch {}

  try {
    const altEndpoint =
      method === 'get'
        ? `${COUNT_API_FALLBACK_URL}/${namespace}/${key}`
        : `${COUNT_API_FALLBACK_URL}/${namespace}/${key}/up`;
    const altRes = await fetch(altEndpoint, { signal: controller.signal, cache: 'no-store' });
    if (altRes.ok) {
      const data = (await altRes.json()) as { count?: number };
      if (typeof data.count === 'number') return data.count;
    }
  } finally {
    clearTimeout(timeout);
  }
  return undefined;
}

export async function GET() {
  const value = await fetchCount('get');
  return NextResponse.json({ count: fallbackCount(value) });
}

export async function POST() {
  const value = await fetchCount('hit');
  return NextResponse.json({ count: fallbackCount(value ?? fallbackCount() + 1) });
}
