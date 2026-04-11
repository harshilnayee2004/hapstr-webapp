import React from "react";
import Link from "next/link";
import "./CardNav.css";

export default function CardNav() {
  return (
    <div className="cn-container">
      <nav className="cn-nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', overflow: 'visible' }}>
        <div className="flex items-center gap-2">
          <img src="/vercel.svg" alt="Logo" className="cn-logo" />
          <span className="cn-brand-name">Triayam</span>
        </div>

        <div className="hidden md:flex gap-8 items-center">
          <Link href="#how-it-works" className="text-[13.5px] font-medium text-white/60 hover:text-white transition">
            How it works
          </Link>
          <Link href="#for-builders" className="text-[13.5px] font-medium text-white/60 hover:text-white transition">
            For Builders
          </Link>
        </div>

        <button className="cn-cta">
          Get Demo
        </button>
      </nav>
    </div>
  );
}