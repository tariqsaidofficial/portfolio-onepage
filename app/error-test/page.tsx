"use client"

import { useState } from "react"
import Link from "next/link"
import { AlertTriangle, Bug, Server, FileQuestion } from "lucide-react"

export default function ErrorTestPage() {
  const [error, setError] = useState<string | null>(null)

  // Test function to trigger client-side error
  const triggerClientError = () => {
    throw new Error("Test client-side error triggered!")
  }

  // Test function to trigger server error (simulated)
  const triggerServerError = async () => {
    try {
      const response = await fetch("/api/test-error")
      if (!response.ok) {
        setError("Server returned error: " + response.status)
      }
    } catch (err) {
      setError("Failed to fetch: " + (err as Error).message)
    }
  }

  return (
    <div className="min-h-screen py-20 px-4 relative" style={{ zIndex: 10 }}>
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Bug className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Error Pages Test
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Test different error scenarios and see how the error pages look
          </p>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-8 p-4 glass rounded-lg border border-destructive/50 bg-destructive/10">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-destructive mt-0.5" />
              <div>
                <p className="font-medium text-destructive mb-1">Error Occurred:</p>
                <p className="text-sm text-muted-foreground">{error}</p>
              </div>
            </div>
            <button
              onClick={() => setError(null)}
              className="mt-3 text-sm text-primary hover:underline"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Test Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* 404 Test */}
          <div className="glass p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <FileQuestion className="w-6 h-6 text-blue-500" />
              <h2 className="text-xl font-bold">404 - Not Found</h2>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Test the 404 page by navigating to a non-existent route.
            </p>
            <Link
              href="/this-page-does-not-exist"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-lg transition-all duration-300"
            >
              Trigger 404
            </Link>
          </div>

          {/* 500 Test */}
          <div className="glass p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Server className="w-6 h-6 text-red-500" />
              <h2 className="text-xl font-bold">500 - Server Error</h2>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              View the custom 500 error page design.
            </p>
            <Link
              href="/500"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg transition-all duration-300"
            >
              View 500 Page
            </Link>
          </div>

          {/* Client Error Test */}
          <div className="glass p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              <h2 className="text-xl font-bold">Client-Side Error</h2>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Trigger a client-side error to test the error boundary.
            </p>
            <button
              onClick={triggerClientError}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-lg transition-all duration-300"
            >
              Trigger Client Error
            </button>
          </div>

          {/* Server Error Test */}
          <div className="glass p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Server className="w-6 h-6 text-purple-500" />
              <h2 className="text-xl font-bold">API Error Test</h2>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Test API error handling (simulated).
            </p>
            <button
              onClick={triggerServerError}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-lg transition-all duration-300"
            >
              Test API Error
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="glass p-6 rounded-2xl border border-border/50">
          <h3 className="text-lg font-bold mb-4">Error Pages Overview</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <div>
                <span className="font-medium text-foreground">404 (not-found.tsx):</span> Shown when a page doesn't exist
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <div>
                <span className="font-medium text-foreground">500 (500/page.tsx):</span> Custom page for server errors
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <div>
                <span className="font-medium text-foreground">error.tsx:</span> Catches errors in the app directory
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <div>
                <span className="font-medium text-foreground">global-error.tsx:</span> Catches critical errors in root layout
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
