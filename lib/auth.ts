"use client";

import { browserLocalPersistence, browserSessionPersistence, setPersistence, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged, type User } from "firebase/auth";
import { getClientAuth } from "./firebase";
export async function prepareSignIn(remember: boolean) {
  const auth = getClientAuth();
  await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);
  return auth;
}
export async function signInEmail(email: string, password: string, remember: boolean) {
  const auth = await prepareSignIn(remember);
  return signInWithEmailAndPassword(auth, email.trim(), password);
}
export async function signUpEmail(email: string, password: string, name: string, remember: boolean) {
  const auth = await prepareSignIn(remember);
  const result = await createUserWithEmailAndPassword(auth, email.trim(), password);
  // Account creation is already committed. A name failure must not invite a duplicate signup.
  try {
    await updateProfile(result.user, {
      displayName: name.trim()
    });
    return {
      user: result.user,
      profileSaved: true
    };
  } catch {
    return {
      user: result.user,
      profileSaved: false
    };
  }
}
export const signOutAccount = () => signOut(getClientAuth());
export const observeSession = (onUser: (user: User | null) => void, onError: (error: Error) => void) => onAuthStateChanged(getClientAuth(), onUser, onError);
export function authMessage(error: unknown): string {
  const code = (error as {
    code?: string;
  })?.code;
  switch (code) {
    case "auth/invalid-credential":
    case "auth/wrong-password":
    case "auth/user-not-found":
      return "Check your email and password and try again.";
    case "auth/email-already-in-use":
      return "This email already has an account. Sign in or reset your password.";
    case "auth/weak-password":
    case "auth/password-does-not-meet-requirements":
      return "Choose a stronger password that meets your Firebase project's password policy.";
    case "auth/invalid-email":
      return "Enter a valid email address.";
    case "auth/too-many-requests":
      return "Too many attempts. Wait a little and try again.";
    case "auth/network-request-failed":
      return "Could not connect. Check your connection and try again.";
    case "auth/operation-not-allowed":
      return "This sign-in method has not been enabled for DNK.";
    case "auth/unauthorized-domain":
      return "This website's domain has not been authorized in Firebase.";
    case "auth/invalid-api-key":
    case "auth/app-not-authorized":
      return "Firebase configuration is invalid for this website. The site owner needs to check the web app settings.";
    case "auth/user-disabled":
      return "This account is disabled. Contact the site owner.";
    case "auth/popup-closed-by-user":
    case "auth/cancelled-popup-request":
      return "Sign-in was cancelled. You can try again.";
    case "auth/popup-blocked":
      return "Allow popups for this site or use email sign-in.";
    case "auth/account-exists-with-different-credential":
      return "Sign in using the original provider for this email.";
    case "auth/requires-recent-login":
      return "For security, sign out and sign in again before making this change.";
    case "auth/web-storage-unsupported":
      return "Allow browser storage to keep your sign-in session.";
    default:
      return "The account action could not be completed. Try again.";
  }
}
export const socialProviders = {
  google: process.env.NEXT_PUBLIC_ENABLE_GOOGLE_AUTH === "true",
  github: process.env.NEXT_PUBLIC_ENABLE_GITHUB_AUTH === "true"
};
