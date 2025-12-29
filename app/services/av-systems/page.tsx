import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Calendar, Video, Mic, Users, Monitor } from "lucide-react"
import { CalendlyButton } from "@/components/calendly-button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ServiceSection, BulletList } from "@/components/service-section"
import { CitationBlock } from "@/components/citation-block"
import { ExampleGrid, type ProjectMetric } from "@/components/example-card"
import { MicroFAQSection, type FAQItem } from "@/components/micro-faq-section"

export const metadata: Metadata = {
  title: "AV Systems Services | Tariq Said - Professional Audiovisual Solutions",
  description: "Professional AV systems services by Tariq Said. Conference production, medical events, multi-camera setups, hybrid events. vMix, OBS, and AV integration expertise.",
  keywords: [
    "AV Systems Services",
    "Audiovisual Production Dubai",
    "Conference AV Setup",
    "Medical Event Production",
    "Multi-Camera Production",
    "Hybrid Events UAE",
    "vMix Production",
    "OBS Studio Setup",
    "AV Integration Services",
    "Professional Video Production",
    "Tariq Said AV",
    "DXBMark AV Services"
  ],
  openGraph: {
    title: "AV Systems Services | Tariq Said",
    description: "Professional audiovisual systems services. Conference production, medical events, multi-camera setups, and hybrid events with vMix and OBS expertise.",
    url: "https://portfolio.dxbmark.com/services/av-systems",
    type: "website",
  },
  alternates: {
    canonical: "https://portfolio.dxbmark.com/services/av-systems",
  },
}

export default function AVSystemsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AV Systems Services",
    "description": "Professional audiovisual systems services by Tariq Said. Conference production, medical events, multi-camera production, and hybrid events using vMix, OBS, and professional AV integration.",
    "provider": {
      "@type": "Person",
      "name": "Tariq Said",
      "url": "https://portfolio.dxbmark.com",
      "sameAs": [
        "https://github.com/tariqsaidofficial",
        "https://www.linkedin.com/in/tariqsaidofficial/"
      ]
    },
    "serviceType": "Audiovisual Production",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      {
        "@type": "Country", 
        "name": "Saudi Arabia"
      },
      {
        "@type": "Country",
        "name": "Kuwait"
      },
      {
        "@type": "Country",
        "name": "Qatar"
      },
      {
        "@type": "Country",
        "name": "Bahrain"
      },
      {
        "@type": "Country",
        "name": "Oman"
      }
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Conference AV Production",
        "description": "Professional conference setup with multi-camera production and live streaming",
        "priceRange": "$3,000 - $12,000",
        "priceCurrency": "USD",
        "deliveryLeadTime": "P1W/P3W"
      },
      {
        "@type": "Offer", 
        "name": "Medical Event Production",
        "description": "Specialized medical conference and training event AV systems",
        "priceRange": "$5,000 - $20,000",
        "priceCurrency": "USD",
        "deliveryLeadTime": "P2W/P4W"
      },
      {
        "@type": "Offer",
        "name": "Hybrid Event Solutions", 
        "description": "Complete hybrid event production with streaming and interaction capabilities",
        "priceRange": "$8,000 - $30,000",
        "priceCurrency": "USD",
        "deliveryLeadTime": "P3W/P6W"
      }
    ]
  }

  // Project examples with relevance explanations
  const projectExamples = [
    {
      title: "Medical Conference Production",
      metrics: [
        { label: "500+ attendees", value: "Large-scale medical conference" },
        { label: "4-camera setup", value: "Multi-angle coverage" },
        { label: "Live streaming", value: "Global audience reach" },
        { label: "Interactive Q&A", value: "Real-time engagement" }
      ] as ProjectMetric[],
      technologies: ["vMix Pro", "Professional cameras", "Audio mixing", "Streaming platforms"],
      url: "#medical-events",
      relevanceExplanation: "Demonstrates expertise in medical event production with complex AV requirements, multi-camera coordination, and professional streaming capabilities essential for healthcare conferences and training sessions."
    },
    {
      title: "Corporate Hybrid Event",
      metrics: [
        { label: "200+ in-person", value: "Physical attendees" },
        { label: "1000+ online", value: "Virtual participants" },
        { label: "6-hour duration", value: "Full-day event coverage" },
        { label: "Multi-language", value: "Translation support" }
      ] as ProjectMetric[],
      technologies: ["OBS Studio", "NDI integration", "Audio systems", "Interactive platforms"],
      url: "#hybrid-events",
      relevanceExplanation: "Showcases hybrid event capabilities combining physical and virtual audiences with seamless integration, demonstrating scalability and technical expertise for modern corporate events."
    },
    {
      title: "Multi-Camera Production Setup",
      metrics: [
        { label: "8-camera system", value: "Comprehensive coverage" },
        { label: "Real-time switching", value: "Live production" },
        { label: "4K recording", value: "High-quality output" },
        { label: "Backup systems", value: "Redundancy planning" }
      ] as ProjectMetric[],
      technologies: ["vMix 4K", "PTZ cameras", "Video switchers", "Recording systems"],
      url: "#multi-camera",
      relevanceExplanation: "Illustrates advanced multi-camera production capabilities with professional switching and recording, relevant for high-stakes events requiring broadcast-quality production values."
    }
  ]

  // Micro-FAQ items
  const faqItems: FAQItem[] = [
    {
      question: "How long does a typical AV systems project take to set up?",
      answer: "Setup duration varies by complexity: simple conference setups require 1-2 days, medical events need 3-5 days for equipment testing and rehearsals, while complex multi-camera productions require 1-2 weeks including planning, setup, and testing phases."
    },
    {
      question: "Do you work with existing event teams or provide complete AV management?",
      answer: "I work both ways - collaborating with existing event teams as the AV specialist or providing complete AV management from planning to execution. Communication includes pre-event meetings, technical rehearsals, and real-time coordination during events."
    },
    {
      question: "What ongoing support is provided during and after AV events?",
      answer: "All events include on-site technical support throughout the duration, real-time troubleshooting, and post-event equipment breakdown. Extended support packages available for multi-day events and follow-up technical consultations."
    }
  ]

  return (
    <>
      {/* Structured Data */}
      <Script
        id="av-systems-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 text-center lg:text-left w-full lg:w-[60%]">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium">
                <Video className="w-4 h-4 text-primary" />
                Professional AV Systems
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Elevate Your Events with
                  <span className="text-primary block">Professional AV</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Transform your conferences, medical events, and productions with expert audiovisual systems. 
                  From multi-camera setups to hybrid event solutions.
                </p>
              </div>

              {/* Key Stats */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">10+ Years AV Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">50+ Events Produced</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">UAE/GCC Expertise</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <CalendlyButton
                  text="Plan Your Event"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8"
                />
                <Link href="#examples">
                  <Button size="lg" variant="outline" className="glass text-lg px-8">
                    <Monitor className="w-5 h-5 mr-2" />
                    View Productions
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Visual Elements */}
            <div className="w-full lg:w-[40%] relative">
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                {/* AV Services Cards */}
                <div className="glass p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Video className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Production</h3>
                    <p className="text-xs text-muted-foreground">vMix, OBS, Multi-cam</p>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Mic className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Audio</h3>
                    <p className="text-xs text-muted-foreground">Mixing, Recording</p>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Events</h3>
                    <p className="text-xs text-muted-foreground">Conferences, Medical</p>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Monitor className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Streaming</h3>
                    <p className="text-xs text-muted-foreground">Live, Hybrid</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-12 glass p-3 rounded-lg">
                <div className="text-xl font-bold text-primary">4K</div>
                <div className="text-xs text-muted-foreground">Production Quality</div>
              </div>

              <div className="absolute -bottom-9 -left-19 glass p-3 rounded-lg">
                <div className="text-xl font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground">Event Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-20 max-w-6xl relative z-10">
        {/* Citation-Friendly Definition */}
        <div className="mb-12 md:mb-16 text-center">
          <CitationBlock variant="definition">
            "AV systems services encompass professional audiovisual production for conferences, medical events, multi-camera setups, and hybrid events using advanced technologies like vMix and OBS to deliver seamless, high-quality event experiences with comprehensive technical support."
          </CitationBlock>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Professional Audiovisual Solutions</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From intimate conferences to large-scale medical events, I provide comprehensive AV systems 
            that ensure your message reaches every audience member with crystal clarity and professional presentation.
          </p>
        </div>

        {/* What this service is */}
        <ServiceSection title="What this service is">
          <div className="text-center">
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
              Professional audiovisual systems services covering conferences, medical events, multi-camera production, 
              and hybrid events. I specialize in vMix and OBS production workflows, professional camera systems, 
              audio mixing, live streaming, and AV integration for seamless event execution.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Services include complete event planning, equipment setup, technical rehearsals, live production 
              management, streaming coordination, recording, and post-event support with comprehensive documentation.
            </p>
          </div>
        </ServiceSection>

        {/* When to choose this service */}
        <ServiceSection title="When to choose this service">
          <BulletList items={[
            "You need professional conference production with multi-camera coverage and live streaming capabilities",
            "Your medical event requires specialized AV setup for presentations, demonstrations, and remote participation",
            "You want hybrid event solutions combining in-person and virtual audiences seamlessly",
            "Your production demands broadcast-quality output with professional switching and recording",
            "You require experienced AV integration with existing venue systems and technical infrastructure",
            "You need reliable technical support throughout your event with backup systems and contingency planning"
          ]} />
        </ServiceSection>

        {/* When NOT to choose this service */}
        <ServiceSection title="When this service is NOT appropriate">
          <BulletList 
            variant="negative"
            items={[
              "You need simple presentation setup that can be handled with basic projector and microphone systems available at most venues",
              "Your event is a small meeting (under 20 people) without streaming, recording, or multi-camera requirements",
              "You're looking for permanent AV installation or ongoing facility management rather than event-specific production services"
            ]} 
          />
        </ServiceSection>

        {/* What you receive (Deliverables) */}
        <ServiceSection title="What you receive (Deliverables)">
          <BulletList items={[
            "Complete equipment setup including cameras, audio systems, lighting, and streaming infrastructure",
            "Technical documentation covering equipment specifications, signal flow diagrams, and operational procedures",
            "Professional production management with real-time switching, audio mixing, and quality monitoring",
            "Live streaming setup with platform integration, backup streams, and audience interaction capabilities",
            "High-quality recordings in multiple formats with post-production editing and delivery options",
            "Comprehensive technical support including on-site technicians, troubleshooting, and backup equipment",
            "Post-event breakdown with equipment inventory, performance reports, and recommendations for future events"
          ]} />
          <div className="mt-8 p-6 glass rounded-xl">
            <h3 className="font-semibold text-lg mb-3">Final Output Format</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              All events are delivered with complete technical documentation, high-quality recordings in client-specified formats, 
              streaming archives, equipment inventory reports, and detailed handover materials including configuration files, 
              contact information for ongoing support, and recommendations for future productions.
            </p>
          </div>
        </ServiceSection>

        {/* Estimated timeline */}
        <ServiceSection title="Estimated timeline">
          {/* Workflow Summary */}
          <div className="mb-8 p-6 glass rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Production Workflow</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Each AV project follows a structured approach: <strong>Planning & Site Survey</strong> (requirements analysis, 
              venue assessment, equipment planning), <strong>Setup & Testing</strong> (equipment installation, 
              system integration, technical rehearsals), <strong>Production & Support</strong> (live event management, 
              real-time monitoring, technical support), and <strong>Breakdown & Delivery</strong> (equipment removal, 
              content delivery, documentation handover).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="glass p-6 md:p-8 rounded-2xl text-center">
              <h3 className="font-semibold text-primary mb-3 text-lg">Conference Setup</h3>
              <p className="text-2xl md:text-3xl font-bold mb-4">1-3 days</p>
              <p className="text-sm text-muted-foreground">Standard conferences, presentations, panel discussions</p>
            </div>
            <div className="glass p-6 md:p-8 rounded-2xl text-center">
              <h3 className="font-semibold text-primary mb-3 text-lg">Medical Events</h3>
              <p className="text-2xl md:text-3xl font-bold mb-4">3-7 days</p>
              <p className="text-sm text-muted-foreground">Specialized medical conferences, training, demonstrations</p>
            </div>
            <div className="glass p-6 md:p-8 rounded-2xl text-center">
              <h3 className="font-semibold text-primary mb-3 text-lg">Multi-Camera Production</h3>
              <p className="text-2xl md:text-3xl font-bold mb-4">1-2 weeks</p>
              <p className="text-sm text-muted-foreground">Complex productions, hybrid events, broadcast-quality</p>
            </div>
          </div>
        </ServiceSection>

        {/* Typical price range */}
        <ServiceSection title="Typical price range">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="glass p-6 md:p-8 rounded-2xl text-center">
              <h3 className="font-semibold text-primary mb-3 text-lg">Basic Events</h3>
              <p className="text-2xl md:text-3xl font-bold mb-2">$3,000 - $8,000</p>
              <p className="text-sm text-muted-foreground">AED 11,000 - 30,000</p>
            </div>
            <div className="glass p-6 md:p-8 rounded-2xl text-center">
              <h3 className="font-semibold text-primary mb-3 text-lg">Professional Events</h3>
              <p className="text-2xl md:text-3xl font-bold mb-2">$8,000 - $20,000</p>
              <p className="text-sm text-muted-foreground">AED 30,000 - 75,000</p>
            </div>
            <div className="glass p-6 md:p-8 rounded-2xl text-center">
              <h3 className="font-semibold text-primary mb-3 text-lg">Enterprise Productions</h3>
              <p className="text-2xl md:text-3xl font-bold mb-2">$20,000+</p>
              <p className="text-sm text-muted-foreground">AED 75,000+</p>
            </div>
          </div>
          
          {/* Pricing Factors */}
          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-4 text-center">Factors affecting pricing</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <BulletList items={[
                "Event duration and complexity of production requirements",
                "Number of cameras, audio sources, and streaming destinations",
                "Venue size, technical infrastructure, and equipment transportation needs"
              ]} />
              <BulletList items={[
                "Specialized equipment requirements and backup system redundancy",
                "On-site technical staff requirements and support duration",
                "Post-production editing, content delivery, and ongoing support needs"
              ]} />
            </div>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-6 max-w-3xl mx-auto">
            * Prices vary based on event complexity, duration, equipment requirements, and venue specifications. Contact for detailed quote.
          </p>
        </ServiceSection>

        {/* Relevant examples */}
        <ServiceSection title="Relevant examples" titleLevel="h2">
          <ExampleGrid examples={projectExamples} />
        </ServiceSection>

        {/* Micro-FAQ Section */}
        <MicroFAQSection faqs={faqItems} />

        {/* Citation-Friendly Summary */}
        <CitationBlock variant="summary">
          "In summary, AV systems services provide comprehensive audiovisual production solutions for conferences, medical events, and multi-camera productions, delivering professional-grade equipment setup, technical support, and high-quality content delivery with complete documentation and ongoing support tailored to event requirements."
        </CitationBlock>

        {/* CTA Section */}
        <section className="text-center py-12 md:py-16 glass rounded-2xl max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to elevate your next event?</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Book a free consultation to discuss your AV systems needs and event requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyButton
              text="Book AV Consultation"
              size="lg"
              className="bg-primary hover:bg-primary/90"
            />
            <Link href="/#contact">
              <Button size="lg" variant="outline" className="glass">
                Send Message
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  )
}