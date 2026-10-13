# NexaStore

A polished, responsive product catalog built with the Next.js App Router for the Dev Weekends Full Stack AI Engineering Fellowship — Next.js Fundamentals task.

## Features

- Home page with a hero, featured products, collection categories, and brand story
- Product catalog with live search, category filtering, and sorting
- Dynamic product detail pages and related-product suggestions
- App Router navigation, shared layout, loading/error/not-found UI
- Server Components for data access and page rendering
- Client Component for interactive catalog filters
- SSR on `/products`
- SSG for `/about` and pre-rendered product detail paths
- ISR for product details (60-second revalidation) and home page (300-second revalidation)
- JSON API endpoints for listing products and retrieving one product
- Local SVG artwork displayed with `next/image`
- Tailwind CSS v4 utility layer alongside the custom NexaStore design system
- Responsive layouts, keyboard focus styles, semantic landmarks, and reduced-motion support
- No database, external product API, environment variables, or paid service required

## Styling

Tailwind CSS v4 is configured through `@tailwindcss/postcss` in `postcss.config.mjs` and imported at the top of `app/globals.css`. The project combines Tailwind utilities for interaction states, focus rings, transitions, and small UI refinements with custom CSS for its editorial storefront layout and responsive visual identity. Tailwind v4 uses CSS-first configuration, so a separate `tailwind.config.js` is not required for this setup.

## Requirements

- Node.js 20.9 or newer (Node.js 22 recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

The build command is the key production verification step. The Next.js version is declared in `package.json`; npm resolves a compatible release within the declared major version.

## API endpoints

- `GET /api/products` — returns `{ count, products }`
- `GET /api/products/orbit-watch` — returns `{ product }`
- `GET /api/products/not-a-product` — returns HTTP `404` with `{ error, id }`

Product IDs are listed in `lib/products.js`.

## Rendering strategy

See [`docs/NEXTJS-FUNDAMENTALS.md`](docs/NEXTJS-FUNDAMENTALS.md) for a route-by-route explanation of SSR, SSG, ISR, Server Components, Client Components, Route Handlers, and image optimization.

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected Next.js framework and default build settings.
4. Deploy, then test the live pages and API endpoints.

No environment variables are required for the current local-data implementation.

## Project structure

```text
app/                 App Router pages, layouts, loading/error UI, API handlers
components/           Shared navigation, cards, catalog filters, category links
lib/                  Product dataset and server-side data helpers
public/images/        Local SVG product and promotional artwork
docs/                 Next.js concepts and verification guide
```

## Fellowship checklist

- [x] App Router navigation and dynamic product routes implemented
- [x] Server Component and Client Component implemented
- [x] SSR, SSG, and ISR strategies configured in source
- [x] Product API Route Handlers implemented
- [x] `next/image` used for local artwork
- [x] Deployment instructions documented
- [ ] Production build and live runtime verification — run in the target environment
- [ ] GitHub repository URL — create/import the repository and publish
- [ ] Vercel deployment URL — deploy and verify after publishing

The unchecked items require execution and account access; they are not claimed as completed by this source package.
