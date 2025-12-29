"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Download, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useToast } from "@/components/ui/use-toast"
import { useState, useEffect, useRef } from 'react'
import ThemeToggle from '@/components/theme-toggle'

/**
 * Header Component - Main navigation bar with responsive design
 * 
 * Features:
{{ ... }}
 * - Responsive mobile menu
 * - Resume download with toast notification
 * - Smooth navigation to sections
 * 
 * @component
 * @example
 * ```tsx
 * <Header />
 * ```
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const { toast } = useToast()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false)
      }
    }

    if (isServicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isServicesDropdownOpen])

  // Handle dropdown mouse enter/leave with delay
  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setIsServicesDropdownOpen(true)
  }

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false)
    }, 150) // 150ms delay
  }

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "/projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ]

  const servicesItems = [
    { label: "Web Development", href: "/services/web-development", description: "Full-stack web applications" },
    { label: "AV Systems", href: "/services/av-systems", description: "Professional audiovisual production" },
    { label: "DevOps", href: "/services/devops", description: "Infrastructure & deployment solutions" },
  ]

  // 🔹 Toast + Auto-close mobile menu on download
  const handleResumeDownload = () => {
    toast({
      title: "Downloading résumé…",
      description: "Your CV will download shortly.",
      duration: 2500,
    })
    setIsMobileMenuOpen(false) // close mobile menu if open
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-strong shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-10" prefetch={false}>
            <Image
              src="/TariqSaid-logo.webp"
              alt="Tariq Said"
              width={120}
              height={40}
              className={`transition-all duration-500 drop-shadow-lg flex-shrink-0 ${
                isScrolled ? "h-8 w-auto" : "h-9 md:h-10 lg:h-12 w-auto"
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8" aria-label="Main navigation">
            <a
              href="/"
              className="text-xs lg:text-sm font-medium text-white/90 hover:text-white transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] relative z-10 whitespace-nowrap"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-xs lg:text-sm font-medium text-white/90 hover:text-white transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] relative z-10 whitespace-nowrap"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-xs lg:text-sm font-medium text-white/90 hover:text-white transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] relative z-10 whitespace-nowrap"
            >
              Skills
            </a>
            <a
              href="/projects"
              className="text-xs lg:text-sm font-medium text-white/90 hover:text-white transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] relative z-10 whitespace-nowrap"
            >
              Projects
            </a>

            {/* Services Dropdown */}
            <div 
              ref={dropdownRef}
              className="relative z-50"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button 
                className="flex items-center gap-1 text-xs lg:text-sm font-medium text-white/90 hover:text-white transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] relative z-10 whitespace-nowrap"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                aria-expanded={isServicesDropdownOpen}
                aria-haspopup="true"
                aria-label="Services menu"
              >
                Services
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 glass-strong rounded-lg shadow-xl border border-white/10 py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50 pointer-events-auto"
                  role="menu"
                  aria-label="Services submenu"
                >
                  {servicesItems.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 text-sm text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200 group pointer-events-auto"
                      onClick={() => setIsServicesDropdownOpen(false)}
                      role="menuitem"
                    >
                      <div className="font-medium group-hover:text-primary transition-colors">
                        {service.label}
                      </div>
                      <div className="text-xs text-white/60 mt-1">
                        {service.description}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#testimonials"
              className="text-xs lg:text-sm font-medium text-white/90 hover:text-white transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] relative z-10 whitespace-nowrap"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-xs lg:text-sm font-medium text-white/90 hover:text-white transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] relative z-10 whitespace-nowrap"
            >
              Contact
            </a>
            <a
              href="/faq"
              className="text-xs lg:text-sm font-medium text-white/90 hover:text-white transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] relative z-10 whitespace-nowrap"
            >
              FAQ
            </a>

            <Link
              href="/TariqResume-Oct2025-final.pdf"
              download
              prefetch={false}
              onClick={handleResumeDownload}
            >
              <Button size="sm" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/50 transition-all duration-200 relative z-10">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </Link>

            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white relative z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 glass-mobile-menu p-4 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300" aria-label="Mobile navigation">
            <a
              href="/"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors relative z-10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors relative z-10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors relative z-10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="/projects"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors relative z-10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>

            {/* Mobile Services Section */}
            <div className="border-t border-white/10 pt-4">
              <div className="text-sm font-medium text-white/70 mb-2 uppercase tracking-wider">Services</div>
              {servicesItems.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block py-2 text-sm text-white/90 hover:text-white transition-colors relative z-10 pl-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="font-medium">{service.label}</div>
                  <div className="text-xs text-white/60 mt-1">{service.description}</div>
                </Link>
              ))}
            </div>

            <a
              href="#testimonials"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors relative z-10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors relative z-10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="/faq"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors relative z-10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>

            <div className="flex items-center justify-center py-2">
              <ThemeToggle />
            </div>

            <Link
              href="/TariqResume-Oct2025-final.pdf"
              download
              prefetch={false}
              onClick={handleResumeDownload}
              className="w-full"
            >
              <Button size="sm" className="bg-primary hover:bg-primary/90 w-full shadow-lg hover:shadow-primary/50 transition-all duration-200 relative z-10">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
