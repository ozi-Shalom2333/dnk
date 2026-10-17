"use client";

import Link from "next/link";
export default function ErrorPage({
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  return <div className="site-width section-space empty-state">
    <h1>Something didn’t load.</h1>
    <p>Your basket remains in this browser. Try loading this page again.</p>
    <div className="inline-actions justify-center">
      <button onClick={reset} className="primary-button">Try again</button>
      <Link href="/everything" className="secondary-button">Back to the collection</Link>
    </div>
  </div>;
}
