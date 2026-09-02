"use client"

import { useEffect, useMemo, useState } from "react"
import { motion, useScroll } from "framer-motion"

import Navigation from "../components/Navigation"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import SkillsSection from "../components/SkillsSection"
import ProjectsSection from "../components/ProjectsSection"
import ExperienceSection from "../components/ExperienceSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import AnimatedBackground from "./AnimatedBackground"

const SECTION_IDS = ["hero", "about", "skills", "projects", "experience", "contact"] as const
type SectionId = (typeof SECTION_IDS)[number]

export default function PortfolioClient() {
  const [activeSection, setActiveSection] = useState<SectionId>("hero")
  const { scrollYProgress } = useScroll()

  // Intersection observer for active navigation section
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const options: IntersectionObserverInit = { root: null, rootMargin: "-20% 0px -50% 0px", threshold: 0.1 }

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(id)
        })
      }, options)
      io.observe(el)
      observers.push(io)
    })

    return () => observers.forEach((io) => io.disconnect())
  }, [])

  const progressScaleX = useMemo(
    () => scrollYProgress,
    [scrollYProgress]
  )

  return (
    <div className="relative min-h-screen bg-[#050507] text-zinc-100 selection:bg-zinc-800 selection:text-white">
      {/* Obsidian atmospheric background */}
      <AnimatedBackground intensity={0.9} />

      {/* Top sleek silver/white scroll progress bar */}
      <motion.div
        className="fixed left-0 top-0 h-[2px] bg-gradient-to-r from-zinc-600 via-white to-zinc-400 origin-left z-50 shadow-[0_0_8px_rgba(255,255,255,0.4)]"
        style={{ scaleX: progressScaleX }}
      />

      {/* Modern navigation */}
      <Navigation activeSection={activeSection} />

      {/* Main sections */}
      <main className="flex flex-col gap-10 md:gap-16">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
