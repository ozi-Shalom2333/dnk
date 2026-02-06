"use client";

import { motion, Variants } from "framer-motion";
import TeamCard from "./teamCard";

export default function OurTeam() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <motion.section 
            className=" text-center flex flex-col items-center justify-center container max-w-7xl mx-auto py-20 px-6 sm:px-12 lg:px-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
           <motion.div variants={itemVariants} className="mx-auto w-20 h-1 bg-[#0084D6] rounded-full mb-3"></motion.div>
           <motion.h3 variants={itemVariants} className="text-sm font-bold tracking-widest text-primary mb-2">A Few Words About</motion.h3>
           <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">Our Team </motion.h1>
           <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed mb-12">Meet the creative minds and dedicated professionals behind DNK. Our diverse team works tirelessly to bring you the finest in contemporary apparel, ensuring every piece reflects our commitment to quality, style, and individuality.</motion.p>
           <TeamCard />
        </motion.section>
    )
}