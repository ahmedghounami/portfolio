"use client"

import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react"
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion"

export const EASE = [0.16, 1, 0.3, 1] as const

/** Fades and lifts children into view once. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  ...rest
}: { children: ReactNode; delay?: number; y?: number } & HTMLMotionProps<"div">) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/** Reveals text character by character from behind a mask. */
export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.035,
  animateOnMount = false,
}: {
  text: string
  className?: string
  delay?: number
  stagger?: number
  animateOnMount?: boolean
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const show = animateOnMount || inView

  // Characters are grouped per word so lines only ever break between words.
  let index = 0
  const words = text.split(" ")

  return (
    <span ref={ref} className={className} aria-label={text} role="text">
      {words.map((word, w) => (
        <span key={w} aria-hidden className="inline-block whitespace-nowrap">
          {word.split("").map((char) => {
            const i = index++
            return (
              <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em] pr-[0.02em]">
                <motion.span
                  className="inline-block"
                  initial={reduce ? { opacity: 0 } : { y: "110%" }}
                  animate={show ? (reduce ? { opacity: 1 } : { y: "0%" }) : undefined}
                  transition={{ duration: 0.9, delay: delay + i * stagger, ease: EASE }}
                >
                  {char}
                </motion.span>
              </span>
            )
          })}
          {w < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  )
}

/** Pulls its child gently toward the pointer. */
export function Magnetic({ children, strength = 0.35, className }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const x = useSpring(0, { stiffness: 220, damping: 18, mass: 0.4 })
  const y = useSpring(0, { stiffness: 220, damping: 18, mass: 0.4 })

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div ref={ref} style={{ x, y }} onMouseMove={onMove} onMouseLeave={reset} className={className ?? "inline-block"}>
      {children}
    </motion.div>
  )
}

/** Card whose border glow tracks the pointer (see .spotlight in globals.css). */
export function Spotlight({ children, className, ...rest }: { children: ReactNode } & HTMLMotionProps<"div">) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`)
  }
  return (
    <motion.div onMouseMove={onMove} className={`spotlight ${className ?? ""}`} {...rest}>
      {children}
    </motion.div>
  )
}

/** Counts up to `value` when scrolled into view. */
export function CountUp({ value, suffix = "", duration = 1.6 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const mv = useMotionValue(0)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setDisplay(value)
      return
    }
    const controls = animate(mv, value, { duration, ease: EASE, onUpdate: (v) => setDisplay(Math.round(v)) })
    return () => controls.stop()
  }, [inView, value, duration, reduce, mv])

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  )
}

/** Mono index label + large title used at the top of each section. */
export function SectionHeading({
  index,
  label,
  title,
  accent,
  intro,
}: {
  index: string
  label: string
  title: string
  accent?: string
  intro?: string
}) {
  return (
    <div className="mb-14 md:mb-20">
      <Reveal className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-dim mb-6">
        <span className="text-signal">{index}</span>
        <span className="h-px w-10 bg-line" />
        <span>{label}</span>
      </Reveal>
      <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[0.95] text-fg">
        <SplitText text={title} />
        {accent && (
          <>
            {" "}
            <span className="font-serif italic font-normal tracking-[-0.02em] text-muted">
              <SplitText text={accent} delay={title.length * 0.035} />
            </span>
          </>
        )}
      </h2>
      {intro && (
        <Reveal delay={0.2} className="mt-6 max-w-xl text-base sm:text-lg text-muted leading-relaxed">
          {intro}
        </Reveal>
      )}
    </div>
  )
}
