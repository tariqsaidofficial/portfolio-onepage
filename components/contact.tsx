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
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass border-border">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="glass-strong border-border"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="glass-strong border-border"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="glass-strong border-border min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="glass border-border">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@dxbmark.com" className="text-muted-foreground hover:text-primary">
                      info@dxbmark.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a href="http://wa.me/+971505121583" className="text-muted-foreground hover:text-primary">
                      +971 50 512 1583
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-border">
              <CardHeader>
                <CardTitle>Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/tariqsaidofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-strong rounded-lg hover:border-primary/50 border border-border transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tariqsaidofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-strong rounded-lg hover:border-primary/50 border border-border transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.behance.net/tariqsaidofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-strong rounded-lg hover:border-primary/50 border border-border transition-colors"
                  >
                    <Palette className="w-6 h-6" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-border bg-primary/10">
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
