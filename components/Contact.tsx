"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa"

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the form data to a server
        console.log("Form submitted:", { name, email, message })
        // Reset form fields
        setName("")
        setEmail("")
        setMessage("")
    }

    const contactInfo = [
        { icon: FaEnvelope, text: "shubhamsharma51919@gmail.com", href: "mailto:shubhamsharma51919@gmail.com" },
        { icon: FaLinkedin, text: "shubham-sharma-a5866919b", href: "https://www.linkedin.com/in/shubham-sharma-a5866919b/" },
        { icon: FaGithub, text: "shubham51919", href: "https://github.com/shubham51919" },
    ]

    return (
        <section className="py-20 px-4 bg-gray-900">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-4xl font-bold text-center mb-10">Get in Touch</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <ul className="space-y-4">
                            {contactInfo.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-center space-x-3"
                                >
                                    <item.icon className="text-blue-500 text-xl" />
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-blue-400 transition-colors"
                                        >
                                            {item.text}
                                        </a>
                                    ) : (
                                        <span>{item.text}</span>
                                    )}
                                </motion.li>
                            ))}
                        </ul>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-10"
                        >
                            <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>
                            <p className="text-gray-300 mb-4">
                                Feel free to reach out for collaborations, job opportunities, or just to say hello!
                            </p>
                            <div className="flex space-x-4">
                                {contactInfo.slice(0, 3).map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-colors"
                                    >
                                        <item.icon className="text-2xl" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    rows={4}
                                    className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

