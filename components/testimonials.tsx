import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Tariq delivered exceptional technical excellence on our platform. His ability to solve complex problems and maintain 98% uptime is remarkable.",
      author: "Sarah Johnson",
      role: "CTO, Tech Startup",
    },
    {
      quote:
        "Working with Tariq on our event AV systems was transformative. His creative problem-solving and reliability made our conference a huge success.",
      author: "Michael Chen",
      role: "Event Director",
    },
    {
      quote:
        "The streaming infrastructure Tariq built handles our entire content delivery flawlessly. His expertise in both software and media is unmatched.",
      author: "Emma Williams",
      role: "Head of Operations",
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Testimonials</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass border-border">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
