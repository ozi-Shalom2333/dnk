"use client"

import React, { useState, useCallback } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Eye, EyeOff, Mail, Lock, ArrowRight, Github, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  AuthError,
} from "firebase/auth"
import { auth } from "@/lib/firebase"
import { toast } from "sonner"


const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      staggerChildren: 0.1,
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

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  
  const router = useRouter()
  
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const { signInWithEmailAndPassword } = await import("firebase/auth")
      await signInWithEmailAndPassword(auth, email, password)
      toast.success("Login successful")
      router.push("/dashboard")
    } catch (error) {
      toast.error(getErrorMessage(error as AuthError))
    } finally {
      setIsLoading(false)
    }
  }


  const getErrorMessage = useCallback((error: AuthError): string => {
    switch (error.code) {
      case "auth/invalid-credential":
      case "auth/wrong-password":
        return "Invalid email or password"
      case "auth/user-not-found":
        return "No account found with this email"
      case "auth/too-many-requests":
        return "Too many failed attempts. Please try again later"
      case "auth/invalid-email":
        return "Please enter a valid email address"
      case "auth/user-disabled":
        return "This account has been disabled"
      case "auth/popup-closed-by-user":
        return "Sign in cancelled"
      default:
        return "Login failed. Please try again."
    }
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim() || !password.trim()) {

      toast.error("Please fill in all fields")
      return
    }
    
    setIsLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      

      toast.success("Welcome back!", {
        description: "Successfully signed in to your account.",
      })
      
      router.push("/dashboard")
      router.refresh()
    } catch (error) {
      const authError = error as AuthError

      toast.error(getErrorMessage(authError))
    } finally {
      setIsLoading(false)
    }
  }, [email, password, router, getErrorMessage])

  const signInWithGoogle = useCallback(async () => {
    setIsLoading(true)
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      
      toast.success("Welcome back!", {
        description: "Successfully signed in with Google.",
      })
      
      router.push("/dashboard")
      router.refresh()
    } catch (error) {
      const authError = error as AuthError

      if (authError.code !== "auth/popup-closed-by-user") {
        toast.error(getErrorMessage(authError))
      }
    } finally {
      setIsLoading(false)
    }
  }, [router, getErrorMessage])

  const signInWithGithub = useCallback(async () => {
    setIsLoading(true)
    try {
      const provider = new GithubAuthProvider()
      await signInWithPopup(auth, provider)
      
      toast.success("Welcome back!", {
        description: "Successfully signed in with GitHub.",
      })
      
      router.push("/dashboard")
      router.refresh()
    } catch (error) {
      const authError = error as AuthError
      if (authError.code !== "auth/popup-closed-by-user") {
        toast.error(getErrorMessage(authError))
      }
    } finally {
      setIsLoading(false)
    }
  }, [router, getErrorMessage])

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 px-4 py-12 sm:px-6 lg:px-8 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
      
      <motion.div
        className="w-full max-w-md relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="bg-card border border-border rounded-2xl shadow-xl shadow-primary/5 p-8 backdrop-blur-sm"
          whileHover={{ scale: 1.005 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div className="text-center mb-8" variants={itemVariants}>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
              <Lock className="w-7 h-7 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground tracking-tight">
              Welcome Back
            </h1>
            <p className="text-muted-foreground text-sm mt-2">
              Sign in to your account to continue
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div className="space-y-2" variants={itemVariants}>
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-11"
                  disabled={isLoading}
                  required
                  autoComplete="email"
                />
              </div>
            </motion.div>

            <motion.div className="space-y-2" variants={itemVariants}>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-primary hover:text-primary/80 hover:underline transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-11"
                  disabled={isLoading}
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 rounded"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" aria-hidden="true" />
                  ) : (
                    <Eye className="w-4 h-4" aria-hidden="true" />
                  )}
                </button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 pt-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  disabled={isLoading}
                />
                <Label
                  htmlFor="remember"
                  className="text-sm text-muted-foreground cursor-pointer font-normal"
                >
                  Remember me for 30 days
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full h-11 text-sm font-medium group"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">

                    <Loader2 className="w-4 h-4 animate-spin" />
                    Signing in...
                  </span>
                ) : (
                  <span className="flex items-center gap-2 group-hover:gap-3 transition-all">
                    Sign In
                    <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </motion.div>
          </form>

          <motion.div variants={itemVariants} className="my-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-3 text-muted-foreground font-medium">
                  Or continue with
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
            <Button
              type="button"
              variant="outline"
              className="h-11 font-normal"
              onClick={signInWithGithub}
              disabled={isLoading}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-11 font-normal"
              onClick={signInWithGoogle}
              disabled={isLoading}
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </Button>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-center text-sm text-muted-foreground"
          >
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-primary hover:text-primary/80 font-medium hover:underline transition-colors"
            >
              Create an account
            </Link>
          </motion.p>
        </motion.div>

        <motion.p
          className="mt-6 text-center text-xs text-muted-foreground/60"
          variants={itemVariants}
        >
          By signing in, you agree to our{" "}
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