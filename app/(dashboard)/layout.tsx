"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/auth-context";
import { authMessage } from "@/lib/auth";
import Navbar from "@/components/web/navbar";
import Footer from "@/components/web/footer";
const links = [{
  name: "Overview",
  href: "/dashboard"
}, {
  name: "Profile",
  href: "/dashboard/profile"
}, {
  name: "Settings",
  href: "/dashboard/settings"
}];
export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const {
    user,
    loading,
    error,
    configured,
    logout
  } = useAuth();
  const router = useRouter();
  const path = usePathname();
  const [busy, setBusy] = useState(false);
  const [logoutError, setLogoutError] = useState("");
  useEffect(() => {
    if (!loading && !user && configured && !error) router.replace(`/login?next=${encodeURIComponent(path)}`);
  }, [user, loading, configured, error, path, router]);
  async function signOut() {
    setBusy(true);
    setLogoutError("");
    try {
      await logout();
      router.replace("/login");
    } catch (e) {
      setLogoutError(authMessage(e));
    } finally {
      setBusy(false);
    }
  }
  return <>
    <Navbar />
    <main id="main-content" tabIndex={-1} className="site-width section-space">
      {loading ? <p role="status">Restoring your account session...</p> : !user ? <div className="empty-state">
        <h1>Account access</h1>
        <p>{error || (!configured ? "Firebase account access is not configured on this installation." : "Sign in to view your account.")}</p>
        <Link href="/login" className="primary-button">Go to sign in</Link>
      </div> : <>
        <div className="account-nav">
          <nav aria-label="Account navigation">
            {links.map(link => <Link key={link.href} href={link.href} aria-current={path === link.href ? "page" : undefined}>{link.name}</Link>)}
          </nav>
          <button className="text-link" onClick={signOut} disabled={busy}>{busy ? "Signing out..." : "Sign out"}</button>
        </div>
        {logoutError && <p className="error-message" role="alert">{logoutError}</p>}
        {children}
      </>}
    </main>
    <Footer />
  </>;
}
