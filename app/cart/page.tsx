"use client";
import { useState, ChangeEvent, ReactElement } from "react";

// ── Types ─────────────────────────────────────────────────────────────────
interface ShoeColors {
  body: string;
  sole: string;
  accent: string;
}

interface RelatedProduct {
  name: string;
  price: string;
  badge: string;
  idx: number;
}

interface TrustBadge {
  icon: string;
  txt: string;
}

interface ProductThumbShoeProps {
  idx: number;
}

interface StarsProps {
  fill?: number;
}

// ── Constants ─────────────────────────────────────────────────────────────
const related: RelatedProduct[] = [
  { name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: "$125", badge: "New", idx: 0 },
  { name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: "$125", badge: "New", idx: 1 },
  { name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: "$125", badge: "New", idx: 2 },
  { name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: "$125", badge: "New", idx: 3 },
];

const trustBadges: TrustBadge[] = [
  { icon: "🔒", txt: "Secure" },
  { icon: "🚚", txt: "Fast Ship" },
  { icon: "↩️", txt: "Returns" },
];

const sizeOptions: string[] = ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"];
const quantityOptions: number[] = [1, 2, 3, 4, 5];

// ── SVG Components ────────────────────────────────────────────────────────
function CartShoe(): ReactElement {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="200" height="120" fill="#f0f4ff" rx="8" />
      <ellipse cx="100" cy="108" rx="72" ry="8" fill="#00000012" />
      <path d="M32 100 Q36 70 62 58 L140 56 Q165 57 163 76 Q161 94 148 100 Z" fill="#1e3a8a" />
      <path d="M32 100 Q29 85 34 72 Q40 60 55 55 L75 54 Q50 65 45 80 Q38 93 32 100 Z" fill="#1e40af" />
      <path d="M62 56 L140 56 Q155 57 160 66 L58 63 Z" fill="#3b82f6" />
      <ellipse cx="99" cy="101" rx="70" ry="7" fill="#f1f5f9" />
      <path d="M50 90 Q70 78 90 80 Q105 82 110 88" fill="none" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round" />
      <line x1="68" y1="70" x2="105" y2="68" stroke="#bfdbfe" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="66" y1="77" x2="103" y2="75" stroke="#bfdbfe" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="64" y1="84" x2="101" y2="82" stroke="#bfdbfe" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function ProductThumbShoe({ idx }: ProductThumbShoeProps): ReactElement {
  const colors: ShoeColors[] = [
    { body: "#1e3a8a", sole: "#f1f5f9", accent: "#3b82f6" },
    { body: "#166534", sole: "#f1f5f9", accent: "#22c55e" },
    { body: "#14532d", sole: "#f1f5f9", accent: "#4ade80" },
    { body: "#c2410c", sole: "#f1f5f9", accent: "#fb923c" },
  ];
  const c: ShoeColors = colors[idx % colors.length];
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="200" height="120" fill="#f9fafb" rx="0" />
      <ellipse cx="100" cy="108" rx="70" ry="8" fill="#00000010" />
      <path d="M32 100 Q36 68 62 56 L140 54 Q166 55 164 76 Q162 94 148 100 Z" fill={c.body} />
      <path d="M32 100 Q29 83 34 70 Q41 58 56 53 L76 52 Q51 64 46 80 Q38 93 32 100 Z" fill={c.accent} opacity="0.5" />
      <path d="M62 54 L140 54 Q157 55 162 66 L58 61 Z" fill="#ffffff30" />
      <ellipse cx="99" cy="101" rx="68" ry="6" fill={c.sole} />
      <path d="M50 89 Q70 77 90 79 Q105 81 110 87" fill="none" stroke={c.accent} strokeWidth="4" strokeLinecap="round" />
      <line x1="68" y1="69" x2="104" y2="67" stroke="#ffffff60" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="66" y1="77" x2="102" y2="75" stroke="#ffffff60" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// ── Stars ─────────────────────────────────────────────────────────────────
function Stars({ fill = 4 }: StarsProps): ReactElement {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3 h-3 ${i < fill ? "text-yellow-400 fill-yellow-400" : "text-gray-200 fill-gray-200"}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────
export default function CartPage(): ReactElement {
  const [quantity, setQuantity]       = useState<number>(1);
  const [size, setSize]               = useState<string>("10");
  const [wishlist, setWishlist]       = useState<boolean>(false);
  const [promo, setPromo]             = useState<string>("");
  const [promoOpen, setPromoOpen]     = useState<boolean>(false);
  const [promoApplied, setPromoApplied] = useState<boolean>(false);
  const [removed, setRemoved]         = useState<boolean>(false);
  const [checkoutDone, setCheckoutDone] = useState<boolean>(false);

  const unitPrice: number  = 130;
  const delivery: number   = 6.99;
  const discount: number   = promoApplied ? 13 : 0;
  const itemTotal: number  = unitPrice * quantity - discount;

  const handleCheckout = (): void => {
    setCheckoutDone(true);
    setTimeout(() => setCheckoutDone(false), 2500);
  };

  const handleSizeChange = (e: ChangeEvent<HTMLSelectElement>): void =>
    setSize(e.target.value);

  const handleQuantityChange = (e: ChangeEvent<HTMLSelectElement>): void =>
    setQuantity(Number(e.target.value));

  const handlePromoChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setPromo(e.target.value.toUpperCase());

  const handleApplyPromo = (): void => {
    if (promo) {
      setPromoApplied(true);
      setPromoOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f4f0]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Barlow:wght@400;500;600&display=swap');
        * { font-family:'Barlow',sans-serif; box-sizing:border-box; }
        .fd { font-family:'Barlow Condensed',sans-serif; }
        .section-title  { font-family:'Barlow Condensed',sans-serif; font-weight:900; font-size:clamp(18px,4vw,28px); }
        .product-name   { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:15px; letter-spacing:0.2px; }
        .price-large    { font-family:'Barlow Condensed',sans-serif; font-weight:900; font-size:clamp(20px,4vw,28px); }
        .label-sm       { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:11px; letter-spacing:1.5px; text-transform:uppercase; }
        .checkout-btn   { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:14px; letter-spacing:2px; text-transform:uppercase; }
        .view-btn       { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:11px; letter-spacing:1.2px; text-transform:uppercase; }
        .promo-link     { font-family:'Barlow',sans-serif; font-size:13px; }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        @keyframes slideIn { from{opacity:0;max-height:0} to{opacity:1;max-height:80px} }
        .fade-up  { animation:fadeUp .4s ease both; }
        .slide-in { animation:slideIn .3s ease both; overflow:hidden; }
        .product-card { transition:transform 0.2s ease,box-shadow 0.2s ease; }
        .product-card:hover { transform:translateY(-3px); box-shadow:0 12px 30px rgba(0,0,0,0.1); }
        select { appearance:none; -webkit-appearance:none; cursor:pointer; }
        .select-wrap { position:relative; display:inline-flex; align-items:center; }
        .select-wrap::after { content:'▾'; position:absolute; right:8px; font-size:10px; color:#6b7280; pointer-events:none; font-family:'Barlow Condensed',sans-serif; }
      `}</style>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-5 sm:py-8">

        {/* ── PROMO BANNER ── */}
        <div className="mb-6 fade-up">
          <h2
            className="fd font-black text-gray-900 text-2xl sm:text-3xl mb-1"
            style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900 }}
          >
            Saving to celebrate
          </h2>
          <p className="text-gray-500 text-sm">
            Enjoy up to 50% off thousands of styles during the End of Year sale — while supplies last. No code needed.
          </p>
          <p className="text-gray-500 text-sm mt-0.5">
            <a href="#" className="text-blue-600 hover:underline font-medium">Join us</a>
            <span className="mx-1.5 text-gray-300">or</span>
            <a href="#" className="text-blue-600 hover:underline font-medium">Sign-in</a>
          </p>
        </div>

        {/* ── MAIN LAYOUT: Bag + Summary ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8">

          {/* LEFT — Your Bag */}
          <div className="lg:col-span-2 fade-up">
            <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
              {/* Bag header */}
              <div className="px-5 sm:px-6 pt-5 pb-3 border-b border-gray-100">
                <h3 className="section-title text-gray-900">Your Bag</h3>
                <p className="text-gray-400 text-xs mt-0.5">Items in your bag not reserved — check out now to make them yours.</p>
              </div>

              {/* Cart Item or Empty State */}
              {!removed ? (
                <div className="p-4 sm:p-6">
                  <div className="flex gap-4 sm:gap-6 items-start">
                    {/* Shoe image */}
                    <div className="w-28 sm:w-36 flex-shrink-0 rounded-xl overflow-hidden bg-blue-50" style={{ minHeight: "90px" }}>
                      <CartShoe />
                    </div>

                    {/* Item details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="product-name text-gray-900 leading-tight">DROPSET TRAINER SHOES</p>
                          <p className="text-gray-500 text-xs mt-1">Men's Road Running Shoes</p>
                          <p className="text-gray-500 text-xs">Enamel Blue / University White</p>
                        </div>
                        <span className="price-large text-blue-600 flex-shrink-0">
                          ${(unitPrice * quantity - discount).toFixed(2)}
                        </span>
                      </div>

                      {/* Size & Quantity selectors */}
                      <div className="flex flex-wrap items-center gap-3 mt-3">
                        {/* Size */}
                        <div className="select-wrap">
                          <select
                            value={size}
                            onChange={handleSizeChange}
                            className="fd font-bold text-gray-700 text-xs bg-gray-50 border border-gray-200 rounded-lg pl-3 pr-7 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "12px" }}
                          >
                            {sizeOptions.map((s) => (
                              <option key={s} value={s}>Size {s}</option>
                            ))}
                          </select>
                        </div>

                        {/* Quantity */}
                        <div className="select-wrap">
                          <select
                            value={quantity}
                            onChange={handleQuantityChange}
                            className="fd font-bold text-gray-700 text-xs bg-gray-50 border border-gray-200 rounded-lg pl-3 pr-7 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "12px" }}
                          >
                            {quantityOptions.map((q) => (
                              <option key={q} value={q}>Quantity {q}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-4 mt-3">
                        {/* Wishlist */}
                        <button
                          onClick={() => setWishlist(!wishlist)}
                          className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"
                        >
                          <svg
                            className={`w-4 h-4 transition-colors ${wishlist ? "text-red-500 fill-red-500" : "text-gray-400"}`}
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="none"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>

                        {/* Remove */}
                        <button
                          onClick={() => setRemoved(true)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Empty state */
                <div className="p-10 flex flex-col items-center text-center fade-up">
                  <svg className="w-14 h-14 text-gray-200 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <p className="fd font-bold text-gray-400 text-lg mb-1">Your bag is empty</p>
                  <p className="text-gray-400 text-sm mb-4">Looks like you haven't added anything yet.</p>
                  <button
                    onClick={() => setRemoved(false)}
                    className="checkout-btn bg-blue-600 text-white px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT — Order Summary */}
          <div className="fade-up" style={{ animationDelay: ".1s" }}>
            <div
              className="bg-white rounded-2xl overflow-hidden sticky top-16"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}
            >
              <div className="px-5 sm:px-6 pt-5 pb-3 border-b border-gray-100">
                <h3 className="section-title text-gray-900">Order Summary</h3>
              </div>

              <div className="p-5 sm:p-6 space-y-4">
                {/* Line items */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="label-sm text-gray-500">{removed ? "0 ITEMS" : "1 ITEM"}</span>
                    <span className="fd font-bold text-gray-900">
                      ${removed ? "0.00" : (unitPrice * quantity - discount).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="label-sm text-gray-500">Delivery</span>
                    <span className="fd font-bold text-gray-900">{removed ? "—" : `$${delivery.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="label-sm text-gray-500">Sales Tax</span>
                    <span className="fd font-bold text-gray-400">—</span>
                  </div>
                  {promoApplied && !removed && (
                    <div className="flex justify-between items-center text-green-600 slide-in">
                      <span className="label-sm">Promo (KICKS10)</span>
                      <span className="fd font-bold">-$13.00</span>
                    </div>
                  )}
                </div>

                {/* Divider + Total */}
                <div className="border-t border-gray-100 pt-3">
                  <div className="flex justify-between items-center">
                    <span
                      className="fd font-black text-gray-900 text-lg"
                      style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900 }}
                    >
                      Total
                    </span>
                    <span
                      className="fd font-black text-gray-900 text-xl"
                      style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900 }}
                    >
                      {removed ? "$0.00" : `$${(itemTotal + delivery).toFixed(2)}`}
                    </span>
                  </div>
                </div>

                {/* Checkout button */}
                <button
                  onClick={handleCheckout}
                  disabled={removed}
                  className={`checkout-btn w-full py-3.5 rounded-xl transition-all text-sm ${
                    removed
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : checkoutDone
                        ? "bg-green-600 text-white"
                        : "bg-gray-900 text-white hover:bg-blue-600"
                  }`}
                >
                  {checkoutDone ? "✓ ORDER PLACED!" : "CHECKOUT"}
                </button>

                {/* Promo code */}
                <div>
                  <button
                    onClick={() => setPromoOpen(!promoOpen)}
                    className="promo-link text-blue-600 hover:underline text-sm w-full text-left"
                  >
                    {promoApplied ? "✓ Promo code applied" : "Use a promo code"}
                  </button>

                  {promoOpen && !promoApplied && (
                    <div className="slide-in mt-2 flex gap-2">
                      <input
                        type="text"
                        value={promo}
                        onChange={handlePromoChange}
                        placeholder="Enter code"
                        className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        style={{ fontFamily: "'Barlow',sans-serif" }}
                      />
                      <button
                        onClick={handleApplyPromo}
                        className="checkout-btn px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs"
                      >
                        APPLY
                      </button>
                    </div>
                  )}
                </div>

                {/* Trust badges */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {trustBadges.map((b) => (
                    <div key={b.txt} className="bg-gray-50 rounded-xl p-2 text-center">
                      <div className="text-base mb-0.5">{b.icon}</div>
                      <p className="label-sm text-gray-500" style={{ fontSize: "9px" }}>{b.txt}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── YOU MAY ALSO LIKE ── */}
        <div className="mt-12 sm:mt-16 pb-10">
          <div className="flex items-center justify-between mb-5">
            <h2
              className="fd font-black text-gray-900"
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 900,
                fontSize: "clamp(22px,5vw,34px)",
                lineHeight: 1,
              }}
            >
              You may also like
            </h2>
            <div className="flex items-center gap-2">
              <div
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center"
                style={{ boxShadow: "0 2px 8px #0001" }}
              >
                <svg viewBox="0 0 32 32" className="w-6 h-6" fill="#1f2937">
                  <path d="M16 4L4 24h8l4-7 4 7h8L16 4z" />
                </svg>
              </div>
              <button
                className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-blue-600 transition-colors"
                style={{ boxShadow: "0 2px 8px #0002" }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {related.map((p, i) => (
              <div
                key={i}
                className="product-card bg-white rounded-2xl overflow-hidden cursor-pointer"
                style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}
              >
                <div className="relative p-3 pb-2">
                  <span className="absolute top-2.5 left-2.5 z-10 fd font-bold text-xs text-white bg-blue-600 px-2 py-0.5 rounded tracking-widest uppercase">
                    {p.badge}
                  </span>
                  <div className="w-full rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <ProductThumbShoe idx={i} />
                  </div>
                </div>
                <div className="px-3 pb-3">
                  <p
                    className="fd font-bold text-gray-900 text-xs leading-tight mb-1.5"
                    style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "12px" }}
                  >
                    ADIDAS 4DFWD X PARLEY<br />RUNNING SHOES
                  </p>
                  <Stars fill={4} />
                  <button className="view-btn mt-2 w-full bg-gray-900 text-white py-2 rounded-lg flex items-center justify-between px-3 hover:bg-blue-600 transition-colors">
                    <span>VIEW PRODUCT</span>
                    <span
                      className="fd font-black text-green-400"
                      style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "13px" }}
                    >
                      {p.price}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}