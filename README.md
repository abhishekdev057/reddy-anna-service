# Reddy Anna Connect

Production-ready marketing website for Reddy Anna Connect, an informational and customer-support destination for non-money digital entertainment and community services.

## Stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4 with a custom design system
- `next/font` using Manrope and Inter

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Environment variables

No environment variables are required for local development. In production, set this optional variable to the final public origin so canonical, social and sitemap URLs are exact:

```bash
NEXT_PUBLIC_SITE_URL=https://your-production-domain.example
```

## Vercel deployment

The project uses standard Next.js conventions and needs no custom build configuration. From a Vercel-authenticated environment:

```bash
vercel deploy --prod -y
```

Set `NEXT_PUBLIC_SITE_URL` in Vercel if the production URL differs from `https://reddy-anna-connect.vercel.app`.

## Repository

`git@github.com:abhishekdev057/reddy-anna-service.git`

## Content and compliance

The website is intentionally limited to truthful information, non-money digital entertainment, community and support. It contains no wagering, payments, deposits, withdrawals, monetary prizes, gambling IDs, cloaking, conditional redirects or fabricated social proof.
