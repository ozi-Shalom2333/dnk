
import Navbar from "@/components/web/navbar"
import Footer from "@/components/web/footer"

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
