# Firebase setup and access rules

## Required configuration

The configured archive includes `.env.local` for the supplied `dnk-version1` project. Leave this file in the project root beside `package.json`; Next.js loads it automatically. It remains ignored by Git. To connect a different project, copy `.env.example` to `.env.local`. In Firebase Console, select the correct project and open Project settings → General → Your apps → web app → SDK configuration.

Set these four public web app identifiers:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

Use values from the same web app/project. The supplied web configuration is now connected to the existing signup, login, session restoration, logout and account-settings flows. Live Console settings were not available for verification. Firebase's web configuration identifies the client app and is designed to be public; it does not grant database or Storage authorization. No account passwords, service-account credentials or Admin private keys are included in this delivery.

In Authentication → Sign-in method, enable Email/Password. In Authentication → Settings → Authorized domains, add the exact local and deployed hosts you use, including `localhost` for local testing. Do not assume localhost is automatically present on a new project. Use HTTPS for production.

Next.js embeds `NEXT_PUBLIC_` values at build time. Set them in the hosting environment before building, and rebuild when they change. Never put service-account JSON, Admin SDK private keys, or payment secrets in public variables. No Admin SDK is used by this application.

After extracting this archive into your local project, restart development with Ctrl+C followed by `npm run dev`. For production, copy the public configuration into the host's environment settings and make a new build. Confirm email signup, logout, login, reload/session restoration and password reset using your own test account; no live users or emails were created during this update.

The supplied `NEXT_PUBLIC_FIREBASE_MESSUREMENT_ID` variable was corrected to `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`. The SDK configuration now also accepts the supplied Storage bucket, messaging sender ID and measurement ID as optional fields. They do not enable those services. Analytics, Messaging and Storage SDKs are not initialized, and these fields are not required for the Auth-only scope.

## Optional providers

The existing Google/GitHub sign-in intentions are preserved behind explicit flags:

```env
NEXT_PUBLIC_ENABLE_GOOGLE_AUTH=false
NEXT_PUBLIC_ENABLE_GITHUB_AUTH=false
```

Enable each provider in Firebase Console before setting its flag to `true`. Google requires the provider's project/support settings. GitHub requires an OAuth app, its client ID/secret stored in Firebase Console, and the redirect callback URI displayed by Firebase (normally `https://YOUR_AUTH_DOMAIN/__/auth/handler`). Never put the GitHub client secret in this frontend.

Verify the actual callback/authorized domains in Console. Popup blocked, cancelled, unauthorized-domain and provider-disabled failures produce actionable UI feedback. An existing account with a different provider is not silently duplicated or linked; sign in with its original method. Account linking is outside this update.

## Sessions and account actions

- Firebase initializes lazily in the browser. Missing configuration does not break static rendering or guest shopping.
- `onAuthStateChanged` restores the SDK's existing session and cleans up its observer on unmount.
- Login/signup await `setPersistence` before authentication. Checked “Keep me signed in” uses browser local persistence; unchecked uses browser session persistence for the current tab.
- We do not force local persistence during module import or overwrite a restored session's persistence.
- Logout awaits Firebase sign-out, then clears the displayed user and redirects. A failure remains visible instead of claiming success.
- Signup saves the display name. If account creation succeeds but name saving fails, the UI acknowledges the created account and offers settings instead of inviting a second signup.
- Name changes use `updateProfile`. Password changes reauthenticate with the current password, then call `updatePassword`. OAuth-only users are directed to their provider.
- Password reset and verification emails use Firebase's built-in hosted action handlers. Configure email templates in Authentication → Templates and test inbox delivery. There is no custom email-action backend.
- The local minimum password requirement is 8 characters with a letter and a number. Firebase's configured policy is authoritative and may be stricter.
- Verification status is informational. No verified-email purchase restriction was present in the original code, and none is invented here.

## Authorization assessment

**Confirmed:** visitors may browse and preview checkout as guests; account overview/profile/settings require an authenticated Firebase user. Account actions apply only to the SDK's current user.

**Not found:** Firestore/Realtime Database reads or writes, Storage uploads, server actions, API route handlers returning private data, staff/admin roles or custom claims, real orders, payment actions.

The `/dashboard` layout waits for session resolution before rendering user content, redirects unauthenticated visitors, and preserves a safe local return path. Its server-rendered output contains only a public shell/loading state; account fields come from Firebase on the client. This client guard is for navigation and display, not a server authorization boundary. There is currently no private server-side resource needing a token/session-cookie check.

Firebase Authentication enforces its own account operations. Authentication does not itself grant database or file access. Because this application requires neither, the included files deny all database/storage client access:

- `firestore.rules`
- `storage.rules`
- `database.rules.json`

These rules are **local files, not confirmed deployed rules**. We did not access or alter the live project. If this Firebase project also serves other apps or collections, inspect its existing rules first; replacing them with these locked defaults would block those clients. Deploy only the applicable rules to the intended, isolated project. A separately installed Firebase CLI is needed for deployment; it is not a project dependency.

For a project dedicated to this Auth-only demo, after verifying the project identity and reviewing current rules, examples are:

```bash
firebase deploy --only firestore:rules --project YOUR_PROJECT_ID
firebase deploy --only storage --project YOUR_PROJECT_ID
firebase deploy --only database --project YOUR_PROJECT_ID
```

Run only commands for services that actually exist in that project. Do not provision database/storage services solely for this demo. If rules cannot be tested/deployed yet, keep those services unused.

## Local Auth emulator (optional)

If you already use the Firebase CLI, run:

```bash
firebase emulators:start --only auth --project demo-dnk
```

For local development, supply four nonempty demo web config identifiers in `.env.local` and:

```env
NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_URL=http://127.0.0.1:9099
```

The emulator URL is honored only by `next dev` and only for loopback hosts. Use the `demo-dnk` project ID to avoid live resources. The emulator does not test real provider redirects or inbox delivery. Its use was not verified in this environment.

## When private server resources are introduced

Before adding saved orders, account data endpoints or payments:

1. Verify Firebase ID tokens or secure session cookies with the Admin SDK **on the server**. Apply authorization inside each resource handler/action, including ownership checks against the verified UID.
2. Keep Admin credentials server-only. Add expiry/revocation handling and CSRF defenses appropriate to cookie-based sessions. Client login state is not proof of authorization for a server request.
3. Design collection-specific security rules and emulator tests for unauthenticated access, owner access, cross-user denial and unauthorized state changes. Do not grant every signed-in user broad database access.
4. Derive prices/stock on the server. Only a verified payment-provider webhook or an equally authoritative server path may mark an order paid.
5. Introduce admin roles only when their actions and permissions are defined, using server-managed custom claims or another verified authorization model.

## Official sources consulted

- https://firebase.google.com/docs/auth/web/start
- https://firebase.google.com/docs/auth/web/auth-state-persistence
- https://firebase.google.com/docs/auth/web/manage-users
- https://firebase.google.com/docs/auth/web/password-auth
- https://firebase.google.com/docs/auth/faq-and-troubleshooting
- https://firebase.google.com/docs/projects/api-keys
- https://nextjs.org/docs/app/guides/environment-variables
- https://firebase.google.com/docs/rules/basics
- https://nextjs.org/docs/app/api-reference/functions/generate-static-params
