"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, useReducedMotion } from "framer-motion"

type Step = { cmd: string; out: { text: string; tone?: "ok" | "dim" | "accent" }[] }

const SCRIPT: Step[] = [
  { cmd: "whoami", out: [{ text: "ahmed ghounami · full-stack & systems engineer" }] },
  { cmd: "cat now.txt", out: [{ text: "shipping Portify → portifyapp.vercel.app", tone: "accent" }] },
  {
    cmd: "git log --oneline -3",
    out: [
      { text: "0caa100 Add an owner-only admin dashboard", tone: "dim" },
      { text: "4d43c79 Let testers choose their site address", tone: "dim" },
      { text: "d96720b Add Swiss Index template", tone: "dim" },
    ],
  },
  {
    cmd: "npm test && npx playwright test",
    out: [
      { text: "✓ 347 unit tests passed", tone: "ok" },
      { text: "✓ 125 e2e tests passed · 375/768/1440px", tone: "ok" },
    ],
  },
]

const TONE = { ok: "text-emerald-400", dim: "text-muted", accent: "text-signal" } as const

/** Fake shell that types out SCRIPT once it scrolls into view. */
export default function Terminal({ start }: { start: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const [step, setStep] = useState(0)
  const [chars, setChars] = useState(0)
  const [showOut, setShowOut] = useState(false)

  useEffect(() => {
    if (reduce) {
      setStep(SCRIPT.length)
      return
    }
    if (!start || !inView || step >= SCRIPT.length) return
    const cmd = SCRIPT[step].cmd
    let t: ReturnType<typeof setTimeout>
    if (chars < cmd.length) {
      t = setTimeout(() => setChars((c) => c + 1), 38 + Math.random() * 45)
    } else if (!showOut) {
      t = setTimeout(() => setShowOut(true), 260)
    } else {
      t = setTimeout(() => {
        setStep((s) => s + 1)
        setChars(0)
        setShowOut(false)
      }, 650)
    }
    return () => clearTimeout(t)
  }, [start, inView, step, chars, showOut, reduce])

  return (
    <div ref={ref} className="overflow-hidden rounded-2xl border border-line bg-elev/80 shadow-2xl shadow-black/60 backdrop-blur-xl">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[11px] text-dim">ahmed@paris — zsh</span>
      </div>
      <div className="min-h-[268px] space-y-3 p-5 font-mono text-[12px] leading-relaxed sm:text-[13px]">
        {SCRIPT.map((s, i) => {
          if (i > step) return null
          const typing = i === step
          return (
            <div key={s.cmd}>
              <div className="text-fg">
                <span className="text-signal">❯</span> <span className={typing && !showOut ? "caret" : ""}>{typing ? s.cmd.slice(0, chars) : s.cmd}</span>
              </div>
              {(!typing || showOut) &&
                s.out.map((o) => (
                  <div key={o.text} className={o.tone ? TONE[o.tone] : "text-muted"}>
                    {o.text}
                  </div>
                ))}
            </div>
          )
        })}
        {step >= SCRIPT.length && (
          <div className="text-fg">
            <span className="text-signal">❯</span> <span className="caret" />
          </div>
        )}
      </div>
    </div>
  )
}
