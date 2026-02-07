"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import weare from "@/public/weare.webp"

export default function WhoWeAre() {
  return (
    <section className="bg-white py-20 px-6 sm:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col items-start text-left"
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative mb-6">
             <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">
              Our Story
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Who We Are
            </h1>
            <div className="absolute -bottom-2 left-0 w-20 h-1 bg-[#0084D6] rounded-full" />
          </div>

          <p className="text-gray-600 text-md leading-relaxed mb-6">
            At <strong>DNK</strong>, we believe that style is a way to say who you are without having to speak. 
            Born from a passion for contemporary fashion and a dedication to quality, we curate collections 
            that blend timeless elegance with modern trends. 
          </p>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Our mission is simple: to empower you to express your unique identity through apparel 
            that feels as good as it looks. Whether you're searching for the perfect evening ensemble, 
            sharp professional attire, or casual weekend wear, DNK is your ultimate destination 
            for fashion that fits your life.
          </p>

          <motion.div
            className="flex gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
             <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900">10k+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Happy Customers</span>
             </div>
             <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900">500+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Brand Partners</span>
             </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="w-full lg:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image 
              src={weare} 
              alt="Fashionable woman representing DNK style" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
              placeholder="blur"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          </div>
          
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-100 rounded-full z-[-1]" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full z-[-1]" />
        </motion.div>

      </div>
    </section>
  );
}