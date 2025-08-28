"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageIcon } from "lucide-react"

interface ImageWithFallbackProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: ImageWithFallbackProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  if (imageError) {
    return (
      <div
        className={`bg-slate-100 flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt}
      >
        <div className="text-center">
          <ImageIcon className="h-8 w-8 text-slate-400 mx-auto mb-2" />
          <p className="text-sm text-slate-500">Image unavailable</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {isLoading && (
        <div
          className={`absolute inset-0 bg-slate-100 flex items-center justify-center ${className}`}
          style={{ width, height }}
        >
          <div className="animate-pulse bg-slate-200 w-full h-full rounded"></div>
        </div>
      )}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        onError={() => {
          console.error("[v0] Image failed to load:", src)
          setImageError(true)
          setIsLoading(false)
        }}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}
