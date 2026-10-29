"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { experience } from "@/lib/data"
import { Reveal, SectionHeading } from "./motion"

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <section id="journey" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading index="05" label="Journey" title="git log" accent="--career" />

        <div ref={ref} className="relative">
          {/* Track + scroll-drawn progress line */}
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-line" />
          <motion.div style={{ scaleY }} className="absolute bottom-0 left-[7px] top-2 w-px origin-top bg-signal shadow-[0_0_10px_rgba(197,247,79,0.6)]" />

          <ol className="space-y-14">
            {experience.map((e, i) => (
              <motion.li
                key={e.hash}
                initial="hidden"
                whileInView="shown"
                viewport={{ once: true, margin: "-30% 0px" }}
                className="relative pl-10 sm:pl-14"
              >
                {/* Variants are driven by the li: a scale(0) element has no area for the observer */}
                <motion.span
                  variants={{ hidden: { scale: 0 }, shown: { scale: 1 } }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-signal bg-bg"
                >
                  <span className="h-[5px] w-[5px] rounded-full bg-signal" />
                </motion.span>

                <Reveal>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs">
                    <span className="text-[#febc2e]">commit {e.hash}</span>
                    {i === 0 && <span className="text-sky-400">(HEAD → main)</span>}
                    <span className="rounded border border-line px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-dim">{e.type}</span>
                    <span className="text-dim">{e.period}</span>
                  </div>

                  <div className="mt-4 grid gap-4 md:grid-cols-12">
                    <div className="md:col-span-5">
                      <a href={e.link} target="_blank" rel="noopener noreferrer" className="group inline-flex items-start gap-2">
                        <h3 className="text-3xl font-semibold tracking-tight text-fg transition-colors group-hover:text-signal sm:text-4xl">{e.org}</h3>
                        <ArrowUpRight className="mt-1 h-5 w-5 text-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
                      </a>
                      <p className="mt-1 text-muted">{e.role}</p>
                    </div>
                    <div className="md:col-span-7">
                      <p className="leading-relaxed text-muted">{e.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {e.skills.map((s) => (
                          <span key={s} className="font-mono text-[11px] text-dim">
                            <span className="text-emerald-400">+</span> {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
