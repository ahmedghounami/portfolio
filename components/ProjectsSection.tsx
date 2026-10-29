"use client"

import { useCallback, useEffect, useState, type MouseEvent } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowUpRight, Github, X } from "lucide-react"
import { projects, type Project } from "@/lib/data"
import { EASE, Reveal, SectionHeading } from "./motion"

const FILTERS = ["All", "Full-Stack", "Real-Time", "Systems", "Mobile"] as const
type Filter = (typeof FILTERS)[number]

function ProjectDrawer({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div className="fixed inset-0 z-[70] flex justify-end" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative flex h-full w-full max-w-xl flex-col overflow-y-auto border-l border-line bg-bg"
          >
            <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-elev">
              <Image src={project.image} alt={project.title} fill sizes="576px" className="object-cover" unoptimized={project.image.startsWith("http")} />
              <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-md hover:bg-black"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 p-6 sm:p-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
                {project.category} · {project.year}
              </div>
              <h3 className="mt-3 text-4xl font-semibold tracking-tight text-fg">{project.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

              <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-dim">Highlights</div>
              <ul className="mt-3 space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-fg">
                    <span className="text-signal">→</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-dim">Stack</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-semibold text-bg transition-colors hover:bg-signal"
              >
                <Github className="h-4 w-4" /> View source <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("All")
  const [hovered, setHovered] = useState<Project | null>(null)
  const [open, setOpen] = useState<Project | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 25 })
  const sy = useSpring(y, { stiffness: 200, damping: 25 })

  const close = useCallback(() => setOpen(null), [])
  const list = filter === "All" ? projects : projects.filter((p) => p.filter === filter)

  const onMove = (e: MouseEvent) => {
    x.set(e.clientX)
    y.set(e.clientY)
  }

  return (
    <section id="projects" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          index="03"
          label="Selected work"
          title="More things"
          accent="I've engineered."
          intro="Real-time multiplayer games, torrent streaming, a C++ web server and container infrastructure. Each one taught me a different layer of the stack."
        />

        <Reveal className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`relative rounded-full px-4 py-2 font-mono text-xs transition-colors ${filter === f ? "text-black" : "text-muted hover:text-fg"}`}
            >
              {filter === f && (
                <motion.span layoutId="project-filter" className="absolute inset-0 rounded-full bg-signal" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </Reveal>

        <ul className="border-t border-line" onMouseMove={onMove} onMouseLeave={() => setHovered(null)}>
          <AnimatePresence mode="popLayout" initial={false}>
            {list.map((p, i) => (
              <motion.li
                key={p.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="border-b border-line"
              >
                <button
                  type="button"
                  onClick={() => {
                    setHovered(null)
                    setOpen(p)
                  }}
                  onMouseEnter={() => setHovered(p)}
                  onFocus={() => setHovered(null)}
                  data-cursor="View"
                  className="group grid w-full grid-cols-12 items-center gap-4 py-7 text-left sm:py-9"
                >
                  <span className="col-span-2 font-mono text-xs text-dim sm:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                  <span className="col-span-10 sm:col-span-6">
                    <span className="block text-3xl font-semibold tracking-tight text-fg transition-all duration-500 group-hover:translate-x-3 group-hover:text-signal sm:text-5xl">
                      {p.title}
                    </span>
                    <span className="mt-1 block text-sm text-muted sm:hidden">{p.category}</span>
                  </span>
                  <span className="hidden text-sm text-muted sm:col-span-3 sm:block">{p.category}</span>
                  <span className="hidden items-center justify-end gap-4 sm:col-span-2 sm:flex">
                    <span className="font-mono text-xs text-dim">{p.year}</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line transition-all duration-500 group-hover:rotate-45 group-hover:border-signal group-hover:bg-signal group-hover:text-black">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </span>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>

      {/* Floating preview that follows the pointer (fine pointers only) */}
      <motion.div
        aria-hidden
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
        className="pointer-events-none fixed left-0 top-0 z-30 hidden [@media(pointer:fine)]:block"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.6, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.6, rotate: 6 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="relative h-[220px] w-[320px] overflow-hidden rounded-2xl border border-line-strong bg-elev shadow-2xl shadow-black"
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={hovered.title}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="absolute inset-0"
                >
                  <Image src={hovered.image} alt="" fill sizes="320px" className="object-cover" unoptimized={hovered.image.startsWith("http")} />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <ProjectDrawer project={open} onClose={close} />
    </section>
  )
}
