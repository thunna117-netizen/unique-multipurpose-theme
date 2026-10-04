import React from 'react';
import Header from '../components/Header';

const NFT_MENU = [
  { label: 'Discover', href: '#discover' },
  { label: 'Marketplace', hasDropdown: true },
  { label: 'Resources', hasDropdown: true },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Features', hasDropdown: true },
];

export default function NFTPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#FAFAFC] flex flex-col items-center">
      <Header
        menuItems={NFT_MENU}
        ctaText="Brows Shop"
        ctaHref="/nft/shop"
      />
    </div>
  );
}