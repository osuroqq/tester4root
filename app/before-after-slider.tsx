"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
  height: number
  width: number
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  height,
  width,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const containerWidth = rect.width

      const newPosition = Math.max(0, Math.min(100, (x / containerWidth) * 100))
      setSliderPosition(newPosition)
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.touches[0].clientX - rect.left
      const containerWidth = rect.width

      const newPosition = Math.max(0, Math.min(100, (x / containerWidth) * 100))
      setSliderPosition(newPosition)
    }
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("touchmove", handleTouchMove)
    document.addEventListener("touchend", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleMouseUp)
    }
  }, [isDragging])

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-lg cursor-pointer"
      style={{ height: `${height}px`, width: "100%", maxWidth: `${width}px` }}
      onMouseMove={(e) => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const containerWidth = rect.width;
          const newPosition = Math.max(0, Math.min(100, (x / containerWidth) * 100));
          setSliderPosition(newPosition);
        }
      }}
    >
      {/* After Image (Full) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage || "/placeholder.svg"}
          alt={afterAlt}
          width={width}
          height={height}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Before Image (Partial, controlled by slider) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <Image
          src={beforeImage || "/placeholder.svg"}
          alt={beforeAlt}
          width={width}
          height={height}
          className="object-cover w-full h-full"
          style={{ width: `${width}px` }}
        />
      </div>

      {/* Slider Control */}
      <div className="absolute inset-y-0" style={{ left: `calc(${sliderPosition}% - 2px)` }}>
        <div className="absolute inset-y-0 w-1 bg-white"></div>
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-primary"
        >
          <div className="flex items-center justify-center">
            <div className="w-1 h-5 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 bg-black/60 text-white px-2 py-1 text-sm rounded">Before</div>
      <div className="absolute bottom-4 right-4 bg-black/60 text-white px-2 py-1 text-sm rounded">After</div>
    </div>
  )
}
