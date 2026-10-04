import React from 'react';
import Header from '../components/Header';

const AI_MENU = [
    { label: 'Chat', href: '#chat' },
    { label: 'Use Cases', hasDropdown: true },
    { label: 'Resources', hasDropdown: true },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Features', hasDropdown: true },
];



export default function AIPage() {
    return (
        <div className="relative w-full min-h-screen bg-[#FAFAFC] flex flex-col items-center">
            <Header
                menuItems={AI_MENU}
                ctaText="Get Started free"
                ctaHref="/ai/get-started"
            />
  
        </div>
    );
}