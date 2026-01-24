import Image from "next/image";
import playstore from '@/public/playstore-free-img-300x90.webp'
import Link from "next/link";

export default function Footer() {
    const quickLinks = [
        { title: "Home", href: "/" },
        { title: "About", href: "/about" },
        { title: "Contact", href: "/contact" },
        { title: "Cart", href: "/cart" },
        { title: "My Account", href: "/account" },
    ];
    const forHer = [
        { title: "Women Jeans", href: "/dresses" },
        { title: "Tops and Shirts", href: "/shoes" },
        { title: "Women Jackets", href: "/bags" },
        { title: "Women Accessories", href: "/accessories" },
        { title: "Women Footwear", href: "/accessories" },
    ];
    const forHim = [
        { title: "Men Jeans", href: "/shoes" },
        { title: "Men T-Shirts", href: "/bags" },
        { title: "Accessories", href: "/accessories" },
        { title: "Men Footwear", href: "/accessories" },
        { title: "Men Jackets", href: "/accessories" },
    ];
    return (
        <footer className="grid h-100 grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12 p-12 md:p-16 lg:p-20">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-lg mb-4">Quick Links</h2>
            {quickLinks.map((link) => (
                <Link key={link.title} href={link.href} className="text-sm md:text-base hover:text-gray-500 transition-colors duration-300">{link.title}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-lg mb-4">For Her</h2>
            {forHer.map((link) => (
                <Link key={link.title} href={link.href} className="text-sm md:text-base hover:text-gray-500 transition-colors duration-300">{link.title}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-lg mb-4">For Him</h2>
            {forHim.map((link) => (
                <Link key={link.title} href={link.href} className="text-sm md:text-base hover:text-gray-500 transition-colors duration-300">{link.title}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <Image
            src={playstore}
            alt="playstore"
            width={100}
            height={100}
            className="object-contain"
            />
          </div>
        </footer>
    );
}