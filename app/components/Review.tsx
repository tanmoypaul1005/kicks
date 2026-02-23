
import { ComponentType,ReactElement } from "react";

interface Review {
  id: number;
  title: string;
  text: string;
  rating: number;
  avatar: null;
  initials: string;
  avatarBg: string;
  shoeImg: string;
}


interface StarRatingProps {
  rating: number;
}

// ── Star Rating ───────────────────────────────────────────────────────────
function StarRating({ rating }: StarRatingProps): ReactElement {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className="w-3 h-3 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1 text-xs font-bold text-gray-700 font-['Barlow_Condensed']">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

// ── SVG Shoe Illustrations ────────────────────────────────────────────────
function ReviewShoe1(): ReactElement {
  return (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="300" height="200" fill="#e5e7eb" />
      <rect x="0" y="120" width="300" height="80" fill="#374151" />
      <path d="M40 155 Q50 105 100 90 L210 88 Q250 89 248 115 Q246 140 230 155 Z" fill="#dc2626" />
      <path d="M40 155 Q36 135 42 118 Q50 100 70 93 L105 88 Q72 100 65 122 Q55 140 40 155 Z" fill="#1f2937" />
      <path d="M100 88 L210 88 Q230 89 240 100 L95 96 Z" fill="#f9fafb" />
      <ellipse cx="148" cy="157" rx="110" ry="12" fill="#1f2937" />
      <ellipse cx="148" cy="153" rx="107" ry="9" fill="#f9fafb" />
      <path d="M75 138 Q105 118 135 122 Q158 125 165 133" fill="none" stroke="#1f2937" strokeWidth="5" strokeLinecap="round" />
      <line x1="108" y1="105" x2="148" y2="103" stroke="#fff" strokeWidth="3" opacity="0.9" />
      <line x1="106" y1="114" x2="146" y2="112" stroke="#fff" strokeWidth="3" opacity="0.9" />
      <line x1="104" y1="123" x2="144" y2="121" stroke="#fff" strokeWidth="3" opacity="0.9" />
      <line x1="102" y1="132" x2="142" y2="130" stroke="#fff" strokeWidth="3" opacity="0.9" />
    </svg>
  );
}

function ReviewShoe2(): ReactElement {
  return (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#bfdbfe" />
        </linearGradient>
      </defs>
      <rect width="300" height="200" fill="url(#bg2)" />
      <ellipse cx="150" cy="160" rx="108" ry="11" fill="#6b7280" opacity="0.3" />
      <path d="M45 150 Q52 108 92 92 L200 90 Q238 91 236 118 Q234 142 218 150 Z" fill="#ec4899" />
      <path d="M45 150 Q41 130 47 114 Q55 97 74 91 L100 90 Q68 102 62 124 Q52 140 45 150 Z" fill="#10b981" />
      <path d="M92 90 L200 90 Q220 91 230 103 L88 97 Z" fill="#fbbf24" />
      <ellipse cx="148" cy="152" rx="105" ry="9" fill="#f9fafb" />
      <path d="M72 135 Q100 116 128 120 Q150 123 157 130" fill="none" stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" />
      <line x1="100" y1="106" x2="140" y2="104" stroke="#fff" strokeWidth="3" opacity="0.9" />
      <line x1="98" y1="115" x2="138" y2="113" stroke="#fff" strokeWidth="3" opacity="0.9" />
      <line x1="96" y1="124" x2="136" y2="122" stroke="#fff" strokeWidth="3" opacity="0.9" />
    </svg>
  );
}

function ReviewShoe3(): ReactElement {
  return (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="300" height="200" fill="#111827" />
      <ellipse cx="150" cy="110" rx="95" ry="55" fill="#1f2937" />
      <ellipse cx="150" cy="108" rx="90" ry="50" fill="#111827" />
      <line x1="118" y1="80" x2="182" y2="80" stroke="#fff" strokeWidth="3" opacity="0.8" />
      <line x1="115" y1="92" x2="185" y2="92" stroke="#fff" strokeWidth="3" opacity="0.8" />
      <line x1="113" y1="104" x2="187" y2="104" stroke="#fff" strokeWidth="3" opacity="0.8" />
      <line x1="115" y1="116" x2="185" y2="116" stroke="#fff" strokeWidth="3" opacity="0.8" />
      <line x1="118" y1="128" x2="182" y2="128" stroke="#fff" strokeWidth="3" opacity="0.8" />
      <line x1="130" y1="75" x2="130" y2="135" stroke="#fff" strokeWidth="1.5" opacity="0.4" />
      <line x1="170" y1="75" x2="170" y2="135" stroke="#fff" strokeWidth="1.5" opacity="0.4" />
      <line x1="150" y1="65" x2="150" y2="75" stroke="#f9fafb" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="150" cy="63" rx="18" ry="10" fill="#374151" stroke="#6b7280" strokeWidth="1.5" />
    </svg>
  );
}

const ShoeSVGs: ComponentType[] = [ReviewShoe1, ReviewShoe2, ReviewShoe3];

// ── Constants ─────────────────────────────────────────────────────────────
const reviews: Review[] = [
  { id: 1, title: "Good Quality", text: "I highly recommend shopping from kicks", rating: 5.0, avatar: null, initials: "JD", avatarBg: "bg-orange-400", shoeImg: "shoe1" },
  { id: 2, title: "Good Quality", text: "I highly recommend shopping from kicks", rating: 5.0, avatar: null, initials: "AM", avatarBg: "bg-blue-300", shoeImg: "shoe2" },
  { id: 3, title: "Good Quality", text: "I highly recommend shopping from kicks", rating: 5.0, avatar: null, initials: "KL", avatarBg: "bg-gray-700", shoeImg: "shoe3" },
];


const Review = () => {
    return (
        <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="m-0 font-['Barlow_Condensed'] text-[clamp(28px,6vw,40px)] font-black leading-none tracking-[-0.5px] text-gray-900">
                    REVIEWS
                </h2>
                <button className="cursor-pointer rounded-md bg-blue-600 px-4 py-2 font-['Barlow_Condensed'] text-[11px] font-bold uppercase tracking-[1.5px] text-white">
                    SEE ALL
                </button>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
                {reviews.map((r, i) => {
                    const ShoeComponent: ComponentType = ShoeSVGs[i];
                    return (
                        <div key={r.id} className="overflow-hidden rounded-[18px] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.07)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.13)]">
                            <div className="flex items-start gap-3 px-4 pt-4 pb-3">
                                <div className="flex-1">
                                    <h3 className="mb-1 font-['Barlow_Condensed'] text-[14px] font-bold text-gray-900">{r.title}</h3>
                                    <p className="mb-2 text-[11px] leading-[1.4] text-gray-500">{r.text}</p>
                                    <StarRating rating={r.rating} />
                                </div>
                                <div className={`${r.avatarBg} flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-['Barlow_Condensed'] text-[12px] font-bold text-white`}>
                                    {r.initials}
                                </div>
                            </div>
                            <div className="h-40">
                                <ShoeComponent />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Review;