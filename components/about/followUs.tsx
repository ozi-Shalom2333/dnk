"use client";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import banner from "@/public/banner-05.webp";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const iconHoverVariants: Variants = {
  hover: { scale: 1.15, rotate: 5, backgroundColor: "#1d4ed8" },
  tap: { scale: 0.95 },
};

export default function FollowUs() {
  return (
    <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src={banner}
          alt="Follow Us Background"
          fill
          className="object-cover"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-black/20" /> 
      </motion.div>

      <motion.div 
        className="relative z-10 bg-white shadow-2xl py-10 px-8 md:px-16 w-[90%] max-w-md md:w-auto flex flex-col items-center justify-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
      >
        
        <motion.div 
          className="w-16 h-1 bg-[#0084D6] mb-6"
          variants={itemVariants}
        />

        <motion.h3 
          className="text-2xl font-bold tracking-widest text-gray-900 mb-8 uppercase"
          variants={itemVariants}
        >
          Follow Us
        </motion.h3>

        <motion.div 
          className="flex items-center justify-center gap-6"
          variants={itemVariants}
        >
          <SocialLink href="https://facebook.com" icon={<FaFacebookF />} label="Facebook" />
          <SocialLink href="https://twitter.com" icon={<FaTwitter />} label="Twitter" />
          <SocialLink href="https://instagram.com" icon={<FaInstagram />} label="Instagram" />
        </motion.div>
      </motion.div>
    </section>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <motion.div
      variants={iconHoverVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {icon}
      </Link>
    </motion.div>
  );
}
