import React from 'react';

const EXPERTISE_DATA = [
  {
    title: 'UI/UX Design',
    checkGradient: 'from-[#D555C7] to-[#F396EA]',
    items: [
      'High-quality motion design',
      'Thoughtful user experience design',
      'Unique user interface design for websites and apps',
      'Design concepts & strategies for MVPs',
    ],
  },
  {
    title: 'Webflow Design',
    checkGradient: 'from-[#F49235] to-[#FFB46D]',
    items: [
      'High-quality motion design',
      'Thoughtful user experience design',
      'Unique user interface design for websites and apps',
      'Design concepts & strategies for MVPs',
    ],
  },
  {
    title: 'Webflow Developer',
    checkGradient: 'from-[#6BCEFD] to-[#32A9DF]',
    items: [
      'Full-cycle development of powerful corporate websites and one-pagers',
      'Webflow integrations with third-party services and apps',
      'Migration of your designs or even ready website to Webflow CMS',
    ],
  },
  {
    title: 'Shopify Developer',
    checkGradient: 'from-[#FF7999] to-[#FFBDCC]',
    items: [
      'Cost-effective e-commerce development',
      'Reinvention of your online store with a strong tech stack',
    ],
  },
];

export default function Expertise() {
  return (
    <section className="w-full flex justify-center pb-[120px] px-4 bg-white">

      <div className="w-full max-w-[1170px] bg-[#F1F5F9] rounded-[30px] px-6 sm:px-10 lg:px-[70px] pt-[70px] pb-[80px] flex flex-col items-center">

        <h2 className="font-sora font-bold text-[32px] sm:text-[42px] md:text-[50px] leading-[42px] sm:leading-[52px] md:leading-[60px] text-[#000000] text-center mb-4">
          Explore our core <span className="text-[#1663F9]">Expertise</span>
        </h2>

        <p className="font-poppins font-normal text-[16px] md:text-[18px] leading-[26px] text-[#1F2326] max-w-[709px] text-center mb-12 opacity-90">
          We produce beautiful and engaging websites. Our team is mostly experienced in the design of stunning interfaces, e-commerce and marketing website development, ready to work with you on your project!
        </p>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[30px] justify-items-center">
          {EXPERTISE_DATA.map((card, idx) => (
            <div
              key={idx}
              className="w-full max-w-[530px] min-h-[286px] bg-white rounded-[10px] p-[30px] flex flex-col justify-start"
            >

              <h3 className="font-sora font-semibold text-[20px] leading-[28px] text-[#000000] mb-5">
                {card.title}
              </h3>

 
              <div className="w-full h-[1px] bg-[#F0F0F0] mb-6" />

              <ul className="flex flex-col gap-4">
                {card.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full bg-gradient-to-br ${card.checkGradient} flex items-center justify-center shrink-0 mt-[2px]`}
                    >
                      <svg
                        className="w-[10px] h-[10px] text-white"
                        viewBox="0 0 12 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="1.5 5 4.5 8 10.5 2" />
                      </svg>
                    </div>

                    <span className="font-poppins font-normal text-[15px] sm:text-[16px] leading-[24px] text-[#1F2326]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}