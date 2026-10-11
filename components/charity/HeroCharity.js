// components/charity/HeroCharity.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TRUST_LOGOS = [
    { name: 'Slack', src: '/logos/slack.svg', width: 120, height: 32 },
    { name: 'Amazon', src: '/logos/amazon.svg', width: 110, height: 32 },
    { name: 'WooCommerce', src: '/logos/woocommerce.svg', width: 140, height: 32 },
    { name: 'Airwallex', src: '/logos/airwallex.svg', width: 130, height: 32 },
    { name: 'Ghost', src: '/logos/ghost.svg', width: 100, height: 32 },
];

const CATEGORY_CARDS = [
    {
        title: 'Health & Shelter',
        subtitle: 'Support',
        gradient: 'linear-gradient(157.75deg, #D555C7 14.46%, #F396EA 79.18%)',
        iconSrc: '/images/charity/icon-shelter.svg',
        width: 38,
        height: 38,
    },
    {
        title: 'Food & Groceries',
        subtitle: 'Support',
        gradient: 'linear-gradient(160.02deg, #F49235 11.67%, #FFB46D 82.2%)',
        iconSrc: '/images/charity/icon-food.svg',
        width: 38,
        height: 38,
    },
    {
        title: 'Educational',
        subtitle: 'Support',
        gradient: 'linear-gradient(339.28deg, #6BCEFD 11.58%, #32A9DF 88.12%)',
        iconSrc: '/images/charity/icon-education.svg',
        width: 36,
        height: 42,
    },
    {
        title: 'Health & Insurance',
        subtitle: 'Support',
        gradient: 'linear-gradient(157.68deg, #FF7999 17.3%, #FFBDCC 82.95%)',
        iconSrc: '/images/charity/icon-health.svg',
        width: 38,
        height: 38,
    },
];

export default function HeroCharity() {
    return (
        <section
            suppressHydrationWarning
            className="relative w-full bg-[#FAFAFC] overflow-x-hidden flex flex-col items-center pt-[100px] sm:pt-[140px] pb-0"
        >
            {/* 1. NỀN GRADIENT KHÓA 1440PX */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-[1500px] pointer-events-none z-0 overflow-hidden">
                <div
                    className="absolute pointer-events-none"
                    style={{
                        top: '200px',
                        left: '-650px',
                        width: '1300px',
                        height: '750px',
                        borderRadius: '532px',
                        backgroundColor: '#51B4FA',
                        filter: 'blur(160px)',
                        opacity: 0.75,
                    }}
                />
                <div
                    className="absolute pointer-events-none"
                    style={{
                        top: '450px',
                        left: '50px',
                        width: '750px',
                        height: '420px',
                        borderRadius: '293px',
                        backgroundColor: '#854AEB',
                        filter: 'blur(160px)',
                        opacity: 0.5,
                    }}
                />
                <div
                    className="absolute pointer-events-none"
                    style={{
                        top: '250px',
                        left: '800px',
                        width: '700px',
                        height: '450px',
                        borderRadius: '262px',
                        backgroundColor: '#F8A6F0',
                        filter: 'blur(160px)',
                        opacity: 0.75,
                    }}
                />
            </div>

            {/* 2. TIÊU ĐỀ HERO & CỤM NÚT CTA */}
            <div className="relative z-10 w-full max-w-[860px] mx-auto text-center flex flex-col items-center mb-12 sm:mb-16 md:mb-20 px-4">
                <h1 className="w-full max-w-[820px] font-sora font-extrabold text-[28px] xs:text-[32px] sm:text-[48px] md:text-[58px] leading-[36px] sm:leading-[60px] md:leading-[72px] tracking-normal text-[#1F2326] text-center mb-5 sm:mb-6">
                    Fundraising Through Your Social{' '}
                    <span className="bg-gradient-to-r from-[#F961D8] via-[#854AEB] to-[#1663F9] bg-clip-text text-transparent">
                        Networks
                    </span>
                </h1>

                <p className="font-poppins font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] text-[#1F2326] max-w-[700px] text-center mb-8 opacity-90 px-2">
                    Are you looking for a way to close all marketing, technical and customer support tasks for your company in one place
                </p>

                {/* CỤM NÚT CTA: Trên 375px xếp dọc (flex-col), từ sm trở lên dàn hàng ngang (sm:flex-row) */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-[20px]">
                    {/* Nút 1: Donate Now */}
                    <Link
                        href="/charity/donate"
                        className="w-[190px] sm:w-[232px] h-[48px] sm:h-[60px] px-6 sm:px-[50px] inline-flex items-center justify-center gap-2 sm:gap-[10px] bg-[#1663F9] text-white font-poppins font-medium text-[15px] sm:text-[16px] leading-[24px] rounded-full hover:bg-blue-700 transition-colors shadow-sm"
                    >
                        <span>Donate Now</span>
                        <svg
                            className="w-4 h-4 sm:w-6 sm:h-6 text-white shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </Link>

                    {/* Nút 2: Watch Video */}
                    <button
                        type="button"
                        className="w-[190px] sm:w-[238px] h-[48px] sm:h-[60px] px-6 sm:px-[50px] inline-flex items-center justify-center gap-2 sm:gap-[10px] bg-white text-[#1F2326] font-poppins font-medium text-[15px] sm:text-[16px] leading-[24px] rounded-full shadow-sm hover:shadow-md transition-all"
                    >
                        <svg
                            className="w-4 h-4 sm:w-6 sm:h-6 text-[#1663F9] shrink-0 fill-current"
                            viewBox="0 0 24 24"
                        >
                            <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14z" />
                        </svg>
                        <span>Watch Video</span>
                    </button>
                </div>
            </div>

            {/* 3. KHUNG TRẮNG PHẲNG */}
            <div className="relative z-10 w-full bg-white pt-[50px] sm:pt-[70px] pb-[70px] sm:pb-[90px] flex flex-col items-center">
                <div className="w-full max-w-[1170px] mx-auto px-4 flex flex-col items-center">

                    {/* Tiêu đề 80,000+ & Logo đối tác */}
                    <div className="w-full flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20">
                        <h2 className="font-sora font-bold text-[24px] sm:text-[38px] md:text-[48px] leading-[32px] sm:leading-[50px] md:leading-[60px] text-[#1F2326] max-w-[810px] mb-8 sm:mb-12">
                            More than <span className="text-[#1663F9]">80,000+</span> companies trust Micpro
                        </h2>

                        <div className="w-full max-w-[1170px] flex flex-col items-center gap-[24px] sm:gap-[30px]">
                            <div className="w-full h-[1px] bg-[#EEEEEE]" />

                            <div className="w-full max-w-[1023px] min-h-[49px] flex flex-wrap items-center justify-center sm:justify-between gap-6 px-2 sm:px-4">
                                {TRUST_LOGOS.map((logo, index) => (
                                    <div
                                        key={index}
                                        className="relative flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-200"
                                    >
                                        <Image
                                            src={logo.src}
                                            alt={`${logo.name} logo`}
                                            width={logo.width}
                                            height={logo.height}
                                            className="object-contain max-h-[30px] sm:max-h-[36px] w-auto grayscale hover:grayscale-0 transition-all duration-200"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="w-full h-[1px] bg-[#EEEEEE]" />
                        </div>
                    </div>

                    {/* 4. KHỐI 4 CARDS */}
                    <div className="w-full max-w-[1074px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] justify-items-center">
                        {CATEGORY_CARDS.map((card, idx) => (
                            <div
                                key={idx}
                                className="relative w-full max-w-[280px] sm:w-[246px] pt-[40px] flex flex-col items-start group"
                            >
                                <div
                                    className="absolute top-0 left-[30px] z-20 w-[80px] h-[80px] rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.12)] group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                                    style={{ background: card.gradient }}
                                >
                                    <Image
                                        src={card.iconSrc}
                                        alt={card.title}
                                        width={card.width}
                                        height={card.height}
                                        unoptimized
                                        className="object-contain max-w-[42px] max-h-[42px]"
                                    />
                                </div>

                                <div
                                    className="relative z-10 w-full min-h-[146px] bg-white border border-[#F5F5F5] rounded-[10px] pt-[54px] pb-[22px] px-[30px] flex flex-col justify-between items-start group-hover:-translate-y-1 transition-all duration-300"
                                    style={{
                                        boxShadow: '0px 16px 60px -16px rgba(35, 35, 35, 0.06)',
                                    }}
                                >
                                    <div className="flex flex-col items-start gap-[6px]">
                                        <h3 className="font-sora font-semibold text-[20px] leading-[28px] text-[#1F2326] text-left">
                                            {card.title}
                                        </h3>
                                        <span className="font-poppins font-medium text-[16px] leading-[24px] text-[#81879D] text-left">
                                            {card.subtitle}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}