"use client";

import { motion } from "framer-motion";
import shoe1 from '@/public/sports-shoe1.webp'
import blueShoe from '@/public/sports-shoe3.webp'
import menJeans from '@/public/product-m-jeans1.webp'
import denimJeans from '@/public/product-w-jeans2.webp'
import grayJeans from '@/public/product-w-jeans4.webp'
import denimShorts from '@/public/product-w-jeans1.webp'
import anchorBracelet from '@/public/product-accessory2.webp'
import bohoBangle from '@/public/product-accessory1.webp'
import brownPurse from '@/public/product-bag1.webp'
import redBag from '@/public/product-bag3.webp'
import Image, { StaticImageData } from 'next/image';
import { FaStar } from 'react-icons/fa';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: StaticImageData;
}

export default function ProductList() {
  const productsData: Product[] = [
    { id: 1, name: "DNK Yellow Shoes", category: "Men", price: 120, image: shoe1 },
    { id: 2, name: "DNK Blue Shoes", category: "Men", price: 200, image: blueShoe },
    { id: 3, name: "Dark Brown Jeans", category: "Men", price: 150, image: menJeans },
    { id: 4, name: "Blue Denim Jeans", category: "Women", price: 150, image: denimJeans },
    { id: 5, name: "Basic Gray Jeans", category: "Women", price: 150, image: grayJeans },
    { id: 6, name: "Blue Denim Shorts", category: "Women", price: 130, image: denimShorts },
    { id: 7, name: "Anchor Bracelet", category: "Accessories", price: 150, image: anchorBracelet },
    { id: 8, name: "Boho Bangle Bracelet", category: "Accessories", price: 150, image: bohoBangle },
    { id: 9, name: "Light Brown Purse", category: "Accessories", price: 150, image: brownPurse },
    { id: 10, name: "Bright Red Bag", category: "Accessories", price: 100, image: redBag },
  ];

  return (
    <motion.section
      className="container mx-auto grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 md:grid-cols-3 lg:grid-cols-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.07,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {productsData.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
            delay: index * 0.05,
          }}
          whileHover={{
            y: -6,
            transition: { duration: 0.25 },
          }}
          className="group rounded-xl bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
        >
          {/* Image */}
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-50">
            <motion.div
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                placeholder="blur"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2 px-3 pt-4 pb-5">
            <h2 className="text-sm font-semibold leading-tight line-clamp-2 group-hover:text-black transition-colors">
              {product.name}
            </h2>

            <p className="text-xs uppercase tracking-wide text-gray-400">
              {product.category}
            </p>

            <div className="flex items-center justify-between pt-1">
              <p className="font-semibold text-sm text-gray-900">
                ${product.price.toFixed(2)}
              </p>

              <div className="flex items-center gap-[2px] text-yellow-500 text-xs">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}
