"use client"

import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa"
import { SiTypescript, SiJenkins, SiTailwindcss, SiMongodb } from "react-icons/si"
import { VscAzure } from "react-icons/vsc";
import { PiMicrosoftTeamsLogoBold } from "react-icons/pi";
const skills = [
    {
        name: "React",
        icon: FaReact,
        color: "text-[rgb(52,120,198)]",
    },
    {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-500",
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-500",
    },
    {
        name: "Azure",
        icon: VscAzure,
        color: "text-blue-600",
    },
    {
        name: "CI/CD",
        icon: SiJenkins,
        color: "text-red-500",
    },
    {
        name: "JavaScript",
        icon: FaJs,
        color: "text-yellow-400",
    },
    {
        name: "HTML5",
        icon: FaHtml5,
        color: "text-orange-500",
    },
    {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "text-blue-500",
    },
    {
        name: "Git",
        icon: FaGitAlt,
        color: "text-orange-600",
    },
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-400",
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-500",
    },
    {
        name: "Fluent UI",
        icon: PiMicrosoftTeamsLogoBold,
        color: "text-blue-400",
    }

]

export default function Skills() {
    return (
        <section className="py-20 px-4 bg-gray-800">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-center mb-10"
            >
                Skills & Technologies
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {skills.map((skill, index) => {
                    const Icon = skill.icon
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.1,
                                ease: "easeOut",
                            }}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 },
                            }}
                            className="bg-gray-700 rounded-lg p-6 flex flex-col items-center gap-3 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            {Icon && <Icon className={`text-4xl ${skill.color}`} />}
                            <span className="text-lg font-semibold text-gray-100">{skill.name}</span>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}

