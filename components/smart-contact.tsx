"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Github, Linkedin } from "lucide-react"
import { SmartContactForm } from "@/components/smart-contact-form"

export function SmartContact() {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Smart Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <SmartContactForm />
          </div>

          {/* Contact Info Sidebar - Takes 1 column */}
          <div className="space-y-6">
            <Card className="glass border-border group cursor-default">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a 
                      href="mailto:info@dxbmark.com" 
                      className="text-muted-foreground hover:text-primary transition-colors" 
                      aria-label="Send email to info@dxbmark.com"
                    >
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
                    <a 
                      href="http://wa.me/+971505121583" 
                      className="text-muted-foreground hover:text-primary transition-colors" 
                      aria-label="Contact via WhatsApp"
                    >
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
                    aria-label="Visit Tariq Said's GitHub profile"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tariqsaidofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-lg hover:border-primary/50 border border-border transition-all duration-200 hover:scale-110"
                    aria-label="Visit Tariq Said's LinkedIn profile"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.behance.net/tariqsaidofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-lg hover:border-primary/50 border border-border transition-all duration-200 hover:scale-110"
                    aria-label="Visit Tariq Said's Behance portfolio"
                  >
                    <svg 
                      viewBox="1 1 22 22" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinejoin="round" 
                      className="w-6 h-6" 
                      aria-hidden="true"
                    >
                      <path d="M20.3331 7.66665H14.4998V6H20.3331V7.66665ZM21.7714 15.9999C21.4031 17.0807 20.0806 18.4999 17.5206 18.4999C14.959 18.4999 12.884 17.059 12.884 13.7707C12.884 10.5125 14.8215 8.83747 17.439 8.83747C20.0073 8.83747 21.5756 10.3225 21.9181 12.5258C21.9831 12.9474 22.0089 13.5158 21.9973 14.3091H15.3082C15.4165 16.9849 18.2106 17.069 19.1315 15.9999H21.7714ZM15.3665 12.6666H19.5039C19.4164 11.3774 18.5573 10.8174 17.4398 10.8174C16.2181 10.8174 15.5423 11.4574 15.3665 12.6666ZM7.38824 18.4899H1.99997V6.0175H7.79407C12.3574 6.085 12.444 10.5541 10.0607 11.7724C12.9449 12.8224 13.0415 18.4899 7.38824 18.4899V18.4899ZM4.49994 10.9999H7.48658C9.57655 10.9999 9.90822 8.49997 7.22658 8.49997H4.49994V10.9999V10.9999ZM7.32574 13.4999H4.49994V16.0132H7.28408C9.82988 16.0132 9.67405 13.4999 7.32574 13.4999V13.4999Z"/>
                    </svg>
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
