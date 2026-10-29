"use client"

import { ArrowUp, Command } from "lucide-react"
import { portify, profile } from "@/lib/data"
import { openPalette } from "./CommandPalette"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div className="mx-auto max-w-6xl px-5 pt-12 sm:px-6">
        <div className="flex flex-col gap-8 font-mono text-xs text-dim sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-muted">© {new Date().getFullYear()} {profile.name}</p>
            <p>Next.js · React 19 · TypeScript · Tailwind CSS · Framer Motion</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href={portify.url} target="_blank" rel="noopener noreferrer" className="hover:text-signal">
              Portify ↗
            </a>
            <button type="button" onClick={openPalette} className="inline-flex items-center gap-1.5 hover:text-signal">
              press <kbd className="inline-flex items-center gap-0.5 rounded border border-line px-1.5 py-0.5 text-[10px]"><Command className="h-2.5 w-2.5" />K</kbd>
            </button>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-signal hover:text-signal"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div aria-hidden className="mt-10 select-none overflow-hidden">
        <div
          className="translate-y-[18%] whitespace-nowrap text-center text-[22vw] font-semibold leading-none tracking-[-0.07em]"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.12)", color: "transparent" }}
        >
          GHOUNAMI
        </div>
      </div>
    </footer>
  )
}
