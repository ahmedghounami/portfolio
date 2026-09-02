"use client"

import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-12 border-t border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="text-sm font-semibold text-white">
              Ahmed Ghounami <span className="text-zinc-500 font-normal">/ Software Engineer</span>
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              Built with Next.js, React 19, TypeScript & Tailwind CSS • 1337 (42 Network)
            </p>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 hover:border-white/20 text-zinc-400 hover:text-white transition-all shadow-sm"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
