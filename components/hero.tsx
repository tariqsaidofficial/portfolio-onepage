import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto max-w-5xl text-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            Full-Stack Developer & <span className="text-primary">Audio-Visual Specialist</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
            Building human-centred digital systems that bridge software, AV, and event technology
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            With over 15 years of experience in IT infrastructure, AV systems, and full-stack web development, I create
            innovative solutions that blend technical excellence with creative vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a href="#contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Hire Me
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <Link href="/TariqResume-Oct2025-final.pdf" download prefetch={false}>
              <Button size="lg" variant="outline" className="text-lg px-8 glass bg-transparent">
                <Download className="w-5 h-5 mr-2" />
                Download Résumé
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
