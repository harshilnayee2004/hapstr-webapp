"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";


export interface CardProps {
  title: string;
  children: React.ReactNode;
  /** Tailwind bg-* class for the card header accent, e.g. "bg-violet-600" */
  accentColor?: string;
  /** Tailwind text-* class for the header text color, defaults to white */
  accentText?: string;
}

export function Card({
  title,
  children,
  accentColor = "bg-[#0f0f0f]",
  accentText = "text-white/70",
}: CardProps) {
  return (
    <div className="h-full w-full rounded-2xl bg-[#111] border border-white/10 overflow-hidden text-white shadow-2xl">

      {/* Header */}
      <div className={`flex items-center gap-2 px-5 py-4 border-b border-white/10 ${accentColor} text-xs ${accentText} font-semibold tracking-wide`}>
        <span className={`w-2.5 h-2.5 rounded-full ${accentText.replace("text", "bg").replace("/70", "")} bg-white/80`} />
        {title}
      </div>

      {/* Body */}
      <div className="p-8 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

interface SwapProps {
  children: React.ReactNode[];
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
}

export default function CardSwap({
  children,
  cardDistance = 70,
  verticalDistance = 30,
  delay = 4000,
}: SwapProps) {
  const [index, setIndex] = useState(0);
  const cards = children;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, delay);

    return () => clearInterval(interval);
  }, [cards.length, delay]);

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <div
      className="relative w-full h-[360px] perspective-[1200px] cursor-pointer"
      onClick={handleClick}
    >
      {cards.map((child, i) => {
        const offset = (i - index + cards.length) % cards.length;

        return (
          <motion.div
            key={i}
            className="absolute inset-0"
            animate={{
              x: offset * cardDistance,
              y: offset * verticalDistance,
              rotate: offset === 0 ? 0 : -5,
              scale: offset === 0 ? 1 : 0.94,
              opacity: offset > 2 ? 0 : 1,
              zIndex: cards.length - offset,
            }}
            transition={{ duration: 0.6 }}
            style={{ transformOrigin: "top right" }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}