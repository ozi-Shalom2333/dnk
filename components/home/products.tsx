"use client";

import { motion, Variants } from "framer-motion";
import ProductList from "./productList";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const dividerVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, delay: 0.2, ease: "easeInOut" },
  },
};

export default function Products() {
  return (
    <section className="p-4 bg-[#F5F7F9] flex flex-col gap-6 py-16 md:py-24">
      <motion.h1
        className="font-bold text-[25px] lg:text-[42px] text-center"
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Featured Products
      </motion.h1>
      
      <motion.div
        className="w-24 h-1 bg-[#0084D6] mx-auto rounded-full"
        variants={dividerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
      
      <div className="mt-8">
        <ProductList />
      </div>
    </section>
  );
}