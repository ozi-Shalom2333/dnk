import Link from "next/link";
import Image from "next/image";
import heroImage from "@/public/home-new-bg-free-img.webp";

export default function Hero() {
  return (
    <section className="home-hero" aria-labelledby="hero-heading">
      <Image src={heroImage} alt="Woman wearing sunglasses against a bright blue sky" fill priority placeholder="blur" sizes="100vw" className="hero-background" />
      <div className="site-width hero-content">
        <div className="hero-copy">
          <p className="eyebrow">The DNK collection</p>
          <h1 id="hero-heading">Find Your Style.<br />Make It Yours.</h1>
          <p className="hero-description">Clothing, shoes &amp; the details<br className="desktop-break" /> that complete your look.</p>
          <div className="hero-actions">
            <Link href="/everything" className="primary-button button-light">Shop now</Link>
            <Link href="#collections" className="secondary-button button-outline-light">Explore collections</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
