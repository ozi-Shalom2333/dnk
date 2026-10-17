import Link from "next/link";
import Image from "next/image";
import image from "@/public/men-fashion-free-img.webp";
export const metadata = {
  title: "About DNK"
};
export default function AboutPage() {
  return <div className="site-width section-space">
    <div className="section-heading">
      <div>
        <p className="eyebrow">A little about DNK</p>
        <h1>Everyday, your way.</h1>
      </div>
    </div>
    <div className="detail-layout">
      <div className="stack prose-content">
        <h2>Good style starts<br />with feeling like yourself.</h2>
        <p>DNK brings clothing, footwear and accessories together in a simple fashion storefront. The collection is built around everyday pieces and the details that make a look your own.</p>
        <h2>A project you can explore.</h2>
        <p>This is an ecommerce portfolio demonstration. The catalog, prices and availability are sample data. Explore the collection, save favorites, choose sizes, build a basket and preview checkout.</p>
        <p>When configured, accounts use real Firebase Authentication. Payments, delivery and order fulfillment are not active. Checkout ends with an unpaid preview.</p>
        <Link href="/everything" className="primary-button">Find your everyday favorites ↗</Link>
      </div>
      <div className="editorial-photo">
        <Image src={image} alt="Man wearing sunglasses and a white shirt" fill placeholder="blur" sizes="(max-width:760px) 100vw, 50vw" className="object-cover" />
      </div>
    </div>
  </div>;
}
