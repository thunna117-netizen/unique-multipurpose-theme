// pages/index.js
import React from 'react';
import Header from '../components/Header'; 
import Hero from '../components/agency/Hero';      
import OurWork from '../components/agency/OurWork';
import Expertise from '../components/agency/Expertise';
import Pricing from '../components/agency/Pricing';
import Testimonial from '../components/agency/Testimonial';
import Team from '../components/agency/Team';
import BlogSection from '../components/agency/BlogSection';
import CtaBanner from '../components/agency/CtaBanner';

const AGENCY_MENU = [
  { label: 'Home', href: '/' },
  { label: 'Services', hasDropdown: true },
  { label: 'Expertise', hasDropdown: true },
  { label: 'Cases', href: '/cases' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Company', hasDropdown: true },
];

export default function AgencyPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#FDFDFE] flex flex-col items-center overflow-x-hidden">

      <Header
        menuItems={AGENCY_MENU}
        ctaText="Start a Project"
        ctaHref="/contact"
      />
      <Hero />
      <OurWork />
      <Expertise />
      <Pricing />
      <Testimonial />
      <Team />
      <BlogSection />
      <CtaBanner />
    </div>
  );
}