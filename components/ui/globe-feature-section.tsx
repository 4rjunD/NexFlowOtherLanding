"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export default function GlobeFeatureSection() {
  return (
    <section className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-3xl bg-white border border-[#E5E2DB] shadow-md px-6 py-16 md:px-16 md:py-24">
      <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
        <div className="z-10 max-w-xl text-left">
          <h1 className="text-3xl font-normal text-[#111111]" style={{ fontFamily: '"New York", Georgia, serif' }}>
            Created by <span className="text-[#1F4D3A]">World-Class Experts</span>{" "}
            <span className="text-[#6B6B6B]" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
              Built with insights from researchers and health professionals at top universities including Stanford, Harvard, Emory, and leading institutions worldwide.
            </span>
          </h1>
          <a href="https://whop.com/nexflow-5714/" target="_blank" rel="noopener noreferrer">
            <Button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1F4D3A] hover:bg-[#163D2E] px-5 py-2 text-sm font-semibold text-white transition">
              Get the Guide <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
        <div className="relative h-[180px] w-full max-w-xl">
          <Globe className="absolute -bottom-20 -right-40 scale-150" />
        </div>
      </div>
    </section>
  );
}

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [31 / 255, 77 / 255, 58 / 255], // Dark green #1F4D3A for university markers
  glowColor: [1, 1, 1],
  markers: [
    { location: [37.4275, -122.1697], size: 0.1 },  // Stanford University
    { location: [42.3770, -71.1167], size: 0.1 },   // Harvard University
    { location: [33.7925, -84.3235], size: 0.1 },   // Emory University
    { location: [52.2043, 0.1149], size: 0.08 },    // Cambridge University
    { location: [51.5246, -0.1340], size: 0.07 },   // UCL London
    { location: [35.6762, 139.6503], size: 0.08 },  // University of Tokyo
    { location: [22.2830, 114.1370], size: 0.07 },  // University of Hong Kong
    { location: [-33.8882, 151.1871], size: 0.07 }, // University of Sydney
    { location: [47.6553, -122.3035], size: 0.06 }, // University of Washington
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  let phi = 0
  let width = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef(null)
  const pointerInteractionMovement = useRef(0)
  const [r, setR] = useState(0)

  const updatePointerInteraction = (value: any) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: any) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      setR(delta / 200)
    }
  }

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005
      state.phi = phi + r
      state.width = width * 2
      state.height = width * 2
    },
    [r],
  )

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    })

    setTimeout(() => (canvasRef.current!.style.opacity = "1"))
    return () => globe.destroy()
  }, [])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}
