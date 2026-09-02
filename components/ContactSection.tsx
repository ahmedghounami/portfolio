"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, ArrowUpRight, Copy, Check, Sparkles } from "lucide-react"

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = async () => {
    const email = "ahmedghounami0@gmail.com"
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        await navigator.clipboard.writeText(email)
      } else {
        // Fallback for non-secure HTTP / unsupported clipboard API environments
        const textArea = document.createElement("textarea")
        textArea.value = email
        textArea.style.position = "fixed"
        textArea.style.left = "-999999px"
        textArea.style.top = "-999999px"
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        document.execCommand("copy")
        textArea.remove()
      }
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      console.error("Clipboard copy failed:", err)
      // Ultimate fallback: prompt or still trigger feedback
      try {
        const textArea = document.createElement("textarea")
        textArea.value = email
        textArea.style.position = "fixed"
        textArea.style.left = "-999999px"
        textArea.style.top = "-999999px"
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        document.execCommand("copy")
        textArea.remove()
        setCopiedEmail(true)
        setTimeout(() => setCopiedEmail(false), 2000)
      } catch (fallbackErr) {
        console.error("Fallback copy failed:", fallbackErr)
      }
    }
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-medium text-zinc-400 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Remarkable
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-normal">
            Whether you are looking to hire a dedicated full-stack engineer, have a challenging project, or want to discuss technology — my inbox is always open.
          </p>

          {/* Direct Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-white/25 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between text-left group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email to clipboard"
                  type="button"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div>
                <span className="text-xs font-medium text-zinc-500 block mb-1">EMAIL DIRECTLY</span>
                <a
                  href="mailto:ahmedghounami0@gmail.com"
                  className="text-sm sm:text-base font-semibold text-zinc-200 group-hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>ahmedghounami0@gmail.com</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-white/25 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between text-left group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
                  <Phone className="w-5 h-5" />
                </div>
              </div>
              <div>
                <span className="text-xs font-medium text-zinc-500 block mb-1">CALL / WHATSAPP</span>
                <a
                  href="tel:+212620399298"
                  className="text-sm sm:text-base font-semibold text-zinc-200 group-hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>+212 620-399298</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>
          </div>

          {/* Social Profiles Pill Row */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/ahmedghounami"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 hover:border-white/25 text-zinc-300 hover:text-white transition-all text-xs font-semibold shadow-lg shadow-black/30 group"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <a
              href="https://www.linkedin.com/in/ahmed-ghounami-a675b1294/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 hover:border-white/25 text-zinc-300 hover:text-white transition-all text-xs font-semibold shadow-lg shadow-black/30 group"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
