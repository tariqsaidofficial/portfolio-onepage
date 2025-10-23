/**
 * Loading Skeleton Component - Placeholder for lazy-loaded components
 * 
 * @component
 */
export function LoadingSkeleton({ 
  height = "min-h-screen",
  showPulse = true 
}: { 
  height?: string
  showPulse?: boolean 
}) {
  return (
    <div className={`${height} flex items-center justify-center bg-background/50`}>
      <div className="text-center space-y-4">
        {showPulse && (
          <div className="relative w-16 h-16 mx-auto">
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
            <div className="relative w-16 h-16 rounded-full bg-primary/40 animate-pulse" />
          </div>
        )}
        <div className="text-sm text-muted-foreground animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  )
}

/**
 * Section Loading Skeleton - Specific for section components
 */
export function SectionLoadingSkeleton() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-8 animate-pulse">
          {/* Title skeleton */}
          <div className="h-12 bg-muted/20 rounded-lg w-1/3 mx-auto" />
          
          {/* Content skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-muted/10 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
