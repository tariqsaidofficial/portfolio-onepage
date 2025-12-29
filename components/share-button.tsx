'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Share2, X, Facebook, Linkedin, Twitter, Mail, Link2, MessageCircle } from 'lucide-react'
import { toast } from 'sonner'

interface ShareButtonProps {
  url?: string
  title?: string
  description?: string
  variant?: 'floating' | 'inline'
  className?: string
}

/**
 * Share Button Component
 * Allows users to share the portfolio via multiple platforms
 * 
 * @param url - URL to share (default: current page)
 * @param title - Title for sharing (default: "Tariq Said Portfolio")
 * @param description - Description for sharing
 * @param variant - 'floating' (fixed position) or 'inline' (in content)
 * @param className - Additional CSS classes
 */
export function ShareButton({
  url = 'https://portfolio.dxbmark.com',
  title = 'Tariq Said | Full-Stack Developer & AV Specialist',
  description = 'Check out this amazing portfolio! Full-stack developer with 15+ years of experience in web development and audio-visual systems.',
  variant = 'floating',
  className = '',
}: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Share handlers
  const shareViaWhatsApp = () => {
    const text = encodeURIComponent(`${title}\n\n${description}\n\n${url}`)
    window.open(`https://wa.me/?text=${text}`, '_blank', 'noopener,noreferrer')
    setIsOpen(false)
  }

  const shareViaLinkedIn = () => {
    const shareUrl = encodeURIComponent(url)
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank', 'noopener,noreferrer')
    setIsOpen(false)
  }

  const shareViaTwitter = () => {
    const text = encodeURIComponent(title)
    const shareUrl = encodeURIComponent(url)
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${shareUrl}`, '_blank', 'noopener,noreferrer')
    setIsOpen(false)
  }

  const shareViaFacebook = () => {
    const shareUrl = encodeURIComponent(url)
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank', 'noopener,noreferrer')
    setIsOpen(false)
  }

  const shareViaEmail = () => {
    const subject = encodeURIComponent(title)
    const body = encodeURIComponent(`${description}\n\nCheck it out: ${url}`)
    window.location.href = `mailto:?subject=${subject}&body=${body}`
    setIsOpen(false)
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      toast.success('Link copied to clipboard!', {
        description: 'You can now paste it anywhere',
        duration: 3000,
      })
      setIsOpen(false)
    } catch (err) {
      toast.error('Failed to copy link', {
        description: 'Please try again',
        duration: 3000,
      })
    }
  }

  // Native Web Share API (mobile)
  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        })
        setIsOpen(false)
      } catch (err) {
        // User cancelled or error occurred
        console.log('Share cancelled or failed')
      }
    } else {
      // Fallback: show share options
      setIsOpen(!isOpen)
    }
  }

  const shareOptions = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      onClick: shareViaWhatsApp,
      color: 'hover:bg-green-500/10 hover:text-green-500',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      onClick: shareViaLinkedIn,
      color: 'hover:bg-blue-500/10 hover:text-blue-500',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      onClick: shareViaTwitter,
      color: 'hover:bg-sky-500/10 hover:text-sky-500',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      onClick: shareViaFacebook,
      color: 'hover:bg-blue-600/10 hover:text-blue-600',
    },
    {
      name: 'Email',
      icon: Mail,
      onClick: shareViaEmail,
      color: 'hover:bg-red-500/10 hover:text-red-500',
    },
    {
      name: 'Copy Link',
      icon: Link2,
      onClick: copyLink,
      color: 'hover:bg-primary/10 hover:text-primary',
    },
  ]

  if (variant === 'floating') {
    return (
      <>
        {/* Floating Share Button */}
        <motion.button
          onClick={shareNative}
          className={`glass-whatsapp fixed bottom-[8.5rem] right-6 z-50 p-3 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          aria-label="Share portfolio"
        >
          <Share2 className="w-5 h-5" />
        </motion.button>

        {/* Share Options Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
            <div className="glass-card max-w-md w-full p-6 animate-in fade-in zoom-in duration-200" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Share Portfolio</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0"
                  aria-label="Close share modal"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {shareOptions.map((option) => {
                  const Icon = option.icon
                  return (
                    <button
                      key={option.name}
                      onClick={option.onClick}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl glass border border-border transition-all duration-200 ${option.color} hover:scale-105`}
                      aria-label={`Share via ${option.name}`}
                    >
                      <Icon className="w-6 h-6" />
                      <span className="text-xs font-medium">{option.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </>
    )
  }

  // Inline variant (for Contact section)
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {shareOptions.map((option) => {
        const Icon = option.icon
        return (
          <button
            key={option.name}
            onClick={option.onClick}
            className={`p-3 glass rounded-lg hover:border-primary/50 border border-border transition-all duration-200 hover:scale-110 ${option.color}`}
            aria-label={`Share via ${option.name}`}
            title={option.name}
          >
            <Icon className="w-5 h-5" />
          </button>
        )
      })}
    </div>
  )
}
