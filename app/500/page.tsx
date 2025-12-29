"use client"

import Link from "next/link"
import { FuzzyText } from "@/components/fuzzy-text"
import { Home, ArrowLeft } from "lucide-react"

export default function Error500() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden" style={{ zIndex: 10 }}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-destructive/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-destructive/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-destructive/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* FuzzyText 500 */}
        <div className="mb-8 flex justify-center">
          <FuzzyText
            text="500"
            fontSize={140}
            fontWeight={900}
            color="#dc2626"
            enableHover={true}
            baseIntensity={0.18}
            hoverIntensity={0.5}
          />
        </div>

        {/* Error message */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Internal Server Error
        </h1>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Oops! Something went wrong on our end. Our servers are having a moment.
          <br />
          Please try refreshing the page or come back in a few minutes.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all duration-200 text-lg"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 glass border border-border hover:border-primary/50 text-white font-medium rounded-lg transition-all duration-200 text-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Help text - No helpful links for 500 (server is down) */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            If this problem persists, please{" "}
            <Link href="/#contact" className="text-primary hover:underline">
              contact me
            </Link>{" "}
            and I'll look into it.
          </p>
        </div>
      </div>
    </div>
  )
}
