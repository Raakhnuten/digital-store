# BlueCart Digital Store (MVP)

A responsive digital product ecommerce MVP built with **Next.js App Router + TypeScript + Tailwind CSS + Supabase**.

## Features
- Homepage: announcement bar, header/search/login, hero, category pills, product grid, footer
- Product card: image, category, name, description, price/old price, stock status, buy button
- Product detail page with checkout placeholders
- Admin dashboard (MVP UI) for product and order management
- Supabase SQL schema for categories, products, orders, admin users
- Seed products: CapCut, Canva, Spotify, Netflix, Telegram Premium, Windows License, AI tools

## Setup
1. Install dependencies
   ```bash
   npm install
   ```
2. Copy env file
   ```bash
   cp .env.example .env.local
   ```
3. Add your Supabase and Stripe placeholder keys.
4. Run the app
   ```bash
   npm run dev
   ```

## Deploy to GitHub Pages
This repo now includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

1. Push this repo to GitHub.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Source: GitHub Actions**.
4. Push to your default branch (`main`, `master`, or `work`) or run the workflow manually in **Actions**.
5. After deploy, your site will be available on `https://<your-username>.github.io/<repo-name>/`.

> Notes:
> - `next.config.mjs` is configured for static export (`output: 'export'`) so GitHub Pages can host it.
> - The current admin/auth/payment features are MVP placeholders and should be connected to real Supabase/Stripe backends for production.

## Database (Supabase)
- Run `supabase/schema.sql` in Supabase SQL editor.
- Add Row Level Security and policies based on your auth model.

## Payment integration notes
- `app/products/[id]/page.tsx` has placeholders for:
  - Stripe checkout flow
  - Manual payment / KHQR flow

## Suggested file structure
- `app/` routes and pages
- `components/` reusable UI
- `lib/` utilities, types, seed data
- `supabase/schema.sql` database schema and seed categories
