"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Calendar, Users, TrendingUp, Play } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    name: "NFC Manager",
    description: "Android application for secure NFC tag management with advanced encryption and user-friendly interface.",
    category: "Full-Stack Development",
    techStack: ["Android", "Kotlin", "NFC", "Encryption", "SQLite"],
    year: "2025",
    role: "Lead Developer",
    metrics: { users: "1K+", security: "AES-256" },
    image: "/projects/nfc-manager.webp",
    video: "/projects/nfcManager_PhoneGrid.mp4",
    github: "https://github.com/tariqsaidofficial/nfcManager",
  },
  {
    id: 2,
    name: "DXBMark",
    description: "Co-founded and led development of comprehensive platform serving 3,000+ users with 98% uptime.",
    category: "Full-Stack Development",
    techStack: ["React", "Node.js", "PostgreSQL", "Docker", "Redis"],
    year: "2024",
    role: "Co-Founder & Lead Developer",
    metrics: { users: "3K+", uptime: "98%" },
    image: "/projects/dxbmark.webp",
    liveUrl: "https://dxbmark.com",
  },
  {
    id: 3,
    name: "Media Server-as-a-Service",
    description: "Built scalable streaming solution with 500+ movies & series (1953-2025). Featuring Plex integration and NAS storage. Get your free 90-day access!",
    category: "Media Production",
    techStack: ["Plex", "NAS Storage", "Streaming", "CDN", "MinIO"],
    year: "2025",
    role: "Infrastructure Architect",
    metrics: { content: "500+", years: "1953-2025", trial: "90 days" },
    image: "/projects/media-server.webp",
    liveUrl: "https://media.dxbmark.com",
  },
  {
    id: 4,
    name: "Northern Estates",
    description: "Real-estate platform with 10,000+ users and 500+ property listings, featuring advanced search and filtering. **Hosted on our server**. Need hosting + free domain? Contact us!",
    category: "Full-Stack Development",
    techStack: ["WordPress", "Elementor", "PHP", "MySQL", "Apache"],
    year: "2024",
    role: "Full-Stack Developer",
    metrics: { users: "10K+", listings: "500+" },
    image: "/projects/northern-estates.webp",
    liveUrl: "https://northernestates.ae",
  },
  {
    id: 5,
    name: "Travelify",
    description: "Integrated travel application combining hotels, e-commerce, and digital services in one seamless platform. **(Under Progress)**",
    category: "Full-Stack Development",
    techStack: ["Flutter", "Android", "iOS", "Django REST", "PostgreSQL"],
    year: "2025",
    role: "Full-Stack Developer",
    metrics: { bookings: "2K+", rating: "4.8/5" },
    image: "/projects/travelify.webp",
    github: "https://github.com/tariqsaidofficial/travelify",
  },
  {
    id: 6,
    name: "Online Web Tools",
    description: "Get things done, quickly. Use any of our 1500+ web tools and get instant results.",
    category: "Full-Stack Development",
    techStack: ["Next.js", "React", "TypeScript", "API Integration", "SEO"],
    year: "2024",
    role: "Full-Stack Developer",
    metrics: { tools: "1500+", users: "Active" },
    image: "/projects/online-web-tools.webp",
    liveUrl: "https://tools.dxbmark.com",
  },
]

const categories = [
  { id: "all", name: "All Projects" },
  { id: "Full-Stack Development", name: "Full-Stack" },
  { id: "IT Infrastructure", name: "IT Infra" },
  { id: "AV & Event Management", name: "AV & Events" },
  { id: "Media Production", name: "Media & Film" },
]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  )

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Projects & Achievements</h2>

        {/* Segmented Control Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-card/50 rounded-full p-1 gap-1 border border-border">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all relative ${
                  activeFilter === category.id
                    ? "text-primary-foreground"
                    : "text-foreground hover:text-primary"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {activeFilter === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 text-sm">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="relative bg-card/50 backdrop-blur-sm border-border/40 group cursor-pointer hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:backdrop-blur-none transition-all h-full overflow-hidden">
                  {/* Background Image with Fade Effect */}
                  <div className="absolute inset-0 z-0">
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 0.15 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="relative w-full h-full group-hover:opacity-100 transition-opacity duration-500"
                    >
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover object-right group-hover:scale-110 transition-transform duration-700"
                        style={{
                          maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
                        }}
                        unoptimized
                      />
                    </motion.div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-card via-card/95 to-card/80 group-hover:from-transparent group-hover:via-transparent group-hover:to-transparent transition-all duration-500" />
                  </div>

                  {/* Action Icons - Always visible on top */}
                  <div className="absolute top-4 right-4 z-20 flex gap-2">
                    {project.video && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const video = document.createElement('video');
                          video.src = project.video;
                          video.controls = true;
                          video.autoplay = true;
                          video.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);max-width:90vw;max-height:90vh;z-index:9999;border-radius:12px;box-shadow:0 25px 50px -12px rgba(0,0,0,0.5)';
                          const overlay = document.createElement('div');
                          overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.8);z-index:9998;backdrop-filter:blur(4px)';
                          overlay.onclick = () => { overlay.remove(); video.remove(); };
                          document.body.appendChild(overlay);
                          document.body.appendChild(video);
                        }}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title="Play Demo Video"
                      >
                        <Play className="w-5 h-5" />
                      </button>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-primary hover:scale-110 transition-transform"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <CardHeader className="relative z-10">
                    {/* Title - Always visible with hover effect */}
                    <div className="mb-3">
                      {(project.liveUrl || project.github) ? (
                        <a
                          href={project.liveUrl || project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          <CardTitle className="text-xl text-foreground hover:text-primary transition-colors cursor-pointer">
                            {project.name}
                          </CardTitle>
                        </a>
                      ) : (
                        <CardTitle className="text-xl text-foreground">
                          {project.name}
                        </CardTitle>
                      )}
                    </div>

                    {/* Content that fades on hover */}
                    <div className="transition-opacity duration-500 group-hover:opacity-10">
                      <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                        {project.description.split('**').map((part, index) => 
                          index % 2 === 1 ? (
                            <strong key={index} className="text-primary font-semibold">{part}</strong>
                          ) : (
                            part
                          )
                        )}
                      </CardDescription>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-primary/10 text-primary border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="transition-opacity duration-500 group-hover:opacity-10">
                    {/* Project Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{project.year}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground text-xs">{project.role}</span>
                      </div>
                    </div>

                      {/* Key Metrics */}
                      <div className="flex flex-wrap gap-3">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div
                            key={key}
                            className="flex items-center gap-1 text-xs bg-card border border-border px-3 py-1 rounded-full"
                          >
                            <TrendingUp className="w-3 h-3 text-primary" />
                            <span className="font-semibold text-primary">{value}</span>
                            <span className="text-muted-foreground">{key}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
