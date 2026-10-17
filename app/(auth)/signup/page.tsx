import { Suspense } from "react";
import { AuthForm } from "@/components/auth/auth-form";
export const metadata = {
  title: "Create account"
};
export default function SignupPage() {
  return <Suspense fallback={<p role="status">Loading sign-up...</p>}><AuthForm mode="signup" /></Suspense>;
}
