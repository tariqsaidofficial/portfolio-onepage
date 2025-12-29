import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function Services() {
  const tiers = [
    {
      name: "Starter",
      description: "Perfect for small projects and MVPs",
      features: [
        "Single-page application",
        "Basic AV integration",
        "Email support",
        "Responsive design",
        "2 weeks delivery",
      ],
      cta: "Start Project",
      available: true,
    },
    {
      name: "Professional",
      description: "For growing businesses and complex needs",
      features: [
        "Multi-page application",
        "Advanced AV systems",
        "Priority support",
        "Custom integrations",
        "DevOps setup",
      ],
      cta: "Coming Soon",
      available: false,
    },
    {
      name: "Enterprise",
      description: "Full-scale solutions for large organisations",
      features: [
        "Custom platform development",
        "Complete AV infrastructure",
        "24/7 dedicated support",
        "Team training",
        "Ongoing maintenance",
      ],
      cta: "Coming Soon",
      available: false,
    },
  ]

  return (
    <section id="services" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Services & Pricing</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`glass border-border ${
                tier.available ? "cursor-pointer" : "opacity-75"
              }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{tier.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full transition-all duration-200 ${
                    tier.available ? "bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30" : "bg-secondary hover:bg-secondary/90"
                  }`}
                  disabled={!tier.available}
                >
                  {tier.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
