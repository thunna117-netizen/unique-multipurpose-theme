import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SERVICES_DATA = [
  {
    title: 'Discover, Explore\nthe Product',
    iconSrc: '/logos/service-apple.svg',
  },
  {
    title: 'Product UX, Design\n& Development',
    iconSrc: '/logos/service-layers.svg',
  },
  {
    title: 'Art Direction & Brand\nStrategy',
    iconSrc: '/logos/service-grid.svg',
    highlight: true,
  },
  {
    title: 'Marketing Strategy\n& SEO Campaigns',
    iconSrc: '/logos/service-marketing.svg',
  },
];

const CLIENT_LOGOS = [
  { name: 'Slack', src: '/logos/slack.svg', width: 140, height: 35 },
  { name: 'Amazon', src: '/logos/amazon.svg', width: 130, height: 35 },
  { name: 'WooCommerce', src: '/logos/woocommerce.svg', width: 160, height: 35 },
  { name: 'MeUndies', src: '/logos/meundies.svg', width: 140, height: 35 },
  { name: 'Sitepoint', src: '/logos/sitepoint.svg', width: 140, height: 35 },
];

export default function Hero() {
  return (
    <section
      suppressHydrationWarning
      className="relative w-full bg-[#FAFAFC] overflow-hidden flex flex-col items-center pt-[140px] pb-0 px-4"
    >

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-[1500px] pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute pointer-events-none"
          style={{
            top: '281px',
            left: '-753px',
            width: '1362px',
            height: '700px',
            borderRadius: '532px',
            backgroundColor: '#51B4FA',
            filter: 'blur(160px)',
            opacity: 0.85,
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: '529px',
            left: '29px',
            width: '751px',
            height: '422px',
            borderRadius: '293px',
            backgroundColor: '#854AEB',
            filter: 'blur(160px)',
            opacity: 0.65,
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: '564px',
            left: '592px',
            width: '625px',
            height: '352px',
            borderRadius: '244px',
            backgroundColor: '#F8D997',
            filter: 'blur(150px)',
            opacity: 0.75,
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: '375px',
            left: '882px',
            width: '671px',
            height: '377px',
            borderRadius: '262px',
            backgroundColor: '#F8A6F0',
            filter: 'blur(160px)',
            opacity: 0.75,
          }}
        />
      </div>

      {/* 2. NỘI DUNG HERO */}
      <div className="relative z-10 max-w-[860px] mx-auto text-center flex flex-col items-center mb-16 md:mb-20">
        <h1 className="max-w-[807px] font-sora font-extrabold text-[36px] sm:text-[48px] md:text-[60px] leading-[44px] sm:leading-[58px] md:leading-[76px] tracking-normal text-[#1F2326] text-center mb-6">
          Build Your Dream Website with Our Skilled{' '}
          <span className="bg-gradient-to-r from-[#F961D8] via-[#bc16f9] to-[#1663F9] bg-clip-text text-transparent">
            Development
          </span>{' '}
          Team
        </h1>

        <p className="font-poppins font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#1F2326] max-w-[720px] text-center mb-8 opacity-90">
          Are you looking for a way to close all marketing, technical and customer support tasks for your company in one place
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-[24px]">
          <Link
            href="/get-started"
            className="w-[226px] h-[60px] inline-flex items-center justify-center gap-[10px] bg-[#1663F9] text-white font-poppins font-medium text-[16px] rounded-[30px] hover:bg-blue-700 transition-colors shadow-sm"
          >
            <span>Get Started</span>
            <svg
              className="w-5 h-5"
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

          <Link
            href="/pricing"
            className="w-[155px] h-[60px] inline-flex items-center justify-center bg-white/40 backdrop-blur-sm text-[#1F2326] font-poppins font-medium text-[16px] rounded-[60px] border border-[#1F2326] hover:bg-white/80 transition-colors"
          >
            Pricing
          </Link>
        </div>
      </div>

      {/* 3. KHUNG TRẮNG */}
      <div className="relative z-10 w-full max-w-[1170px] bg-white rounded-t-[30px] rounded-b-none px-6 lg:px-[48px] pt-[80px] pb-[30px] flex flex-col justify-start items-center">
        <div className="w-full max-w-[1074px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] justify-items-center">
          {SERVICES_DATA.map((srv, idx) => (
            <div
              key={idx}
              className={`w-full max-w-[246px] h-[225px] bg-white rounded-[12px] p-[30px] flex flex-col justify-between items-start border border-[#F2F3F8] transition-all duration-300 ${srv.highlight
                  ? 'shadow-[0px_20px_80px_-16px_rgba(35,35,35,0.1)]'
                  : 'hover:shadow-md'
                }`}
            >
              <div className="relative w-[88px] h-[88px] shrink-0">
                <Image
                  src={srv.iconSrc}
                  alt={srv.title.replace('\n', ' ')}
                  width={88}
                  height={88}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="font-poppins font-semibold text-[18px] leading-[28px] text-[#1F2326] whitespace-pre-line text-left">
                {srv.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col items-center text-center mt-[60px] lg:mt-[70px]">
          <h2 className="font-sora font-bold text-[30px] sm:text-[38px] md:text-[50px] leading-[40px] sm:leading-[50px] md:leading-[60px] text-[#1F2326] max-w-[810px] mb-8">
            More than <span className="text-[#1663F9]">80,000+</span> companies trust Micpro
          </h2>

          <div className="w-full flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-70 hover:opacity-100 transition-opacity">
            {CLIENT_LOGOS.map((logo, index) => (
              <div key={index} className="relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-200">
                <Image
                  src={logo.src}
                  alt={`${logo.name} Logo`}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain max-h-[36px] w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}