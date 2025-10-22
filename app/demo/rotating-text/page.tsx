"use client"

import dynamic from 'next/dynamic'

const RotatingText = dynamic(() => import("@/components/rotating-text").then(mod => ({ default: mod.RotatingText })), { ssr: false })
const RotatingTextTypewriter = dynamic(() => import("@/components/rotating-text-typewriter").then(mod => ({ default: mod.RotatingTextTypewriter })), { ssr: false })
const RotatingTextFlip = dynamic(() => import("@/components/rotating-text-flip").then(mod => ({ default: mod.RotatingTextFlip })), { ssr: false })
const RotatingTextSlideScale = dynamic(() => import("@/components/rotating-text-slide-scale").then(mod => ({ default: mod.RotatingTextSlideScale })), { ssr: false })

const expertiseList = [
  "Full-Stack Developer",
  "AudioVisual Specialist",
  "IT & DevOps Expert",
  "Event Producer",
  "Media Creator",
  "AI Prompt Engineer",
  "Certified Audio Tech",
  "Conference Tech Director",
  "Video Production Specialist"
]

export default function RotatingTextDemo() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <div className="container mx-auto max-w-6xl space-y-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Rotating Text Animations Demo</h1>
          <p className="text-muted-foreground">اختار الـ Animation اللي يعجبك</p>
        </div>

        {/* Current Version - Stagger from Last */}
        <div className="glass rounded-2xl p-8 border border-gray-800">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold mb-2">
              Current Version
            </span>
            <h2 className="text-2xl font-bold text-white">Stagger Animation (من آخر حرف)</h2>
            <p className="text-sm text-muted-foreground mt-1">الحروف تظهر واحدة واحدة من الآخر للأول</p>
          </div>
          
          <div className="bg-gray-900/50 rounded-xl p-12 text-center">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              I'm Tariq Said
              <span className="block text-primary mt-4">
                <RotatingText texts={expertiseList} interval={2500} />
              </span>
            </h1>
          </div>
        </div>

        {/* Option 1: Typewriter */}
        <div className="glass rounded-2xl p-8 border border-gray-800">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold mb-2">
              Option 1
            </span>
            <h2 className="text-2xl font-bold text-white">Typewriter Effect</h2>
            <p className="text-sm text-muted-foreground mt-1">يكتب الحروف واحدة واحدة ثم يمسحها - مناسب لـ developer portfolio</p>
          </div>
          
          <div className="bg-gray-900/50 rounded-xl p-12 text-center">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              I'm Tariq Said
              <span className="block text-primary mt-4">
                <RotatingTextTypewriter texts={expertiseList} interval={2000} />
              </span>
            </h1>
          </div>
        </div>

        {/* Option 2: 3D Flip */}
        <div className="glass rounded-2xl p-8 border border-gray-800">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold mb-2">
              Option 2
            </span>
            <h2 className="text-2xl font-bold text-white">3D Flip Animation</h2>
            <p className="text-sm text-muted-foreground mt-1">الكلمة تلف 3D على محور X - مبهر وmodern</p>
          </div>
          
          <div className="bg-gray-900/50 rounded-xl p-12 text-center">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              I'm Tariq Said
              <span className="block text-primary mt-4">
                <RotatingTextFlip texts={expertiseList} interval={2500} />
              </span>
            </h1>
          </div>
        </div>

        {/* Option 3: Slide + Scale */}
        <div className="glass rounded-2xl p-8 border border-gray-800">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold mb-2">
              Option 3
            </span>
            <h2 className="text-2xl font-bold text-white">Slide + Scale Animation</h2>
            <p className="text-sm text-muted-foreground mt-1">تطلع من تحت مع تكبير خفيف - ناعم وprofessional</p>
          </div>
          
          <div className="bg-gray-900/50 rounded-xl p-12 text-center">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              I'm Tariq Said
              <span className="block text-primary mt-4">
                <RotatingTextSlideScale texts={expertiseList} interval={2500} />
              </span>
            </h1>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-900/20 border border-blue-800/30 rounded-xl p-6 text-center">
          <p className="text-blue-300">
            💡 <span className="font-semibold">شوف كل الـ Animations وقولي أي واحد يعجبك!</span>
          </p>
          <p className="text-blue-400/70 text-sm mt-2">
            كل animation ليها مميزاتها - اختار اللي يناسب شخصيتك
          </p>
        </div>
      </div>
    </main>
  )
}
