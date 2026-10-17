import { cartTotal, normalizeShopping, type CartItem } from "./cart";
export interface CheckoutDetails {
  name: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}
export function validateCheckout(details: CheckoutDetails): string | null {
  if (details.name.trim().length < 2) return "Enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email.trim())) return "Enter a valid email address.";
  if (details.address.trim().length < 5 || details.city.trim().length < 2 || !details.country.trim()) return "Complete the delivery address.";
  return null;
}
// Returns a review snapshot only. Never creates an order or records a payment.
export function reviewCheckout(cart: CartItem[], details: CheckoutDetails) {
  const error = validateCheckout(details);
  if (error) throw new Error(error);
  const valid = normalizeShopping({
    cart,
    wishlist: []
  }).cart;
  if (!valid.length || JSON.stringify(valid) !== JSON.stringify(cart)) throw new Error("Your basket has changed. Review it before continuing.");
  return {
    status: "unpaid-preview" as const,
    items: valid.map(item => ({
      ...item
    })),
    subtotalCents: cartTotal(valid),
    details: {
      ...details
    },
    paymentEnabled: false as const
  };
}
