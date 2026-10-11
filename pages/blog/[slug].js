// pages/blog/[slug].js
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
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

// 1. Define paths for pre-rendering (SSG)
export async function getStaticPaths() {
  const paths = blogs.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false, // Return 404 if slug is not found
  };
}

// 2. Fetch data for each post corresponding to the slug
export async function getStaticProps({ params }) {
  const post = blogs.find((item) => item.slug === params.slug) || null;

  return {
    props: {
      post,
    },
  };
}

export default function BlogDetailPage({ post }) {
  if (!post) {
    return (
      <div className="w-full min-h-[50vh] flex items-center justify-center text-gray-500 font-poppins">
        Post not found.
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen bg-[#FAFAFC] overflow-hidden flex flex-col items-center">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-[1500px] pointer-events-none z-0 overflow-hidden">
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

      {/* Shared Navigation Header */}
      <Header menuItems={SUB_MENU} ctaText="Start a Project" ctaHref="/contact" />

      {/* Main Blog Post Content */}
      <article className="relative z-10 w-full max-w-[860px] mx-auto px-4 pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24 flex flex-col">
        <Link
          href="/blog"
          className="text-[#1663F9] font-medium mb-6 hover:underline inline-flex items-center gap-2 font-poppins text-sm"
        >
          ← Back to Blog
        </Link>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-[#1663F9] px-2.5 py-1 bg-blue-50 rounded-md">
            {post.category}
          </span>
          <span className="text-xs text-gray-400 font-poppins">{post.date}</span>
        </div>

        <h1 className="font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#1F2326] mb-8 leading-tight">
          {post.title}
        </h1>

        {post.image && (
          <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden mb-8 shadow-sm">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 860px) 100vw, 860px"
              className="object-cover"
            />
          </div>
        )}

        <p className="font-poppins text-lg text-gray-600 italic border-l-4 border-[#1663F9] pl-4 mb-8 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="font-poppins text-base text-[#1F2326] leading-relaxed">
          {post.content}
        </div>
      </article>
    </div>
  );
}