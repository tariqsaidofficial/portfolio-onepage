"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MessageSquare, Github, Linkedin, Upload } from "lucide-react"

// Category options with their subcategories
const CATEGORIES: Record<string, {
  label: string
  subcategories: string[]
  hasProjectType?: boolean
  hasFileUpload?: boolean
  hideSubcategory?: boolean
}> = {
  "general": {
    label: "General Inquiries",
    subcategories: [],
    hideSubcategory: true
  },
  "project": {
    label: "Project Request / Quotation",
    subcategories: ["Estimate Request", "Request for Quotation", "Project Proposal"],
    hasProjectType: true
  },
  "collaboration": {
    label: "Collaboration / Partnership",
    subcategories: ["Collaboration Opportunity", "Creative Partnership Inquiry"]
  },
  "job": {
    label: "Job / Hiring Opportunity",
    subcategories: ["Employment Inquiry", "Ask for Vacancy", "Freelance"],
    hasFileUpload: true
  },
  "feedback": {
    label: "Feedback / Complaint / Support",
    subcategories: ["New Client Feedback", "Issue Report", "Support Request"]
  }
}

const PROJECT_TYPES = [
  "Web Development",
  "Mobile App Development",
  "Audio-Visual Production",
  "IT Infrastructure",
  "System Integration",
  "Other"
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    subcategory: "",
    projectType: "",
    message: "",
    cvFile: null as File | null,
  })
  const [turnstileToken, setTurnstileToken] = useState<string>("")
  const [turnstileWidgetId, setTurnstileWidgetId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")
  
  // Render Turnstile widget using explicit rendering
  useEffect(() => {
    const renderTurnstile = () => {
      if (typeof window !== 'undefined' && (window as any).turnstile && !turnstileWidgetId) {
        const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
        
        // Validate site key is configured
        if (!siteKey) {
          console.error('NEXT_PUBLIC_TURNSTILE_SITE_KEY is not configured')
          return
        }
        
        const widgetId = (window as any).turnstile.render('#turnstile-container', {
          sitekey: siteKey,
          theme: 'dark',
          callback: (token: string) => {
            setTurnstileToken(token)
          },
          'error-callback': () => {
            setTurnstileToken("")
          },
        })
        setTurnstileWidgetId(widgetId)
      }
    }

    // Wait for turnstile to be available
    if (typeof window !== 'undefined') {
      if ((window as any).turnstile) {
        renderTurnstile()
      } else {
        // Poll for turnstile availability
        const interval = setInterval(() => {
          if ((window as any).turnstile) {
            renderTurnstile()
            clearInterval(interval)
          }
        }, 100)
        
        return () => clearInterval(interval)
      }
    }
  }, [turnstileWidgetId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate Turnstile
    if (!turnstileToken) {
      setSubmitStatus("error")
      setErrorMessage("Please complete the security verification")
      return
    }
    
    setIsLoading(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      // Use FormData for file upload support
      const submitData = new FormData()
      submitData.append("name", formData.name)
      submitData.append("email", formData.email)
      submitData.append("phone", formData.phone)
      submitData.append("category", formData.category)
      submitData.append("subcategory", formData.subcategory)
      submitData.append("projectType", formData.projectType)
      submitData.append("message", formData.message)
      submitData.append("turnstileToken", turnstileToken)
      
      if (formData.cvFile) {
        submitData.append("cvFile", formData.cvFile)
      }

      const response = await fetch("/api/send-email", {
        method: "POST",
        body: submitData,
      })

      if (response.ok) {
        setSubmitStatus("success")
        setErrorMessage("")
        setFormData({ 
          name: "", 
          email: "", 
          phone: "", 
          category: "",
          subcategory: "",
          projectType: "",
          message: "",
          cvFile: null
        })
        setTurnstileToken("")
        
        // Reset Turnstile widget
        if (typeof window !== 'undefined' && (window as any).turnstile && turnstileWidgetId) {
          (window as any).turnstile.reset(turnstileWidgetId)
        }
      } else {
        // Parse error response
        const errorData = await response.json().catch(() => ({ error: "Failed to send message" }))
        setSubmitStatus("error")
        setErrorMessage(errorData.error || "Failed to send message. Please try again.")
        
        // Log error for debugging (development only)
        if (process.env.NODE_ENV === "development") {
          console.error("Contact form error:", errorData)
        }
      }
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("Network error. Please check your connection and try again.")
      
      // Log error for debugging (development only)
      if (process.env.NODE_ENV === "development") {
        console.error("Contact form exception:", error)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleCategoryChange = (value: string) => {
    const selectedCat = CATEGORIES[value as keyof typeof CATEGORIES]
    setFormData({ 
      ...formData, 
      category: value, 
      subcategory: selectedCat?.hideSubcategory ? "General Inquiry" : "", 
      projectType: "",
      cvFile: null
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type === "application/pdf" && file.size <= 2 * 1024 * 1024) {
      setFormData({ ...formData, cvFile: file })
    } else {
      alert("Please upload a PDF file (max 2MB)")
    }
  }

  const selectedCategory = formData.category ? CATEGORIES[formData.category as keyof typeof CATEGORIES] : null

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="contact-form-wrapper">
            <Card className="contact-form-card">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
                  {/* Name */}
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

                  {/* Email */}
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

                  {/* Phone */}
                  <div className="form-field-group">
                    <Input
                      type="tel"
                      placeholder="Your Phone Number (Optional)"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="contact-input bg-transparent border-border/50 hover:border-primary/50 focus:border-primary transition-all duration-200"
                      disabled={isLoading}
                    />
                  </div>

                  {/* Category */}
                  <div className="form-field-group">
                    <Select value={formData.category} onValueChange={handleCategoryChange} disabled={isLoading} required>
                      <SelectTrigger className="contact-input bg-transparent border-border/50 hover:border-primary/50 focus:border-primary transition-all duration-200">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(CATEGORIES).map(([key, value]) => (
                          <SelectItem key={key} value={key}>
                            {value.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Subcategory - appears when category is selected and not hidden */}
                  {selectedCategory && !selectedCategory.hideSubcategory && (
                    <div className="form-field-group">
                      <Select 
                        value={formData.subcategory} 
                        onValueChange={(value) => setFormData({ ...formData, subcategory: value })}
                        disabled={isLoading}
                        required
                      >
                        <SelectTrigger className="contact-input bg-transparent border-border/50 hover:border-primary/50 focus:border-primary transition-all duration-200">
                          <SelectValue placeholder="Select Subtype" />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedCategory.subcategories.map((sub) => (
                            <SelectItem key={sub} value={sub}>
                              {sub}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* Project Type - appears only for Project category */}
                  {selectedCategory?.hasProjectType && (
                    <div className="form-field-group">
                      <Select 
                        value={formData.projectType} 
                        onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                        disabled={isLoading}
                        required
                      >
                        <SelectTrigger className="contact-input bg-transparent border-border/50 hover:border-primary/50 focus:border-primary transition-all duration-200">
                          <SelectValue placeholder="Select Project Type" />
                        </SelectTrigger>
                        <SelectContent>
                          {PROJECT_TYPES.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* CV Upload - appears only for Job category */}
                  {selectedCategory?.hasFileUpload && (
                    <div className="form-field-group">
                      <label className="flex items-center gap-2 px-4 py-2 border border-border/50 rounded-md cursor-pointer hover:border-primary/50 transition-all duration-200 bg-transparent">
                        <Upload className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {formData.cvFile ? formData.cvFile.name : "Upload CV (PDF, max 2MB)"}
                        </span>
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={handleFileChange}
                          className="hidden"
                          disabled={isLoading}
                        />
                      </label>
                    </div>
                  )}

                  {/* Message */}
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
                  
                  {/* Cloudflare Turnstile - Security Verification */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Security verification required</span>
                    </div>
                    <div className="flex justify-center p-4 glass rounded-lg border border-border/50">
                      <div id="turnstile-container"></div>
                    </div>
                  </div>
                  
                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <p className="text-sm text-green-500 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Message sent successfully! I'll get back to you soon.
                      </p>
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <p className="text-sm text-red-500 flex items-start gap-2">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{errorMessage || "Failed to send message. Please try again or contact me directly."}</span>
                      </p>
                    </div>
                  )}
                  <Button 
                    type="submit" 
                    className="contact-submit-btn w-full bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed" 
                    disabled={isLoading || !turnstileToken}
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </span>
                    )}
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
                    <a href="mailto:info@dxbmark.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Send email to info@dxbmark.com">
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
                    <a href="http://wa.me/+971505121583" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Contact via WhatsApp">
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
                    <svg viewBox="1 1 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
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
