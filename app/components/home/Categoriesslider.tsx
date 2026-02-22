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

interface NavButtonProps {
  fn: () => void;
  icon: string;
  disabled: boolean;
}

// ── SVG shoe fallbacks ────────────────────────────────────────────────────
const ShoeSVGs: ReactElement[] = [
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

// ── Skeleton ──────────────────────────────────────────────────────────────
function SkeletonCard(): ReactElement {
  return (
    <div className="rounded-xl overflow-hidden mx-2.5 bg-[#f0f0eb]">
      <div className="h-[200px] bg-gradient-to-r from-[#e8e8e3] via-[#ddddd8] to-[#e8e8e3] bg-[length:200%_100%] animate-[shimmer_1.4s_infinite]" />
      <div className="px-4 pb-4 pt-3 flex items-end justify-between">
        <div className="flex flex-col gap-1.5">
          <div className="h-3 w-22 rounded bg-[#ddd]" />
          <div className="h-3 w-14 rounded bg-[#ddd]" />
        </div>
        <div className="w-9 h-9 rounded-lg bg-[#ddd] shrink-0" />
      </div>
    </div>
  );
}

// ── Category Card ─────────────────────────────────────────────────────────
function CategoryCard({ cat, svgIndex }: CategoryCardProps): ReactElement {
  const [hovered, setHovered] = useState<boolean>(false);
  const [imgError, setImgError] = useState<boolean>(false);

  const isPlaceholder: boolean =
    !cat.image || cat.image.includes("placehold") || imgError;

  return (
    <div
      className={[
        "relative overflow-hidden cursor-pointer mx-2.5 rounded-xl bg-[#f0f0eb]",
        "transition-[transform,box-shadow] duration-[220ms] ease-in-out",
        hovered
          ? "scale-[1.018] shadow-[0_10px_36px_rgba(0,0,0,0.2)]"
          : "scale-100 shadow-[0_2px_8px_rgba(0,0,0,0.07)]",
      ].join(" ")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image / SVG area */}
      <div className="w-full h-[200px] flex items-center justify-center px-4 pt-5 pb-2.5">
        {isPlaceholder ? (
          ShoeSVGs[svgIndex % ShoeSVGs.length]
        ) : (
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-full object-contain max-h-[170px]"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Footer row */}
      <div className="flex items-end justify-between px-4 pb-4 pt-1 min-h-[68px]">
        <h3 className="font-black text-[14px] tracking-[0.05em] text-[#111] leading-[1.25] uppercase whitespace-pre-line">
          {cat.name.replace(/ /g, "\n")}
        </h3>

        <button
          className={[
            "w-9 h-9 flex items-center justify-center shrink-0 ml-2",
            "rounded-lg border-none cursor-pointer text-white",
            "transition-colors duration-200",
            hovered ? "bg-[#111]" : "bg-[#222]",
          ].join(" ")}
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

// ── Nav Button ────────────────────────────────────────────────────────────
function NavBtn({ fn, icon, disabled }: NavButtonProps): ReactElement {
  return (
    <button
      onClick={fn}
      disabled={disabled}
      className={[
        "w-9 h-9 flex items-center justify-center rounded-lg border-none",
        "transition-colors duration-200",
        disabled
          ? "bg-[#2e2e2e] text-[#555] cursor-not-allowed"
          : "bg-[#444] text-white cursor-pointer hover:bg-[#555]",
      ].join(" ")}
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
  );
}

// ── Main Component ────────────────────────────────────────────────────────
export default function CategoriesSlider(): ReactElement {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading]       = useState<boolean>(true);
  const [error, setError]           = useState<string | null>(null);
  const [current, setCurrent]       = useState<number>(0);

  const visible = 2;

  const load = (): void => {
    setLoading(true);
    setError(null);
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<Category[]>;
      })
      .then((data) => { setCategories(data); setLoading(false); })
      .catch((err: Error) => { setError(err.message); setLoading(false); });
  };

  useEffect(() => { load(); }, []);

  const max: number        = Math.max(0, categories.length - visible);
  const prev = (): void   => setCurrent((c) => Math.max(0, c - 1));
  const next = (): void   => setCurrent((c) => Math.min(max, c + 1));
  const shown: Category[] = categories.slice(current, current + visible);

  return (
    <div className="w-full">
      <style>{`
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        .cat-fade { animation: fadeUp .3s ease both; }
      `}</style>

      {/* Dark band */}
      <div className="bg-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto pt-18">

          {/* ── Header ── */}
          <div className="flex items-center justify-between pb-4">
            {/* Title + live badge */}
            <div className="flex items-center gap-3">
              <h2 className="text-white font-black text-[clamp(22px,5vw,34px)] tracking-tight leading-none">
                CATEGORIES
              </h2>
            </div>

            {/* Prev / Next */}
            <div className="flex gap-2">
              <NavBtn fn={prev} icon="M9 2L4 7l5 5" disabled={current === 0 || loading} />
              <NavBtn fn={next} icon="M5 2l5 5-5 5" disabled={current >= max || loading} />
            </div>
          </div>

          {/* ── Cards ── */}
          {error ? (
            <div className="flex flex-col items-center justify-center py-14 text-center px-6">
              <p className="font-black text-white text-base mb-1">Failed to load categories</p>
              <p className="text-gray-500 text-xs mb-4">{error}</p>
              <button
                onClick={load}
                className="bg-[#4A69E2] text-white border-none rounded-[10px] px-6 py-2.5 font-bold text-xs tracking-[1px] cursor-pointer hover:bg-[#3a59d2] transition-colors"
              >
                RETRY
              </button>
            </div>
          ) : loading ? (
            <div className="grid grid-cols-2">
              {Array.from({ length: visible }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 cat-fade">
              {shown.map((cat, i) => (
                <CategoryCard key={cat.id} cat={cat} svgIndex={current + i} />
              ))}
            </div>
          )}

        </div>
      </div>

      {/* ── Dot indicators ── */}
      {!loading && !error && categories.length > visible && (
        <div className="flex justify-center gap-1.5 mt-3">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={[
                "h-1.5 rounded-full border-none p-0 cursor-pointer transition-all duration-[250ms]",
                current === i ? "w-5 bg-[#1a1a1a]" : "w-1.5 bg-[#ccc]",
              ].join(" ")}
            />
          ))}
        </div>
      )}

      {/* ── Page counter ── */}
      {!loading && !error && categories.length > 0 && (
        <p className="text-center mt-2 text-[11px] text-[#aaa] tracking-[0.08em] font-semibold">
          {current + 1}–{Math.min(current + visible, categories.length)} of {categories.length}
        </p>
      )}
    </div>
  );
}