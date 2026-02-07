"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import banner from "@/public/banner-04.webp"
import WhoWeAre from "@/components/about/whoWeAre";
import OurTeam from "@/components/about/ourTeam";
import Value from "@/components/home/value";
import FollowUs from "@/components/about/followUs";

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[50vh] md:h-[50vh] lg:h-[90vh] pt-17 flex flex-col justify-center p-0 md:pl-15 z-0 overflow-hidden">
        <div className='flex items-center justify-between px-6 py-5 max-w-7xl mx-auto'>
        
        </div>
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 bg-blue-200/30 z-10" 
        />
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-[50px] lg:text-[66px] font-bold text-white text-center z-20"
        >
          About Us
        </motion.h1>
      </section>
      
      <WhoWeAre />
      <OurTeam/>
      <FollowUs/>
      <Value/>
    </>
  );
}