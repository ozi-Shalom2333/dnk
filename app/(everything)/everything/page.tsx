"use client";

import ProductList from "@/components/everthing/productList";
import { FaSearch, FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

import shoe1 from '@/public/sports-shoe1.webp'
import blueShoe from '@/public/sports-shoe3.webp'
import menJeans from '@/public/product-m-jeans1.webp'

const sidebarBestSellers = [
    { id: 1, name: "DNK Yellow Shoes", price: 120, image: shoe1 },
    { id: 2, name: "DNK Blue Shoes", price: 200, image: blueShoe },
    { id: 3, name: "Dark Brown Jeans", price: 150, image: menJeans },
];

export default function EverythingPage() {
    return (
        <div className="min-h-screen bg-[#F5F7F9] pt-28 pb-20">
            <div className="container mx-auto px-4 md:px-6 lg:px-10 max-w-7xl">
                <div className="mb-10">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        <FaAngleRight className="text-[10px]" />
                        <span className="text-black font-medium">Store</span>
                    </nav>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    <aside className="lg:w-1/4 flex flex-col gap-10">
                        <div className="flex flex-col gap-4">
                            <div className="relative group">
                                <input 
                                    type="text" 
                                    placeholder="Search products..." 
                                    className="w-full p-3 pr-12 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm" 
                                />
                                <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 p-2 rounded-md text-white hover:bg-blue-700 transition-colors">
                                    <FaSearch className="text-xs" />
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Filter by Price</h3>
                            <div className="px-1">
                                <div className="h-1.5 w-full bg-gray-200 rounded-full relative">
                                    <div className="absolute left-0 right-0 h-full bg-blue-600 rounded-full" />
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md cursor-pointer" />
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md cursor-pointer" />
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <button className="bg-blue-600 text-white px-5 py-1.5 rounded text-xs font-bold hover:bg-blue-700 transition-colors uppercase tracking-wider">Filter</button>
                                    <span className="text-sm text-gray-600 font-medium">Price: $20 — $290</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Categories</h3>
                            <ul className="flex flex-col gap-3">
                                {[
                                    { name: "Accessories", count: 7 },
                                    { name: "Men", count: 14 },
                                    { name: "Women", count: 17 }
                                ].map((cat) => (
                                    <li key={cat.name} className="flex items-center justify-between group cursor-pointer">
                                        <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">{cat.name}</span>
                                        <span className="text-xs text-gray-400">({cat.count})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col gap-5">
                            <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Our Best Sellers</h3>
                            <div className="flex flex-col gap-5">
                                {sidebarBestSellers.map((product) => (
                                    <div key={product.id} className="flex gap-4 items-center group cursor-pointer">
                                        <div className="relative w-16 h-16 rounded-md overflow-hidden bg-white shrink-0 border border-gray-100">
                                            <Image 
                                                src={product.image} 
                                                alt={product.name} 
                                                fill 
                                                className="object-cover group-hover:scale-110 transition-transform duration-500" 
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h4 className="text-sm font-semibold text-gray-800 line-clamp-1 group-hover:text-blue-600 transition-colors">{product.name}</h4>
                                            <div className="flex gap-[2px] text-yellow-500 text-[10px]">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <span key={i}>★</span>
                                                ))}
                                            </div>
                                            <p className="text-xs font-bold text-gray-500">${product.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>

                    <main className="lg:w-3/4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <span className="text-sm text-gray-500 font-medium">Showing all 12 results</span>
                            <div className="flex items-center gap-3">
                                <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Sort by:</span>
                                <select className="bg-transparent text-sm font-semibold text-gray-700 outline-none cursor-pointer border-none focus:ring-0">
                                    <option>Default sorting</option>
                                    <option>Popularity</option>
                                    <option>Average rating</option>
                                    <option>Latest</option>
                                    <option>Price: low to high</option>
                                    <option>Price: high to low</option>
                                </select>
                            </div>
                        </div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <ProductList />
                        </motion.div>
                    </main>

                </div>
            </div>
        </div>
    );
}
