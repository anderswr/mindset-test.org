import { redirect } from 'next/navigation';
import { defaultLocale } from '../lib/dictionary';

export default function Home() {
  redirect(`/${defaultLocale()}`);
}
