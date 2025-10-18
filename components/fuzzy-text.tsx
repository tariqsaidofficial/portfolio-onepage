"use client"

import { useEffect, useRef, useState } from "react"

interface FuzzyTextProps {
  text: string
  fontSize?: number | string
  fontWeight?: string | number
  fontFamily?: string
  color?: string
  enableHover?: boolean
  baseIntensity?: number
  hoverIntensity?: number
  className?: string
}

export function FuzzyText({
  text = "",
  fontSize = "clamp(2rem, 8vw, 8rem)",
  fontWeight = 900,
  fontFamily = "inherit",
  color = "#fff",
  enableHover = true,
  baseIntensity = 0.18,
  hoverIntensity = 0.5,
  className = "",
}: FuzzyTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameIdRef = useRef<number>()
  const isCancelledRef = useRef(false)
  const cleanupRef = useRef<(() => void) | null>(null)

  const waitForFont = async (
    fontFamily: string,
    fontWeight: string | number,
    fontSize: string
  ): Promise<boolean> => {
    if (document.fonts?.check) {
      const fontString = `${fontWeight} ${fontSize} ${fontFamily}`

      if (document.fonts.check(fontString)) {
        return true
      }

      try {
        await document.fonts.load(fontString)
        return document.fonts.check(fontString)
      } catch (error) {
        console.warn("Font loading failed:", error)
        return false
      }
    }

    return new Promise((resolve) => {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      if (!ctx) {
        resolve(false)
        return
      }

      ctx.font = `${fontWeight} ${fontSize} ${fontFamily}`
      const testWidth = ctx.measureText("M").width

      let attempts = 0
      const checkFont = () => {
        ctx.font = `${fontWeight} ${fontSize} ${fontFamily}`
        const newWidth = ctx.measureText("M").width

        if (newWidth !== testWidth && newWidth > 0) {
          resolve(true)
        } else if (attempts < 20) {
          attempts++
          setTimeout(checkFont, 50)
        } else {
          resolve(false)
        }
      }

      setTimeout(checkFont, 10)
    })
  }

  const initCanvas = async () => {
    if (document.fonts?.ready) {
      await document.fonts.ready
    }

    if (isCancelledRef.current) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const computedFontFamily =
      fontFamily === "inherit" ? window.getComputedStyle(canvas).fontFamily || "sans-serif" : fontFamily

    const fontSizeStr = typeof fontSize === "number" ? `${fontSize}px` : fontSize
    let numericFontSize: number

    if (typeof fontSize === "number") {
      numericFontSize = fontSize
    } else {
      const temp = document.createElement("span")
      temp.style.fontSize = fontSize
      temp.style.fontFamily = computedFontFamily
      document.body.appendChild(temp)
      const computedSize = window.getComputedStyle(temp).fontSize
      numericFontSize = parseFloat(computedSize)
      document.body.removeChild(temp)
    }

    const fontLoaded = await waitForFont(computedFontFamily, fontWeight, fontSizeStr)
    if (!fontLoaded) {
      console.warn(`Font not loaded: ${computedFontFamily}`)
    }

    const offscreen = document.createElement("canvas")
    const offCtx = offscreen.getContext("2d")
    if (!offCtx) return

    const fontString = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`
    offCtx.font = fontString

    const testMetrics = offCtx.measureText("M")
    if (testMetrics.width === 0) {
      setTimeout(() => {
        if (!isCancelledRef.current) {
          initCanvas()
        }
      }, 100)
      return
    }

    offCtx.textBaseline = "alphabetic"
    const metrics = offCtx.measureText(text)

    const actualLeft = metrics.actualBoundingBoxLeft ?? 0
    const actualRight = metrics.actualBoundingBoxRight ?? metrics.width
    const actualAscent = metrics.actualBoundingBoxAscent ?? numericFontSize
    const actualDescent = metrics.actualBoundingBoxDescent ?? numericFontSize * 0.2

    const textBoundingWidth = Math.ceil(actualLeft + actualRight)
    const tightHeight = Math.ceil(actualAscent + actualDescent)

    const extraWidthBuffer = 10
    const offscreenWidth = textBoundingWidth + extraWidthBuffer

    offscreen.width = offscreenWidth
    offscreen.height = tightHeight

    const xOffset = extraWidthBuffer / 2
    offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`
    offCtx.textBaseline = "alphabetic"
    offCtx.fillStyle = color
    offCtx.fillText(text, xOffset - actualLeft, actualAscent)

    const horizontalMargin = 50
    const verticalMargin = 0
    canvas.width = offscreenWidth + horizontalMargin * 2
    canvas.height = tightHeight + verticalMargin * 2
    ctx.translate(horizontalMargin, verticalMargin)

    const interactiveLeft = horizontalMargin + xOffset
    const interactiveTop = verticalMargin
    const interactiveRight = interactiveLeft + textBoundingWidth
    const interactiveBottom = interactiveTop + tightHeight

    let isHovering = false
    const fuzzRange = 30

    const run = () => {
      if (isCancelledRef.current) return
      ctx.clearRect(-fuzzRange, -fuzzRange, offscreenWidth + 2 * fuzzRange, tightHeight + 2 * fuzzRange)
      const intensity = isHovering ? hoverIntensity : baseIntensity
      for (let j = 0; j < tightHeight; j++) {
        const dx = Math.floor(intensity * (Math.random() - 0.5) * fuzzRange)
        ctx.drawImage(offscreen, 0, j, offscreenWidth, 1, dx, j, offscreenWidth, 1)
      }
      animationFrameIdRef.current = window.requestAnimationFrame(run)
    }

    run()

    const isInsideTextArea = (x: number, y: number) =>
      x >= interactiveLeft && x <= interactiveRight && y >= interactiveTop && y <= interactiveBottom

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableHover) return
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      isHovering = isInsideTextArea(x, y)
    }

    const handleMouseLeave = () => {
      isHovering = false
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!enableHover) return
      e.preventDefault()
      const rect = canvas.getBoundingClientRect()
      const touch = e.touches[0]
      const x = touch.clientX - rect.left
      const y = touch.clientY - rect.top
      isHovering = isInsideTextArea(x, y)
    }

    const handleTouchEnd = () => {
      isHovering = false
    }

    if (enableHover) {
      canvas.addEventListener("mousemove", handleMouseMove)
      canvas.addEventListener("mouseleave", handleMouseLeave)
      canvas.addEventListener("touchmove", handleTouchMove, { passive: false })
      canvas.addEventListener("touchend", handleTouchEnd)
    }

    cleanupRef.current = () => {
      if (animationFrameIdRef.current) {
        window.cancelAnimationFrame(animationFrameIdRef.current)
      }
      if (enableHover) {
        canvas.removeEventListener("mousemove", handleMouseMove)
        canvas.removeEventListener("mouseleave", handleMouseLeave)
        canvas.removeEventListener("touchmove", handleTouchMove)
        canvas.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }

  useEffect(() => {
    isCancelledRef.current = false
    void initCanvas()

    return () => {
      isCancelledRef.current = true
      if (animationFrameIdRef.current) {
        window.cancelAnimationFrame(animationFrameIdRef.current)
      }
      if (cleanupRef.current) {
        cleanupRef.current()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, fontSize, fontWeight, fontFamily, color, enableHover, baseIntensity, hoverIntensity])

  return <canvas ref={canvasRef} className={className} />
}
