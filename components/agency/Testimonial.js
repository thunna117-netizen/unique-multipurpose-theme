import React from 'react';
import Image from 'next/image';

export default function Testimonial() {
  return (
    <section className="relative z-10 w-full flex justify-center py-16 md:py-20 px-4 bg-transparent">
      <div className="w-full max-w-[1170px] flex flex-col items-center gap-[40px]">

        <div
          className="relative w-full min-h-[331px] rounded-[20px] px-8 sm:px-12 md:px-[60px] py-10 md:py-[45px] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 shadow-[0_20px_50px_rgba(63,86,238,0.2)] overflow-hidden"
          style={{
            background: 'linear-gradient(90.47deg, #3F56EE 10.5%, #5094FA 102.82%)',
          }}
        >
          {/* CỘT TRÁI: Dấu ngoặc kép & Nội dung nhận xét */}
          <div className="flex-1 flex items-start gap-6 md:gap-8 max-w-[780px]">
            <div className="shrink-0 text-[#7B8CF9] mt-1">
              <svg width="40" height="34" viewBox="0 0 40 34" fill="currentColor">
                <path d="M0 20.4C0 8.8 8 1.6 18.4 0L19.2 4.8C12 6.4 8 10.8 7.6 16.4H17.6V34H0V20.4ZM21.6 20.4C21.6 8.8 29.6 1.6 40 0L40.8 4.8C33.6 6.4 29.6 10.8 29.2 16.4H39.2V34H21.6V20.4Z" />
              </svg>
            </div>

            <p className="font-poppins font-normal text-base md:text-[20px] leading-relaxed md:leading-[28px] text-white/70">
              Internal stakeholders were happy with the final product. The team was able to communicate their progress clearly and concisely. They took the initiative and executed the project without much supervision Internal stakeholders were happy with the final product. The team was able to communicate their progress clearly and concisely. They took the initiative and executed the project without much supervision
            </p>
          </div>

          <div className="hidden md:block w-[1px] h-[237px] bg-[#D9D9D9]/30 mx-8 lg:mx-12 shrink-0" />

          {/* CỘT PHẢI: Avatar & Thông tin tác giả (Frame 523: Rộng 152px, Gap 24px) */}
          <div className="w-[152px] flex flex-col items-center text-center gap-6 shrink-0">
            <div className="relative w-[85px] h-[85px] rounded-full overflow-hidden bg-[#B7CEFF] shrink-0 border-2 border-white/20">
              <Image
                src="/images/agency/avatar-user.png" 
                alt="Mitchell Marsh"
                fill
                sizes="85px"
                className="object-cover object-top"
              />
            </div>

            {/* Tên & Chức vụ  */}
            <div className="flex flex-col items-center gap-[6px]">
              <h5 className="font-sora font-semibold text-[20px] leading-[28px] text-white whitespace-nowrap">
                Mitchell Marsh
              </h5>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-white whitespace-nowrap">
                UI/UX Designer
              </p>
            </div>
          </div>
        </div>

        {/* 5 CHẤM TRÒN CHUYỂN SLIDE  */}
        <div className="flex items-center gap-[15px]">
          <span className="w-3 h-3 rounded-full bg-[#DFE4FB] cursor-pointer hover:bg-[#1663F9] transition-colors" />
          <span className="w-3 h-3 rounded-full bg-[#DFE4FB] cursor-pointer hover:bg-[#1663F9] transition-colors" />
          <span className="w-3 h-3 rounded-full bg-[#1663F9] shadow-sm cursor-pointer" />
          <span className="w-3 h-3 rounded-full bg-[#DFE4FB] cursor-pointer hover:bg-[#1663F9] transition-colors" />
          <span className="w-3 h-3 rounded-full bg-[#DFE4FB] cursor-pointer hover:bg-[#1663F9] transition-colors" />
        </div>

      </div>
    </section>
  );
}