// pages/charity.js
import React from 'react';
import Header from '../components/Header'; 
import HeroCharity from '../components/charity/HeroCharity';
import SupportVulnerable from '../components/charity/SupportVulnerable';
import TopDonors from '../components/charity/TopDonors';
import EarthBreathe from '../components/charity/EarthBreathe';
import TestimonialCharity from '../components/charity/TestimonialCharity';
import LatestNewsCharity from '../components/charity/LatestNewsCharity';
import CtaCharity from '../components/charity/CtaCharity';


const CHARITY_MENU = [
  { label: 'Home', href: '/' },
  { label: 'Services', hasDropdown: true },
  { label: 'Expertise', hasDropdown: true },
  { label: 'Cases', href: '/cases' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Company', hasDropdown: true },
];

export default function CharityPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center">
      {/* 1. Header dùng chung */}
      <Header
        menuItems={CHARITY_MENU}
        ctaText="Donate Now"
        ctaHref="/charity/donate"
      />

      <HeroCharity />

      <SupportVulnerable />
      <TopDonors />
      <EarthBreathe />
      <TestimonialCharity />
      <LatestNewsCharity />
      <CtaCharity />
    </div>
  );
}