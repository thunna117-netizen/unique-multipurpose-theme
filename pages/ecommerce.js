import React from 'react';
import Header from '../components/Header';

const ECOMMERCE_MENU = [
  { label: 'Home', href: '/' },
  { label: 'Product', hasDropdown: true },
  { label: 'New Arrival', hasDropdown: true },
  { label: 'Blog', href: '/blog' },
  { label: 'Shop', href: '/shop' },
  { label: 'Brand', hasDropdown: true },
];

export default function EcommercePage() {
  return (
    <div className="relative w-full min-h-screen bg-[#FAFAFC] flex flex-col items-center">
      <Header
        menuItems={ECOMMERCE_MENU}
        ctaText="Shop Now"
        ctaHref="/ecommerce/shop"
      />
    </div>
  );
}