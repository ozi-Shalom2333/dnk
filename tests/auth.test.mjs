import test from 'node:test';
import assert from 'node:assert/strict';
import { register } from 'node:module';
register('./auth-loader.mjs', import.meta.url);
for (const name of ['API_KEY', 'AUTH_DOMAIN', 'PROJECT_ID', 'APP_ID']) process.env[`NEXT_PUBLIC_FIREBASE_${name}`] = 'test-value';
const service = await import('../lib/auth.ts');
const firebase = await import('../lib/firebase.ts');
const {
  calls,
  control
} = await import('./mocks/firebase-auth.mjs');
test('auth does not initialize in server rendering', () => {
  assert.throws(() => firebase.getClientAuth(), /browser only/);
  globalThis.window = {};
});
test('login awaits the selected persistence before authenticating', async () => {
  calls.length = 0;
  await service.signInEmail(' shopper@example.com ', 'sample-password', false);
  assert.deepEqual(calls.slice(0, 2), [['persistence', 'session'], ['login', 'shopper@example.com', 'sample-password']]);
  calls.length = 0;
  await service.signInEmail('shopper@example.com', 'sample-password', true);
  assert.equal(calls[0][1], 'local');
});
test('storage failures prevent a misleading successful login', async () => {
  calls.length = 0;
  control.failPersistence = true;
  await assert.rejects(service.signInEmail('x@example.com', 'password', true));
  assert.equal(calls.length, 1);
  control.failPersistence = false;
});
test('signup saves a trimmed name and distinguishes a partial profile failure', async () => {
  calls.length = 0;
  let result = await service.signUpEmail(' shopper@example.com ', 'sample-password', ' Sample Shopper ', false);
  assert.equal(result.profileSaved, true);
  assert.equal(result.user.displayName, 'Sample Shopper');
  assert.deepEqual(calls.map(x => x[0]), ['persistence', 'signup', 'profile']);
  control.failProfile = true;
  result = await service.signUpEmail('other@example.com', 'sample-password', 'Other', false);
  assert.equal(result.profileSaved, false);
  assert.ok(result.user);
  control.failProfile = false;
});
test('session observer restores the SDK user, reports logout and unsubscribes', async () => {
  const states = [];
  const stop = service.observeSession(u => states.push(u?.uid ?? null), () => {});
  assert.equal(states[0], 'test-user');
  await service.signOutAccount();
  assert.equal(states.at(-1), null);
  stop();
  assert.equal(calls.at(-1)[0], 'unsubscribe');
});
test('account errors use actionable messages without exposing SDK details', () => {
  assert.match(service.authMessage({
    code: 'auth/unauthorized-domain'
  }), /authorized/);
  assert.match(service.authMessage({
    code: 'auth/invalid-credential'
  }), /email and password/);
  assert.match(service.authMessage({
    code: 'auth/popup-closed-by-user'
  }), /cancelled/);
  assert.doesNotMatch(service.authMessage(Error('secret internals')), /secret internals/);
});
