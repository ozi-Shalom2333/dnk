"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsHandbagFill } from "react-icons/bs";
import { FaUserAlt, FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import logo from "@/public/logo1-free-img.webp";

/* ---------------- ANIMATIONS (UNCHANGED) ---------------- */

const navVariants: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, y: -6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { user, loading, logout } = useAuth();
  const router = useRouter();

  const navItems = [
    "EVERYTHING",
    "WOMEN",
    "MEN",
    "ACCESSORIES",
    "ABOUT",
    "CONTACT US",
  ];

  const handleUserClick = () => {
    if (loading) return;

    if (user) {
      setDropdownOpen((prev) => !prev);
    } else {
      router.push("/login");
    }
  };

  const handleLogout = async () => {
    await logout();
    setDropdownOpen(false);
    router.replace("/");
  };

  const goToDashboard = () => {
    setDropdownOpen(false);
    router.push("/dashboard");
  };

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm text-white"
    >
      <div className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
        <motion.div whileHover={{ scale: 1.03 }}>
          <Link href="/">
            <Image
              src={logo}
              alt="Brand logo"
              width={140}
              height={40}
              className="object-contain w-[110px] sm:w-[130px] md:w-[140px]"
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold">
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -2 }}
              className="relative"
            >
              <Link
                href={
                  item === "ABOUT"
                    ? "/about"
                    : item === "CONTACT US"
                    ? "/contact"
                    : "/"
                }
                className="after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-sm font-bold relative">
          <span className="hidden sm:block">$0.00</span>

          <motion.div whileHover={{ scale: 1.1 }}>
            <BsHandbagFill className="text-lg cursor-pointer" />
          </motion.div>

          {/* USER */}
          <motion.div whileHover={{ scale: 1.1 }} className="relative">
            {user ? (
              <div
                onClick={handleUserClick}
                className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center text-sm font-bold cursor-pointer"
              >
                {user.email?.charAt(0).toUpperCase()}
              </div>
            ) : (
              <FaUserAlt
                onClick={handleUserClick}
                className="text-lg cursor-pointer"
              />
            )}

            <AnimatePresence>
              {dropdownOpen && user && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-3 w-48 bg-white text-black rounded-xl shadow-xl overflow-hidden z-50"
                >
                  <button
                    onClick={goToDashboard}
                    className="w-full text-left px-4 py-3 hover:bg-gray-100 text-sm"
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 hover:bg-gray-100 text-sm flex items-center gap-2 text-red-600"
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-xl"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden fixed inset-x-0 top-[80px] z-40 bg-white text-black rounded-t-2xl shadow-xl"
          >
            <div className="px-6 pt-6 pb-10 flex flex-col gap-6">
              <div
                onClick={() => {
                  setOpen(false);
                  handleUserClick();
                }}
                className="flex items-center gap-4 border-b pb-4 cursor-pointer"
              >
                <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center text-white">
                  {user ? user.email?.charAt(0).toUpperCase() : <FaUserAlt />}
                </div>
                <span className="text-sm font-semibold">
                  {user ? "My Account" : "Login"}
                </span>
              </div>

              <motion.nav
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
                className="flex flex-col divide-y"
              >
                {navItems.map((item) => (
                  <motion.div key={item} variants={linkVariants} className="py-4">
                    <Link
                      href={
                        item === "ABOUT"
                          ? "/about"
                          : item === "CONTACT US"
                          ? "/contact"
                          : "/"
                      }
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between text-base font-semibold hover:text-gray-500"
                    >
                      {item}
                      <span className="text-gray-400 text-sm">→</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {user && (
                <button
                  onClick={handleLogout}
                  className="mt-4 text-red-600 text-sm flex items-center gap-2"
                >
                  <FaSignOutAlt /> Logout
                </button>
              )}

              <div className="pt-6 border-t text-sm text-gray-500 text-center">
                © {new Date().getFullYear()} DNK
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
