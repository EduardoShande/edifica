# El Motor de Clientes: Edifica Construcciones

Phase 1 of the construction-company system: a **premium Spanish portfolio website
with lead capture**, designed to convert the referral and sign traffic that
currently finds *nothing* when it searches for the business online.

It's the spine everything else plugs into later (CRM, quoting, reviews, ads).

## The lead loop

```
Referral / Sign / Google
      ↓
Portfolio website (this app)
      ↓
WhatsApp button  ── or ──  Lead form → /api/leads
                                          ↓
                          LEAD_WEBHOOK_URL (n8n)
                                          ↓
                        store in DB + WhatsApp notify Dad & Eduardo
```

Two capture paths on purpose:
- **WhatsApp click-to-chat**: instant, zero backend, Dad already lives there.
- **Lead form**: captures data even outside WhatsApp; forwarded to automation.

## Configure (start here)

Almost everything is driven from one file: [`lib/site.ts`](lib/site.ts).
Edit it to set the real:
- **brand name** (currently the placeholder `Guerrero Construcciones`)
- **WhatsApp number** (`whatsapp`, digits only, e.g. `5917xxxxxxx`)
- phone, email, city, years of experience
- **services** and **portfolio projects**

For real project photos: drop images in `public/portfolio/` and set each
project's `image` path in `lib/site.ts` (e.g. `/portfolio/casa-norte.jpg`).

Automation webhook: copy `.env.example` → `.env.local` and set `LEAD_WEBHOOK_URL`
to your n8n webhook when ready. Until then the form still works and logs leads
to the server console.

## Run

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Deploy

Built for Vercel (free tier): push to a Git repo, import in Vercel, set
`LEAD_WEBHOOK_URL` as an environment variable, add a custom domain.

## Roadmap

- **Phase 1 (this):** portfolio site + lead capture + WhatsApp notify ✅
- **Phase 2:** internal mini-CRM (pipeline: new → visited → quoted → won/lost)
- **Phase 3:** quote/PDF generator + automated review requests
- **Parallel:** Google Business Profile (free, high impact for local trust)

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4.
