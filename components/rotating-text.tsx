"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

interface RotatingTextProps {
  texts: string[]
  className?: string
  interval?: number
}

export function RotatingText({ texts, className = "", interval = 3500 }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, interval)

    return () => clearInterval(timer)
  }, [texts.length, interval])

  return (
    <span className={`inline-flex overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ 
            x: -50,
            opacity: 0,
            filter: "blur(8px)"
          }}
          animate={{ 
            x: 0,
            opacity: 1,
            filter: "blur(0px)"
          }}
          exit={{ 
            x: 50,
            opacity: 0,
            filter: "blur(8px)"
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1], // Custom easing for smooth feel
          }}
          className="inline-block"
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
