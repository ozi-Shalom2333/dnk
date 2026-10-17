import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
export const metadata: Metadata = {
  title: {
    default: "DNK | Everyday, your way",
    template: "%s | DNK"
  },
  description: "Explore DNK's fashion storefront demo. Browse essentials, build a basket, and review checkout. Payments are not available."
};
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <html lang="en">
    <body>
      <Providers>{children}</Providers>
    </body>
  </html>;
}
