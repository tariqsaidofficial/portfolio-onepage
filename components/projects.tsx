import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      name: "NFC Manager",
      description:
        "Android application for secure NFC tag management with advanced encryption and user-friendly interface.",
      impact: "Enhanced security for contactless operations",
      link: "#",
    },
    {
      name: "DXBMark",
      description: "Co-founded and led development of comprehensive platform serving 3,000+ users with 98% uptime.",
      impact: "Lead Developer & Co-Founder (2024-2025)",
      link: "#",
    },
    {
      name: "Media Server-as-a-Service",
      description: "Built scalable streaming solution handling 500+ concurrent streams with optimised delivery.",
      impact: "Revolutionised content delivery infrastructure",
      link: "#",
    },
    {
      name: "Northern Estates",
      description:
        "Real-estate platform with 10,000+ users and 500+ property listings, featuring advanced search and filtering.",
      impact: "Streamlined property discovery and management",
      link: "#",
    },
    {
      name: "Travelify",
      description:
        "Integrated travel application combining hotels, e-commerce, and digital services in one seamless platform.",
      impact: "Unified travel experience for modern travellers",
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Projects & Achievements</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.name} className="glass border-border group cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="group-hover:text-primary transition-colors">{project.name}</span>
                  <ExternalLink className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-primary font-semibold">{project.impact}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
