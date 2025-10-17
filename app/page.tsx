import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
// import { LaserFlow } from "@/components/laser-flow"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a122c] text-foreground relative">
      {/* <div className="fixed inset-0 z-0 pointer-events-none">
        <LaserFlow
          horizontalBeamOffset={0.1}
          verticalBeamOffset={0.0}
          color="#e11d48"
          fogIntensity={0.5}
          wispDensity={1.2}
          flowSpeed={0.4}
        />
      </div> */}

      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
