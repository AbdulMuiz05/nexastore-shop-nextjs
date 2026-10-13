# NexaStore — Next.js Fundamentals

## 1. Next.js compared with React

React is a UI library. It provides components and state, but routing, server rendering, API endpoints, and production conventions usually require additional tools. Next.js builds on React and provides file-system routing, server rendering, static generation, Route Handlers, image optimization, and deployment conventions in one framework.

## 2. App Router

The `app/` directory defines the routes. `app/page.js` is `/`; `app/products/page.js` is `/products`; `app/products/[id]/page.js` is a dynamic product route; and `app/about/page.js` is `/about`. `app/layout.js` provides the shared navigation and footer. `Link` from `next/link` handles internal navigation. `app/not-found.js`, `app/loading.js`, and `app/error.js` provide route-level UI states.

## 3. Server Components and Client Components

App Router pages and components are Server Components by default. NexaStore reads the product dataset on the server and renders product content without sending the full dataset-access logic to the browser. `ProductFilters.jsx` is a Client Component because search, category selection, sorting, and clearing filters use React state and event handlers. The `'use client'` directive establishes that client boundary.

## 4. SSR vs. SSG vs. ISR

| Strategy | When HTML is generated | NexaStore example | Why it fits |
|---|---|---|---|
| SSR (Server-Side Rendering) | On each incoming request | `/products` | The page is explicitly dynamic and reads the request's `searchParams`. |
| SSG (Static Site Generation) | During the build | `/about` and product paths returned by `generateStaticParams` | These pages can be pre-rendered before requests arrive. |
| ISR (Incremental Static Regeneration) | Static output is refreshed after a revalidation interval | Product detail pages (`revalidate = 60`) and home (`revalidate = 300`) | The framework can serve cached output and regenerate it after the interval when requested. |

SSR, SSG, and ISR describe when a route's output is generated; Server Components describe where a component renders and what code it can use. They are related but not interchangeable concepts.

### ISR limitation in this demo

The current catalog is intentionally stored in `lib/products.js`, so the dataset itself changes only when the source is changed and redeployed. ISR demonstrates cached route output and revalidation, but does not make local source data editable at runtime. A database or remote data source would be needed to demonstrate changing product records without a redeploy. The product detail page displays its generation time as a visible educational indicator; after an ISR regeneration, the generated output can show a newer time.

## 5. API Route Handlers

`app/api/products/route.js` implements `GET /api/products` and returns the count and product list as JSON. `app/api/products/[id]/route.js` implements `GET /api/products/:id`. It awaits the dynamic `params`, returns the requested product, and responds with HTTP 404 for unknown IDs. Both use the shared product data module to avoid duplicating the dataset.

## 6. Image optimization

The storefront uses Next.js `Image` from `next/image` with local SVG artwork under `public/images`. Width-aware `sizes`, responsive fill containers, and descriptive alt text are provided. SVGs are local assets, so the app does not depend on a third-party image host.

## 7. Data flow

`lib/products.js` owns the product records and query helpers. Server Components call these helpers directly. The product API handlers use the same functions. The catalog's `ProductFilters` receives product records as props and filters/sorts them in the browser. This avoids an unnecessary HTTP request from a Server Component to its own API route.

## 8. Run and test

```bash
npm install
npm run dev
```

Then test:

- `/` — home, featured products, category links
- `/products` — search, category filtering, sorting, clear all
- `/products?category=Tech` — category preselected from the URL
- `/products/orbit-watch` — detail page, image, related products
- `/products/not-a-product` — not-found UI
- `/about` — static brand page
- `/api/products` — product JSON
- `/api/products/orbit-watch` — single product JSON
- `/api/products/not-a-product` — HTTP 404 JSON

For production checks:

```bash
npm run build
npm run start
```

Inspect the build output's route classifications and test the production server. Exact rendering labels can differ by Next.js version, so verify the output from the installed version rather than relying on this document alone.

## 9. Vercel deployment

Push the project to GitHub, import the repository into Vercel, retain the detected Next.js defaults, and deploy. No environment variables are required for the bundled data version. After deployment, test the same pages and API endpoints using the deployed domain.

## 10. Design and engineering choices

- JavaScript and JSX keep the project approachable for a fundamentals assignment.
- Local product records and SVGs avoid database setup, external image host configuration, and API keys.
- Server Components are used for static content and product data access; client-side state is limited to catalog controls.
- The catalog route is dynamic to demonstrate SSR. The about page is suitable for SSG. Product detail routes are pre-generated and revalidated to demonstrate ISR.
- The project does not claim to implement checkout, payment, authentication, or real inventory.


## Tailwind CSS and interface styling

NexaStore uses Tailwind CSS v4 through the `@tailwindcss/postcss` PostCSS plugin. The stylesheet imports `tailwindcss` and defines the project theme tokens in CSS. Utility classes are used for keyboard focus rings, focus-within states on catalog filters, subtle transitions, hover feedback, and tabular price numerals. The bespoke stylesheet remains responsible for the storefront’s editorial layout, responsive product grids, and brand styling. This hybrid approach keeps the visual design consistent while making interactive states easy to maintain with Tailwind utilities.
