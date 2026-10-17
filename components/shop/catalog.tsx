"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import { filterProducts, money } from "@/lib/shop/catalog";
import { ProductGrid } from "./product-grid";
export function Catalog() {
  const params = useSearchParams();
  const router = useRouter();
  const category = params.get("category") ?? "All";
  const [query, setQuery] = useState("");
  const [max, setMax] = useState(20000);
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const items = filterProducts(query, category, max, sort);
  function reset() {
    setQuery("");
    setMax(20000);
    setSort("featured");
    router.replace("/everything", {
      scroll: false
    });
  }
  return <div className="site-width section-space catalog-layout">
    <button type="button" className="filter-toggle" aria-expanded={filtersOpen} aria-controls="catalog-filters" onClick={() => setFiltersOpen(!filtersOpen)}><SlidersHorizontal size={17} aria-hidden="true" />{filtersOpen ? "Hide filters" : "Show filters"}</button>
    <aside id="catalog-filters" className={"catalog-filters" + (filtersOpen ? " catalog-filters--open" : "")} aria-label="Product filters">
      <p className="eyebrow">Find your favorites</p>
      <h2>Filter products</h2>
      <label htmlFor="search">Search pieces</label>
      <input id="search" type="search" placeholder="Search the collection" value={query} onChange={e => setQuery(e.target.value)} />
      <label htmlFor="category">Collection</label>
      <select id="category" value={category} onChange={e => router.replace(e.target.value === "All" ? "/everything" : `/everything?category=${e.target.value}`, {
        scroll: false
      })}>{["All", "Women", "Men", "Accessories"].map(c => <option key={c}>{c}</option>)}</select>
      <label htmlFor="price">Maximum price: {money(max)}</label>
      <input id="price" type="range" min="0" max="20000" step="1000" value={max} onChange={e => setMax(Number(e.target.value))} />
      <button className="text-link" onClick={reset}>Reset filters</button>
      <p className="small-text">Prices in USD. Catalog and availability are demo data.</p>
    </aside>
    <section>
      <div className="catalog-toolbar">
        <p aria-live="polite">{items.length} {items.length === 1 ? "piece" : "pieces"} to explore</p>
        <label className="sort-control">Sort by<select value={sort} onChange={e => setSort(e.target.value)}><option value="featured">Featured</option><option value="price-asc">Price: low to high</option><option value="price-desc">Price: high to low</option></select></label>
      </div>
      {items.length ? <ProductGrid items={items} /> : <div className="empty-state">
        <h2>No pieces found.</h2>
        <p>Try a different search or give your filters a little more room.</p>
        <button className="primary-button" onClick={reset}>Reset filters</button>
      </div>}
    </section>
  </div>;
}
