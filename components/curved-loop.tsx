"use client"

import { useRef, useEffect, useState, useCallback } from 'react'

interface CurvedLoopProps {
  marqueeText?: string
  speed?: number
  className?: string
  curveAmount?: number
  direction?: 'left' | 'right'
  interactive?: boolean
  variant?: 'white' | 'primary'
  size?: 'sm' | 'md' | 'lg'
  position?: 'top' | 'center' | 'bottom'
}

export function CurvedLoop({
  marqueeText = '',
  speed = 2,
  className = '',
  curveAmount = 400,
  direction = 'left',
  interactive = true,
  variant = 'white',
  size = 'md',
  position = 'center'
}: CurvedLoopProps) {
  const measureRef = useRef<SVGTextElement>(null)
  const textPathRef = useRef<SVGTextPathElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  
  const [spacing, setSpacing] = useState(0)
  const [offset, setOffset] = useState(0)
  const [ready, setReady] = useState(false)
  
  const dragRef = useRef(false)
  const lastXRef = useRef(0)
  const dirRef = useRef<'left' | 'right'>(direction)
  const velRef = useRef(0)
  const animationFrameRef = useRef<number | null>(null)
  
  const [pathId, setPathId] = useState('')
  
  useEffect(() => {
    setPathId(`curve-${Math.random().toString(36).substr(2, 9)}`)
  }, [])

  // Process text to ensure trailing space
  const text = (() => {
    const hasTrailing = /\s|\u00A0$/.test(marqueeText)
    return (hasTrailing ? marqueeText.replace(/\s+$/, '') : marqueeText) + '\u00A0'
  })()

  const pathD = `M-100,40 Q500,${40 + curveAmount} 1540,40`

  const totalText = spacing
    ? Array(Math.ceil(1800 / spacing) + 2)
        .fill(text)
        .join('')
    : text

  const updateSpacing = useCallback(() => {
    if (measureRef.current) {
      const length = measureRef.current.getComputedTextLength()
      setSpacing(length)
      setReady(length > 0)
    }
  }, [])

  const animate = useCallback(() => {
    if (!spacing || !ready) return

    let lastTime = performance.now()
    const step = (currentTime: number) => {
      if (!dragRef.current && textPathRef.current) {
        const deltaTime = (currentTime - lastTime) / 16.67 // Normalize to 60fps
        lastTime = currentTime
        
        const delta = (dirRef.current === 'right' ? speed : -speed) * deltaTime
        const currentOffset = parseFloat(textPathRef.current.getAttribute('startOffset') || '0')
        let newOffset = currentOffset + delta

        const wrapPoint = spacing
        if (newOffset <= -wrapPoint) newOffset += wrapPoint
        if (newOffset >= wrapPoint) newOffset -= wrapPoint

        textPathRef.current.setAttribute('startOffset', newOffset + 'px')
        setOffset(newOffset)
      }
      animationFrameRef.current = requestAnimationFrame(step)
    }
    animationFrameRef.current = requestAnimationFrame(step)
  }, [spacing, ready, speed])

  const stopAnimation = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    if (!interactive) return
    dragRef.current = true
    lastXRef.current = e.clientX
    velRef.current = 0
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!interactive || !dragRef.current || !textPathRef.current) return
    const dx = e.clientX - lastXRef.current
    lastXRef.current = e.clientX
    velRef.current = dx

    const currentOffset = parseFloat(textPathRef.current.getAttribute('startOffset') || '0')
    let newOffset = currentOffset + dx

    const wrapPoint = spacing
    if (newOffset <= -wrapPoint) newOffset += wrapPoint
    if (newOffset >= wrapPoint) newOffset -= wrapPoint

    textPathRef.current.setAttribute('startOffset', newOffset + 'px')
    setOffset(newOffset)
  }

  const endDrag = () => {
    if (!interactive) return
    dragRef.current = false
    dirRef.current = velRef.current > 0 ? 'right' : 'left'
  }

  const cursorStyle = interactive ? (dragRef.current ? 'grabbing' : 'grab') : 'auto'

  // Size configurations
  const sizeConfig = {
    sm: { fontSize: 'text-[3rem]', height: '100px', viewBox: '0 0 1440 80' },
    md: { fontSize: 'text-[6rem]', height: '200px', viewBox: '0 0 1440 120' },
    lg: { fontSize: 'text-[9rem]', height: '300px', viewBox: '0 0 1440 160' }
  }

  // Position configurations
  const positionConfig = {
    top: 'py-4',
    center: 'py-8',
    bottom: 'py-4'
  }

  // Variant configurations
  const variantConfig = {
    white: 'fill-white',
    primary: 'fill-[#e11d48]'
  }

  useEffect(() => {
    updateSpacing()
  }, [updateSpacing, text, className])

  useEffect(() => {
    stopAnimation()
    if (spacing) {
      animate()
    }
    return () => stopAnimation()
  }, [spacing, speed, animate, stopAnimation])

  return (
    <div
      className={`w-full flex items-center justify-center ${positionConfig[position]}`}
      style={{
        visibility: ready ? 'visible' : 'hidden',
        cursor: cursorStyle
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <svg
        className={`select-none w-full overflow-visible block ${sizeConfig[size].fontSize} font-bold uppercase leading-none`}
        viewBox={sizeConfig[size].viewBox}
        preserveAspectRatio="xMidYMid meet"
        style={{ 
          height: 'auto', 
          maxHeight: sizeConfig[size].height,
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          perspective: 1000
        }}
      >
        <text
          ref={measureRef}
          xmlSpace="preserve"
          style={{ visibility: 'hidden', opacity: 0, pointerEvents: 'none' }}
        >
          {text}
        </text>

        <defs>
          <path ref={pathRef} id={pathId} d={pathD} fill="none" stroke="transparent" />
        </defs>

        {ready && pathId && (
          <text 
            xmlSpace="preserve" 
            className={`${variantConfig[variant]} ${className}`}
            style={{ 
              transition: 'opacity 0.3s ease',
              willChange: 'transform'
            }}
          >
            <textPath
              ref={textPathRef}
              href={`#${pathId}`}
              startOffset={`${offset}px`}
              xmlSpace="preserve"
              style={{ 
                transition: 'none'
              }}
            >
              {totalText}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  )
}
