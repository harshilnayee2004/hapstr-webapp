"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function VantaClouds() {
  const vantaRef = useRef<HTMLDivElement | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const effectRef = useRef<any>(null)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let vantaEffect: any

    const initVanta = async () => {
      // @ts-expect-error - no declaration file for vanta/dist/vanta.clouds.min
      const CLOUDS = (await import("vanta/dist/vanta.clouds.min")).default

      if (!effectRef.current && vantaRef.current) {
        if (typeof window !== "undefined") {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).THREE = THREE;
        }

        vantaEffect = CLOUDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          backgroundColor: 0xf5f7fa,
          cloudColor: 0xadc1d8,
          cloudShadowColor: 0x1e3650,
          sunGlareColor: 0xff6633,
          sunlightColor: 0xff9933,
          speed: 1.0,
        })

        // Ensure Vanta always stays behind everything, particularly on mobile sizing overrides
        if (vantaRef.current.children[0]) {
          const canvas = vantaRef.current.children[0] as HTMLCanvasElement;
          canvas.style.position = 'absolute';
          canvas.style.zIndex = '-999';
          canvas.style.pointerEvents = 'none';
        }

        effectRef.current = vantaEffect
      }
    }

    initVanta()

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy()
        effectRef.current = null
      }
    }
  }, [])

  return (
    <div
      ref={vantaRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -10,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    />
  )
}