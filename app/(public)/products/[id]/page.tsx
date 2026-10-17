import { notFound } from "next/navigation";
import { findProduct, products } from "@/lib/shop/catalog";
import { ProductDetail } from "@/components/shop/product-detail";
import { ProductGrid } from "@/components/shop/product-grid";
export function generateStaticParams() {
  return products.map(p => ({
    id: p.id
  }));
}
export async function generateMetadata({
  params
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const p = findProduct((await params).id);
  return {
    title: p?.name ?? "Product not found"
  };
}
export default async function ProductPage({
  params
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const p = findProduct((await params).id);
  if (!p) notFound();
  const related = products.filter(product => product.id !== p.id && product.category === p.category).slice(0, 4);
  return <>
    <ProductDetail product={p} />
    {related.length > 0 && <section className="site-width section-space related-products" aria-labelledby="related-heading">
      <div className="section-heading"><h2 id="related-heading">More to Explore</h2></div>
      <ProductGrid items={related} />
    </section>}
  </>;
}
