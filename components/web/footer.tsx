"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import playstore from "@/public/playstore-free-img-300x90.webp";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

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
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-b from-gray-50 to-white py-12 px-6 pl-10 md:py-16 lg:py-20"
    >

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#000_1px,transparent_1px)] bg-[length:40px_40px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16">

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.h2 className="font-bold text-xl mb-6 pb-2 relative inline-block">
              Quick Links
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-black"
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </motion.h2>

            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.2, ease: "easeInOut" },
                  }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm md:text-base text-gray-700 hover:text-black transition-colors duration-300"
                  >
                    <motion.span whileHover={{ x: 2 }}>
                      {link.title}
                    </motion.span>
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* For Her */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="space-y-6"
          >
            <motion.h2 className="font-bold text-xl mb-6 pb-2 relative inline-block">
              For Her
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-pink-500"
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </motion.h2>

            <div className="space-y-3">
              {forHer.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.2, ease: "easeInOut" },
                  }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm md:text-base text-gray-700 hover:text-black transition-colors duration-300"
                  >
                    <motion.span whileHover={{ x: 2 }}>
                      {link.title}
                    </motion.span>
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* For Him */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h2 className="font-bold text-xl mb-6 pb-2 relative inline-block">
              For Him
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </motion.h2>

            <div className="space-y-3">
              {forHim.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.2, ease: "easeInOut" },
                  }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm md:text-base text-gray-700 hover:text-black transition-colors duration-300"
                  >
                    <motion.span whileHover={{ x: 2 }}>
                      {link.title}
                    </motion.span>
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* App Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="space-y-6"
          >
            <motion.h2 className="font-bold text-xl mb-6 pb-2 relative inline-block">
              Get Our App
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-green-500"
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
            </motion.h2>

            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Image
                src={playstore}
                alt="Download on Google Play"
                width={160}
                height={48}
                className="object-contain w-40 md:w-48 cursor-pointer"
              />
            </motion.div>

            <p className="text-sm text-gray-600">Also available on the App Store</p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-900 transition-colors"
            >
              Coming Soon
            </motion.button>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} DNK. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
