"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ExternalLink,
  Github,
  Sparkles,
  Smartphone,
  Globe,
  Server,
  Container,
  Gamepad2,
  Film,
  Layers,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type ProjectCategory = "All" | "Full-Stack" | "Real-Time & Media" | "Systems & DevOps" | "Mobile"

interface ProjectItem {
  title: string
  category: string
  categoryFilter: ProjectCategory
  icon: React.ReactNode
  description: string
  highlights?: string[]
  tech: string[]
  status: string
  year: string
  link: string
  caseStudy?: string
  image: string
  featured: boolean
}

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategory>("All")

  const categories: ProjectCategory[] = [
    "All",
    "Full-Stack",
    "Real-Time & Media",
    "Systems & DevOps",
    "Mobile",
  ]

  const projects: ProjectItem[] = [
    {
      title: "Red Tetris",
      category: "Real-Time Multiplayer Game",
      categoryFilter: "Real-Time & Media",
      icon: <Gamepad2 className="w-5 h-5 text-rose-400" />,
      description:
        "Full-stack networked multiplayer online Tetris battle arena. Implements real-time asynchronous WebSockets communication via Socket.io, live opponent board spectrum streaming, deterministic physics, penalty lines propagation, and full Jest unit test coverage.",
      highlights: [
        "Multiplayer battle royale & live spectrum views",
        "Deterministic piece generation & penalty logic",
        "Redux Toolkit state synchronization",
      ],
      tech: ["React", "Redux Toolkit", "Node.js", "Socket.io", "TypeScript", "Jest"],
      status: "Completed",
      year: "2026",
      link: "https://github.com/ahmedghounami/red-tetris",
      caseStudy: "https://github.com/ahmedghounami/red-tetris#readme",
      image: "/red-tetris.jpg",
      featured: true,
    },
    {
      title: "Hypertube",
      category: "BitTorrent Video Streaming Platform",
      categoryFilter: "Real-Time & Media",
      icon: <Film className="w-5 h-5 text-cyan-400" />,
      description:
        "High-performance BitTorrent-powered video streaming web platform ('Netflix over Torrents'). Features on-the-fly video transcoding via FFmpeg, chunked media streaming directly from peer swarms, dual OAuth 2.0 (42 & Google), and multilingual subtitles extraction.",
      highlights: [
        "Instant on-demand BitTorrent piece streaming",
        "Real-time FFmpeg transcoding pipeline",
        "Automated subtitles & movie metadata APIs",
      ],
      tech: ["React", "Node.js", "BitTorrent", "FFmpeg", "PostgreSQL", "Docker", "OAuth 2.0"],
      status: "Completed",
      year: "2026",
      link: "https://github.com/mme-sbahi/HyperTube",
      caseStudy: "https://github.com/mme-sbahi/HyperTube#readme",
      image: "/hypertube.jpg",
      featured: true,
    },
    {
      title: "Swifty Companion",
      category: "Mobile Application",
      categoryFilter: "Mobile",
      icon: <Smartphone className="w-5 h-5 text-emerald-400" />,
      description:
        "Mobile companion app for the 42 Network ecosystem. Integrates 42 OAuth 2.0 API to search peers across global campuses, featuring real-time profile analytics, cursus progression levels, skill metrics, project marks, evaluation points, and cluster locations.",
      highlights: [
        "OAuth 2.0 42 API authentication & token refresh",
        "Interactive radar charts for skill distributions",
        "Live campus cluster seat locator map",
      ],
      tech: ["React Native", "Expo", "42 API (OAuth 2.0)", "TypeScript", "Xcode", "Mobile UI"],
      status: "Completed",
      year: "2026",
      link: "https://github.com/ahmedghounami/swifty-companion",
      caseStudy: "https://github.com/ahmedghounami/swifty-companion#readme",
      image: "/swifty-companion.jpg",
      featured: true,
    },
    {
      title: "ft_transcendence",
      category: "Full-Stack Web & Multiplayer",
      categoryFilter: "Full-Stack",
      icon: <Globe className="w-5 h-5 text-white" />,
      description:
        "Full-stack real-time multiplayer web gaming platform. Features live matchmaking, interactive Pong game engine, WebSockets chat rooms, OAuth2 authentication, two-factor auth (2FA), and relational database management.",
      highlights: [
        "Live tournament bracket matchmaking",
        "Real-time chat channels with direct messaging & block lists",
        "2FA Two-Factor security with TOTP",
      ],
      tech: ["Next.js", "Fastify", "SQLite3", "Tailwind CSS", "WebSockets"],
      status: "Completed",
      year: "2025",
      link: "https://github.com/ahmedghounami/trans",
      caseStudy: "https://github.com/ahmedghounami/trans#readme",
      image: "/trans.png",
      featured: true,
    },
    {
      title: "WebServ",
      category: "Systems & Network Programming",
      categoryFilter: "Systems & DevOps",
      icon: <Server className="w-5 h-5 text-zinc-300" />,
      description:
        "High-performance, non-blocking HTTP/1.1 web server engineered completely from scratch in C++98. Implements socket multiplexing (epoll/kqueue), request/response routing, CGI execution, chunked transfers, and custom Nginx-style config parsing.",
      highlights: [
        "Zero-leak non-blocking socket I/O multiplexing",
        "RFC 2616 compliant HTTP/1.1 pipeline",
        "Full CGI script execution environment",
      ],
      tech: ["C++98", "HTTP/1.1", "Socket I/O", "epoll / kqueue", "POSIX"],
      status: "Completed",
      year: "2025",
      link: "https://github.com/ahmedghounami/httpserver",
      caseStudy: "https://github.com/ahmedghounami/httpserver#readme",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*age3Dgxl8sz6LZgDIwOSNQ.png",
      featured: false,
    },
    {
      title: "Inception",
      category: "DevOps & Infrastructure",
      categoryFilter: "Systems & DevOps",
      icon: <Container className="w-5 h-5 text-cyan-400" />,
      description:
        "Production-grade containerized infrastructure orchestrating independent Docker microservices. Configures Nginx with TLSv1.3, WordPress-FPM, MariaDB database with persistent volumes, and dedicated isolated Docker networks on Alpine Linux.",
      highlights: [
        "Multi-container Docker Compose architecture",
        "TLSv1.3 cryptographic security certificates",
        "Isolated virtual networking & volume persistence",
      ],
      tech: ["Docker", "DevOps", "Nginx TLS", "MariaDB", "Linux System Administration"],
      status: "Completed",
      year: "2024",
      link: "https://github.com/ahmedghounami/42-inception",
      caseStudy: "https://github.com/ahmedghounami/42-inception#readme",
      image: "https://www.appsdeveloperblog.com/wp-content/uploads/2023/05/docker-tutorial-for-beginners.gif",
      featured: false,
    },
  ]

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.categoryFilter === selectedFilter)

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-medium text-zinc-400 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Engineering Projects
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            A comprehensive portfolio of real-time multiplayer applications, streaming engines, low-level UNIX systems, and mobile ecosystems.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map((cat) => {
            const isActive = selectedFilter === cat
            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectFilter"
                    className="absolute inset-0 rounded-xl bg-zinc-800 border border-white/20 shadow-lg shadow-black/50"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            )
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-white/25 backdrop-blur-2xl transition-all duration-300 overflow-hidden shadow-xl shadow-black/50"
              >
                {/* Image Preview Banner */}
                <div className="relative h-60 w-full overflow-hidden bg-zinc-900 border-b border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-75 group-hover:opacity-95"
                    unoptimized={project.image.startsWith("http")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/75 border border-white/15 backdrop-blur-md text-xs font-semibold text-white shadow-md">
                      {project.icon}
                      <span>{project.category}</span>
                    </div>

                    <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 backdrop-blur-md text-[11px] font-mono font-medium text-zinc-300">
                      {project.year}
                    </span>
                  </div>

                  {/* Status indicator */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-medium text-zinc-300 drop-shadow-md">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-zinc-100 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Architectural Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mb-5 p-3 rounded-2xl bg-zinc-900/50 border border-white/5 space-y-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold block">
                          Key Highlights
                        </span>
                        {project.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                            <span className="line-clamp-1">{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Tech stack pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-white/10 text-[11px] font-medium text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links & CTA */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-colors shadow-sm"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                        <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                      </Link>

                      {project.caseStudy && (
                        <Link
                          href={project.caseStudy}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 text-xs font-medium transition-colors"
                        >
                          <span>README</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

