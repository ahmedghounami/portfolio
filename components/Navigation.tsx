"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"

interface NavigationProps {
  activeSection: string
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Contact", href: "#contact", id: "contact" },
  ]

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 py-4 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <nav className="flex items-center justify-between px-5 py-3 rounded-2xl bg-zinc-950/70 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/60">
          {/* Brand */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group text-sm font-semibold tracking-wider text-white"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/15 flex items-center justify-center font-bold text-xs tracking-tighter text-white group-hover:border-white/40 transition-colors shadow-inner">
              AG
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-zinc-100 group-hover:text-white transition-colors">Ahmed</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 bg-zinc-900/50 p-1 rounded-xl border border-white/5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-xs font-medium transition-all duration-200 rounded-lg ${
                    isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-lg bg-zinc-800/80 border border-white/15 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              )
            })}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              Let&apos;s Talk
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 border border-white/5 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-6xl mx-auto mt-2 p-4 rounded-2xl bg-zinc-950/95 border border-white/10 backdrop-blur-2xl shadow-2xl space-y-2"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "bg-zinc-800 text-white border border-white/15"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-colors"
              >
                Get in Touch <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
