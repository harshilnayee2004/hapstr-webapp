"use client";

import CardSwap, { Card } from "@/components/CardSwap";
import Link from "next/link";
import VantaClouds from "@/components/vantaclouds";
import Footer from "@/components/Footer";

import {
  HiOutlineGlobeAlt,
  HiOutlineUserGroup,
  HiOutlineCpuChip,
  HiOutlineFunnel,
  HiOutlineMapPin,
  HiOutlineVideoCameraSlash,
  HiOutlineBolt,
  HiOutlineChartBarSquare,
} from "react-icons/hi2";

export default function LearnMore() {
  const features = [
    { label: "3D Maps", Icon: HiOutlineGlobeAlt, desc: "Fly through real properties in full 3D." },
    { label: "Live Agents", Icon: HiOutlineUserGroup, desc: "Connect with agents in real time." },
    { label: "AI Analytics", Icon: HiOutlineCpuChip, desc: "Market intelligence powered by AI." },
    { label: "Smart Filters", Icon: HiOutlineFunnel, desc: "Find exactly what you're looking for." },
    { label: "Geo Pins", Icon: HiOutlineMapPin, desc: "Precise location mapping for every listing." },
    { label: "Virtual Tours", Icon: HiOutlineVideoCameraSlash, desc: "Walk through homes from anywhere." },
    { label: "Real-time Sync", Icon: HiOutlineBolt, desc: "Listings updated the moment they change." },
    { label: "Data Insights", Icon: HiOutlineChartBarSquare, desc: "Deep dives into neighbourhood trends." },
  ];

  return (
    <main
      className="lm-root"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      {/* ── Back to Home ── */}
      <Link href="/" className="lm-back">
        ← Back to Home
      </Link>

      {/* ═══════════════════════════════════════
          HERO — white background, black text
      ═══════════════════════════════════════ */}
      <section className="lm-hero relative overflow-hidden">

        {/* 🌤 Clouds Background */}
        <div className="absolute inset-0 -z-10">
          <VantaClouds />
        </div>


        <div className="lm-hero-inner relative z-10">

          {/* Left: text */}
          <div className="lm-hero-text">
            <span className="lm-eyebrow">Real estate, reimagined</span>

            <h1 className="lm-h1">
              Hapstr transforms real&nbsp;estate into an{" "}
              <em className="lm-h1-em">interactive</em>{" "}
              3D&nbsp;experience.
            </h1>

            <p className="lm-sub">
              Click the cards to explore what Hapstr can do for you.
            </p>

            <Link href="/" className="lm-cta-primary">
              Get Started
            </Link>
          </div>

          {/* Right: card stack */}
          <div className="lm-cards">
            <CardSwap cardDistance={50} verticalDistance={22}>
              <Card title="🌍  3D Exploration" accentColor="bg-[#0a0a0a]" accentText="text-white">
                <p className="text-sm sm:text-base text-white/70">
                  Navigate properties interactively and explore every angle.
                </p>
              </Card>

              <Card title="🔴  Live Open Homes" accentColor="bg-[#0a0a0a]" accentText="text-white">
                <p className="text-sm sm:text-base text-white/70">
                  Join live virtual walkthroughs with real-time Q&amp;A.
                </p>
              </Card>

              <Card title="📊  Smart Insights" accentColor="bg-[#0a0a0a]" accentText="text-white">
                <p className="text-sm sm:text-base text-white/70">
                  AI-powered analytics and real-time market intelligence.
                </p>
              </Card>
            </CardSwap>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          DIVIDER — thin ruled line
      ═══════════════════════════════════════ */}
      <div className="lm-rule" />

      {/* ═══════════════════════════════════════
          FEATURE GRID — pure black
      ═══════════════════════════════════════ */}
      <section className="lm-grid-section">

        <div className="lm-grid-header">
          <span className="lm-grid-eyebrow">What we offer</span>
          <h2 className="lm-grid-h2">Experience the Platform</h2>
          <p className="lm-grid-sub">A visual overview of Hapstr&apos;s capabilities.</p>
        </div>

        <div className="lm-grid">
          {features.map(({ label, Icon, desc }, i) => (
            <div key={i} className="lm-grid-card">
              <div className="lm-icon-wrap">
                <Icon className="lm-icon" />
              </div>
              <p className="lm-card-label">{label}</p>
              <p className="lm-card-desc">{desc}</p>
            </div>
          ))}
        </div>

      </section>

      {/* ═══════════════════════════════════════
          CLOSING CTA BAND — white
      ═══════════════════════════════════════ */}
      <section className="lm-cta-band">
        <div className="lm-cta-band-inner">
          <span className="lm-cta-band-eyebrow">Ready to explore?</span>
          <h2 className="lm-cta-band-h2">
            Your next home is waiting&nbsp;in&nbsp;3D.
          </h2>
          <p className="lm-cta-band-sub">
            Start your virtual tour instantly — no account required.
          </p>

          <div className="lm-cta-band-btns">
            <Link href="/" className="lm-btn-dark">Get Started</Link>
            <Link href="/" className="lm-btn-outline">Back to Home</Link>
          </div>
        </div>
      </section>

      <Footer />

    </main >
  );
}