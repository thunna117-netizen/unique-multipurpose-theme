import React from 'react';
import Header from '../components/Header';

const RESTAURANT_MENU = [
    { label: 'Home', href: '/' },
    { label: 'Services', hasDropdown: true },
    { label: 'Expertise', hasDropdown: true },
    { label: 'Cases', href: '/cases' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Company', hasDropdown: true },
];

export default function RestaurantPage() {
    return (
        <div className="relative w-full min-h-screen bg-[#FAFAFC] flex flex-col items-center">
            <Header
                menuItems={RESTAURANT_MENU}
                ctaText="Order Now"
                ctaHref="/restaurant/order"
            />
        </div>
    );
}