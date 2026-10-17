"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Check, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { useShop } from "@/context/shop-context";
import { money, type Product } from "@/lib/shop/catalog";
export function ProductDetail({
  product
}: {
  product: Product;
}) {
  const {
    cart,
    add,
    wishlist,
    toggleWishlist
  } = useShop();
  const [size, setSize] = useState(product.sizes.length === 1 ? product.sizes[0] : "");
  const [qty, setQty] = useState(1);
  const [error, setError] = useState("");
  const [added, setAdded] = useState(false);
  const available = product.stock - cart.filter(x => x.productId === product.id).reduce((n, x) => n + x.quantity, 0);
  function addToCart(e: React.FormEvent) {
    e.preventDefault();
    setAdded(false);
    if (!size) {
      setError("Choose a size before adding this piece.");
      return;
    }
    if (!Number.isSafeInteger(qty) || qty < 1 || qty > available) {
      setError(`Choose a quantity between 1 and ${Math.max(0, available)}.`);
      return;
    }
    add({
      productId: product.id,
      size,
      quantity: qty
    });
    setError("");
    setAdded(true);
    toast.success(`${product.name} added to your basket`);
  }
  return <div className="site-width section-space">
    <Link className="text-link" href={`/everything?category=${product.category}`}><ArrowLeft size={15} /> Back to {product.category.toLowerCase()}</Link>
    <div className="detail-layout">
      <div className="detail-photo">
        <Image src={product.image} alt={product.name} fill priority sizes="(max-width:700px) 90vw, 50vw" className="object-contain" />
      </div>
      <div className="detail-copy stack">
        <div>
          <p className="eyebrow">{product.category} / DNK collection</p>
          <h1>{product.name}</h1>
        </div>
        <p className="detail-price">{money(product.priceCents)}</p>
        <p>{product.description}</p>
        <p className="small-text">Demonstration product. Sizes and stock are sample data.</p>
        <form onSubmit={addToCart} className="stack">
          <fieldset>
            <legend>Choose a size</legend>
            <div className="size-options">
              {product.sizes.map(s => <label key={s} className={size === s ? "selected" : ""}><input type="radio" name="size" value={s} checked={size === s} onChange={() => {
                  setSize(s);
                  setError("");
                  setAdded(false);
                }} />{s}</label>)}
            </div>
          </fieldset>
          <div className="field">
            <label htmlFor="quantity">Quantity</label>
            <input className="quantity-input" id="quantity" type="number" min={1} max={Math.max(1, available)} value={qty} disabled={available === 0} onChange={e => {
              setQty(Number(e.target.value));
              setAdded(false);
            }} />
          </div>
          {error && <p className="error-message" role="alert">{error}</p>}
          <button className="primary-button" type="submit" disabled={available === 0}>{!product.stock ? "Out of stock" : available === 0 ? "All available pieces are in your basket" : "Add to basket"}</button>
          {added && <p role="status" className="success-message"><Check size={15} className="inline" /> Added to your basket. <Link href="/cart" className="text-link">View basket</Link></p>}
        </form>
        <button className="secondary-button" aria-pressed={wishlist.includes(product.id)} onClick={() => toggleWishlist(product.id)}><Heart size={17} fill={wishlist.includes(product.id) ? "currentColor" : "none"} />{wishlist.includes(product.id) ? "Saved to wishlist" : "Save for later"}</button>
        <div className="detail-note">
          <h2>Before you checkout</h2>
          <p>This storefront stops at an unpaid checkout review. Payment, delivery and order fulfillment are not active.</p>
        </div>
      </div>
    </div>
  </div>;
}
