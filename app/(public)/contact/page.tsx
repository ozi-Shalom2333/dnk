import Link from "next/link";
export const metadata = {
  title: "Contact"
};
export default function ContactPage() {
  return <div className="site-width section-space prose-content">
    <p className="eyebrow">Good to know</p>
    <h1>Let’s keep it clear.</h1>
    <p className="notice">DNK is a portfolio storefront. Customer support, message delivery and real orders are not connected.</p>
    <h2>Exploring the shop?</h2>
    <p>You can browse products, build a basket and preview checkout without creating an account. Nothing is charged or shipped.</p>
    <h2>Need help with your account?</h2>
    <p>Use password reset if you cannot sign in. If an account action is unavailable, the site owner needs to check Firebase’s configuration and authorized domains.</p>
    <div className="inline-actions">
      <Link href="/forgot-password" className="primary-button">Reset password</Link>
      <Link href="/everything" className="secondary-button">Explore the collection</Link>
    </div>
    <h2>Contacting the creator</h2>
    <p>Please use the contact details on the portfolio that linked you here. A verified business email has not been provided for DNK, so this page does not invent one or offer a form that cannot send messages.</p>
  </div>;
}
