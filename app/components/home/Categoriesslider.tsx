import { useState, useEffect, ReactElement } from "react";

// ── Types ─────────────────────────────────────────────────────────────────
interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
}

interface CategoryCardProps {
  cat: Category;
  svgIndex: number;
}

interface NavButton {
  fn: () => void;
  icon: string;
  disabled: boolean;
}

// ── SVG shoe fallbacks ────────────────────────────────────────────────────
const ShoeSVGs: ReactElement[] = [
  // 0 – Lifestyle / Superstar
  <svg key="0" viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <ellipse cx="170" cy="158" rx="140" ry="12" fill="#00000012" />
    <path d="M42 148 Q50 138 80 135 L290 133 Q310 134 312 142 Q314 150 300 153 L55 155 Z" fill="#e8e8e8" />
    <path d="M55 148 Q62 115 95 105 L270 103 Q295 104 298 120 Q300 135 295 148 Z" fill="#fff" />
    <path d="M55 148 Q52 130 60 115 Q72 100 95 100 L120 103 Q85 108 75 125 Q65 138 55 148 Z" fill="#f5f5f5" />
    <ellipse cx="88" cy="125" rx="28" ry="22" fill="#efefef" stroke="#e0e0e0" strokeWidth="1" />
    <g opacity="0.88">
      <path d="M155 105 L148 148" stroke="#111" strokeWidth="10" strokeLinecap="round" />
      <path d="M175 104 L168 148" stroke="#111" strokeWidth="10" strokeLinecap="round" />
      <path d="M195 103 L188 148" stroke="#111" strokeWidth="10" strokeLinecap="round" />
    </g>
    <path d="M110 104 Q125 88 145 87 Q160 87 168 97 L160 104 Q152 94 140 95 Q122 97 110 104 Z" fill="#fff" stroke="#e8e8e8" strokeWidth="1" />
    {[108, 117, 126, 135, 144].map((y, i) => (
      <line key={i} x1={112 + i * 2} y1={y} x2={158 + i * 2} y2={y - 1} stroke="#ddd" strokeWidth="3" strokeLinecap="round" />
    ))}
  </svg>,

  // 1 – Basketball / Jordan high-top
  <svg key="1" viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <ellipse cx="170" cy="185" rx="130" ry="10" fill="#00000015" />
    <path d="M55 172 Q62 162 90 158 L268 156 Q290 157 292 165 Q294 173 278 176 L68 178 Z" fill="#c8c8c8" />
    <path d="M65 170 Q68 130 90 108 L240 96 Q268 97 272 118 Q275 140 270 170 Z" fill="#fff" />
    <path d="M90 108 Q98 72 118 60 Q138 50 158 52 Q178 54 185 70 L180 96 Q165 80 148 78 Q128 78 110 92 Z" fill="#fff" stroke="#e0e0e0" strokeWidth="1.5" />
    <path d="M130 105 Q155 100 175 102 Q185 103 188 110 L183 115 Q172 108 155 107 Q138 106 125 112 Z" fill="#cc2929" />
    <path d="M195 100 L260 97 Q270 98 272 106 L268 112 Q256 103 240 102 L195 104 Z" fill="#c8a020" opacity="0.7" />
    <path d="M90 108 Q96 95 106 84 L115 88 Q105 98 98 112 Z" fill="#cc2929" />
    {[82, 92, 102, 112, 122, 132, 142].map((y, i) => (
      <line key={i} x1={118 - i} y1={y} x2={172 - i} y2={y - 1} stroke="#bbb" strokeWidth="2.5" strokeLinecap="round" />
    ))}
    <ellipse cx="88" cy="148" rx="26" ry="18" fill="#efefef" stroke="#e5e5e5" strokeWidth="1" />
  </svg>,

  // 2 – Running
  <svg key="2" viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <ellipse cx="170" cy="162" rx="145" ry="11" fill="#00000012" />
    <path d="M38 152 Q46 140 78 136 L295 134 Q316 135 318 144 Q320 153 304 156 L52 158 Z" fill="#e0e0e0" />
    <path d="M52 152 Q58 118 92 106 L272 104 Q298 105 300 122 Q302 138 296 152 Z" fill="#fff" />
    <path d="M52 152 Q49 132 58 116 Q70 100 95 98 L122 100 Q88 108 78 126 Q66 140 52 152 Z" fill="#f2f2f2" />
    <path d="M180 104 Q220 100 260 104 Q280 107 285 118 L270 122 Q258 110 238 108 Q205 105 180 108 Z" fill="#4070e0" opacity="0.8" />
    <path d="M120 104 L115 152" stroke="#ff6600" strokeWidth="14" strokeLinecap="round" opacity="0.7" />
    {[110, 120, 130, 140, 150].map((y, i) => (
      <line key={i} x1={105 + i * 2} y1={y} x2={158 + i * 2} y2={y - 1} stroke="#ddd" strokeWidth="3" strokeLinecap="round" />
    ))}
  </svg>,

  // 3 – Training / dark
  <svg key="3" viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <ellipse cx="170" cy="160" rx="142" ry="11" fill="#00000012" />
    <path d="M40 150 Q48 140 80 136 L292 134 Q314 135 315 143 Q317 152 302 155 L54 157 Z" fill="#ddd" />
    <path d="M54 150 Q60 116 94 105 L270 103 Q296 104 298 122 Q300 137 294 150 Z" fill="#222" />
    <path d="M54 150 Q51 130 60 114 Q72 99 97 98 L124 100 Q90 108 80 126 Q68 138 54 150 Z" fill="#333" />
    <path d="M170 103 Q210 99 250 103 Q270 106 276 118 L260 122 Q250 110 232 107 Q200 103 170 106 Z" fill="#e53030" opacity="0.9" />
    <path d="M108 130 Q150 118 190 122 Q210 124 215 132" fill="none" stroke="#e53030" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
    {[108, 118, 128, 138, 148].map((y, i) => (
      <line key={i} x1={110 + i * 2} y1={y} x2={158 + i * 2} y2={y - 1} stroke="#555" strokeWidth="3" strokeLinecap="round" />
    ))}
  </svg>,

  // 4 – Casual / tan
  <svg key="4" viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <ellipse cx="170" cy="160" rx="138" ry="10" fill="#00000012" />
    <path d="M45 150 Q53 140 82 136 L285 134 Q308 135 308 143 Q308 151 294 154 L58 156 Z" fill="#e5e5e5" />
    <path d="M58 150 Q64 118 96 107 L268 105 Q292 106 294 122 Q295 136 290 150 Z" fill="#f7e8d0" />
    <path d="M58 150 Q55 130 64 115 Q75 100 98 98 L124 100 Q90 108 80 126 Q68 140 58 150 Z" fill="#f0dcc0" />
    <path d="M155 107 Q185 103 215 106 Q232 108 234 118 L225 122 Q218 112 202 110 Q178 107 155 110 Z" fill="#8b6914" opacity="0.6" />
    <path d="M115 105 L108 150" stroke="#c4922a" strokeWidth="12" strokeLinecap="round" opacity="0.6" />
    {[108, 118, 128, 138, 148].map((y, i) => (
      <line key={i} x1={112 + i * 2} y1={y} x2={155 + i * 2} y2={y - 1} stroke="#e0c89a" strokeWidth="3" strokeLinecap="round" />
    ))}
  </svg>,

  // 5 – Others / blue
  <svg key="5" viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <ellipse cx="170" cy="160" rx="138" ry="10" fill="#00000012" />
    <path d="M45 150 Q53 140 82 136 L285 134 Q308 135 308 143 Q308 151 294 154 L58 156 Z" fill="#e0e8ff" />
    <path d="M58 150 Q64 118 96 107 L268 105 Q292 106 294 122 Q295 136 290 150 Z" fill="#dde8ff" />
    <path d="M58 150 Q55 130 64 115 Q75 100 98 98 L124 100 Q90 108 80 126 Q68 140 58 150 Z" fill="#c8d8ff" />
    <path d="M155 107 Q185 103 215 106 Q232 108 234 118 L225 122 Q218 112 202 110 Q178 107 155 110 Z" fill="#3050d0" opacity="0.7" />
    <path d="M108 130 Q150 118 190 122 Q210 124 215 132" fill="none" stroke="#5080ff" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
    {[108, 118, 128, 138, 148].map((y, i) => (
      <line key={i} x1={112 + i * 2} y1={y} x2={155 + i * 2} y2={y - 1} stroke="#99b0ff" strokeWidth="3" strokeLinecap="round" />
    ))}
  </svg>,
];

// ── Skeleton placeholder ──────────────────────────────────────────────────
function SkeletonCard(): ReactElement {
  return (
    <div className="rounded-xl overflow-hidden mx-2.5" style={{ background: "#f0f0eb" }}>
      <div
        style={{
          height: 200,
          background: "linear-gradient(90deg,#e8e8e3 25%,#ddddd8 50%,#e8e8e3 75%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.4s infinite",
        }}
      />
      <div className="px-4 pb-4 pt-3 flex items-end justify-between">
        <div>
          <div style={{ height: 13, width: 88, background: "#ddd", borderRadius: 4, marginBottom: 6 }} />
          <div style={{ height: 13, width: 58, background: "#ddd", borderRadius: 4 }} />
        </div>
        <div style={{ width: 36, height: 36, background: "#ddd", borderRadius: 8 }} />
      </div>
    </div>
  );
}

// ── Single category card ──────────────────────────────────────────────────
function CategoryCard({ cat, svgIndex }: CategoryCardProps): ReactElement {
  const [hovered, setHovered] = useState<boolean>(false);
  const [imgError, setImgError] = useState<boolean>(false);

  const isPlaceholder: boolean =
    !cat.image || cat.image.includes("placehold") || imgError;

  return (
    <div
      className="relative overflow-hidden cursor-pointer mx-2.5 rounded-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#f0f0eb",
        transition: "transform .22s ease, box-shadow .22s ease",
        transform: hovered ? "scale(1.018)" : "scale(1)",
        boxShadow: hovered
          ? "0 10px 36px rgba(0,0,0,0.2)"
          : "0 2px 8px rgba(0,0,0,0.07)",
      }}
    >
      {/* Shoe / image area */}
      <div
        className="w-full flex items-center justify-center"
        style={{ height: 200, padding: "20px 16px 10px" }}
      >
        {isPlaceholder ? (
          ShoeSVGs[svgIndex % ShoeSVGs.length]
        ) : (
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-full object-contain"
            style={{ maxHeight: 170 }}
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Footer */}
      <div
        className="flex items-end justify-between px-4 pb-4 pt-1"
        style={{ minHeight: 68 }}
      >
        <h3
          className="font-black"
          style={{
            fontSize: 14,
            letterSpacing: "0.05em",
            color: "#111",
            lineHeight: 1.25,
            whiteSpace: "pre-line",
            textTransform: "uppercase",
          }}
        >
          {cat.name.replace(/ /g, "\n")}
        </h3>

        <button
          style={{
            width: 36,
            height: 36,
            background: hovered ? "#111" : "#222",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            marginLeft: 8,
            transition: "background .2s",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 12L12 2M12 2H5M12 2v7"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────
export default function CategoriesSlider(): ReactElement {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const visible = 2;

  const load = (): void => {
    setLoading(true);
    setError(null);
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<Category[]>;
      })
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    load();
  }, []);

  const max: number = Math.max(0, categories.length - visible);
  const prev = (): void => setCurrent((c) => Math.max(0, c - 1));
  const next = (): void => setCurrent((c) => Math.min(max, c + 1));
  const shown: Category[] = categories.slice(current, current + visible);

  const navButtons: NavButton[] = [
    { fn: prev, icon: "M9 2L4 7l5 5", disabled: current === 0 || loading },
    { fn: next, icon: "M5 2l5 5-5 5", disabled: current >= max || loading },
  ];

  return (
    <div
      className="w-full">
      <style>{`
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        .cat-fade { animation: fadeUp .3s ease both; }
      `}</style>

      <div className="bg-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto pt-18">
          {/* ── Header bar ── */}
          <div className="flex items-center justify-between pb-4">
            <div className="flex items-center gap-3">
              <h2
                className="text-white font-black"
                style={{ fontSize: "clamp(22px,5vw,34px)", letterSpacing: "-0.5px", lineHeight: 1 }}
              >
                CATEGORIES
              </h2>

              {/* Live indicator */}
              {!loading && !error && (
                <span
                  className="flex items-center gap-1.5 font-bold"
                  style={{ color: "#4ade80", fontSize: 11, letterSpacing: "0.08em", fontFamily: "monospace" }}
                >
                  <span
                    className="inline-block rounded-full animate-pulse"
                    style={{ width: 6, height: 6, background: "#4ade80" }}
                  />
                  {categories.length} LIVE
                </span>
              )}
            </div>

            {/* Arrow nav */}
            <div className="flex gap-2">
              {navButtons.map(({ fn, icon, disabled }, i) => (
                <button
                  key={i}
                  onClick={fn}
                  disabled={disabled}
                  style={{
                    width: 36,
                    height: 36,
                    background: disabled ? "#2e2e2e" : "#444",
                    color: disabled ? "#555" : "#fff",
                    border: "none",
                    borderRadius: 8,
                    cursor: disabled ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background .2s",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path
                      d={icon}
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* ── Cards area ── */}
          <div

          >
            {error ? (
              /* Error state */
              <div className="flex flex-col items-center justify-center py-14 text-center px-6">
                <p className="font-black text-white text-base mb-1">Failed to load categories</p>
                <p className="text-gray-500 text-xs mb-4">{error}</p>
                <button
                  onClick={load}
                  style={{
                    background: "#4A69E2",
                    color: "#fff",
                    border: "none",
                    borderRadius: 10,
                    padding: "10px 24px",
                    fontWeight: 700,
                    fontSize: 12,
                    cursor: "pointer",
                    letterSpacing: "1px",
                  }}
                >
                  RETRY
                </button>
              </div>
            ) : loading ? (
              /* Skeleton */
              <div className="grid" style={{ gridTemplateColumns: `repeat(${visible}, 1fr)` }}>
                {Array.from({ length: visible }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            ) : (
              /* Live cards */
              <div
                className="grid cat-fade"
                style={{ gridTemplateColumns: `repeat(${visible}, 1fr)` }}
              >
                {shown.map((cat, i) => (
                  <CategoryCard key={cat.id} cat={cat} svgIndex={current + i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>


      {/* ── Dot indicators ── */}
      {!loading && !error && categories.length > visible && (
        <div className="flex justify-center gap-1.5 mt-3">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: current === i ? 20 : 6,
                height: 6,
                borderRadius: 99,
                background: current === i ? "#1a1a1a" : "#ccc",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "all .25s ease",
              }}
            />
          ))}
        </div>
      )}

      {/* Page counter */}
      {!loading && !error && categories.length > 0 && (
        <p
          className="text-center mt-2"
          style={{ fontSize: 11, color: "#aaa", letterSpacing: "0.08em", fontWeight: 600 }}
        >
          {current + 1}–{Math.min(current + visible, categories.length)} of {categories.length}
        </p>
      )}
    </div>
  );
}