# mindset-test.org

Mindset test (Fixed vs Growth) inspired by Carol S. Dweck’s book “Mindset”. Built with Next.js App Router, ready for Vercel, and fully localized with copy stored in one language file.

## What’s included
- Landing page patterned after sleep-test.org with a clear start CTA and language chips.
- Six-point Likert questionnaire with reverse scoring baked in and a progress bar that mirrors the sleep-test experience.
- Professional results page with share-ready metadata and social links.
- All visible text, questions, and ranges live in `lib/dictionary.ts` for easy editing from the locale dropdown.

## Run locally
1. Install dependencies and start the dev server:
   ```bash
   npm install
   npm run dev
   ```
2. Open `http://localhost:3000/` (middleware redirects to the default `en` locale). Switch locales via the chips on the landing page.

## Deploy to Vercel
1. Import the repository into Vercel and choose **Next.js**.
2. Build command: `npm run build` (Vercel runs `npm install` automatically).
3. Output directory: `.next`.
4. i18n is configured with locales `en`, `no`, and `pt` in `next.config.mjs`, defaulting to `en`.

## Customization
- Copy, questions, Likert labels, and result ranges live in `lib/dictionary.ts` for `en`, `no`, and `pt`.
- Global styling for landing, questionnaire, and results is in `app/globals.css`.
- Primary routes:
  - `/[locale]`: landing
  - `/[locale]/quiz`: questionnaire
  - `/[locale]/result`: results page (uses `score` in the query string)
