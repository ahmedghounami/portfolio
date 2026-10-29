"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import Image from "next/image"
import { CountUp, Reveal, SectionHeading, Spotlight } from "./motion"

const STATEMENT =
  "I care about the whole stack: the memory layout under a C++ server, the schema behind an API, and the two hundred milliseconds of motion that make an interface feel alive. I learned to build at 1337 and 42 Paris, where there are no teachers, just hard problems, peers and code review."

const PRINCIPLES = [
  { n: "01", title: "Ship end to end", body: "Database, API, interface, tests, deployment. I own the whole path from idea to a URL people use." },
  { n: "02", title: "Prove it works", body: "Typed contracts, unit tests and browser tests at real screen sizes, so changes ship with confidence." },
  { n: "03", title: "Motion with purpose", body: "Animation that explains and guides, and steps aside for people who prefer reduced motion." },
]

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1])
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  )
}

export default function AboutSection() {
  const textRef = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: textRef, offset: ["start 85%", "end 45%"] })
  const words = STATEMENT.split(" ")

  return (
    <section id="about" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading index="01" label="About" title="Engineer by training," accent="builder by nature." />

        <p ref={textRef} className="max-w-5xl text-2xl font-medium leading-[1.3] tracking-tight text-fg sm:text-4xl" aria-label={STATEMENT}>
          {words.map((w, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {w}
            </Word>
          ))}
        </p>

        <div className="mt-20 grid gap-4 md:grid-cols-6">
          <Reveal className="md:col-span-2 md:row-span-2">
            <Spotlight className="group relative h-full min-h-[340px] overflow-hidden rounded-3xl border border-line bg-elev">
              <Image
                src="/profile.jpg"
                alt="Portrait of Ahmed Ghounami"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">Based in Paris</div>
                <div className="mt-1 text-lg font-medium text-fg">Ahmed Ghounami</div>
              </div>
            </Spotlight>
          </Reveal>

          {[
            { v: 12, s: "", label: "templates shipped in Portify" },
            { v: 2, s: "", label: "engineering internships" },
            { v: 7, s: "", label: "RNCP level track at 42 Paris" },
            { v: 3, s: "+", label: "years writing code daily" },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="md:col-span-2 lg:col-span-2">
              <Spotlight className="flex h-full flex-col justify-between rounded-3xl border border-line bg-white/[0.015] p-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">0{i + 1}</span>
                <div>
                  <div className="text-5xl font-semibold tracking-tighter text-fg sm:text-6xl">
                    <CountUp value={stat.v} suffix={stat.s} />
                  </div>
                  <div className="mt-2 text-sm text-muted">{stat.label}</div>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1}>
              <Spotlight className="group h-full rounded-3xl border border-line bg-white/[0.015] p-7 transition-colors hover:border-line-strong">
                <div className="mb-10 flex items-center justify-between font-mono text-xs text-dim">
                  <span>{p.n}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-dim transition-colors group-hover:bg-signal" />
                </div>
                <h3 className="text-xl font-medium text-fg">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
