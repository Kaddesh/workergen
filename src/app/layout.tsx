// app/layout.tsx
'use client';

import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import './globals.css'; // Add your global styles here
import BlackNav from './(dashboard)/dashboard/_components/navbar/blackNav';
import Navbar from './(dashboard)/dashboard/_components/navbar/header';
import Sidebar from './(dashboard)/dashboard/_components/navbar/sidebar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleMenu = () => {
    setIsMobile(!isMobile);
  };

  const closeMobile = () => {
    setIsMobile(false);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen w-full  flex-col overflow-hidden">
          {/* Sidebar */}
          <BlackNav />
          <Navbar handleMenu={handleMenu} />
          <Sidebar
            isVisible={isSidebarVisible}
            isMobile={isMobile}
            handleMenu={handleMenu}
            toggleSidebar={toggleSidebar}
            closeMobile={closeMobile}
          />

          {/* Main Content Area */}
          <div className="flex flex-col flex-grow w-full">
            <main className="p-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
