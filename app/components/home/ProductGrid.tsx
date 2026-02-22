import Link from "next/link";
import { useState, useEffect } from "react";

// ── Types ─────────────────────────────────────────────────────────────────
interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
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

interface ShoeSVGProps {
  index: number;
}

interface ProductCardProps {
  product: Product;
  index: number;
  onClick: (product: Product) => void;
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

// ── SVG Shoe Illustration ─────────────────────────────────────────────────
function ShoeSVG({ index }: ShoeSVGProps) {
  const colors = [
    { body: "#1e40af", sole: "#f8fafc", lace: "#ffffff", accent: "#3b82f6" },
    { body: "#166534", sole: "#f8fafc", lace: "#ffffff", accent: "#22c55e" },
    { body: "#14532d", sole: "#f8fafc", lace: "#e5e7eb", accent: "#4ade80" },
    { body: "#c2410c", sole: "#f8fafc", lace: "#fed7aa", accent: "#fb923c" },
  ];
  const c = colors[index % colors.length];
  return (
    <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <ellipse cx="100" cy="82" rx="75" ry="12" fill="#e2e8f0" />
      <ellipse cx="100" cy="78" rx="72" ry="9" fill="#f8fafc" />
      <path d="M35 75 Q40 45 80 40 L155 42 Q175 43 168 60 Q162 75 155 75 Z" fill={c.body} />
      <path d="M35 75 Q32 65 38 55 Q45 45 55 44 L80 40 Q55 48 50 60 Q42 72 35 75 Z" fill={c.accent} />
      <path d="M135 42 L168 43 Q180 44 175 62 Q170 74 155 75 L148 75 Q165 68 162 55 Q158 44 135 42 Z" fill={c.accent} opacity="0.7" />
      <path d="M85 40 Q95 30 110 30 Q120 30 125 38 L120 42 Q112 36 100 37 Q90 38 85 40 Z" fill={c.accent} />
      <line x1="90" y1="55" x2="120" y2="53" stroke={c.lace} strokeWidth="2" opacity="0.8" />
      <line x1="88" y1="62" x2="118" y2="60" stroke={c.lace} strokeWidth="2" opacity="0.8" />
      <line x1="86" y1="69" x2="116" y2="67" stroke={c.lace} strokeWidth="2" opacity="0.8" />
      <path d="M60 68 Q80 55 100 57 Q115 58 120 62" fill="none" stroke={c.lace} strokeWidth="3" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

// ── Product Card ──────────────────────────────────────────────────────────
function ProductCard({ product, index, onClick }: ProductCardProps) {
  const [hovered, setHovered] = useState<boolean>(false);

  const hasRealImage =
    product.images &&
    product.images[0] &&
    !product.images[0].includes("placehold");

  return (
    <div
      onClick={() => onClick(product)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white rounded-xl overflow-hidden cursor-pointer"
      style={{
        boxShadow: hovered
          ? "0 8px 30px rgba(0,0,0,0.14)"
          : "0 2px 10px rgba(0,0,0,0.07)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.25s ease",
      }}
    >
      <div className="relative p-2 pb-2">
        {/* Badge */}
        <div className="absolute top-2 left-2 z-10">
          <svg width="58" height="38" viewBox="0 0 58 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 24C0 10.7452 10.7452 0 24 0L58 0V14C58 27.2548 47.2548 38 34 38L0 38L0 24Z" fill="#4A69E2" />
          </svg>
          <span
          className="flex justify-center items-center"
            style={{
              position: "absolute",
              top: "6px",
              left: "6px",
              fontSize: "9px",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            { "NEW"}
          </span>
        </div>

        {/* Product image */}
        <div className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden rounded-lg bg-gray-50">
          {hasRealImage ? (
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const sibling = target.nextSibling as HTMLElement | null;
                if (sibling) sibling.style.display = "flex";
              }}
            />
          ) : null}
          <div
            className="w-full h-full items-center justify-center"
            style={{ display: hasRealImage ? "none" : "flex" }}
          >
            <ShoeSVG index={index} />
          </div>
        </div>
      </div>

      <div className="px-3 pb-3">
        <p
          className="text-gray-900 mb-2"
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.03em",
            textTransform: "uppercase",
            lineHeight: 1.4,
            minHeight: "30px",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {product.title}
        </p>
        <Link
          href={`/products/${product.id}`}
          className="w-full text-white gap-x-2 py-2 rounded flex items-center justify-center px-3"
          style={{
            background: hovered ? "#1e293b" : "#111827",
            transition: "background 0.2s ease",
          }}
        >
          <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            View Product -
          </span>
          <span style={{ fontSize: "13px", fontWeight: 700 }}>${product.price}</span>
        </Link>
      </div>
    </div>
  );
}

// ── Product Modal ─────────────────────────────────────────────────────────
function ProductModal({ product, onClose }: ProductModalProps) {
  const [activeImg, setActiveImg] = useState<number>(0);

  if (!product) return null;

  const validImages: string[] =
    product.images?.filter((img) => img && !img.includes("placehold")) ?? [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden max-w-lg w-full"
        style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.25)", maxHeight: "90vh", overflowY: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header image */}
        <div className="relative bg-gray-50" style={{ height: "260px" }}>
          {validImages.length > 0 ? (
            <img
              src={validImages[activeImg]}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center p-8">
              <ShoeSVG index={product.id % 4} />
            </div>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-white rounded-full flex items-center justify-center"
            style={{ width: 32, height: 32, boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="#111" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Category badge */}
          <div
            className="absolute top-3 left-3 px-2 py-1 rounded-full text-white"
            style={{ fontSize: "10px", fontWeight: 700, background: "#4A69E2", letterSpacing: "0.08em" }}
          >
            {product.category?.name?.toUpperCase()}
          </div>
        </div>

        {/* Thumbnails */}
        {validImages.length > 1 && (
          <div className="flex gap-2 px-4 pt-3">
            {validImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className="rounded-lg overflow-hidden"
                style={{
                  width: 52,
                  height: 52,
                  border: activeImg === i ? "2px solid #4A69E2" : "2px solid transparent",
                  flexShrink: 0,
                }}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Info */}
        <div className="p-4">
          <h2 style={{ fontSize: "17px", fontWeight: 800, color: "#111", letterSpacing: "-0.01em", marginBottom: 6 }}>
            {product.title}
          </h2>
          <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.6, marginBottom: 16 }}>
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <div>
              <p style={{ fontSize: "11px", color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Price
              </p>
              <p style={{ fontSize: "26px", fontWeight: 900, color: "#111" }}>${product.price}</p>
            </div>
            <button
              className="text-white rounded-xl px-6 py-3"
              style={{ background: "#4A69E2", fontWeight: 700, fontSize: "13px", letterSpacing: "0.08em" }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Product Grid (default export) ─────────────────────────────────────────
export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading]   = useState<boolean>(true);
  const [error, setError]       = useState<string | null>(null);
  const [selected, setSelected] = useState<Product | null>(null);
  const [page, setPage]         = useState<number>(1);
  const limit = 8;

  useEffect(() => {
    setLoading(true);
    const offset = (page - 1) * limit;
    fetch(`https://api.escuelajs.co/api/v1/products?limit=${limit}&offset=${offset}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json() as Promise<Product[]>;
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, [page]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="p-4">
        {loading ? (
          /* Skeleton */
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden"
                style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.07)" }}
              >
                <div className="p-3 pb-2">
                  <div
                    className="w-full rounded-lg"
                    style={{
                      aspectRatio: "4/3",
                      background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                      backgroundSize: "200% 100%",
                      animation: "shimmer 1.4s infinite",
                    }}
                  />
                </div>
                <div className="px-3 pb-3">
                  <div style={{ height: 12, background: "#f0f0f0", borderRadius: 4, marginBottom: 8 }} />
                  <div style={{ height: 12, background: "#f0f0f0", borderRadius: 4, width: "60%", marginBottom: 12 }} />
                  <div style={{ height: 34, background: "#f0f0f0", borderRadius: 8 }} />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          /* Error */
          <div className="flex flex-col items-center justify-center py-20">
            <p style={{ color: "#ef4444", fontWeight: 700 }}>Error: {error}</p>
            <button
              onClick={() => setPage(1)}
              className="mt-4 px-4 py-2 rounded-lg text-white"
              style={{ background: "#4A69E2", fontWeight: 700, fontSize: "13px" }}
            >
              Retry
            </button>
          </div>
        ) : (
          <>
            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {products.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={i}
                  onClick={setSelected}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 rounded-lg font-bold"
                style={{
                  background: page === 1 ? "#f0f0f0" : "#111",
                  color: page === 1 ? "#aaa" : "#fff",
                  fontSize: "12px",
                  letterSpacing: "0.06em",
                  cursor: page === 1 ? "not-allowed" : "pointer",
                }}
              >
                ← PREV
              </button>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#6b7280" }}>
                PAGE {page}
              </span>
              <button
                onClick={() => setPage((p) => p + 1)}
                disabled={products.length < limit}
                className="px-4 py-2 rounded-lg font-bold"
                style={{
                  background: products.length < limit ? "#f0f0f0" : "#111",
                  color: products.length < limit ? "#aaa" : "#fff",
                  fontSize: "12px",
                  letterSpacing: "0.06em",
                  cursor: products.length < limit ? "not-allowed" : "pointer",
                }}
              >
                NEXT →
              </button>
            </div>
          </>
        )}
      </div>

      {/* Modal */}
      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}

      <style>{`
        @keyframes shimmer {
          0%  { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}