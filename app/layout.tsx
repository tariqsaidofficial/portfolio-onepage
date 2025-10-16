import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Tariq Said | Full-Stack Developer & Audio-Visual Specialist",
  description:
    "Full-stack developer and audio-visual specialist with 15+ years of experience in IT infrastructure, web development, and event technology.",
  generator: "v0.app",
  openGraph: {
    title: "Tariq Said | Full-Stack Developer & Audio-Visual Specialist",
    description:
      "Full-stack developer and audio-visual specialist with 15+ years of experience in IT infrastructure, web development, and event technology.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
