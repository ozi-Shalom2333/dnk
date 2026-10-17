import test from 'node:test';
import assert from 'node:assert/strict';
import { products, filterProducts, money } from '../lib/shop/catalog.ts';
import { normalizeShopping, emptyShopping, addItem, changeQuantity, cartTotal } from '../lib/shop/cart.ts';
import { reviewCheckout } from '../lib/shop/checkout.ts';
import { safeReturnPath } from '../lib/navigation.ts';
const line = {
  productId: 'yellow-shoes',
  size: '42',
  quantity: 2
};
const details = {
  name: 'Sample Shopper',
  email: 'shopper@example.com',
  address: '10 Sample Street',
  city: 'Sample City',
  postalCode: '',
  country: 'Nigeria'
};
test('catalog search, category, price and sorting combine', () => {
  assert.equal(products.length, 10);
  assert.equal(filterProducts('denim', 'Women', 15000, 'price-asc').length, 2);
  assert.equal(filterProducts('', 'All', 0, 'featured').length, 0);
  const sorted = filterProducts('', 'All', 20000, 'price-desc');
  assert.equal(sorted[0].priceCents, 20000);
  assert.equal(sorted.at(-1).priceCents, 10000);
  assert.equal(money(12000), '$120.00');
});
test('unsafe or stale browser state cannot introduce unavailable items or invalid quantities', () => {
  assert.deepEqual(normalizeShopping(null), emptyShopping);
  const result = normalizeShopping({
    cart: [null, {}, line, {
      productId: 'unknown',
      size: 'M',
      quantity: 3
    }, {
      productId: 'red-bag',
      size: 'One size',
      quantity: 1
    }, {
      ...line,
      size: 'FAKE'
    }, {
      ...line,
      quantity: -5
    }, {
      ...line,
      quantity: 1.5
    }, {
      ...line,
      quantity: '9'
    }],
    wishlist: ['unknown', 'yellow-shoes', 'yellow-shoes', null]
  });
  assert.deepEqual(result, {
    cart: [line],
    wishlist: ['yellow-shoes']
  });
});
test('basket merges the same size and limits total stock across sizes', () => {
  let s = addItem(emptyShopping, line);
  s = addItem(s, {
    ...line,
    quantity: 3
  });
  assert.equal(s.cart.length, 1);
  assert.equal(s.cart[0].quantity, 5);
  s = addItem(s, {
    ...line,
    size: '43',
    quantity: 10
  });
  assert.equal(s.cart.reduce((n, x) => n + x.quantity, 0), 8);
  assert.equal(cartTotal(s.cart), 96000);
  s = changeQuantity(s, 'yellow-shoes', '42', 0);
  assert.equal(s.cart.length, 1);
  assert.equal(s.cart[0].size, '43');
});
test('checkout never creates a paid order, mutates the basket, or accepts invalid input', () => {
  const cart = [line];
  const before = JSON.stringify(cart);
  const result = reviewCheckout(cart, details);
  assert.equal(result.status, 'unpaid-preview');
  assert.equal(result.paymentEnabled, false);
  assert.equal(result.subtotalCents, 24000);
  assert.equal(result.orderId, undefined);
  assert.equal(JSON.stringify(cart), before);
  result.items[0].quantity = 1;
  assert.equal(cart[0].quantity, 2);
  assert.throws(() => reviewCheckout([], details), /basket/);
  assert.throws(() => reviewCheckout([{
    ...line,
    quantity: 99
  }], details), /basket/);
  assert.throws(() => reviewCheckout(cart, {
    ...details,
    email: 'bad'
  }), /email/);
  assert.throws(() => reviewCheckout(cart, {
    ...details,
    address: ''
  }), /address/);
});
test('sign-in return destination cannot redirect outside DNK or back into auth loops', () => {
  for (const value of [null, 'https://evil.example', '//evil.example', '/\\evil.example', '/login', '/signup?next=/login', '/forgot-password']) assert.equal(safeReturnPath(value), '/dashboard');
  assert.equal(safeReturnPath('/dashboard/settings'), '/dashboard/settings');
  assert.equal(safeReturnPath('/checkout?from=cart'), '/checkout?from=cart');
});
