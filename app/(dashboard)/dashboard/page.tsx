"use client";

import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import { useShop } from "@/context/shop-context";
import { money } from "@/lib/shop/catalog";
export default function DashboardPage() {
  const {
    user
  } = useAuth();
  const {
    wishlist,
    count,
    total
  } = useShop();
  return <div className="stack">
    <div>
      <p className="eyebrow">Your account</p>
      <h1>Hello, {user?.displayName || "there"}.</h1>
      <p className="mt-4">A little space for your profile and your next favorites.</p>
    </div>
    <div className="account-stats">
      <Link className="content-card" href="/cart"><p className="eyebrow">In your basket</p><h2>{count} pieces</h2><p>{money(total)} subtotal</p></Link>
      <Link className="content-card" href="/wishlist"><p className="eyebrow">Saved for later</p><h2>{wishlist.length} favorites</h2><p>On this browser</p></Link>
      <div className="content-card">
        <p className="eyebrow">Purchases</p>
        <h2>Not available</h2>
        <p>Payment and order history are not active.</p>
      </div>
    </div>
    <div className="content-card stack">
      <h2>Make yourself at home.</h2>
      <p>Update your name, manage your password and check email verification from your account settings.</p>
      <div className="inline-actions">
        <Link href="/dashboard/settings" className="primary-button">Manage account</Link>
        <Link href="/everything" className="secondary-button">Explore the collection</Link>
      </div>
    </div>
  </div>;
}
