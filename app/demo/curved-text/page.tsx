"use client"

import { CurvedLoop } from "@/components/curved-loop"

export default function CurvedTextDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a122c] via-[#1a1a3a] to-[#0a122c] flex items-center justify-center p-8">
      <div className="w-full max-w-7xl">
        <CurvedLoop
          marqueeText="Code ✦ Create ✦ Deliver ✦ With ✦ Me ✦ "
          speed={2}
          curveAmount={300}
          direction="left"
          interactive={true}
          variant="primary"
          size="md"
          position="center"
        />
      </div>
    </div>
  )
}
