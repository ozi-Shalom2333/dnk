'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsHandbagFill } from "react-icons/bs";
import { FaUserAlt, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-black/20 text-white">
      <div className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
        
        
      <Image
         src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1@2x-free-img.png"
         alt="Brand logo"
         width={140}
         height={40}
         className="
            object-contain
            w-[110px]
            sm:w-[130px]
            md:w-[140px]
         "
         />


        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold">
          <Link href="/">EVERYTHING</Link>
          <Link href="/">WOMEN</Link>
          <Link href="/">MEN</Link>
          <Link href="/">ACCESSORIES</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT US</Link>
        </nav>

        <div className="flex items-center gap-5 text-sm font-bold">
          <span className="hidden sm:block">$0.00</span>
          <BsHandbagFill className="text-lg cursor-pointer" />
          <FaUserAlt className="text-lg cursor-pointer" />

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-xl"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white px-6 py-6 space-y-4 text-sm font-bold min-h-[calc(100vh-80px)] text-black flex flex-col gap-3transition-all duration-500 ease-out ">
          <FaUserAlt className="text-lg cursor-pointer" />
          <Link href="/" onClick={() => setOpen(false)}>EVERYTHING</Link>
          <Link href="/" onClick={() => setOpen(false)}>WOMEN</Link>
          <Link href="/" onClick={() => setOpen(false)}>MEN</Link>
          <Link href="/" onClick={() => setOpen(false)}>ACCESSORIES</Link>
          <Link href="/" onClick={() => setOpen(false)}>ABOUT</Link>
          <Link href="/" onClick={() => setOpen(false)}>CONTACT US</Link>
        </div>
      )}
    </header>
  );
}
