'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import heroImage from '@/public/home-new-bg-free-img.webp';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.8,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative h-[80vh] md:h-[60vh] lg:h-screen pt-17 flex flex-col justify-center p-0 md:pl-15 z-0 overflow-hidden">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={heroImage}
          alt="Summer fashion collection – woman with sunglasses in sunny weather"
          fill
          priority
          quality={85}
          sizes="100vw"
          placeholder="blur"
          className="object-cover"
        />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute inset-0 bg-blue-200/30 z-10" 
      />
      
      {/* Desktop Content */}
      <motion.div 
        className="hidden md:flex md:flex-col md:gap-3 lg:gap-4 z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="w-full text-3xl md:text-[50px] lg:text-[66px] md:w-[500px] lg:w-1/2 text-white font-bold"
          variants={itemVariants}
        >
          Raining Offers For Hot Summer!
        </motion.h1>
        
        <motion.p 
          className="text-white text-2xl font-bold my-6"
          variants={itemVariants}
        >
          25% Off On All Products
        </motion.p>
        
        <motion.div 
          className="flex gap-3"
          variants={itemVariants}
        >
          <button className="px-5 py-3 bg-white hover:bg-black hover:text-white text-black text-[14px] font-bold transition-all duration-300 ease-in-out">
            SHOP NOW
          </button>
          <button className="px-5 py-3 text-white hover:bg-white hover:text-black text-[14px] border border-white font-bold transition-all duration-300 ease-in-out">
            FIND MORE
          </button>
        </motion.div>
      </motion.div>

      {/* Mobile Content */}
      <motion.div 
        className="w-full flex flex-col md:hidden h-full items-center justify-center z-20 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-white text-3xl font-bold text-center"
          variants={itemVariants}
        >
          Raining Offers For Hot Summer!
        </motion.h1>
        
        <motion.p 
          className="text-white text-xl font-bold my-4"
          variants={itemVariants}
        >
          25% Off On All Products
        </motion.p>
        
        <motion.div 
          className="flex flex-col w-full gap-4"
          variants={itemVariants}
        >
          <button className="px-5 py-4 border-0 bg-white text-black text-[14px] font-bold">
            SHOP NOW
          </button>
          <button className="px-5 py-4 text-white text-[14px] border border-white font-bold">
            FIND MORE
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
