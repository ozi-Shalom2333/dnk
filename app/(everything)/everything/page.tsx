import { Suspense } from "react";
import { Catalog } from "@/components/shop/catalog";
export const metadata = {
  title: "Explore the collection"
};
export default function EverythingPage() {
  return <>
    <div className="collection-intro">
      <div className="page-intro site-width">
        <p className="eyebrow">Discover DNK</p>
        <h1>The Collection</h1>
        <p>Clothing, footwear and accessories. Find your next everyday favorite.</p>
      </div>
    </div>
    <Suspense fallback={<p className="site-width section-space" role="status">Loading the collection...</p>}><Catalog /></Suspense>
  </>;
}
