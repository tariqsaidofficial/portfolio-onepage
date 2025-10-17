"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useToast } from "@/components/ui/use-toast"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
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
              src="/TariqSaid-logo.png"
              alt="Tariq Said"
              width={120}
              height={40}
              className="h-10 w-auto drop-shadow-lg"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/90 hover:text-white transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] relative z-10"
              >
                {item.label}
              </a>
            ))}

            <Link
              href="/TariqResume-Oct2025-final.pdf"
              download
              prefetch={false}
              onClick={handleResumeDownload}
            >
              <Button size="sm" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/50 transition-all duration-200 relative z-10">
                <Download className="w-4 h-4 mr-2" />
                Download Résumé
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white relative z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
          <nav className="md:hidden mt-4 flex flex-col gap-4 glass-strong p-4 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors relative z-10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <Link
              href="/TariqResume-Oct2025-final.pdf"
              download
              prefetch={false}
              onClick={handleResumeDownload}
              className="w-full"
            >
              <Button size="sm" className="bg-primary hover:bg-primary/90 w-full shadow-lg hover:shadow-primary/50 transition-all duration-200 relative z-10">
                <Download className="w-4 h-4 mr-2" />
                Download Résumé
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
