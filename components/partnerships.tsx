"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Users, Shield, Globe, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

/**
 * Partnerships Component - Key partnerships and trust signals
 * 
 * Features:
 * - Showcase key business partnerships
 * - Trust signals for business credibility
 * - Trust & reliability metrics
 * 
 * @component
 */
export function Partnerships() {
  const keyPartners = [
    {
      name: "MWHEBA Agency",
      url: "https://mwheba.com",
      logo: "/mwheba-agency-logo.png",
      description: "Digital Marketing & Branding Agency"
    },
    {
      name: "MWHEBA Hosting",
      url: "https://mwheba.net",
      logo: "/mwheba-hosting-logo.png",
      description: "Web Hosting & Infrastructure Services"
    },
    {
      name: "Tawk.to",
      url: "https://www.tawk.to/?pid=ep397g7",
      logo: "/tawk-partner-badge.png",
      description: "Live Chat & Customer Support Platform"
    }
  ]

  return (
    <section id="partnerships" className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Partnerships & Trust Signals
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building reliable solutions through strategic partnerships and established presence 
            across UAE, GCC, and international markets.
          </p>
        </div>

        {/* Key Partners */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center">Key Partners</h3>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {keyPartners.map((partner, index) => (
              <Card key={index} className="glass border-border overflow-hidden group hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  {/* Partner Logo */}
                  <div className="mb-4 flex items-center justify-center h-16">
                    <Link href={partner.url} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={150}
                        height={60}
                        className="max-h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  </div>

                  {/* Partner Info */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {partner.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {partner.description}
                    </p>
                    <Link
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      Visit Website
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="glass rounded-xl p-6 md:p-8 mb-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">Trust & Reliability Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Platform Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Markets Served</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Ready to Partner with Us?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our network of successful partnerships and experience reliable, 
            professional service backed by industry certifications and proven track record.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Partnership Discussion
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="glass">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}