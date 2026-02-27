"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CesiumPage() {
  // when this page loads we make sure the dev server is running and then
  // forward the browser over to the other app (port 3001 by default)
  useEffect(() => {
    fetch("/api/cesium").catch((e) => {
      console.warn("couldn't start cesium-building:", e);
    }).finally(() => {
      // replace the current page with the external app
      window.location.href = "http://localhost:3001";
    });
  }, []);

  return <p>Starting Cesium… redirecting you now.</p>;
}
