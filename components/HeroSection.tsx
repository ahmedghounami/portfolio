"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ArrowDownRight, ArrowUpRight, FileText } from "lucide-react"
import { portify, profile } from "@/lib/data"
import { EASE, Magnetic, SplitText } from "./motion"
import Terminal from "./Terminal"

function useParisTime() {
  const [time, setTime] = useState<string | null>(null)
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: profile.timezone })
    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

function RoleRotator({ start }: { start: boolean }) {
  const [i, setI] = useState(0)
  const reduce = useReducedMotion()
  useEffect(() => {
    if (!start || reduce) return
    const id = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2600)
    return () => clearInterval(id)
  }, [start, reduce])

  return (
    <span className="relative inline-flex h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={profile.roles[i]}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: EASE }}
          className="font-serif italic text-signal"
        >
          {profile.roles[i].toLowerCase()}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function HeroSection({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null)
  const time = useParisTime()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: ready ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 0.9, delay, ease: EASE },
  })

  return (
    <section ref={ref} id="hero" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-10 pt-32">
      <motion.div style={{ y: nameY, opacity: fade }} className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <motion.div {...fadeUp(0.1)} className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">
          <span className="flex items-center gap-2 text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to full-time roles & freelance
          </span>
          <span>
            {profile.location} · <span className="tabular-nums text-muted">{time ?? "--:--:--"}</span>
          </span>
        </motion.div>

        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <h1 className="text-[17vw] font-semibold leading-[0.85] tracking-[-0.06em] text-fg sm:text-[13vw] lg:text-[8.6rem]">
              <SplitText text={profile.firstName} animateOnMount={ready} delay={0.15} stagger={0.05} className="block" />
              <span className="block font-serif italic font-normal tracking-[-0.03em] text-muted">
                <SplitText text={`${profile.lastName}.`} animateOnMount={ready} delay={0.4} stagger={0.045} />
              </span>
            </h1>

            <motion.p {...fadeUp(0.9)} className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              <span className="text-fg">
                <RoleRotator start={ready} />
              </span>{" "}
              trained at 42 Paris. I design and ship products end to end, from C++ socket servers to the{" "}
              <a href={portify.url} target="_blank" rel="noopener noreferrer" className="text-fg underline decoration-signal/60 underline-offset-4 hover:decoration-signal">
                portfolio builder
              </a>{" "}
              people use today.
            </motion.p>

            <motion.div {...fadeUp(1.05)} className="mt-10 flex flex-wrap items-center gap-3">
              <Magnetic>
                <a
                  href="#work"
                  data-cursor="Explore"
                  className="group inline-flex items-center gap-3 rounded-full bg-signal py-3.5 pl-6 pr-3 text-sm font-semibold text-black transition-transform"
                >
                  See my work
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-signal transition-transform duration-500 group-hover:rotate-[-45deg]">
                    <ArrowDownRight className="h-4 w-4" />
                  </span>
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={profile.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3.5 text-sm font-medium text-fg transition-colors hover:border-fg"
                >
                  <FileText className="h-4 w-4 text-muted" />
                  Download CV
                </a>
              </Magnetic>
              <div className="flex items-center gap-1 pl-1 font-mono text-xs">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="px-2 py-2 text-muted hover:text-signal">
                  GitHub<ArrowUpRight className="inline h-3 w-3" />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="px-2 py-2 text-muted hover:text-signal">
                  LinkedIn<ArrowUpRight className="inline h-3 w-3" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 12 }}
            animate={ready ? { opacity: 1, y: 0, rotateX: 0 } : undefined}
            transition={{ duration: 1.1, delay: 0.6, ease: EASE }}
            style={{ transformPerspective: 1200 }}
            className="min-w-0 lg:col-span-5"
          >
            <Terminal start={ready} />
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : undefined}
        transition={{ delay: 1.6 }}
        className="mx-auto mt-14 hidden flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-dim sm:flex"
        aria-label="Scroll to About"
      >
        scroll
        <span className="relative h-10 w-px overflow-hidden bg-line">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-signal"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  )
}
