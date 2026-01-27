"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { 
  Sparkles, 
  Upload, 
  CheckCircle2, 
  Lightbulb,
  Zap,
  MessageSquare
} from "lucide-react"

// Message templates based on category - Client questions and requests
const MESSAGE_TEMPLATES = {
  "web-development": [
    "What's the cost and timeline for developing a professional website?",
    "Can you help me build an e-commerce store with secure payment integration?",
    "I need a fast, mobile-responsive website. Can you assist?",
    "What web development services do you offer? Does it include hosting?",
    "I have a ready design. Can you convert it into a functional website?",
  ],
  "video-production": [
    "I need professional video shooting. How many seconds/minutes can you deliver?",
    "What's the cost for video editing? I have footage that needs professional editing.",
    "Can you create a promotional video for my business? What's the timeline?",
    "I need motion graphics and animation for a 30-second video. What are your rates?",
    "Do you offer complete video production from concept to final delivery?",
  ],
  "av-production": [
    "What's the cost for filming and covering a 3-hour event?",
    "Do you provide live streaming services for conferences and events?",
    "I need professional video editing for a 5-minute video. What are your rates?",
    "Can you provide audio and lighting equipment for a large event?",
    "I have raw footage. Can you edit it and add professional effects?",
  ],
  "it-consultancy": [
    "I need to set up an internal network for a small office. Can you help?",
    "What's the cost of setting up a server and database for a medium-sized company?",
    "Do you offer regular IT maintenance and support services?",
    "We need consultation on information security and data protection. Available?",
    "We have network infrastructure issues. Can you assess and fix them?",
  ],
  "mobile-app": [
    "What's the cost of developing a mobile app for iOS and Android?",
    "Can you develop an e-commerce mobile app?",
    "I need a mobile app with admin panel. What's the expected timeline?",
    "Do you use Flutter or React Native for development?",
    "I have an app idea. Can you help me bring it to life?",
  ],
  "system-integration": [
    "We need to integrate multiple systems in our company. Can you help?",
    "Do you offer system integration and API services?",
    "We have a legacy system and want to connect it to a new one. Possible?",
    "What's the cost of setting up an integrated project management system?",
  ],
  "job-opportunity": [
    "I'm interested in freelance opportunities. Are you currently hiring?",
    "I'd like to discuss potential collaboration on upcoming projects.",
    "Are you open to part-time or contract work arrangements?",
    "I have relevant experience and would love to explore working together.",
    "Can we schedule a call to discuss potential opportunities?",
  ],
  "collaboration": [
    "Are you interested in collaborating on a joint technical project?",
    "I'm looking for a technical partner for a startup project. Interested?",
    "Can we collaborate to offer integrated services to clients?",
    "I have a project idea and need your technical expertise. Open to discuss?",
  ],
  "general": [
    "Can I get a free consultation for my project?",
    "What services do you offer and what are the approximate costs?",
    "Do you work with clients outside the UAE?",
    "What's the expected timeline for a medium-sized project?",
    "Do you provide warranty or technical support after delivery?",
  ],
}

// Auto-suggestions based on project type
const PROJECT_SUGGESTIONS = {
  "Web Development": {
    keywords: ["responsive", "modern", "SEO", "performance", "mobile-friendly"],
    questions: ["What's your timeline?", "Do you have a design ready?", "What's your budget range?"],
  },
  "Mobile App Development": {
    keywords: ["iOS", "Android", "cross-platform", "Flutter", "React Native"],
    questions: ["Which platforms?", "Do you need backend?", "Any specific features?"],
  },
  "Video Production": {
    keywords: ["shooting", "editing", "motion graphics", "animation", "promotional"],
    questions: ["How many seconds/minutes?", "What's the video purpose?", "Do you have a script?", "Delivery deadline?"],
  },
  "Audio-Visual Production": {
    keywords: ["event coverage", "live streaming", "video editing", "4K", "professional"],
    questions: ["Event date?", "Duration?", "Location?", "Equipment needed?"],
  },
  "IT Infrastructure": {
    keywords: ["server setup", "network", "security", "monitoring", "backup"],
    questions: ["Current infrastructure?", "Team size?", "Budget?", "Timeline?"],
  },
}
export function SmartContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    category: "",
    projectType: "",
    message: "",
    cvFile: null as File | null,
    agreeToPrivacy: false,
  })

  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [formProgress, setFormProgress] = useState(0)
  const [smartHints, setSmartHints] = useState<string[]>([])
  const [turnstileToken, setTurnstileToken] = useState<string>("")
  const [turnstileWidgetId, setTurnstileWidgetId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")

  // Calculate form completion progress
  useEffect(() => {
    const fields = [
      formData.name,
      formData.email,
      formData.category,
      formData.message,
    ]
    const filledFields = fields.filter(field => field && field.length > 0).length
    const progress = (filledFields / fields.length) * 100
    setFormProgress(progress)
  }, [formData])

  // Generate smart hints based on selected project type
  useEffect(() => {
    if (formData.projectType && PROJECT_SUGGESTIONS[formData.projectType as keyof typeof PROJECT_SUGGESTIONS]) {
      const suggestions = PROJECT_SUGGESTIONS[formData.projectType as keyof typeof PROJECT_SUGGESTIONS]
      setSmartHints(suggestions.questions)
    } else {
      setSmartHints([])
    }
  }, [formData.projectType])

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
        
        try {
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
        } catch (error) {
          console.error('Turnstile render error:', error)
        }
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

  const handleCategoryChange = (value: string) => {
    setFormData({ ...formData, category: value, projectType: "", message: "" })
    setShowSuggestions(true)
    setSelectedTemplate(null)
    
    // Track category selection in GTM
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        'event': 'contact_form_category_select',
        'category': value,
        'form_name': 'contact_form'
      })
    }
  }

  const handleTemplateSelect = (template: string) => {
    setFormData({ ...formData, message: template })
    setSelectedTemplate(template)
    setShowSuggestions(false)
    
    // Track template selection in GTM
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        'event': 'contact_form_template_select',
        'template_text': template.substring(0, 50) + '...',
        'category': formData.category,
        'form_name': 'contact_form'
      })
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type === "application/pdf" && file.size <= 2 * 1024 * 1024) {
      setFormData({ ...formData, cvFile: file })
    } else {
      alert("Please upload a PDF file (max 2MB)")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Track form submission start in GTM
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        'event': 'contact_form_submit_start',
        'form_name': 'contact_form',
        'category': formData.category,
        'project_type': formData.projectType || 'N/A'
      })
    }
    
    // Validate Turnstile
    if (!turnstileToken) {
      setSubmitStatus("error")
      setErrorMessage("Please complete the security verification")
      
      // Track validation error
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          'event': 'contact_form_error',
          'error_type': 'turnstile_validation',
          'form_name': 'contact_form'
        })
      }
      return
    }
    
    setIsLoading(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const submitData = new FormData()
      submitData.append("name", formData.name)
      submitData.append("email", formData.email)
      submitData.append("phone", formData.phone)
      submitData.append("category", formData.category)
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
        // Microsoft UET Enhanced Conversion Tracking
        if (typeof window !== 'undefined' && window.uetq) {
          window.uetq = window.uetq || [];
          window.uetq.push('set', { 'pid': {
            'em': formData.email || "",
            'ph': formData.phone || ""
          }});
        }
        
        // Track successful form submission in GTM
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
          (window as any).dataLayer.push({
            'event': 'contact_form_submit_success',
            'form_name': 'contact_form',
            'category': formData.category,
            'project_type': formData.projectType || 'N/A',
            'has_cv': formData.cvFile ? 'yes' : 'no'
          })
        }
        
        setFormData({ 
          name: "", 
          email: "", 
          phone: "", 
          company: "",
          category: "",
          projectType: "",
          message: "",
          cvFile: null,
          agreeToPrivacy: false,
        })
        setTurnstileToken("")
        if (typeof window !== 'undefined' && (window as any).turnstile && turnstileWidgetId) {
          (window as any).turnstile.reset(turnstileWidgetId)
        }
      } else {
        const errorData = await response.json().catch(() => ({ error: "Failed to send message" }))
        setSubmitStatus("error")
        setErrorMessage(errorData.error || "Failed to send message. Please try again.")
        
        // Track form submission error in GTM
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
          (window as any).dataLayer.push({
            'event': 'contact_form_error',
            'error_type': 'submission_failed',
            'error_message': errorData.error || 'Failed to send message',
            'form_name': 'contact_form'
          })
        }
      }
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("Network error. Please check your connection and try again.")
      
      // Track network error in GTM
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          'event': 'contact_form_error',
          'error_type': 'network_error',
          'form_name': 'contact_form'
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  const getTemplateKey = (): keyof typeof MESSAGE_TEMPLATES => {
    if (formData.category === "job") return "job-opportunity"
    if (formData.category === "collaboration") return "collaboration"
    if (formData.projectType === "Web Development") return "web-development"
    if (formData.projectType === "Mobile App Development") return "mobile-app"
    if (formData.projectType === "Video Production") return "video-production"
    if (formData.projectType === "Audio-Visual Production") return "av-production"
    if (formData.projectType === "IT Infrastructure") return "it-consultancy"
    if (formData.projectType === "System Integration") return "system-integration"
    return "general"
  }

  const templates = MESSAGE_TEMPLATES[getTemplateKey()]

  return (
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
                placeholder="Your Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="contact-input bg-transparent border-border/50 hover:border-primary/50 focus:border-primary transition-all duration-200"
                required
                disabled={isLoading}
              />
            </div>

            {/* Email & Phone - Side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-field-group">
                <Input
                  type="email"
                  placeholder="Your Email *"
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
                  placeholder="Your Phone Number (Optional)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="contact-input bg-transparent border-border/50 hover:border-primary/50 focus:border-primary transition-all duration-200"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Category */}
            <div className="form-field-group">
              <Select value={formData.category} onValueChange={handleCategoryChange} disabled={isLoading} required>
                <SelectTrigger className="contact-input bg-transparent border-border/50 hover:border-primary/50 focus:border-primary transition-all duration-200">
                  <SelectValue placeholder="Select Category *" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="project">Project Request / Quotation</SelectItem>
                  <SelectItem value="job">Job / Hiring Opportunity</SelectItem>
                  <SelectItem value="collaboration">Collaboration / Partnership</SelectItem>
                  <SelectItem value="general">General Inquiry</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Project Type - appears for project category */}
            {formData.category === "project" && (
              <div className="form-field-group">
                <Select 
                  value={formData.projectType} 
                  onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  disabled={isLoading}
                  required
                >
                  <SelectTrigger className="contact-input bg-transparent border-border/50 hover:border-primary/50 focus:border-primary transition-all duration-200">
                    <SelectValue placeholder="Select Project Type *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Mobile App Development">Mobile App Development</SelectItem>
                    <SelectItem value="Video Production">Video Production</SelectItem>
                    <SelectItem value="Audio-Visual Production">Audio-Visual Production</SelectItem>
                    <SelectItem value="IT Infrastructure">IT Infrastructure</SelectItem>
                    <SelectItem value="System Integration">System Integration</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* CV Upload - appears for job category */}
            {formData.category === "job" && (
              <div className="form-field-group">
                <label className="flex items-center gap-2 px-4 py-2 border border-border/50 rounded-md cursor-pointer hover:border-primary/50 transition-all bg-transparent">
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

            {/* Message Templates */}
            {showSuggestions && templates && (
              <div className="form-field-group">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Lightbulb className="w-4 h-4 text-primary" />
                  <span>Quick message templates:</span>
                </div>
                <div className="space-y-2">
                  {templates.map((template, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleTemplateSelect(template)}
                      className={`w-full text-left p-3 rounded-lg border transition-all text-sm ${
                        selectedTemplate === template
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border/50 hover:border-primary/50 hover:bg-secondary/50"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{template}</span>
                      </div>
                    </button>
                  ))}
                </div>
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

            {/* Smart Hints */}
            {smartHints.length > 0 && formData.message && (
              <div className="form-field-group">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>Consider mentioning:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {smartHints.map((hint, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-primary/10 hover:border-primary/50 transition-all"
                      onClick={() => setFormData({ 
                        ...formData, 
                        message: formData.message + "\n\n" + hint 
                      })}
                    >
                      {hint}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Turnstile */}
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

            {/* Privacy Policy Checkbox */}
            <div className="flex items-start gap-3 p-4 glass rounded-lg border border-border/50">
              <input
                type="checkbox"
                id="agreeToPrivacy"
                checked={formData.agreeToPrivacy}
                onChange={(e) => setFormData({ ...formData, agreeToPrivacy: e.target.checked })}
                className="mt-1 w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary focus:ring-2 cursor-pointer"
                required
              />
              <label htmlFor="agreeToPrivacy" className="text-sm text-muted-foreground cursor-pointer">
                I agree to the
                <a 
                  href="/privacy-policy" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium mx-1"
                >
                  Privacy Policy
                </a>
                ,
                <a 
                  href="/cookie-policy" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium mx-1"
                >
                  Cookie Policy
                </a>
                , and
                <a 
                  href="/partnership-policy" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium mx-1"
                >
                  Partnership Policy
                </a>
                , and consent to the collection and use of my personal information as described. <span className="text-red-500">*</span>
              </label>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-sm text-green-500 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-sm text-red-500">{errorMessage}</p>
              </div>
            )}

            <Button 
              type="submit" 
              className="contact-submit-btn w-full bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading || !turnstileToken || !formData.agreeToPrivacy}
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
  )
}
