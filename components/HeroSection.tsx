"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            <motion.div
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "linear",
                                }}
                                className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full blur-lg opacity-30"
                            />
                            <motion.div
                                animate={{
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-blue-400/50 shadow-2xl shadow-blue-500/20"
                            >
                                <img
                                    src="https://cdn.intra.42.fr/users/7ec5d8829b0f0d9e26713b331df85178/aghounam.JPG"
                                    alt="Ahmed Ghounami"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
                            </motion.div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full blur-sm opacity-60"
                            />
                            <motion.div
                                animate={{
                                    y: [0, 20, 0],
                                    rotate: [360, 180, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    delay: 1,
                                }}
                                className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full blur-sm opacity-60"
                            />
                        </div>
                    </motion.div>

                    {/* Hero Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-2 mb-4 justify-center lg:justify-start"
                        >
                            <Sparkles className="w-5 h-5 text-blue-400" />
                            <span className="text-blue-400 font-medium">Full-Stack Developer</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-5xl md:text-7xl font-bold mb-6"
                        >
                            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                                Building
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                                Digital Dreams
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl text-gray-300 mb-8 max-w-2xl"
                        >
                            I specialize in crafting complete web and mobile applications with elegant code. From responsive frontends to
                            powerful backends, I turn ideas into scalable digital solutions.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55 }}
                            className="mb-8"
                        >
                            <div className="inline-flex flex-wrap items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-950/20 px-3 py-2 backdrop-blur-sm">
                                <span className="text-xs md:text-sm text-blue-200 font-semibold">Current Focus:</span>
                                <span className="text-xs md:text-sm text-gray-200">Next.js at scale</span>
                                <span className="text-blue-400/60">•</span>
                                <span className="text-xs md:text-sm text-gray-200">UI/UX systems</span>
                                <span className="text-blue-400/60">•</span>
                                <span className="text-xs md:text-sm text-gray-200">n8n automation</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/25 group"
                            >
                                <a href="#projects" className="flex items-center gap-2">
                                    View My Work
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-blue-400/50 text-blue-400 hover:bg-blue-400/10 bg-transparent backdrop-blur-sm"
                            >
                                <a href="/cv.pdf" className="flex items-center gap-2">
                                    {/* <Download className="w-4 h-4" /> */}
                                    Download CV
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
