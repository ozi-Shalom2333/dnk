"use client";

import Link from "next/link";
import { useAuth } from "@/context/auth-context";
export default function ProfilePage() {
  const {
    user
  } = useAuth();
  return <div className="stack">
    <div>
      <p className="eyebrow">Your profile</p>
      <h1>The details that are yours.</h1>
    </div>
    <div className="content-card stack">
      <div>
        <h2>{user?.displayName || "Name not set"}</h2>
        <p className="mt-4 break-all">{user?.email || "Email not provided by your sign-in provider"}</p>
      </div>
      <p>Email {user?.emailVerified ? "verified" : "not yet verified"}</p>
      {user?.metadata.creationTime && <p>Account created: {new Date(user.metadata.creationTime).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
          timeZone: "UTC"
        })}</p>}
      <p className="small-text">Your profile is managed by Firebase Authentication. DNK does not have public profile pages.</p>
      <Link href="/dashboard/settings" className="primary-button">Edit account details</Link>
    </div>
  </div>;
}
