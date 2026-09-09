# COCHIN INTERIOR

Production website foundation for COCHIN INTERIOR, built with Next.js, TypeScript and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run lint
npm run typecheck
npm run build
```

## Environment configuration

Copy `.env.example` to `.env.local` when configuration values are ready. Do not commit `.env.local`.

The contact form will be implemented in a later phase. The recommended delivery service is Resend: create a Resend account, verify the `cochininterior.in` sending domain, and provide `RESEND_API_KEY` only through the Vercel environment-variable settings. The key remains server-side and is never exposed to the browser.

Google Analytics and Google Search Console are deliberately not enabled until their real IDs are supplied. The documented optional variables are available in `.env.example`.

## Deployment and domain

Deploy the repository in Vercel, set the production domain to `cochininterior.in`, and add `www.cochininterior.in` as a redirect domain pointing to the apex domain. Keep GoDaddy as the registrar; update DNS records in GoDaddy as directed by Vercel after the Vercel project is created.

## Content policy

Only genuine COCHIN INTERIOR project work may be added to the project archive. Inspiration imagery must include source metadata and must never be represented as company work. Company claims, testimonials, credentials, and technical specifications must be supplied and verified before publication.
