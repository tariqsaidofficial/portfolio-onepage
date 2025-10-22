'use client';

import { useState } from 'react';

type RobotView = 'hero-demo' | 'chatbot-demo';

export default function RobotDemo() {
  const [selectedView, setSelectedView] = useState<RobotView>('hero-demo');

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 relative z-[9999]">
      {/* Header */}
      <div className="text-center py-6 px-4 border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Genku Robot 🤖
        </h1>
        <p className="text-gray-400 text-sm mb-4">Interactive 3D Model Demos</p>
        
        {/* View Selector */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedView('hero-demo')}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
              selectedView === 'hero-demo'
                ? 'bg-gradient-to-r from-green-600 to-cyan-600 text-white shadow-lg scale-105'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            🎯 Hero Section Demo
          </button>
          <button
            onClick={() => setSelectedView('chatbot-demo')}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
              selectedView === 'chatbot-demo'
                ? 'bg-gradient-to-r from-green-600 to-cyan-600 text-white shadow-lg scale-105'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            💬 Chatbot Demo
          </button>
        </div>
      </div>

      {/* Content */}
      {selectedView === 'hero-demo' ? (
        <HeroDemo />
      ) : (
        <ChatbotDemo />
      )}

      {/* Footer */}
      <div className="text-center py-6 px-4 border-t border-gray-800 bg-black/50">
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-lg transition-colors"
        >
          <span>←</span>
          <span>Back to Portfolio</span>
        </a>
      </div>
    </div>
  );
}

// Hero Section Demo Component
function HeroDemo() {
  return (
    <div className="min-h-[calc(100vh-200px)]">
      {/* Hero Section with Robot */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          {/* Left: Robot (Normal Direction - No Flip) - Free Floating */}
          <div className="relative h-[400px] md:h-[450px] lg:h-[500px]">
            {/* Robot - Normal direction, cropped to hide watermark */}
            <iframe 
              src='https://my.spline.design/genkubgreetingrobot-0wbWxIvMlpRXKyJYFVWuRblj/' 
              frameBorder='0' 
              className="absolute inset-0 w-full h-full"
              title="Genku Robot - Hero"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ 
                background: 'transparent',
                pointerEvents: 'auto',
                border: 'none',
                outline: 'none',
              }}
            />
          </div>
          
          {/* Right: Text Content */}
          <div className="space-y-6 text-white">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-600/20 to-cyan-600/20 border border-green-600/30 rounded-full text-green-400 text-sm font-semibold">
              ✨ Welcome to the Future
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Meet Your
              <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                AI Assistant
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Experience the next generation of interactive 3D technology. Our Genku Robot is here to welcome you and guide you through an amazing digital journey.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-green-500/50 hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl transition-all border border-gray-700">
                Learn More
              </button>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-gray-400">Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">100%</div>
                <div className="text-sm text-gray-400">Interactive</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">AI</div>
                <div className="text-sm text-gray-400">Powered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Info */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Implementation Notes */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
            <h3 className="text-white font-semibold mb-4 text-center">💡 Implementation Notes</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <span className="text-green-400 font-semibold">Robot Position:</span>
                <span className="ml-2">Left side, normal direction (no flip)</span>
              </div>
              <div>
                <span className="text-cyan-400 font-semibold">Size:</span>
                <span className="ml-2">400-500px (smaller hero size)</span>
              </div>
              <div>
                <span className="text-blue-400 font-semibold">Style:</span>
                <span className="ml-2">Completely free - no borders, no containers</span>
              </div>
              <div>
                <span className="text-purple-400 font-semibold">Background:</span>
                <span className="ml-2">Transparent - blends with page</span>
              </div>
            </div>
          </div>
          
          {/* Watermark Solution Applied */}
          <div className="bg-green-900/20 backdrop-blur-sm border border-green-800/50 rounded-2xl p-6">
            <h3 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
              <span>✅</span>
              <span>Clean Crop Strategy (No Overlay)</span>
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p>
                <span className="text-green-300 font-semibold">الحل المطبق:</span> Smart Crop فقط - بدون overlay
              </p>
              <div className="bg-gray-900/50 rounded-lg p-4 space-y-3">
                <div>
                  <p className="text-yellow-400 font-semibold mb-2">🎯 Hero Section Strategy:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                    <li><span className="text-cyan-400">Size:</span> 400-500px (smaller, cleaner look)</li>
                    <li><span className="text-purple-400">Position:</span> Robot on LEFT, Text on RIGHT</li>
                    <li><span className="text-blue-400">Style:</span> No borders, no containers - completely free floating</li>
                    <li><span className="text-green-400">Background:</span> Transparent - blends naturally with page</li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-3">
                <p className="text-blue-300 text-xs">
                  💡 <span className="font-semibold">لماذا هذا أفضل؟</span> بدون overlay يعمل مع أي خلفية متحركة، والروبوت في اتجاهه الطبيعي
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Chatbot Demo Component
function ChatbotDemo() {
  return (
    <div className="min-h-[calc(100vh-200px)] relative">
      {/* Demo Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Chatbot Widget Demo</h2>
          <p className="text-gray-300 text-lg">
            This shows how the robot appears as a floating chatbot widget, positioned above the WhatsApp button.
          </p>
          
          {/* Simulated Page Content */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-semibold mb-4">Your Page Content Here</h3>
            <p className="text-gray-400">
              The robot chatbot will float in the bottom-right corner, just above the WhatsApp button.
              It's always accessible and ready to help your visitors.
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating Chatbot Widget (Mini Size) - Completely Free, No Containers */}
      <div className="fixed bottom-24 right-6 z-50">
        <div className="relative group w-20 h-20 md:w-24 md:h-24">
          {/* Robot - Free floating, no borders or containers */}
          <iframe 
            src='https://my.spline.design/genkubgreetingrobot-0wbWxIvMlpRXKyJYFVWuRblj/' 
            frameBorder='0' 
            className="absolute inset-0 w-full h-full"
            title="Genku Robot - Chatbot"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{ 
              background: 'transparent',
              pointerEvents: 'auto',
              border: 'none',
              outline: 'none',
            }}
          />
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl border border-gray-700">
              <div className="font-semibold">Need Help?</div>
              <div className="text-xs text-gray-400">Chat with Genku</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Simulated WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </div>
      </div>
      
      {/* Info */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Implementation Notes */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
            <h3 className="text-white font-semibold mb-4 text-center">💡 Implementation Notes</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <span className="text-green-400 font-semibold">Size:</span>
                <span className="ml-2">80-96px (mini chatbot size)</span>
              </div>
              <div>
                <span className="text-cyan-400 font-semibold">Position:</span>
                <span className="ml-2">Fixed bottom-right, above WhatsApp (bottom-24 right-6)</span>
              </div>
              <div>
                <span className="text-blue-400 font-semibold">Direction:</span>
                <span className="ml-2">Normal direction (no flip)</span>
              </div>
              <div>
                <span className="text-purple-400 font-semibold">Style:</span>
                <span className="ml-2">Free floating - no borders or containers</span>
              </div>
            </div>
          </div>
          
          {/* Watermark Solution Applied */}
          <div className="bg-green-900/20 backdrop-blur-sm border border-green-800/50 rounded-2xl p-6">
            <h3 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
              <span>✅</span>
              <span>Ultra Crop Strategy (No Overlay) - Mini Bot</span>
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p>
                <span className="text-green-300 font-semibold">الحل المطبق:</span> Ultra Aggressive Crop - بدون overlay
              </p>
              <div className="bg-gray-900/50 rounded-lg p-4 space-y-3">
                <div>
                  <p className="text-yellow-400 font-semibold mb-2">🎯 Mini Bot Strategy:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                    <li><span className="text-purple-400">Size:</span> 80-96px (w-20 h-20 md:w-24 md:h-24)</li>
                    <li><span className="text-cyan-400">Style:</span> Completely free - no borders, no rounded containers</li>
                    <li><span className="text-blue-400">Background:</span> Transparent - blends with page</li>
                    <li><span className="text-green-400">Position:</span> Fixed bottom-right, above WhatsApp</li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-3">
                <p className="text-blue-300 text-xs">
                  💡 <span className="font-semibold">لماذا هذا أفضل؟</span> بدون overlay = يعمل مع أي خلفية متحركة بدون مشاكل بصرية
                </p>
              </div>
              <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-lg p-3">
                <p className="text-yellow-300 text-xs">
                  ⚠️ <span className="font-semibold">ملاحظة:</span> إذا ظهر الـ watermark، زود الـ zoom لـ 250% أو استخدم Spline Pro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
