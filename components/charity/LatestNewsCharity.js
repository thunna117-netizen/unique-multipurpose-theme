// components/charity/LatestNewsCharity.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NEWS_DATA = [
  {
    id: 1,
    tag: 'Donation',
    tagBg: 'bg-[#E6F6FE]',
    tagText: 'text-[#29B6F6]',
    title: 'Why Are Forest So Important For Earth?',
    image: '/images/charity/news-1.png',
    href: '/blog',
  },
  {
    id: 2,
    tag: 'Donation',
    tagBg: 'bg-[#FFF2E5]',
    tagText: 'text-[#F5953A]',
    title: 'What To Donate To A Food Bank & What To Avoid.',
    image: '/images/charity/news-2.png',
    href: '/blog',
  },
  {
    id: 3,
    tag: 'Donation',
    tagBg: 'bg-[#FFEFF3]',
    tagText: 'text-[#FF7999]',
    title: 'What To Donate To A Food Bank & What To Avoid.',
    image: '/images/charity/news-3.png',
    href: '/blog',
  },
];

export default function LatestNewsCharity() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-[1170px] min-h-[638px] mx-auto flex flex-col items-center justify-between">
        
        {/* 1. TIÊU ĐỀ CĂN GIỮA */}
        <h2 className="font-sora font-bold text-[34px] sm:text-[42px] md:text-[50px] leading-[1.2] text-[#1F2326] text-center mb-12 md:mb-16">
          Latest News &amp; <span className="text-[#1663F9]">Campaigns</span>
        </h2>

        {/* 2. LƯỚI 3 BÀI VIẾT (TAG -> TIÊU ĐỀ -> ẢNH) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-12 md:mb-16">
          {NEWS_DATA.map((item) => (
            <article
              key={item.id}
              className="w-full flex flex-col items-start group"
            >
              <span
                className={`inline-flex items-center justify-center px-4 py-1.5 rounded-[6px] font-poppins font-medium text-[13px] leading-[20px] mb-4 ${item.tagBg} ${item.tagText}`}
              >
                {item.tag}
              </span>

              <Link href={item.href} className="mb-6 block">
                <h3 className="font-sora font-semibold text-[19px] lg:text-[20px] leading-[30px] text-[#1F2326] group-hover:text-[#1663F9] transition-colors max-w-[340px]">
                  {item.title}
                </h3>
              </Link>

              <Link
                href={item.href}
                className="relative w-full h-[230px] sm:h-[240px] rounded-[12px] overflow-hidden bg-[#F3F4F8] block"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </article>
          ))}
        </div>

        {/* 3. NÚT VIEW ALL ARTICLES */}
        <Link
          href=""
          className="inline-flex items-center justify-center gap-2.5 px-8 h-[56px] bg-[#1663F9] text-white font-poppins font-medium text-[14px] tracking-wide uppercase rounded-[10px] hover:bg-blue-700 transition-colors shadow-sm"
        >
          <span>VIEW ALL ARTICLES</span>
          <svg
            className="w-4 h-4 text-white shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>

      </div>
    </section>
  );
}