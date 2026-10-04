import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer({
  brandInfo = {
    showLogo: true,
    desc: 'he new allocation will help expand response to cover those.',
    contact: null,
    showSocialsHere: false,
  },
  columns = [],
  showSubscribe = false,
  showRightSocials = false,
  showEcommerceBottom = false,
  isCharityLayout = false,
  isSportsLayout = false,
  isEcommerceLayout = false,
  isEducationLayout = false,
  isAiLayout = false,
  isNftLayout = false,
  isEventLayout = false, 
  subFooterLinks = [
    { label: 'Platform', href: '#' },
    { label: 'Products', href: '#' },
    { label: 'Resources', href: '#' },
  ],
}) {
  // 1. Xác định độ rộng container chuẩn theo từng theme:
  let containerWidthClass = 'max-w-[1170px]';
  let columnGapClass = 'lg:gap-[120px]';

  if (isEventLayout) {
    containerWidthClass = 'max-w-[975px]';
    columnGapClass = 'lg:gap-[80px]';
  } else if (isNftLayout) {
    containerWidthClass = 'max-w-[961px]';
    columnGapClass = 'lg:gap-[120px]';
  } else if (!brandInfo?.showLogo || isAiLayout || isEducationLayout) {
    containerWidthClass = 'max-w-[1079px]';
    columnGapClass = 'lg:gap-[120px]';
  }

  const isFiveColNoLogo = !brandInfo?.showLogo || isAiLayout || isEducationLayout || isNftLayout || isEventLayout;

  return (
    <footer className="w-full bg-white border-t border-[#F0F0F0] flex flex-col items-center">
      
      {/* =================  NỘI DUNG CHÍNH  ================= */}
      <div className={`w-full ${containerWidthClass} mx-auto px-4 sm:px-6 lg:px-0 pt-[80px] pb-[60px] flex flex-col`}>
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-10">

          {/* CỘT 1: LOGO & BRAND (NẾU CÓ) */}
          {brandInfo?.showLogo && (
            <div className="w-full lg:w-[240px] flex flex-col items-start shrink-0">
              <Link href="/" className="flex items-center gap-[10px] mb-6">
                <Image
                  src="/logos/logomicpro.svg"
                  alt="MicPro Logo"
                  width={119}
                  height={36}
                  className="object-contain"
                />
              </Link>

              {brandInfo.desc && (
                <p className="font-poppins font-normal text-[15px] leading-[24px] text-[#81879D] mb-6 max-w-[220px]">
                  {brandInfo.desc}
                </p>
              )}

              {brandInfo.contact && (
                <div className="flex flex-col gap-2 font-poppins text-[15px] leading-[22px] text-[#81879D] mb-6">
                  <p>{brandInfo.contact.phone}</p>
                  <p>{brandInfo.contact.email}</p>
                </div>
              )}

              {brandInfo.showSocialsHere && <SocialIcons />}
            </div>
          )}

          {/* CÁC CỘT LIÊN KẾT */}
          <div
            className={`w-full ${
              isFiveColNoLogo
                ? `flex flex-wrap lg:flex-nowrap items-start justify-start gap-8 ${columnGapClass}`
                : 'flex-1 flex flex-wrap sm:flex-nowrap justify-between gap-6 lg:px-8'
            }`}
          >
            {columns.map((col, idx) => (
              <div key={idx} className="flex flex-col shrink-0">
                <h4 className="font-poppins font-medium text-[16px] leading-[24px] text-[#1F2326] mb-6 whitespace-nowrap">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-[12px] font-poppins font-normal text-[14px] leading-[20px] text-[#81879D]">
                  {col.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="h-[20px] flex items-center">
                      <Link
                        href={link.href || '#'}
                        className="hover:text-[#1663F9] transition-colors whitespace-nowrap"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CỘT PHẢI CỦA CHARITY */}
          {showRightSocials && (
            <div className="shrink-0 flex items-start pt-1">
              <SocialIcons />
            </div>
          )}

          {/* CỘT SUBSCRIBE (AGENCY & DENTAL) */}
          {showSubscribe && (
            <div className="w-full lg:w-[250px] flex flex-col items-start shrink-0">
              <h4 className="font-poppins font-medium text-[16px] leading-[24px] text-[#1F2326] mb-6">
                Subscribe
              </h4>
              <form onSubmit={(e) => e.preventDefault()} className="relative w-full h-[45px] mb-6">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full h-full border border-[#E5E7EB] rounded-[8px] pl-4 pr-12 font-poppins text-[13px] text-[#1F2326] placeholder-[#81879D] outline-none focus:border-[#7751F7] transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Submit email"
                  className="absolute right-0 top-0 w-[45px] h-[45px] bg-[#7751F7] rounded-r-[8px] flex items-center justify-center hover:bg-[#633ee3] transition-colors"
                >
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </form>
              <div className="flex flex-col gap-1 font-inter">
                <span className="font-semibold text-[15px] leading-[18px] text-[#1F2326]">8/10</span>
                <span className="font-normal text-[14px] leading-[18px] text-[#1F2326]">Overall rating</span>
                <div className="flex items-center gap-[3px] mt-1.5">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-[18px] h-[18px] text-[#FFAD0F]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg className="w-[18px] h-[18px] text-[#DCDCDC]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* HÀNG RIÊNG ECOMMERCE */}
        {showEcommerceBottom && (
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 pt-10">
            <div className="flex items-center bg-[#FDFDFE] border border-[#EAECF0] rounded-full p-1.5 w-full max-w-[420px] shadow-sm">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent pl-5 pr-2 w-full text-[14px] outline-none text-[#1F2326] placeholder-[#81879D] font-poppins"
              />
              <button
                type="button"
                className="bg-[#1663F9] text-white px-8 py-3 rounded-full text-[15px] font-medium hover:bg-blue-700 transition shrink-0 font-poppins"
              >
                Subscrive
              </button>
            </div>
            <div className="flex flex-col items-center lg:items-end gap-4">
              <SocialIcons />
              <div className="flex items-center gap-3">
                <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center hover:opacity-85 transition-opacity">
                  <Image src="/logos/google-play.svg" alt="Get it on Google Play" width={135} height={40} className="h-[36px] md:h-[40px] w-auto object-contain" />
                </Link>
                <Link href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center hover:opacity-85 transition-opacity">
                  <Image src="/logos/app-store.svg" alt="Download on the App Store" width={135} height={40} className="h-[36px] md:h-[40px] w-auto object-contain" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <hr className="w-full border-t border-[#F0F0F0] my-0" />

      {/* =================  SUB-FOOTER DƯỚI CÙNG ================= */}
      <div className={`w-full ${containerWidthClass} mx-auto px-4 sm:px-6 lg:px-0 pt-[38px] pb-10`}>
        {isEcommerceLayout || isSportsLayout ? (
          <div className="w-full flex items-center justify-center">
            <p className="font-inter font-normal text-[14px] leading-[17px] text-[#81879D] text-center tracking-[-0.01em]">
              © 2021 Besnik.com | All Rights Reserved
            </p>
          </div>
        ) : isNftLayout || isAiLayout || isEducationLayout || isEventLayout ? (
          /* EVENT, NFT, AI, EDUCATION: BẢN QUYỀN VÀ 4 ICON ĐỐI XỨNG CÂN BẰNG (KHÔNG CÓ MENU) */
          <div className="w-full flex items-center justify-between">
            <p className="font-inter font-normal text-[14px] leading-[17px] text-[#81879D] tracking-[-0.01em]">
              © 2021 Besnik.com | All Rights Reserved
            </p>
            <SocialIcons />
          </div>
        ) : isCharityLayout ? (
          <div className="w-full flex flex-col md:flex-row items-center justify-start gap-12">
            <p className="font-inter font-normal text-[14px] leading-[17px] text-[#81879D] tracking-[-0.01em]">
              © 2021 Besnik.com | All Rights Reserved
            </p>
            <nav className="flex items-center gap-[40px] font-poppins font-normal text-[12px] leading-[18px] text-[#81879D]">
              {subFooterLinks.map((item, idx) => (
                <Link key={idx} href={item.href || '#'} className="hover:text-[#1F2326] transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : (
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
            <nav className="flex items-center gap-[40px] font-poppins font-normal text-[12px] leading-[18px] text-[#81879D]">
              {subFooterLinks.map((item, idx) => (
                <Link key={idx} href={item.href || '#'} className="hover:text-[#1F2326] transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
            <p className="font-inter font-normal text-[14px] leading-[17px] text-[#81879D] text-center tracking-[-0.01em]">
              © 2021 Besnik.com | All Rights Reserved
            </p>
            {!showEcommerceBottom && !showRightSocials && !brandInfo?.showSocialsHere && (
              <SocialIcons />
            )}
          </div>
        )}
      </div>

    </footer>
  );
}

function SocialIcons() {
  return (
    <div className="flex items-center gap-[16px]">
      <Link href="#" aria-label="Facebook" className="w-[38px] h-[38px] rounded-full border border-[#E5E7EB] bg-white text-[#1877F2] flex items-center justify-center hover:shadow-sm hover:scale-105 transition-all">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" /></svg>
      </Link>
      <Link href="#" aria-label="Google Plus" className="w-[38px] h-[38px] rounded-full border border-[#E5E7EB] bg-white text-[#EA4335] flex items-center justify-center hover:shadow-sm hover:scale-105 transition-all">
        <span className="font-bold text-[13px] tracking-tighter">G+</span>
      </Link>
      <Link href="#" aria-label="Twitter" className="w-[38px] h-[38px] rounded-full border border-[#E5E7EB] bg-white text-[#1DA1F2] flex items-center justify-center hover:shadow-sm hover:scale-105 transition-all">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
      </Link>
      <Link href="#" aria-label="Dribbble" className="w-[38px] h-[38px] rounded-full border border-[#E5E7EB] bg-white text-[#EA4C89] flex items-center justify-center hover:shadow-sm hover:scale-105 transition-all">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M19.13 5.09C15.22 9.14 10 10.44 2.1 10.6" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M14.8 21.65c2.4-4.8 2.2-9.6-1.5-13.6" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M4.5 17.5c4-2 8.5-1.5 12.8.9" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
      </Link>
    </div>
  );
}