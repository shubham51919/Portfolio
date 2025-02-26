"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const projects = [
    {
        id: "warehouseManagement",
        title: "Warehouse Management and Simulation System",
        description: "A web-based system for designing and optimizing warehouse layouts with an interactive canvas editor, 3D simulations, and role-based access control (RBAC). Users can create decision points, define paths, and run simulations to optimize warehouse operations.",
        image: "https://github.com/shubham51919/Portfolio/blob/main/public/warehouseManagement.png?raw=true",
    },
    {
        id: "reportManagement",
        title: "Shared Report Editing and Management System",
        description: "A collaborative web platform for stakeholders to edit, manage, and review reports in real-time. Features access control, version history, and cloud storage integration.",
        image: "https://github.com/shubham51919/Portfolio/blob/main/public/report-generation.png?raw=true",
    },
    {
        id: "employeeManagement",
        title: "Employee Management Portal",
        description: "A centralized system for managing employee records, roles, and performance tracking. Supports role-based access, document management, and real-time data analytics.",
        image: "https://github.com/shubham51919/Portfolio/blob/main/public/employeePortal.png?raw=true",
    },
    {
        id: "wordCloud",
        title: "Word Cloud Component",
        description: "An NPM package that generates word clusters based on frequency representation. Customizable with various layouts, colors, and interactive features.",
        image: "https://github.com/shubham51919/Portfolio/blob/main/public/WordCloud1.png?raw=true",
    },
];

export default function Projects() {
    return (
        <>
            <section className="py-10 px-4 bg-[white] text-[black] rounded-t-[10%]">
                <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="card bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105"
                        >
                            <Link href={`/project/${project.id}`}>
                                <div className="relative">
                                    <Image
                                        width="900"
                                        height="900"
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="card-img p-4 rounded-lg w-full h-64 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/100 to-transparent pointer-events-none"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-400 mb-4">{project.description}</p>
                                    <span className="text-blue-500 hover:text-blue-400 transition-colors">View Project</span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    )
}