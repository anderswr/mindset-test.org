import { NextResponse } from 'next/server';

const globalState = globalThis as typeof globalThis & { __completionCount?: number };

function getCount() {
  if (typeof globalState.__completionCount !== 'number') {
    globalState.__completionCount = 0;
  }
  return globalState.__completionCount;
}

export async function GET() {
  return NextResponse.json({ count: getCount() });
}

export async function POST() {
  const current = getCount();
  globalState.__completionCount = current + 1;
  return NextResponse.json({ count: globalState.__completionCount });
}
