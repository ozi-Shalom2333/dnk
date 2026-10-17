import Link from "next/link";
export const metadata = {
  title: "Demo terms"
};
export default function TermsPage() {
  return <div className="site-width section-space prose-content">
    <p className="eyebrow">Before you explore</p>
    <h1>A storefront demonstration.</h1>
    <h2>No purchase contract</h2>
    <p>DNK’s catalog, prices, sizes and stock are sample data for a portfolio project. Basket actions and checkout previews do not reserve products, place orders or enter into a purchase agreement. Payments, shipping and returns are not active.</p>
    <h2>Account actions are real</h2>
    <p>When Firebase is configured, account creation, login, password reset, profile changes and verification emails use Firebase Authentication. Use an account you own and a unique password. Guest shopping does not require an account.</p>
    <h2>Image rights</h2>
    <p>Images are not supplied for reuse as a stock image collection. New reference imagery and the original project assets have different licensing status, documented in the image credits and project notes.</p>
    <Link href="/credits" className="text-link">Read image credits</Link>
    <h2>Before payment is added</h2>
    <p>The site owner must add real business terms, currency and tax policy, fulfillment and returns information, privacy procedures, and a secure server-controlled payment and order workflow.</p>
  </div>;
}
