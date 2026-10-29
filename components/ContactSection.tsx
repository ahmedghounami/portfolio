"use client"

import { ArrowUpRight, Copy } from "lucide-react"
import { profile } from "@/lib/data"
import { Magnetic, Reveal, SplitText } from "./motion"

export default function ContactSection({ onToast }: { onToast: (message: string) => void }) {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      onToast("Email copied to clipboard")
    } catch {
      onToast(profile.email)
    }
  }

  const links = [
    { label: "GitHub", value: "@ahmedghounami", href: profile.github },
    { label: "LinkedIn", value: "Ahmed Ghounami", href: profile.linkedin },
    { label: "Phone / WhatsApp", value: profile.phone, href: profile.phoneHref },
    { label: "Résumé", value: "Download PDF", href: profile.cv },
  ]

  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(197,247,79,0.10),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-dim">
          <span className="text-signal">06</span>
          <span className="h-px w-10 bg-line" />
          <span>Contact</span>
        </Reveal>

        <h2 className="text-[13vw] font-semibold leading-[0.88] tracking-[-0.06em] text-fg lg:text-[9.5rem]">
          <SplitText text="Let's build" className="block" />
          <span className="block font-serif italic font-normal tracking-[-0.03em] text-signal">
            <SplitText text="something great." delay={0.3} />
          </span>
        </h2>

        <Reveal delay={0.2} className="mt-12 max-w-xl text-lg leading-relaxed text-muted">
          I&apos;m looking for full-time engineering roles and selected freelance projects. Tell me what you&apos;re building and I&apos;ll
          reply within a day.
        </Reveal>

        <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center gap-3">
          <Magnetic>
            <a
              href={`mailto:${profile.email}`}
              data-cursor="Say hi"
              className="group inline-flex items-center gap-3 rounded-full bg-signal py-4 pl-7 pr-3 text-base font-semibold text-black"
            >
              {profile.email}
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-signal transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </a>
          </Magnetic>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-4 font-mono text-xs text-muted transition-colors hover:border-fg hover:text-fg"
          >
            <Copy className="h-3.5 w-3.5" /> copy
          </button>
        </Reveal>

        <div className="mt-20 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {links.map((l, i) => (
            <Reveal key={l.label} delay={i * 0.06}>
              <a
                href={l.href}
                target={l.href.startsWith("http") || l.href.endsWith(".pdf") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-end justify-between border-b border-line py-6 pr-4 transition-colors hover:bg-white/[0.02] lg:border-r lg:px-5 lg:first:pl-0 lg:last:border-r-0"
              >
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-dim">{l.label}</span>
                  <span className="mt-2 block text-fg transition-colors group-hover:text-signal">{l.value}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-dim transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-signal" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
