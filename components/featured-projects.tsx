"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Play, TrendingUp, Users, Clock, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { projects } from "@/data/projects"

/**
 * FeaturedProjects Component - Showcase top 4 projects on home page
 * 
 * Features:
 * - Displays first 6 projects from projects data
 * - Same design as original Projects component
 * - Links to full projects page
 * - Responsive grid layout
 * 
 * @component
 */
export function FeaturedProjects() {
  // Get top 6 featured projects
  const featuredProjects = projects.slice(0, 6)
  const [apkUrls, setApkUrls] = useState<Record<number, string>>({})

  // Fetch APK URLs for projects with dynamic APK links (lazy load)
  useEffect(() => {
    // Delay API calls to not block initial render
    const timer = setTimeout(() => {
      const fetchApkUrls = async () => {
        const projectsWithApk = featuredProjects.filter(p => p.apkUrl === "dynamic" && p.github)
        
        for (const project of projectsWithApk) {
          try {
            const repoPath = project.github!.replace('https://github.com/', '')
            
            const response = await fetch(
              `https://api.github.com/repos/${repoPath}/releases/latest`,
              {
                headers: {
                  'Accept': 'application/vnd.github.v3+json',
                },
              }
            )
            
            if (response.ok) {
              const release = await response.json()
              const apkAsset = release.assets?.find((asset: { name: string }) => 
                asset.name.toLowerCase().endsWith('.apk')
              )
              
              if (apkAsset) {
                setApkUrls(prev => ({
                  ...prev,
                  [project.id]: apkAsset.browser_download_url
                }))
              }
            }
          } catch (error) {
            console.error(`Failed to fetch APK for ${project.name}:`, error)
          }
        }
      }

      fetchApkUrls()
    }, 1000) // Wait 1 second after page load

    return () => clearTimeout(timer)
  }, [featuredProjects])

  // Android Icon Component
  const AndroidIcon = ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.81 10.81 0 0 0 1 18h22a10.81 10.81 0 0 0-5.4-8.52M7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5" />
    </svg>
  )

  // Get category color based on type
  const getCategoryColor = (category: string) => {
    const colors = {
      "Full-Stack Development": {
        bg: "from-amber-500/80 to-amber-600/60",
        border: "border-amber-500/20",
        glow: "shadow-amber-500/30",
        text: "text-amber-100",
        badge: "bg-amber-500/10 border-amber-500/30 text-amber-200"
      },
      "IT Infrastructure": {
        bg: "from-purple-500/80 to-purple-600/60",
        border: "border-purple-500/20",
        glow: "shadow-purple-500/30",
        text: "text-purple-100",
        badge: "bg-purple-500/10 border-purple-500/30 text-purple-200"
      },
      "AV & Event Management": {
        bg: "from-blue-500/80 to-blue-600/60",
        border: "border-blue-500/20",
        glow: "shadow-blue-500/30",
        text: "text-blue-100",
        badge: "bg-blue-500/10 border-blue-500/30 text-blue-200"
      },
      "Media Production": {
        bg: "from-rose-500/80 to-rose-600/60",
        border: "border-rose-500/20",
        glow: "shadow-rose-500/30",
        text: "text-rose-100",
        badge: "bg-rose-500/10 border-rose-500/30 text-rose-200"
      }
    }
    return colors[category as keyof typeof colors] || colors["Full-Stack Development"]
  }

  // Truncate description to consistent length
  const truncateDescription = (text: string, maxLength: number = 120) => {
    const cleaned = text.replace(/\*\*/g, '').replace(/\(.*?\)/g, '').trim()
    if (cleaned.length <= maxLength) return cleaned
    return cleaned.substring(0, maxLength).trim() + '...'
  }

  return (
    <section id="projects" className="relative py-12 md:py-20 px-4" style={{ zIndex: 10 }}>
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-3xl mx-auto px-4">
            Explore top innovative web applications, AudioVisual/Event solutions, and IT infrastructure projects
          </p>
        </div>

        {/* Projects Grid - 3 columns, show all 6 projects (2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {featuredProjects.map((project, index) => {
            const colors = getCategoryColor(project.category)
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                  <div 
                    className="relative h-full rounded-xl md:rounded-2xl border border-border/50 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-primary/30 flex flex-col"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                    }}
                  >
                    
                    {/* Gradient Border Glow on Hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/20 rounded-2xl" />
                    </div>

                    {/* Image Section */}
                    <div className="relative h-40 md:h-48 overflow-hidden rounded-t-xl md:rounded-t-2xl">
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                      
                      {/* Project Image with Vignette + Desaturation OR Skeleton */}
                      {project.isComingSoon ? (
                        // Skeleton loader for image
                        <div className="absolute inset-0 bg-gradient-to-br from-muted/40 via-muted/20 to-muted/40 animate-pulse">
                          <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="text-center space-y-3">
                              <Package className="w-12 h-12 mx-auto text-muted-foreground/30" />
                              <div className="h-3 w-32 bg-muted/40 rounded-full mx-auto" />
                              <div className="h-2 w-24 bg-muted/30 rounded-full mx-auto" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover project-image-desaturated"
                        />
                      )}
                      
                      {/* Vignette Effect - Reduces on hover (not hidden) */}
                      <div 
                        className="absolute inset-0 pointer-events-none z-[5] transition-opacity duration-700 ease-in-out"
                        style={{
                          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.7) 100%)',
                          opacity: 1
                        }}
                      />

                      {/* Category Badge - Top Left */}
                      <div className="absolute top-2 md:top-4 left-2 md:left-4 z-20">
                        <span className={`px-2 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs font-bold rounded-full border ${colors.border} ${colors.text} bg-gradient-to-r ${colors.bg} shadow-lg ${colors.glow}`}>
                          {project.category.split(' ')[0]}
                        </span>
                      </div>

                      {/* Video Play Button - Center (if video exists) */}
                      {project.video && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const video = document.createElement('video');
                            video.src = project.video || '';
                            video.controls = true;
                            video.autoplay = true;
                            video.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);max-width:90vw;max-height:90vh;z-index:9999;border-radius:12px;box-shadow:0 25px 50px -12px rgba(0,0,0,0.5)';
                            const overlay = document.createElement('div');
                            overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.8);z-index:9998;backdrop-filter:blur(4px)';
                            overlay.onclick = () => { overlay.remove(); video.remove(); };
                            document.body.appendChild(overlay);
                            document.body.appendChild(video);
                          }}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/60 text-white hover:bg-primary hover:scale-110 transition-all duration-300"
                          title="Play Demo Video"
                        >
                          <Play className="w-6 h-6" fill="currentColor" />
                        </button>
                      )}

                      {/* Decorative Dot - Top Right */}
                      <div className={`absolute top-6 right-6 w-2 h-2 rounded-full bg-gradient-to-r ${colors.bg} opacity-60 z-10`} />
                    </div>

                    {/* Content Section */}
                    <div className="relative p-4 md:p-6 z-10 flex flex-col flex-grow">
                      {/* Title */}
                      <h3 className={`text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3 transition-colors duration-300 ${
                        project.isComingSoon 
                          ? 'text-muted-foreground' 
                          : 'text-foreground group-hover:text-primary'
                      }`}>
                        {project.name}
                      </h3>

                      {/* Description - Fixed 2 lines */}
                      <p className={`mb-3 md:mb-4 text-xs md:text-sm leading-relaxed line-clamp-2 min-h-[2.5rem] md:min-h-[3rem] ${
                        project.isComingSoon ? 'text-muted-foreground/70 italic' : 'text-muted-foreground'
                      }`}>
                        {truncateDescription(project.description, 100)}
                      </p>
                      
                      {/* Coming Soon Badge - Below Description */}
                      {project.isComingSoon && (
                        <div className="mb-3 md:mb-4">
                          <span className="inline-flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs font-semibold rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-200">
                            <Clock className="w-3.5 h-3.5" />
                            Coming Soon
                          </span>
                        </div>
                      )}

                      {/* Tech Stack - Max 2 rows OR Skeleton Loader */}
                      <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                        {project.isComingSoon ? (
                          // Skeleton loader for coming soon projects
                          <>
                            <div className="h-6 w-20 bg-muted/30 rounded-full animate-pulse" />
                            <div className="h-6 w-24 bg-muted/30 rounded-full animate-pulse" />
                            <div className="h-6 w-16 bg-muted/30 rounded-full animate-pulse" />
                            <div className="h-6 w-28 bg-muted/30 rounded-full animate-pulse" />
                          </>
                        ) : (
                          <>
                            {project.techStack.slice(0, 6).map((tech, i) => (
                              <span
                                key={i}
                                className={`px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs rounded-full border ${colors.badge} transition-all duration-300`}
                              >
                                {tech}
                              </span>
                            ))}
                            {project.techStack.length > 6 && (
                              <span className="px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs bg-muted/50 text-muted-foreground rounded-full border border-border/50">
                                +{project.techStack.length - 6}
                              </span>
                            )}
                          </>
                        )}
                      </div>

                      {/* Metrics with Icons */}
                      <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                        {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                          <div key={key} className="flex items-center gap-1 md:gap-2">
                            {key.includes('user') && <Users className="w-3 md:w-4 h-3 md:h-4 text-primary" />}
                            {(key.includes('uptime') || key.includes('rating')) && <TrendingUp className="w-3 md:w-4 h-3 md:h-4 text-primary" />}
                            {!key.includes('user') && !key.includes('uptime') && !key.includes('rating') && (
                              <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colors.bg}`} />
                            )}
                            <span className="font-medium text-foreground text-xs md:text-sm">{value}</span>
                            <span className="text-[10px] md:text-xs">• {key}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons - Bottom Right inside card (Outlined, no background) */}
                      <div className="mt-auto flex justify-end gap-2 md:gap-3">
                        {(project.apkUrl || apkUrls[project.id]) && (
                          <a
                            href={project.apkUrl === "dynamic" ? apkUrls[project.id] : project.apkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-muted-foreground hover:text-green-500 transition-colors duration-300"
                            title="Download APK (Latest Version)"
                          >
                            <AndroidIcon className="w-5 h-5" />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-muted-foreground hover:text-primary transition-colors duration-300"
                            title="View on GitHub"
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
                            className="text-muted-foreground hover:text-primary transition-colors duration-300"
                            title="View Live"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    {/* Radial Glow on Hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(225, 29, 72, 0.1) 0%, transparent 70%)'
                      }}
                    />
                  </div>
                </motion.div>
              )
            })}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Link href="/projects">
            <Button size="lg" variant="outline" className="glass text-lg px-8">
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Custom CSS for hover effect on image */}
      <style jsx>{`
        .group:hover .project-image-desaturated {
          filter: saturate(0.9) brightness(1) !important;
        }
        .group:hover .z-\\[5\\] {
          opacity: 0.3 !important;
        }
      `}</style>
    </section>
  )
}