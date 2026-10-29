"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion"
import { Check } from "lucide-react"

import Navigation from "./Navigation"
import HeroSection from "./HeroSection"
import Marquee from "./Marquee"
import AboutSection from "./AboutSection"
import PortifySection from "./PortifySection"
import ProjectsSection from "./ProjectsSection"
import SkillsSection from "./SkillsSection"
import ExperienceSection from "./ExperienceSection"
import ContactSection from "./ContactSection"
import Footer from "./Footer"
import AnimatedBackground from "./AnimatedBackground"
import Preloader from "./Preloader"
import Cursor from "./Cursor"
import CommandPalette from "./CommandPalette"
import { navItems } from "@/lib/data"

export default function PortfolioClient() {
  const [ready, setReady] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [toast, setToast] = useState<string | null>(null)
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 })

  const onReady = useCallback(() => setReady(true), [])
  const showToast = useCallback((message: string) => {
    clearTimeout(toastTimer.current)
    setToast(message)
    toastTimer.current = setTimeout(() => setToast(null), 2200)
  }, [])

  // Track which section is in the middle of the viewport for the nav indicator.
  // "projects" belongs to the Work nav item.
  useEffect(() => {
    const ids = ["hero", "about", "work", "projects", "stack", "journey", "contact"]
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const id = entry.target.id === "projects" ? "work" : entry.target.id
          setActiveSection(navItems.some((n) => n.id === id) ? id : "hero")
        })
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen">
      <Preloader onDone={onReady} />
      <AnimatedBackground />
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
        <div className="grain" />
      </div>
      <Cursor />
      <CommandPalette onToast={showToast} />

      <motion.div className="fixed inset-x-0 top-0 z-[55] h-[2px] origin-left bg-signal" style={{ scaleX: progress }} />

      <Navigation activeSection={activeSection} ready={ready} />

      <main>
        <HeroSection ready={ready} />
        <Marquee />
        <AboutSection />
        <PortifySection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection onToast={showToast} />
      </main>

      <Footer />

      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-6 left-1/2 z-[85] flex items-center gap-2 rounded-full border border-line-strong bg-elev px-4 py-2.5 text-sm text-fg shadow-2xl shadow-black"
          >
            <Check className="h-4 w-4 text-signal" />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
