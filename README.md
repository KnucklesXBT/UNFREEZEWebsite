# UNFREEZEWebsite

Tiny, production-ready Next.js website (App Router + TypeScript) with the public pages typically required for App Store review: Home, Support, Privacy Policy, and Terms of Use.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit placeholders

Update the single config file:

- `src/config/site.ts`

## Deploy to Vercel

### Via Vercel dashboard
1. Push this repo to GitHub.
2. In Vercel: **Add New → Project → Import Git Repository**.
3. Framework preset: **Next.js**.
4. Deploy.

### Via Vercel CLI
```bash
npm i -g vercel
vercel
vercel --prod
```

## Custom domain
1. In Vercel project settings: **Domains → Add** your domain.
2. Follow Vercel’s prompts to add DNS records at your registrar (commonly an `A` record for the apex and a `CNAME` for `www`).

