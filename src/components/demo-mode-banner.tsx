"use client"

import { X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function DemoModeBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-amber-500 dark:bg-amber-600">
      <div className="container flex items-center justify-between py-2 px-4">
        <div className="flex items-center gap-2 text-sm font-medium text-amber-950 dark:text-amber-50">
          <span className="text-lg">🎭</span>
          <span>Demo Mode Active - Using mock data (no persistence)</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(false)}
          className="h-6 w-6 p-0 text-amber-950 hover:bg-amber-600 hover:text-amber-50 dark:text-amber-50 dark:hover:bg-amber-700"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close banner</span>
        </Button>
      </div>
    </div>
  )
}
