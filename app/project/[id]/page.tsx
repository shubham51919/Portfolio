"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { FaGithub, FaGlobe } from "react-icons/fa"
import Image from "next/image"

// This would typically come from a database or API
const projectsData = {
    warehouseManagement: {
        title: "Warehouse Management and Simulation System",
        description: "A web-based system for designing and optimizing warehouse layouts with an interactive canvas editor, 3D simulations, and role-based access control (RBAC). Users can create decision points, define paths, and run simulations to optimize warehouse operations.",
        image: "/warehouseSimulation.png",
        video: "/video3.mp4",
        tools: ["React", "TypeScript", "Three.js", "Node.js", "Cosmos DB", "Azure Entra ID", "JWT Authentication"],
        role: "Full Stack Developer",
        github: "",
        demo: "",
        npm: "",
        additionalImages: ["/warehouseManagement.png"],
    },
    reportManagement: {
        title: "Shared Report Editing and Management System",
        description: "A collaborative web platform for stakeholders to edit, manage, and review reports in real-time. Features access control, version history, and cloud storage integration.",
        image: "/report-generation.png",
        video: "/video1.mp4",
        tools: ["React", "Node.js", "MongoDB", "Express"],
        role: "Full Stack Developer",
        github: "https://github.com/shubham51919/CollabEditor/tree/socket_io_server_shubham",
        demo: "",
        npm: "",
        additionalImages: ["/report2.png", "/report1.png", "/report3.png"],
    },
    employeeManagement: {
        title: "Employee Management Portal",
        description: "A centralized system for managing employee records, roles, and performance tracking. Supports role-based access, document management, and real-time data analytics.",
        image: "/employeePortal.png",
        video: "",
        tools: ["React", "Node.js", "PostgreSQL", "Express"],
        role: "Full Stack Developer",
        demo: "",
        npm: "",
        github: "https://github.com/shubham51919/EmployeeSphere",
        additionalImages: ["/employeePortal4.png", "/employeePortal2.png", "/employeePortal3.png"],
    },
    wordCloud: {
        title: "Word Cloud Component",
        description: "An NPM package that generates word clusters based on frequency representation. Customizable with various layouts, colors, and interactive features.",
        image: "/WordCloud1.png",
        video: "",
        tools: ["React", "TypeScript"],
        role: "Frontend Developer",
        demo: "",
        github: "https://github.com/shubham51919/react-wordcloud-generator/tree/main/word-cloud-test",
        npm: "https://www.npmjs.com/package/react-wordcloud-generator",
        additionalImages: ["/WordCloud3.png", "/WordCloud2.png", "/WordCloud1.png"],
    },
};

export default function ProjectPage() {
    const params = useParams()
    const projectId = params.id as string
    const project = projectsData[projectId as keyof typeof projectsData]

    if (!project) {
        return <div>Project not found</div>
    }

    return (
        <div className="min-h-screen relative">
            <div className="absolute inset-0 z-0">
                {
                    project.video.length > 0 ?
                        <video id="video" autoPlay loop muted controls>
                            <source src={`https://github.com/shubham51919/Portfolio/blob/main/public` + project.video + `?raw=true`} type="video/mp4" />
                        </video>
                        :
                        <Image id="video" src={`https://github.com/shubham51919/Portfolio/blob/main/public${project.image}?raw=true`} alt="Project background" layout="fill" objectFit="cover" quality={100} />
                }
                <div className="absolute inset-0 bg-black opacity-75"></div>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto py-20 px-4">
                <Link href="/" className="text-blue-500 hover:text-blue-400 mb-6 inline-block">
                    &larr; Back to Projects
                </Link>
                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl mb-6">{project.description}</p>
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Tools Used</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, index) => (
                            <span key={index} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">My Role</h2>
                    <p>{project.role}</p>
                </div>
                {
                    project.github.length > 0 ?
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        >
                            <FaGithub className="mr-2" />
                            View on GitHub
                        </a>
                        :
                        <div

                            className="inline-flex items-center bg-gray-300 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
                        >
                            Internal project – code not public
                        </div>

                }
                {
                    project.demo && project.demo.length > 0 &&
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    >
                        <FaGlobe className="mr-2" />
                        Demo Version
                    </a>
                }
                {
                    project.npm && project.npm.length > 0 &&
                    <a
                        href={project.npm}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    >
                        <FaGlobe className="mr-2" />
                        npm package
                    </a>
                }
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4">Project Images</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.additionalImages.map((img, index) => (
                            <img
                                key={index}
                                src={"https://github.com/shubham51919/Portfolio/blob/main/public" + img + "?raw=true" || "/placeholder.svg"}
                                alt={`${project.title} screenshot ${index + 1}`}
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

