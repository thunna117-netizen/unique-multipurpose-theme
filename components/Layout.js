import React from 'react';
import { useRouter } from 'next/router';
import Footer from './Footer';
import { FOOTER_DATA } from '../data/footerData';

export default function Layout({ children }) {
  const router = useRouter();

  const currentPath = router.pathname.replace('/', '') || 'agency';

  const footerConfig = FOOTER_DATA[currentPath] || FOOTER_DATA.agency;

  return (
    <div className="relative flex flex-col min-h-screen bg-[#FDFDFE] overflow-x-hidden">
      <main className="flex-grow w-full flex flex-col items-center">
        {children}
      </main>

      <Footer {...footerConfig} />
    </div>
  );
}