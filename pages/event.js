import React from 'react';
import Header from '../components/Header';

const EVENT_MENU = [
  { label: 'Home', href: '/' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Speaker', href: '#speaker' },
  { label: 'Ticket', href: '#ticket' },
  { label: 'Contact', href: '#contact' },
  { label: 'Program', href: '#program' },
];

export default function EventPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#FAFAFC] flex flex-col items-center">
      <Header
        menuItems={EVENT_MENU}
        ctaText="Register"
        ctaHref="/event/register"
      />
    </div>
  );
}