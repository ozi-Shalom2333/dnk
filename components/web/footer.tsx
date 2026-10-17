import Link from "next/link";
import { BrandLogo } from "./brand-logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-width footer-grid">
        <div className="footer-brand">
          <BrandLogo />
          <p>Fashion for every kind of day.</p>
          <p className="small-text">Explore your style with clothing, shoes and accessories from DNK.</p>
        </div>
        <div>
          <h2>Shop the collection</h2>
          <Link href="/everything">Everything</Link>
          <Link href="/everything?category=Women">Women</Link>
          <Link href="/everything?category=Men">Men</Link>
          <Link href="/everything?category=Accessories">Accessories</Link>
        </div>
        <div>
          <h2>Your DNK</h2>
          <Link href="/dashboard">My account</Link>
          <Link href="/wishlist">Wishlist</Link>
          <Link href="/cart">Shopping basket</Link>
          <Link href="/contact">Contact &amp; help</Link>
        </div>
        <div>
          <h2>About this store</h2>
          <Link href="/about">About DNK</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Store demo terms</Link>
          <Link href="/credits">Imagery &amp; credits</Link>
        </div>
      </div>
      <div className="site-width footer-bottom">
        <span>© {new Date().getFullYear()} DNK. A fashion ecommerce portfolio project.</span>
        <span>Demo catalog. Checkout ends at an unpaid preview.</span>
      </div>
    </footer>
  );
}
