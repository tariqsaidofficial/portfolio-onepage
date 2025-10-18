"use client"

import { useEffect } from "react"
import { RefreshCw, Home, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error("Error boundary caught:", error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-destructive/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-destructive/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-destructive/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Error icon with animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-destructive/20 rounded-full blur-xl animate-pulse" />
            <div className="relative bg-destructive/10 p-6 rounded-full">
              <AlertTriangle className="w-16 h-16 text-destructive" />
            </div>
          </div>
        </div>

        {/* Error title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Something Went Wrong
        </h1>
        
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          We encountered an unexpected error. Don't worry, it's not your fault!
        </p>

        {/* Error details (only in development) */}
        {process.env.NODE_ENV === "development" && (
          <div className="mb-8 p-4 glass rounded-lg text-left max-w-xl mx-auto">
            <p className="text-sm font-mono text-destructive break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-muted-foreground mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all duration-200 text-lg"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 glass border border-border hover:border-primary/50 text-white font-medium rounded-lg transition-all duration-200 text-lg"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
        </div>

        {/* Help text */}
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
