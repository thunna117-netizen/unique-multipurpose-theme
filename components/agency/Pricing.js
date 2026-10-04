import React, { useState } from 'react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' hoặc 'yearly'

  return (
    <section className="w-full bg-[#F2F3F8] py-[70px] lg:py-[90px] flex justify-center px-4">
      <div className="w-full max-w-[1170px] flex flex-col items-center">

        <h2 className="font-sora font-bold text-[32px] sm:text-[42px] md:text-[50px] leading-[42px] sm:leading-[52px] md:leading-[60px] text-[#1F2326] text-center max-w-[679px] mb-8">
          Find the plan that fits your{' '}
          <span className="text-[#1663F9]">budget</span>
        </h2>

        {/* Cụm Toggle Monthly / Yearly (Group 1000005606) */}
        <div className="flex items-center p-1 bg-[#F8F8F8] rounded-[52px] gap-2 mb-12 shadow-sm">
          <button
            type="button"
            onClick={() => setBillingCycle('monthly')}
            className={`w-[110px] h-[40px] rounded-[52px] font-poppins font-normal text-[14px] leading-[20px] transition-all duration-200 ${
              billingCycle === 'monthly'
                ? 'bg-[#1663F9] text-white shadow-sm'
                : 'bg-transparent text-[#81879D] hover:text-[#1F2326]'
            }`}
          >
            Monthly
          </button>

          <button
            type="button"
            onClick={() => setBillingCycle('yearly')}
            className={`w-[110px] h-[40px] rounded-[52px] font-poppins font-normal text-[14px] leading-[20px] transition-all duration-200 ${
              billingCycle === 'yearly'
                ? 'bg-[#1663F9] text-white shadow-sm'
                : 'bg-transparent text-[#81879D] hover:text-[#1F2326]'
            }`}
          >
            Yearly
          </button>
        </div>

        {/* Khối 2 Bảng giá (Group 1000014941) */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-[30px]">
          
          {/* ================= CARD 1: PRO (Rộng 730px) ================= */}
          <div className="w-full lg:w-[730px] rounded-[24px] overflow-hidden flex flex-col shadow-sm">
            {/* Nửa trên nền trắng Rectangle 8637 */}
            <div className="w-full bg-white px-8 sm:px-[42px] py-[30px] flex items-center justify-between">
              <div>
                <p className="font-poppins font-semibold text-[18px] leading-[24px] text-[#1F2326] mb-2">
                  Pro
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-sora font-bold text-[38px] sm:text-[50px] leading-[60px] text-[#1F2326]">
                    {billingCycle === 'monthly' ? '$35' : '$350'}
                  </span>
                  <span className="font-poppins font-normal text-[16px] text-[#81879D]">
                    {billingCycle === 'monthly' ? '/Per Month' : '/Per Year'}
                  </span>
                </div>
              </div>

              {/* Tag Most popular */}
              <div className="bg-[#1663F9]/10 px-4 py-2 rounded-[30px] flex items-center justify-center">
                <span className="font-poppins font-medium text-[14px] leading-[18px] text-[#1663F9]">
                  Most popular
                </span>
              </div>
            </div>

            {/* Nửa dưới nền xám tím nhạt Rectangle 8639 (#EAEDF9) */}
            <div className="w-full bg-[#EAEDF9] px-8 sm:px-[42px] py-[34px] flex flex-col justify-between min-h-[294px]">
              {/* Lưới tính năng: 2 cột */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {/* Cột trái */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="font-poppins font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#81879D]">
                      UI/UX Designer
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="font-poppins font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#81879D]">
                      Dedicated Developer
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="font-poppins font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#81879D]">
                      QA technician
                    </span>
                  </div>
                </div>

                {/* Cột phải */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="font-poppins font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#81879D]">
                      Project Manager
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="font-poppins font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#81879D]">
                      On time Support
                    </span>
                  </div>
                </div>
              </div>

              {/* Nút Buy Now Gradient */}
              <div className="mt-8">
                <button
                  type="button"
                  className="w-[140px] h-[44px] rounded-[30px] font-poppins font-medium text-[16px] text-white flex items-center justify-center transition-opacity hover:opacity-90 shadow-sm"
                  style={{
                    background:
                      'linear-gradient(90deg, #5F45D9 -11.43%, #F961D8 47.91%, #FE9E66 92.14%)',
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* ================= CARD 2: FREE (Rộng 410px) ================= */}
          <div className="w-full lg:w-[410px] rounded-[24px] overflow-hidden flex flex-col shadow-sm">
            {/* Nửa trên nền trắng */}
            <div className="w-full bg-white px-8 sm:px-[42px] py-[30px] flex items-center justify-between">
              <div>
                <p className="font-poppins font-semibold text-[18px] leading-[24px] text-[#1F2326] mb-2">
                  Pro
                </p>
                <div className="flex items-baseline">
                  <span className="font-sora font-bold text-[38px] sm:text-[50px] leading-[60px] text-[#1F2326]">
                    $0
                  </span>
                </div>
              </div>

              {/* Tag Free */}
              <div className="bg-[#1663F9]/5 px-4 py-2 rounded-[30px] flex items-center justify-center">
                <span className="font-poppins font-medium text-[14px] leading-[18px] text-[#1F2326]">
                  Free
                </span>
              </div>
            </div>

            {/* Nửa dưới nền xám tím nhạt Rectangle 8639 (#EAEDF9) */}
            <div className="w-full bg-[#EAEDF9] px-8 sm:px-[42px] py-[34px] flex flex-col justify-between min-h-[294px]">
              {/* Danh sách tính năng (1 cột) */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="font-poppins font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#81879D]">
                    UI/UX Designer
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="font-poppins font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#81879D]">
                    Dedicated Developer
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="font-poppins font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#81879D]">
                    QA technician
                  </span>
                </div>
              </div>

              {/* Nút Buy Now Viền Trắng / Tối */}
              <div className="mt-8">
                <button
                  type="button"
                  className="w-[140px] h-[44px] rounded-[30px] border border-[#1F2326]/30 bg-transparent font-poppins font-medium text-[16px] text-[#1F2326] flex items-center justify-center hover:bg-white/50 transition-colors"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <div
      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
      style={{
        background: 'linear-gradient(157.75deg, #D555C7 14.46%, #F396EA 79.18%)',
      }}
    >
      <svg
        className="w-[10px] h-[10px] text-white"
        viewBox="0 0 12 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="1.5 5 4.5 8 10.5 2" />
      </svg>
    </div>
  );
}