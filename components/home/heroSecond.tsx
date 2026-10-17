import Link from "next/link";
import Image from "next/image";
import banner from "@/public/banner-03.webp";

export default function HeroSecond() {
  return (
    <section className="campaign-section section-space" aria-labelledby="campaign-heading">
      <div className="site-width campaign-banner">
        <Image src={banner} alt="Woman styling a cap, scarf and casual layers" fill placeholder="blur" sizes="(max-width:700px) 90vw, 1280px" className="campaign-photo" />
        <div className="campaign-copy">
          <p className="eyebrow">A fresh perspective</p>
          <h2 id="campaign-heading">Everyday Essentials.<br />Extraordinary You.</h2>
          <p>Start with the pieces you love.<br />Make the rest your own.</p>
          <Link href="/everything" className="primary-button button-light">Discover the collection</Link>
        </div>
      </div>
    </section>
  );
}
