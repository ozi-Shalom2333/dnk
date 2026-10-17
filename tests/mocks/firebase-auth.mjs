export const calls = [];
export const control = {
  failPersistence: false,
  failProfile: false
};
export const browserLocalPersistence = {
  name: 'local'
};
export const browserSessionPersistence = {
  name: 'session'
};
const auth = {
  currentUser: null
};
let observer;
export const getAuth = () => auth;
export const connectAuthEmulator = (_, url) => calls.push(['emulator', url]);
export async function setPersistence(_, value) {
  calls.push(['persistence', value.name]);
  if (control.failPersistence) throw {
    code: 'auth/web-storage-unsupported'
  };
}
export async function signInWithEmailAndPassword(_, email, password) {
  calls.push(['login', email, password]);
  auth.currentUser = {
    uid: 'test-user',
    email
  };
  observer?.(auth.currentUser);
  return {
    user: auth.currentUser
  };
}
export async function createUserWithEmailAndPassword(_, email, password) {
  calls.push(['signup', email, password]);
  auth.currentUser = {
    uid: 'test-user',
    email
  };
  observer?.(auth.currentUser);
  return {
    user: auth.currentUser
  };
}
export async function updateProfile(user, value) {
  calls.push(['profile', value.displayName]);
  if (control.failProfile) throw Error('profile failed');
  Object.assign(user, value);
}
export async function signOut() {
  calls.push(['logout']);
  auth.currentUser = null;
  observer?.(null);
}
export function onAuthStateChanged(_, fn) {
  calls.push(['subscribe']);
  observer = fn;
  fn(auth.currentUser);
  return () => {
    calls.push(['unsubscribe']);
    observer = null;
  };
}
