import { useState, useEffect } from 'react'
import './App.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaArrowRight, FaTerminal, FaServer, FaMobileAlt, FaLaptopCode, FaUserGraduate } from 'react-icons/fa'
import { motion } from 'framer-motion'

function App() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
            {/* Navbar */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white/90 dark:bg-slate-900/90 shadow-md backdrop-blur-sm' : 'py-6 bg-transparent'}`}>
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <motion.div
                        className="text-xl font-bold bg-gradient-to-r from-indigo-700 via-blue-600 to-purple-700 bg-clip-text text-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Akanksha.me
                    </motion.div>
                    <motion.div
                        className="hidden md:flex space-x-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <a href="#about" className="hover:text-blue-600 transition">About</a>
                        <a href="#expertise" className="hover:text-blue-600 transition">Expertise</a>
                        <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
                        <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
                    </motion.div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="container mx-auto px-6 pt-32 pb-24 max-w-6xl">
                <motion.div
                    className="grid md:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div>
                        <motion.div
                            className="inline-block mb-2 px-4 py-1 rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 text-sm font-medium"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <FaTerminal className="inline mr-1" /> Software Engineering & Design
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-indigo-700 via-blue-600 to-purple-700 bg-clip-text text-transparent leading-tight">
                            Akanksha
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-medium mb-6 text-slate-700 dark:text-slate-300">Full-Stack Developer & UI/UX Designer</h2>
                        <p className="text-lg md:text-xl mb-8 max-w-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
                            Crafting high-performance, scalable applications and intuitive user experiences.
                            Specialized in modern JavaScript frameworks with an emphasis on clean architecture.
                        </p>
                        <div className="flex space-x-4">
                            <motion.a
                                href="#contact"
                                className="px-8 py-3 bg-blue-600 text-white rounded-md font-medium flex items-center shadow-lg shadow-blue-600/30 dark:shadow-blue-500/20"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Contact Me <FaArrowRight className="ml-2" />
                            </motion.a>
                            <motion.a
                                href="#projects"
                                className="px-8 py-3 border-2 border-slate-300 dark:border-slate-700 rounded-md font-medium hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                View Projects
                            </motion.a>
                        </div>
                    </div>
                    <motion.div
                        className="relative hidden md:block"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                            <div className="w-full h-full rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                                <div className="w-full h-full bg-[url('/profile.jpg')] bg-cover bg-center"></div>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-lg bg-yellow-400 dark:bg-yellow-500"></div>
                        <div className="absolute -top-6 -right-6 w-16 h-16 rounded-lg bg-emerald-400 dark:bg-emerald-500"></div>
                    </motion.div>
                </motion.div>
            </header>

            {/* Expertise Section */}
            <section id="expertise" className="py-24 bg-white dark:bg-slate-800">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold inline-block border-b-4 border-blue-500 pb-2">Technical Expertise</h2>
                            <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                                Over 5+ years of experience developing complex applications and implementing
                                technical solutions for diverse industry challenges.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <motion.div
                                className="p-8 rounded-xl bg-slate-50 dark:bg-slate-700 shadow-lg"
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                                    <FaLaptopCode className="text-2xl text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Frontend Development</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                    Crafting responsive, accessible and performant user interfaces with modern frameworks.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-blue-50 dark:bg-slate-800 rounded-full text-sm font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                className="p-8 rounded-xl bg-slate-50 dark:bg-slate-700 shadow-lg"
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6">
                                    <FaServer className="text-2xl text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Backend Development</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                    Building secure, scalable APIs and microservices with modern architecture patterns.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['Node.js', 'Express', 'MongoDB', 'GraphQL', 'Docker'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-purple-50 dark:bg-slate-800 rounded-full text-sm font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                className="p-8 rounded-xl bg-slate-50 dark:bg-slate-700 shadow-lg"
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6">
                                    <FaMobileAlt className="text-2xl text-emerald-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                    Creating intuitive interfaces and elegant user experiences with design thinking methodology.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['Figma', 'Design Systems', 'Wireframing', 'Prototyping', 'User Testing'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-emerald-50 dark:bg-slate-800 rounded-full text-sm font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 inline-block border-b-4 border-blue-500 pb-2">About Me</h2>
                        <div className="grid md:grid-cols-5 gap-12 items-center">
                            <div className="md:col-span-3">
                                <p className="text-lg mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
                                    I'm a software developer with expertise in full-stack development and UI/UX design.
                                    With a computer science background and industry experience, I specialize in building
                                    scalable web applications that prioritize both performance and user experience.
                                </p>
                                <p className="text-lg mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
                                    My approach combines technical precision with creative problem-solving. I've worked
                                    with startups and enterprise clients across fintech, healthcare, and e-commerce sectors,
                                    delivering solutions that drive business growth while maintaining technical excellence.
                                </p>
                                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                                    I'm passionate about open-source contributions and staying current with emerging
                                    technologies and best practices. When not coding, I enjoy technical writing, mentoring
                                    junior developers, and participating in hackathons.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-6">
                                    <div>
                                        <div className="font-bold text-3xl text-blue-600">5+</div>
                                        <div className="text-sm text-slate-500 dark:text-slate-400">Years Experience</div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-3xl text-blue-600">25+</div>
                                        <div className="text-sm text-slate-500 dark:text-slate-400">Projects Completed</div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-3xl text-blue-600">10+</div>
                                        <div className="text-sm text-slate-500 dark:text-slate-400">Tech Stack Mastery</div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <motion.div
                                    className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-xl shadow-lg"
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <h3 className="font-bold text-xl mb-6 flex items-center">
                                        <FaUserGraduate className="mr-2 text-blue-500" /> Education & Certification
                                    </h3>
                                    <div className="space-y-5">
                                        <div>
                                            <div className="font-medium">MSc in Computer Science</div>
                                            <div className="text-sm text-slate-500 dark:text-slate-400">University of Technology, 2018-2020</div>
                                        </div>
                                        <div>
                                            <div className="font-medium">BSc in Software Engineering</div>
                                            <div className="text-sm text-slate-500 dark:text-slate-400">State University, 2014-2018</div>
                                        </div>
                                        <div>
                                            <div className="font-medium">AWS Certified Solutions Architect</div>
                                            <div className="text-sm text-slate-500 dark:text-slate-400">Amazon Web Services, 2022</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24 bg-white dark:bg-slate-800">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold inline-block border-b-4 border-blue-500 pb-2">Featured Projects</h2>
                            <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                                A selection of my recent work showcasing my technical capabilities and problem-solving approach.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10">
                            {[
                                {
                                    title: "Enterprise Data Analytics Platform",
                                    desc: "Designed and implemented a scalable data analytics platform for financial institutions with real-time reporting capabilities and customizable dashboards.",
                                    tech: ["React", "TypeScript", "Node.js", "GraphQL", "AWS"],
                                    color: "from-blue-400 to-indigo-600"
                                },
                                {
                                    title: "Healthcare Management System",
                                    desc: "Built a HIPAA-compliant healthcare management system featuring secure patient records, appointment scheduling, and integrated billing functionality.",
                                    tech: ["Next.js", "Express", "MongoDB", "Docker", "Azure"],
                                    color: "from-emerald-400 to-teal-600"
                                },
                                {
                                    title: "E-commerce Microservices Architecture",
                                    desc: "Developed a scalable microservices-based e-commerce platform with advanced inventory management and payment processing systems.",
                                    tech: ["React", "Nest.js", "PostgreSQL", "Kafka", "Kubernetes"],
                                    color: "from-purple-400 to-indigo-600"
                                },
                                {
                                    title: "AI-Powered Content Management System",
                                    desc: "Created a modern CMS with AI-powered content recommendations, advanced SEO tools, and multi-platform publishing capabilities.",
                                    tech: ["React", "Python", "TensorFlow", "FastAPI", "Redis"],
                                    color: "from-amber-400 to-orange-600"
                                }
                            ].map((project, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-slate-50 dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg"
                                    whileHover={{ y: -10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className={`h-48 bg-gradient-to-r ${project.color} flex items-end p-6`}>
                                        <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-lg">
                                            <FaCode className="text-blue-600" />
                                        </div>
                                    </div>
                                    <div className="p-7">
                                        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-300 mb-5 line-clamp-3">{project.desc}</p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map(tech => (
                                                <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-600 rounded-full text-xs font-medium">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <motion.a
                                            href="#"
                                            className="text-blue-600 font-medium hover:text-blue-700 flex items-center"
                                            whileHover={{ x: 5 }}
                                        >
                                            Case Study <FaArrowRight className="ml-2" />
                                        </motion.a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold inline-block border-b-4 border-blue-500 pb-2">Get In Touch</h2>
                            <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                                Interested in working together? I'm currently available for freelance projects and full-time positions.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-8 shadow-lg">
                                    <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
                                    <form>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium mb-2">Name</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium mb-2">Email</label>
                                            <input type="email" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        </div>
                                        <div className="mb-6">
                                            <label className="block text-sm font-medium mb-2">Message</label>
                                            <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                                        </div>
                                        <motion.button
                                            type="submit"
                                            className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg shadow-blue-600/30"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Send Message
                                        </motion.button>
                                    </form>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
                                <div className="space-y-6">
                                    <motion.a
                                        href="mailto:2342342"
                                        className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg shadow-md"
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                            <FaEnvelope className="text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="font-medium">Email</div>
                                            <div className="text-slate-600 dark:text-slate-400">akanksha@example.com</div>
                                        </div>
                                    </motion.a>
                                    <motion.a
                                        href="https://github.com/akankshahu"
                                        className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg shadow-md"
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-900/50 flex items-center justify-center">
                                            <FaGithub className="text-slate-700 dark:text-slate-200" />
                                        </div>
                                        <div>
                                            <div className="font-medium">GitHub</div>
                                            <div className="text-slate-600 dark:text-slate-400">github.com/akanksha</div>
                                        </div>
                                    </motion.a>
                                    <motion.a
                                        href="https://linkedin.com/in/akanksha"
                                        className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg shadow-md"
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                            <FaLinkedin className="text-blue-700" />
                                        </div>
                                        <div>
                                            <div className="font-medium">LinkedIn</div>
                                            <div className="text-slate-600 dark:text-slate-400">Na</div>
                                        </div>
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex justify-center space-x-8 mb-8">
                        <motion.a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600" whileHover={{ scale: 1.2 }}>
                            <FaGithub size={22} />
                        </motion.a>
                        <motion.a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600" whileHover={{ scale: 1.2 }}>
                            <FaLinkedin size={22} />
                        </motion.a>
                        <motion.a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600" whileHover={{ scale: 1.2 }}>
                            <FaEnvelope size={22} />
                        </motion.a>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">
                        © {new Date().getFullYear()} Akanksha. All rights reserved.
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
                        Designed and built with React, Tailwind CSS and Framer Motion
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default App