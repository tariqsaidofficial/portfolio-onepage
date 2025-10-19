"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export type LogoItemImage = {
  src: string
  alt?: string
  href?: string
  title?: string
  width?: number
  height?: number
}

export type LogoItem = LogoItemImage

export interface LogoLoopProps {
  logos: LogoItem[]
  speed?: number
  direction?: "left" | "right"
  width?: number | string
  logoHeight?: number
  gap?: number
  pauseOnHover?: boolean
  fadeOut?: boolean
  fadeOutColor?: string
  scaleOnHover?: boolean
  ariaLabel?: string
  className?: string
}

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
} as const

export function LogoLoop({
  logos,
  speed = 120,
  direction = "left",
  width = "100%",
  logoHeight = 60,
  gap = 32,
  pauseOnHover = true,
  fadeOut = false,
  fadeOutColor,
  scaleOnHover = false,
  ariaLabel = "Partner logos",
  className = "",
}: LogoLoopProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const seqRef = useRef<HTMLUListElement>(null)

  const [seqWidth, setSeqWidth] = useState<number>(0)
  const [copyCount, setCopyCount] = useState<number>(ANIMATION_CONFIG.MIN_COPIES)
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const rafRef = useRef<number | null>(null)
  const lastTimestampRef = useRef<number | null>(null)
  const offsetRef = useRef(0)
  const velocityRef = useRef(0)

  const targetVelocity = Math.abs(speed) * (direction === "left" ? 1 : -1) * (speed < 0 ? -1 : 1)

  const cssVariables = {
    "--logoloop-gap": `${gap}px`,
    "--logoloop-logoHeight": `${logoHeight}px`,
    ...(fadeOutColor && { "--logoloop-fadeColor": fadeOutColor }),
  } as React.CSSProperties

  const rootClasses = [
    "relative overflow-x-hidden group",
    scaleOnHover && "py-[calc(var(--logoloop-logoHeight)*0.1)]",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  const containerStyle = {
    width: typeof width === "number" ? `${width}px` : width,
    ...cssVariables,
  }

  const updateDimensions = () => {
    const containerWidth = containerRef.current?.clientWidth ?? 0
    const sequenceWidth = seqRef.current?.getBoundingClientRect?.()?.width ?? 0

    if (sequenceWidth > 0) {
      setSeqWidth(Math.ceil(sequenceWidth))
      const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM
      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded))
    }
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track || seqWidth === 0) return

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReduced) {
      track.style.transform = "translate3d(0, 0, 0)"
      return
    }

    const animate = (timestamp: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp
      }

      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000
      lastTimestampRef.current = timestamp

      const target = pauseOnHover && isHovered ? 0 : targetVelocity

      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU)
      velocityRef.current += (target - velocityRef.current) * easingFactor

      if (seqWidth > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime
        nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth
        offsetRef.current = nextOffset

        const translateX = -offsetRef.current
        track.style.transform = `translate3d(${translateX}px, 0, 0)`
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
      lastTimestampRef.current = null
    }
  }, [seqWidth, isHovered, pauseOnHover, targetVelocity])

  useEffect(() => {
    const handleResize = () => updateDimensions()

    if (typeof window !== "undefined" && window.ResizeObserver) {
      const resizeObserver = new ResizeObserver(updateDimensions)

      if (containerRef.current) {
        resizeObserver.observe(containerRef.current)
      }
      if (seqRef.current) {
        resizeObserver.observe(seqRef.current)
      }

      updateDimensions()

      return () => {
        resizeObserver.disconnect()
      }
    } else {
      window.addEventListener("resize", handleResize)
      updateDimensions()

      return () => window.removeEventListener("resize", handleResize)
    }
  }, [logos])

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsHovered(false)
    }
  }

  return (
    <div
      ref={containerRef}
      className={rootClasses}
      style={containerStyle}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {fadeOut && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[clamp(24px,8%,120px)] bg-gradient-to-r from-[var(--logoloop-fadeColor,#0a122c)] to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[clamp(24px,8%,120px)] bg-gradient-to-l from-[var(--logoloop-fadeColor,#0a122c)] to-transparent"
          />
        </>
      )}

      <div ref={trackRef} className="flex w-max will-change-transform select-none motion-reduce:transform-none">
        {Array.from({ length: copyCount }).map((_, copyIndex) => (
          <ul
            key={`copy-${copyIndex}`}
            className="flex items-center"
            role="list"
            aria-hidden={copyIndex > 0}
            ref={copyIndex === 0 ? seqRef : undefined}
            style={{ marginRight: `${gap}px` }}
          >
            {logos.map((item, itemIndex) => (
              <li
                key={`${copyIndex}-${itemIndex}`}
                className={`flex-none ${scaleOnHover ? "overflow-visible group/item" : ""}`}
                role="listitem"
                style={{ marginRight: `${gap}px` }}
              >
                {item.href ? (
                  <a
                    className={`inline-flex items-center no-underline rounded transition-opacity duration-200 ease-linear hover:opacity-80 focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2`}
                    href={item.href}
                    aria-label={item.alt || "logo link"}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Image
                      className={`logo-primary-filter block object-contain opacity-60 hover:opacity-100 transition-all ${
                        scaleOnHover
                          ? "duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-110"
                          : ""
                      }`}
                      src={item.src || "/placeholder.svg"}
                      width={item.width || logoHeight}
                      height={logoHeight}
                      alt={item.alt ?? ""}
                      title={item.title}
                      loading="lazy"
                      style={{ 
                        height: `${logoHeight}px`, 
                        width: "auto"
                      }}
                    />
                  </a>
                ) : (
                  <Image
                    className={`logo-primary-filter block object-contain opacity-60 hover:opacity-100 transition-all ${
                      scaleOnHover
                        ? "duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-110"
                        : ""
                    }`}
                    src={item.src || "/placeholder.svg"}
                    width={item.width || logoHeight}
                    height={logoHeight}
                    alt={item.alt ?? ""}
                    title={item.title}
                    loading="lazy"
                    style={{ 
                      height: `${logoHeight}px`, 
                      width: "auto"
                    }}
                  />
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
