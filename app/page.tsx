"use client";

import React, { useRef } from "react";
import VantaBG from "@/components/VantaBG";
import CardNav, { CardNavItem, CardNavHandle } from "@/components/CardNav";
import BlurText from "@/components/BlurText";
import Link from "next/link";
export default function Home() {
  const cardNavRef = useRef<CardNavHandle>(null);
  const navItems: CardNavItem[] = [
    {
      label: "3D Exploration",
      bgImage: "/earth.png",
      links: [
        // navigate to the special /cesium route which fires up the
        // cesium-building app and then redirects the user
        { label: "Overview", href: "/cesium", ariaLabel: "Overview" },

      ],
    },
    {
      label: "Live Open Homes",
      bgImage: "/images/resources.jpg",
      links: [
        { label: "Docs", href: "#", ariaLabel: "Documentation" },
        { label: "Tutorials", href: "#", ariaLabel: "Tutorials" },
      ],
    },
    {
      label: "Smart Insights",
      bgImage: "/images/company.jpg",
      links: [
        { label: "About", href: "#", ariaLabel: "About us" },
        { label: "Careers", href: "#", ariaLabel: "Careers" },
      ],
    },
  ];

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
          <CardNav
            ref={cardNavRef}
            logo="/vercel.svg"
            logoAlt="Logo"
            brandName="Hapstr"
            ctaLabel="Get Started"
            items={navItems}
          />
        </div>

        {/* ── Hero ── */}
        <div className="hero-container">
          <div className="hero-inner">

            <BlurText
              text="Discover your next home in stunning 3D."
              delay={120}
              duration={950}
              className="hero-h1"
            />

            <BlurText
              text="Start your virtual tour today."
              delay={100}
              duration={850}
              className="hero-sub"
            />

            <div className="hero-btns">
              <button
                className="btn-primary"
                onClick={() => cardNavRef.current?.openNav()}
              >
                Get Started
              </button>
              <Link href="/learn-more" className="btn-ghost">Learn More</Link>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}