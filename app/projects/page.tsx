import type { Metadata } from "next"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Projects } from "@/components/projects"

export const metadata: Metadata = {
  title: "Projects & Achievements | Tariq Said Portfolio",
  description: "Explore a comprehensive portfolio of innovative web applications, AudioVisual/Event solutions, IT infrastructure, and professional video productions. 50+ projects delivered across UAE, GCC, and international markets.",
  keywords: [
    "Tariq Said Projects",
    "Web Development Portfolio",
    "AV Systems Projects",
    "DevOps Infrastructure",
    "Media Production",
    "Full-Stack Development",
    "UAE Projects",
    "GCC Development",
    "DXBMark Projects",
    "Professional Portfolio"
  ],
  openGraph: {
    title: "Projects & Achievements | Tariq Said Portfolio",
    description: "Comprehensive portfolio showcasing 50+ projects in web development, AV systems, and IT infrastructure across UAE, GCC, and international markets.",
    url: "https://portfolio.dxbmark.com/projects",
    type: "website",
  },
  alternates: {
    canonical: "https://portfolio.dxbmark.com/projects",
  },
}

export default function ProjectsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Projects & Achievements - Tariq Said Portfolio",
    "description": "Comprehensive portfolio showcasing innovative web applications, AudioVisual/Event solutions, IT infrastructure, and professional video productions",
    "url": "https://portfolio.dxbmark.com/projects",
    "author": {
      "@type": "Person",
      "name": "Tariq Said",
      "url": "https://portfolio.dxbmark.com"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Professional Projects",
      "description": "Collection of web development, AV systems, DevOps, and media production projects",
      "numberOfItems": "50+",
      "itemListElement": [
        {
          "@type": "CreativeWork",
          "name": "DXBMark Platform",
          "description": "Co-founded platform serving 3,000+ users with 98% uptime",
          "url": "https://dxbmark.com"
        },
        {
          "@type": "CreativeWork", 
          "name": "Northern Estates",
          "description": "Real-estate platform with 10,000+ users and 500+ property listings in UAE",
          "url": "https://northernestates.ae"
        },
        {
          "@type": "CreativeWork",
          "name": "ProcureLens",
          "description": "Advanced procurement management system for Fizah Grocers, UK"
        }
      ]
    }
  }

  return (
    <>
      {/* Structured Data */}
      <Script
        id="projects-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="min-h-screen pt-20">
        <Projects />
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  )
}