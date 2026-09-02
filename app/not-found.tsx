"use client"

import React from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  const router = useRouter()

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050507]">
      {/* Radial spotlight */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(39,39,42,0.4)_0%,rgba(9,9,11,0.8)_50%,rgba(5,5,7,1)_100%)]" />

      {/* Animated grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 w-full max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 22, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-2xl shadow-2xl p-8 sm:p-12 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mx-auto mb-6">
            <span className="font-mono text-2xl font-bold text-white">404</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            Page Not Found
          </h1>

          <p className="text-zinc-400 max-w-md mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved to another location.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => router.push("/")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </button>

            <button
              onClick={() => router.back()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 text-sm font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Go Back</span>
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
