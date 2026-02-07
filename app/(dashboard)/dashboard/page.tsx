"use client";

import { useAuth } from "@/context/auth-context";
import { motion, Variants } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ShoppingBag,
  Heart,
  Settings,
  TrendingUp,
  Package,
  Calendar,
} from "lucide-react";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const statsCards = [
  {
    title: "Total Orders",
    value: "12",
    description: "+2 from last month",
    icon: Package,
    trend: "up",
  },
  {
    title: "Wishlist Items",
    value: "8",
    description: "3 items on sale",
    icon: Heart,
    trend: "neutral",
  },
  {
    title: "Active Orders",
    value: "3",
    description: "2 shipping soon",
    icon: ShoppingBag,
    trend: "up",
  },
  {
    title: "Member Since",
    value: "2024",
    description: "Premium member",
    icon: Calendar,
    trend: "neutral",
  },
];

const quickActions = [
  { label: "Browse Products", href: "/", icon: ShoppingBag },
  { label: "View Wishlist", href: "/wishlist", icon: Heart },
  { label: "Account Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardPage() {
  const { user } = useAuth();


  const userName = user?.displayName || user?.email?.split("@")[0] || "User";

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8 max-w-6xl mx-auto"
    >

      <motion.div variants={itemVariants} className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {userName}! 👋
        </h1>
        <p className="text-muted-foreground">
          Here's what's happening with your account today.
        </p>
      </motion.div>


      <motion.div
        variants={containerVariants}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        {statsCards.map((stat) => (
          <motion.div key={stat.title} variants={itemVariants}>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  {stat.trend === "up" && (
                    <TrendingUp className="w-3 h-3 text-green-500" />
                  )}
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>


      <div className="grid gap-6 md:grid-cols-2">

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common tasks you might want to do
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickActions.map((action) => (
                <Link key={action.href} href={action.href}>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 mb-2"
                  >
                    <action.icon className="w-4 h-4" />
                    {action.label}
                  </Button>
                </Link>
              ))}
            </CardContent>
          </Card>
        </motion.div>


        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Your profile details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Display Name</p>
                <p className="font-medium">{user?.displayName || "Not set"}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{user?.email}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Email Verified</p>
                <p className="font-medium">
                  {user?.emailVerified ? "✅ Verified" : "❌ Not verified"}
                </p>
              </div>
              <div className="pt-2">
                <Link href="/dashboard/settings">
                  <Button variant="outline" size="sm" className="w-full">
                    Edit Profile
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}