"use client"

import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

/**
 * Animation variants for rotating text
 */
export type RotatingTextVariant = "slide" | "flip" | "scale" | "typewriter"

interface RotatingTextProps {
  /** Array of texts to rotate through */
  texts: string[]
  /** Additional CSS classes */
  className?: string
  /** Interval between text changes in milliseconds */
  interval?: number
  /** Animation variant to use */
  variant?: RotatingTextVariant
}

/**
 * RotatingText Component - Unified component for all text rotation animations
 * 
 * @example
 * ```tsx
 * <RotatingText 
 *   texts={["Developer", "Designer", "Creator"]} 
 *   variant="slide"
 *   interval={3000}
 * />
 * ```
 */
export function RotatingText({ 
  texts, 
  className = "", 
  interval = 3500,
  variant = "slide"
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter effect logic
  useEffect(() => {
    if (variant !== "typewriter") return

    const currentFullText = texts[currentIndex]
    const typingSpeed = isDeleting ? 50 : 100

    if (!isDeleting && displayText === currentFullText) {
      const timeout = setTimeout(() => setIsDeleting(true), interval)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayText === "") {
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
  }, [displayText, isDeleting, currentIndex, texts, interval, variant])

  // Standard rotation logic for non-typewriter variants
  useEffect(() => {
    if (variant === "typewriter") return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, interval)

    return () => clearInterval(timer)
  }, [texts.length, interval, variant])

  // Typewriter variant
  if (variant === "typewriter") {
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

  // Animation configurations
  const animations = {
    slide: {
      initial: { x: -50, opacity: 0, filter: "blur(8px)" },
      animate: { x: 0, opacity: 1, filter: "blur(0px)" },
      exit: { x: 50, opacity: 0, filter: "blur(8px)" },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
    flip: {
      initial: { rotateX: 90, opacity: 0 },
      animate: { rotateX: 0, opacity: 1 },
      exit: { rotateX: -90, opacity: 0 },
      transition: { duration: 0.6, ease: "easeInOut" }
    },
    scale: {
      initial: { y: 50, scale: 0.8, opacity: 0 },
      animate: { y: 0, scale: 1, opacity: 1 },
      exit: { y: -50, scale: 0.8, opacity: 0 },
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
  }

  const config = animations[variant] || animations.slide
  const wrapperStyle = variant === "flip" ? { perspective: "1000px" } : {}
  const spanStyle = variant === "flip" ? {
    transformStyle: "preserve-3d" as const,
    backfaceVisibility: "hidden" as const
  } : {}

  return (
    <span className={`inline-flex overflow-hidden ${className}`} style={wrapperStyle}>
      {/* @ts-ignore - AnimatePresence type issue with React 19 */}
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={config.initial}
          animate={config.animate}
          exit={config.exit}
          transition={config.transition}
          style={spanStyle}
          className="inline-block"
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
