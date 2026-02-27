"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";


export default function VantaBG() {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    const effect = GLOBE({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 0.75,          // shrinks globe on mobile so it doesn't overflow
      size: isMobile ? 1.4 : 2.2, // smaller globe on phones
      color: 0x000000,
      color2: 0x000000,
      backgroundColor: 0xffffff,
    });

    return () => {
      if (effect) effect.destroy();
    };
  }, []);
  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -10,
        overflow: "hidden",
        pointerEvents: "none", // ✅ THIS FIXES EVERYTHING
      }}
    />
  );
}