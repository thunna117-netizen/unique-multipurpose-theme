import React from 'react';
import Header from '../components/Header'; 

const DENTAL_MENU = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Appointment', href: '#appointment' },
  { label: 'Facility', href: '#facility' },
  { label: 'About', href: '#about' },
  { label: 'Schedule', href: '#schedule' },
];

export default function DentalPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#FAFAFC] flex flex-col items-center">
      <Header
        menuItems={DENTAL_MENU}
        ctaText="Start a Project"
        ctaHref="/dental/contact"
      />

      <div className="w-full flex-grow flex flex-col items-center">
      </div>

    </div>
  );
}