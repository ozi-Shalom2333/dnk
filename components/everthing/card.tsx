"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";

import menwear from "@/public/men-fashion-free-img.webp";
import womenwear from "@/public/women-fashion-free-img.webp";
import footwear from "@/public/footwear-free-img.webp";

interface CardItem {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  buttonText: string;
  altText?: string;
}

interface CardProps {
  cards?: CardItem[];
  className?: string;
  overlayOpacity?: number;
  showOverlayOnHover?: boolean;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Card: React.FC<CardProps> = ({
  cards,
}) => {
  const defaultCards: CardItem[] = [
    {
      id: 1,
      title: "20% Off On Tank Tops",
      description: "Discover our latest summer collection with amazing discounts",
      image: womenwear,
      buttonText: "SHOP NOW",
      altText: "Women wearing stylish tank tops",
    },
    {
      id: 2,
      title: "Latest Eyewear For You",
      description: "Explore trendy sunglasses and optical frames for every style",
      image: menwear,
      buttonText: "SHOP NOW",
      altText: "Man wearing modern sunglasses",
    },
    {
      id: 3,
      title: "Let's Suit Up!",
      description: "Premium suits and formal wear for your special occasions",
      image: footwear,
      buttonText: "SHOP NOW",
      altText: "Elegant formal footwear collection",
    },
  ];

  const cardsToRender = cards?.length ? cards : defaultCards;

  if (!cardsToRender.length) {
    return (
      <div className="py-12 text-center text-gray-500">
        No promotional items available at the moment
      </div>
    );
  }

  return (
    <motion.div 
      className="container grid grid-cols-1 md:grid-cols-3 mx-auto p-4 gap-6 md:gap-2.5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
       {
        cardsToRender.map((e)=>(
          <motion.div 
            key={e.id} 
            variants={cardItemVariants}
            className="group relative min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] p-6 lg:p-10 flex flex-col justify-end gap-4 overflow-hidden shadow-lg" 
          >
             <motion.div 
               className="absolute inset-0"
               whileHover={{ scale: 1.08 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
             >
               <Image
                  src={e.image}
                  alt={e.altText ?? e.title}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 768px) 90vw, 35vw"
                  className="object-cover"
                  priority={e.id === 1}
                />
             </motion.div>
             <div className='absolute inset-0 bg-black/40 z-1'/>
             
             <h1 className="text-white text-[22px] md:text-[18px] lg:text-[24px] font-bold z-10 leading-tight">{e.title}</h1>
             <p className="text-white/90 text-base md:text-[14px] lg:text-base z-10">{e.description}</p>
             
             <motion.button 
               whileTap={{ scale: 0.95 }}
               className="bg-white z-10 p-4 w-full md:p-3 md:text-sm font-bold hover:bg-black hover:text-white transition-all duration-300 border-0 shadow-md"
             >
              {e.buttonText}
             </motion.button>
          </motion.div>
        ))
       }
    </motion.div>
  );
};

export default Card;



