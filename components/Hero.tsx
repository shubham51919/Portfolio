"use client"

import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import Image from "next/image"

export default function Hero() {
    return (
        <section className="min-h-[96vh] flex items-center justify-center p-4 md:p-8">
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Welcome and About */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-7xl font-lightbold bg-clip-text text-[white] text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
                        >
                            Welcome
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-lg text-gray-300 leading-relaxed"
                        >
                            My name is Shubham Sharma, a Software Engineer. I have worked on a wide range of front-end and backend projects, from developing complex simulations to creating real time collabrative reports platforms, with a focus on creating clean, well-crafted applications that not only look great but also provide a seamless user experience.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="flex justify-center md:justify-start space-x-6"
                        >
                            <a
                                href="https://www.linkedin.com/in/shubham-sharma-a5866919b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl hover:text-blue-500 transition-colors transform hover:scale-110 duration-200"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://github.com/shubham51919"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl hover:text-gray-400 transition-colors transform hover:scale-110 duration-200"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="mailto:shubhamsharma51919@gmail.com"
                                className="text-3xl hover:text-red-500 transition-colors transform hover:scale-110 duration-200"
                            >
                                <FaEnvelope />
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="relative w-full h-[500px]"
                >
                    <Image
                        src="/heroImage.png"
                        alt="Developer workspace illustration"
                        fill
                        className="object-contain"
                        priority
                    />
                </motion.div>

            </div>
        </section>
    )
}

