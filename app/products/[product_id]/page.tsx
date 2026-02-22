"use client";
import { useState, useEffect, CSSProperties, ReactElement } from "react";
import { useCart } from '../../context/CartProvider';
import { useParams } from "next/navigation";

// ── Types ─────────────────────────────────────────────────────────────────
interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
}

interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category?: Category;
  images: string[];
}

type ColorwayKey = "black" | "red" | "blue" | "grey";

interface Colorway {
  key: ColorwayKey;
  label: string;
  hex: string;
}

interface ColorPalette {
  body: string;
  sole: string;
  swoosh: string;
  lace: string;
  accent: string;
}

interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
}

interface TrustBadge {
  icon: string;
  label: string;
  sub: string;
}

interface RatingBar {
  s: number;
  pct: number;
}

interface RelatedProduct {
  name: string;
  price: string;
  badge: string;
  color: ColorwayKey;
}

interface ProductShoeMainProps {
  colorway: ColorwayKey;
}

interface ThumbShoeProps {
  color: ColorwayKey;
  active: boolean;
}

interface StarsProps {
  count?: number;
  fill?: number;
}

interface SkeletonProps {
  className?: string;
  style?: CSSProperties;
}

interface ProductPageProps {
  product_id?: number;
}

// ── Constants ─────────────────────────────────────────────────────────────
const sizes: number[] = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12];
const unavailable: number[] = [6, 6.5, 11.5, 12];

const colorways: Colorway[] = [
  { key: "black", label: "Triple Black", hex: "#1f2937" },
  { key: "red", label: "Chicago Red", hex: "#dc2626" },
  { key: "blue", label: "Royal Blue", hex: "#2563eb" },
  { key: "grey", label: "Fog Grey", hex: "#6b7280" },
];

const reviews: Review[] = [
  { name: "Jordan M.", rating: 5, date: "Jan 12, 2026", text: "Absolutely fire. The quality is insane for the price. Wore them to the gym and got compliments all day." },
  { name: "Aisha K.", rating: 5, date: "Jan 8, 2026", text: "Fits true to size. Super comfortable right out of the box. The colorway is even better in person." },
  { name: "Dante R.", rating: 4, date: "Dec 29, 2025", text: "Great shoe overall. Docking one star because shipping took a bit longer than expected. But worth it!" },
];

// ── SVG Shoe Main ─────────────────────────────────────────────────────────
function ProductShoeMain({ colorway }: ProductShoeMainProps): ReactElement {
  const palettes: Record<ColorwayKey, ColorPalette> = {
    black: { body: "#1f2937", sole: "#f1f5f9", swoosh: "#3b82f6", lace: "#f9fafb", accent: "#111827" },
    red: { body: "#dc2626", sole: "#f1f5f9", swoosh: "#1f2937", lace: "#ffffff", accent: "#991b1b" },
    blue: { body: "#2563eb", sole: "#f1f5f9", swoosh: "#1e40af", lace: "#dbeafe", accent: "#1d4ed8" },
    grey: { body: "#6b7280", sole: "#f1f5f9", swoosh: "#374151", lace: "#f9fafb", accent: "#4b5563" },
  };
  const c: ColorPalette = palettes[colorway] ?? palettes.black;

  return (
    <svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
      <defs>
        <radialGradient id="shoeGlow" cx="50%" cy="70%" r="50%">
          <stop offset="0%" stopColor={c.body} stopOpacity="0.15" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="260" cy="295" rx="185" ry="18" fill="#00000020" />
      <ellipse cx="258" cy="274" rx="182" ry="22" fill="#374151" />
      <ellipse cx="258" cy="268" rx="179" ry="18" fill="#e2e8f0" />
      <ellipse cx="258" cy="263" rx="174" ry="14" fill="#f1f5f9" />
      <rect x="76" y="252" width="60" height="18" rx="9" fill="#60a5fa" opacity="0.85" />
      <text x="106" y="264" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff" fontFamily="'Barlow Condensed',sans-serif">AIR</text>
      <path d="M68 262 Q75 195 130 170 L355 167 Q410 168 408 205 Q406 238 385 262 Z" fill={c.body} />
      <path d="M68 262 Q63 235 70 210 Q80 182 105 172 L148 167 Q106 182 98 212 Q85 238 68 262 Z" fill={c.accent} />
      <path d="M335 167 L408 168 Q432 170 428 207 Q424 238 408 262 L395 262 Q418 240 416 207 Q412 178 390 170 Z" fill={c.accent} opacity="0.6" />
      <path d="M165 167 L165 245" stroke="#ffffff18" strokeWidth="1.5" />
      <path d="M200 167 L200 248" stroke="#ffffff18" strokeWidth="1.5" />
      <path d="M235 167 L235 250" stroke="#ffffff18" strokeWidth="1.5" />
      <path d="M270 167 L270 252" stroke="#ffffff18" strokeWidth="1.5" />
      <path d="M305 167 L305 252" stroke="#ffffff18" strokeWidth="1.5" />
      <path d="M140 167 Q165 142 195 140 Q220 139 238 152 L230 167 Q215 155 192 157 Q165 160 140 167 Z" fill={c.body} />
      <path d="M148 167 Q168 152 192 151 Q212 151 226 160 L220 167 Q207 157 190 158 Q168 161 148 167 Z" fill={c.accent} opacity="0.4" />
      <rect x="176" y="142" width="36" height="24" rx="3" fill={c.accent} />
      <text x="194" y="157" textAnchor="middle" fontSize="8" fontWeight="900" fill="#fff" fontFamily="'Barlow Condensed',sans-serif">KICKS</text>
      <path d="M75 262 Q78 250 90 245 L385 244 Q398 245 400 258 L385 262 L68 262 Z" fill={c.accent} opacity="0.5" />
      <path d="M108 236 Q155 202 208 207 Q252 211 268 225" fill="none" stroke={c.swoosh} strokeWidth="10" strokeLinecap="round" opacity="0.85" />
      <path d="M108 236 Q155 202 208 207 Q252 211 268 225" fill="none" stroke="#ffffff22" strokeWidth="3" strokeLinecap="round" />
      {[190, 202, 214, 226, 238, 250].map((y, i) => (
        <line key={i} x1={148 - i * 2} y1={y} x2={226 - i * 2} y2={y - 1} stroke={c.lace} strokeWidth="3.5" strokeLinecap="round" opacity="0.9" />
      ))}
      {[190, 202, 214, 226, 238, 250].map((y, i) => (
        <g key={`eyelet-${i}`}>
          <circle cx={148 - i * 2} cy={y} r="3.5" fill={c.accent} />
          <circle cx={226 - i * 2} cy={y - 1} r="3.5" fill={c.accent} />
        </g>
      ))}
      <ellipse cx="258" cy="250" rx="200" ry="60" fill="url(#shoeGlow)" />
    </svg>
  );
}

// ── Thumb Shoe ────────────────────────────────────────────────────────────
function ThumbShoe({ color, active }: ThumbShoeProps): ReactElement {
  const colors: Record<ColorwayKey, string> = {
    black: "#1f2937",
    red: "#dc2626",
    blue: "#2563eb",
    grey: "#6b7280",
  };
  return (
    <svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="100" height="70" fill={active ? "#f0f4ff" : "#f9fafb"} rx="8" />
      <ellipse cx="50" cy="64" rx="40" ry="5" fill="#00000015" />
      <path d="M15 60 Q17 40 30 33 L72 32 Q85 33 84 45 Q83 57 76 60 Z" fill={colors[color] ?? "#1f2937"} />
      <path d="M15 60 Q13 50 16 42 Q20 34 28 31 L38 30 Q25 38 22 48 Q18 56 15 60 Z" fill="#00000025" />
      <ellipse cx="49" cy="60" rx="38" ry="5" fill="#f1f5f9" />
      <path d="M26 52 Q36 45 46 47 Q54 48 57 52" fill="none" stroke="#ffffff55" strokeWidth="3" strokeLinecap="round" />
      <line x1="35" y1="42" x2="55" y2="41" stroke="#ffffff99" strokeWidth="2" />
      <line x1="34" y1="47" x2="54" y2="46" stroke="#ffffff99" strokeWidth="2" />
    </svg>
  );
}

// ── Stars ─────────────────────────────────────────────────────────────────
function Stars({ count = 5, fill = 5 }: StarsProps): ReactElement {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < fill ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ── Skeleton ──────────────────────────────────────────────────────────────
function Skeleton({ className = "", style = {} }: SkeletonProps): ReactElement {
  return (
    <div
      className={`rounded-xl ${className}`}
      style={{
        background: "linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 1.4s infinite",
        ...style,
      }}
    />
  );
}

// ── Main Component ────────────────────────────────────────────────────────
export default function ProductPage({ product_id }: ProductPageProps): ReactElement {

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams() as { product_id?: string };
  const pid = Number(params?.product_id ?? product_id ?? 3);

  const [selectedColor, setSelectedColor] = useState<ColorwayKey>("black");
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [added, setAdded] = useState<boolean>(false);
  const [activeImg, setActiveImg] = useState<number>(0);
  const [wishlist, setWishlist] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("description");
  const [sizeError, setSizeError] = useState<boolean>(false);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});
  const { addItem } = useCart();

  // ── Fetch product ──
  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://api.escuelajs.co/api/v1/products/${pid}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<Product>;
      })
      .then((data) => { setProduct(data); setLoading(false); })
      .catch((err: Error) => { setError(err.message); setLoading(false); });
  }, [pid]);

  const handleAddToCart = (): void => {
    if (!selectedSize) { setSizeError(true); return; }
    setSizeError(false);
    // add to cart via context
    try {
      if (product) {
        addItem({
          id: product.id,
          title: product.title,
          price: product.price,
          qty: quantity,
          size: selectedSize,
          image: validImages[0] ?? null,
        });
      }
    } catch (e) {
      // noop
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  const handleImgError = (i: number): void =>
    setImgErrors((prev) => ({ ...prev, [i]: true }));

  // ── Helpers ──
  const validImages: string[] =
    product?.images?.filter((img, i) =>
      img && !img.includes("placehold") && !imgErrors[i]
    ) ?? [];

  const hasRealImages: boolean = validImages.length > 0;

  // ── Loading skeleton ──
  if (loading) {
    return (
      <div className="min-h-screen bg-[#f4f4f0] p-6">
        <style>{`@keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}`}</style>
        <div className="max-w-screen-xl mx-auto">
          <Skeleton className="h-4 w-48 mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
              <Skeleton style={{ height: 360 }} />
              <div className="grid grid-cols-4 gap-3">
                {[0, 1, 2, 3].map((i) => <Skeleton key={i} style={{ aspectRatio: "4/3" }} />)}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-14 w-3/4" />
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-10 w-40" />
              <div className="grid grid-cols-7 gap-2 mt-2">
                {sizes.map((s) => <Skeleton key={s} className="h-10" />)}
              </div>
              <Skeleton className="h-14 w-full mt-2" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Error state ──
  if (error) {
    return (
      <div className="min-h-screen bg-[#f4f4f0] flex items-center justify-center">
        <div className="text-center p-8">
          <p className="text-2xl font-black text-gray-900 mb-2" style={{ fontFamily: "'Barlow Condensed',sans-serif" }}>
            Failed to load product
          </p>
          <p className="text-gray-500 text-sm mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm"
            style={{ fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: "1px" }}
          >
            RETRY
          </button>
        </div>
      </div>
    );
  }

  // ── Derived product data ──
  const title: string = product?.title ?? "Product";
  const price: number = product?.price ?? 0;
  const description: string = product?.description ?? "No description available.";
  const category: string = product?.category?.name ?? "General";
  const slug: string = product?.slug ?? "";
  const allImages: string[] = product?.images ?? [];

  const trustBadges: TrustBadge[] = [
    { icon: "🚚", label: "Free Shipping", sub: "On orders $100+" },
    { icon: "↩️", label: "Free Returns", sub: "Within 30 days" },
    { icon: "🔒", label: "Secure Pay", sub: "100% Protected" },
  ];

  const ratingBars: RatingBar[] = [
    { s: 5, pct: 82 }, { s: 4, pct: 12 },
    { s: 3, pct: 4 }, { s: 2, pct: 1 }, { s: 1, pct: 1 },
  ];

  const relatedProducts: RelatedProduct[] = [
    { name: "Ultraboost 22", price: "$180", badge: "Hot", color: "red" },
    { name: "NMD_R1 V3", price: "$140", badge: "New", color: "blue" },
    { name: "Forum Low", price: "$100", badge: "New", color: "black" },
    { name: "Gazelle Bold", price: "$110", badge: "Sale", color: "grey" },
  ];

  const detailRows: [string, string | number | undefined][] = [
    ["Product ID", product?.id],
    ["Title", title],
    ["Slug", slug || "—"],
    ["Price", `$${price}`],
    ["Category", category],
    ["Category ID", product?.category?.id],
    ["Category Slug", product?.category?.slug ?? "—"],
    ["Images", `${allImages.length} image(s)`],
  ];

  return (
    <div className="min-h-screen bg-[#f4f4f0]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Barlow:wght@400;500;600&display=swap');
        * { font-family: 'Barlow', sans-serif; }
        .fd { font-family: 'Barlow Condensed', sans-serif; }
        .product-title { font-family:'Barlow Condensed',sans-serif; font-weight:900; font-size:clamp(28px,5vw,48px); line-height:.95; letter-spacing:-0.5px; }
        .section-label { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:11px; letter-spacing:2px; text-transform:uppercase; }
        .price-main    { font-family:'Barlow Condensed',sans-serif; font-weight:900; font-size:clamp(28px,5vw,42px); }
        .btn-primary   { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:14px; letter-spacing:1.5px; text-transform:uppercase; }
        .btn-secondary { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:13px; letter-spacing:1.2px; text-transform:uppercase; }
        .breadcrumb    { font-family:'Barlow',sans-serif; font-size:12px; }
        .tab-label     { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:13px; letter-spacing:1px; text-transform:uppercase; }
        .review-author { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:15px; }
        .review-date   { font-family:'Barlow',sans-serif; font-size:11px; }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        .fade-up  { animation:fadeUp .45s ease both; }
        .size-btn:hover:not(:disabled) { background:#1f2937; color:#fff; border-color:#1f2937; }
        .color-ring { box-shadow: 0 0 0 3px #fff, 0 0 0 5px currentColor; }
        .thumb-card { transition: box-shadow .15s, transform .15s; }
        .thumb-card:hover { transform:scale(1.04); box-shadow:0 6px 18px #0002; }
        .add-btn:active { transform:scale(.97); }
        .feature-chip { font-family:'Barlow Condensed',sans-serif; font-weight:600; font-size:12px; letter-spacing:.8px; }
      `}</style>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4 sm:py-8">

        {/* Breadcrumb */}
        <div className="breadcrumb flex items-center gap-1.5 text-gray-400 mb-5 flex-wrap">
          <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
          <span className="text-gray-300">/</span>
          <a href="#" className="hover:text-blue-600 transition-colors">{category}</a>
          <span className="text-gray-300">/</span>
          <span className="text-gray-700 font-medium">{title}</span>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-start">

          {/* LEFT — Image Gallery */}
         <div className="fade-up">

            {/* ── 2×2 grid: main image top-left (spans rows), 3 thumbs fill right + bottom-left ── */}
            <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3" style={{ height: "480px" }}>

              {/* MAIN IMAGE — top-left, spans 2 rows */}
              <div
                className="relative bg-white rounded-2xl overflow-hidden flex items-center justify-center row-span-2 cursor-pointer"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
                onClick={() => setActiveImg(0)}
              >
                {/* Badges */}
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
                  <span className="fd font-bold text-[10px] tracking-widest uppercase bg-blue-600 text-white px-2 py-0.5 rounded">{category}</span>
                  <span className="fd font-bold text-[10px] tracking-widest uppercase bg-black text-white px-2 py-0.5 rounded">#{product?.id}</span>
                </div>

                {/* Wishlist */}
                <button
                  onClick={(e) => { e.stopPropagation(); setWishlist(!wishlist); }}
                  className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <svg
                    className={`w-4 h-4 transition-colors ${wishlist ? "text-red-500 fill-red-500" : "text-gray-400"}`}
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                {/* Main image content */}
                <div className="w-full h-full p-6 flex items-center justify-center">
                  {hasRealImages ? (
                    <img
                      src={validImages[activeImg] ?? validImages[0]}
                      alt={title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <ProductShoeMain colorway={selectedColor} />
                  )}
                </div>

                {/* Colorway label pill */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black bg-opacity-60 text-white text-[10px] px-3 py-1 rounded-full fd font-semibold tracking-wide whitespace-nowrap">
                  {hasRealImages
                    ? title
                    : colorways.find((c) => c.key === selectedColor)?.label}
                </div>
              </div>

              {/* THUMB 2 — top-right */}
              {hasRealImages ? (() => {
                const img = allImages[1];
                const isPlaceholder = !img || img.includes("placehold") || !!imgErrors[1];
                return (
                  <button
                    onClick={() => setActiveImg(1)}
                    className={`thumb-card relative rounded-2xl overflow-hidden bg-white border-2 transition-all w-full h-full ${activeImg === 1 ? "border-blue-600" : "border-transparent"}`}
                    style={{ boxShadow: "0 2px 8px #0001" }}
                  >
                    {isPlaceholder ? (
                      <div className="w-full h-full flex items-center justify-center bg-gray-50 p-3">
                        <ThumbShoe color={colorways[1].key} active={activeImg === 1} />
                      </div>
                    ) : (
                      <img src={img} alt={`${title} 2`} className="w-full h-full object-cover" onError={() => handleImgError(1)} />
                    )}
                  </button>
                );
              })() : (
                <button
                  onClick={() => { setSelectedColor(colorways[1].key); setActiveImg(1); }}
                  className={`thumb-card rounded-2xl overflow-hidden bg-white border-2 transition-all ${selectedColor === colorways[1].key ? "border-blue-600" : "border-transparent"}`}
                  style={{ boxShadow: "0 2px 8px #0001" }}
                >
                  <div className="w-full h-full flex items-center justify-center bg-gray-50 p-3">
                    <ThumbShoe color={colorways[1].key} active={selectedColor === colorways[1].key} />
                  </div>
                </button>
              )}

              {/* THUMB 3 — bottom-right */}
              {hasRealImages ? (() => {
                const img = allImages[2];
                const isPlaceholder = !img || img.includes("placehold") || !!imgErrors[2];
                return (
                  <button
                    onClick={() => setActiveImg(2)}
                    className={`thumb-card relative rounded-2xl overflow-hidden bg-white border-2 transition-all w-full h-full ${activeImg === 2 ? "border-blue-600" : "border-transparent"}`}
                    style={{ boxShadow: "0 2px 8px #0001" }}
                  >
                    {isPlaceholder ? (
                      <div className="w-full h-full flex items-center justify-center bg-gray-50 p-3">
                        <ThumbShoe color={colorways[2].key} active={activeImg === 2} />
                      </div>
                    ) : (
                      <img src={img} alt={`${title} 3`} className="w-full h-full object-cover" onError={() => handleImgError(2)} />
                    )}
                    {/* "+N more" overlay on last thumb if >4 images */}
                    {allImages.length > 4 && (
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-2xl">
                        <span className="text-white fd font-black text-2xl">+{allImages.length - 3}</span>
                      </div>
                    )}
                  </button>
                );
              })() : (
                <button
                  onClick={() => { setSelectedColor(colorways[2].key); setActiveImg(2); }}
                  className={`thumb-card rounded-2xl overflow-hidden bg-white border-2 transition-all ${selectedColor === colorways[2].key ? "border-blue-600" : "border-transparent"}`}
                  style={{ boxShadow: "0 2px 8px #0001" }}
                >
                  <div className="w-full h-full flex items-center justify-center bg-gray-50 p-3">
                    <ThumbShoe color={colorways[2].key} active={selectedColor === colorways[2].key} />
                  </div>
                </button>
              )}

            </div>
          </div>

          {/* RIGHT — Product Details */}
          <div className="flex flex-col gap-5 fade-up" style={{ animationDelay: ".1s" }}>

            {/* Title & Rating */}
            <div>
              <p className="section-label text-blue-600 mb-1.5">{category} · #{product?.id}</p>
              <h1 className="product-title text-gray-900 mb-3">{title}</h1>
              <div className="flex items-center gap-3 flex-wrap">
                <Stars fill={5} />
                <span className="breadcrumb text-gray-500">(128 reviews)</span>
                <span className="breadcrumb text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded">In Stock</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="price-main text-gray-900">${price}</span>
              <span className="fd font-700 text-xl text-gray-400 line-through">${Math.round(price * 1.2)}</span>
              <span className="fd font-bold text-sm text-green-600 bg-green-50 px-2 py-0.5 rounded">Save ${Math.round(price * 0.2)}</span>
            </div>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-2">
              {["Premium Quality", "Fast Shipping", "Easy Returns", "Secure Payment"].map((f) => (
                <span key={f} className="feature-chip bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{f}</span>
              ))}
            </div>

            {/* Color selector */}
            {!hasRealImages && (
              <div>
                <p className="section-label text-gray-500 mb-2.5">
                  Color:{" "}
                  <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "0.5px", textTransform: "none" }}>
                    {colorways.find((c) => c.key === selectedColor)?.label}
                  </span>
                </p>
                <div className="flex items-center gap-3">
                  {colorways.map((c) => (
                    <button
                      key={c.key}
                      onClick={() => setSelectedColor(c.key)}
                      className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${selectedColor === c.key ? "color-ring border-blue-600" : "border-transparent"}`}
                      style={{ background: c.hex, color: c.hex }}
                      title={c.label}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size selector */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <p className="section-label text-gray-500">
                  Size:{" "}
                  {selectedSize !== null && (
                    <span style={{ fontWeight: 700, letterSpacing: "0.5px", textTransform: "none" }}>
                      US {selectedSize}
                    </span>
                  )}
                </p>
                <button className="breadcrumb text-blue-600 hover:underline">Size Guide →</button>
              </div>
              <div className="grid grid-cols-5 sm:grid-cols-7 gap-2">
                {sizes.map((s) => {
                  const unavail: boolean = unavailable.includes(s);
                  return (
                    <button
                      key={s}
                      disabled={unavail}
                      onClick={() => { setSelectedSize(s); setSizeError(false); }}
                      className={`size-btn text-[14px] font-medium relative py-2.5 rounded-lg border text-sm transition-all fd 
                        ${unavail
                          ? "border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50"
                          : selectedSize === s
                            ? "border-[#232321] bg-[#232321] text-white"
                            : "border-gray-200 text-gray-700 bg-white cursor-pointer hover:border-[#232321]"
                        }`}
                    >
                      {s}
                      {unavail && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="block w-full h-px bg-gray-300 rotate-45" />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              {sizeError && (
                <p className="text-red-500 text-xs mt-1.5 fd font-semibold">Please select a size before adding to cart.</p>
              )}
            </div>

            {/* Quantity + Cart */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-white">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="px-4 py-3 text-lg text-gray-600 hover:bg-gray-50 transition-colors fd font-bold">−</button>
                <span className="px-5 py-3 text-sm font-bold text-gray-900 border-x border-gray-200 min-w-[48px] text-center fd">{quantity}</span>
                <button onClick={() => setQuantity((q) => Math.min(10, q + 1))} className="px-4 py-3 text-lg text-gray-600 hover:bg-gray-50 transition-colors fd font-bold">+</button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`add-btn flex-1 btn-primary flex items-center justify-center gap-2 rounded-xl transition-all ${added ? "bg-green-600 text-white" : "bg-gray-900 text-white hover:bg-blue-600"}`}
                style={{ minHeight: "52px" }}
              >
                {added ? (
                  <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    ADDED TO CART
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    ADD TO CART — ${price}
                  </>
                )}
              </button>

              <button
                onClick={() => setWishlist(!wishlist)}
                className={`rounded-xl border-2 flex items-center justify-center transition-all hover:scale-105 ${wishlist ? "border-red-200 bg-red-50" : "border-gray-200 bg-white"}`}
                style={{ width: "52px", height: "52px" }}
              >
                <svg className={`w-5 h-5 transition-colors ${wishlist ? "text-red-500 fill-red-500" : "text-gray-400"}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
           
          </div>
        </div>

        {/* ── TABS ── */}
        <div className="mt-12 sm:mt-16">
          <div className="flex border-b border-gray-200 gap-6 sm:gap-8 overflow-x-auto">
            {["description", "details", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-label pb-3 whitespace-nowrap transition-colors border-b-2 ${activeTab === tab ? "border-blue-600 text-blue-600" : "border-transparent text-gray-400 hover:text-gray-700"}`}
              >
                {tab === "reviews" ? "Reviews (128)" : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="py-6 sm:py-8">
            {activeTab === "description" && (
              <div className="max-w-2xl space-y-4 fade-up">
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{description}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                  {["Premium Material", "Durable Build", "Modern Design", "Comfortable Fit", "Easy Care", "Versatile Use"].map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 text-xs sm:text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "details" && (
              <div className="max-w-lg fade-up">
                <table className="w-full text-sm">
                  <tbody>
                    {detailRows.map(([k, v], i) => (
                      <tr key={String(k)} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="fd font-bold text-gray-500 text-xs uppercase tracking-wider py-3 px-4 rounded-l-lg">{k}</td>
                        <td className="text-gray-800 py-3 px-4 rounded-r-lg text-sm">{String(v ?? "—")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="max-w-2xl space-y-5 fade-up">
                <div className="bg-white rounded-2xl p-5 flex items-center gap-6 border border-gray-100">
                  <div className="text-center flex-shrink-0">
                    <p className="price-main text-gray-900">4.8</p>
                    <Stars fill={5} />
                    <p className="text-gray-400 text-xs mt-1">128 reviews</p>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    {ratingBars.map((r) => (
                      <div key={r.s} className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 w-4 fd font-bold">{r.s}</span>
                        <svg className="w-3 h-3 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <div className="flex-1 bg-gray-100 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${r.pct}%` }} />
                        </div>
                        <span className="text-xs text-gray-400 w-7">{r.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {reviews.map((r, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white fd font-bold text-sm">
                          {r.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <p className="review-author text-gray-900">{r.name}</p>
                          <p className="review-date text-gray-400">{r.date}</p>
                        </div>
                      </div>
                      <Stars fill={r.rating} />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{r.text}</p>
                  </div>
                ))}

                <button className="btn-secondary border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-xl hover:bg-gray-900 hover:text-white transition-colors w-full sm:w-auto">
                  LOAD MORE REVIEWS
                </button>
              </div>
            )}
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-8 sm:mt-12 pb-10">
          <div className="flex items-end justify-between mb-5">
            <h2 className="fd font-black text-gray-900" style={{ fontSize: "clamp(22px,5vw,36px)", lineHeight: 1, fontFamily: "'Barlow Condensed',sans-serif" }}>
              YOU MAY ALSO LIKE
            </h2>
            <button className="btn-secondary text-blue-600 hover:underline text-xs">VIEW ALL →</button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {relatedProducts.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform" style={{ boxShadow: "0 2px 12px #0001" }}>
                <div className="relative h-32 sm:h-40 bg-gray-50 flex items-center justify-center p-4">
                  <span className="absolute top-2 left-2 fd font-bold text-xs text-white bg-blue-600 px-2 py-0.5 rounded tracking-wide">{p.badge}</span>
                  <ThumbShoe color={p.color} active={false} />
                </div>
                <div className="p-3">
                  <p className="fd font-bold text-gray-800 text-sm leading-tight mb-1">{p.name}</p>
                  <div className="flex items-center justify-between">
                    <span className="fd font-black text-gray-900 text-base">{p.price}</span>
                    <Stars fill={4} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



