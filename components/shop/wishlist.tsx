"use client";

import Link from "next/link";
import { useShop } from "@/context/shop-context";
import { products } from "@/lib/shop/catalog";
import { ProductGrid } from "./product-grid";
export function Wishlist() {
  const {
    wishlist
  } = useShop();
  return <div className="site-width section-space">
    <div className="section-heading">
      <div>
        <p className="eyebrow">For another day</p>
        <h1>Your favorites.</h1>
      </div>
      <p>{wishlist.length} saved pieces</p>
    </div>
    <p className="small-text mb-8">Saved on this browser. Your favorites do not sync across devices.</p>
    {wishlist.length ? <ProductGrid items={products.filter(p => wishlist.includes(p.id))} /> : <div className="empty-state">
      <h2>A little room for inspiration.</h2>
      <p>Tap the heart on any piece to keep it here.</p>
      <Link href="/everything" className="primary-button">Find a favorite</Link>
    </div>}
  </div>;
}
