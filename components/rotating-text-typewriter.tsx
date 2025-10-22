"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

interface RotatingTextTypewriterProps {
  texts: string[]
  className?: string
  interval?: number
}

export function RotatingTextTypewriter({ texts, className = "", interval = 3000 }: RotatingTextTypewriterProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullText = texts[currentIndex]
    const typingSpeed = isDeleting ? 50 : 100

    if (!isDeleting && displayText === currentFullText) {
      // Pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), interval)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayText === "") {
      // Move to next text
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % texts.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentFullText.substring(0, displayText.length - 1)
          : currentFullText.substring(0, displayText.length + 1)
      )
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentIndex, texts, interval])

  return (
    <span className={`inline-flex ${className}`}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block ml-1"
      >
        |
      </motion.span>
    </span>
  )
}
