"use client"

import { motion } from "framer-motion"
import { Code, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export default function ProjectsSection() {
    const projects = [
        {
            title: "AIVITA",
            description:
                "powered fitness and nutrition web app that generates personalized daily workout and meal plans based on user goals.",
            tech: ["Next.js", "TypeScript", "Fastify", "SQLite"],
            status: "In Development",
            year: "2025",
            link: "https://github.com/ahmedghounami/aivita",
            caseStudy: "https://github.com/ahmedghounami/aivita#readme",
            image: "/aivita.png",
        },
        {
            title: "ft_transcendence",
            description:
                "Full-stack web application with modern architecture, handling frontend, backend, and database management.",
            tech: ["Next.js", "Fastify", "SQLite3", "Tailwind CSS"],
            status: "In Development",
            year: "2025",
            link: "https://github.com/ahmedghounami/trans",
            caseStudy: "https://github.com/ahmedghounami/trans#readme",
            image: "/trans.png",

        },
        {
            title: "WebServ",
            description: "HTTP server implementation from scratch in C++98. Advanced systems programming project.",
            tech: ["C++98", "HTTP Protocol", "Systems Programming"],
            status: "Completed",
            year: "2025",
            link: "https://github.com/ahmedghounami/httpserver",
            image: "https://miro.medium.com/v2/resize:fit:1200/1*age3Dgxl8sz6LZgDIwOSNQ.png",
        },
        {
            title: "Inception",
            description: "Containerization infrastructure setup using Docker for scalable application deployment.",
            tech: ["Docker", "DevOps", "Infrastructure"],
            status: "Completed",
            year: "2024",
            link: "https://github.com/ahmedghounami/42-inception",
            image: "https://www.appsdeveloperblog.com/wp-content/uploads/2023/05/docker-tutorial-for-beginners.gif",
        },
    ]

    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group"
                            >
                                <Card className="bg-black/70 border-blue-500/20 backdrop-blur-xl h-full hover:border-blue-400/40 transition-all duration-300 overflow-hidden">
                                    <div className="relative">
                                        {/* Template image background */}
                                        <div className="absolute inset-0 z-0">
                                            <Image
                                                src={project.image}
                                                alt="Project background"
                                                className="w-full h-full object-cover opacity-30"
                                                width={1200}
                                                height={630}
                                            />
                                            {/* Dark overlay for text contrast - lighter to show background */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-blue-900/30" />
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/35 transition-colors" />
                                        </div>
                                        <CardHeader className="relative z-10">
                                            <div className="flex justify-between items-start mb-4">
                                                <motion.div
                                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                                    transition={{ duration: 0.6 }}
                                                    className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg"
                                                >
                                                    <Code className="w-6 h-6 text-white" />
                                                </motion.div>
                                                <div className="text-right">
                                                    <Badge variant="secondary" className="bg-blue-500/30 text-blue-300 border-blue-400/40 backdrop-blur-sm">
                                                        {project.year}
                                                    </Badge>
                                                    <p className="text-sm text-gray-300 mt-1 font-medium">{project.status}</p>
                                                </div>
                                            </div>
                                            <CardTitle className="text-white text-xl font-bold group-hover:text-blue-400 transition-colors drop-shadow-lg">
                                                {project.title}
                                            </CardTitle>
                                            <CardDescription className="text-gray-200 font-medium drop-shadow-md leading-relaxed">
                                                {project.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="relative z-10">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tech.map((tech) => (
                                                    <Badge
                                                        key={tech}
                                                        variant="outline"
                                                        className="border-blue-400/40 bg-blue-500/10 text-blue-300 hover:bg-blue-400/20 transition-colors backdrop-blur-sm font-medium"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <div className="flex flex-wrap items-center gap-4">
                                                <motion.div
                                                    whileHover={{ x: 5 }}
                                                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                                                >
                                                    <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm flex font-semibold">
                                                        View Project <ExternalLink className="w-4 h-4 ml-2" />
                                                    </Link>
                                                </motion.div>
                                                {project.caseStudy ? (
                                                    <Link
                                                        href={project.caseStudy}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-sm font-semibold text-blue-200 border border-blue-400/40 rounded-md px-3 py-1.5 hover:bg-blue-500/15 hover:text-white transition-colors"
                                                    >
                                                        Case Study
                                                    </Link>
                                                ) : null}
                                            </div>
                                        </CardContent>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
