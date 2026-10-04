import React from 'react';
import Image from 'next/image';

const BLOG_POSTS = [
  {
    id: 1,
    title: '15 Important Usability Principles for User Interface Design',
    category: 'Design Blog',
    date: 'Jul 12, 2022',
    img: '/images/agency/blog-1.png',
  },
  {
    id: 2,
    title: '15 Important Usability Principles for User Interface Design',
    category: 'Design Blog',
    date: 'Jul 30, 2022',
    img: '/images/agency/blog-2.png',
  },
  {
    id: 3,
    title: '15 Important Usability Principles for User Interface Design',
    category: 'Design Blog',
    date: 'Jul 22, 2022',
    img: '/images/agency/blog-3.png',
  },
];

export default function BlogSection() {
  return (
    <section className="relative z-10 w-full flex justify-center py-20 px-4 bg-transparent">
      <div className="w-full max-w-[1140px] flex flex-col items-center">

        <h2 className="font-sora font-bold text-3xl sm:text-4xl md:text-[50px] leading-[60px] text-[#1F2326] text-center mb-14 md:mb-16">
          OUR Design <span className="text-[#1663F9]">BLOG</span>
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="flex flex-col">

              <div className="relative w-full h-[240px] sm:h-[260px] rounded-[20px] overflow-hidden mb-5">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center font-poppins font-medium text-[14px] text-black bg-[#FFDB8F] px-2.5 py-1 rounded-[4px]">
                  {post.category}
                </span>
                <span className="font-poppins font-normal text-[12px] text-[#81879D]">
                  {post.date}
                </span>
              </div>

              {/* Tiêu đề bài viết: Sub Heading 2 - Poppins 16px/18px */}
              <h3 className="font-poppins font-medium text-[16px] md:text-[18px] leading-[24px] text-[#1F2326]">
                {post.title}
              </h3>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}