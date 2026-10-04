import React, { useState } from 'react';
import Image from 'next/image';

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'SARAH CONNOR',
    role: 'UI/UX DESIGNER',
    img: '/images/agency/team-1.png',
  },
  {
    id: 2,
    name: 'DAVID MILLER',
    role: 'REACT DEVELOPER',
    img: '/images/agency/team-2.png',
  },
  {
    id: 3,
    name: 'JESSICA ALBA',
    role: 'ART DIRECTOR',
    img: '/images/agency/team-3.png',
  },
  {
    id: 4,
    name: 'MICHAEL CHEN',
    role: 'FULLSTACK ENGINEER',
    img: '/images/agency/team-4.png',
  },
  {
    id: 5,
    name: 'STEVE THOMAS',
    role: 'WEB DEVELOPER',
    img: '/images/agency/team-5.png',
  },
  {
    id: 6,
    name: 'JAMES WILSON',
    role: 'MARKETING SPECIALIST',
    img: '/images/agency/team-6.png',
  },
];

export default function Team() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="relative z-10 w-full flex justify-center py-20 px-4 bg-transparent">
      <div className="w-full max-w-[1075px] flex flex-col items-center">
        
        {/* ================= TIÊU ĐỀ SECTION ================= */}
        <h2 className="font-sora font-bold text-3xl sm:text-4xl md:text-[50px] leading-tight text-[#1F2326] text-center mb-4">
          Our Creative <span className="text-[#1663F9]">Team</span>
        </h2>
        <p className="font-poppins text-[#81879D] text-sm sm:text-base md:text-[18px] text-center max-w-[550px] mb-14 md:mb-16">
          Flowgiri is a creative and modern theme for startups, freelancers and creatives.
        </p>

        {/* ================= LƯỚI 6 CARD THÀNH VIÊN BO TRÒN TOÀN BỘ ================= */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 justify-items-center">
          {TEAM_MEMBERS.map((member) => {
            const isHovered = hoveredId === member.id;

            return (
              <div
                key={member.id}
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}

                className={`relative w-[270px] sm:w-[290px] lg:w-[310px] h-[360px] sm:h-[390px] rounded-full overflow-hidden cursor-pointer transition-all duration-300 ${
                  isHovered
                    ? 'bg-[#1663F9] shadow-[0_20px_50px_rgba(22,99,249,0.35)]'
                    : 'bg-[#EBF2FE]'
                }`}
              >
                {/* Ảnh nhân sự căn chỉnh lấp đầy viền cong */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className={`object-cover object-top scale-105 transition-all duration-300 ${
                      isHovered ? 'opacity-25 mix-blend-luminosity' : 'opacity-100'
                    }`}
                  />
                </div>

                {/* Overlay thông tin xanh chỉ hiện khi rê chuột vào */}
                <div
                  className={`absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-6 transition-all duration-300 ${
                    isHovered
                      ? 'opacity-100 scale-100 pointer-events-auto'
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  <h4 className="font-sora font-bold text-white text-lg tracking-wider mb-1">
                    {member.name}
                  </h4>
                  <p className="font-poppins text-xs text-white/80 font-medium tracking-widest uppercase mb-6">
                    {member.role}
                  </p>

                  {/* 4 Icon Mạng Xã Hội */}
                  <div className="flex items-center gap-2.5 text-white">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white hover:text-[#1663F9] flex items-center justify-center transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="text-xs font-bold">f</span>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white hover:text-[#1663F9] flex items-center justify-center transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white hover:text-[#1663F9] flex items-center justify-center transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="text-[11px] font-bold">in</span>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white hover:text-[#1663F9] flex items-center justify-center transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="text-xs">@</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}