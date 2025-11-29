import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const globalState = globalThis as typeof globalThis & { __completionCount?: number };

function currentCount(seed = 0) {
  if (typeof globalState.__completionCount !== 'number') {
    globalState.__completionCount = seed;
  }
  return globalState.__completionCount;
}

export async function GET() {
  const cookieStore = await cookies();
  const cookieCount = Number(cookieStore.get('mindset-count')?.value ?? 0) || 0;
  const count = Math.max(currentCount(cookieCount), cookieCount);
  const res = NextResponse.json({ count });
  res.cookies.set('mindset-count', String(count), { path: '/', maxAge: 60 * 60 * 24 * 30 });
  return res;
}

export async function POST() {
  const cookieStore = await cookies();
  const cookieCount = Number(cookieStore.get('mindset-count')?.value ?? 0) || 0;
  const nextValue = Math.max(currentCount(cookieCount), cookieCount) + 1;
  globalState.__completionCount = nextValue;
  const count = nextValue;
  const res = NextResponse.json({ count });
  res.cookies.set('mindset-count', String(count), { path: '/', maxAge: 60 * 60 * 24 * 30 });
  return res;
}
