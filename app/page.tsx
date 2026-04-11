"use client";

import React from "react";
import VantaBG from "@/components/VantaBG";
import CardNav from "@/components/CardNav";
import BlurText from "@/components/BlurText";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ── Vanta background ── */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <VantaBG />
      </div>

      <main style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}>

        {/* ── Nav ── */}
        <div className="nav-wrapper">
          <CardNav />
        </div>

        {/* ── Hero ── */}
        <div className="hero-container">
          <div className="hero-inner">

            <BlurText
              text="See your building before you build it"
              delay={120}
              duration={950}
              className="hero-h1"
            />

            <BlurText
              text="Triayam turns your sketch into a shareable 3D exterior — so buyers book before you break ground."
              delay={100}
              duration={850}
              className="hero-sub"
            />

            <div className="hero-btns">
              <button className="btn-primary">
                Request a Demo
              </button>
              <Link href="/learn-more" className="btn-ghost">Learn More</Link>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}