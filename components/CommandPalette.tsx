"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Copy, CornerDownLeft, FileText, Github, Hash, Linkedin, Rocket, Search } from "lucide-react"
import { navItems, portify, profile } from "@/lib/data"

type Command = {
  id: string
  label: string
  group: "Navigate" | "Links" | "Actions"
  icon: React.ReactNode
  hint?: string
  run: () => void
}

export const OPEN_PALETTE_EVENT = "palette:open"

export function openPalette() {
  window.dispatchEvent(new Event(OPEN_PALETTE_EVENT))
}

/** ⌘K / Ctrl+K command palette for navigating the portfolio from the keyboard. */
export default function CommandPalette({ onToast }: { onToast: (message: string) => void }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const commands = useMemo<Command[]>(() => {
    const go = (id: string) => () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    const openUrl = (url: string) => () => window.open(url, "_blank", "noopener,noreferrer")
    return [
      { id: "top", label: "Home", group: "Navigate", icon: <Hash className="h-4 w-4" />, run: go("hero") },
      ...navItems.map((n) => ({
        id: n.id,
        label: n.label,
        group: "Navigate" as const,
        icon: <Hash className="h-4 w-4" />,
        run: go(n.id),
      })),
      { id: "portify", label: "Open Portify (live)", group: "Links", icon: <Rocket className="h-4 w-4" />, hint: "portifyapp.vercel.app", run: openUrl(portify.url) },
      { id: "github", label: "GitHub", group: "Links", icon: <Github className="h-4 w-4" />, hint: "@ahmedghounami", run: openUrl(profile.github) },
      { id: "linkedin", label: "LinkedIn", group: "Links", icon: <Linkedin className="h-4 w-4" />, run: openUrl(profile.linkedin) },
      { id: "cv", label: "Download CV", group: "Actions", icon: <FileText className="h-4 w-4" />, hint: "PDF", run: openUrl(profile.cv) },
      {
        id: "email",
        label: "Copy email address",
        group: "Actions",
        icon: <Copy className="h-4 w-4" />,
        hint: profile.email,
        run: () => {
          navigator.clipboard?.writeText(profile.email).then(
            () => onToast("Email copied to clipboard"),
            () => onToast(profile.email)
          )
        },
      },
    ]
  }, [onToast])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter((c) => `${c.label} ${c.group} ${c.hint ?? ""}`.toLowerCase().includes(q))
  }, [commands, query])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((o) => !o)
      } else if (e.key === "Escape") {
        setOpen(false)
      }
    }
    const onOpen = () => setOpen(true)
    window.addEventListener("keydown", onKey)
    window.addEventListener(OPEN_PALETTE_EVENT, onOpen)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener(OPEN_PALETTE_EVENT, onOpen)
    }
  }, [])

  useEffect(() => {
    if (open) {
      setQuery("")
      setActive(0)
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [open])

  const run = (cmd: Command | undefined) => {
    if (!cmd) return
    setOpen(false)
    cmd.run()
  }

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActive((a) => (a + 1) % Math.max(filtered.length, 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActive((a) => (a - 1 + filtered.length) % Math.max(filtered.length, 1))
    } else if (e.key === "Enter") {
      e.preventDefault()
      run(filtered[active])
    }
  }

  let lastGroup = ""

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-[14vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 420, damping: 32 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-elev/95 shadow-2xl shadow-black backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <Search className="h-4 w-4 text-dim" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setActive(0)
                }}
                onKeyDown={onInputKey}
                placeholder="Type a command or search…"
                className="h-14 flex-1 bg-transparent text-sm text-fg placeholder:text-dim outline-none focus-visible:outline-none"
                aria-label="Search commands"
              />
              <kbd className="rounded-md border border-line px-1.5 py-0.5 font-mono text-[10px] text-dim">ESC</kbd>
            </div>

            <div role="listbox" className="max-h-[50vh] overflow-y-auto p-2">
              {filtered.length === 0 && <p className="px-3 py-8 text-center text-sm text-dim">No results for “{query}”.</p>}
              {filtered.map((cmd, i) => {
                const header = cmd.group !== lastGroup ? cmd.group : null
                lastGroup = cmd.group
                return (
                  <div key={cmd.id}>
                    {header && <div className="px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-dim">{header}</div>}
                    <div
                      role="option"
                      aria-selected={i === active}
                      onMouseEnter={() => setActive(i)}
                      onClick={() => run(cmd)}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                        i === active ? "bg-white/[0.06] text-fg" : "text-muted"
                      }`}
                    >
                      <span className={i === active ? "text-signal" : "text-dim"}>{cmd.icon}</span>
                      <span className="flex-1">{cmd.label}</span>
                      {cmd.hint && <span className="hidden sm:block font-mono text-[11px] text-dim">{cmd.hint}</span>}
                      {i === active ? <CornerDownLeft className="h-3.5 w-3.5 text-dim" /> : <ArrowRight className="h-3.5 w-3.5 opacity-0" />}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex items-center justify-between border-t border-line px-4 py-2.5 font-mono text-[10px] text-dim">
              <span>↑↓ navigate · ↵ select</span>
              <span>ahmed.ghounami</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
