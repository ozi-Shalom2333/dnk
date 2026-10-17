"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { type Product, money } from "@/lib/shop/catalog";
import { useShop } from "@/context/shop-context";
import { toast } from "sonner";
export function ProductCard({
  product
}: {
  product: Product;
}) {
  const {
    wishlist,
    toggleWishlist
  } = useShop();
  const saved = wishlist.includes(product.id);
  return <article className="product-card">
    <div className="product-image">
      <Link href={`/products/${product.id}`} tabIndex={-1} aria-hidden="true"><Image src={product.image} alt="" fill sizes="(max-width:700px) 46vw, (max-width:1100px) 30vw, 320px" className="object-contain" /></Link>
      <button className="save-button" aria-label={`${saved ? "Remove" : "Save"} ${product.name} ${saved ? "from" : "to"} wishlist`} aria-pressed={saved} onClick={() => {
        toggleWishlist(product.id);
        toast.success(saved ? "Removed from wishlist" : "Saved to your wishlist");
      }}><Heart size={18} fill={saved ? "currentColor" : "none"} aria-hidden="true" /></button>
      {!product.stock && <span className="stock-badge">Out of stock</span>}
    </div>
    <div className="product-caption">
      <h3><Link href={`/products/${product.id}`}>{product.name}</Link></h3>
      <p className="eyebrow">{product.category}</p>
      <p className="product-price">{money(product.priceCents)}</p>
    </div>
  </article>;
}
