import { useState } from 'react'
import './App.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion' // Note: Fixed import from "motion/react" to "framer-motion"

function App() {
    return (
        <div className="min-h-screen bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-100">
            {/* Hero Section */}
            <header className="container mx-auto px-6 py-24 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Akanksha
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium mb-6">Software Developer & Designer</h2>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl text-slate-600 dark:text-slate-300">
                        I create meaningful digital experiences through clean code and thoughtful design.
                    </p>

                    <div className="flex space-x-4">
                        <motion.a
                            href="#contact"
                            className="px-6 py-3 bg-blue-600 text-black rounded-lg font-medium flex items-center "
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Let's Connect <FaArrowRight className="ml-2" />
                        </motion.a>
                    </div>
                </motion.div>
            </header>

            {/* About Section */}
            <section className="py-16 bg-white dark:bg-slate-800">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-8 inline-block border-b-4 border-blue-500 pb-2">About Me</h2>
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div>
                                <p className="text-lg mb-4 text-slate-600 dark:text-slate-300">
                                    I'm a passionate software developer with expertise in building modern web applications.
                                    With a strong foundation in both front-end and back-end technologies, I enjoy creating
                                    solutions that are both functional and beautiful.
                                </p>
                                <p className="text-lg text-slate-600 dark:text-slate-300">
                                    When I'm not coding, you can find me exploring new technologies, contributing to open-source
                                    projects, or enjoying outdoor activities.
                                </p>
                            </div>
                            <motion.div
                                className="bg-blue-50 dark:bg-slate-700 p-8 rounded-xl"
                                whileHover={{ scale: 1.02 }}
                            >
                                <h3 className="font-bold text-xl mb-4">Skills & Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Git', 'UI/UX Design'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-slate-600 rounded-full text-sm">
                      {skill}
                    </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-8 inline-block border-b-4 border-blue-500 pb-2">Featured Projects</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Project One",
                                    desc: "A full-stack web application built with React and Node.js",
                                    tech: ["React", "Node.js", "MongoDB"]
                                },
                                {
                                    title: "Project Two",
                                    desc: "Responsive e-commerce platform with secure payment integration",
                                    tech: ["React", "Express", "Stripe"]
                                }
                            ].map((project, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md"
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-300 mb-4">{project.desc}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map(tech => (
                                                <span key={tech} className="px-2 py-1 bg-blue-100 dark:bg-slate-700 rounded-full text-xs">
                          {tech}
                        </span>
                                            ))}
                                        </div>
                                        <a href="#" className="text-blue-500 hover:underline flex items-center">
                                            View Project <FaArrowRight className="ml-1" />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 bg-white dark:bg-slate-800">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-8 inline-block border-b-4 border-blue-500 pb-2">Get In Touch</h2>
                        <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                            <motion.a
                                href="mailto:email@example.com"
                                className="flex items-center gap-2 px-5 py-3 bg-blue-50 dark:bg-slate-700 rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaEnvelope className="text-blue-500" /> email@example.com
                            </motion.a>
                            <motion.a
                                href="https://github.com/"
                                className="flex items-center gap-2 px-5 py-3 bg-blue-50 dark:bg-slate-700 rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGithub className="text-blue-500" /> GitHub
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com/in/"
                                className="flex items-center gap-2 px-5 py-3 bg-blue-50 dark:bg-slate-700 rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaLinkedin className="text-blue-500" /> LinkedIn
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-slate-200 dark:border-slate-700">
                <div className="container mx-auto px-6 text-center text-slate-500 dark:text-slate-400">
                    <p>© {new Date().getFullYear()} Akanksha. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default App