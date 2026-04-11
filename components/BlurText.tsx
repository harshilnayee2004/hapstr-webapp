"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import type { JSX } from "react";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export default function BlurText({
  text,
  className = "",
  delay = 120,
  duration = 900,
  threshold = 0.1,
  once = true,
}: BlurTextProps): JSX.Element {
  const words = useMemo(() => text.split(" "), [text]);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setTriggered(false);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  return (
    <p ref={ref} className={`blur-text-wrapper ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="blur-word"
          style={{
            animationDelay: `${i * delay}ms`,
            animationDuration: `${duration}ms`,
            animationFillMode: "both",
            animationName: triggered ? "blurFadeIn" : "none",
            animationTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}

      <style>{`
        .blur-text-wrapper {
          display: flex;
          flex-wrap: wrap;
          margin: 0;
          padding: 0;
          line-height: inherit;
        }
        .blur-word {
          display: inline-block;
          opacity: 0;
          will-change: transform, opacity, filter;
        }
        @keyframes blurFadeIn {
          0%   { opacity: 0; filter: blur(14px); transform: translateY(10px); }
          50%  { opacity: 0.8; filter: blur(3px);  transform: translateY(-2px); }
          100% { opacity: 1; filter: blur(0px);  transform: translateY(0px); }
        }
      `}</style>
    </p>
  );
}