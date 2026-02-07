"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import banner from "@/public/banner-04.webp"; // Reusing the high-quality banner
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={banner}
            alt="Contact Us Banner"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-blue-900/40" />
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10 text-5xl md:text-7xl font-bold text-white tracking-tight"
        >
          Contact Us
        </motion.h1>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Info Side */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Get in touch</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">We're here to help you.</h3>
              <div className="w-20 h-1 bg-blue-600 mb-8" />
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                Have questions about our products, or need help with an order? 
                Our team is ready to assist you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: FaPhoneAlt, title: "Calls", detail: "+1 (555) 123-4567" },
                { icon: FaEnvelope, title: "Email", detail: "support@dnk.com" },
                { icon: FaMapMarkerAlt, title: "Visit us", detail: "123 Fashion Ave, NY" },
                { icon: FaPhoneAlt, title: "Sales", detail: "+1 (555) 987-6543" },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  className="p-6 bg-white shadow-sm border border-gray-100 rounded-xl hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <item.icon />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-500">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Dummy Form / Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl space-y-8"
          >
            <h3 className="text-3xl font-bold text-gray-900">Send us a message</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" className="w-full px-6 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 transition-all outline-none" />
                <input type="email" placeholder="Email" className="w-full px-6 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 transition-all outline-none" />
              </div>
              <input type="text" placeholder="Subject" className="w-full px-6 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 transition-all outline-none" />
              <textarea placeholder="Message" rows={4} className="w-full px-6 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 transition-all outline-none resize-none"></textarea>
              <button className="w-full py-5 bg-blue-600 hover:bg-black text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl translate-y-0 active:scale-95">
                SEND MESSAGE
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}