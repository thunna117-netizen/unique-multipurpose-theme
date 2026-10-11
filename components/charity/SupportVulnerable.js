import React from 'react';
import Image from 'next/image';

const IMPACT_POINTS = [
    '500m liters of water provided through communities',
    '4000+ house built for the poor people',
    '700+ school built for those childrens',
];

export default function SupportVulnerable() {
    return (
        <section className="w-full bg-white py-12 sm:py-16 md:py-24 px-4 flex flex-col items-center overflow-hidden">
            <div className="w-full max-w-[1170px] mx-auto flex flex-col items-center">

                {/* 1. TIÊU ĐỀ LỚN TRÊN CÙNG */}
                <h2 className="font-sora font-bold text-[26px] xs:text-[30px] sm:text-[40px] md:text-[50px] leading-[1.25] text-[#1F2326] text-center max-w-[680px] mb-10 sm:mb-16 md:mb-[90px] px-2">
                    You can Help lots of people{' '}
                    <span className="text-[#1663F9]">helping</span> others.
                </h2>

                {/* 2. KHỐI NỘI DUNG 2 CỘT  */}
                <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-[60px]">

                    {/* HÌNH ẢNH CARD UI  */}
                    <div className="w-full flex items-center justify-center order-1 lg:order-2 px-0 sm:px-2">
                        <div className="relative w-full max-w-[390px] sm:max-w-[500px] lg:max-w-[580px] flex items-center justify-center">
                            <Image
                                src="/images/charity/vulnerable-card.png"
                                alt="We are here to support the vulnerable"
                                width={580}
                                height={520}
                                unoptimized
                                priority

                                className="w-full h-auto max-h-[380px] sm:max-h-[500px] lg:max-h-[560px] object-contain scale-[1.08] sm:scale-100"
                            />
                        </div>
                    </div>

                    {/* KHỐI CHỮ & 3 CHECKLIST */}
                    <div className="w-full max-w-[512px] flex flex-col items-start order-2 lg:order-1 px-2 sm:px-0">
                        <h3 className="w-full font-sora font-bold text-[24px] xs:text-[28px] sm:text-[38px] md:text-[46px] leading-[1.2] text-[#1F2326] mb-4 sm:mb-6">
                            We are here to support the vulnerable.
                        </h3>

                        <p className="w-full font-poppins font-normal sm:font-medium text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-[#81879D] mb-6 sm:mb-10">
                            Transform the way you work with one place for everyone and everything you need to get stuff done.
                        </p>

                        <div className="w-full flex flex-col gap-4 sm:gap-5">
                            {IMPACT_POINTS.map((point, index) => (
                                <div key={index} className="w-full flex items-start gap-3 sm:gap-4">

                                    <span className="w-5 h-5 rounded-full bg-[#FC5230] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                        <svg className="w-2.5 h-2" viewBox="0 0 12 10" fill="none">
                                            <path
                                                d="M1.5 5L4.5 8L10.5 2"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>

                                    {/* Text nội dung */}
                                    <span
                                        className="font-medium text-[14px] sm:text-[16px] md:text-[17px] leading-[22px] sm:leading-[26px] text-[#383F4E]"
                                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                                    >
                                        {point}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}