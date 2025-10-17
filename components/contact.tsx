"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Github, Linkedin, Palette } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="contact-form-wrapper">
            <Card className="contact-form-card">
              <CardHeader>
                <CardTitle className="text-primary">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="form-field-group">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="contact-input bg-transparent border-border/50 hover:border-primary/50 focus:border-primary transition-all duration-200"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="form-field-group">
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="contact-input bg-transparent border-border/50 hover:border-primary/50 focus:border-primary transition-all duration-200"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="form-field-group">
                    <Input
                      type="tel"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="contact-input bg-transparent border-border/50 hover:border-primary/50 focus:border-primary transition-all duration-200"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="form-field-group">
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="contact-input bg-transparent border-border/50 min-h-[150px] hover:border-primary/50 focus:border-primary transition-all duration-200"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  {submitStatus === "success" && (
                    <p className="text-sm text-green-500">Message sent successfully! I'll get back to you soon.</p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-sm text-red-500">
                      Failed to send message. Please try again or contact me directly.
                    </p>
                  )}
                  <Button 
                    type="submit" 
                    className="contact-submit-btn w-full bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 transition-all duration-200 active:scale-95" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="glass border-border group cursor-default">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@dxbmark.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@dxbmark.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a href="http://wa.me/+971505121583" className="text-muted-foreground hover:text-primary transition-colors">
                      +971 50 512 1583
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-border">
              <CardHeader>
                <CardTitle className="text-primary">Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/tariqsaidofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-lg hover:border-primary/50 border border-border transition-all duration-200 hover:scale-110"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tariqsaidofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-lg hover:border-primary/50 border border-border transition-all duration-200 hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.behance.net/tariqsaidofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-lg hover:border-primary/50 border border-border transition-all duration-200 hover:scale-110"
                  >
                    <Palette className="w-6 h-6" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-primary/20">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Audio-Visual Specialist | Media Technician</span>
                  <br />
                  Freelance filmmaker and video editor based in Dubai. Directed major events including the Mediterranean
                  Minimally Invasive Surgery Congress and Egyptian Congress of Pediatric Pulmonology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
