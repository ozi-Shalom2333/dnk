export type Category = "Men" | "Women" | "Accessories";
export interface Product {
  id: string;
  name: string;
  category: Category;
  priceCents: number;
  image: string;
  description: string;
  sizes: readonly string[];
  stock: number;
}
// Preserved catalog and prices. Stock and sizes are explicitly demo fixtures.
export const products: readonly Product[] = [{
  id: "yellow-shoes",
  name: "DNK Yellow Shoes",
  category: "Men",
  priceCents: 12000,
  image: "/sports-shoe1.webp",
  description: "A bright everyday sneaker with a relaxed, sporty silhouette.",
  sizes: ["40", "41", "42", "43", "44"],
  stock: 8
}, {
  id: "blue-shoes",
  name: "DNK Blue Shoes",
  category: "Men",
  priceCents: 20000,
  image: "/sports-shoe3.webp",
  description: "Easy blue sneakers for your everyday rotation.",
  sizes: ["40", "41", "42", "43"],
  stock: 6
}, {
  id: "brown-jeans",
  name: "Dark Brown Jeans",
  category: "Men",
  priceCents: 15000,
  image: "/product-m-jeans1.webp",
  description: "A versatile denim staple to pair with your favorite essentials.",
  sizes: ["S", "M", "L", "XL"],
  stock: 10
}, {
  id: "blue-jeans",
  name: "Blue Denim Jeans",
  category: "Women",
  priceCents: 15000,
  image: "/product-w-jeans2.webp",
  description: "Classic blue denim for simple, effortless outfits.",
  sizes: ["XS", "S", "M", "L"],
  stock: 7
}, {
  id: "gray-jeans",
  name: "Basic Gray Jeans",
  category: "Women",
  priceCents: 15000,
  image: "/product-w-jeans4.webp",
  description: "Neutral gray denim that works with your existing wardrobe.",
  sizes: ["XS", "S", "M", "L"],
  stock: 9
}, {
  id: "denim-shorts",
  name: "Blue Denim Shorts",
  category: "Women",
  priceCents: 13000,
  image: "/product-w-jeans1.webp",
  description: "A laid-back denim choice for warmer days.",
  sizes: ["XS", "S", "M", "L"],
  stock: 5
}, {
  id: "anchor-bracelet",
  name: "Anchor Bracelet",
  category: "Accessories",
  priceCents: 15000,
  image: "/product-accessory2.webp",
  description: "A small detail to finish your everyday look.",
  sizes: ["One size"],
  stock: 12
}, {
  id: "boho-bangle",
  name: "Boho Bangle Bracelet",
  category: "Accessories",
  priceCents: 15000,
  image: "/product-accessory1.webp",
  description: "An expressive accessory to wear alone or layered.",
  sizes: ["One size"],
  stock: 8
}, {
  id: "brown-purse",
  name: "Light Brown Purse",
  category: "Accessories",
  priceCents: 15000,
  image: "/product-bag1.webp",
  description: "A warm neutral accessory for your daily essentials.",
  sizes: ["One size"],
  stock: 4
}, {
  id: "red-bag",
  name: "Bright Red Bag",
  category: "Accessories",
  priceCents: 10000,
  image: "/product-bag3.webp",
  description: "A bold accent for an otherwise simple outfit.",
  sizes: ["One size"],
  stock: 0
}];
export const findProduct = (id: string) => products.find(p => p.id === id);
export const money = (cents: number) => new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
}).format(cents / 100);
export function filterProducts(query: string, category: string, maxCents: number, sort: string) {
  const items = products.filter(p => (!category || category === "All" || p.category === category) && p.priceCents <= maxCents && `${p.name} ${p.category}`.toLowerCase().includes(query.trim().toLowerCase()));
  return sort === "price-asc" ? items.sort((a, b) => a.priceCents - b.priceCents) : sort === "price-desc" ? items.sort((a, b) => b.priceCents - a.priceCents) : items;
}
