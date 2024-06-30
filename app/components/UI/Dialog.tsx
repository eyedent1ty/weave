import type { FC, ReactNode } from 'react';

interface DialogInterface {
  mainContent?: ReactNode;
  footerContent?: ReactNode;
}

const Dialog: FC<DialogInterface> = ({ mainContent, footerContent }) => {
  return (
    <dialog
      open
      className="flex flex-col justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-screen max-h-[520px] mx-0 border border-border-color bg-primary text-secondary shadow-md rounded-3xl pl-6 pt-6 pb-4"
    >
      <main className="flex-1 overflow-y-scroll overflow-x-hidden">{mainContent}</main>
      <footer className="h-[84px] mr-6 bg-primary">{footerContent}</footer>
    </dialog>
  );
};

export default Dialog;
