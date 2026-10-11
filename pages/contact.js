// pages/contact.js
import React, { useState } from 'react';
import Header from '../components/Header';

const SUB_MENU = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <div className="relative w-full min-h-screen bg-[#FAFAFC] overflow-hidden flex flex-col items-center">

      {/* ================= 1. HỆ THỐNG GRADIENT CHUẨN HERO FIGMA ================= */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-[1500px] pointer-events-none z-0 overflow-hidden">
        {/* Khối Xanh (#51B4FA) bên trái */}
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

        {/* Khối Tím (#854AEB) ở góc dưới bên trái */}
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

        {/* Khối Vàng cam (#F8D997) ở giữa */}
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

        {/* Khối Hồng tím (#F8A6F0) ở bên phải */}
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
      <Header menuItems={SUB_MENU} ctaText="Start a Project" ctaHref="/contact" />

      {/* ================= 3. NỘI DUNG CONTACT ================= */}
      <section className="relative z-10 w-full max-w-[1240px] mx-auto px-4 pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[3px] text-[#1663F9] mb-3 inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
            Contact Us
          </span>
          <h1 className="font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#1F2326] mb-4">
            Get in Touch with Our Team
          </h1>
          <p className="font-poppins text-gray-600 text-base">
            Have a question or want to work together? Leave us a message and we’ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Cột trái: Thông tin liên hệ (kính mờ sang trọng) */}
          <div className="lg:col-span-5 bg-white/70 backdrop-blur-md p-8 sm:p-10 rounded-[28px] border border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col gap-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1663F9] mb-1 block">Visit Us</span>
              <h3 className="font-sora font-bold text-xl text-[#1F2326] mb-2">Our Office</h3>
              <p className="font-poppins text-gray-600 text-sm leading-relaxed">
                123 Innovation Avenue, Tech District, Suite 400<br />Ho Chi Minh City, Vietnam
              </p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1663F9] mb-1 block">Direct Contact</span>
              <h3 className="font-sora font-bold text-xl text-[#1F2326] mb-2">Email & Phone</h3>
              <p className="font-poppins text-gray-600 text-sm leading-relaxed">
                support@micpro.com<br />+84 (028) 1234 5678
              </p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1663F9] mb-1 block">Availability</span>
              <h3 className="font-sora font-bold text-xl text-[#1F2326] mb-2">Working Hours</h3>
              <p className="font-poppins text-gray-600 text-sm leading-relaxed">
                Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday - Sunday: Closed
              </p>
            </div>
          </div>

          {/* Cột phải: Form gửi tin nhắn */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-md p-8 sm:p-10 rounded-[28px] border border-white/80 shadow-[0_15px_40px_rgba(0,0,0,0.04)]">
            {isSubmitted && (
              <div className="mb-6 p-4 rounded-xl bg-green-50 text-green-700 text-sm font-medium border border-green-200">
                ✓ Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công.
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-poppins text-xs font-semibold text-[#1F2326] uppercase mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-[52px] bg-white border border-gray-200 rounded-xl px-4 text-sm font-poppins focus:outline-none focus:border-[#1663F9] transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-poppins text-xs font-semibold text-[#1F2326] uppercase mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-[52px] bg-white border border-gray-200 rounded-xl px-4 text-sm font-poppins focus:outline-none focus:border-[#1663F9] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block font-poppins text-xs font-semibold text-[#1F2326] uppercase mb-2">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full h-[52px] bg-white border border-gray-200 rounded-xl px-4 text-sm font-poppins focus:outline-none focus:border-[#1663F9] transition-colors"
                />
              </div>
              <div>
                <label className="block font-poppins text-xs font-semibold text-[#1F2326] uppercase mb-2">Message</label>
                <textarea
                  rows="5"
                  required
                  placeholder="Tell us more about your ideas..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm font-poppins focus:outline-none focus:border-[#1663F9] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 h-[54px] bg-[#1663F9] text-white font-poppins font-medium text-base rounded-full hover:bg-blue-700 transition-colors self-start shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}