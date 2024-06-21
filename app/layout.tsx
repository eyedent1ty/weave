import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Nav from './components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home - Weave',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex justify-center bg-tertiary text-secondary">
          <Nav />
          <main className="sm:mx-[76px] sm:max-w-[600px] pt-2 w-screen h-screen sm:rounded-t-3xl sm:border border-navigation-icon dark:border-navigation-icon-hover bg-primary text-secondary mt-14 shadow-md">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
