"use client";

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, connectAuthEmulator, type Auth } from "firebase/auth";
const requiredConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};
const config = {
  ...requiredConfig,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};
// These extra web app identifiers are optional for Authentication.
export const firebaseConfigured = Object.values(requiredConfig).every(value => Boolean(value?.trim()));
let clientAuth: Auth | null = null;
export function getClientAuth(): Auth {
  if (typeof window === "undefined") throw new Error("Authentication is available in the browser only.");
  if (!firebaseConfigured) throw new Error("Firebase authentication is not configured. Follow docs/FIREBASE.md to enable accounts.");
  if (!clientAuth) {
    const candidate = getAuth(getApps().length ? getApp() : initializeApp(config));
    const emulator = process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_URL;
    if (emulator && process.env.NODE_ENV === "development") {
      const url = new URL(emulator);
      if (!['localhost', '127.0.0.1', '[::1]'].includes(url.hostname)) throw new Error("The auth emulator must be local.");
      if (!candidate.emulatorConfig) connectAuthEmulator(candidate, url.origin);
    }
    clientAuth = candidate;
  }
  return clientAuth;
}
