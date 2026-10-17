import Navbar from "@/components/web/navbar";
import Footer from "@/components/web/footer";
export default function ShopLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>
    <Navbar />
    <main id="main-content" tabIndex={-1}>
      {children}
    </main>
    <Footer />
  </>;
}
