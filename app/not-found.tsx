import Link from "next/link";
export default function NotFound() {
  return <main className="site-width section-space empty-state">
    <p className="eyebrow">404 / A little detour</p>
    <h1>This page isn’t here.</h1>
    <p>Let’s get you back to the collection.</p>
    <Link href="/everything" className="primary-button">Explore DNK</Link>
  </main>;
}
