import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import women from "@/public/women-fashion-free-img.webp";
import men from "@/public/men-fashion-free-img.webp";
import accessories from "@/public/product-bag1.webp";

const categories = [
  { name: "Women", copy: "Everyday pieces. Your own style.", image: women, href: "/everything?category=Women" },
  { name: "Men", copy: "Easy essentials for every day.", image: men, href: "/everything?category=Men" },
  { name: "Accessories", copy: "The details make the difference.", image: accessories, href: "/everything?category=Accessories" },
];

export default function PromoSection() {
  return (
    <section className="site-width section-space collections-section" id="collections" aria-labelledby="collections-heading">
      <div className="section-heading section-heading--center">
        <p className="eyebrow">Find something that feels like you</p>
        <h2 id="collections-heading">Shop by Category</h2>
      </div>
      <div className="category-grid">
        {categories.map(category => (
          <Link href={category.href} key={category.name} className={"category-tile" + (category.name === "Accessories" ? " category-tile--product" : "")}>
            <Image src={category.image} alt="" fill sizes="(max-width:700px) 90vw, 33vw" placeholder="blur" className="category-photo" />
            <div className="category-copy">
              <h3>{category.name}</h3>
              <p>{category.copy}</p>
              <span className="category-action">Shop collection <ArrowRight size={17} aria-hidden="true" /></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
