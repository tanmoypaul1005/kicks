"use client";
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


export default function KicksPage() {

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
