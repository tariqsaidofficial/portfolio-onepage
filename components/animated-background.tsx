"use client"

import DarkVeil from "./DarkVeil"

/**
 * AnimatedBackground - Main Background Component
 * 
 * Layer Structure (z-index):
 * - z-0: DarkNavy base (#0a122c)
 * - z-1: DarkVeil Gold (hueShift: 120, opacity: 50%)
 * - z-2: Blur layer (12px)
 * - z-3+: Content
 * 
 * IMPORTANT: 
 * - DarkVeil hueShift = 120 produces Gold/Yellow color (calibrated with HSL color space)
 * - Opacity = 50% to maintain DarkNavy visibility
 * - Blur = 12px for smooth glassmorphism effect
 * 
 * DO NOT CHANGE hueShift value without testing all three colors (Original/Gold/Red)
 */
export function AnimatedBackground() {
  return (
    <>
      {/* Layer 0: DarkNavy Base Background */}
      <div 
        className="fixed inset-0" 
        style={{ 
          zIndex: 0,
          backgroundColor: '#0a122c'  // DarkNavy - Primary background color
        }}
      />

      {/* Layer 1: DarkVeil Background with Gold hue - 50% opacity */}
      <div 
        className="fixed inset-0" 
        style={{ 
          zIndex: 1,
          opacity: 0.50  // 50% to show DarkNavy underneath
        }}
      >
        <DarkVeil
          hueShift={120}  // Gold color (120° in HSL = Gold/Yellow)
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1}
        />
      </div>

      {/* Blur Layer - 12px */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{ 
          zIndex: 2,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      />
    </>
  )
}
