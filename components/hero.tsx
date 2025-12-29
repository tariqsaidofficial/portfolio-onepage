import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import { CurvedLoop } from "@/components/curved-loop"
import { RotatingText } from "@/components/rotating-text"
import { CalendlyButton } from "@/components/calendly-button"

/**
 * Hero Component - Landing section with animated text and 3D robot
 * 
 * Features:
 * - Rotating text animation showcasing expertise
 * - Interactive 3D Spline robot
 * - Curved text loop decoration
 * - Statistics display
 * - CTA buttons for hiring and resume download
 * 
 * @component
 * @example
 * ```tsx
 * <Hero />
 * ```
 */
export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
      {/* Curved Text Loop - Top Left Corner - Behind Content - Hidden on Mobile */}
      <div className="hidden lg:block absolute w-[600px] origin-top-left" style={{ top: '264px', left: '40px', transform: 'rotate(-42deg)', zIndex: 0 }}>
        <CurvedLoop
          marqueeText="Code ✦ Create ✦ Deliver ✦ "
          speed={1.5}
          curveAmount={300}
          direction="left"
          interactive={false}
          variant="primary"
          size="md"
          position="top"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-0 items-center">
          {/* Left: Text Content - 65% */}
          <div className="space-y-6 text-center lg:text-left w-full lg:w-[65%] order-1">
            {/* Main Title with Rotating Text */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold text-muted-foreground">
                I'm Tariq Said
              </h2>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary min-h-[1.2em]">
                <RotatingText
                  texts={[
                    "Full-Stack Developer",
                    "AudioVisual Specialist",
                    "IT & DevOps Expert",
                    "Event Producer",
                    "Media Creator",
                    "AI Prompt Engineer",
                    "Certified Audio Tech",
                    "Conference Tech Director",
                    "Video Production Specialist"
                  ]}
                  interval={3500}
                />
              </h1>

              {/* Tagline */}
              <p className="text-xl md:text-2xl text-foreground/90 font-medium text-balance leading-relaxed pt-2">
                Transforming ideas into powerful digital experiences
              </p>
            </div>

            {/* Stats Section */}
            <div className="flex items-center gap-6 md:gap-8 pt-6 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary">15+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary">100+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
                <div className="text-xs md:text-sm text-muted-foreground">Available to Assist</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
              <CalendlyButton
                text="Hire Me - Book Meeting"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8"
              />
              <Link href="/TariqResume-Oct2025-final.pdf" download prefetch={false}>
                <Button size="lg" variant="outline" className="text-lg px-8 glass bg-transparent">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Robot - Free Floating - 35% + 15% scale + Heavy Crop + Flipped */}
          <div className="relative h-[400px] md:h-[450px] lg:h-[500px] w-full lg:w-[35%] order-2 overflow-hidden">
            <iframe 
              src='https://my.spline.design/genkubgreetingrobot-0wbWxIvMlpRXKyJYFVWuRblj/' 
              frameBorder='0' 
              className="absolute"
              title="Genku Robot - Welcome"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style={{ 
                background: 'transparent',
                pointerEvents: 'auto',
                border: 'none',
                outline: 'none',
                transform: 'scale(1.15) scaleX(-1)',
                width: '165%',
                height: '100%',
                left: '-45%',
                top: '0',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
