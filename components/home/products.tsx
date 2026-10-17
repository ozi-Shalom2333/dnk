import Link from "next/link";
import { products } from "@/lib/shop/catalog";
import { ProductGrid } from "@/components/shop/product-grid";

export default function Products() {
  return (
    <section className="featured-section section-space" id="featured" aria-labelledby="featured-heading">
      <div className="site-width">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">The pieces you will reach for</p>
          <h2 id="featured-heading">Featured Products</h2>
          <span className="heading-divider" aria-hidden="true" />
        </div>
        <ProductGrid items={products} />
        <div className="section-action"><Link href="/everything" className="secondary-button">Explore all products</Link></div>
      </div>
    </section>
  );
}
