import test from 'node:test';
import assert from 'node:assert/strict';
const KEY = 'dnk.shopping.v1';
function environment(initial = null, failRead = false, failWrite = false) {
  globalThis.window = new EventTarget();
  let stored = initial;
  globalThis.localStorage = {
    getItem() {
      if (failRead) throw Error('disabled');
      return stored;
    },
    setItem(key, value) {
      if (failWrite) throw Error('quota');
      stored = value;
    }
  };
  return () => stored;
}
let id = 0;
const load = () => import(`../lib/shop/store.ts?test=${++id}`);
test('browser persistence restores, changes and removes basket items', async () => {
  const stored = environment(JSON.stringify({
    cart: [{
      productId: 'yellow-shoes',
      size: '42',
      quantity: 2
    }],
    wishlist: ['gray-jeans']
  }));
  const store = await load();
  let updates = 0;
  const unsubscribe = store.subscribe(() => updates++);
  assert.equal(store.getSnapshot().cart[0].quantity, 2);
  store.updateShopping(s => ({
    ...s,
    cart: []
  }));
  assert.equal(updates, 1);
  assert.deepEqual(JSON.parse(stored()).cart, []);
  unsubscribe();
});
test('malformed or unavailable browser storage recovers without crashing', async () => {
  environment('malformed');
  let store = await load();
  let stop = store.subscribe(() => {});
  assert.deepEqual(store.getSnapshot().cart, []);
  assert.match(store.getStorageWarning(), /could not be loaded/);
  stop();
  environment(null, false, true);
  store = await load();
  stop = store.subscribe(() => {});
  store.updateShopping(s => ({
    ...s,
    wishlist: ['blue-shoes']
  }));
  assert.deepEqual(store.getSnapshot().wishlist, ['blue-shoes']);
  assert.match(store.getStorageWarning(), /storage is unavailable/);
  stop();
});
test('storage events still reach remaining subscribers after one unmounts', async () => {
  environment();
  const store = await load();
  let notifications = 0;
  const stop1 = store.subscribe(() => {});
  const stop2 = store.subscribe(() => notifications++);
  stop1();
  localStorage.setItem(KEY, JSON.stringify({
    cart: [],
    wishlist: ['brown-purse']
  }));
  const e = new Event('storage');
  e.key = KEY;
  window.dispatchEvent(e);
  assert.equal(notifications, 1);
  assert.deepEqual(store.getSnapshot().wishlist, ['brown-purse']);
  stop2();
});
