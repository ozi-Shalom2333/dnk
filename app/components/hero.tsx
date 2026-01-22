'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import heroImage from '@/public/home-new-bg-free-img.webp';

export default function Hero() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const fadeUpVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const buttonVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.35,
      transition: {
        duration: 0.8,
        delay: 0.2
      }
    }
  };

  return (
    <motion.section 
      className="relative h-[80vh] md:h-[60vh] lg:h-screen pt-17 flex flex-col justify-center p-0 md:pl-15 z-1"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
     
      <motion.div
        variants={imageVariants}
        className="absolute inset-0 overflow-hidden"
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
        className="absolute inset-0 bg-black z-10"
        variants={overlayVariants}
      />


      <div className="hidden md:flex md:flex-col md:gap-3 lg:gap-4 z-20">
        <motion.h1 
          className="w-full text-3xl md:text-[50px] lg:text-[66px] md:w-[500px] lg:w-1/2 text-white font-bold"
          variants={fadeUpVariants}
          custom={0}
        >
          Raining Offers For Hot Summer!
        </motion.h1>
        
        <motion.p 
          className="text-white text-2xl font-bold my-6"
          variants={fadeUpVariants}
          custom={1}
        >
          25% Off On All Products
        </motion.p>
        
        <motion.div 
          className="flex gap-3"
          variants={fadeUpVariants}
          custom={2}
        >
          <motion.button 
            className="px-5 py-3 bg-white text-black text-[14px] font-bold"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            SHOP NOW
          </motion.button>
          <motion.button 
            className="px-5 py-3 text-white text-[14px] border border-white font-bold"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            FIND MORE
          </motion.button>
        </motion.div>
      </div>


      <motion.div 
        className="w-full flex flex-col md:hidden h-full items-center justify-center z-20"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-white text-3xl font-bold text-center"
          variants={fadeUpVariants}
          custom={0}
        >
          Raining Offers For Hot Summer!
        </motion.h1>
        
        <motion.p 
          className="text-white text-xl font-bold my-4"
          variants={fadeUpVariants}
          custom={1}
        >
          25% Off On All Products
        </motion.p>
        
        <motion.div 
          className="flex flex-col w-full p-4 gap-4"
          variants={fadeUpVariants}
          custom={2}
        >
          <motion.button 
            className="px-5 py-4 border-0 bg-white text-black text-[14px] font-bold hover:bg-black hover:text-white transition-colors duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            SHOP NOW
          </motion.button>
          <motion.button 
            className="px-5 py-4 text-white text-[14px] border border-white font-bold hover:bg-white hover:text-black transition-colors duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            FIND MORE
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}