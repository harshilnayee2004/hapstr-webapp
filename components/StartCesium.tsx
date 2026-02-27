"use client";

import { useEffect } from "react";

export default function StartCesium() {
  useEffect(() => {
    // fire-and-forget call to start the other Next.js app
    fetch("/api/cesium").catch((e) => {
      console.warn("could not start cesium-building", e);
    });
  }, []);

  return null;
}
