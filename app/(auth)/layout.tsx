import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"


export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="relative min-h-screen flex items-center justify-center">
          <div className="absolute top-10 left-6 z-100 rounded-full shadow-lg hover:shadow-xl transition-all ">
            <Link href="/" className={buttonVariants({variant:"secondary"})}><ArrowLeft />Go Back</Link>
          </div>
            {children}
        </div>
    )
}