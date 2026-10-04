import React from 'react';
import Header from '../components/Header';

const EDUCATION_MENU = [
  { label: 'Home', href: '/' },
  { label: 'Course', hasDropdown: true },
  { label: 'Mentor', hasDropdown: true },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Program', hasDropdown: true },
];

export default function EducationPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#FAFAFC] flex flex-col items-center">
      <Header
        menuItems={EDUCATION_MENU}
        ctaText="Sign Up"
        ctaHref="/education/signup"
      />
    </div>
  );
}