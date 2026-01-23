'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import heroImage from '@/public/home-new-bg-free-img.webp';

export default function Hero() {
  return (
    <section className="relative h-[80vh] md:h-[60vh] lg:h-screen pt-17 flex flex-col justify-center p-0 md:pl-15 z-0 overflow-hidden">
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
      <div className="absolute inset-0 bg-blue-200/30 z-10" />
      
      {/* Desktop Content */}
      <div className="hidden md:flex md:flex-col md:gap-3 lg:gap-4 z-20">
        <motion.h1 
          className="w-full text-3xl md:text-[50px] lg:text-[66px] md:w-[500px] lg:w-1/2 text-white font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Raining Offers For Hot Summer!
        </motion.h1>
        
        <motion.p 
          className="text-white text-2xl font-bold my-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          25% Off On All Products
        </motion.p>
        
        <motion.div 
          className="flex gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="px-5 py-3 bg-white text-black text-[14px] font-bold">
            SHOP NOW
          </button>
          <button className="px-5 py-3 text-white text-[14px] border border-white font-bold">
            FIND MORE
          </button>
        </motion.div>
      </div>

      {/* Mobile Content */}
      <div className="w-full flex flex-col md:hidden h-full items-center justify-center z-20">
        <motion.h1 
          className="text-white text-3xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Raining Offers For Hot Summer!
        </motion.h1>
        
        <motion.p 
          className="text-white text-xl font-bold my-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          25% Off On All Products
        </motion.p>
        
        <motion.div 
          className="flex flex-col w-full p-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="px-5 py-4 border-0 bg-white text-black text-[14px] font-bold">
            SHOP NOW
          </button>
          <button className="px-5 py-4 text-white text-[14px] border border-white font-bold">
            FIND MORE
          </button>
        </motion.div>
      </div>
    </section>
  );
}