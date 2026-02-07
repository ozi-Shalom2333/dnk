"use client";

import { motion, Variants } from "framer-motion";
import Image from 'next/image';
import globe from '@/public/globe-free-img.webp'
import quality from '@/public/quality-free-img.webp'
import tag from '@/public/tag-free-img.webp'
import lock from '@/public/lock-free-img.webp'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Value() {
    const value = [
        {
            image: globe,
            title: "Worldwide Shipping",
            description: "Your products reach customers anywhere, with reliable and efficient delivery services.",
        },
        {
            image: quality,
            title: "Best Quality",
            description: "Premium materials and expert craftsmanship ensure every product meets the highest standards.",
        },
        {
            image: tag,
            title: "Best Offers",
            description: "Unlock exclusive deals and discounts that maximize your value.",
        },
        {
            image: lock,
            title: "Secure Payments",
            description: "Advanced security measures protect your transactions and personal information.",
        },
    ];

    return (
        <motion.section
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#F5F7F9] p-6 md:p-8 lg:p-10 gap-6 md:gap-8 mt-6 md:mt-8 lg:mt-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {value.map((item, index) => (
                <motion.div
                    key={index}
                    className="text-center flex flex-col gap-4 md:gap-6 items-center justify-center p-10 rounded-lg hover:bg-white hover:shadow-xl transition-all duration-300 group"
                    variants={itemVariants}
                    whileHover={{
                        y: -10,
                    }}
                >
                    <motion.div
                        className="relative w-15 h-15"
                        whileHover={{
                            scale: 1.1,
                            rotate: 8,
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Image 
                            src={item.image} 
                            alt={item.title} 
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 60px, 60px"
                        />
                    </motion.div>
                    
                    <h2 className="font-bold text-[16.14px] lg:text-lg group-hover:text-[#0084D6] transition-colors duration-300">
                        {item.title}
                    </h2>
                    
                    <p className="text-[14.4px] lg:text-base text-gray-600">
                        {item.description}
                    </p>
                </motion.div>
            ))}
        </motion.section>
    );
}
