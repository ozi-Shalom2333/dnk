"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { Menu, X, ShoppingBag, Heart, UserRound } from "lucide-react";
import { useAuth } from "@/context/auth-context";
import { useShop } from "@/context/shop-context";
import { money } from "@/lib/shop/catalog";
import { BrandLogo } from "./brand-logo";

const links = [
  { label: "Everything", href: "/everything" },
  { label: "Women", href: "/everything?category=Women" },
  { label: "Men", href: "/everything?category=Men" },
  { label: "Accessories", href: "/everything?category=Accessories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const { user, loading } = useAuth();
  const { count, wishlist, warning, total } = useShop();
  const path = usePathname();
  const home = path === "/";
  const initials = (user?.displayName || "").trim().split(/\s+/).slice(0, 2).map(part => part[0]).join("").toUpperCase();

  function closeMenu() {
    setOpen(false);
    toggle.current?.focus();
  }

  return (
    <header className={"site-header" + (home ? " site-header--overlay" : "")} onKeyDown={event => {
      if (event.key === "Escape" && open) closeMenu();
    }}>
      <Link href="#main-content" className="skip-link">Skip to content</Link>
      <div className="site-width header-inner">
        <BrandLogo inverse={home} />
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map(link => (
            <Link key={link.href} href={link.href} aria-current={path === link.href ? "page" : undefined}>{link.label}</Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link href={user ? "/dashboard" : "/login"} aria-label={loading ? "Account, checking session" : user ? "Your account" : "Sign in"} className="icon-button">
            {user && initials ? <span className="account-avatar" aria-hidden="true">{initials}</span> : <UserRound size={20} aria-hidden="true" />}
          </Link>
          <Link href="/wishlist" aria-label={"Wishlist, " + wishlist.length + " items"} className="icon-button"><Heart size={20} aria-hidden="true" /></Link>
          <Link href="/cart" aria-label={"Basket, " + count + " items, subtotal " + money(total)} className="header-basket">
            <span className="basket-subtotal" aria-hidden="true">{money(total)}</span>
            <span className="icon-button bag-button" aria-hidden="true"><ShoppingBag size={20} /><span className="count-badge">{count}</span></span>
          </Link>
          <button type="button" ref={toggle} className="icon-button mobile-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
            {open ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
        <div className="site-width">
          {links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <Link href={user ? "/dashboard" : "/login"} onClick={() => setOpen(false)}>{user ? "My account" : "Sign in / Create an account"}</Link>
        </div>
      </nav>
      {warning && <p role="status" className="header-notice">{warning}</p>}
    </header>
  );
}
