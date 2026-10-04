// components/OurWork.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PROJECTS = [
  {
    category: 'Mobile app, Weather, Software',
    title: 'Weather App UI Kit - WETHY',
    desc: 'Hello Designers! This is the video calling website landing page design concept. Video calling software is very popular nowadays.',
    image: '/images/agency/project-weather.png',
    link: '/portfolio/wethy',
    reverse: false,
    textWidth: 'max-w-[366px]',
    gap: 'lg:gap-[104px]',
  },
  {
    category: 'Web Design, Video call, Software',
    title: 'Video Calling Website - Jabber',
    desc: 'WEATHY is a modern and clean mobile app project based on the weather app. The UI Kit gives you the necessary screens for creating stunning iOS screens and applying them to any weather app.',
    image: '/images/agency/project-video-call.png',
    link: '/portfolio/jabber',
    reverse: true,
    textWidth: 'max-w-[399px]',
    gap: 'lg:gap-[71px]',
  },
  {
    category: 'Web app, Software, Car Dashbord',
    title: 'Car Dashboard UI Kit Design',
    desc: 'Motiv. is a Free Car Dashboard UI Kit Design of 20+ Free pixel-perfect screens and 60+ Components easy to use in Figma.',
    image: '/images/agency/project-car-dash.png',
    link: '/portfolio/car-dashboard',
    reverse: false,
    textWidth: 'max-w-[366px]',
    gap: 'lg:gap-[104px]',
  },
  {
    category: 'Web Design, Software',
    title: 'Video Editing Website - Revise',
    desc: 'Hello Peoples! This is the Video Editing Website landing page design concept. Video editing is an essential part of a tech user.',
    image: '/images/agency/project-video-edit.png',
    link: '/portfolio/revise',
    reverse: true,
    textWidth: 'max-w-[400px]',
    gap: 'lg:gap-[70px]',
  },
];

export default function OurWork() {
  return (
    <section className="relative z-10 w-full bg-white flex justify-center pt-[60px] lg:pt-[100px] pb-[120px] lg:pb-[140px] px-4">

      <div className="w-full max-w-[1170px] flex flex-col items-center gap-[60px] lg:gap-[100px]">

        <h2 className="font-sora font-bold text-[36px] sm:text-[44px] md:text-[50px] leading-[44px] sm:leading-[54px] md:leading-[60px] text-[#000000] text-center">
          Our Team’s <span className="text-[#1663F9]">Work</span>
        </h2>

        <div className="w-full flex flex-col gap-[80px] lg:gap-[100px]">
          {PROJECTS.map((item, index) => (
            <div
              key={index}
              className={`w-full flex flex-col ${
                item.reverse
                  ? `lg:flex-row-reverse ${item.gap}`
                  : `lg:flex-row ${item.gap}`
              } items-center justify-between gap-[40px]`}
            >

              <div
                className={`w-full ${item.textWidth} flex flex-col ${
                  item.reverse
                    ? 'items-center text-center lg:items-end lg:text-right'
                    : 'items-center text-center lg:items-start lg:text-left'
                } gap-[40px]`}
              >
                <div
                  className={`flex flex-col ${
                    item.reverse ? 'items-center lg:items-end' : 'items-center lg:items-start'
                  } gap-[30px]`}
                >
                  <div
                    className={`flex flex-col ${
                      item.reverse ? 'items-center lg:items-end' : 'items-center lg:items-start'
                    } gap-[16px]`}
                  >
                    <p className="font-poppins font-normal text-[16px] leading-[24px] text-[#81879D]">
                      {item.category}
                    </p>
                    <h3 className="font-sora font-bold text-[28px] sm:text-[34px] leading-[36px] sm:leading-[42px] text-[#1F2326]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="font-poppins font-normal text-[16px] sm:text-[18px] leading-[26px] text-[#171717]">
                    {item.desc}
                  </p>
                </div>

                {/* Nút VIEW PORTFOLIO */}
                <Link
                  href={item.link}
                  className={`group inline-flex flex-col cursor-pointer pb-2 ${
                    item.reverse ? 'items-center lg:items-end' : 'items-center lg:items-start'
                  }`}
                >
                  <span className="font-['Gramatika',sans-serif] font-medium text-[16px] sm:text-[18px] leading-[24px] text-[#171717] tracking-[10px] group-hover:text-[#1663F9] transition-colors">
                    VIEW PORTFOLIO
                  </span>
                  <div
                    className={`mt-[14px] w-[146px] h-[2px] transition-all duration-300 group-hover:w-full ${
                      item.reverse
                        ? 'bg-gradient-to-l from-[#B112F4] to-transparent'
                        : 'bg-gradient-to-r from-[#B112F4] to-transparent'
                    }`}
                  />
                </Link>
              </div>

              {/* Cột Mockup Ảnh */}
              <div className="w-full lg:w-[700px] h-[340px] sm:h-[460px] lg:h-[585px] relative rounded-[20px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}