export const metadata = {
  title: "Demo privacy notice"
};
export default function PrivacyPage() {
  return <div className="site-width section-space prose-content">
    <p className="eyebrow">The current demo</p>
    <h1>Your data, explained.</h1>
    <h2>Accounts</h2>
    <p>If Firebase is configured, creating an account sends your email, password and optional display name to Firebase Authentication. Social sign-in, when enabled, is handled by the selected provider and Firebase. The SDK manages your sign-in session. DNK does not store your password in its own browser storage.</p>
    <h2>Shopping on this browser</h2>
    <p>Your basket and wishlist are stored in this browser’s local storage. They contain product IDs, sizes and quantities. These lists are shared by anyone using the same browser profile, including across sign-in and sign-out. They do not sync to your account or another device. Clear the basket, remove saved items or clear site data to remove them.</p>
    <h2>Checkout review</h2>
    <p>Use sample details. Delivery details stay in page memory and are discarded when the page is reloaded or closed. They are not submitted to Firebase or an order service. No payment information is requested.</p>
    <h2>Images and hosting</h2>
    <p>The optional Unsplash image on the credits page is served by Unsplash and may send ordinary image-request information, such as your IP address, to that host. Storefront product imagery is served locally. Hosting providers may keep normal request logs. No analytics integration is configured in the application.</p>
    <h2>Before a real store launches</h2>
    <p>This demo notice describes the current code, and is not a complete production privacy policy. The owner must provide verified business contact details, retention and deletion procedures, and terms for any new order, payment, support or analytics service.</p>
  </div>;
}
