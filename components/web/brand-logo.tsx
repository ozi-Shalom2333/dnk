import Image from "next/image";
import Link from "next/link";
import darkLogo from "@/public/logo@2x-free-img.webp";
import lightLogo from "@/public/logo1-free-img.webp";

export function BrandLogo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="brand-logo" aria-label="DNK home">
      <Image src={inverse ? lightLogo : darkLogo} alt="DNK" sizes="140px" />
    </Link>
  );
}
