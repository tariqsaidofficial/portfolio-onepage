"use client"

import DarkVeil from "./DarkVeil"

/**
 * AnimatedBackground - Main Background Component
 * 
 * Layer Structure (z-index):
 * - z-2: DarkNavy base (#0a122c)
 * - z-1: DarkVeil Gold (hueShift: 120, opacity: 50%)
 * - z-0+: Content (default stacking context)
 * - z-10+: Elevated content (headers, modals, etc.)
 * 
 * FIXED ISSUE:
 * - Background layers now use NEGATIVE z-index (-2, -1)
 * - This ensures ALL content appears above background by default
 * - No need to manually add z-index to every page
 * 
 * IMPORTANT: 
 * - DarkVeil hueShift = 120 produces Gold/Yellow color (calibrated with HSL color space)
 * - Opacity = 50% to maintain DarkNavy visibility
 * - Background layers are now behind ALL content automatically
 * 
 * DO NOT CHANGE hueShift value without testing all three colors (Original/Gold/Red)
 */
export function AnimatedBackground() {
  return (
    <>
      {/* Layer -2: DarkNavy Base Background */}
      <div 
        className="fixed inset-0" 
        style={{ 
          zIndex: -2,
          backgroundColor: '#0a122c'  // DarkNavy - Primary background color
        }}
      />

      {/* Layer -1: DarkVeil Background with Gold hue - 50% opacity */}
      <div 
        className="fixed inset-0 pointer-events-none" 
        style={{ 
          zIndex: -1,
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

      {/* Layer 2: Blur Layer - REMOVED */}
      {/* Blur removed to prevent blur effect on background */}
    </>
  )
}
