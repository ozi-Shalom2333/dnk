"use client";

import { motion } from "framer-motion";
import Card from "./card";
import CaroselSlider from "./caroselSlider";

export default function PromoSection() {
  return (
    <section className="bg-white py-12 min-h-screen flex flex-col items-center gap-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <CaroselSlider />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        whileHover={{ 
          y: -5,
          transition: { duration: 0.2 }
        }}
        className="w-full"
      >
        <Card />
      </motion.div>
    </section>
  );
}