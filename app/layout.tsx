import "./globals.css"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import type React from "react" // Import React

const inter = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Your Name - Full Stack Developer",
  description: "Portfolio of Your Name, a Full Stack Developer specializing in React, Node.js, and TypeScript",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth`}>
      <body className={`${inter.className} bg-[rgb(1,7,25)] text-white`}>{children}</body>
    </html>
  )
}

