import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import React from 'react';
import { cn } from '../lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section
      className={cn(
        inter.className,
        'flex min-h-screen items-center justify-center overflow-hidden  ',
      )} 
    >
      <div className="flex-auto">{children}</div>
    </section>
  );
}