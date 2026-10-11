import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'; // 1. Import useRouter để lấy link trang hiện tại

export default function Header({ 
  menuItems = [],
  ctaText = 'Start a Project', 
  ctaHref = '/contact' 
}) {
  const router = useRouter(); // 2. Lấy router hiện tại
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full flex justify-center pt-6 sm:pt-[30px] px-4 sm:px-6 bg-transparent pointer-events-auto">
      <div className="w-full max-w-[1240px] h-[48px] sm:h-[60px] flex items-center justify-between">
        
        {/* 1. Logo MicPro */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logos/logomicpro.svg"
            alt="MicPro Logo"
            width={119}
            height={36}
            priority
            className="object-contain w-[100px] sm:w-[119px] h-auto"
          />
        </Link>

        {/* 2. Menu Desktop - tự thay đổi theo props truyền vào và hiển thị Active Indicator */}
        <nav className="hidden lg:flex items-center gap-[40px] font-poppins font-medium text-[16px]">
          {menuItems.map((item, index) => {
            const isActive =
              item.href === '/'
                ? router.pathname === '/'
                : item.href && router.asPath.startsWith(item.href);

            return item.hasDropdown ? (
              <div
                key={index}
                className={`relative flex items-center gap-[6px] py-1 cursor-pointer transition-colors group ${
                  isActive ? 'text-[#1663F9] font-semibold' : 'text-[#1F2326] hover:text-[#1663F9]'
                }`}
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

                {/* Gạch chân màu xanh khi active */}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#1663F9] rounded-full" />
                )}
              </div>
            ) : (
              <div key={index} className="relative flex flex-col items-center py-1">
                <Link
                  href={item.href || '#'}
                  className={`transition-colors ${
                    isActive ? 'text-[#1663F9] font-semibold' : 'text-[#1F2326] hover:text-[#1663F9]'
                  }`}
                >
                  {item.label}
                </Link>

                {/* Gạch chân màu xanh khi active */}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#1663F9] rounded-full" />
                )}
              </div>
            );
          })}
        </nav>

        {/* 3. Nút CTA Desktop */}
        <Link
          href={ctaHref}
          className="hidden sm:inline-flex items-center justify-center px-8 h-[60px] bg-[#1663F9] text-white font-poppins font-medium text-[16px] rounded-[30px] hover:bg-blue-700 transition-colors shadow-sm shrink-0"
        >
          {ctaText}
        </Link>

        {/* 4. Nút Menu 3 gạch chuẩn mẫu cho Mobile (< lg) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 text-[#1F2326] focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

      </div>

      {/* 5. Khung Menu trượt/thả xuống khi bấm 3 gạch trên Mobile */}
      {mobileMenuOpen && (
        <div className="absolute top-[75px] left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl flex flex-col gap-3 lg:hidden border border-gray-100 z-50">
          {menuItems.map((item, index) => {
            const isActive =
              item.href === '/'
                ? router.pathname === '/'
                : item.href && router.asPath.startsWith(item.href);

            return (
              <Link
                key={index}
                href={item.href || '#'}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-poppins text-[15px] py-2 px-1 border-b border-gray-100 flex items-center justify-between ${
                  isActive ? 'text-[#1663F9] font-semibold' : 'text-[#1F2326]'
                }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="9 18 15 12 9 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>
            );
          })}
          
          <Link
            href={ctaHref}
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3 bg-[#1663F9] text-white font-poppins font-medium text-[15px] rounded-full mt-2"
          >
            {ctaText}
          </Link>
        </div>
      )}
    </header>
  );
}