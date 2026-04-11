"use client";

import React, { useRef } from "react";
import VantaBG from "@/components/VantaBG";
import CardNav, { CardNavItem, CardNavHandle } from "@/components/CardNav";
import BlurText from "@/components/BlurText";
import Link from "next/link";
import Footer from "@/components/Footer";

const showcaseProjects = [
  { name: 'Sunset Residency', slug: 'sunset-residency' },
  { name: 'Green Valley Villas', slug: 'green-valley-villas' },
  { name: 'Metro Heights', slug: 'metro-heights' },
  { name: 'Riverside Apartments', slug: 'riverside-apartments' },
  { name: 'Sky Towers', slug: 'sky-towers' },
  { name: 'Heritage Bungalows', slug: 'heritage-bungalows' },
];

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
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-30 md:opacity-100">
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
        <div className="hero-container relative z-10 w-full pb-16 md:pb-0">
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

            <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-center mt-6">
              <button
                className="btn-primary w-full md:w-auto"
                onClick={() => window.open('https://wa.me/917359273379', '_blank')}
              >
                Request a Demo
              </button>
              <Link href="/learn-more" className="btn-ghost w-full md:w-auto" style={{ opacity: 0.8 }}>Learn More</Link>
            </div>

          </div>
        </div>
      </main>

      {/* ── Featured Projects Section ── */}
      <section className="bg-[#0a0a0a] text-white py-24 px-6 relative z-20 w-full rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4 text-center items-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 pb-2">
              Featured projects
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl">
              See how Triayam brings buildings to life before construction
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-8">
            {showcaseProjects.map((project) => (
              <div 
                key={project.slug}
                className="flex flex-col bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 group hover:-translate-y-1 shadow-2xl shadow-black/50"
              >
                {/* Image Placeholder */}
                <div className="w-full h-56 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] relative p-4 flex items-center justify-center border-b border-white/5">
                  <svg className="w-16 h-16 text-white/5 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col gap-6 flex-1 justify-between bg-gradient-to-b from-[#0f0f0f] to-[#050505]">
                  <div>
                    <span className="inline-block px-2.5 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/70 mb-3 font-medium uppercase tracking-wider">
                      Real Estate
                    </span>
                    <h3 className="text-2xl font-semibold text-white/90 group-hover:text-white transition-colors">{project.name}</h3>
                  </div>
                  
                  <Link
                    href={`/project/${project.slug}`}
                    className="w-full py-3 px-4 bg-white/10 hover:bg-white text-white hover:text-black font-semibold rounded-xl text-center tracking-tight transition-all active:scale-[0.98] border border-white/10 hover:border-white"
                  >
                    View in 3D
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer appended dynamically since Vanta runs absolute block natively */}
        <div className="mt-20 border-t border-white/10 pt-10">
          <Footer />
        </div>
      </section>
    </>
  );
}