"use client";

import Link from "next/link";
import Image from "next/image";
import { useShop } from "@/context/shop-context";
import { findProduct, money } from "@/lib/shop/catalog";
import { CheckoutSteps } from "./checkout-steps";
export function CartView() {
  const {
    cart,
    quantity,
    remove,
    total,
    count
  } = useShop();
  if (!cart.length) return <div className="site-width section-space">
    <div className="empty-state">
      <h1>Your basket is waiting.</h1>
      <p>Find a piece you love and choose your size to get started.</p>
      <Link href="/everything" className="primary-button">Explore the collection</Link>
    </div>
  </div>;
  return <div className="site-width section-space">
    <div className="section-heading">
      <div>
        <p className="eyebrow">Your DNK selection</p>
        <h1>Shopping Basket</h1>
      </div>
      <Link href="/everything" className="text-link">Keep exploring ↗</Link>
    </div>
    <CheckoutSteps current={1} />
    <div className="checkout-layout">
      <section aria-label="Basket items" className="stack">
        {cart.map(item => {
          const p = findProduct(item.productId)!;
          const otherQty = cart.filter(x => x.productId === p.id && x.size !== item.size).reduce((n, x) => n + x.quantity, 0);
          return <article className="cart-row" key={`${p.id}-${item.size}`}>
          <Link className="cart-photo" href={`/products/${p.id}`}><Image src={p.image} alt={p.name} fill sizes="100px" className="object-contain" /></Link>
          <div className="stack">
            <div>
              <p className="eyebrow">{p.category}</p>
              <h2><Link href={`/products/${p.id}`}>{p.name}</Link></h2>
              <p className="small-text">Size: {item.size} / {money(p.priceCents)} each</p>
            </div>
            <div className="inline-actions">
              <label htmlFor={`qty-${p.id}-${item.size}`}>Quantity</label>
              <select className="quantity-input" id={`qty-${p.id}-${item.size}`} value={item.quantity} onChange={e => quantity(p.id, item.size, Number(e.target.value))}>{Array.from({
                    length: p.stock - otherQty
                  }, (_, i) => <option key={i + 1}>{i + 1}</option>)}</select>
              <button className="text-link" onClick={() => remove(p.id, item.size)} aria-label={`Remove ${p.name}, size ${item.size}`}>Remove</button>
            </div>
          </div>
          <p className="row-total">{money(p.priceCents * item.quantity)}</p>
        </article>;
        })}
      </section>
      <aside className="content-card summary-card stack">
        <p className="eyebrow">Basket summary</p>
        <div className="summary-line">
          <span>{count} pieces</span>
          <strong>{money(total)}</strong>
        </div>
        <p className="small-text">USD. Shipping and taxes are not calculated in this demo.</p>
        <Link href="/checkout" className="primary-button">Review checkout ↗</Link>
        <p className="small-text">No payment will be collected. This does not place an order.</p>
        <p className="small-text">Your basket is saved on this browser and may be visible to others using this device.</p>
      </aside>
    </div>
  </div>;
}
