
import Image from "next/image";
import { ReactElement } from "react";

interface Review {
  id: number;
  title: string;
  text: string;
  rating: number;
  avatar: null;
  initials: string;
  avatarBg: string;
  shoeImg: string;
  avater: string;
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

// ── Constants ─────────────────────────────────────────────────────────────
const reviews: Review[] = [
  { id: 1, title: "Good Quality", text: "I highly recommend shopping from kicks", rating: 5.0, avatar: null, initials: "JD", avatarBg: "bg-orange-400", avater:"/image/review/reviewAvater.jpg", shoeImg: "/image/review/review.jpg" },
  { id: 2, title: "Good Quality", text: "I highly recommend shopping from kicks", rating: 5.0, avatar: null, initials: "AM", avatarBg: "bg-blue-300", avater:"/image/review/reviewAvater2.jpg", shoeImg: "/image/review/review2.jpg" },
  { id: 3, title: "Good Quality", text: "I highly recommend shopping from kicks", rating: 5.0, avatar: null, initials: "KL", avatarBg: "bg-gray-700", avater:"/image/review/reviewAvater3.jpg", shoeImg: "/image/review/review3.jpg" },
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
                  
                    return (
                        <div key={r.id} className="overflow-hidden rounded-[18px] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.07)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.13)]">
                            <div className="flex items-start gap-3 px-4 pt-4 pb-3">
                                <div className="flex-1">
                                    <h3 className="mb-1 font-['Barlow_Condensed'] text-[22px] font-semibold text-[#232321]">{r.title}</h3>
                                    <p className="mb-2 text-[14px] leading-[1.4] text-[#232321] font-normal ">{r.text}</p>
                                    <StarRating rating={r.rating} />
                                </div>
                                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full`}>
                                    <Image src={r.avater} alt={`${r.initials} avatar`} width={40} height={40} className="h-full w-full rounded-full object-cover" />
                                </div>
                            </div>
                            <div className="h-62">
                                <Image src={r.shoeImg} width={500} height={500} alt="review shoe" className="h-full w-full object-cover" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Review;