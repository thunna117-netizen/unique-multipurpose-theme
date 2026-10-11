// pages/about.js
import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';

const SUB_MENU = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#FAFAFC] overflow-hidden flex flex-col items-center">

      {/* ================= 1. HỆ THỐNG GRADIENT CHUẨN HERO FIGMA ================= */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-[1500px] pointer-events-none z-0 overflow-hidden">
        {/* Khối 1: Xanh dương (#51B4FA) bên trái */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '180px',
            left: '-650px',
            width: '1362px',
            height: '700px',
            borderRadius: '532px',
            backgroundColor: '#51B4FA',
            filter: 'blur(160px)',
            opacity: 0.75,
          }}
        />

        {/* Khối 2: Tím (#854AEB) ở góc dưới bên trái */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '420px',
            left: '29px',
            width: '751px',
            height: '422px',
            borderRadius: '293px',
            backgroundColor: '#854AEB',
            filter: 'blur(160px)',
            opacity: 0.6,
          }}
        />

        {/* Khối 3: Vàng cam (#F8D997) ở giữa */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '480px',
            left: '520px',
            width: '625px',
            height: '352px',
            borderRadius: '244px',
            backgroundColor: '#F8D997',
            filter: 'blur(150px)',
            opacity: 0.7,
          }}
        />

        {/* Khối 4: Hồng tím (#F8A6F0) ở bên phải */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '260px',
            left: '850px',
            width: '671px',
            height: '377px',
            borderRadius: '262px',
            backgroundColor: '#F8A6F0',
            filter: 'blur(160px)',
            opacity: 0.7,
          }}
        />
      </div>

      {/* ================= 2. HEADER DÙNG CHUNG ================= */}
      <Header
        menuItems={SUB_MENU}
        ctaText="Start a Project"
        ctaHref="/contact"
      />

      {/* ================= 3. NỘI DUNG TRANG ABOUT (NỔI TRÊN NỀN z-10) ================= */}
      <section className="relative z-10 w-full flex flex-col items-center pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24 px-4">
        <div className="w-full max-w-[1170px] flex flex-col items-center">

          {/* Tiêu đề & Giới thiệu */}
          <div className="text-center max-w-[800px] mb-16">
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#1663F9] mb-3 inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
              About Our Company
            </span>
            <h1 className="font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#1F2326] mb-6 leading-tight">
              We Are Creative Agency Building Digital Products
            </h1>
            <p className="font-poppins text-gray-600 text-base md:text-lg leading-relaxed">
              MicPro delivers end-to-end web, mobile, and design solutions that empower modern brands to grow, scale, and connect with their global audience.
            </p>
          </div>

          {/* Số liệu thống kê */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { num: '80K+', label: 'Happy Clients' },
              { num: '120+', label: 'Completed Projects' },
              { num: '99%', label: 'Positive Feedback' },
              { num: '24/7', label: 'Dedicated Support' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-md border border-white/90 p-8 rounded-2xl text-center shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:bg-white transition-all">
                <span className="font-sora font-bold text-3xl md:text-4xl text-[#1663F9] block mb-2">
                  {stat.num}
                </span>
                <p className="font-poppins text-sm text-gray-500 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Sứ mệnh & Tầm nhìn */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white/85 backdrop-blur-md border border-white/90 rounded-[28px] p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-pink-500 mb-2 block">
                  Our Mission
                </span>
                <h3 className="font-sora font-bold text-2xl text-[#1F2326] mb-4">
                  Empowering Modern Businesses
                </h3>
                <p className="font-poppins text-gray-600 text-sm leading-relaxed">
                  Our mission is to bridge imagination with technical execution, creating intuitive design systems and reliable software tailored to business acceleration.
                </p>
              </div>
            </div>

            <div className="bg-white/85 backdrop-blur-md border border-white/90 rounded-[28px] p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 mb-2 block">
                  Our Vision
                </span>
                <h3 className="font-sora font-bold text-2xl text-[#1F2326] mb-4">
                  Leading the Future of Web Tech
                </h3>
                <p className="font-poppins text-gray-600 text-sm leading-relaxed">
                  We believe in standardizing clean architectures, accessible user experiences, and sustainable engineering for digital products everywhere.
                </p>
              </div>
            </div>
          </div>

          {/* Banner CTA */}
          <div
            className="w-full rounded-[30px] p-10 md:p-14 text-center text-white flex flex-col items-center shadow-[0_20px_60px_rgba(92,112,244,0.25)]"
            style={{ background: 'linear-gradient(243.41deg, #9A40E4 7.82%, #5C70F4 74.31%)' }}
          >
            <h2 className="font-sora font-bold text-2xl md:text-4xl mb-4">
              Have a project in mind? Let’s talk!
            </h2>
            <p className="font-poppins text-white/85 text-base max-w-[550px] mb-8">
              Get in touch with our expert team to discuss requirements and start building your product today.
            </p>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white text-[#1F2326] font-poppins font-semibold text-sm rounded-full hover:bg-gray-50 hover:scale-105 transition-all shadow-md"
            >
              Contact Us Now
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}