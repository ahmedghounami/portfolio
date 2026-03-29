"use client"

import { motion } from "framer-motion"
import { Code, Server, Database, Globe, Smartphone, Wrench, GitBranch, Terminal, Cloud, Figma, Cpu, Layers, Zap, BookOpen } from "lucide-react"

export default function SkillsSection() {
    // Categorized skills
    const skillCategories = [
        {
            title: "FRONTEND",
            skills: [
                { name: "React.js", icon: <Code className="w-5 h-5" /> },
                { name: "Next.js", icon: <Code className="w-5 h-5" /> },
                { name: "TypeScript", icon: <Code className="w-5 h-5" /> },
                { name: "JavaScript", icon: <Code className="w-5 h-5" /> },
                { name: "Tailwind CSS", icon: <Layers className="w-5 h-5" /> },
                { name: "Framer Motion", icon: <Zap className="w-5 h-5" /> },
                { name: "React Native", icon: <Smartphone className="w-5 h-5" /> },
                { name: "HTML5", icon: <Code className="w-5 h-5" /> },
                { name: "CSS3", icon: <Layers className="w-5 h-5" /> },
            ]
        },
        {
            title: "BACKEND",
            skills: [
                { name: "Node.js", icon: <Server className="w-5 h-5" /> },
                { name: "Express.js", icon: <Wrench className="w-5 h-5" /> },
                { name: "Fastify", icon: <Server className="w-5 h-5" /> },
                { name: "REST APIs", icon: <Cloud className="w-5 h-5" /> },
            ]
        },
        {
            title: "DATABASES",
            skills: [
                { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
                { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> },
                { name: "MySQL", icon: <Database className="w-5 h-5" /> },
                { name: "SQLite", icon: <Database className="w-5 h-5" /> },
                { name: "Supabase", icon: <Database className="w-5 h-5" /> },
            ]
        },
        {
            title: "DEVOPS & TOOLS",
            skills: [
                { name: "Docker", icon: <Globe className="w-5 h-5" /> },
                { name: "Nginx", icon: <Server className="w-5 h-5" /> },
                { name: "n8n Automation", icon: <Zap className="w-5 h-5" /> },
                { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
                { name: "GitHub", icon: <Globe className="w-5 h-5" /> },
                { name: "Linux", icon: <Terminal className="w-5 h-5" /> },
                { name: "VS Code", icon: <BookOpen className="w-5 h-5" /> },
                { name: "Postman", icon: <Cloud className="w-5 h-5" /> },
                { name: "Figma", icon: <Figma className="w-5 h-5" /> },
            ]
        },
        {
            title: "PROGRAMMING LANGUAGES",
            skills: [
                { name: "C", icon: <Cpu className="w-5 h-5" /> },
                { name: "C++", icon: <Cpu className="w-5 h-5" /> },
                { name: "C++98", icon: <Cpu className="w-5 h-5" /> },
            ]
        },
    ];

    return (
        <section id="skills" className="py-16 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-8">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-4"
                    >
                        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            Technologies & Stack
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base"
                    >
                        Senior-level frontend focus with product-minded UI/UX, backed by modern backend and automation tooling.
                    </motion.p>
                </div>

                {/* Skills Grid - Wrapped in Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-black/60 via-black/50 to-blue-950/20 border border-blue-500/20 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl hover:border-blue-400/30 transition-all duration-300"
                >
                    <div className="space-y-6">
                        {skillCategories.map((category) => (
                            <div
                                key={category.title}
                                style={{ contentVisibility: "auto", containIntrinsicSize: "1px 220px" }}
                                className="space-y-3"
                            >
                                {/* Category Title - Centered */}
                                <h3 className="text-base font-bold text-blue-200/90 tracking-[0.18em] text-center">
                                    {category.title}
                                </h3>

                                {/* Skills Row - Centered (simple appearance, small hover only) */}
                                <div className="flex flex-wrap gap-2.5 justify-center">
                                    {category.skills.map((skill) => (
                                        <div key={skill.name} className="group">
                                            <div className="flex items-center gap-2.5 px-4 py-2 bg-black/45 border border-blue-500/20 rounded-lg hover:border-blue-300/50 hover:bg-blue-950/30 transition-colors duration-200 cursor-pointer">
                                                <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-200">
                                                    {skill.icon}
                                                </div>
                                                <span className="text-white text-sm font-medium group-hover:text-blue-100 transition-colors duration-200">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
