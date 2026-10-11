// pages/blog/index.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import blogs from '../../data/blogData.json';

const SUB_MENU = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export async function getStaticProps() {
  return {
    props: { posts: blogs },
  };
}

export default function BlogListPage({ posts }) {
  return (
    <div className="relative w-full min-h-screen bg-[#FAFAFC] overflow-hidden flex flex-col items-center">

      {/* ================= 1. HỆ THỐNG GRADIENT CHUẨN HERO FIGMA ================= */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-[1200px] pointer-events-none z-0 overflow-hidden">
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
      <Header menuItems={SUB_MENU} ctaText="Start a Project" ctaHref="/contact" />

      {/* ================= 3. BLOG CONTENT ================= */}
      <section className="relative z-10 w-full max-w-[1240px] mx-auto px-4 pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[3px] text-[#1663F9] mb-3 inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
            Our Blog
          </span>
          <h1 className="font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#1F2326] mb-4">
            Insights, Stories & Ideas
          </h1>
          <p className="font-poppins text-gray-600 text-base">
            Stay up to date with the latest UI/UX design trends and modern web architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div 
              key={post.slug} 
              className="border border-white/80 bg-white/85 backdrop-blur-md rounded-[24px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:bg-white transition-all flex flex-col group"
            >
              <div className="relative w-full h-[200px] rounded-xl overflow-hidden mb-5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-[#1663F9] px-2.5 py-1 bg-blue-50 rounded-md">
                  {post.category}
                </span>
                <span className="text-xs text-gray-400 font-poppins">{post.date}</span>
              </div>

              <h3 className="font-sora font-bold text-lg text-[#1F2326] mb-3 leading-snug group-hover:text-[#1663F9] transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-6 flex-grow font-poppins leading-relaxed">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="text-[#1663F9] font-medium text-sm inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}