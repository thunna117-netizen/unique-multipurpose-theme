import React from 'react';
import Image from 'next/image';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Joe Root',
    role: 'Head of Design at AMA',
    quote:
      'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
    avatar: '/images/charity/testimonial-1.png',
    avatarBg: 'bg-[#FDECE0]',
    accentColor: '#F5953A', 
    featured: false,
  },
  {
    id: 2,
    name: 'Billy Root',
    role: 'Web Designer at AMA',
    quote:
      'I recently had to jump on 10+ different calls across eight different countries to find the right.',
    avatar: '/images/charity/testimonial-2.png',
    avatarBg: 'bg-[#E3F5FD]',
    accentColor: '#29B6F6', 
    featured: true, 
  },
  {
    id: 3,
    name: 'Sarah Root',
    role: 'UI Designer at AMA',
    quote:
      'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
    avatar: '/images/charity/testimonial-3.png',
    avatarBg: 'bg-[#FDEEF2]',
    accentColor: '#FF7999', 
    featured: false,
  },
];

export default function TestimonialCharity() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-[1170px] min-h-[585px] mx-auto flex flex-col items-center justify-between">
        
        {/* 1. TIÊU ĐỀ  */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="font-sora font-bold text-[34px] sm:text-[42px] md:text-[50px] leading-[1.2] text-[#1F2326] mb-4">
            Our <span className="text-[#1663F9]">Testimonial</span>
          </h2>

          <p className="font-poppins font-normal text-[15px] md:text-[18px] leading-[28px] text-[#81879D] max-w-[650px]">
            Read and understand our testimonial and know what people say
          </p>
        </div>

        {/* 2. LƯỚI 3 THẺ TESTIMONIAL */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className={`w-full min-h-[395px] rounded-[20px] px-7 py-10 flex flex-col items-center text-center transition-all duration-300 ${
                item.featured
                  ? 'bg-white shadow-[0_25px_70px_rgba(0,0,0,0.06)] border border-transparent'
                  : 'bg-white border border-[#EFEFEF] hover:shadow-[0_25px_70px_rgba(0,0,0,0.06)] hover:border-transparent'
              }`}
            >
              <div className="relative w-[92px] h-[92px] mb-7 shrink-0">
                <div
                  className={`w-full h-full rounded-full overflow-hidden flex items-end justify-center ${item.avatarBg}`}
                >
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={92}
                    height={92}
                    unoptimized
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <span
                  className="absolute bottom-0 right-0 w-[28px] h-[28px] rounded-full text-white flex items-center justify-center shadow-sm border-2 border-white"
                  style={{ backgroundColor: item.accentColor }}
                >
                  <svg
                    className="w-3.5 h-3.5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </span>
              </div>

              <p className="font-poppins font-normal text-[15px] md:text-[16px] leading-[26px] text-[#383F4E] max-w-[300px] mb-7">
                {item.quote}
              </p>

              <div
                className="w-[110px] h-[1.5px] mb-6"
                style={{ backgroundColor: item.accentColor }}
              />

              {/* Tên và Chức vụ */}
              <div className="flex flex-col items-center">
                <h4 className="font-sora font-semibold text-[18px] leading-[26px] text-[#1F2326] mb-1">
                  {item.name}
                </h4>
                <span className="font-poppins font-normal text-[14px] leading-[22px] text-[#81879D]">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}