"use client"

import { useEffect, useRef, useState, type MouseEvent } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useInView, useReducedMotion, useSpring } from "framer-motion"
import { ArrowUpRight, Lock, RotateCw } from "lucide-react"
import { portify } from "@/lib/data"
import { CountUp, EASE, Magnetic, Reveal, SectionHeading, Spotlight } from "./motion"

const CYCLE_MS = 3200

/** Browser mockup that cycles through the real Portify template thumbnails and tilts toward the pointer. */
function TemplateShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { margin: "-20%" })
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const rx = useSpring(0, { stiffness: 150, damping: 20 })
  const ry = useSpring(0, { stiffness: 150, damping: 20 })
  const current = portify.templates[index]

  // Warm the cache so each swap reveals an already-decoded image.
  useEffect(() => {
    if (!inView) return
    portify.templates.forEach((t) => {
      const img = new window.Image()
      img.src = `/portify/${t.id}.webp`
    })
  }, [inView])

  useEffect(() => {
    if (!inView || paused || reduce) return
    const id = setTimeout(() => setIndex((i) => (i + 1) % portify.templates.length), CYCLE_MS)
    return () => clearTimeout(id)
  }, [index, inView, paused, reduce])

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 8)
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 8)
  }

  return (
    <div ref={ref}>
      <motion.div
        onMouseMove={onMove}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => {
          rx.set(0)
          ry.set(0)
          setPaused(false)
        }}
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 1400 }}
        className="relative"
      >
        {/* Glow behind the window */}
        <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(197,247,79,0.14),transparent_65%)] blur-2xl" />

        <a
          href={`${portify.url}/templates`}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="Open"
          className="block overflow-hidden rounded-2xl border border-line-strong bg-elev shadow-2xl shadow-black/70"
        >
          <div className="flex items-center gap-3 border-b border-line bg-white/[0.02] px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>
            <div className="flex flex-1 items-center gap-2 overflow-hidden rounded-md bg-black/40 px-3 py-1.5 font-mono text-[11px] text-muted">
              <Lock className="h-3 w-3 shrink-0 text-emerald-400" />
              <span className="truncate">
                portifyapp.vercel.app/templates/<span className="text-fg">{current.id}</span>/preview
              </span>
            </div>
            <RotateCw className="hidden h-3.5 w-3.5 text-dim sm:block" />
          </div>

          <div className="relative aspect-[4/3] overflow-hidden bg-black">
            <AnimatePresence initial={false}>
              <motion.div
                key={current.id}
                initial={{ scale: 1.06, clipPath: "inset(0 0 0 100%)", zIndex: 2 }}
                animate={{ scale: 1, clipPath: "inset(0 0 0 0%)", zIndex: 2 }}
                exit={{ zIndex: 1, opacity: 0.99, transition: { duration: 0.9 } }}
                transition={{ duration: 0.9, ease: EASE }}
                className="absolute inset-0"
              >
                <Image
                  src={`/portify/${current.id}.webp`}
                  alt={`${current.name} template preview`}
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-cover object-top"
                  unoptimized
                  priority={index === 0}
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 backdrop-blur-md">
              <span className="font-mono text-[10px] text-signal">{String(index + 1).padStart(2, "0")}/12</span>
              <span className="text-xs font-medium text-white">{current.name}</span>
              <span className="hidden text-xs text-white/50 sm:inline">· {current.for}</span>
            </div>
          </div>
        </a>
      </motion.div>

      {/* Template switcher with auto-advance progress */}
      <div className="mt-5 grid grid-cols-6 gap-1.5 sm:grid-cols-12" role="tablist" aria-label="Portify templates">
        {portify.templates.map((t, i) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={t.name}
            onClick={() => setIndex(i)}
            className="group relative h-8 overflow-hidden rounded-md border border-line bg-white/[0.02] transition-colors hover:border-line-strong"
          >
            <span className={`relative z-10 font-mono text-[9px] uppercase ${i === index ? "text-signal" : "text-dim group-hover:text-fg"}`}>
              {t.id.slice(0, 4)}
            </span>
            {i === index && (
              <motion.span
                key={`${t.id}-${paused}`}
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-signal"
                initial={{ scaleX: reduce || paused ? 1 : 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: reduce || paused ? 0 : CYCLE_MS / 1000, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

/** CV → schema → registry → preview → publish, fanning out to the three ways to ship. */
function Pipeline() {
  return (
    <div className="rounded-3xl border border-line bg-white/[0.015] p-6 sm:p-8">
      <div className="mb-8 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
        <span>Architecture · content flow</span>
        <span className="hidden sm:inline">typed end to end</span>
      </div>

      <div className="flex flex-col items-stretch gap-0 lg:flex-row lg:items-center">
        {portify.pipeline.map((node, i) => (
          <div key={node} className={`flex flex-col items-center lg:flex-row ${i < portify.pipeline.length - 1 ? "lg:flex-1" : ""}`}>
            <Reveal delay={i * 0.12} y={10} className="w-full lg:w-auto">
              <div className="whitespace-nowrap rounded-xl border border-line-strong bg-elev px-4 py-3 text-center font-mono text-xs text-fg">
                <span className="mr-2 text-dim">{i + 1}</span>
                {node}
              </div>
            </Reveal>
            {i < portify.pipeline.length - 1 && (
              <div className="relative h-8 w-px overflow-hidden bg-line lg:h-px lg:w-auto lg:flex-1">
                {/* Always rendered so server and client markup match; CSS hides them for reduced motion */}
                <>
                    <motion.span
                      className="absolute left-0 h-3 w-px bg-signal shadow-[0_0_8px_rgba(197,247,79,0.8)] motion-reduce:hidden lg:hidden"
                      animate={{ top: ["-40%", "120%"] }}
                      transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
                    />
                    <motion.span
                      className="absolute top-0 hidden h-px w-6 bg-signal shadow-[0_0_8px_rgba(197,247,79,0.8)] lg:block motion-reduce:hidden"
                      animate={{ left: ["-20%", "120%"] }}
                      transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
                    />
                </>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-2 sm:grid-cols-3">
        {portify.outputs.map((o, i) => (
          <Reveal key={o} delay={0.6 + i * 0.1} y={10}>
            <div className="flex items-center gap-3 rounded-xl border border-dashed border-line-strong px-4 py-3 font-mono text-xs">
              <span className="text-signal">↳</span>
              <span className="text-fg">{o}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default function PortifySection() {
  return (
    <section id="work" className="relative overflow-x-clip py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          index="02"
          label="Flagship product"
          title="Meet Portify,"
          accent="designed, built and shipped by me."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-7">
            <TemplateShowcase />
          </div>

          <div className="flex min-w-0 flex-col justify-between lg:col-span-5">
            <div>
              <Reveal className="mb-5 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Live in production
                </span>
                <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-dim">
                  2026 · Solo build
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="font-serif text-3xl italic leading-tight text-fg sm:text-4xl">“{portify.tagline}”</p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 leading-relaxed text-muted">{portify.summary}</p>
              </Reveal>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {portify.metrics.map((m, i) => (
                <Reveal key={m.label} delay={0.1 + i * 0.06} className="bg-bg p-5">
                  <div className="text-4xl font-semibold tracking-tighter text-fg">
                    <CountUp value={m.value} suffix={m.suffix} />
                  </div>
                  <div className="mt-1 text-xs text-muted">{m.label}</div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic>
                <a
                  href={portify.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="Visit"
                  className="group inline-flex items-center gap-3 rounded-full bg-fg py-3 pl-6 pr-3 text-sm font-semibold text-bg transition-colors hover:bg-signal"
                >
                  Visit <span className="hidden sm:inline">portifyapp.vercel.app</span>
                  <span className="sm:hidden">Portify</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-bg text-fg transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              </Magnetic>
              <a href={`${portify.url}/templates`} target="_blank" rel="noopener noreferrer" className="px-2 py-2 font-mono text-xs text-muted hover:text-signal">
                Browse templates ↗
              </a>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portify.features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08}>
              <Spotlight className="group h-full rounded-3xl border border-line bg-white/[0.015] p-7 transition-colors hover:border-line-strong">
                <div className="mb-6 font-mono text-xs text-dim">
                  <span className="text-signal">{"//"}</span> 0{i + 1}
                </div>
                <h3 className="text-lg font-medium text-fg">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
              </Spotlight>
            </Reveal>
          ))}
        </div>

        <div className="mt-4">
          <Pipeline />
        </div>

        <Reveal className="mt-8 flex flex-wrap gap-2">
          {portify.stack.map((s) => (
            <span key={s} className="rounded-full border border-line px-3.5 py-1.5 font-mono text-[11px] text-muted transition-colors hover:border-signal/50 hover:text-fg">
              {s}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
