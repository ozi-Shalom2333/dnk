export function safeReturnPath(value: string | null) {
  if (!value || !value.startsWith("/") || value.startsWith("//") || /[\\\x00-\x1f]/.test(value)) return "/dashboard";
  const path = value.split(/[?#]/)[0];
  return ["/login", "/signup", "/forgot-password"].includes(path) ? "/dashboard" : value;
}
