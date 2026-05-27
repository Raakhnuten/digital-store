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
