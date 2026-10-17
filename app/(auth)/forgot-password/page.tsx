import { Suspense } from "react";
import { AuthForm } from "@/components/auth/auth-form";
export const metadata = {
  title: "Reset password"
};
export default function ResetPage() {
  return <Suspense fallback={<p role="status">Loading password reset...</p>}><AuthForm mode="reset" /></Suspense>;
}
