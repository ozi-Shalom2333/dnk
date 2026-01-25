"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import google from "@/public/google logo (Community).webp"
import { Eye, EyeOff, Mail, Lock, ArrowRight, Github, Chrome, User, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [name, setName] = useState("")
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate signup process
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsLoading(false)
    console.log("Signup attempt with:", { name, email, password })
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  }

  const passwordRequirements = [
    { regex: /.{8,}/, text: "At least 8 characters" },
    { regex: /[A-Z]/, text: "One uppercase letter" },
    { regex: /[a-z]/, text: "One lowercase letter" },
    { regex: /\d/, text: "One number" },
  ]

  const isPasswordValid = passwordRequirements.every(req => req.regex.test(password))
  const doPasswordsMatch = password === confirmPassword && password.length > 0

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 px-4 py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <motion.div
        className="w-full max-w-md relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Card Container */}
        <motion.div 
          className="bg-card border border-border rounded-2xl shadow-xl shadow-primary/5 p-8 backdrop-blur-sm"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          {/* Header */}
          <motion.div className="text-center mb-8" variants={itemVariants}>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
              <User className="w-7 h-7 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Create Account
            </h1>
            <p className="text-muted-foreground text-sm">
              Join us and start your journey
            </p>
          </motion.div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <motion.div className="space-y-2" variants={itemVariants}>
              <Label htmlFor="name" className="text-foreground/80">
                Full Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 h-11"
                  required
                />
              </div>
            </motion.div>

            {/* Email Field */}
            <motion.div className="space-y-2" variants={itemVariants}>
              <Label htmlFor="email" className="text-foreground/80">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-11"
                  required
                />
              </div>
            </motion.div>

            {/* Password Field */}
            <motion.div className="space-y-2" variants={itemVariants}>
              <Label htmlFor="password" className="text-foreground/80">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-11"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              
              {/* Password Requirements */}
              <div className="space-y-1.5 pt-2">
                {passwordRequirements.map((req, index) => {
                  const isMet = req.regex.test(password)
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 text-xs"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ 
                        opacity: password.length > 0 ? 1 : 0.5, 
                        x: password.length > 0 ? 0 : -10 
                      }}
                    >
                      <div className={cn(
                        "w-4 h-4 rounded-full flex items-center justify-center transition-colors",
                        isMet ? "bg-primary/10" : "bg-muted"
                      )}>
                        <Check className={cn(
                          "w-3 h-3 transition-colors",
                          isMet ? "text-primary" : "text-muted-foreground"
                        )} />
                      </div>
                      <span className={cn(
                        "transition-colors",
                        isMet ? "text-foreground" : "text-muted-foreground"
                      )}>
                        {req.text}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Confirm Password Field */}
            <motion.div className="space-y-2" variants={itemVariants}>
              <Label htmlFor="confirmPassword" className="text-foreground/80">
                Confirm Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-10 pr-10 h-11"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              {confirmPassword.length > 0 && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "text-xs flex items-center gap-1",
                    doPasswordsMatch ? "text-primary" : "text-destructive"
                  )}
                >
                  <Check className="w-3 h-3" />
                  {doPasswordsMatch ? "Passwords match" : "Passwords do not match"}
                </motion.p>
              )}
            </motion.div>

            {/* Terms & Conditions */}
            <motion.div variants={itemVariants} className="flex items-start space-x-2 pt-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="h-4 w-4 mt-0.5 rounded border-input bg-background text-primary focus:ring-2 focus:ring-primary/20 focus:ring-offset-0"
              />
              <Label
                htmlFor="terms"
                className="text-sm text-muted-foreground cursor-pointer leading-relaxed"
              >
                I agree to the{" "}
                <Link href="/terms" className="text-primary hover:text-primary/80 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:text-primary/80 hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants} className="pt-2">
              <Button
                type="submit"
                className="w-full h-11 text-sm font-medium group"
                disabled={isLoading || !agreedToTerms || !isPasswordValid || !doPasswordsMatch}
              >
                {isLoading ? (
                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    Creating account...
                  </motion.div>
                ) : (
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ x: 4 }}
                  >
                    Create Account
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.div>
                )}
              </Button>
            </motion.div>
          </form>

          {/* Divider */}
          <motion.div variants={itemVariants} className="my-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-3 text-muted-foreground">
                  Or sign up with
                </span>
              </div>
            </div>
          </motion.div>

          {/* Social Signup */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
            <Button
              type="button"
              variant="outline"
              className="h-11 font-normal"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-11 font-normal"
            >
              <Image src={google} alt="Google" width={20} height={20} />
              Google
            </Button>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-center text-sm text-muted-foreground"
          >
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary hover:text-primary/80 font-medium hover:underline transition-colors"
            >
              Sign in
            </Link>
          </motion.p>
        </motion.div>

        {/* Footer */}
        <motion.p
          className="mt-6 text-center text-xs text-muted-foreground/60"
          variants={itemVariants}
        >
          By creating an account, you agree to our{" "}
          <Link href="/terms" className="hover:text-muted-foreground hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="hover:text-muted-foreground hover:underline">
            Privacy Policy
          </Link>
        </motion.p>
      </motion.div>
    </div>
  )
}