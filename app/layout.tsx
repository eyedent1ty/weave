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
        <div className="relative flex justify-center">
          <Nav />
          <main className="sm:mx-[76px] sm:max-w-[600px] w-screen h-screen bg-red-400 sm:rounded-t-3xl p-5 sm:border bg-secondary text-primary mt-14">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
