"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import globe from '@/public/globe-free-img.webp'
import quality from '@/public/quality-free-img.webp'
import tag from '@/public/tag-free-img.webp'
import lock from '@/public/lock-free-img.webp'

export default function Value() {
    const value = [
        {
            image: globe,
            title: "Worldwide Shipping",
            description: "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
            image: quality,
            title: "Best Quality",
            description: "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
            image: tag,
            title: "Best Offers",
            description: "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
            image: lock,
            title: "Secure Payments",
            description: "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
    ];

    return (
        <motion.section
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 md:p-6 lg:p-8 gap-6 md:gap-8 mt-6 md:mt-8 lg:mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.15,
                        delayChildren: 0.1,
                    },
                },
            }}
        >
            {value.map((item, index) => (
                <motion.div
                    key={index}
                    className="text-center flex flex-col gap-4 md:gap-6 items-center justify-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.5,
                                ease: "easeOut",
                            },
                        },
                    }}
                    whileHover={{
                        y: -8,
                        transition: {
                            duration: 0.3,
                            ease: "easeInOut",
                        },
                    }}
                >
                    <motion.div
                        className="relative w-15 h-15"
                        whileHover={{
                            scale: 1.1,
                            rotate: 5,
                            transition: {
                                duration: 0.3,
                                ease: "easeInOut",
                            },
                        }}
                    >
                        <Image 
                            src={item.image} 
                            alt={item.title} 
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 60px, 60px"
                        />
                    </motion.div>
                    
                    <motion.h2
                        className="font-bold text-[16.14px] lg:text-lg"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1, color: "#0084D6" }}
                        transition={{ duration: 0.2 }}
                    >
                        {item.title}
                    </motion.h2>
                    
                    <motion.p
                        className="text-[14.4px] lg:text-base text-gray-600"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        {item.description}
                    </motion.p>
                </motion.div>
            ))}
        </motion.section>
    );
}