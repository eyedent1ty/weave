import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import StoreProvider from './StoreProvider';

import Nav from './components/Nav';
import FloatingButton from './components/UI/FloatingButton';
import PostDialog from './components/PostDialog';
import Backdrop from './components/UI/Backdrop';

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
    <StoreProvider>
      <html lang="en">
        <body className={`${inter.className} relative`}>
          <div className="relative flex justify-center bg-tertiary text-secondary">
            <Nav />
            <main className="sm:mx-[76px] sm:max-w-[600px] pt-2 w-screen min-h-[calc(100vh)] sm:rounded-t-3xl sm:border border-border-color bg-primary text-secondary mt-14 shadow-md">
              {children}
            </main>
          </div>
          <FloatingButton />
          <PostDialog />
          <Backdrop />
        </body>
      </html>
    </StoreProvider>
  );
}
