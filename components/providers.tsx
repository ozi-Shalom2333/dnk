"use client";

import { MotionConfig } from "framer-motion";
import { AuthProvider } from "@/context/auth-context";
import { ShopProvider } from "@/context/shop-context";
import { Toaster } from "@/components/ui/sonner";
export function Providers({
  children
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">
    <AuthProvider>
      <ShopProvider>
        {children}
        <Toaster theme="light" position="bottom-right" closeButton />
      </ShopProvider>
    </AuthProvider>
  </MotionConfig>;
}
