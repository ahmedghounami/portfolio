"use client"

import { motion } from "framer-motion"
import { Code2, Server, Smartphone, Cpu, CheckCircle2 } from "lucide-react"

export default function AboutSection() {
  const pillars = [
    {
      icon: <Code2 className="w-6 h-6 text-zinc-200" />,
      title: "Frontend Engineering",
      description:
        "Building responsive, high-speed, and accessible interfaces using Next.js, React, TypeScript, Tailwind CSS, and fluid motion design.",
    },
    {
      icon: <Server className="w-6 h-6 text-zinc-200" />,
      title: "Backend & Automation",
      description:
        "Architecting resilient RESTful APIs and microservices with NestJS, Node.js, Fastify, Supabase, SQLite, and n8n automated workflows.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-zinc-200" />,
      title: "Mobile & Systems",
      description:
        "Crafting cross-platform mobile apps with React Native / Expo, Xcode, and low-level performant UNIX systems software in C and C++98.",
    },
  ]

  const highlights = [
    "Intensive peer-to-peer software engineering at 1337 (42 Network)",
    "Hands-on production internships building scalable web platforms",
    "Deep foundation in algorithms, memory management & system internals",
    "Clean code advocate focusing on maintainability, performance & UX",
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-medium text-zinc-400 mb-3">
            <Cpu className="w-3.5 h-3.5 text-zinc-300" />
            <span>BACKGROUND & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Engineering with{" "}
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Precision & Purpose
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Bridging low-level systems discipline with modern high-level web, mobile craftsmanship, and Web3 fundamentals.
          </p>
        </motion.div>

        {/* Story & Highlights */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Story Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 rounded-3xl bg-zinc-950/70 border border-white/10 backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-4">The 1337 / 42 Foundation</h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
                My software journey took root at <strong className="text-white">1337 Coding School</strong> (part of the global 42 Network). Without traditional teachers or lectures, I mastered problem-solving through intense peer-to-peer collaboration, code reviews, and project-driven learning.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                From writing our own HTTP web server from scratch in C++ to building full-stack web platforms, NestJS backends, and mobile companion apps with React Native & Expo, I cultivate an obsession for clean architecture, edge-case resilience, and slick user interfaces.
              </p>
            </div>

            {/* Checkmark list */}
            <div className="space-y-2.5 pt-4 border-t border-white/10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {[
              { num: "3+", label: "Years Coding Experience", sub: "Deep technical rigor" },
              { num: "1337", label: "42 Network Pedigree", sub: "Strict peer-evaluation" },
              { num: "100%", label: "Curiosity & Drive", sub: "Continuous learner" },
              { num: "Full", label: "Stack Mastery", sub: "Frontend to Kernel" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-zinc-950/70 border border-white/10 backdrop-blur-xl flex flex-col justify-center hover:border-white/20 transition-colors group"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 tracking-tight group-hover:scale-105 transition-transform origin-left">
                  {stat.num}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-zinc-200 mb-1">{stat.label}</div>
                <div className="text-[11px] text-zinc-500">{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pillars Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl bg-zinc-950/60 border border-white/10 hover:border-white/25 backdrop-blur-xl transition-all duration-300 group shadow-lg shadow-black/40"
            >
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-5 group-hover:border-white/30 group-hover:bg-zinc-800 transition-colors">
                {pillar.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-zinc-100 transition-colors">
                {pillar.title}
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
