"use client";

import { motion } from "framer-motion";
import Card from "./card";
import CaroselSlider from "./caroselSlider";

export default function PromoSection() {
  // Container animation with staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Individual item animation with proper TypeScript types
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 10 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const, // Use "as const" for TypeScript
      },
    },
  };

  return (
    <motion.section
      className="bg-white py-12 min-h-screen flex flex-col items-center gap-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col items-center gap-12"
      >
        <motion.div
          variants={itemVariants}
          className="w-full"
        >
          <CaroselSlider />
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          whileHover={{ 
            y: -5,
            transition: { duration: 0.2 }
          }}
          className="w-full"
        >
          <Card />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}