# DNK

DNK is a Next.js fashion ecommerce portfolio project. The original ten-product catalog, prices and DNK blue identity are preserved. The storefront now has a coherent shopping flow, with real Firebase account actions when configured.

The October 17 visual update restores the original DNK logo, full-width photographic hero and campaign banner, bold sans-serif headings and black/white/blue palette. Screenshot references informed category browsing, product spacing and responsive layouts. Product details, the basket, checkout and account screens share this design system. See [Design refinement](docs/REDESIGN.md).

## Where checkout stops

Browse → choose product and size → add to basket → review delivery details → **UNPAID PREVIEW**.

This does not create an order, reserve stock, charge a card, send a receipt, or arrange delivery. The basket stays intact. Prices, stock and sizes are demo data. Shipping and tax are not calculated. Delivery details are held only in page memory; use sample details.

## Run locally

Node.js 20.9 or later is required. Use a currently supported Node LTS release if possible.

```bash
npm ci
npm run dev
```

Visit http://localhost:3000. Browsing, the basket, wishlist and guest checkout review work without Firebase configuration. Account screens explain missing configuration instead of crashing the site.

This configured archive includes `.env.local` with the supplied `dnk-version1` Firebase web app identifiers. Keep it beside `package.json`. Enable Email/Password in Firebase Console and authorize your development/production domains, including `localhost` for local development. Stop the server with Ctrl+C and run `npm run dev` again after changing environment variables. See [Firebase setup](docs/FIREBASE.md).

For a different Firebase project, copy `.env.example` to `.env.local` and fill in that project's web app configuration. `.env.local` remains ignored by Git. Firebase web app identifiers are public client configuration; never copy Admin SDK private keys into public variables. Optional Google and GitHub buttons appear only when their configuration flags are enabled. Both are disabled in the supplied configuration until their providers are confirmed configured.

## Safely apply this update to your existing repository

Keep your original repository and `.git` directory. Work on a branch. Copy the updated source files into that working copy, preserving your `.env.local`. Do not delete the original repository or replace its Git metadata with an extracted ZIP.

The following inactive components were removed; remove them from your working copy if merging files manually:

- `components/about/` (fictional team/metrics and placeholder social widgets).
- `components/home/card.tsx` and `components/everthing/card.tsx` (duplicate inert promo cards).
- `components/home/caroselSlider.tsx` (placeholder partner logos).

Old `diff.txt`, `stat*.txt`, `status*.txt` and `names*.txt` exports are excluded from the new archive. The public images and useful UI primitives remain. Review `git diff` before committing; this archive does not contain or replace your repository history.

## Implemented

- One shared, typed catalog with search, category/price filtering and price sorting.
- Product detail routes, size selection, quantity controls and explicit out-of-stock feedback.
- Persistent browser basket and wishlist; invalid saved data and storage errors recover safely.
- A guest checkout details form and explicit unpaid preview.
- Shared navigation/footer and consistent layouts, colors, spacing and motion behavior.
- Mobile navigation, focus indicators, visible form labels, status/error feedback and reduced-motion support.
- Firebase email signup/login, optional Google/GitHub popup sign-in, password reset and logout.
- Session restoration using the Firebase observer; per-sign-in local or tab persistence.
- Real Firebase display-name saving, verification emails, verification status refresh, and reauthenticated password changes.
- Account route guards with a loading state and safe sign-in return paths.
- Honest dashboard counts from local shopping state; no invented purchase history.
- Error, loading, empty and not-found pages.

## Architecture

```text
app/                      Next.js routes, metadata and layouts
components/shop/          Shopping UI
components/auth/          Shared account form
components/home/          Home page sections
components/web/           Shared storefront navigation/footer
components/ui/            Preserved UI primitives
context/                  Auth and shopping providers
lib/shop/catalog.ts       Single demo catalog and filtering
lib/shop/cart.ts          Basket validation, stock limits and totals
lib/shop/store.ts         Browser persistence adapter
lib/shop/checkout.ts      Validation and unpaid review snapshot
lib/firebase.ts           Lazy browser-only Firebase initialization
lib/auth.ts               Firebase actions, persistence and safe errors
lib/navigation.ts         Safe internal return paths
docs/                     Setup, findings, imagery and verification
tests/                    Focused behavior and structure checks
```

There is no order API, database integration, admin role or server-side private-data endpoint in this version. The account guard is a UI guard, not a substitute for data authorization. Firebase enforces account operations; database/storage rule files are locked for this Auth-only stage. See the authorization assessment in `docs/FIREBASE.md` before deploying rules.

The catalog and shopping adapters are kept outside the UI so future authoritative catalog/inventory/order APIs can replace them. Frontend prices, stock and local storage must never be trusted when payments are added.

## Verify

```bash
npm test
npm run typecheck
npm run lint
npm run build
```

Sixteen focused tests, full-project TypeScript checking, ESLint and the Next.js production build passed during the October 17 update. The typecheck command generates Next.js route types before checking, so it also works in a fresh extraction without an existing build directory. Firebase adapter tests use SDK test doubles, not live accounts.

**Browser interaction/layout QA, live Firebase sign-in, email delivery and deployed security rules remain unverified.** Nothing was deployed. Use the manual matrix in [Verification](docs/VERIFICATION.md) to check mobile layouts, keyboard interaction and your Firebase project before deployment. No Lighthouse or complete accessibility audit result is claimed.

## Project notes

- [Review and implementation](docs/PROJECT_REVIEW.md)
- [Design refinement and screenshot references](docs/REDESIGN.md)
- [Firebase configuration and authorization](docs/FIREBASE.md)
- [Imagery, sources and licensing](docs/IMAGERY.md)
- [Verification matrix](docs/VERIFICATION.md)

Code retains the existing MIT license. Image rights are separate. The original asset licenses were not supplied and remain unresolved; see `docs/IMAGERY.md` before commercial publication.
