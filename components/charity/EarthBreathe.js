import React from 'react';
import Image from 'next/image';

const STATS_DATA = [
  {
    number: '254K',
    label: 'Collaborators',
    color: 'text-[#1663F9]',
  },
  {
    number: '488K',
    label: 'Companies',
    color: 'text-[#FF7999]',
  },
  {
    number: '157K',
    label: 'Human Impacted',
    color: 'text-[#29B6F6]',
  },
  {
    number: '325K',
    label: 'Assisted Communities',
    color: 'text-[#F5953A]',
  },
];

export default function EarthBreathe() {
  return (
    <section className="relative w-full bg-white py-20 md:py-28 px-4 flex flex-col items-center overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[450px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(248, 166, 240, 0.22) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 w-full max-w-[1170px] mx-auto flex flex-col items-center">

        <h2 className="font-sora font-bold text-[32px] sm:text-[42px] md:text-[50px] leading-[1.2] md:leading-[60px] text-[#1F2326] text-center max-w-[720px] mb-6">
          We&apos;re here to help our Earth{' '}
          <span className="text-[#1663F9]">breathe</span> again.
        </h2>

        <p className="font-poppins font-normal text-[15px] md:text-[16px] leading-[26px] text-[#81879D] text-center max-w-[540px] mb-14 md:mb-20">
          Voluptatem accusantium doloremque laud totam rem aperiam, eaque ipsa quae ab illoaperiam, eaque ipsa quae.
        </p>

        {/* 2. NỘI DUNG 2 CỘT: ẢNH BÊN TRÁI - THỐNG KÊ BÊN PHẢI */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[70px]">
          
          {/* CỘT TRÁI: Ảnh nhóm tình nguyện viên */}
          <div className="w-full lg:w-[570px] shrink-0 overflow-hidden">
            <Image
              src="/images/charity/earth-volunteers.png" 
              alt="Volunteers helping our Earth breathe again"
              width={570}
              height={370}
              unoptimized
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* CỘT PHẢI */}
          <div className="w-full lg:flex-1 max-w-[500px]">
            <div className="grid grid-cols-2">

              <div className="pr-6 sm:pr-12 pb-8 sm:pb-11 border-r border-b border-[#EFEFEF] flex flex-col items-start">
                <span className={`font-sora font-bold text-[32px] sm:text-[40px] leading-[1.2] mb-2 ${STATS_DATA[0].color}`}>
                  {STATS_DATA[0].number}
                </span>
                <span className="font-poppins font-normal text-[15px] sm:text-[16px] leading-[24px] text-[#81879D]">
                  {STATS_DATA[0].label}
                </span>
              </div>

              <div className="pl-6 sm:pl-12 pb-8 sm:pb-11 border-b border-[#EFEFEF] flex flex-col items-start">
                <span className={`font-sora font-bold text-[32px] sm:text-[40px] leading-[1.2] mb-2 ${STATS_DATA[1].color}`}>
                  {STATS_DATA[1].number}
                </span>
                <span className="font-poppins font-normal text-[15px] sm:text-[16px] leading-[24px] text-[#81879D]">
                  {STATS_DATA[1].label}
                </span>
              </div>

              <div className="pr-6 sm:pr-12 pt-8 sm:pt-11 border-r border-[#EFEFEF] flex flex-col items-start">
                <span className={`font-sora font-bold text-[32px] sm:text-[40px] leading-[1.2] mb-2 ${STATS_DATA[2].color}`}>
                  {STATS_DATA[2].number}
                </span>
                <span className="font-poppins font-normal text-[15px] sm:text-[16px] leading-[24px] text-[#81879D]">
                  {STATS_DATA[2].label}
                </span>
              </div>

              <div className="pl-6 sm:pl-12 pt-8 sm:pt-11 flex flex-col items-start">
                <span className={`font-sora font-bold text-[32px] sm:text-[40px] leading-[1.2] mb-2 ${STATS_DATA[3].color}`}>
                  {STATS_DATA[3].number}
                </span>
                <span className="font-poppins font-normal text-[15px] sm:text-[16px] leading-[24px] text-[#81879D]">
                  {STATS_DATA[3].label}
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}