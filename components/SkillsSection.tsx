"use client"

import { motion } from "framer-motion"
import {
  Code,
  Server,
  Database,
  Smartphone,
  Layers,
  Zap,
  GitBranch,
  Terminal,
  Globe,
  Cpu,
  Figma,
  Cloud,
  Wrench,
  Sparkles,
  Link2,
  Shield,
  Radio,
  FileCode,
  Workflow,
  RefreshCw,
} from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "PROGRAMMING & LANGUAGES",
      skills: [
        { name: "C", icon: <Cpu className="w-4 h-4" /> },
        { name: "C++", icon: <Cpu className="w-4 h-4" /> },
        { name: "Python", icon: <FileCode className="w-4 h-4" /> },
        { name: "TypeScript", icon: <Code className="w-4 h-4" /> },
        { name: "JavaScript (ES6+)", icon: <Code className="w-4 h-4" /> },
        { name: "HTML5", icon: <Code className="w-4 h-4" /> },
        { name: "CSS3", icon: <Layers className="w-4 h-4" /> },
        { name: "Tailwind CSS", icon: <Layers className="w-4 h-4" /> },
      ],
    },
    {
      title: "FRAMEWORKS & TECHNOLOGIES",
      skills: [
        { name: "Next.js (App Router)", icon: <Globe className="w-4 h-4" /> },
        { name: "ReactJS", icon: <Code className="w-4 h-4" /> },
        { name: "NestJS", icon: <Server className="w-4 h-4" /> },
        { name: "Node.js", icon: <Server className="w-4 h-4" /> },
        { name: "Fastify", icon: <Server className="w-4 h-4" /> },
        { name: "Express.js", icon: <Wrench className="w-4 h-4" /> },
        { name: "FastAPI", icon: <Zap className="w-4 h-4" /> },
        { name: "React Native", icon: <Smartphone className="w-4 h-4" /> },
        { name: "WebSockets", icon: <Radio className="w-4 h-4" /> },
        { name: "REST APIs", icon: <Cloud className="w-4 h-4" /> },
        { name: "OAuth 2.0", icon: <Shield className="w-4 h-4" /> },
      ],
    },
    {
      title: "DATABASES & CLOUD STORAGE",
      skills: [
        { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
        { name: "Supabase", icon: <Database className="w-4 h-4" /> },
        { name: "MongoDB", icon: <Database className="w-4 h-4" /> },
        { name: "SQLite", icon: <Database className="w-4 h-4" /> },
        { name: "MySQL", icon: <Database className="w-4 h-4" /> },
      ],
    },
    {
      title: "DEVELOPER TOOLS & AUTOMATION",
      skills: [
        { name: "Docker", icon: <Globe className="w-4 h-4" /> },
        { name: "n8n Automation", icon: <Workflow className="w-4 h-4" /> },
        { name: "Git & GitHub", icon: <GitBranch className="w-4 h-4" /> },
        { name: "Postman", icon: <Cloud className="w-4 h-4" /> },
        { name: "Expo", icon: <Smartphone className="w-4 h-4" /> },
        { name: "Xcode", icon: <Wrench className="w-4 h-4" /> },
        { name: "Linux / POSIX", icon: <Terminal className="w-4 h-4" /> },
        { name: "Figma", icon: <Figma className="w-4 h-4" /> },
      ],
    },
    {
      title: "SPECIALIZATIONS & METHODOLOGY",
      skills: [
        { name: "Automation & Workflows", icon: <Zap className="w-4 h-4" /> },
        { name: "Blockchain & Web3 Basics", icon: <Link2 className="w-4 h-4" /> },
        { name: "Adaptability to Change", icon: <RefreshCw className="w-4 h-4" /> },
        { name: "Peer-to-Peer Code Review", icon: <Sparkles className="w-4 h-4" /> },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
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
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Tech Stack &{" "}
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Comprehensive skill set spanning programming languages, backend frameworks, mobile tools, databases, and DevOps automation.
          </p>
        </motion.div>

        {/* Skills Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 sm:p-10 rounded-3xl bg-zinc-950/80 border border-white/10 backdrop-blur-2xl shadow-2xl space-y-8"
        >
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-3.5">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-zinc-400 uppercase">
                  {category.title}
                </span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/70 border border-white/10 hover:border-white/25 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all cursor-default text-xs sm:text-sm font-medium shadow-sm group"
                  >
                    <span className="text-zinc-400 group-hover:text-white transition-colors">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
