'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsHandbagFill } from "react-icons/bs";
import { FaUserAlt, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";


const navVariants = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0 },
};

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.25,
    },
  },
};



export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="absolute top-0 left-0 right-0 z-50 bg-black/20 text-white backdrop-blur-sm"
    >
      <div className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">

    
        <motion.div whileHover={{ scale: 1.03 }}>
          <Image
            src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1@2x-free-img.png"
            alt="Brand logo"
            width={140}
            height={40}
            className="object-contain w-[110px] sm:w-[130px] md:w-[140px]"
          />
        </motion.div>

     
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold">
          {[
            "EVERYTHING",
            "WOMEN",
            "MEN",
            "ACCESSORIES",
            "ABOUT",
            "CONTACT US",
          ].map((item, index) => (
            <motion.div
              key={item}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -2 }}
              className="relative"
            >
              <Link
                href={item === "ABOUT" ? "/about" : item === "CONTACT US" ? "/contact" : "/"}
                className="after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

     
        <div className="flex items-center gap-5 text-sm font-bold">
          <span className="hidden sm:block">$0.00</span>

          <motion.div whileHover={{ scale: 1.1 }}>
            <BsHandbagFill className="text-lg cursor-pointer" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <FaUserAlt className="text-lg cursor-pointer" />
          </motion.div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-xl"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>


      <AnimatePresence>
        {open && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden bg-white px-6 py-6 space-y-4 text-sm font-bold min-h-[calc(100vh-80px)] text-black flex flex-col gap-3"
          >
            <FaUserAlt className="text-lg cursor-pointer mb-4" />

            {[
              "EVERYTHING",
              "WOMEN",
              "MEN",
              "ACCESSORIES",
              "ABOUT",
              "CONTACT US",
            ].map((item) => (
              <Link
                key={item}
                href={item === "ABOUT" ? "/about" : item === "CONTACT US" ? "/contact" : "/"}
                onClick={() => setOpen(false)}
                className="transition-colors hover:text-gray-600"
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
