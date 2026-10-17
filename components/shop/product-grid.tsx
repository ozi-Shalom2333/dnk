import { type Product } from "@/lib/shop/catalog";
import { ProductCard } from "./product-card";
export function ProductGrid({
  items
}: {
  items: readonly Product[];
}) {
  return <div className="product-grid">
    {items.map(product => <ProductCard key={product.id} product={product} />)}
  </div>;
}
