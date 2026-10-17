"use client";

import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";
import { addItem, changeQuantity, cartTotal, type CartItem, type ShoppingState } from "@/lib/shop/cart";
import { subscribe, getSnapshot, getServerSnapshot, getStorageWarning, updateShopping } from "@/lib/shop/store";
interface ShopContextValue extends ShoppingState {
  total: number;
  count: number;
  warning: string | null;
  add: (item: CartItem) => void;
  quantity: (id: string, size: string, qty: number) => void;
  remove: (id: string, size: string) => void;
  toggleWishlist: (id: string) => void;
  clear: () => void;
}
const ShopContext = createContext<ShopContextValue | null>(null);
export function ShopProvider({
  children
}: {
  children: ReactNode;
}) {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return <ShopContext.Provider value={{
    ...state,
    total: cartTotal(state.cart),
    count: state.cart.reduce((n, x) => n + x.quantity, 0),
    warning: getStorageWarning(),
    add: item => updateShopping(s => addItem(s, item)),
    quantity: (id, size, qty) => updateShopping(s => changeQuantity(s, id, size, qty)),
    remove: (id, size) => updateShopping(s => ({
      ...s,
      cart: s.cart.filter(x => x.productId !== id || x.size !== size)
    })),
    toggleWishlist: id => updateShopping(s => ({
      ...s,
      wishlist: s.wishlist.includes(id) ? s.wishlist.filter(x => x !== id) : [...s.wishlist, id]
    })),
    clear: () => updateShopping(s => ({
      ...s,
      cart: []
    }))
  }}>
    {children}
  </ShopContext.Provider>;
}
export function useShop() {
  const value = useContext(ShopContext);
  if (!value) throw new Error("ShopProvider is required");
  return value;
}
