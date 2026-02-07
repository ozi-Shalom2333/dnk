"use client";

import { motion, Variants } from "framer-motion";
import Image from 'next/image';
import banner from '@/public/banner-03.webp';

export default function HeroSecond() {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="mt-10 md:mt-20 p-4 md:p-6 lg:p-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="relative h-[80vh] md:h-[60vh] lg:h-[80vh] pt-20 flex flex-col justify-center p-6 md:p-8 md:pl-15 z-0 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ scale: 1.05, opacity: 0.8 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={banner}
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
          className="absolute inset-0 bg-blue-200/30 z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Desktop Content */}
        <motion.div
          className="hidden z-20 w-full md:w-3/6 md:flex md:flex-col justify-center gap-6"
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
              },
            },
          }}
        >
          <motion.h2
            className="text-white text-[18px] lg:text-[24px] font-bold"
            variants={textVariants}
          >
            Limited Time Offer
          </motion.h2>
          
          <motion.h1
            className="text-white text-[25px] lg:text-[45px] font-bold"
            variants={textVariants}
          >
            Special Edition
          </motion.h1>
          
          <motion.p
            className="text-white text-[14px] lg:text-[16px]"
            variants={textVariants}
          >
            Discover our latest collection of premium t-shirts, crafted with the finest materials and designed for ultimate comfort and style.
          </motion.p>
          
          <motion.h3
            className="text-white text-[18px] lg:text-[20px] font-semibold"
            variants={textVariants}
          >
            Buy This T-shirt At 20% Discount, Use Code OFF20
          </motion.h3>
          
          <motion.button
            className="text-[12px] lg:text-[18px] font-bold bg-white w-fit px-4 py-2 hover:bg-black hover:text-white"
            variants={textVariants}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#000",
              color: "#fff",
              transition: {
                duration: 0.3,
                ease: "easeInOut" as const,
              },
            }}
            whileTap={{ scale: 0.95 }}
          >
            SHOP NOW
          </motion.button>
        </motion.div>

        {/* Mobile Content */}
        <motion.div
          className="w-full md:hidden z-20 px-4 flex flex-col gap-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.3,
              },
            },
          }}
        >
          <motion.h2
            className="text-white text-[18px] font-bold"
            variants={textVariants}
          >
            Limited Time Offer
          </motion.h2>
          
          <motion.h1
            className="text-white text-[25px] font-bold"
            variants={textVariants}
          >
            Special Edition
          </motion.h1>
          
          <motion.p
            className="text-white text-[14px]"
            variants={textVariants}
          >
            Discover our latest collection of premium t-shirts, crafted with the finest materials and designed for ultimate comfort and style.
          </motion.p>
          
          <motion.h2
            className="text-white text-[18px] font-semibold"
            variants={textVariants}
          >
            Buy This T-shirt At 20% Discount, Use Code OFF20
          </motion.h2>
          
          <motion.button
            className="text-[14px] font-bold bg-white outline-0 w-full py-4 hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
            variants={textVariants}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#000",
              color: "#fff",
              transition: {
                duration: 0.3,
                ease: "easeInOut" as const,
              },
            }}
            whileTap={{ scale: 0.95 }}
          >
            SHOP NOW
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
