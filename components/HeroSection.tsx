"use client"

import { motion } from "framer-motion"
import { ArrowRight, FileText, Sparkles, Github, Linkedin, Mail, Terminal } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-28 pb-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left / Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Status & Role Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 backdrop-blur-md mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-medium text-zinc-300">Available for innovative roles & contracts</span>
              <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.08]"
            >
              Architecting{" "}
              <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                Exceptional
              </span>
              <br />
              <span className="text-zinc-400 font-normal">Digital Experiences.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-zinc-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Hi, I&apos;m <span className="text-white font-medium">Ahmed Ghounami</span>. Full-Stack & Systems Software
              Engineer trained at <span className="text-zinc-200 font-medium">1337 (42 Network)</span>. I engineer
              high-performance web apps, mobile systems, scalable backend architectures, and explore Web3 innovations.
            </motion.p>

            {/* Tech Chips */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8"
            >
              {[
                { label: "Next.js & React", dot: "bg-white" },
                { label: "NestJS & Node.js", dot: "bg-emerald-400" },
                { label: "React Native & Expo", dot: "bg-cyan-400" },
                { label: "Blockchain & Web3", dot: "bg-purple-400" },
                { label: "C / C++ Systems", dot: "bg-blue-400" },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900/60 border border-white/5 text-xs text-zinc-300 backdrop-blur-sm"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${chip.dot}`} />
                  <span>{chip.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-all shadow-xl shadow-white/5 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-sm border border-white/10 hover:border-white/20 transition-all backdrop-blur-md"
              >
                <FileText className="w-4 h-4 text-zinc-400" />
                <span>Download CV</span>
              </a>

              {/* Quick Social Buttons */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0">
                <a
                  href="https://github.com/ahmedghounami"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 hover:border-white/25 text-zinc-400 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmed-ghounami-a675b1294/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 hover:border-white/25 text-zinc-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:ahmedghounami0@gmail.com"
                  aria-label="Email Ahmed"
                  className="p-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 hover:border-white/25 text-zinc-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right / Luxury Avatar Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Subtle ambient halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-700/30 via-white/10 to-zinc-800/30 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />

              {/* Outer decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3.5 rounded-full border border-dashed border-white/10"
              />

              {/* Main Avatar Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-2 bg-gradient-to-b from-zinc-800/80 via-zinc-900/90 to-black border border-white/15 shadow-2xl shadow-black">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img
                    src="https://cdn.intra.42.fr/users/7ec5d8829b0f0d9e26713b331df85178/aghounam.JPG"
                    alt="Ahmed Ghounami"
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating 1337 Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-2 -left-2 sm:-left-4 px-3.5 py-1.5 rounded-xl bg-zinc-950/90 border border-white/15 backdrop-blur-xl shadow-xl flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-white" />
                <span className="text-xs font-mono font-semibold text-white tracking-wider">1337 / 42 NETWORK</span>
              </motion.div>

              {/* Floating Full-Stack badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -top-2 -right-2 sm:-right-4 px-3 py-1.5 rounded-xl bg-zinc-950/90 border border-white/15 backdrop-blur-xl shadow-xl flex items-center gap-2"
              >
                <Terminal className="w-3.5 h-3.5 text-zinc-300" />
                <span className="text-xs font-semibold text-zinc-200">Software Engineer</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
