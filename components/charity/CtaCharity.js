import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CtaCharity() {
  return (
    <section className="w-full bg-white pt-6 pb-16 md:pb-28 px-4 flex flex-col items-center overflow-hidden">

      <div
        className="relative w-full max-w-[327px] h-[567px] lg:max-w-[1170px] lg:h-[483px] rounded-[20px] overflow-hidden flex flex-col lg:flex-row items-center justify-between shadow-[0_20px_60px_rgba(92,112,244,0.22)]"
        style={{
          background: 'linear-gradient(243.41deg, #9A40E4 7.82%, #5C70F4 74.31%)',
        }}
      >
        {/* 1. HÌNH ẢNH NHÓM NGƯỜI  */}

        <div className="absolute bottom-0 left-0 w-full lg:w-[625px] h-[168px] lg:h-[440px] flex items-end justify-center lg:justify-start pointer-events-none z-0">
          <Image
            src="/images/charity/volunteer-cta.png"
            alt="Become a Volunteer of our charity"
            width={625}
            height={440}
            unoptimized
            priority
            className="w-full lg:w-auto h-full object-contain object-bottom lg:object-left-bottom"
          />
        </div>

        {/* 2. KHỐI NỘI DUNG VĂN BẢN & NÚT BẤM*/}

        <div className="relative z-10 w-full lg:w-[486px] lg:ml-[657px] flex flex-col items-center lg:items-start text-center lg:text-left pt-[36px] lg:pt-[78px] px-6 lg:px-0 text-white">

          <h2 className="w-[241px] lg:w-[413px] font-sora font-semibold lg:font-bold text-[20px] lg:text-[34px] leading-[28px] lg:leading-[42px] text-white mb-6 lg:mb-[34px]">
            Become a Volunteer of our charity
          </h2>

          <p className="w-[267px] lg:w-[486px] font-poppins font-normal text-[16px] leading-[24px] text-white opacity-70 lg:opacity-100 mb-6 lg:mb-[44px]">
            We believe your project is only as good as the team that&apos;s working on it. When we work with you and your team, we know there are no shortcuts to success. Your research is done; now lets get down to business!
          </p>

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

      </div>
    </section>
  );
}