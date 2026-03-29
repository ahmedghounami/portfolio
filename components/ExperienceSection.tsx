"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export default function ExperienceSection() {
    const experiences: {
        title: string
        period: string
        description: string
        skills: string[]
        type: string
        link: string
        image?: string
    }[] = [
        {
            title: "1337 School",
            period: "2023 - Present",
            description:
                "Intensive peer-to-peer learning program focused on software development, algorithms, and full-stack web development.",
            skills: ["C/C++", "Web Development", "Algorithms", "Systems Programming", "Git"],
            type: "Education",
            link: "https://1337.ma/",
            image: "https://www.1337.ma/static/3433ada5f4fbe2109e24c53c88499773/25252/cluster.jpg",
        },
        {
            title: "Udemy",
            period: "2024 - 2025",
            description: "Comprehensive web development course covering modern technologies and best practices.",
            skills: ["React", "Node.js", "MongoDB", "API Development", "Authentication"],
            type: "Course",
            link: "https://www.udemy.com/",
            image: "/udemy.png",
        },
        {
            title: "a2xcorp",
            period: "2025 • 2 months internship",
            description:
                "Contributing to the development of web applications, collaborating with cross-functional teams, and implementing new features.",
            skills: ["React", "Next.js", "Node.js", "Express", "Database Management"],
            type: "Internship",
            link: "https://a2xcorp.com/",
            image: "https://framerusercontent.com/images/TuWoMYgA6buWx4FUpZiwrPMlp0.jpg",
        },
        {
            title: "TALIO",
            period: "2025 - Present",
            description:
                "Building and scaling full-stack web features, integrating automation workflows, and shipping production-ready solutions with a strong focus on UX and performance.",
            skills: ["Next.js", "Node.js", "Supabase", "n8n Automation", "Full-Stack Web Development"],
            type: "Internship",
            link: "https://www.taliotalent.com/",
            image: "/talio - logo.png",
        },
    ]

    return (
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            Education & Experience
                        </span>
                    </h2>

                    <div className="max-w-4xl mx-auto relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-700 to-blue-900 rounded-full opacity-30" />

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`mb-8 relative ${index % 2 === 0 ? "pr-8 md:pr-16" : "pl-8 md:pl-16 md:ml-auto"} md:w-1/2`}
                            >
                                {/* Timeline dot */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                                    className="absolute top-8 w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full border-4 border-black shadow-lg"
                                    style={{
                                        [index % 2 === 0 ? "right" : "left"]: "-12px",
                                    }}
                                />

                                <Card className="bg-black/70 border-blue-500/20 backdrop-blur-xl text-left hover:border-blue-400/40 transition-all duration-300 overflow-hidden group shadow-lg hover:shadow-blue-900/50">
                                    <div className="relative">
                                        {/* Template image background */}
                                        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-950/40 via-black/30 to-blue-900/30">
                                            {exp.image ? (
                                                <Image
                                                    src={exp.image}
                                                    alt="Experience background"
                                                    className="w-full h-full object-cover opacity-30"
                                                    width={1200}
                                                    height={630}
                                                />
                                            ) : null}
                                            {/* Dark overlay for text contrast - lighter to show background */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-blue-900/30" />
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/35 transition-colors" />
                                        </div>
                                        <CardHeader className="relative z-10">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <CardTitle className="text-white text-xl font-bold group-hover:text-blue-400 transition-colors drop-shadow-lg">
                                                        {exp.title}
                                                    </CardTitle>
                                                    <p className="text-blue-300 font-semibold drop-shadow-md">{exp.period}</p>
                                                </div>
                                                <Badge
                                                    variant="outline"
                                                    className="border-blue-400/40 bg-blue-500/10 text-blue-300 backdrop-blur-sm font-medium"
                                                >
                                                    {exp.type}
                                                </Badge>
                                            </div>
                                            <CardDescription className="text-gray-200 font-medium drop-shadow-md leading-relaxed mt-4">
                                                {exp.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="relative z-10">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {exp.skills.map((skill) => (
                                                    <Badge
                                                        key={skill}
                                                        variant="secondary"
                                                        className="bg-blue-500/20 text-blue-300 border-blue-400/40 hover:bg-blue-400/20 transition-colors backdrop-blur-sm font-medium"
                                                    >
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                             <motion.div
                                                whileHover={{ x: 5 }}
                                                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                                            >
                                                <Link href={exp.link} target="_blank" rel="noopener noreferrer" className="text-sm flex font-semibold">
                                                    View Details
                                                    <ExternalLink className="w-4 h-4 ml-2" />
                                                </Link>
                                                
                                            </motion.div>
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
