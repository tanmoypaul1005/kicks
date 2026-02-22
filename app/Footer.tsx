"use client";
import { useState, ChangeEvent, FormEvent, ComponentType, ReactElement } from "react";

// ── Types ─────────────────────────────────────────────────────────────────
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

// ── Constants ─────────────────────────────────────────────────────────────
const reviews: Review[] = [
  { id: 1, title: "Good Quality", text: "I highly recommend shopping from kicks", rating: 5.0, avatar: null, initials: "JD", avatarBg: "bg-orange-400", shoeImg: "shoe1" },
  { id: 2, title: "Good Quality", text: "I highly recommend shopping from kicks", rating: 5.0, avatar: null, initials: "AM", avatarBg: "bg-blue-300",   shoeImg: "shoe2" },
  { id: 3, title: "Good Quality", text: "I highly recommend shopping from kicks", rating: 5.0, avatar: null, initials: "KL", avatarBg: "bg-gray-700",   shoeImg: "shoe3" },
];

const categoryLinks: string[] = ["Runners", "Sneakers", "Basketball", "Outdoor", "Golf", "Hiking"];
const companyLinks: string[]  = ["About", "Contact", "Blogs"];

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
      <line x1="98"  y1="115" x2="138" y2="113" stroke="#fff" strokeWidth="3" opacity="0.9" />
      <line x1="96"  y1="124" x2="136" y2="122" stroke="#fff" strokeWidth="3" opacity="0.9" />
    </svg>
  );
}

function ReviewShoe3(): ReactElement {
  return (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="300" height="200" fill="#111827" />
      <ellipse cx="150" cy="110" rx="95" ry="55" fill="#1f2937" />
      <ellipse cx="150" cy="108" rx="90" ry="50" fill="#111827" />
      <line x1="118" y1="80"  x2="182" y2="80"  stroke="#fff" strokeWidth="3" opacity="0.8" />
      <line x1="115" y1="92"  x2="185" y2="92"  stroke="#fff" strokeWidth="3" opacity="0.8" />
      <line x1="113" y1="104" x2="187" y2="104" stroke="#fff" strokeWidth="3" opacity="0.8" />
      <line x1="115" y1="116" x2="185" y2="116" stroke="#fff" strokeWidth="3" opacity="0.8" />
      <line x1="118" y1="128" x2="182" y2="128" stroke="#fff" strokeWidth="3" opacity="0.8" />
      <line x1="130" y1="75"  x2="130" y2="135" stroke="#fff" strokeWidth="1.5" opacity="0.4" />
      <line x1="170" y1="75"  x2="170" y2="135" stroke="#fff" strokeWidth="1.5" opacity="0.4" />
      <line x1="150" y1="65"  x2="150" y2="75"  stroke="#f9fafb" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="150" cy="63" rx="18" ry="10" fill="#374151" stroke="#6b7280" strokeWidth="1.5" />
    </svg>
  );
}

const ShoeSVGs: ComponentType[] = [ReviewShoe1, ReviewShoe2, ReviewShoe3];

// ── Star Rating ───────────────────────────────────────────────────────────
function StarRating({ rating }: StarRatingProps): ReactElement {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className="w-3 h-3 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs font-bold text-gray-700 ml-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────
export default function ReviewsAndFooter(): ReactElement {
  const [email, setEmail]         = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div style={{ background: "#f4f4f0", fontFamily: "'Barlow', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Barlow:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        .kicks-wm {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(100px, 26vw, 210px);
          line-height: 0.82;
          color: white;
          letter-spacing: -4px;
          user-select: none;
          white-space: nowrap;
          text-align: center;
          opacity: 0.07;
          display: block;
          overflow: hidden;
        }
        .rv-card { transition: transform 0.2s, box-shadow 0.2s; }
        .rv-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.13); }
        .fl:hover { color: #3b82f6; }
        .si:hover { background: #2563eb !important; color: white !important; }
      `}</style>

      {/* ── REVIEWS ── */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(28px,6vw,40px)", lineHeight: 1, letterSpacing: "-0.5px", color: "#111827", margin: 0 }}>
            REVIEWS
          </h2>
          <button style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", background: "#2563eb", color: "#fff", border: "none", borderRadius: 6, padding: "8px 16px", cursor: "pointer" }}>
            SEE ALL
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16 }}>
          {reviews.map((r, i) => {
            const ShoeComponent: ComponentType = ShoeSVGs[i];
            return (
              <div key={r.id} className="rv-card" style={{ background: "#fff", borderRadius: 18, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
                <div style={{ padding: "16px 16px 12px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 14, color: "#111827", margin: "0 0 4px" }}>{r.title}</h3>
                    <p style={{ fontFamily: "'Barlow',sans-serif", fontSize: 11, color: "#6b7280", margin: "0 0 8px", lineHeight: 1.4 }}>{r.text}</p>
                    <StarRating rating={r.rating} />
                  </div>
                  <div className={r.avatarBg} style={{ width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#fff", fontSize: 12, fontWeight: 700, fontFamily: "'Barlow Condensed',sans-serif" }}>
                    {r.initials}
                  </div>
                </div>
                <div style={{ height: 160 }}>
                  <ShoeComponent />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── NEWSLETTER + FOOTER stacked container ── */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        {/* Blue newsletter card — fully rounded on all sides */}
        <div className="rounded-tl-[32px] rounded-tr-[32px]" style={{ background: "#4A6CF7", padding: "40px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap", position: "relative", zIndex: 2, marginBottom: "-32px" }}>
          {/* Left */}
          <div style={{ flex: 1, minWidth: 240 }}>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(22px,4vw,34px)", lineHeight: 1.05, color: "#fff", textTransform: "uppercase", margin: "0 0 8px" }}>
              JOIN OUR KICKSPLUS<br />CLUB &amp; GET 15% OFF
            </h2>
            <p style={{ fontFamily: "'Barlow',sans-serif", fontSize: 13, color: "#bfdbfe", margin: "0 0 20px" }}>
              Sign up for free! Join the community.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email address"
                  required
                  style={{ fontFamily: "'Barlow',sans-serif", fontSize: 13, padding: "10px 16px", border: "1.5px solid rgba(255,255,255,0.7)", borderRadius: 6, outline: "none", flex: 1, minWidth: 180, maxWidth: 280, color: "#374151", background: "#fff" }}
                />
                <button
                  type="submit"
                  style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "1.5px", textTransform: "uppercase", background: "#111", color: "#fff", border: "none", borderRadius: 6, padding: "10px 20px", cursor: "pointer", whiteSpace: "nowrap" }}
                >
                  SUBMIT
                </button>
              </form>
            ) : (
              <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 14, color: "#fff" }}>
                🎉 You're in! Check your email for your 15% discount.
              </p>
            )}
          </div>

          {/* Right: KICKS wordmark */}
          <div style={{ flexShrink: 0, position: "relative" }}>
            <svg width="260" height="65" viewBox="0 0 351 88" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clipnl)">
                <path d="M88.074 87.9999C87.1855 87.9999 86.4182 87.674 85.772 87.0221C85.1258 86.3703 84.8027 85.5962 84.8027 84.6999V5.74434C84.8027 4.84804 85.1258 4.07397 85.772 3.42211C86.4182 2.77026 87.1855 2.44434 88.074 2.44434H112.791C113.679 2.44434 114.447 2.77026 115.093 3.42211C115.739 4.07397 116.062 4.84804 116.062 5.74434V84.6999C116.062 85.5962 115.739 86.3703 115.093 87.0221C114.447 87.674 113.679 87.9999 112.791 87.9999H88.074Z" fill="white" />
                <path d="M3.27132 86.7777C2.38281 86.7777 1.61546 86.4518 0.969279 85.7999C0.323093 85.1481 0 84.374 0 83.4777V4.52217C0 3.62587 0.323093 2.8518 0.969279 2.19995C1.61546 1.54809 2.38281 1.22217 3.27132 1.22217H26.4128C27.3013 1.22217 28.0687 1.54809 28.7149 2.19995C29.3611 2.8518 29.6842 3.62587 29.6842 4.52217V28.7222L43.3752 3.91106C43.7791 3.25921 44.358 2.64809 45.1388 2.07772C45.9061 1.50735 46.9292 1.22217 48.2216 1.22217H74.9979C75.7249 1.22217 76.3441 1.49377 76.8826 2.00982C77.4077 2.53945 77.6634 3.16414 77.6634 3.91106C77.6634 4.39995 77.5423 4.84809 77.3 5.2555L55.4912 42.1666L79.3597 82.7444C79.602 83.0703 79.7232 83.5185 79.7232 84.0888C79.7232 84.8222 79.4539 85.4604 78.9423 85.9901C78.4173 86.5197 77.7981 86.7777 77.0576 86.7777H49.4332C47.8177 86.7777 46.6196 86.3975 45.8657 85.6098C45.0984 84.8357 44.6272 84.2925 44.4656 83.9666L29.6842 57.3222V83.4777C29.6842 84.374 29.3611 85.1481 28.7149 85.7999C28.0687 86.4518 27.3013 86.7777 26.4128 86.7777H3.27132Z" fill="white" />
                <path d="M161.304 88C153.55 88 146.684 86.8593 140.707 84.5778C134.73 82.2963 129.978 78.7111 126.464 73.8222C122.95 68.9333 121.025 62.6185 120.716 54.8778C120.635 51.537 120.594 47.9519 120.594 44.1222C120.594 40.2926 120.635 36.6259 120.716 33.1222C121.039 25.5444 122.991 19.3111 126.585 14.4222C130.18 9.53333 134.986 5.90741 141.003 3.54444C147.021 1.18148 153.792 0 161.304 0C166.474 0 171.455 0.597531 176.274 1.76543C181.08 2.94691 185.415 4.80741 189.292 7.33333C193.169 9.85926 196.252 13.1049 198.554 17.0432C200.856 20.9951 202.041 25.7481 202.135 31.2889C202.135 32.0222 201.866 32.6605 201.354 33.1901C200.829 33.7198 200.21 33.9778 199.469 33.9778H174.753C173.46 33.9778 172.505 33.7198 171.899 33.1901C171.293 32.6605 170.755 31.7506 170.27 30.4333C169.381 27.8259 168.17 26.0741 166.635 25.1778C165.1 24.2815 163.283 23.8333 161.183 23.8333C158.517 23.8333 156.39 24.5531 154.815 25.979C153.24 27.4049 152.365 29.9988 152.204 33.7333C151.961 40.4148 151.961 47.2593 152.204 54.2667C152.365 58.0148 153.24 60.6086 154.815 62.021C156.39 63.4469 158.517 64.1667 161.183 64.1667C163.283 64.1667 165.114 63.6778 166.689 62.7C168.264 61.7222 169.449 60.0111 170.27 57.5667C170.674 56.1815 171.199 55.2444 171.845 54.7556C172.491 54.2667 173.46 54.0222 174.753 54.0222H199.469C200.196 54.0222 200.816 54.2938 201.354 54.8099C201.879 55.3395 202.135 55.9642 202.135 56.7111C202.054 62.2518 200.87 67.0049 198.554 70.9568C196.252 74.9086 193.169 78.1543 189.292 80.6667C185.415 83.1926 181.067 85.0531 176.274 86.221C171.455 87.4025 166.474 88 161.304 88Z" fill="white" />
                <path d="M273.713 82.7444L249.845 42.1666L271.654 5.2555C271.896 4.84809 272.017 4.39995 272.017 3.91106C272.017 3.17772 271.761 2.55303 271.236 2.0234C270.711 1.49377 270.079 1.22217 269.352 1.22217H242.575C241.283 1.22217 240.26 1.50735 239.493 2.07772C238.725 2.64809 238.133 3.25921 237.729 3.91106L225.613 25.8703L224.038 28.7222V4.52217C224.038 3.62587 223.715 2.8518 223.069 2.19995C222.422 1.54809 221.655 1.22217 220.767 1.22217H197.625C196.737 1.22217 195.969 1.54809 195.323 2.19995C195.242 2.29501 195.162 2.37649 195.081 2.47155C195 2.56661 194.933 2.66167 194.879 2.75674C194.811 2.8518 194.758 2.96044 194.704 3.0555C194.65 3.16414 194.61 3.2592 194.569 3.36785C198.742 6.26044 202.162 9.92711 204.706 14.2999C207.466 19.053 208.92 24.7432 209.014 31.2074C209.014 33.4481 208.179 35.4851 206.658 37.0333C205.124 38.5678 203.104 39.4098 200.964 39.4098H194.354V48.5901H200.964C203.104 48.5901 205.124 49.432 206.645 50.9666C208.179 52.5283 209.014 54.5654 209.014 56.711C208.92 63.2567 207.466 68.9469 204.706 73.6999C202.162 78.0728 198.742 81.7394 194.569 84.632C194.61 84.7407 194.65 84.8493 194.704 84.9444C194.811 85.1481 194.933 85.3518 195.081 85.5283C195.162 85.6234 195.242 85.7049 195.323 85.7999C195.969 86.4518 196.737 86.7777 197.625 86.7777H220.767C221.655 86.7777 222.422 86.4518 223.069 85.7999C223.715 85.1481 224.038 84.374 224.038 83.4777V57.3222L225.613 60.1604L238.819 83.9666C238.981 84.2925 239.452 84.8493 240.219 85.6234C240.987 86.3975 242.172 86.7777 243.787 86.7777H271.411C272.138 86.7777 272.771 86.5197 273.296 85.9901C273.821 85.4604 274.077 84.8222 274.077 84.0888C274.077 83.5185 273.956 83.0703 273.713 82.7444Z" fill="white" />
                <path d="M310.775 88C301.809 88 294.418 86.7778 288.603 84.3333C282.787 81.8889 278.425 78.6704 275.517 74.6778C272.61 70.6852 271.075 66.4481 270.913 61.9667C270.913 61.2333 271.169 60.6086 271.694 60.0654C272.219 59.5358 272.838 59.2778 273.565 59.2778H296.586C297.878 59.2778 298.861 59.4543 299.561 59.821C300.247 60.1876 300.988 60.7037 301.809 61.342C302.617 61.9123 303.438 62.4284 304.286 62.863C305.134 63.3111 306.104 63.637 307.194 63.8407C308.284 64.0444 309.469 64.1531 310.775 64.1531C313.521 64.1531 315.716 63.8407 317.371 63.2296C319.027 62.6185 319.862 61.7901 319.862 60.7309C319.862 59.7531 319.391 58.9383 318.462 58.2864C317.533 57.6346 315.931 57.0506 313.669 56.521C311.408 55.9914 308.257 55.4753 304.219 55C297.838 54.1037 292.305 52.5963 287.62 50.4778C282.935 48.3593 279.314 45.4531 276.783 41.7321C274.238 38.0247 272.973 33.4753 272.973 28.0975C272.973 22.5568 274.521 17.6679 277.631 13.4309C280.741 9.19383 285.062 5.89383 290.595 3.53086C296.128 1.18148 302.576 0 309.927 0C315.985 0 321.356 0.787654 326.041 2.37654C330.726 3.96543 334.684 6.04321 337.915 8.60988C341.146 11.1765 343.609 13.9333 345.305 16.8667C347.002 19.8 347.89 22.6111 347.971 25.3C347.971 26.0333 347.702 26.6716 347.19 27.2012C346.665 27.7309 346.073 27.9889 345.427 27.9889H321.195C320.064 27.9889 319.148 27.8259 318.475 27.5C317.789 27.1741 317.075 26.6852 316.348 26.0333C315.944 25.6259 315.191 25.1642 314.1 24.621C313.01 24.0914 311.623 23.8333 309.913 23.8333C307.894 23.8333 306.413 24.1457 305.498 24.7568C304.569 25.3679 304.098 26.2099 304.098 27.2556C304.098 27.9889 304.461 28.6815 305.188 29.3333C305.915 29.9852 307.248 30.5556 309.186 31.0444C311.125 31.5333 313.912 32.0222 317.546 32.5111C325.624 33.4889 332.099 35.0642 336.999 37.2099C341.886 39.3691 345.44 42.2481 347.661 45.8333C349.883 49.4185 351 53.8593 351 59.1556C351 65.1037 349.236 70.237 345.723 74.5556C342.209 78.8741 337.417 82.1876 331.359 84.5099C325.301 86.8321 318.448 88 310.775 88Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clipnl"><rect width="351" height="88" fill="white" /></clipPath>
              </defs>
            </svg>
            {/* Orange + badge */}
            <span style={{ position: "absolute", top: -10, right: -14 }}>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 0.0234375C20.1552 0.0234375 25.9766 5.84482 25.9766 13C25.9766 20.1552 20.1552 25.9766 13 25.9766C5.84482 25.9766 0.0234375 20.1552 0.0234375 13C0.0234375 5.84482 5.84482 0.0234375 13 0.0234375ZM13 6.97656C12.7286 6.97656 12.4683 7.08444 12.2764 7.27637C12.0844 7.4683 11.9766 7.72857 11.9766 8V11.9766H8C7.72857 11.9766 7.4683 12.0844 7.27637 12.2764C7.08444 12.4683 6.97656 12.7286 6.97656 13C6.97656 13.2714 7.08444 13.5317 7.27637 13.7236C7.4683 13.9156 7.72857 14.0234 8 14.0234H11.9766V18C11.9766 18.2714 12.0844 18.5317 12.2764 18.7236C12.4683 18.9156 12.7286 19.0234 13 19.0234C13.2714 19.0234 13.5317 18.9156 13.7236 18.7236C13.9156 18.5317 14.0234 18.2714 14.0234 18V14.0234H18C18.2714 14.0234 18.5317 13.9156 18.7236 13.7236C18.9156 13.5317 19.0234 13.2714 19.0234 13C19.0234 12.7286 18.9156 12.4683 18.7236 12.2764C18.5317 12.0844 18.2714 11.9766 18 11.9766H14.0234V8C14.0234 7.72857 13.9156 7.4683 13.7236 7.27637C13.5317 7.08444 13.2714 6.97656 13 6.97656Z" fill="#FFA52F" stroke="#FFA52F" strokeWidth="0.046875" />
              </svg>
            </span>
          </div>
        </div>

        {/* ── FOOTER — overlaps behind the blue card with big rounded top ── */}
        <div style={{ background: "#111111", borderRadius: "40px 40px 0 0", paddingTop: 64, position: "relative", zIndex: 100 }}>
          <div style={{ padding: "0 40px" }}>
            {/* Footer grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 32, marginBottom: 32 }}>

              {/* About us */}
              <div style={{ gridColumn: "span 1" }}>
                <h4 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 14, color: "#FFA52F", letterSpacing: "0.5px", margin: "0 0 12px" }}>About us</h4>
                <p style={{ fontFamily: "'Barlow',sans-serif", fontSize: 12, color: "#E7E7E3", lineHeight: 1.65, margin: 0 }}>
                  We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
                </p>
              </div>

              {/* Categories */}
              <div>
                <h4 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 14, color: "#FFA52F", letterSpacing: "0.5px", margin: "0 0 12px" }}>Categories</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {categoryLinks.map((item) => (
                    <li key={item} style={{ marginBottom: 8 }}>
                      <a href="#" className="fl" style={{ fontFamily: "'Barlow',sans-serif", fontSize: 12, color: "#9ca3af", textDecoration: "none", transition: "color 0.15s" }}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 14, color: "#FFA52F", letterSpacing: "0.5px", margin: "0 0 12px" }}>Company</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {companyLinks.map((item) => (
                    <li key={item} style={{ marginBottom: 8 }}>
                      <a href="#" className="fl" style={{ fontFamily: "'Barlow',sans-serif", fontSize: 12, color: "#9ca3af", textDecoration: "none", transition: "color 0.15s" }}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Follow us */}
              <div>
                <h4 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 14, color: "#FFA52F", letterSpacing: "0.5px", margin: "0 0 12px" }}>Follow us</h4>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {/* Facebook */}
                  <a href="#" className="si" style={{ width: 32, height: 32, borderRadius: "50%", background: "#1f2937", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", transition: "all 0.2s" }}>
                    <svg style={{ width: 14, height: 14 }} fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                  </a>
                  {/* Instagram */}
                  <a href="#" className="si" style={{ width: 32, height: 32, borderRadius: "50%", background: "#1f2937", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", transition: "all 0.2s" }}>
                    <svg style={{ width: 14, height: 14 }} fill="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle cx="17.5" cy="6.5" r="1" />
                    </svg>
                  </a>
                  {/* Twitter */}
                  <a href="#" className="si" style={{ width: 32, height: 32, borderRadius: "50%", background: "#1f2937", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", transition: "all 0.2s" }}>
                    <svg style={{ width: 14, height: 14 }} fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
                  </a>
                  {/* TikTok */}
                  <a href="#" className="si" style={{ width: 32, height: 32, borderRadius: "50%", background: "#1f2937", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", transition: "all 0.2s" }}>
                    <svg style={{ width: 14, height: 14 }} fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Divider + copyright */}
            <div style={{ borderTop: "1px solid #1f2937", paddingTop: 16, paddingBottom: 16 }}>
              <p style={{ textAlign: "center", fontFamily: "'Barlow',sans-serif", fontSize: 11, color: "#4b5563", margin: 0 }}>
                © All rights reserved
              </p>
            </div>
          </div>

          {/* Giant KICKS watermark */}
          <div style={{ overflow: "hidden", pointerEvents: "none", userSelect: "none", marginBottom: 0 }}>
            <span className="kicks-wm">KICKS</span>
          </div>
        </div>

      </div>
    </div>
  );
}