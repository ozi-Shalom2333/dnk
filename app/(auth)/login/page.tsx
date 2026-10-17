import { Suspense } from "react";
import { AuthForm } from "@/components/auth/auth-form";
export const metadata = {
  title: "Sign in"
};
export default function LoginPage() {
  return <Suspense fallback={<p role="status">Loading sign-in...</p>}><AuthForm mode="login" /></Suspense>;
}
