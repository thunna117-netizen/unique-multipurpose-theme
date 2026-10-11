// pages/services.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';

const SUB_MENU = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const SERVICES_LIST = [
  {
    number: '01',
    title: 'Product UX, Design & Development',
    category: 'Design & Code',
    desc: 'Crafting user-centric UI/UX systems paired with high-performance, fully responsive modern web development.',
    features: ['Research & Wireframing', 'UI Design System', 'Full-stack Development'],
    gradient: 'from-[#1663F9] to-[#51B4FA]',
  },
  {
    number: '02',
    title: 'Art Direction & Brand Strategy',
    category: 'Branding',
    desc: 'Defining distinctive brand identities that deliver striking visual experiences and lasting market coherence.',
    features: ['Brand Identity', 'Logo & Guidelines', 'Visual Assets Creation'],
    gradient: 'from-[#9A40E4] to-[#F961D8]',
  },
  {
    number: '03',
    title: 'Marketing Strategy & SEO Campaigns',
    category: 'Growth',
    desc: 'Executing data-backed search optimization and digital campaigns to connect your brand with the right target audience.',
    features: ['Technical SEO Audit', 'Content Marketing', 'Conversion Optimization'],
    gradient: 'from-[#F49235] to-[#FF7999]',
  },
  {
    number: '04',
    title: 'Cloud Infrastructure & Maintenance',
    category: 'Engineering',
    desc: 'Ensuring 24/7 cloud stability, sub-second load times, and enterprise-grade data security for scaling platforms.',
    features: ['Serverless Deployment', 'Speed Optimization', 'Security Monitoring'],
    gradient: 'from-[#00C9A7] to-[#1663F9]',
  },
];

export default function ServicesPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#FAFAFC] flex flex-col items-center overflow-hidden">
      
      {/* ================= 1. BACKGROUND GRADIENTS ================= */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-[1500px] pointer-events-none z-0 overflow-hidden">
        {/* Blue Orb (#51B4FA) Left */}
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

        {/* Purple Orb (#854AEB) Bottom-Left */}
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

        {/* Amber-Orange Orb (#F8D997) Center */}
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

        {/* Pink-Purple Orb (#F8A6F0) Right */}
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

      {/* ================= 2. SHARED HEADER ================= */}
      <Header
        menuItems={SUB_MENU}
        ctaText="Start a Project"
        ctaHref="/contact"
      />

      {/* ================= 3. MAIN CONTENT (z-10) ================= */}
      <section className="relative z-10 w-full max-w-[1240px] mx-auto px-4 pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24">
        {/* Services Page Header */}
        <div className="text-center max-w-[760px] mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[3px] text-[#1663F9] mb-3 inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
            Our Capabilities
          </span>
          <h1 className="font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#1F2326] mb-6 leading-tight">
            High-Impact Solutions for Modern Brands
          </h1>
          <p className="font-poppins text-gray-600 text-base md:text-lg">
            We blend creative design craftsmanship with solid engineering foundations to transform your product ideas into digital realities.
          </p>
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {SERVICES_LIST.map((srv, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-[28px] border border-white/80 bg-white/80 backdrop-blur-md hover:bg-white hover:shadow-[0_20px_60px_rgba(22,99,249,0.1)] hover:border-gray-200 transition-all duration-300 flex flex-col justify-between group shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${srv.gradient} text-white font-sora font-bold text-lg flex items-center justify-center shadow-md`}>
                    {srv.number}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    {srv.category}
                  </span>
                </div>

                <h3 className="font-sora font-bold text-2xl text-[#1F2326] mb-4 group-hover:text-[#1663F9] transition-colors">
                  {srv.title}
                </h3>
                <p className="font-poppins text-gray-600 text-sm leading-relaxed mb-6">
                  {srv.desc}
                </p>

                <ul className="flex flex-col gap-2.5 mb-8">
                  {srv.features.map((item, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm text-gray-600 font-poppins">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1663F9]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1663F9] group-hover:translate-x-1 transition-transform"
              >
                Inquire about this service →
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div 
          className="w-full rounded-[30px] p-10 md:p-14 text-center text-white flex flex-col items-center shadow-[0_20px_60px_rgba(92,112,244,0.25)]"
          style={{ background: 'linear-gradient(243.41deg, #9A40E4 7.82%, #5C70F4 74.31%)' }}
        >
          <h2 className="font-sora font-bold text-2xl md:text-4xl mb-4">
            Need a custom design or engineering solution?
          </h2>
          <p className="font-poppins text-white/85 text-base max-w-[550px] mb-8">
            Our engineering and design team is ready to discuss your product requirements and build a scalable roadmap with you.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-white text-[#1F2326] font-poppins font-semibold text-sm rounded-full hover:bg-gray-50 hover:scale-105 transition-all shadow-md"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}