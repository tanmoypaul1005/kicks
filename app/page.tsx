"use client";
import { useState } from "react";
import ReviewsAndFooter from "./Footer";
import HeroSection from "./components/home/HeroSection";
import ProductGrid from "./components/home/ProductGrid";
import CategoriesSlider from "./components/home/Categoriesslider";

// Placeholder shoe images using placeholder service (no external images needed)
const shoeColors = [
  { bg: "from-slate-800 to-slate-600", accent: "#4169E1" },
  { bg: "from-green-900 to-green-700", accent: "#22c55e" },
  { bg: "from-emerald-900 to-teal-700", accent: "#10b981" },
  { bg: "from-orange-600 to-red-700", accent: "#f97316" },
];

function ShoeSVG({ index }) {
  const colors = [
    { body: "#1e40af", sole: "#f8fafc", lace: "#ffffff", accent: "#3b82f6" },
    { body: "#166534", sole: "#f8fafc", lace: "#ffffff", accent: "#22c55e" },
    { body: "#14532d", sole: "#f8fafc", lace: "#e5e7eb", accent: "#4ade80" },
    { body: "#c2410c", sole: "#f8fafc", lace: "#fed7aa", accent: "#fb923c" },
  ];
  const c = colors[index % colors.length];
  return (
    <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Sole */}
      <ellipse cx="100" cy="82" rx="75" ry="12" fill="#e2e8f0" />
      <ellipse cx="100" cy="78" rx="72" ry="9" fill="#f8fafc" />
      {/* Body */}
      <path d="M35 75 Q40 45 80 40 L155 42 Q175 43 168 60 Q162 75 155 75 Z" fill={c.body} />
      {/* Heel */}
      <path d="M35 75 Q32 65 38 55 Q45 45 55 44 L80 40 Q55 48 50 60 Q42 72 35 75 Z" fill={c.accent} />
      {/* Toe */}
      <path d="M135 42 L168 43 Q180 44 175 62 Q170 74 155 75 L148 75 Q165 68 162 55 Q158 44 135 42 Z" fill={c.accent} opacity="0.7" />
      {/* Tongue */}
      <path d="M85 40 Q95 30 110 30 Q120 30 125 38 L120 42 Q112 36 100 37 Q90 38 85 40 Z" fill={c.accent} />
      {/* Laces */}
      <line x1="90" y1="55" x2="120" y2="53" stroke={c.lace} strokeWidth="2" opacity="0.8" />
      <line x1="88" y1="62" x2="118" y2="60" stroke={c.lace} strokeWidth="2" opacity="0.8" />
      <line x1="86" y1="69" x2="116" y2="67" stroke={c.lace} strokeWidth="2" opacity="0.8" />
      {/* Nike-ish swoosh */}
      <path d="M60 68 Q80 55 100 57 Q115 58 120 62" fill="none" stroke={c.lace} strokeWidth="3" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export default function KicksPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <div className="min-h-screen bg-[#f4f4f0] font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Barlow:wght@400;500;600&display=swap');
        body { font-family: 'Barlow', sans-serif; }
        .font-display { font-family: 'Barlow Condensed', sans-serif; }
        .hero-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: clamp(52px, 12vw, 88px); line-height: 0.9; letter-spacing: -1px; }
        .section-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: clamp(28px, 6vw, 44px); line-height: 1; letter-spacing: -0.5px; }
        .product-name { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 13px; letter-spacing: 0.3px; line-height: 1.2; }
        .badge { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 10px; letter-spacing: 1px; }
        .btn { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 11px; letter-spacing: 1.5px; }
        .nav-link { font-family: 'Barlow', sans-serif; font-weight: 500; font-size: 13px; }
        .price-tag { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 13px; color: #22c55e; }
        .vertical-text { writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg); font-family: 'Barlow Condensed', sans-serif; font-weight: 600; font-size: 10px; letter-spacing: 2px; color: #f8fafc; }
        .card:hover .card-btn { background: #2563eb; }
        .card:hover { transform: translateY(-3px); box-shadow: 0 12px 30px rgba(0,0,0,0.12); }
        .card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .shop-btn:hover { background: #1d4ed8; }
        .new-drops-btn:hover { background: #1e3a8a; }
      `}</style>


      {/* HERO SECTION */}
      <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-8">
        {/* Big headline */}
        <div className="mb-5">
          <h1 className="hero-title text-gray-900">
            DO IT <span className="text-blue-600">RIGHT</span>
          </h1>
        </div>

        {/* Hero Card */}
        <HeroSection />

        {/* NEW DROPS SECTION */}
        <div className="mt-10">
          <div className="flex items-end justify-between mb-5 text-[74px] font-semibold text-[#232321]">
            <h2 className="section-title ">
              DON'T MISS OUT<br />NEW DROPS
            </h2>
            <button className="new-drops-btn btn text-white px-4 py-2 rounded text-xs uppercase tracking-widest transition-colors whitespace-nowrap">
              SHOP NEW DROPS
            </button>
          </div>

          {/* Product Grid */}
          <ProductGrid />
        </div>
      </div>

      <CategoriesSlider />
      <ReviewsAndFooter />
    </div>
  );
}
