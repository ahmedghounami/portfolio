"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { EASE } from "./motion"

const LINES = [
  "init  kernel ............. ok",
  "load  experience ......... ok",
  "mount projects/portify ... ok",
  "link  creativity ......... ok",
]

const STORAGE_KEY = "ag:booted"

/** Terminal boot sequence shown once per session. Calls onDone when it leaves. */
export default function Preloader({ onDone }: { onDone: () => void }) {
  // "checking" covers the page until we know whether to boot, so nothing flashes.
  const [phase, setPhase] = useState<"checking" | "boot" | "done">("checking")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let seen = false
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1"
    } catch {}
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (seen || reduce) {
      setPhase("done")
      onDone()
      return
    }
    setPhase("boot")

    const start = performance.now()
    const duration = 1500
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      setProgress(Math.round((1 - Math.pow(1 - p, 3)) * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else
        setTimeout(() => {
          try {
            sessionStorage.setItem(STORAGE_KEY, "1")
          } catch {}
          setPhase("done")
        }, 250)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <>
      {phase === "checking" && <div className="fixed inset-0 z-[90] bg-bg" />}
      <AnimatePresence onExitComplete={onDone}>
      {phase === "boot" && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[90] flex flex-col justify-between bg-bg p-6 sm:p-10 font-mono text-xs sm:text-sm text-muted"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div className="flex items-center justify-between text-dim">
            <span>ahmed@ghounami:~</span>
            <span>v2026.10</span>
          </div>

          <div className="space-y-1.5">
            {LINES.map((line, i) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: progress > i * 22 ? 1 : 0, x: progress > i * 22 ? 0 : -8 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-signal">$</span> {line}
              </motion.div>
            ))}
          </div>

          <div>
            <div className="flex items-end justify-between mb-3">
              <span className="text-dim">booting portfolio</span>
              <span className="text-5xl sm:text-7xl font-sans font-semibold tracking-tighter text-fg tabular-nums">
                {progress}
                <span className="text-signal">%</span>
              </span>
            </div>
            <div className="h-px w-full bg-line overflow-hidden">
              <div className="h-full bg-signal" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  )
}
