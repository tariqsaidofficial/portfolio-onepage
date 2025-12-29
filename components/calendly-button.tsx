'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar } from 'lucide-react'

interface CalendlyButtonProps {
  url?: string
  text?: string
  variant?: 'default' | 'outline'
  size?: 'default' | 'lg'
  icon?: boolean
  className?: string
}

/**
 * Calendly Button Component
 * Opens Calendly popup for meeting scheduling
 * 
 * @param url - Your Calendly scheduling URL (e.g., 'https://calendly.com/your-username/30min')
 * @param text - Button text (default: 'Schedule a Meeting')
 * @param variant - Button variant (default: 'default')
 * @param size - Button size (default: 'default')
 * @param icon - Show calendar icon (default: true)
 * @param className - Additional CSS classes
 */
export function CalendlyButton({
  url = 'https://calendly.com/tariqsaidofficial?hide_gdpr_banner=1&background_color=2a4173&text_color=ffffff&primary_color=e11d48',
  text = 'Schedule a Meeting',
  variant = 'default',
  size = 'default',
  icon = true,
  className = '',
}: CalendlyButtonProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => setIsLoaded(true)
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  const openCalendly = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly && isLoaded) {
      (window as any).Calendly.initPopupWidget({ 
        url,
        branding: false
      })
    } else {
      // Fallback: open in new tab if script not loaded
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <>
      <Button
        onClick={openCalendly}
        variant={variant}
        size={size}
        className={className}
        aria-label="Schedule a meeting with Tariq Said"
      >
        {icon && <Calendar className="w-5 h-5 mr-2" />}
        {text}
      </Button>

      {/* Calendly badge widget - optional */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
    </>
  )
}
