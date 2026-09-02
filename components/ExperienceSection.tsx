"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, ExternalLink, Calendar, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "TALIO",
      role: "Full-Stack & Automation Engineer Intern",
      period: "2025 • 4 months internship",
      description:
        "Engineered full-stack features with Next.js, Node.js, and Supabase. Automated mission-critical business workflows via n8n integrations, accelerating data pipelines and improving UX performance across production modules.",
      skills: ["Next.js", "Node.js", "Supabase", "n8n Automation", "Full-Stack"],
      type: "Internship",
      link: "https://www.taliotalent.com/",
      image: "/talio - logo.png",
      icon: <Briefcase className="w-4 h-4 text-white" />,
    },
    {
      title: "a2xcorp",
      role: "Software Engineering Intern",
      period: "2025 • 2 months internship",
      description:
        "Contributed to building full-stack web applications, collaborated with agile cross-functional engineering teams, created RESTful endpoints, and optimized client-side state management.",
      skills: ["React", "Next.js", "Node.js", "Express", "Database Architecture"],
      type: "Internship",
      link: "https://a2xcorp.com/",
      image: "https://framerusercontent.com/images/TuWoMYgA6buWx4FUpZiwrPMlp0.jpg",
      icon: <Briefcase className="w-4 h-4 text-white" />,
    },
    {
      title: "1337 Coding School (42 Network)",
      role: "Software Engineering & Computer Science",
      period: "2023 - Present",
      description:
        "Intensive project-based curriculum without teachers or lectures. Mastered systems programming (C/C++), algorithms, UNIX architecture, socket network programming, and full-stack software development with continuous peer code reviews.",
      skills: ["C", "C++", "Algorithms", "POSIX Systems", "Computer Graphics", "Networking"],
      type: "Education",
      link: "https://1337.ma/",
      image: "https://www.1337.ma/static/3433ada5f4fbe2109e24c53c88499773/25252/cluster.jpg",
      icon: <GraduationCap className="w-4 h-4 text-white" />,
    },
    {
      title: "Udemy Certified Specializations",
      role: "Modern Full-Stack Web Development",
      period: "2024 - 2025",
      description:
        "Comprehensive deep dives into scalable web technologies, covering React, modern Node.js, NoSQL databases, OAuth authentication workflows, and frontend state management.",
      skills: ["React", "Node.js", "MongoDB", "API Design", "Authentication"],
      type: "Certification",
      link: "https://www.udemy.com/",
      image: "/udemy.png",
      icon: <GraduationCap className="w-4 h-4 text-white" />,
    },
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-medium text-zinc-400 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            <span>CAREER & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Education &{" "}
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            My professional journey across software engineering internships and 1337 School.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central glowing line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  } gap-8 pl-10 md:pl-0`}
                >
                  {/* Glowing Timeline Center Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-7 h-7 rounded-full bg-zinc-950 border-2 border-white/40 flex items-center justify-center shadow-lg shadow-black z-10">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </div>

                  {/* Card Container */}
                  <div className="w-full md:w-[calc(50%-2rem)]">
                    <div className="group p-6 sm:p-7 rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-white/25 backdrop-blur-2xl transition-all duration-300 shadow-xl shadow-black/40">
                      {/* Top Row: Type & Date */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 border border-white/10 text-[11px] font-medium text-zinc-300">
                          {exp.icon}
                          <span>{exp.type}</span>
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-zinc-400 font-mono">
                          <Calendar className="w-3 h-3 text-zinc-500" />
                          <span>{exp.period}</span>
                        </span>
                      </div>

                      {/* Title & Role */}
                      <h3 className="text-xl font-bold text-white group-hover:text-zinc-100 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-zinc-300 mb-3">{exp.role}</p>

                      {/* Description */}
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5">{exp.description}</p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded-md bg-zinc-900/80 border border-white/5 text-[11px] text-zinc-300 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* External Link */}
                      <Link
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors group/link"
                      >
                        <span>Visit Organization</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
