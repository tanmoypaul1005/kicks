import Image from 'next/image';
import React from 'react';


function NikeHeroSVG() {
    return (
        <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
                <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#d97706" />
                    <stop offset="100%" stopColor="#92400e" />
                </radialGradient>
            </defs>
            <rect width="400" height="260" fill="url(#bgGrad)" />
            {/* Fabric wrinkles */}
            <path d="M0 0 Q50 30 80 0 Q110 30 140 0 Q200 40 250 10 Q300 40 350 5 L400 0 L400 260 L0 260 Z" fill="#b45309" opacity="0.4" />
            <path d="M0 260 Q60 230 120 250 Q180 220 240 245 Q300 215 360 240 L400 230 L400 260 L0 260 Z" fill="#92400e" opacity="0.5" />
            {/* Big shoe */}
            <g transform="translate(60, 50) scale(1.6)">
                {/* Sole */}
                <ellipse cx="95" cy="145" rx="80" ry="14" fill="#1e293b" opacity="0.3" />
                <ellipse cx="95" cy="140" rx="78" ry="11" fill="#f1f5f9" />
                <ellipse cx="95" cy="136" rx="74" ry="8" fill="#e2e8f0" />
                {/* Main body - tan/brown Nike Air Max */}
                <path d="M25 135 Q30 100 65 85 L150 86 Q175 87 172 108 Q168 128 158 135 Z" fill="#92400e" />
                <path d="M25 135 Q22 120 28 108 Q35 95 50 90 L80 85 Q52 97 47 115 Q38 130 25 135 Z" fill="#78350f" />
                {/* Mid section lighter */}
                <path d="M65 85 L150 86 Q160 87 165 95 L60 92 Z" fill="#a16207" />
                {/* Tongue */}
                <path d="M78 85 Q90 72 108 71 Q120 71 128 80 L122 86 Q112 78 98 79 Q86 81 78 85 Z" fill="#b45309" />
                {/* Carhartt patch */}
                <rect x="80" y="86" width="28" height="20" rx="2" fill="#1c1917" />
                <text x="84" y="98" fontSize="7" fill="#f59e0b" fontFamily="monospace">CARHARTT</text>
                {/* Nike swoosh */}
                <path d="M55 125 Q80 108 105 111 Q125 113 132 120" fill="none" stroke="#d97706" strokeWidth="4" strokeLinecap="round" />
                {/* Laces */}
                <line x1="82" y1="105" x2="118" y2="103" stroke="#fef3c7" strokeWidth="2.5" opacity="0.9" />
                <line x1="80" y1="113" x2="116" y2="111" stroke="#fef3c7" strokeWidth="2.5" opacity="0.9" />
                <line x1="78" y1="121" x2="114" y2="119" stroke="#fef3c7" strokeWidth="2.5" opacity="0.9" />
                {/* AIR unit */}
                <ellipse cx="45" cy="132" rx="14" ry="6" fill="#60a5fa" opacity="0.8" />
                <text x="36" y="135" fontSize="7" fill="#fff" fontFamily="sans-serif" fontWeight="bold">AIR</text>
            </g>
        </svg>
    );
}


const HeroSection = () => {
    return (
        <div className="relative rounded-2xl overflow-hidden bg-[#b45309]" style={{ minHeight: "340px" }}>
            {/* Background SVG */}
            <div className="absolute inset-0">
                <Image src={"/heroSection.svg"} alt="" width={1300} height={900}/>
            </div>

            {/* Vertical side label */}
            <div className="absolute rounded-tr-[16px] rounded-br-[16px] left-0 top-5 bottom-0 w-6 flex items-center justify-center h-fit px-4 py-5 bg-black bg-opacity-20 z-10">
                <span className="vertical-text">Nike product of the year</span>
            </div>

            {/* Thumbnail stack - right side */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
                {[0, 1].map(i => (
                    <div key={i} className="w-16 h-16 rounded-lg overflow-hidden bg-amber-900 border-2 border-white border-opacity-30 cursor-pointer hover:border-opacity-80 transition-all">
                        <NikeHeroSVG />
                    </div>
                ))}
            </div>

            {/* Text overlay - bottom left */}
            <div className="absolute bottom-6 left-8 z-10">
                <h2 className="font-display text-white font-900 text-3xl mb-1" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "32px" }}>NIKE AIR MAX</h2>
                <p className="text-white text-opacity-90 text-xs mb-4" style={{ fontSize: "12px", opacity: 0.9 }}>Nike introducing the new air max for<br />everyone's comfort</p>
                <button className="shop-btn btn bg-blue-600 text-white px-4 py-2 rounded text-xs uppercase tracking-widest transition-colors">
                    SHOP NOW
                </button>
            </div>
        </div>
    );
};

export default HeroSection;