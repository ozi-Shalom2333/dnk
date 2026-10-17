import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BrandLogo } from "@/components/web/brand-logo";
export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className="auth-shell">
    <Link href="#main-content" className="skip-link">Skip to content</Link>
    <div className="site-width auth-top">
      <BrandLogo />
      <Link href="/everything" className="text-link"><ArrowLeft size={15} aria-hidden="true" />Back to shopping</Link>
    </div>
    <main id="main-content" tabIndex={-1} className="auth-content">
      {children}
    </main>
  </div>;
}
