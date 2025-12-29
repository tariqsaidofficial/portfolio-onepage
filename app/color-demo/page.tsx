"use client"

import { useState } from "react"
import DarkVeil from "@/components/DarkVeil"

const primaryRed = '#e11d48'  // اللون الرسمي
const goldAccent = '#fbbf24'  // للاستخدام البسيط جداً

type BackgroundType = 'default' | 'gold' | 'red'

export default function ColorDemo() {
  const [bgType, setBgType] = useState<BackgroundType>('default')
  const [hideContent, setHideContent] = useState(false)

  // Blur intensity state
  const [blurIntensity, setBlurIntensity] = useState(0)

  // Get hue shift based on selection
  // IMPORTANT: These values are calibrated for DarkVeil's HSL color space
  // DO NOT CHANGE without testing all three colors
  // Color Wheel Reference: 0°=Red, 60°=Yellow, 120°=Green, 180°=Cyan, 240°=Blue, 300°=Magenta
  const getHueShift = () => {
    switch(bgType) {
      case 'gold': return 120  // Shift to Gold/Yellow (Green direction from original)
      case 'red': return 90    // Shift to Red/Orange (Yellow-Orange from original)
      default: return 0        // Original DarkVeil color (Blue/Purple/Pink mix)
    }
  }

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* DarkVeil Background */}
      <div className="fixed inset-0" style={{ zIndex: 0 }}>
        <DarkVeil
          hueShift={getHueShift()}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1}
        />
      </div>

      {/* Blur Layer - Full screen overlay */}
      <div 
        className="fixed inset-0 pointer-events-none transition-all duration-500"
        style={{ 
          zIndex: 1,
          backdropFilter: `blur(${blurIntensity}px)`,
          WebkitBackdropFilter: `blur(${blurIntensity}px)`,
        }}
      />

      {/* Fixed Controls - Always Visible */}
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-3">
        {/* Background Color Switcher */}
        <div className="flex gap-3">
        {/* Background Switcher */}
        <button 
          onClick={() => setBgType('default')}
          className="glass-button" 
          style={{ 
            background: bgType === 'default' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)', 
            backdropFilter: 'blur(16px) saturate(120%)', 
            WebkitBackdropFilter: 'blur(16px) saturate(120%)', 
            color: '#fff', 
            border: bgType === 'default' ? '2px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.2)', 
            padding: '10px 20px', 
            borderRadius: '12px', 
            fontWeight: '600', 
            cursor: 'pointer', 
            transition: 'all 0.3s ease',
            fontSize: '14px'
          }}>
          Original
        </button>
        <button 
          onClick={() => setBgType('gold')}
          className="glass-button" 
          style={{ 
            background: bgType === 'gold' ? 'rgba(251, 191, 36, 0.2)' : 'rgba(255, 255, 255, 0.05)', 
            backdropFilter: 'blur(16px) saturate(120%)', 
            WebkitBackdropFilter: 'blur(16px) saturate(120%)', 
            color: goldAccent, 
            border: bgType === 'gold' ? '2px solid rgba(251, 191, 36, 0.5)' : '1px solid rgba(255, 255, 255, 0.2)', 
            padding: '10px 20px', 
            borderRadius: '12px', 
            fontWeight: '600', 
            cursor: 'pointer', 
            transition: 'all 0.3s ease',
            fontSize: '14px'
          }}>
          Gold
        </button>
        <button 
          onClick={() => setBgType('red')}
          className="glass-button" 
          style={{ 
            background: bgType === 'red' ? 'rgba(225, 29, 72, 0.2)' : 'rgba(255, 255, 255, 0.05)', 
            backdropFilter: 'blur(16px) saturate(120%)', 
            WebkitBackdropFilter: 'blur(16px) saturate(120%)', 
            color: primaryRed, 
            border: bgType === 'red' ? '2px solid rgba(225, 29, 72, 0.5)' : '1px solid rgba(255, 255, 255, 0.2)', 
            padding: '10px 20px', 
            borderRadius: '12px', 
            fontWeight: '600', 
            cursor: 'pointer', 
            transition: 'all 0.3s ease',
            fontSize: '14px'
          }}>
          Red
        </button>
        
        {/* Hide/Show Content Button */}
        <button 
          onClick={() => setHideContent(!hideContent)}
          className="glass-button" 
          style={{ 
            background: hideContent ? 'rgba(225, 29, 72, 0.2)' : 'rgba(255, 255, 255, 0.05)', 
            backdropFilter: 'blur(16px) saturate(120%)', 
            WebkitBackdropFilter: 'blur(16px) saturate(120%)', 
            color: hideContent ? primaryRed : '#fff', 
            border: hideContent ? '2px solid rgba(225, 29, 72, 0.5)' : '1px solid rgba(255, 255, 255, 0.2)', 
            padding: '10px 20px', 
            borderRadius: '12px', 
            fontWeight: '600', 
            cursor: 'pointer', 
            transition: 'all 0.3s ease',
            fontSize: '14px'
          }}>
          {hideContent ? 'Show Demo' : 'Hide Demo'}
        </button>
        </div>

        {/* Blur Control */}
        <div 
          className="glass-button flex items-center gap-3"
          style={{ 
            background: 'rgba(255, 255, 255, 0.05)', 
            backdropFilter: 'blur(16px) saturate(120%)', 
            WebkitBackdropFilter: 'blur(16px) saturate(120%)', 
            border: '1px solid rgba(255, 255, 255, 0.2)', 
            padding: '10px 16px', 
            borderRadius: '12px',
            pointerEvents: 'auto'
          }}>
          <span className="text-white text-sm font-semibold whitespace-nowrap">Blur: {blurIntensity}px</span>
          <input 
            type="range" 
            min="0" 
            max="50" 
            value={blurIntensity}
            onChange={(e) => setBlurIntensity(Number(e.target.value))}
            className="w-32"
            style={{
              accentColor: primaryRed
            }}
          />
        </div>
      </div>

      {/* Content */}
      {!hideContent && (
        <div className="relative z-10 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Luxury Design Demo</h1>
        <p className="text-center text-gray-400 mb-12">تجربة التصميم الفخم مع Glass Effect</p>

        {/* Color Info */}
        <div className="glass rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4" style={{ color: primaryRed }}>
            اللون الرسمي + لمسة ذهبية بسيطة
          </h2>
          <p className="text-gray-300 mb-6">اللون الأحمر الرسمي مع استخدام بسيط جداً للذهبي كـ accent</p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div
                className="w-full h-32 rounded-xl shadow-lg mb-3"
                style={{ background: primaryRed, boxShadow: `0 8px 32px ${primaryRed}50` }}
              />
              <code className="text-sm text-gray-400">{primaryRed}</code>
              <p className="text-xs text-gray-500 mt-1 font-semibold">اللون الرسمي الأساسي</p>
            </div>
            <div className="text-center">
              <div
                className="w-full h-32 rounded-xl shadow-lg mb-3"
                style={{ background: goldAccent, boxShadow: `0 8px 32px ${goldAccent}30` }}
              />
              <code className="text-sm text-gray-400">{goldAccent}</code>
              <p className="text-xs text-gray-500 mt-1">استخدام بسيط جداً</p>
            </div>
          </div>
        </div>

        {/* Glass Button Kit */}
        <div className="space-y-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: primaryRed }}>Glass Button Kit</h2>
          
          {/* Primary Buttons */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4" style={{ color: primaryRed }}>Primary Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <button className="glass-button" style={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(16px) saturate(120%)', WebkitBackdropFilter: 'blur(16px) saturate(120%)', color: primaryRed, border: '1px solid rgba(255, 255, 255, 0.15)', padding: '14px 32px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)' }}>
                Large Button
              </button>
              <button className="glass-button" style={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(16px) saturate(120%)', WebkitBackdropFilter: 'blur(16px) saturate(120%)', color: primaryRed, border: '1px solid rgba(255, 255, 255, 0.15)', padding: '12px 24px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)' }}>
                Medium Button
              </button>
              <button className="glass-button" style={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(16px) saturate(120%)', WebkitBackdropFilter: 'blur(16px) saturate(120%)', color: primaryRed, border: '1px solid rgba(255, 255, 255, 0.15)', padding: '10px 20px', borderRadius: '10px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)', fontSize: '14px' }}>
                Small Button
              </button>
            </div>
          </div>

          {/* Icon Buttons */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4" style={{ color: primaryRed }}>Icon Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <button className="glass-button" style={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(16px) saturate(120%)', WebkitBackdropFilter: 'blur(16px) saturate(120%)', color: primaryRed, border: '1px solid rgba(255, 255, 255, 0.15)', padding: '12px 24px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>→</span> Next
              </button>
              <button className="glass-button" style={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(16px) saturate(120%)', WebkitBackdropFilter: 'blur(16px) saturate(120%)', color: primaryRed, border: '1px solid rgba(255, 255, 255, 0.15)', padding: '12px 24px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                ← Back
              </button>
              <button className="glass-button" style={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(16px) saturate(120%)', WebkitBackdropFilter: 'blur(16px) saturate(120%)', color: primaryRed, border: '1px solid rgba(255, 255, 255, 0.15)', padding: '12px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                ✕
              </button>
            </div>
          </div>

          {/* Rounded Variants */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4" style={{ color: primaryRed }}>Rounded Variants</h3>
            <div className="flex flex-wrap gap-4">
              <button className="glass-button" style={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(16px) saturate(120%)', WebkitBackdropFilter: 'blur(16px) saturate(120%)', color: primaryRed, border: '1px solid rgba(255, 255, 255, 0.15)', padding: '12px 24px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)' }}>
                Rounded 8px
              </button>
              <button className="glass-button" style={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(16px) saturate(120%)', WebkitBackdropFilter: 'blur(16px) saturate(120%)', color: primaryRed, border: '1px solid rgba(255, 255, 255, 0.15)', padding: '12px 24px', borderRadius: '16px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)' }}>
                Rounded 16px
              </button>
              <button className="glass-button" style={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(16px) saturate(120%)', WebkitBackdropFilter: 'blur(16px) saturate(120%)', color: primaryRed, border: '1px solid rgba(255, 255, 255, 0.15)', padding: '12px 32px', borderRadius: '9999px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)' }}>
                Pill Shape
              </button>
            </div>
          </div>

          {/* Full Width */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4" style={{ color: primaryRed }}>Full Width</h3>
            <button className="glass-button w-full" style={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(16px) saturate(120%)', WebkitBackdropFilter: 'blur(16px) saturate(120%)', color: primaryRed, border: '1px solid rgba(255, 255, 255, 0.15)', padding: '14px 32px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)' }}>
              Full Width Button
            </button>
          </div>

          {/* Button Group */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4" style={{ color: primaryRed }}>Button Group</h3>
            <div className="flex gap-0">
              <button className="glass-button" style={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(16px) saturate(120%)', WebkitBackdropFilter: 'blur(16px) saturate(120%)', color: primaryRed, border: '1px solid rgba(255, 255, 255, 0.15)', borderRight: 'none', padding: '12px 24px', borderRadius: '12px 0 0 12px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)' }}>
                Left
              </button>
              <button className="glass-button" style={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(16px) saturate(120%)', WebkitBackdropFilter: 'blur(16px) saturate(120%)', color: primaryRed, border: '1px solid rgba(255, 255, 255, 0.15)', borderRight: 'none', padding: '12px 24px', borderRadius: '0', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)' }}>
                Center
              </button>
              <button className="glass-button" style={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(16px) saturate(120%)', WebkitBackdropFilter: 'blur(16px) saturate(120%)', color: primaryRed, border: '1px solid rgba(255, 255, 255, 0.15)', padding: '12px 24px', borderRadius: '0 12px 12px 0', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)' }}>
                Right
              </button>
            </div>
          </div>

          {/* Loading State */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4" style={{ color: primaryRed }}>States</h3>
            <div className="flex flex-wrap gap-4">
              <button className="glass-button" style={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(16px) saturate(120%)', WebkitBackdropFilter: 'blur(16px) saturate(120%)', color: primaryRed, border: '1px solid rgba(255, 255, 255, 0.15)', padding: '12px 24px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading
              </button>
              <button className="glass-button" disabled style={{ background: 'rgba(255, 255, 255, 0.01)', backdropFilter: 'blur(16px) saturate(120%)', WebkitBackdropFilter: 'blur(16px) saturate(120%)', color: 'rgba(225, 29, 72, 0.4)', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '12px 24px', borderRadius: '12px', fontWeight: '600', cursor: 'not-allowed', transition: 'all 0.3s ease', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)' }}>
                Disabled
              </button>
              <button className="glass-button" style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(16px) saturate(120%)', WebkitBackdropFilter: 'blur(16px) saturate(120%)', color: primaryRed, border: '1px solid rgba(255, 255, 255, 0.3)', padding: '12px 24px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 8px 24px rgba(225, 29, 72, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)' }}>
                Active/Hover
              </button>
            </div>
          </div>
        </div>


        {/* Back Button */}
        <div className="text-center">
          <a
            href="/"
            className="glass-button inline-block px-8 py-3"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(16px) saturate(120%)',
              WebkitBackdropFilter: 'blur(16px) saturate(120%)',
              color: primaryRed,
              border: '1px solid rgba(255, 255, 255, 0.15)',
              textDecoration: 'none'
            }}
          >
            ← رجوع للصفحة الرئيسية
          </a>
        </div>
        </div>
      )}
    </div>
  )
}
