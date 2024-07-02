'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import type { ReactNode, Ref } from 'react';
import { forwardRef } from 'react';

interface DialogInterface {
  headerContent?: ReactNode;
  mainContent?: ReactNode;
  footerContent?: ReactNode;
  open?: boolean;
}

const Dialog = forwardRef<HTMLDialogElement, DialogInterface>(
  (
    { headerContent, mainContent, footerContent, open },
    ref: Ref<HTMLDialogElement>
  ) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = width < 700;

    return (
      <motion.dialog
        initial={{
          opacity: 0,
          transform: `${
            isMobile
              ? 'translate(0, 100%)'
              : 'translate(-50%, calc(100px - 50%))'
          }`
        }}
        animate={{
          opacity: 1,
          transform: `${
            isMobile ? 'translate(0, 0)' : 'translate(-50%, -50%)'
          }`
        }}
        open={open}
        className="fixed max-sm:h-screen max-sm:w-screen max-sm:top-0 flex flex-col justify-between mx-0 border border-border-color bg-primary text-secondary shadow-md pl-6 pt-6 pb-4 z-50 sm:w-[580px] sm:max-h-[520px] sm:rounded-3xl sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
        ref={ref}
      >
        <header className="mb-6 sm:hidden">{headerContent}</header>
        <main className="flex-1 overflow-auto overflow-x-hidden">
          {mainContent}
        </main>
        <footer className="bg-primary">{footerContent}</footer>
      </motion.dialog>
    );
  }
);

export default Dialog;
