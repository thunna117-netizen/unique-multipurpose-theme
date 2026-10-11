import React from 'react';
import Image from 'next/image';

const DONORS_DATA = [
  {
    id: 1,
    name: 'Micle James',
    amount: '$1,225.00',
    avatar: '/images/charity/donor-1.png',
    bgAvatar: 'bg-[#FFB951]',
    featured: false,
  },
  {
    id: 2,
    name: 'Micle James',
    amount: '$1,225.00',
    avatar: '/images/charity/donor-2.png',
    bgAvatar: 'bg-[#E9ECF2]',
    featured: false, 
  },
  {
    id: 3,
    name: 'Micle James',
    amount: '$1,225.00',
    avatar: '/images/charity/donor-3.png',
    bgAvatar: 'bg-[#E4E7EC]',
    featured: false,
  },
  {
    id: 4,
    name: 'Micle James',
    amount: '$1,225.00',
    avatar: '/images/charity/donor-4.png',
    bgAvatar: 'bg-[#E4E7EC]',
    featured: false,
  },
  {
    id: 5,
    name: 'Micle James',
    amount: '$1,225.00',
    avatar: '/images/charity/donor-5.png',
    bgAvatar: 'bg-[#E4E7EC]',
    featured: false,
  },
  {
    id: 6,
    name: 'Micle James',
    amount: '$1,225.00',
    avatar: '/images/charity/donor-6.png',
    bgAvatar: 'bg-[#E4E7EC]',
    featured: false,
  },
];

export default function TopDonors() {
  return (
    <section className="relative w-full flex flex-col items-center overflow-hidden">
      <div className="w-full bg-white h-[180px] sm:h-[260px] md:h-[290px]" />

      <div className="w-full bg-[#F3F4F8] pb-20 md:pb-28 px-4 flex flex-col items-center">
        <div className="w-full max-w-[1170px] mx-auto flex flex-col items-center">
          
          {/* 1. KHỐI VIDEO BANNER  */}
          <div className="relative w-full max-w-[1170px] h-[260px] sm:h-[420px] md:h-[574px] -mt-[180px] sm:-mt-[260px] md:-mt-[290px] rounded-[20px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] mb-16 md:mb-24 group">
            <Image
              src="/images/charity/video-banner.png" 
              alt="Charity Donation Video"
              width={1170}
              height={574}
              unoptimized
              className="w-full h-full object-cover"
              priority
            />

            
          </div>

          {/* 2. TIÊU ĐỀ TOP DONORS */}
          <h2 className="font-sora font-bold text-[34px] sm:text-[42px] md:text-[50px] leading-[1.2] text-[#1F2326] text-center mb-12 md:mb-14">
            Top <span className="text-[#1663F9]">Donors</span>
          </h2>

          {/* 3. LƯỚI 6 THẺ NHÀ TÀI TRỢ  */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[30px]">
            {DONORS_DATA.map((donor) => (
              <div
                key={donor.id}
                className={`w-full min-h-[106px] rounded-[12px] px-6 py-5 flex items-center justify-between transition-all duration-300 ${
                  donor.featured
                    ? 'bg-white shadow-[0_15px_45px_rgba(0,0,0,0.05)] border border-transparent'
                    : 'bg-transparent border border-[#E4E7EE] hover:bg-white hover:shadow-[0_15px_45px_rgba(0,0,0,0.05)] hover:border-transparent'
                }`}
              >
                {/* Cụm bên trái: Avatar + Tên & Số tiền */}
                <div className="flex items-center gap-4">
                  <div
                    className={`relative w-[58px] h-[58px] rounded-full overflow-hidden shrink-0 ${donor.bgAvatar}`}
                  >
                    <Image
                      src={donor.avatar}
                      alt={donor.name}
                      fill
                      unoptimized
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Tên và Số tiền */}
                  <div className="flex flex-col items-start gap-1">
                    <h4 className="font-sora font-semibold text-[18px] leading-[24px] text-[#1F2326]">
                      {donor.name}
                    </h4>
                    <span className="font-poppins font-normal text-[15px] leading-[22px] text-[#81879D]">
                      {donor.amount}
                    </span>
                  </div>
                </div>

                {/* Cụm bên phải: Vòng tròn số thứ tự màu cam */}
                <span className="w-[26px] h-[26px] rounded-full bg-[#F59E42] text-white font-poppins font-semibold text-[13px] flex items-center justify-center shrink-0">
                  {donor.id}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}