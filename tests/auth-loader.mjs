export async function resolve(specifier, context, nextResolve) {
  if (specifier === 'firebase/app') return {
    url: new URL('./mocks/firebase-app.mjs', import.meta.url).href,
    shortCircuit: true
  };
  if (specifier === 'firebase/auth') return {
    url: new URL('./mocks/firebase-auth.mjs', import.meta.url).href,
    shortCircuit: true
  };
  return nextResolve(specifier, context);
}
