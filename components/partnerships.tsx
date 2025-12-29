"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Users, Shield, Globe, Zap } from "lucide-react"
import Link from "next/link"

/**
 * Partnerships Component - Trust signals and business partnerships
 * 
 * Features:
 * - Showcase key partnerships and collaborations
 * - Trust signals for business credibility
 * - Technology partnerships and integrations
 * - Geographic coverage and market presence
 * 
 * @component
 */
export function Partnerships() {
  const partnerships = [
    {
      category: "Technology Partners",
      icon: <Zap className="w-6 h-6" />,
      description: "Strategic partnerships with leading technology providers",
      partners: [
        { name: "Google Cloud", type: "Cloud Infrastructure" },
        { name: "AWS", type: "Cloud Services" },
        { name: "Crestron", type: "AV Systems" },
        { name: "Extron", type: "AV Integration" }
      ]
    },
    {
      category: "Regional Presence",
      icon: <Globe className="w-6 h-6" />,
      description: "Established presence across key markets",
      partners: [
        { name: "UAE", type: "Primary Base" },
        { name: "Egypt", type: "Development Hub" },
        { name: "GCC", type: "Regional Coverage" },
        { name: "UK", type: "International Reach" }
      ]
    },
    {
      category: "Industry Collaborations",
      icon: <Users className="w-6 h-6" />,
      description: "Working with leading organizations and institutions",
      partners: [
        { name: "Healthcare Institutions", type: "Medical AV Systems" },
        { name: "Educational Organizations", type: "E-Learning Platforms" },
        { name: "Government Entities", type: "Secure Infrastructure" },
        { name: "Enterprise Clients", type: "Custom Solutions" }
      ]
    },
    {
      category: "Security & Compliance",
      icon: <Shield className="w-6 h-6" />,
      description: "Certified and compliant with industry standards",
      partners: [
        { name: "ISO Standards", type: "Quality Management" },
        { name: "Security Protocols", type: "Data Protection" },
        { name: "Industry Certifications", type: "Professional Standards" },
        { name: "Compliance Frameworks", type: "Regulatory Adherence" }
      ]
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
            Building reliable solutions through strategic partnerships, industry certifications, 
            and established presence across UAE, GCC, and international markets.
          </p>
        </div>

        {/* Partnerships Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {partnerships.map((partnership, index) => (
            <Card key={index} className="glass border-border overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    {partnership.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {partnership.category}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {partnership.description}
                    </p>
                  </div>
                </div>

                {/* Partners List */}
                <div className="space-y-3">
                  {partnership.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                      <span className="font-medium text-sm">{partner.name}</span>
                      <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded-md">
                        {partner.type}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
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