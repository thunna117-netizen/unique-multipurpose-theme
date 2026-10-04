import React from 'react';
import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className="relative z-10 w-full flex justify-center py-16 md:py-20 px-4 bg-transparent">
      <div
        className="relative w-full max-w-[1170px] min-h-[483px] rounded-[20px] px-6 sm:px-12 py-16 md:py-[80px] flex flex-col items-center justify-center text-center overflow-hidden shadow-[0_20px_60px_rgba(92,112,244,0.25)]"
        style={{
          background: 'linear-gradient(243.41deg, #9A40E4 7.82%, #5C70F4 74.31%)',
        }}
      >
        {/* ================= 1. TIÊU ĐỀ H3  ================= */}
        <h3 className="font-sora font-bold text-2xl sm:text-3xl md:text-[34px] leading-snug md:leading-[42px] text-white max-w-[858px] mb-6">
          We’ll take the time to understand your goals and then help you create a website that’s exactly what you envisioned.
        </h3>

        {/* ================= 2. ĐOẠN MÔ TẢ  ================= */}
        <p className="font-poppins font-normal text-sm sm:text-base md:text-[16px] leading-[24px] text-white max-w-[692px] mb-10">
          We believe your project is only as good as the team that’s working on it. When we work with you and your team, we know there are no shortcuts to success. Your research is done; now lets get down to business!
        </p>

        {/* ================= 3. NÚT CTA  ================= */}
        <Link
          href="/contact"
          className="w-[205px] h-[60px] bg-white rounded-[10px] flex items-center justify-center gap-[18px] shadow-md hover:bg-gray-50 hover:scale-105 transition-all duration-200 group shrink-0"
        >
          <span className="font-poppins font-semibold text-[18px] leading-[24px] text-[#1F2326]">
            Join the team
          </span>

          <div className="w-[28px] h-[28px] rounded-full bg-[#1663F9] flex items-center justify-center text-white shrink-0 group-hover:translate-x-0.5 transition-transform duration-200">
            <svg
              className="w-[14px] h-[14px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </Link>
      </div>
    </section>
  );
}