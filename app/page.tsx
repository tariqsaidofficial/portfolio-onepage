import dynamic from 'next/dynamic'
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"

// Lazy load heavy components
const About = dynamic(() => import('@/components/about').then(mod => ({ default: mod.About })), {
  loading: () => <div className="min-h-screen" />
})
const Skills = dynamic(() => import('@/components/skills').then(mod => ({ default: mod.Skills })), {
  loading: () => <div className="min-h-screen" />
})
const Projects = dynamic(() => import('@/components/projects').then(mod => ({ default: mod.Projects })), {
  loading: () => <div className="min-h-screen" />
})
const Services = dynamic(() => import('@/components/services').then(mod => ({ default: mod.Services })), {
  loading: () => <div className="min-h-screen" />
})
const Testimonials = dynamic(() => import('@/components/testimonials').then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="min-h-screen" />
})
const Contact = dynamic(() => import('@/components/contact').then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="min-h-screen" />
})

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-[#0a122c] text-foreground relative">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
