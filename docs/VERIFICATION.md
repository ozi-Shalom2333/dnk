# Verification and remaining checks

## Completed in the editing environment

Latest verification: October 17, 2026.

| Check | Result |
| --- | --- |
| `npm ci --ignore-scripts --no-audit --no-fund` | Passed with the existing lockfile |
| `npm test` | 16 passed, 0 failed |
| `npm run typecheck` | Passed, including Next.js route type generation |
| `npm run lint` | Passed, no errors or warnings |
| `npm run build` | Passed; all ten product pages pre-rendered |

Firebase behavior tests continue to use test-only SDK doubles. A separate fresh source folder, without generated Next.js declarations or build output, also passed `npm run typecheck`. This checks the delivered setup sequence rather than relying on files left by a previous build.

The tests cover:

- Catalog filtering/sorting, prices and zero-result behavior.
- Corrupt/tampered saved state, duplicate wishlist IDs, invalid sizes, out-of-stock items and non-integer quantities.
- Basket merging, total stock limits across sizes, removal and cent-based totals.
- Checkout validation, empty/stale basket rejection, immutable snapshots and an unpaid-only result without an order ID.
- Safe sign-in return destinations.
- Browser-state restoration, updates, failed storage access, and cross-tab events after another subscriber unmounts.
- Firebase adapter order of operations: local/tab persistence before sign-in, persistence failure propagation, signup/display-name saving and partial failures, logout and observer cleanup, and safe error messages.
- Syntax/local-import checks across all application sources, catalog image existence and static internal navigation routes.

Auth tests use **explicit test-only Firebase SDK doubles**. They confirm the application's calls and control flow; they do not test the actual Firebase service, provider redirects, email delivery or revoked-account behavior. Test loaders/doubles are not imported by application code.

The supplied `.env.local` was also loaded into the Firebase adapter using the test SDK. All seven supplied web app fields map to the SDK configuration, the corrected measurement-ID name is recognized, initialization remains browser-only and repeated calls reuse the Auth instance. The environment file is still ignored by Git. This check made no live Firebase requests and does not confirm provider enablement or API-key restrictions.

The pure catalog/cart/checkout/navigation modules also passed strict TypeScript checking:

```bash
npx tsc --noEmit --strict --target es2020 --moduleResolution bundler --module esnext lib/shop/catalog.ts lib/shop/cart.ts lib/shop/checkout.ts lib/navigation.ts
```

## Remaining verification limits

The project dependencies installed successfully during the October 17 refinement, superseding the earlier download limitation. Full-project TypeScript checks, ESLint and the production build are now verified with the existing dependency versions.

Browser-based layout, mobile, keyboard and screen-reader QA remain unverified because the supported browser workflow was unavailable. The supplied client configuration is present, but live Firebase Console/provider settings, email delivery and deployed rules were not accessed. No real accounts were created, no rules were deployed and no site was published. No performance score or complete accessibility audit is claimed.

The source stylesheet's main text, muted text, link, button and field-boundary colors were checked for contrast. The white overlay-header text was also checked against the lightest possible image backdrop after compositing its header surface. These color checks do not replace browser inspection of every image/text position or every UI state.

The generated production HTML passed smoke checks for the original logo, homepage overlay versus inner-page header, ten featured products, all ten product detail pages and their related cards, account-page loading shells, main-content targets and internal navigation destinations. These checks inspect pre-rendered markup, not browser hydration or account actions.

## Required local verification before deployment

With the project dependencies installed:

```bash
npm ci
npm test
npm run typecheck
npm run lint
npm run build
npm run start
```

The production build passed in the editing environment. Repeat the checks after merging or changing configuration, then verify the browser and live Firebase journeys below before shipping.

## Manual flow matrix

| Journey | Expected result |
| --- | --- |
| No `.env.local` | Guest storefront works; account buttons explain missing configuration; no render crash |
| Direct `/everything?category=Women` | Women items shown; search/price/sort combine and reset correctly |
| Search with no matches | Visible zero-result state with Reset filters |
| Detail without selected size | Visible validation; no basket change |
| Detail quantity above availability | Browser/service rejects or caps invalid data; combined size quantities cannot exceed demo stock |
| Out-of-stock red bag | Detail cannot add it; wishlist remains available |
| Add item, reload, open another tab | Basket persists and updates; count/subtotal reflect saved data |
| Remove every basket item | Empty basket state and collection link |
| Storage disabled or corrupt | Fresh usable state or session-only state, with clear storage notice |
| Checkout with empty basket | Collection link; no preview/order |
| Checkout with incomplete details | Validation; no fabricated success |
| Checkout with sample details | UNPAID PREVIEW; disabled payment; no order ID; basket stays intact |
| Edit basket after preview | Old preview invalidates; details can be reviewed again |
| Reload checkout | Delivery details disappear; browser basket stays |
| Signup (owned test email) | Real Firebase account, saved display name; no order created |
| Duplicate email/wrong password/offline | Actionable error; buttons recover from pending state |
| Login without Keep me signed in | Refresh preserves current-tab session; closing that tab ends that session |
| Login with Keep me signed in | Session restores after reopening browser, unless Firebase/browser has revoked or cleared it |
| Sign out in local-persistence session | User content disappears; account routes redirect; other tabs synchronize via Firebase |
| Open protected settings while signed out | Wait for auth resolution, then login with safe return to settings |
| Display-name save then refresh | Firebase persists the changed name |
| Reset password | Firebase hosted action email arrives and works; generic request feedback avoids revealing account existence |
| Verification email and Refresh status | Firebase email action works; status reflects actual verification |
| Password change | Wrong current password fails; correct reauthentication updates password; old password no longer signs in |
| OAuth-only account | Password changes directed to the original provider |
| Enabled Google/GitHub | Provider completes popup on authorized domain; blocked/cancelled popup and account conflicts handled |
| Mobile filters | Show/Hide filters exposes the native search/category/price controls and preserves their behavior |
| Product imagery | Full shoes, bags and garments remain visible; lifestyle banners crop usefully at each width |
| Visual consistency | Original logo, type, buttons, spacing and forms remain consistent from storefront to account screens |
| Mobile keyboard navigation | All collection/account/logout controls reachable; menu closes with Escape; focus returns to toggle |
| Widths 320, 360, 768, 1024, 1440 px | No horizontal overflow or obscured controls; all forms and totals readable |
| Reduced-motion preference | No unnecessary entrance/hover animation |
| Firebase rules | Confirm intended project and current deployed rules; test unauthorized/cross-user access whenever a private service is later added |

## Future payment acceptance criteria

Payment integration needs server-verified prices/inventory, an order data model and ownership checks, shipping/tax calculation, an idempotent payment flow, verified webhooks, recovery for retries/cancellation, receipts, and fulfillment/refund policies. Only an authoritative server-confirmed payment may transition an order to paid/completed. An unpaid review must stay distinct from a placed or paid order.
