"use client";

import { emptyShopping, normalizeShopping, type ShoppingState } from "./cart";
const KEY = "dnk.shopping.v1";
let snapshot = emptyShopping;
let ready = false;
let warning: string | null = null;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach(listener => listener());
function read() {
  try {
    const value = localStorage.getItem(KEY);
    const loaded = value ? normalizeShopping(JSON.parse(value)) : emptyShopping;
    snapshot = { cart: loaded.cart, wishlist: loaded.wishlist };
    warning = null;
  } catch {
    warning = "Saved shopping data could not be loaded. You can start a fresh basket.";
    snapshot = { cart: [], wishlist: [] };
  }
}
const onStorage = (event: StorageEvent) => {
  if (event.key === KEY || event.key === null) {
    read();
    emit();
  }
};
export function subscribe(listener: () => void) {
  listeners.add(listener);
  if (!ready) {
    read();
    ready = true;
  }
  if (listeners.size === 1) window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) window.removeEventListener("storage", onStorage);
  };
}
export const getSnapshot = () => snapshot;
export const getServerSnapshot = () => emptyShopping;
export const getStorageWarning = () => warning;
export function updateShopping(update: (state: ShoppingState) => ShoppingState) {
  if (!ready) {
    read();
    ready = true;
  }
  snapshot = normalizeShopping(update(snapshot));
  try {
    localStorage.setItem(KEY, JSON.stringify(snapshot));
    warning = null;
  } catch {
    warning = "Browser storage is unavailable. Your basket will last only while this page is open.";
  }
  emit();
}
