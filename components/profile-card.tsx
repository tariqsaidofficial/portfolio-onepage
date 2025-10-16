"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface ProfileCardProps {
  avatarUrl?: string
  iconUrl?: string
  grainUrl?: string
  behindGradient?: string
  innerGradient?: string
  showBehindGradient?: boolean
  className?: string
  enableTilt?: boolean
  miniAvatarUrl?: string
  name?: string
  title?: string
  handle?: string
  status?: string
  contactText?: string
  showUserInfo?: boolean
  onContactClick?: () => void
}

const DEFAULT_BEHIND_GRADIENT =
  "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)"

const DEFAULT_INNER_GRADIENT = "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"

const ANIMATION_CONFIG = {
  SMOOTH_DURATION: 600,
  INITIAL_DURATION: 1500,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
} as const

export function ProfileCard({
  avatarUrl = "/placeholder.svg?height=400&width=300",
  iconUrl,
  grainUrl,
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = "",
  enableTilt = true,
  miniAvatarUrl,
  name = "Tariq Said",
  title = "Full-Stack Developer",
  handle = "tariqsaidofficial",
  status = "Available",
  contactText = "Contact",
  showUserInfo = true,
  onContactClick,
}: ProfileCardProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLElement>(null)
  const [isActive, setIsActive] = useState(false)

  const clamp = (value: number, min = 0, max = 100): number => Math.min(Math.max(value, min), max)

  const round = (value: number, precision = 3): number => Number.parseFloat(value.toFixed(precision))

  const adjust = (value: number, fromMin: number, fromMax: number, toMin: number, toMax: number): number =>
    round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin))

  const easeInOutCubic = (x: number): number => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2)

  const updateCardTransform = (offsetX: number, offsetY: number, card: HTMLElement, wrap: HTMLElement) => {
    const width = card.clientWidth
    const height = card.clientHeight

    const percentX = clamp((100 / width) * offsetX)
    const percentY = clamp((100 / height) * offsetY)

    const centerX = percentX - 50
    const centerY = percentY - 50

    const properties = {
      "--pointer-x": `${percentX}%`,
      "--pointer-y": `${percentY}%`,
      "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
      "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
      "--pointer-from-center": `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
      "--pointer-from-top": `${percentY / 100}`,
      "--pointer-from-left": `${percentX / 100}`,
      "--rotate-x": `${round(-(centerX / 5))}deg`,
      "--rotate-y": `${round(centerY / 4)}deg`,
    }

    Object.entries(properties).forEach(([property, value]) => {
      wrap.style.setProperty(property, value)
    })
  }

  const createSmoothAnimation = (
    duration: number,
    startX: number,
    startY: number,
    card: HTMLElement,
    wrap: HTMLElement,
  ) => {
    const startTime = performance.now()
    const targetX = wrap.clientWidth / 2
    const targetY = wrap.clientHeight / 2

    const animationLoop = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = clamp(elapsed / duration)
      const easedProgress = easeInOutCubic(progress)

      const currentX = adjust(easedProgress, 0, 1, startX, targetX)
      const currentY = adjust(easedProgress, 0, 1, startY, targetY)

      updateCardTransform(currentX, currentY, card, wrap)

      if (progress < 1) {
        requestAnimationFrame(animationLoop)
      }
    }

    requestAnimationFrame(animationLoop)
  }

  const handlePointerMove = (event: React.PointerEvent) => {
    const card = cardRef.current
    const wrap = wrapRef.current

    if (!card || !wrap || !enableTilt) return

    const rect = card.getBoundingClientRect()
    updateCardTransform(event.clientX - rect.left, event.clientY - rect.top, card, wrap)
  }

  const handlePointerEnter = () => {
    if (enableTilt) {
      setIsActive(true)
    }
  }

  const handlePointerLeave = (event: React.PointerEvent) => {
    const card = cardRef.current
    const wrap = wrapRef.current

    if (!card || !wrap || !enableTilt) return

    const rect = card.getBoundingClientRect()
    createSmoothAnimation(
      ANIMATION_CONFIG.SMOOTH_DURATION,
      event.clientX - rect.left,
      event.clientY - rect.top,
      card,
      wrap,
    )
    setIsActive(false)
  }

  const cardStyle = {
    "--icon": iconUrl ? `url(${iconUrl})` : "none",
    "--grain": grainUrl ? `url(${grainUrl})` : "none",
    "--behind-gradient": showBehindGradient ? (behindGradient ?? DEFAULT_BEHIND_GRADIENT) : "none",
    "--inner-gradient": innerGradient ?? DEFAULT_INNER_GRADIENT,
  } as React.CSSProperties

  useEffect(() => {
    if (!enableTilt) return

    const card = cardRef.current
    const wrap = wrapRef.current

    if (!card || !wrap) return

    const initialX = wrap.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET

    updateCardTransform(initialX, initialY, card, wrap)
    createSmoothAnimation(ANIMATION_CONFIG.INITIAL_DURATION, initialX, initialY, card, wrap)
  }, [enableTilt])

  return (
    <div ref={wrapRef} className={`pc-card-wrapper ${isActive ? "active" : ""} ${className}`.trim()} style={cardStyle}>
      <section
        ref={cardRef}
        className={`pc-card ${isActive ? "active" : ""}`}
        onPointerEnter={handlePointerEnter}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div className="pc-inside">
          <div className="pc-shine" />
          <div className="pc-glare" />

          <div className="pc-content pc-avatar-content">
            <Image
              className="avatar"
              src={avatarUrl || "/placeholder.svg"}
              alt={`${name || "User"} avatar`}
              width={300}
              height={400}
              loading="lazy"
            />

            {showUserInfo && (
              <div className="pc-user-info">
                <div className="pc-user-details">
                  <div className="pc-mini-avatar">
                    <Image
                      src={miniAvatarUrl || avatarUrl}
                      alt={`${name || "User"} mini avatar`}
                      width={48}
                      height={48}
                      loading="lazy"
                    />
                  </div>

                  <div className="pc-user-text">
                    <div className="pc-handle">@{handle}</div>
                    <div className="pc-status">{status}</div>
                  </div>
                </div>

                <button
                  className="pc-contact-btn"
                  style={{ pointerEvents: "auto" }}   // ✅ هذا هو السطر الذي يفعل الزر
                  onClick={onContactClick}
                  type="button"
                  aria-label={`Contact ${name || "user"}`}
                >
                  {contactText}
                </button>

              </div>
            )}
          </div>

          <div className="pc-content">
            <div className="pc-details">
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
