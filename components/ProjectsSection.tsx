"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Sparkles, Smartphone, Globe, Server, Container } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Swifty Companion",
      category: "Mobile Application",
      icon: <Smartphone className="w-5 h-5 text-emerald-400" />,
      description:
        "Mobile companion app for the 42 Network ecosystem. Integrates 42 OAuth 2.0 API to search peers across global campuses, featuring real-time profile analytics, cursus progression levels, skill metrics, project marks, evaluation points, and cluster locations.",
      tech: ["React Native", "Expo", "42 API (OAuth 2.0)", "TypeScript", "Xcode", "Mobile UI"],
      status: "Completed",
      year: "2025",
      link: "https://github.com/ahmedghounami/swifty-companion",
      caseStudy: "https://github.com/ahmedghounami/swifty-companion#readme",
      image: "/swifty-companion.jpg",
      featured: true,
    },
    {
      title: "ft_transcendence",
      category: "Full-Stack Web & Multiplayer",
      icon: <Globe className="w-5 h-5 text-white" />,
      description:
        "Full-stack real-time multiplayer web gaming platform. Features live matchmaking, interactive Pong game engine, WebSockets chat rooms, OAuth2 authentication, two-factor auth (2FA), and relational database management.",
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
      icon: <Server className="w-5 h-5 text-zinc-300" />,
      description:
        "High-performance, non-blocking HTTP/1.1 web server engineered completely from scratch in C++98. Implements socket multiplexing (epoll/kqueue), request/response routing, CGI execution, chunked transfers, and custom Nginx-style config parsing.",
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
      icon: <Container className="w-5 h-5 text-cyan-400" />,
      description:
        "Production-grade containerized infrastructure orchestrating independent Docker microservices. Configures Nginx with TLSv1.3, WordPress-FPM, MariaDB database with persistent volumes, and dedicated isolated Docker networks on Alpine Linux.",
      tech: ["Docker", "DevOps", "Nginx TLS", "MariaDB", "Linux System Administration"],
      status: "Completed",
      year: "2024",
      link: "https://github.com/ahmedghounami/42-inception",
      caseStudy: "https://github.com/ahmedghounami/42-inception#readme",
      image: "https://www.appsdeveloperblog.com/wp-content/uploads/2023/05/docker-tutorial-for-beginners.gif",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
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
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Engineering Projects
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            A curated selection of mobile applications, full-stack web platforms, and low-level systems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group flex flex-col rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-white/25 backdrop-blur-2xl transition-all duration-300 overflow-hidden shadow-xl shadow-black/50"
            >
              {/* Image Preview Banner */}
              <div className="relative h-56 w-full overflow-hidden bg-zinc-900 border-b border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
                  unoptimized={project.image.startsWith("http")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-black/70 border border-white/15 backdrop-blur-md text-xs font-semibold text-white">
                    {project.icon}
                    <span>{project.category}</span>
                  </div>

                  <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 backdrop-blur-md text-[11px] font-mono font-medium text-zinc-300">
                    {project.year}
                  </span>
                </div>

                {/* Status indicator */}
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-medium text-zinc-300 drop-shadow-md">{project.status}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-zinc-100 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-4">
                    {project.description}
                  </p>
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
        </div>
      </div>
    </section>
  )
}
