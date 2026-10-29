"use client"

import { motion } from "framer-motion"
import { stack } from "@/lib/data"
import { Reveal, SectionHeading, Spotlight } from "./motion"

const SPANS = ["lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-1", "lg:col-span-3"]

export default function SkillsSection() {
  return (
    <section id="stack" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          index="04"
          label="Stack"
          title="Tools I reach for,"
          accent="from kernel to pixel."
          intro="Low-level C and C++ taught me how computers work. Modern TypeScript lets me ship products quickly. I use both."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {stack.map((group, gi) => (
            <Reveal key={group.title} delay={(gi % 3) * 0.08} className={SPANS[gi] ?? "lg:col-span-2"}>
              <Spotlight className="group h-full rounded-3xl border border-line bg-white/[0.015] p-6 transition-colors hover:border-line-strong">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-dim">
                    ~/stack/<span className="text-signal">{group.code}</span>.ts
                  </span>
                  <span className="font-mono text-[10px] text-dim">{String(group.items.length).padStart(2, "0")}</span>
                </div>
                <h3 className="mb-5 text-2xl font-medium tracking-tight text-fg">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.04, type: "spring", stiffness: 300, damping: 20 }}
                      whileHover={{ y: -3 }}
                      className="cursor-default rounded-lg border border-line bg-bg/60 px-3 py-1.5 text-[13px] text-muted transition-colors hover:border-signal/60 hover:text-fg"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
