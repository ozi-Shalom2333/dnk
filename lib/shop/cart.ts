import { findProduct } from "./catalog";
export interface CartItem {
  productId: string;
  size: string;
  quantity: number;
}
export interface ShoppingState {
  cart: CartItem[];
  wishlist: string[];
}
export const emptyShopping: ShoppingState = {
  cart: [],
  wishlist: []
};
export function normalizeShopping(value: unknown): ShoppingState {
  if (!value || typeof value !== "object") return emptyShopping;
  const input = value as Partial<ShoppingState>;
  const cart: CartItem[] = [];
  for (const item of Array.isArray(input.cart) ? input.cart.slice(0, 100) : []) {
    if (!item || typeof item !== "object") continue;
    const p = findProduct(item.productId);
    if (!p || !p.stock || !p.sizes.includes(item.size) || !Number.isSafeInteger(item.quantity) || item.quantity <= 0) continue;
    const existing = cart.find(x => x.productId === item.productId && x.size === item.size);
    const already = cart.filter(x => x.productId === item.productId).reduce((n, x) => n + x.quantity, 0);
    const qty = Math.min(item.quantity, Math.max(0, p.stock - already));
    if (qty && existing) existing.quantity += qty;else if (qty) cart.push({
      productId: p.id,
      size: item.size,
      quantity: qty
    });
  }
  const wishlist = Array.isArray(input.wishlist) ? [...new Set(input.wishlist.filter(id => typeof id === "string" && findProduct(id)))] : [];
  return {
    cart,
    wishlist
  };
}
export const cartTotal = (cart: CartItem[]) => cart.reduce((n, item) => n + (findProduct(item.productId)?.priceCents ?? 0) * item.quantity, 0);
export function addItem(state: ShoppingState, item: CartItem): ShoppingState {
  return normalizeShopping({
    ...state,
    cart: [...state.cart, item]
  });
}
export function changeQuantity(state: ShoppingState, productId: string, size: string, quantity: number): ShoppingState {
  return normalizeShopping({
    ...state,
    cart: state.cart.map(item => item.productId === productId && item.size === size ? {
      ...item,
      quantity
    } : item)
  });
}
