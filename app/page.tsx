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
      label: 'How it works',
      bgImage: '/earth.png',
      links: [
        { label: 'For Builders', href: '/learn-more', ariaLabel: 'For Builders' },
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
            brandName="Triayam"
            ctaLabel="Request a Demo"
            onCtaClick={() => window.open('https://wa.me/917359273379', '_blank')}
            items={navItems}
          />
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

            <div className="hero-btns flex flex-wrap gap-4 items-center justify-center">
              <button
                className="btn-primary"
                onClick={() => window.open('https://wa.me/917359273379', '_blank')}
              >
                Request a Demo
              </button>
              <Link href="/showcase" className="btn-ghost">View Projects</Link>
              <Link href="/learn-more" className="btn-ghost" style={{ opacity: 0.8 }}>Learn More</Link>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}