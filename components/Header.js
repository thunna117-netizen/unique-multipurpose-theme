import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header({ 
  menuItems = [],
  ctaText = 'Start a Project', 
  ctaHref = '/contact' 
}) {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full flex justify-center pt-[30px] px-4 bg-transparent pointer-events-auto">
      <div className="w-full max-w-[1240px] h-[60px] flex items-center justify-between">
        
        {/* 1. Logo MicPro */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logos/logomicpro.svg"
            alt="MicPro Logo"
            width={119}
            height={36}
            className="object-contain"
          />
        </Link>

        {/* 2. Menu tự thay đổi theo props truyền vào */}
        <nav className="hidden lg:flex items-center gap-[40px] font-poppins font-medium text-[16px] text-[#1F2326]">
          {menuItems.map((item, index) =>
            item.hasDropdown ? (
              <div
                key={index}
                className="flex items-center gap-[6px] cursor-pointer hover:text-[#1663F9] transition-colors group"
              >
                <span>{item.label}</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            ) : (
              <Link key={index} href={item.href || '#'} className="hover:text-[#1663F9] transition-colors">
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* 3. Nút CTA */}
        <Link
          href={ctaHref}
          className="hidden sm:inline-flex items-center justify-center px-8 h-[60px] bg-[#1663F9] text-white font-poppins font-medium text-[16px] rounded-[30px] hover:bg-blue-700 transition-colors shadow-sm shrink-0"
        >
          {ctaText}
        </Link>

      </div>
    </header>
  );
}