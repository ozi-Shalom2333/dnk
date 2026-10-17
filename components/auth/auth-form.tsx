"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import { useAuth } from "@/context/auth-context";
import { prepareSignIn, signInEmail, signUpEmail, authMessage, socialProviders } from "@/lib/auth";
import { getClientAuth } from "@/lib/firebase";
import { safeReturnPath } from "@/lib/navigation";
import { toast } from "sonner";
type Mode = "login" | "signup" | "reset";
export function AuthForm({
  mode
}: {
  mode: Mode;
}) {
  const {
    user,
    loading,
    configured,
    error: sessionError
  } = useAuth();
  const router = useRouter();
  const params = useSearchParams();
  const destination = safeReturnPath(params.get("next"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [name, setName] = useState("");
  const [remember, setRemember] = useState(false);
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (user && !loading && !busy && mode !== "reset") router.replace(destination);
  }, [user, loading, busy, mode, destination, router]);
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setMessage("");
    if (mode === "signup" && (name.trim().length < 2 || password.length < 8 || !/[a-zA-Z]/.test(password) || !/[0-9]/.test(password))) {
      setError("Enter your name and use at least 8 characters with a letter and a number.");
      return;
    }
    if (mode === "signup" && password !== confirm) {
      setError("The passwords do not match.");
      return;
    }
    setBusy(true);
    try {
      if (mode === "reset") {
        await sendPasswordResetEmail(getClientAuth(), email.trim());
        setMessage("If this email has an eligible account, a reset link has been requested. Check your inbox and spam folder.");
      } else {
        if (mode === "signup") {
          const result = await signUpEmail(email, password, name, remember);
          if (result.profileSaved) toast.success("Your DNK account is ready.");else toast.warning("Your account was created, but your name could not be saved. Update it in account settings.");
        } else {
          await signInEmail(email, password, remember);
          toast.success("You’re signed in.");
        }
        router.replace(destination);
      }
    } catch (e) {
      if (mode === "reset" && (e as {
        code?: string;
      }).code === "auth/user-not-found") setMessage("If this email has an eligible account, a reset link has been requested. Check your inbox and spam folder.");else setError(authMessage(e));
    } finally {
      setBusy(false);
    }
  }
  async function social(provider: "google" | "github") {
    setBusy(true);
    setError("");
    try {
      const auth = await prepareSignIn(remember);
      await signInWithPopup(auth, provider === "google" ? new GoogleAuthProvider() : new GithubAuthProvider());
      toast.success("You’re signed in.");
      router.replace(destination);
    } catch (e) {
      setError(authMessage(e));
    } finally {
      setBusy(false);
    }
  }
  return <div className="auth-form content-card stack">
    <div>
      <p className="eyebrow">Your DNK account</p>
      <h1>{mode === "signup" ? "Create Your Account" : mode === "reset" ? "Reset Your Password" : "Welcome Back"}</h1>
      <p className="mt-4">{mode === "signup" ? "Create an account to manage your profile." : mode === "reset" ? "Request a link to reset your password." : "Sign in to your account. Your next favorite is waiting."}</p>
    </div>
    {!configured && <p role="status" className="notice">Account access is not configured on this installation. You can still explore the shop and review checkout as a guest.</p>}
    {(error || sessionError) && <p role="alert" className="error-message">{error || sessionError}</p>}
    {message && <p role="status" className="success-message">{message}</p>}
    <form onSubmit={submit} className="stack">
      {mode === "signup" && <div className="field">
        <label htmlFor="auth-name">Full name</label>
        <input id="auth-name" autoComplete="name" required maxLength={80} value={name} onChange={e => setName(e.target.value)} disabled={busy} />
      </div>}
      <div className="field">
        <label htmlFor="auth-email">Email address</label>
        <input id="auth-email" type="email" autoComplete="email" required maxLength={254} value={email} onChange={e => setEmail(e.target.value)} disabled={busy} />
      </div>
      {mode !== "reset" && <>
        <div className="field">
          <label htmlFor="auth-password">Password</label>
          <div className="password-field">
            <input id="auth-password" type={show ? "text" : "password"} autoComplete={mode === "login" ? "current-password" : "new-password"} aria-describedby={mode === "signup" ? "password-guidance" : undefined} required minLength={mode === "signup" ? 8 : undefined} value={password} onChange={e => setPassword(e.target.value)} disabled={busy} />
            <button type="button" aria-label={show ? "Hide password" : "Show password"} onClick={() => setShow(!show)}>{show ? <EyeOff size={18} /> : <Eye size={18} />}</button>
          </div>
          {mode === "signup" && <p className="small-text" id="password-guidance">At least 8 characters with a letter and a number. Firebase may require a stronger password.</p>}
        </div>
        {mode === "signup" && <div className="field">
          <label htmlFor="auth-confirm">Confirm password</label>
          <input id="auth-confirm" type={show ? "text" : "password"} autoComplete="new-password" required value={confirm} onChange={e => setConfirm(e.target.value)} disabled={busy} />
        </div>}
        <div className="inline-actions justify-between">
          <label className="checkbox-label"><input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} disabled={busy} /> Keep me signed in on this device</label>
          {mode === "login" && <Link href="/forgot-password" className="text-link">Forgot password?</Link>}
        </div>
        <p className="small-text">Unchecked: sign-in lasts for this browser tab. Use this on a shared device.</p>
      </>}
      <button className="primary-button" disabled={busy || loading || !configured} type="submit">{busy && <Loader2 className="animate-spin" size={16} />} {busy ? "Please wait..." : mode === "signup" ? "Create account" : mode === "reset" ? "Request reset link" : "Sign in"}</button>
    </form>
    {mode !== "reset" && (socialProviders.google || socialProviders.github) && <div className="stack auth-social">
      {socialProviders.google && <button disabled={busy || loading || !configured} className="secondary-button" onClick={() => social("google")}>Continue with Google</button>}
      {socialProviders.github && <button disabled={busy || loading || !configured} className="secondary-button" onClick={() => social("github")}>Continue with GitHub</button>}
    </div>}
    <div className="small-text">
      {mode === "login" ? <>New here? <Link href={`/signup?next=${encodeURIComponent(destination)}`} className="text-link">Create an account</Link></> : <Link href={`/login?next=${encodeURIComponent(destination)}`} className="text-link">Back to sign in</Link>}
    </div>
    <p className="small-text">This is a demo shop with real Firebase accounts when configured. Read our <Link href="/privacy" className="underline">privacy notice</Link> and <Link href="/terms" className="underline">demo terms</Link>.</p>
  </div>;
}
