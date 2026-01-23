"use client";

import { motion } from "framer-motion";
import ProductList from "./productList";

export default function Products() {
  return (
    <motion.section
      className="p-4 bg-[#F5F7F9] flex flex-col gap-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="font-bold text-[25px] lg:text-[42px] text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Featured Products
      </motion.h1>
      
      <motion.div
        className="w-1/6 border-1 border-[#0084D6] mx-auto"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      />
      
      <ProductList />
    </motion.section>
  );
}