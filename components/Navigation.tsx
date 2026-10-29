"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { Command } from "lucide-react"
import { navItems, profile } from "@/lib/data"
import { openPalette } from "./CommandPalette"
import { EASE } from "./motion"

export default function Navigation({ activeSection, ready }: { activeSection: string; ready: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(y > prev && y > 400 && !menuOpen)
    setScrolled(y > 20)
  })

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={ready ? { y: hidden ? -100 : 0, opacity: 1 } : undefined}
        transition={{ duration: 0.6, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-3 py-2.5 transition-all duration-500 sm:px-4 ${
            scrolled || menuOpen ? "border-line bg-bg/70 backdrop-blur-xl shadow-2xl shadow-black/40" : "border-transparent"
          }`}
        >
          <a href="#hero" className="group flex items-center gap-3" aria-label="Back to top" onClick={() => setMenuOpen(false)}>
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-line bg-elev font-mono text-xs font-bold text-fg">
              <span className="transition-transform duration-500 group-hover:-translate-y-8">AG</span>
              <span className="absolute translate-y-8 text-signal transition-transform duration-500 group-hover:translate-y-0">~/</span>
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-medium text-fg">{profile.name}</span>
              <span className="font-mono text-[10px] text-dim">software engineer</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => {
              const active = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative px-3.5 py-2 text-[13px] transition-colors ${active ? "text-fg" : "text-muted hover:text-fg"}`}
                >
                  <span className="mr-1 font-mono text-[10px] text-dim">0{i + 1}</span>
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-signal"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openPalette}
              className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-line bg-white/[0.02] px-2.5 py-1.5 font-mono text-[11px] text-muted transition-colors hover:border-line-strong hover:text-fg"
              aria-label="Open command palette"
            >
              <Command className="h-3 w-3" />K
            </button>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 rounded-lg bg-fg px-3.5 py-1.5 text-[13px] font-medium text-bg transition-colors hover:bg-signal"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-600" />
              </span>
              Hire me
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-xl border border-line"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <motion.span animate={menuOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }} className="h-px w-4 bg-fg" />
              <motion.span animate={menuOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }} className="h-px w-4 bg-fg" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-bg px-6 pb-10 pt-28 md:hidden"
          >
            <ul className="space-y-1">
              {navItems.map((item, i) => (
                <li key={item.id} className="overflow-hidden">
                  <motion.a
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.05, ease: EASE }}
                    className={`flex items-baseline gap-4 py-1 text-5xl font-semibold tracking-tight ${
                      activeSection === item.id ? "text-signal" : "text-fg"
                    }`}
                  >
                    <span className="font-mono text-xs text-dim">0{i + 1}</span>
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.4 } }}
              exit={{ opacity: 0 }}
              className="space-y-2 font-mono text-xs text-muted"
            >
              <a href={`mailto:${profile.email}`} className="block text-fg">
                {profile.email}
              </a>
              <div className="flex gap-4">
                <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                <a href={profile.cv} target="_blank" rel="noopener noreferrer">CV ↗</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
