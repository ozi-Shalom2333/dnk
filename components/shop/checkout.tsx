"use client";

import { useState } from "react";
import Link from "next/link";
import { useShop } from "@/context/shop-context";
import { findProduct, money } from "@/lib/shop/catalog";
import { reviewCheckout, type CheckoutDetails } from "@/lib/shop/checkout";
import { CheckoutSteps } from "./checkout-steps";
const blank: CheckoutDetails = {
  name: "",
  email: "",
  address: "",
  city: "",
  postalCode: "",
  country: ""
};
const fields = [{
  name: "name",
  label: "Full name",
  complete: "name"
}, {
  name: "email",
  label: "Email",
  complete: "email"
}, {
  name: "address",
  label: "Street address",
  complete: "street-address"
}, {
  name: "city",
  label: "City",
  complete: "address-level2"
}, {
  name: "postalCode",
  label: "Postal code (optional)",
  complete: "postal-code"
}, {
  name: "country",
  label: "Country",
  complete: "country-name"
}] as const;
export function Checkout() {
  const {
    cart,
    total
  } = useShop();
  const [details, setDetails] = useState(blank);
  const [preview, setPreview] = useState<ReturnType<typeof reviewCheckout> | null>(null);
  const [error, setError] = useState("");
  const current = preview && JSON.stringify(preview.items) === JSON.stringify(cart) ? preview : null;
  function submit(e: React.FormEvent) {
    e.preventDefault();
    try {
      setPreview(reviewCheckout(cart, details));
      setError("");
    } catch (e) {
      setError((e as Error).message);
    }
  }
  if (!cart.length) return <div className="site-width section-space empty-state">
    <h1>Start with your basket.</h1>
    <p>Add a piece before reviewing checkout.</p>
    <Link href="/everything" className="primary-button">Explore pieces</Link>
  </div>;
  return <div className="site-width section-space">
    <p className="eyebrow">Review your DNK selection</p>
    <h1>{current ? "Unpaid Checkout Preview" : "Checkout Details"}</h1>
    <CheckoutSteps current={current ? 3 : 2} />
    <p className="notice">Demo checkout. Use sample details. No payment, order, reservation or delivery is created. Your address is held in page memory only.</p>
    <div className="checkout-layout">
      <section>
        {current ? <div className="content-card stack" role="status">
          <span className="unpaid-badge">UNPAID PREVIEW</span>
          <h2>Ready for review.<br />Payment comes later.</h2>
          <p>No purchase has been made. This is the stopping point for DNK’s current shopping flow.</p>
          <div>
            <h3>Delivery details preview</h3>
            <p>{current.details.name}<br />{current.details.address}<br />{current.details.city} {current.details.postalCode}<br />{current.details.country}<br />{current.details.email}</p>
          </div>
          <div className="inline-actions">
            <button className="secondary-button" onClick={() => setPreview(null)}>Edit details</button>
            <Link href="/cart" className="text-link">Return to basket</Link>
          </div>
          <button className="primary-button" disabled>Payment is not available</button>
        </div> : <form onSubmit={submit} className="content-card stack">
          <h2>Delivery details</h2>
          <p className="small-text">Guest checkout review is available. Sign-in is not required.</p>
          <div className="form-grid">
            {fields.map(f => <div className="field" key={f.name}>
              <label htmlFor={f.name}>{f.label}</label>
              <input id={f.name} name={f.name} autoComplete={f.complete} type={f.name === "email" ? "email" : "text"} required={f.name !== "postalCode"} maxLength={f.name === "address" ? 200 : 100} value={details[f.name]} onChange={e => setDetails({
                ...details,
                [f.name]: e.target.value
              })} />
            </div>)}
          </div>
          {error && <p role="alert" className="error-message">{error}</p>}
          <button className="primary-button" type="submit">Preview checkout</button>
          <Link href="/cart" className="text-link">Back to basket</Link>
        </form>}
      </section>
      <aside className="content-card summary-card stack">
        <h2>Your pieces</h2>
        {cart.map(item => <div key={`${item.productId}-${item.size}`} className="summary-line">
          <span>{findProduct(item.productId)!.name}<br /><small>Size {item.size} · Qty {item.quantity}</small></span>
          <span>{money(findProduct(item.productId)!.priceCents * item.quantity)}</span>
        </div>)}
        <div className="summary-line">
          <strong>Subtotal</strong>
          <strong>{money(total)}</strong>
        </div>
        <p className="small-text">Shipping and taxes are not calculated. This is an estimate from the demo catalog, not a final payable amount.</p>
      </aside>
    </div>
  </div>;
}
