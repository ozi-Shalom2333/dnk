import { products } from "@/lib/shop/catalog";
import { ProductGrid } from "@/components/shop/product-grid";
export default function ProductList() {
  return <ProductGrid items={products} />;
}
