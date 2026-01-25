"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function GoBack() {
    const router = useRouter()
    return (
        <button className="absolute top-4 left-4" onClick={() => router.back()}>
            <ArrowLeft className="w-6 h-6 text-foreground" />   
        </button>
    )
}