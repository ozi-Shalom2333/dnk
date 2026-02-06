"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import placeholder from "@/public/team_placeholder_1770381268500.png"
import team1 from "@/public/team1 (1).webp"
import team2 from "@/public/team1 (2).webp"
import team3 from "@/public/team1 (3).webp"
import team4 from "@/public/team (4).webp"
import team5 from "@/public/team (5).webp"
import team6 from "@/public/team (6).webp"


interface TeamMember {
    id: number;
    name: string;
    position: string;
    image: any;
}

export default function TeamCard() {

    const teamMembers: TeamMember[] = [
        {
            id: 1,
            name: "Harvey Spector",
            position: "Founder-CEO",
            image: team1
        },
        {   
            id: 2,
            name: "Jessica Pearson",
            position: "COO",
            image: team2
        },
        {
            id: 3,
            name: "Louis Litt",
            position: "Lead Developer",
            image: team3
        },
        {
            id: 4,
            name: "Donna Paulsen",
            position: "Designer",
            image: team4
        },
        {
            id: 5,
            name: "Rachel Zane",
            position: "Marketing",
            image: team5
        },
        {
            id: 6,
            name: "Mike Ross",
            position: "HR Manager",
            image: team6
        },
    ]

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { type: "spring", stiffness: 50, damping: 12 }
        }
    };

    return (
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {teamMembers.map((member) => (
                <motion.div 
                    key={member.id} 
                    className="bg-[#F5F7F9] w-8/10 mx-auto flex flex-col items-center justify-center rounded p-5 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                    variants={cardVariants}
                >
                    <div className="relative rounded-full h-32 w-32 mx-auto overflow-hidden">
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="p-6 text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                        <p className="text-blue-500 font-medium">{member.position}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}