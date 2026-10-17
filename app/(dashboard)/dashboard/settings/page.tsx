"use client";

import { useState } from "react";
import { updateProfile, EmailAuthProvider, reauthenticateWithCredential, updatePassword, sendEmailVerification } from "firebase/auth";
import { useAuth } from "@/context/auth-context";
import { authMessage } from "@/lib/auth";
export default function SettingsPage() {
  const {
    user,
    refreshUser
  } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [current, setCurrent] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const passwordAccount = user?.providerData.some(p => p.providerId === "password");
  async function run(action: () => Promise<void>, success: string) {
    setBusy(true);
    setError("");
    setMessage("");
    try {
      await action();
      setMessage(success);
    } catch (e) {
      setError(authMessage(e));
    } finally {
      setBusy(false);
    }
  }
  function profile(e: React.FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError("Enter at least two characters for your name.");
      return;
    }
    void run(async () => {
      await updateProfile(user!, {
        displayName: name.trim()
      });
      await refreshUser();
    }, "Your name has been saved to Firebase.");
  }
  function changePassword(e: React.FormEvent) {
    e.preventDefault();
    if (password.length < 8 || !/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
      setError("Use at least 8 characters with a letter and a number.");
      return;
    }
    if (password !== confirm) {
      setError("The passwords do not match.");
      return;
    }
    void run(async () => {
      await reauthenticateWithCredential(user!, EmailAuthProvider.credential(user!.email!, current));
      await updatePassword(user!, password);
      setCurrent("");
      setPassword("");
      setConfirm("");
    }, "Your password has been updated.");
  }
  return <div className="stack">
    <div>
      <p className="eyebrow">Account settings</p>
      <h1>A few personal details.</h1>
    </div>
    {error && <p role="alert" className="error-message">{error}</p>}
    {message && <p role="status" className="success-message">{message}</p>}
    <div className="settings-grid">
      <form className="content-card stack" onSubmit={profile}>
        <h2>Your name</h2>
        <div className="field">
          <label htmlFor="display-name">Full name</label>
          <input id="display-name" autoComplete="name" maxLength={80} required value={name} onChange={e => setName(e.target.value)} disabled={busy} />
        </div>
        <div className="field">
          <label htmlFor="account-email">Email</label>
          <input id="account-email" value={user?.email || "Not provided"} readOnly />
          <p className="small-text">Email changes are not offered in this version.</p>
        </div>
        <button className="primary-button" type="submit" disabled={busy}>Save name</button>
      </form>
      <section className="content-card stack">
        <h2>Email verification</h2>
        <p>{user?.emailVerified ? "Your email has been verified." : "Your email has not been verified yet."}</p>
        {!user?.emailVerified && user?.email && <button className="primary-button" disabled={busy} onClick={() => run(() => sendEmailVerification(user), "Verification email requested. Check your inbox, follow the link, then refresh your status.")}>Send verification email</button>}
        <button className="secondary-button" disabled={busy} onClick={() => run(refreshUser, "Verification status refreshed.")}>Refresh status</button>
        <p className="small-text">Email verification is informational in this demo. There are no verified-only purchase permissions.</p>
      </section>
    </div>
    {passwordAccount ? <form className="content-card stack password-settings" onSubmit={changePassword}>
      <h2>Change password</h2>
      <p className="small-text">Confirm your current password before setting a new one.</p>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="current-password">Current password</label>
          <input id="current-password" type="password" autoComplete="current-password" required value={current} onChange={e => setCurrent(e.target.value)} disabled={busy} />
        </div>
        <div className="field">
          <label htmlFor="new-password">New password</label>
          <input id="new-password" type="password" autoComplete="new-password" required minLength={8} value={password} onChange={e => setPassword(e.target.value)} disabled={busy} />
        </div>
        <div className="field">
          <label htmlFor="confirm-password">Confirm new password</label>
          <input id="confirm-password" type="password" autoComplete="new-password" required value={confirm} onChange={e => setConfirm(e.target.value)} disabled={busy} />
        </div>
      </div>
      <button className="primary-button" disabled={busy}>Update password</button>
    </form> : <p className="notice">Your password is managed by your sign-in provider. Change it in that provider’s account settings.</p>}
    <div className="notice">Payments, billing methods, email marketing preferences and remote session management are not available in this version.</div>
  </div>;
}
